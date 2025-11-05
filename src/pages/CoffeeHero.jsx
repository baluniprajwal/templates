import heroImage from '../assets/matcha-main-Photoroom.png'
import mini1 from '../assets/matcha-citrus.png'
import mini2 from '../assets/matcha-velvet.png'
import mini3 from '../assets/matcha-dawn.png'
import mini4 from '../assets/matcha-mint.png'
import '../styles/coffeeHero.css'

const navLinks = ['Home', 'About', 'Contact', 'Gift Cards', 'Rewards']

const miniDrinks = [
  { name: 'Citrus Cloud', image: mini1 },
  { name: 'Berry Velvet', image: mini2 },
  { name: 'Caramel Dawn', image: mini3 },
  { name: 'Mint Mirage', image: mini4 },
]

function CoffeeHero() {
  return (
    <div className="coffee-hero">
      <div className="coffee-hero__backdrop" aria-hidden="true" />
      <div className="coffee-hero__panel" aria-hidden="true" />

      <header className="coffee-hero__nav">
        <a href="#" className="coffee-hero__brand">
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
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
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
    </div>
  )
}

export default CoffeeHero
