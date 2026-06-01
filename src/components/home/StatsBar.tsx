const stats = [
  { value: '30+', label: 'Years of Execution' },
  { value: '6', label: 'Companies Founded' },
  { value: '26', label: 'Countries Served' },
  { value: '$6M+', label: 'Capital Raised' },
  { value: '300+', label: 'Projects Delivered' },
]

export function StatsBar() {
  return (
    <section className="bg-navy py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6">
          {stats.map(({ value, label }, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-2 group"
            >
              <span className="font-display text-4xl md:text-5xl font-semibold text-white leading-none">
                {value}
              </span>
              <span className="block w-8 h-px bg-gold/60 mx-auto" />
              <span className="font-sans text-xs font-medium tracking-[0.12em] uppercase text-white/70">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}