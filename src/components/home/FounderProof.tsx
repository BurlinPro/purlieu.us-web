const proofCards = [
  {
    stat: 'Top 15',
    context: 'Global Market',
    detail: 'Took FICO Philippines from market entry to a Top 15 global ranking in under 4 years.',
    tag: 'FICO Corporation',
  },
  {
    stat: '26',
    context: 'Countries',
    detail: 'Built CollectionWorks (CWX) from Atlanta into a global enterprise platform — acquired by Temenos.',
    tag: 'CollectionWorks → Temenos',
  },
  {
    stat: '300+',
    context: 'Projects Delivered',
    detail: 'Infrastructure implementations across Philippines, Indonesia, Vietnam, and Thailand via RoadPacker International.',
    tag: 'RoadPacker International',
  },
]

export function FounderProof() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Pull quote */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="w-px h-12 bg-gold/40 mx-auto mb-8" />
          <blockquote
            className="font-display font-medium italic text-navy leading-tight mb-6"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}
          >
            &ldquo;The risk isn&apos;t in entering early. It&apos;s in arriving late — without
            someone who has already operated in that market.&rdquo;
          </blockquote>
          <cite className="not-italic font-sans text-sm text-navy/50 tracking-wide">
            — Burton W. Crapps Sr., Founder &amp; Principal
          </cite>
          <div className="w-px h-12 bg-gold/40 mx-auto mt-8" />
        </div>

        {/* Outcome proof cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proofCards.map(({ stat, context, detail, tag }) => (
            <div
              key={stat}
              className="relative bg-cream rounded-sm border border-cream-deeper p-8 overflow-hidden group hover:border-navy/20 hover:shadow-md transition-all duration-300"
            >
              {/* Decorative large number */}
              <span className="absolute -top-2 -right-2 font-display font-bold text-[6rem] text-navy/5 leading-none select-none pointer-events-none">
                {stat.replace(/[^0-9]/g, '') || stat}
              </span>

              <div className="relative z-10">
                {/* Stat */}
                <div className="flex items-end gap-2 mb-1">
                  <span className="font-display font-semibold text-navy leading-none" style={{ fontSize: '2.75rem' }}>
                    {stat}
                  </span>
                  <span className="font-sans text-sm font-medium text-navy/50 mb-1.5 tracking-wide">
                    {context}
                  </span>
                </div>

                {/* Gold rule */}
                <span className="block w-8 h-0.5 bg-gold mb-4" />

                {/* Detail */}
                <p className="font-sans text-sm text-navy/65 leading-relaxed mb-5">
                  {detail}
                </p>

                {/* Tag */}
                <span className="inline-block font-sans text-xs font-semibold text-gold tracking-wide uppercase">
                  {tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
