import { NextResponse } from 'next/server'
import { z } from 'zod'

const inquirySchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  phone: z.string().trim().regex(/^\+?[0-9\s().-]{7,20}$/),
  email: z.string().trim().email().optional().or(z.literal('')),
  checkIn: z.string().date(),
  checkOut: z.string().date(),
  adults: z.coerce.number().int().min(1).max(20),
  children: z.coerce.number().int().min(0).max(20),
  roomPreference: z.string().trim().max(100).optional(),
  message: z.string().trim().max(2000).optional(),
  website: z.string().max(0).optional(),
}).superRefine((value, ctx) => {
  const today = new Date().toISOString().slice(0, 10)
  if (value.checkIn < today) ctx.addIssue({ code: 'custom', path: ['checkIn'], message: 'Check-in cannot be in the past.' })
  if (value.checkOut <= value.checkIn) ctx.addIssue({ code: 'custom', path: ['checkOut'], message: 'Check-out must be after check-in.' })
})

const recent = new Map<string, number>()

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  const last = recent.get(ip) || 0
  if (Date.now() - last < 30_000) return NextResponse.json({ success: false, message: 'Please wait before sending another enquiry.' }, { status: 429 })
  const parsed = inquirySchema.safeParse(await request.json())
  if (!parsed.success) return NextResponse.json({ success: false, message: 'Please check the highlighted fields and try again.', errors: parsed.error.flatten().fieldErrors }, { status: 400 })
  recent.set(ip, Date.now())
  const { website: _website, ...safe } = parsed.data
  console.info('[inquiry] Email delivery is not configured; sanitized enquiry received.', { fullName: safe.fullName, checkIn: safe.checkIn, checkOut: safe.checkOut, adults: safe.adults })
  return NextResponse.json({ success: false, message: "We're unable to receive enquiries at the moment. Please try again later." }, { status: 503 })
}
