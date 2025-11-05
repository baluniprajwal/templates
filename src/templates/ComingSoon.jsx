function ComingSoon() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,#07332c,#041a17)] px-6 py-12 text-slate-100">
      <div className="max-w-xl rounded-[2.5rem] border border-white/10 bg-white/10 px-10 py-12 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
        <span className="inline-block rounded-full border border-emerald-200/50 bg-emerald-200/15 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-emerald-100">
          In Progress
        </span>

        <h1 className="mt-6 text-3xl font-semibold uppercase tracking-[0.12em] text-white md:text-[2.3rem]">
          Next Template Loading
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-white/80">
          Duplicate this route, drop in your next layout, and register it in the router. Keeping every concept together
          makes it effortless to showcase a full template collection.
        </p>
      </div>
    </div>
  )
}

export default ComingSoon
