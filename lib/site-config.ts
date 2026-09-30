export const siteConfig = {
  business: {
    name: 'Mawphanlur Natural Lake Guesthouse',
    eyebrow: 'A quiet stay in Meghalaya',
    tagline: "Wake up beside Meghalaya's seven lakes",
    description: 'Slow mornings, quiet hills and lakeside stays in the heart of Meghalaya’s Khasi countryside.',
    address: 'Lake, Mawphanlur, Nongstoin, Meghalaya 793119, India',
    plusCode: 'GCVJ+QQ, Mawphanlur, Meghalaya',
    mapsUrl: 'https://maps.app.goo.gl/Z2LQKNApSn9b9eoS9',
    reviewsUrl: 'https://maps.app.goo.gl/XBjvMx39FXFx1oTp8',
    rating: 4.4,
    reviewCount: 702,
  },
  images: [
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-30%20202519-wQf7Ri8OJKIDi2LWPIoi5SSlRy8lHT.png', alt: 'Cottage beside a quiet hillside path' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-30%20202338-pyMMgMXWBhCrXmFatR0nUiabG6TIQp.png', alt: 'Lake surrounded by rolling green hills' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-30%20202249-7F63toyJ726Gtm6N6C3UElhbnjod1n.png', alt: 'Cottage with lake views' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-30%20202448-apZsMGpKnEmracrezjymcqJzU1DXQU.png', alt: 'Guesthouse overlooking the lake' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-30%20202357-9VLa3aDcxjsKbP5nOhevwOq64JTxnX.png', alt: 'Mawphanlur landscape and lakes' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-30%20202704-xTT28zHdPvYOTEmla2GGLO49tm3AWG.png', alt: 'Golden sunset over the lake' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-30%20202600-yLqfIugGfiiQ9EqnQBQ4Cz4srVHD2L.png', alt: 'Red-roofed cottages in the hills' },
  ],
  distances: [
    ['Shillong', '~72 km'],
    ['Nongstoin', '~25 km'],
    ['Mairang', '~43 km'],
  ],
} as const

export type SiteConfig = typeof siteConfig
