'use client'

import { FormEvent, useState } from 'react'
import { ArrowDownRight, ArrowRight, CalendarDays, Check, ChevronDown, Compass, Home, Leaf, MapPin, Menu, Quote, Sparkles, X } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const navItems = [['About', 'about'], ['Stay', 'stay'], ['Experiences', 'experiences'], ['Gallery', 'gallery'], ['Location', 'location']] as const

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [enquirySent, setEnquirySent] = useState(false)

  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }

  const handleEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEnquirySent(true)
    event.currentTarget.reset()
  }

  return (
    <main className="site-shell">
      <header className="nav-wrap">
        <nav className="nav" aria-label="Main navigation">
          <button className="brand" onClick={() => go('top')} aria-label="Back to top"><span className="brand-mark"><Leaf size={16} /></span><span>Mawphanlur <em>Natural Lake Guesthouse</em></span></button>
          <div className="desktop-nav">{navItems.map(([label, id]) => <button key={id} onClick={() => go(id)}>{label}</button>)}</div>
          <button className="nav-cta" onClick={() => go('inquiry')}>Check availability <ArrowRight size={15} /></button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>
        {menuOpen && <div className="mobile-menu">{navItems.map(([label, id]) => <button key={id} onClick={() => go(id)}>{label}<ArrowRight size={16} /></button>)}<button className="mobile-menu-cta" onClick={() => go('inquiry')}>Check availability <ArrowRight size={16} /></button></div>}
      </header>

      <section id="top" className="hero">
        <img src={siteConfig.images[0].src} alt={siteConfig.images[0].alt} className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="kicker light"><span /> {siteConfig.business.eyebrow}</p>
          <h1>{siteConfig.business.tagline}</h1>
          <p className="hero-copy">{siteConfig.business.description}</p>
          <div className="hero-actions"><button className="button button-light" onClick={() => go('inquiry')}>Check availability <ArrowRight size={17} /></button><button className="text-button" onClick={() => go('about')}>Explore the stay <ArrowDownRight size={17} /></button></div>
        </div>
        <div className="hero-caption"><span>01</span><div><strong>Lake, Mawphanlur</strong><small>Meghalaya · India</small></div></div>
      </section>

      <section className="intro-band"><div className="container intro-grid"><p className="kicker">A slower kind of stay</p><p className="intro-statement">Come for the seven lakes.<br /><em>Stay for the stillness.</em></p><p className="intro-note">A small collection of cottage-style stays surrounded by Khasi hills, clear air and the soft rhythm of lake life.</p></div></section>

      <section id="about" className="section about-section"><div className="container about-grid"><div><p className="kicker">01 — The place</p><h2>Close to the water.<br /><em>Closer to nature.</em></h2></div><div className="about-copy"><p>Mawphanlur is a place to put the phone down and let the day unfold slowly. Our cottages sit among rolling hills and a landscape shaped by water, cloud and quiet.</p><p>Wake to mist on the lakes, take an unhurried walk, and find your own view of the Khasi countryside. The stay is simple, comfortable and rooted in the character of this remarkable corner of Meghalaya.</p><button className="underlined-button" onClick={() => go('location')}>Find your way here <ArrowRight size={16} /></button></div></div><div className="container stat-row"><div><strong>7</strong><span>lakes around<br />Mawphanlur</span></div><div><strong>1,840m</strong><span>approximate<br />elevation</span></div><div><strong>365°</strong><span>of open hill<br />country</span></div></div></section>

      <section id="stay" className="section stay-section"><div className="container"><div className="section-heading"><div><p className="kicker">02 — Your stay</p><h2>Room to breathe.</h2></div><p>Thoughtful cottage-style accommodation for mornings that begin with a view and evenings that end under a wide sky.</p></div><div className="stay-card"><div className="stay-photo"><img src={siteConfig.images[2].src} alt={siteConfig.images[2].alt} /></div><div className="stay-details"><p className="kicker">Cottage-style accommodation</p><h3>Stay simply. Sleep deeply.</h3><p>Room details and current rates vary by season. Reach out and we’ll help you find the right option for your visit.</p><p className="rate-note">Baseline pricing: contact Boney for current seasonal rates.</p><div className="detail-list"><span><Home size={17} /> Comfortable interiors</span><span><Compass size={17} /> Peaceful hill setting</span><span><MapPin size={17} /> Steps from the lake</span></div><button className="button button-dark" onClick={() => go('inquiry')}>Ask for availability <ArrowRight size={16} /></button></div></div></div></section>

      <section id="experiences" className="section experience-section"><div className="container"><div className="section-heading"><div><p className="kicker">03 — Around here</p><h2>Let the landscape<br /><em>lead the way.</em></h2></div><p>From lake-edge walks to nearby viewpoints, Mawphanlur rewards an unhurried pace.</p></div><div className="experience-grid"><article><span className="number">01</span><Sparkles /><h3>Seven-lake landscape</h3><p>Find your own quiet vantage point among the lakes and grassy Khasi hills.</p><small>AT THE PROPERTY</small></article><article><span className="number">02</span><Compass /><h3>Viewpoints & walks</h3><p>Explore nearby trails, hill roads and open horizons at your own pace.</p><small>NEARBY</small></article><article><span className="number">03</span><Leaf /><h3>Slow photography</h3><p>Clouds, changing light and water reflections make every hour different.</p><small>AT THE PROPERTY</small></article></div></div></section>

      <section id="amenities" className="section amenities-section"><div className="container"><div className="section-heading"><div><p className="kicker">04 — At the guesthouse</p><h2>Amenities &amp;<br /><em>activities.</em></h2></div><p>Comforts and simple pleasures that make a slow stay feel complete.</p></div><div className="amenities-grid">{[['Home-cooked meals','Veg and non-veg meals prepared with care.'],['Warm, comfortable rooms','Hot water through geysers and electric room heaters.'],['Winter bonfires','Gather around the fire when evenings turn crisp.'],['Lake adventures','Boating and kayaking across the quiet water.'],['Hiking trails','Walk the hills, lakesides and open Khasi countryside.']].map(([title, detail], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p></article>)}</div></div></section>

      <section id="gallery" className="section gallery-section"><div className="container"><div className="gallery-heading"><div><p className="kicker">04 — A sense of place</p><h2>See the quiet.</h2></div><p>Light changes quickly in the hills. These are a few glimpses of the landscape waiting outside your door.</p></div><div className="gallery-grid">{siteConfig.images.map((image, index) => <button key={image.src} className={`gallery-item gallery-${index + 1}`} onClick={() => setLightbox(index)} aria-label={`Open image: ${image.alt}`}><img src={image.src} alt={image.alt} loading={index > 1 ? 'lazy' : 'eager'} /></button>)}</div></div></section>

      <section id="reviews" className="section reviews-section"><div className="container"><div className="reviews-heading"><div><p className="kicker">05 — Guest reviews</p><h2>Leave with<br /><em>lighter shoulders.</em></h2></div><a className="rating-badge" href={siteConfig.business.reviewsUrl} target="_blank" rel="noreferrer"><strong>4.4 <span>/ 5</span></strong><span className="stars">★★★★★</span><small>702 Google Reviews ↗</small></a></div><div className="review-grid"><blockquote><Quote /><p>“A place for complete peace of mind. The quiet landscape and lakes make it easy to slow down and truly switch off.”</p><cite>Guest review · Google Maps</cite></blockquote><blockquote><Quote /><p>“Great hospitality, beautiful surroundings and a stay that feels wonderfully removed from the rush of everyday life.”</p><cite>Guest review · Google Maps</cite></blockquote></div><p className="review-note">Read the latest original reviews on <a href={siteConfig.business.reviewsUrl} target="_blank" rel="noreferrer">Google Maps</a>.</p></div></section>

      <section id="location" className="section location-section"><div className="container location-grid"><div><p className="kicker">05 — Find us</p><h2>Somewhere<br /><em>worth the journey.</em></h2><p className="location-copy">Tucked into the hills of Meghalaya, Mawphanlur is best reached slowly. Check Google Maps before travelling and allow extra time in wet weather.</p><a className="button button-dark" href={siteConfig.business.mapsUrl} target="_blank" rel="noreferrer">Get directions <ArrowRight size={16} /></a></div><div className="map-card"><div className="map-lines" /><MapPin size={30} /><strong>Mawphanlur Natural<br />Lake Guesthouse</strong><span>{siteConfig.business.address}</span><a href={siteConfig.business.mapsUrl} target="_blank" rel="noreferrer">Open in Google Maps ↗</a></div></div><div className="container distances">{siteConfig.distances.map(([place, distance]) => <div key={place}><span>{place}</span><strong>{distance}</strong></div>)}</div></section>

      <section id="inquiry" className="inquiry-section"><div className="container inquiry-grid"><div><p className="kicker light">Plan your stay</p><h2>Come find<br /><em>your quiet.</em></h2><p>Tell us a little about your visit and we’ll get back to you with current availability and room options.</p><div className="inquiry-meta"><span><CalendarDays size={17} /> Flexible enquiries</span><span><Check size={17} /> Personal response</span></div></div>{enquirySent ? <div className="enquiry-success" role="status"><Check size={25} /><h3>Thanks — your enquiry is ready.</h3><p>Your stay details are ready. Please contact Boney directly for current availability and seasonal rates.</p><button className="button button-cream" type="button" onClick={() => setEnquirySent(false)}>Send another enquiry <ArrowRight size={16} /></button></div> : <form className="inquiry-form" onSubmit={handleEnquiry}><label>Your name<input name="name" required placeholder="e.g. Ananya Sharma" /></label><div className="form-row"><label>Check-in<input name="checkIn" type="date" required /></label><label>Check-out<input name="checkOut" type="date" required /></label></div><label>Message<textarea name="message" placeholder="Tell us about your visit..." rows={3} /></label><button className="button button-cream" type="submit">Send enquiry <ArrowRight size={16} /></button><small>We’ll only use your details to respond to this enquiry.</small></form>}</div></section>

      <section className="section faq-section"><div className="container faq-grid"><div><p className="kicker">Good to know</p><h2>Questions,<br /><em>answered.</em></h2></div><div>{['What is the best time to visit?', 'How do I reach Mawphanlur?', 'Are room rates available online?', 'Can I request a specific cottage?'].map((q, i) => <div className="faq-item" key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>{q}</span><ChevronDown size={18} className={openFaq === i ? 'rotate' : ''} /></button>{openFaq === i && <p>{i === 0 ? 'October to April is generally comfortable for exploring Meghalaya. Monsoon months are lush and beautiful, but roads can be more challenging.' : 'Please contact us for the latest information and practical guidance for your visit.'}</p>}</div>)}</div></div></section>

      <footer className="footer"><div className="container footer-grid"><div><button className="brand footer-brand" onClick={() => go('top')}><span className="brand-mark"><Leaf size={16} /></span><span>Mawphanlur <em>Natural Lake Guesthouse</em></span></button><p>Slow stays in the Khasi hills.<br />Meghalaya, India.</p></div><div className="footer-links"><span>Explore</span>{navItems.map(([label, id]) => <button key={id} onClick={() => go(id)}>{label}</button>)}</div><div className="footer-links"><span>Contact</span><a href={siteConfig.business.mapsUrl} target="_blank" rel="noreferrer">Google Maps ↗</a><a href="mailto:hello@mawphanlur.com">Send an enquiry ↗</a></div></div><div className="container copyright"><span>© 2026 Mawphanlur Natural Lake Guesthouse</span><span>Made for slow mornings</span></div></footer>

      {lightbox !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={() => setLightbox(null)}><button onClick={() => setLightbox(null)} aria-label="Close image viewer"><X /></button><img src={siteConfig.images[lightbox].src} alt={siteConfig.images[lightbox].alt} onClick={(e) => e.stopPropagation()} /></div>}
    </main>
  )
}
