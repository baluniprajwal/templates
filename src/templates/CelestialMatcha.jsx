import heroImage from '../assets/matcha-main-Photoroom.png'
import citrusMini from '../assets/matcha-citrus.png'
import velvetMini from '../assets/matcha-velvet.png'
import dawnMini from '../assets/matcha-dawn.png'
import mintMini from '../assets/matcha-mint.png'

const navLinks = ['Home', 'About', 'Contact', 'Gift Cards', 'Rewards']

const miniTreats = [
  { name: 'Citrus Cloud', image: citrusMini },
  { name: 'Berry Velvet', image: velvetMini },
  { name: 'Caramel Dawn', image: dawnMini },
  { name: 'Mint Mirage', image: mintMini },
]

function CelestialMatcha() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#031b18] text-white">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,153,113,0.35),transparent_45%),radial-gradient(circle_at_80%_-10%,rgba(31,191,179,0.3),transparent_47%),linear-gradient(135deg,#021614_0%,#073529_45%,#0d6840_100%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)] blur-[120px]" />
      <div
        className="absolute top-0 right-0 h-full w-[420px] rounded-bl-[140px] bg-[linear-gradient(180deg,#0d7b47_0%,#0a5736_45%,#07402a_100%)] shadow-[-18px_0_40px_rgba(0,0,0,0.35)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-12 md:px-10 lg:gap-16">
        <header className="flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-[1.1rem] bg-gradient-to-br from-[#f5d979] to-[#f2c14f] text-xs font-bold tracking-[0.25em] text-[#0a221c]">
              CL
            </span>
            <div className="flex flex-col text-[0.58rem] uppercase tracking-[0.24em] text-white/85">
              <span>Cascade</span>
              <span>Latte Lab</span>
            </div>
          </div>

          <nav aria-label="Primary navigation" className="flex-1">
            <ul className="flex flex-wrap justify-center gap-6 text-[0.58rem] uppercase tracking-[0.24em] text-white/70">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="rounded-full bg-gradient-to-r from-[#0e5f42] to-[#1c8a58] px-7 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_14px_32px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-[1px]"
          >
            Reserve A Tasting
          </button>
        </header>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,380px)] lg:items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-[0.7rem] uppercase tracking-[0.32em] text-[#2bbf96]">Cascade is...</span>
              <h1 className="text-[3.4rem] font-semibold uppercase leading-[0.95] tracking-[0.18em] sm:text-[3.8rem] lg:text-[4.8rem]">
                PURE <span className="text-[#f8d06d]">LOVE</span> OF COFFEE
              </h1>
            </div>

            <p className="max-w-lg text-sm leading-relaxed text-white/80">
              Small-batch cold brew layered with vanilla cream clouds, cascading caramel, and a whisper of rainforest
              cacao. Engineered to elevate every stolen pause in your day.
            </p>

            <div className="flex flex-wrap items-center gap-6">
            <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#ffe6a3] via-[#ffd174] to-[#ffb94d] text-[#0a241c] shadow-[0_24px_48px_rgba(0,0,0,0.34)] ring-4 ring-white/10">
              <span className="text-[2.35rem] font-extrabold tracking-[0.14em]">$5.65</span>
              <span className="text-[0.58rem] uppercase tracking-[0.32em] text-[#0f3d2e]">Launch Special</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="rounded-full bg-gradient-to-r from-[#23c69f] to-[#149366] px-9 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_20px_36px_rgba(0,0,0,0.32)] transition-transform hover:scale-105"
              >
                Order Now
              </button>
              <button
                type="button"
                className="rounded-full border border-white/70 bg-white px-9 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#0c7650] shadow-[0_20px_36px_rgba(0,0,0,0.28)] transition-transform hover:scale-105"
              >
                Free Delivery
              </button>
            </div>
          </div>

            <div className="flex flex-col gap-3">
              <span className="text-[0.68rem] uppercase tracking-[0.32em] text-white/55">Cascade Latte Lab</span>
              <ul className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:'none'] [&::-webkit-scrollbar]:hidden">
                {miniTreats.map(({ name, image }) => (
                  <li
                    key={name}
                    className="flex w-[9.5rem] flex-col items-center gap-3 rounded-[1.6rem] border border-white/15 bg-[rgba(6,28,23,0.78)] px-4 py-4 shadow-[0_18px_34px_rgba(0,0,0,0.28)] backdrop-blur-sm"
                  >
                    <div
                      className="h-16 w-16 rounded-[1.1rem] border border-white/30 bg-white/10"
                      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    />
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="h-[34rem] w-[24rem] rounded-[4.5rem] bg-gradient-to-b from-[#0e6f42] to-[#0b3f2b] shadow-[0_36px_64px_rgba(0,0,0,0.4)]" />
            <div className="absolute inset-y-12 left-[62%] w-28 rounded-[3.2rem] bg-[rgba(255,255,255,0.12)] blur-xl" />
            <img
              src={heroImage}
              alt="Matcha frappuccino with whipped cream"
              className="absolute mx-auto w-[22rem] -translate-x-6 rotate-[4deg] drop-shadow-[0_40px_60px_rgba(0,0,0,0.5)]"
            />
            <span className="absolute -right-16 top-1/2 hidden -translate-y-1/2 rotate-180 text-lg font-bold uppercase tracking-[0.4em] text-white/85 drop-shadow xl:block [writing-mode:vertical-rl]">
              Frappuccino
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CelestialMatcha
