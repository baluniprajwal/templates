import { useEffect, useState } from 'react'
import heroImage from '../assets/matcha-main-Photoroom.png'
import mini1 from '../assets/matcha-citrus.png'
import mini2 from '../assets/matcha-velvet.png'
import mini3 from '../assets/matcha-dawn.png'
import mini4 from '../assets/matcha-mint.png'
import '../styles/coffeeHero.css'

const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', overlay: 'about' },
  { label: 'Contact', overlay: 'contact' },
  { label: 'Gift Cards', href: '#' },
  { label: 'Rewards', href: '#' },
]

const miniDrinks = [
  { name: 'Citrus Cloud', image: mini1 },
  { name: 'Berry Velvet', image: mini2 },
  { name: 'Caramel Dawn', image: mini3 },
  { name: 'Mint Mirage', image: mini4 },
]

const aboutPanelId = 'coffee-hero-about-panel'

const contactSheet = {
  id: 'coffee-hero-sheet-contact',
  title: 'Contact Cascade',
  paragraphs: [
    'Want to book a private tasting, partner on a pop-up, or stock Cascade cold brew concentrates at your shop?',
    'Drop us a note at ',
  ],
  email: 'hello@cascadelatte.com',
  phone: '(408) 555-1234',
  phoneHref: '+14085551234',
}

const aboutPanelContent = {
  title: 'About Cascade Latte Lab',
  kicker: 'Inside The Lab',
  description:
    'Cascade Latte Lab is a sensory workshop dedicated to cold-crafted coffee. We roast, infuse, and prototype beverages that honor origin character while reimagining how texture, temperature, and aroma interact.',
  pillars: [
    {
      heading: 'Ingredient Stewardship',
      body: 'We partner with micro-lot growers and tune roast curves to preserve the natural sweetness in every cascade.',
    },
    {
      heading: 'Flavor Architecture',
      body: 'Each pour is engineered layer by layer so texture, temperature, and aroma build a sensory arc through the sip.',
    },
    {
      heading: 'Responsible Rituals',
      body: 'From reclaimed glassware to zero-waste concentrates, our rituals feel indulgent while staying planet-minded.',
    },
  ],
  stats: [
    { metric: '18', label: 'micro-lot partners' },
    { metric: '4', label: 'seasonal cascades' },
    { metric: '72', label: 'hour infusion tests monthly' },
  ],
  closing:
    'Host a private tasting, collaborate on a cascade for your next event, or schedule a lab tour. We save after-hours slots for fellow beverage dreamers.',
}

function CelestialMatcha() {
  const [activeOverlay, setActiveOverlay] = useState(null)

  useEffect(() => {
    if (!activeOverlay) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveOverlay(null)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [activeOverlay])

  const isAboutOpen = activeOverlay === 'about'
  const sheetData = activeOverlay === 'contact' ? contactSheet : null
  const sheetId = sheetData?.id
  const sheetTitleId = sheetId ? `${sheetId}-title` : undefined

  return (
    <div className={`coffee-hero ${isAboutOpen ? 'coffee-hero--about-open' : ''}`} id="top">
      <div className="coffee-hero__backdrop" aria-hidden="true" />
      <div className="coffee-hero__panel" aria-hidden="true" />

      <header className="coffee-hero__nav">
        <a href="#top" className="coffee-hero__brand" onClick={() => setActiveOverlay(null)}>
          <span className="coffee-hero__mark" aria-hidden="true">
            CL
          </span>
          <div className="coffee-hero__brand-text">
            <span className="coffee-hero__brand-line">Cascade</span>
            <span className="coffee-hero__brand-line coffee-hero__brand-line--secondary">Latte Lab</span>
          </div>
        </a>

        <nav aria-label="Primary navigation">
          <ul>
            {navLinks.map(({ label, href, overlay }) => (
              <li key={label}>
                {overlay ? (
                  <button
                    type="button"
                    className={`coffee-hero__nav-button${activeOverlay === overlay ? ' coffee-hero__nav-button--active' : ''}`}
                    onClick={() => setActiveOverlay((current) => (current === overlay ? null : overlay))}
                    aria-expanded={activeOverlay === overlay}
                    aria-haspopup="dialog"
                    aria-controls={overlay === 'contact' ? contactSheet.id : aboutPanelId}
                    aria-pressed={activeOverlay === overlay}
                  >
                    {label}
                  </button>
                ) : (
                  <a href={href} onClick={() => setActiveOverlay(null)}>
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button type="button" className="coffee-hero__cta">
          Reserve A Tasting
        </button>
      </header>

      <main className="coffee-hero__layout">
        <div className="coffee-hero__copy fade-in-left">
          <span className="coffee-hero__kicker">Cascade is...</span>
          <h1>
            PURE <span>LOVE</span> OF COFFEE
          </h1>
          <p>
            Small-batch cold brew layered with vanilla cream clouds, cascading caramel, and a whisper of rainforest
            cacao. Engineered to elevate every stolen pause in your day.
          </p>

          <div className="coffee-hero__actions">
            <div className="coffee-hero__price">
              <strong>$5.65</strong>
              <span>Launch Special</span>
            </div>

            <div className="coffee-hero__buttons">
              <button type="button" className="coffee-hero__button coffee-hero__button--primary">
                Order Now
              </button>
              <button type="button" className="coffee-hero__button coffee-hero__button--secondary">
                Free Delivery
              </button>
            </div>
          </div>

          <div className="coffee-hero__gallery-wrap">
            <span>Cascade Latte Lab</span>
            <ul>
              {miniDrinks.map(({ name, image }) => (
                <li key={name}>
                  <div className="coffee-hero__gallery-thumb" aria-hidden="true">
                    <img src={image} alt={name} loading="lazy" />
                  </div>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="coffee-hero__visual slide-up">
          <div className="coffee-hero__glow" aria-hidden="true" />
          <img src={heroImage} alt="Frappuccino with whipped cream" />
          <span className="coffee-hero__vertical" data-outline="Frappuccino" aria-hidden="true">
            Frappuccino
          </span>
        </div>
      </main>

      {isAboutOpen && (
        <>
          <div className="coffee-hero__about-backdrop" aria-hidden="true" onClick={() => setActiveOverlay(null)} />
          <aside
            className="coffee-hero__about-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="coffee-hero-about-title"
            id={aboutPanelId}
          >
            <header className="coffee-hero__about-header">
              <div>
                <p className="coffee-hero__about-kicker">{aboutPanelContent.kicker}</p>
                <h2 id="coffee-hero-about-title">{aboutPanelContent.title}</h2>
              </div>
              <button type="button" className="coffee-hero__about-close" onClick={() => setActiveOverlay(null)}>
                Close
              </button>
            </header>

            <p className="coffee-hero__about-lede">{aboutPanelContent.description}</p>

            <div className="coffee-hero__about-pillars">
              {aboutPanelContent.pillars.map(({ heading, body }) => (
                <article key={heading}>
                  <h3>{heading}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>

            <ul className="coffee-hero__about-stats">
              {aboutPanelContent.stats.map(({ metric, label }) => (
                <li key={label}>
                  <strong>{metric}</strong>
                  <span>{label}</span>
                </li>
              ))}
            </ul>

            <p className="coffee-hero__about-closing">{aboutPanelContent.closing}</p>
            <div className="coffee-hero__about-links">
              <a href="mailto:hello@cascadelatte.com">hello@cascadelatte.com</a>
              <a href="tel:+14085551234">(408) 555-1234</a>
            </div>
          </aside>
        </>
      )}

      {sheetData && (
        <>
          <div className="coffee-hero__sheet-backdrop" aria-hidden="true" onClick={() => setActiveOverlay(null)} />
          <aside
            className="coffee-hero__sheet"
            role="dialog"
            aria-modal="true"
            aria-labelledby={sheetTitleId}
            id={sheetId}
          >
            <header className="coffee-hero__sheet-header">
              <h2 id={sheetTitleId}>{sheetData.title}</h2>
              <button type="button" className="coffee-hero__sheet-close" onClick={() => setActiveOverlay(null)}>
                Close
              </button>
            </header>

            <div className="coffee-hero__sheet-body">
              {sheetData.paragraphs.map((paragraph, index) => {
                if (index === sheetData.paragraphs.length - 1) {
                  return (
                    <p key={`contact-${index}`}>
                      {paragraph}
                      <a href={`mailto:${sheetData.email}`}>{sheetData.email}</a> or call{' '}
                      <a href={`tel:${sheetData.phoneHref ?? sheetData.phone}`}>{sheetData.phone}</a>.
                    </p>
                  )
                }

                return <p key={`contact-${index}`}>{paragraph}</p>
              })}
            </div>
          </aside>
        </>
      )}
    </div>
  )
}

export default CelestialMatcha
