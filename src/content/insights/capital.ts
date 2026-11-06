import type { InsightPost } from '@/lib/types'

const DISCLOSURE =
  'Disclosure: Purlieu Management advises companies and investors on capital introductions and may earn fees on transactions it completes.'

const base = { date: '2026-11-05', category: 'Capital & Growth', featured: false }

export const capitalPosts: InsightPost[] = [
  {
    ...base,
    slug: 'msme-bank-loans-investor-not-loan',
    title: 'MSMEs Get 4.7% of Philippine Bank Loans. Some of Them Need an Investor, Not a Loan.',
    readTime: '4 min read',
    excerpt:
      'Credit statistics count loans. They miss the owner who needs a partner or a buyer and has no idea who to call.',
    content: `
      <p>Philippine banks held ₱574.8 billion of MSME loans at the end of 2025, up 5.2% on the year. That is 4.7% of a ₱12.14 trillion loan book, far below the 10% banks were once required to lend to MSMEs. That mandate lapsed in June 2018, though the BSP still monitors MSME lending. BSP data reported in June showed the same ₱574.8 billion at end-March 2026.</p>
      <figure>
        <img src="/images/insights/msme-lending-gap.png" alt="Bar chart of the MSME share of the bank loan book in Q4 2025: all MSMEs 4.7% against a former 10% quota, micro and small 2.0% against a former 8% quota, medium 2.8% against a former 2% quota." width="2000" height="1000" loading="lazy" />
      </figure>
      <h3>Where the Shortfall Sits</h3>
      <p>The split matters more than the headline. In BSP data reported by the Manila Bulletin, micro and small enterprises hold 2.0% of the book, against the former 8% quota. Medium enterprises hold 2.8%, above their former 2% quota. Universal and commercial banks give micro and small firms just 1.5%. Rural and cooperative banks give them 20.1%.</p>
      <p>So the squeeze is at the small end. Lenders and former regulators point to thin collateral and patchy records, and banks also weigh the cost of evaluating and monitoring small loans.</p>
      <h3>What a Loan Does Not Fix</h3>
      <p>Plenty of people are working on that gap. In February, ADB announced a US$30 million facility for the lending arm of GCash to reach more MSMEs. That helps, and it should.</p>
      <p>But picture a founder-run company with a few hundred million pesos in revenue. It is profitable, it has outgrown the owner's savings, and the owner is 62 with no successor. Or a services firm that needs fresh capital to open in three more regions. A loan does not buy out a founder. It does not bring in a partner with contacts. It does not give a retiring owner liquidity. These companies need equity or a buyer, and no loan statistic tracks them.</p>
      <h3>The Money Exists. The Introductions Are Thin.</h3>
      <p>Private capital is not absent. A Foxmont Capital Partners report found about US$1.5 billion deployed in the Philippines in 2025, up 34%: about US$1.01 billion of equity and US$490 million of debt, with debt driving most of the growth. It also noted that MSMEs still face a significant funding gap. Venture money is thinner: the Philippines took 1.1% of Southeast Asia's startup funding in the first half of 2026, according to Kickstart Ventures. Mid-sized, profitable, non-tech companies sit in between. They are too big for a microloan and not what a venture fund is looking for.</p>
      <p>We saw the other side of this when we helped start a Philippine consumer credit scoring company. Once it was running, we found the buyers who put capital into the company and bought out the founders. Finding those buyers was the job.</p>
      <h3>Two Honest Limits</h3>
      <p>Equity costs more than debt. A company that can borrow sensibly should think hard before selling a slice of itself. And a match only works on fit: sector, ticket size, and how much control the founder will give up. Plenty of companies will not be a fit, and we would rather say so early.</p>
      <h3>The Bottom Line</h3>
      <p>A loan solves a cash problem. An investor or a buyer solves an ownership problem. Most owners already know which one they have.</p>
      <p><em>If your company has outgrown bank loans, how many funders could you name today who would take your call?</em></p>
      <p><em>${DISCLOSURE}</em></p>
      <p><em>Sources: Manila Bulletin, 3 March 2026, Philstar and Manila Times on BSP MSME lending data; ADB and Fuse Financing releases, February 2026; Foxmont Capital Partners, 2026 private capital report, via The Asset and Daily Guardian; Kickstart Ventures via Daily Tribune, 14 October 2026; Brigada News on lending constraints.</em></p>
    `,
  },
  {
    ...base,
    slug: 'founder-exit-planning-philippines',
    title: 'A Founder Who Plans to Work Until the End Has Not Planned an Exit',
    readTime: '3 min read',
    excerpt:
      'Most founders see two options: hand it to the children or shut the doors. There is a third, and it comes with cash.',
    content: `
      <p>Family-owned enterprises make up nearly 80% of Philippine businesses, according to a Management Association of the Philippines column citing De La Salle University and CBER studies. Prof. Enrique Soriano of the Wong + Bernstein Group, quoted in a Philippine Star column in May, called business succession "an epidemic we don't talk about" and warned that owners who vow to "die with my boots on" leave chaos behind.</p>
      <p>That works until it doesn't. A business with no plan and no buyer is a business whose value depends on a family conversation nobody has had.</p>
      <figure>
        <img src="/images/insights/founder-exit-structures.png" alt="Three exit structures with illustrative ownership after the deal: full sale, investor 100%; majority recapitalisation, founder 30% and investor 70%; minority investment, founder 70% and investor 30%." width="1600" height="800" loading="lazy" />
      </figure>
      <h3>Three Ways Out</h3>
      <p>A founder has three main structures to choose from, shown above.</p>
      <ul>
        <li><strong>Full sale.</strong> The founder sells everything to a strategic or financial buyer. It is the cleanest route to liquidity, and a handover period is common.</li>
        <li><strong>Majority recapitalisation.</strong> The founder sells control and keeps a minority stake. New money funds growth. The founder gets cash now and may get a second payout later.</li>
        <li><strong>Minority investment.</strong> The founder sells a smaller stake and stays in charge. It suits owners who are not leaving yet but want a partner and a path to succession.</li>
      </ul>
      <h3>Why a Well-Run Company Is Easier to Sell</h3>
      <p>Deloitte's 2026 Asia Pacific almanac shows corporate buyers took 55% of private equity exits by deal count in 2025, up from 32% in 2020, and credits their deal certainty. Those are exits from fund-owned companies, not founder sales. Our view is that solid governance and reporting make a founder's company easier for the same buyers to diligence. A founder who tidies the business before selling is selling something larger buyers want. A founder forced into a sale by a crisis rarely gets that.</p>
      <h3>One Deal, Two Problems</h3>
      <p>In the consumer credit scoring company we helped start, buyers did two things in one transaction. They put capital into the business, and they bought out the founders. The company got growth money and the founders got liquidity. Neither side had to give up the other's goal to reach its own.</p>
      <h3>Where These Deals Go Wrong</h3>
      <p>Price is the usual one. Founders tend to value a company by the years they have put into it. Buyers value it by the cash it will produce. Next is the family: a deal can stall when relatives disagree about who is selling what. And sector rules matter, because foreign ownership limits in some industries narrow the pool of buyers.</p>
      <h3>The Bottom Line</h3>
      <p>An exit does not have to mean leaving. It does mean deciding before someone else decides for you.</p>
      <p><em>If you built a company you want to outlive your time running it, who have you spoken to about the options?</em></p>
      <p><em>${DISCLOSURE}</em></p>
      <p><em>Sources: Management Association of the Philippines, July 2025; The Philippine Star, 6 May 2026; Deloitte, Asia Pacific Private Equity 2026 Almanac; Manila Bulletin, April 2026, on the foreign investment negative list.</em></p>
    `,
  },
  {
    ...base,
    slug: 'philippine-ma-deal-counts-buyers-still-looking',
    title: 'Philippine M&A: 113 Deals in 2024, 74 by Early December 2025. Buyers Did Not Stop Looking.',
    readTime: '4 min read',
    excerpt:
      'Fewer announced deals does not mean less appetite. It may mean fewer companies are ready to be shown.',
    content: `
      <p>PwC Philippines counted 74 announced M&amp;A deals as of 4 December 2025, worth US$4.6 billion. The year before it was 113 deals worth US$8.6 billion. The 2025 count is a partial year, and PwC noted that many deals were taking longer to close.</p>
      <p>Merger filings point the other way: the Philippine Competition Commission reported ₱859 billion of notified deals in 2025, up from 2024. The two counts use different methods. The latest signal is weaker: DealStreetAsia data cited by the Manila Bulletin showed just one Philippine deal in the first quarter of 2026.</p>
      <figure>
        <img src="/images/insights/ma-deal-flow.png" alt="Charts of announced Philippine M&amp;A deals, 113 worth US$8.6 billion in 2024 and 74 worth US$4.6 billion in 2025 as of 4 December, beside the Philippine share of Southeast Asian startup funding, 1.1% of US$7.25 billion." width="2000" height="1000" loading="lazy" />
      </figure>
      <h3>The Buyers Are Still Looking</h3>
      <p>Deloitte's 2026 Asia Pacific Private Equity Almanac, in its Southeast Asia insights, says private equity activity in the Philippines slowed last year but should keep drawing selective interest. Across Southeast Asia, it says dry powder remains elevated at US$21.1 billion and expects deployment to centre on mid-market buyouts and platform building, though Singapore takes about three-quarters of buyout value. Deloitte's figures cover deals far larger than a ₱200 million sale.</p>
      <p>At a Datasite and PwC Philippines event on 26 August, with investors from Sweef Capital, Navegar and Creador, one investor targeting larger deals reported a slower 2026, though healthcare, infrastructure and energy kept producing opportunities. Others cited stronger pipelines, and panelists also named consumer, financial services and tourism.</p>
      <h3>What the Counts Leave Out</h3>
      <p>Announced deals skew large. A ₱200 million sale of a family distributor rarely makes a press release, so we think smaller deals are undercounted. The venture data tells a similar story from another angle. Southeast Asian startup funding reached US$7.25 billion in the first half of 2026, but one US$4.5 billion data-centre round accounted for most of the growth, and the Philippines took 1.1%, roughly US$80 million.</p>
      <p>Our view is that the shortage is not capital. It is investment-ready companies, and the introductions that put them in front of the right buyer.</p>
      <h3>What Buyers Ask For First</h3>
      <p>Every funder has its own checklist. These are the usual first questions:</p>
      <ul>
        <li>Three years of financial statements, audited if possible</li>
        <li>A clean cap table and up-to-date SEC filings</li>
        <li>How concentrated the customers and suppliers are</li>
        <li>How much of the business lives in the owner's head</li>
        <li>A clear reason for the sale or raise, and what the owner wants afterwards</li>
      </ul>
      <h3>One Caveat</h3>
      <p>Being ready does not guarantee a deal. Price, timing and fit still decide it, and some sectors have foreign ownership limits that narrow who can buy. Readiness just keeps a good company from losing a good buyer over paperwork.</p>
      <h3>The Bottom Line</h3>
      <p>The buyers have not left. The real question is which companies are easy for them to say yes to.</p>
      <p><em>If a buyer asked for your last three years of financials tomorrow, how long would it take you to send them?</em></p>
      <p><em>${DISCLOSURE}</em></p>
      <p><em>Sources: PwC Philippines via GMA News and Daily Tribune, January 2026; Philippine Competition Commission via Manila Bulletin and Context.ph, July 2026; Manila Bulletin, 12 June 2026; Deloitte, Asia Pacific Private Equity 2026 Almanac; BusinessWorld, 4 May 2026; Datasite, Expert Spotlight, 1 October 2026; DealStreetAsia and Kickstart Ventures via TechNode and Insider PH.</em></p>
    `,
  },
  {
    ...base,
    slug: 'how-a-confidential-capital-introduction-works',
    title: 'How a Confidential Capital Introduction Actually Works',
    readTime: '3 min read',
    excerpt: 'Two one-page documents and a signed NDA do most of the early work.',
    content: `
      <p>People ask what we mean by matching. Here is the plain version.</p>
      <h3>Two Sides, Two Pages</h3>
      <p><strong>The company side.</strong> We write an anonymous one-page teaser. It covers sector, region, a revenue band, profitability, and what the owner wants, whether that is growth capital, a partial sale or a full exit. The company's name stays off it.</p>
      <p><strong>The funder side.</strong> We ask for a one-page mandate: sectors, ticket size, the stake and level of control they want, geography, and how long they hold. A mandate keeps us from sending a ₱50 million company to a fund that writes ₱500 million cheques.</p>
      <figure>
        <img src="/images/insights/capital-introduction-process.png" alt="Diagram of the process: an anonymous company teaser and a funder mandate meet at Purlieu, which screens both sides and introduces them under a signed NDA, in five steps from intake call to term sheet." width="1600" height="800" loading="lazy" />
      </figure>
      <h3>Five Steps</h3>
      <ol>
        <li><strong>Intake call.</strong> The owner explains the goals and walks us through the numbers.</li>
        <li><strong>Light screen.</strong> We review three years of financials and look for obvious problems.</li>
        <li><strong>Anonymous teaser.</strong> It goes only to funders whose mandate fits.</li>
        <li><strong>NDA and introduction.</strong> Names are shared once both sides agree.</li>
        <li><strong>Term sheet.</strong> Lawyers and advisers take over. We stay close for the conversations that usually need a third party.</li>
      </ol>
      <h3>Why Anonymous First</h3>
      <p>Owners worry about staff, customers and competitors hearing that the company is for sale. A teaser with no name lets a funder show interest without the owner showing their hand.</p>
      <h3>Where We Have Done It</h3>
      <p>We helped start a Philippine consumer credit scoring company, then found the buyers who capitalised it and bought out the founders. Finding buyers for a company and getting both sides to a deal is the work we now offer to other owners and funders.</p>
      <h3>What We Do Not Do</h3>
      <p>We do not promise a deal. Matching only works when the numbers are clean and price expectations are realistic. We introduce and support. Legal, tax and valuation work stays with each party's own advisers.</p>
      <h3>Who Should Get in Touch</h3>
      <ul>
        <li>Owners looking for growth capital, a partial sale, a full exit or a successor.</li>
        <li>Funders, family offices and corporates with a Philippines or ASEAN mid-market mandate.</li>
      </ul>
      <p>Send a short message to <a href="mailto:info@purlieu.us">info@purlieu.us</a> and tell us which side you are on.</p>
      <p><em>Are you on the company side or the funder side of this? Either way, I would like to hear what you are looking for.</em></p>
      <p><em>${DISCLOSURE}</em></p>
    `,
  },
  {
    ...base,
    slug: 'funders-send-us-a-mandate',
    title: 'Funders: Send Us a Mandate We Can Actually Use',
    readTime: '3 min read',
    excerpt: 'A good mandate saves us both time. A vague one means you see the wrong companies.',
    content: `
      <p>Deloitte's 2026 Asia Pacific almanac says Southeast Asian dry powder remains elevated at US$21.1 billion, with deployment centred on mid-market buyouts and platform building. Foxmont Capital Partners put private capital deployed in the Philippines at about US$1.5 billion in 2025, up 34%, of which about US$490 million was debt. The money is in the region. What funders tell us is harder to come by is the right company in front of them, at the right size, early enough to matter.</p>
      <figure>
        <img src="/images/insights/funder-mandate-example.png" alt="Example of a one-page mandate covering sectors, ticket size, stake and control, financial floor, geography, and hold and exit, beside a note that funders get a short list of anonymous teasers, with names only after an NDA." width="1600" height="800" loading="lazy" />
      </figure>
      <h3>What a Mandate Needs</h3>
      <p>One page is enough. These are the items that let us match well:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Item</th><th>What we need</th><th>Example (illustrative)</th></tr></thead>
        <tbody>
          <tr><td>Sectors</td><td>Where you invest, and where you will not</td><td>Healthcare, logistics, consumer services</td></tr>
          <tr><td>Ticket size</td><td>Your range per deal, in pesos or dollars</td><td>₱200 million to ₱1 billion</td></tr>
          <tr><td>Stake and control</td><td>Majority, minority, or either</td><td>Minority with a board seat</td></tr>
          <tr><td>Financial floor</td><td>Revenue, profit and track record you need</td><td>Profitable three years running</td></tr>
          <tr><td>Geography</td><td>Regions you will cover</td><td>Metro Manila, Cebu, Davao</td></tr>
          <tr><td>Hold and exit</td><td>How long you hold and how you exit</td><td>Five to seven years, sale to a corporate</td></tr>
          <tr><td>Deal-breakers</td><td>Anything that ends the conversation early</td><td>Heavy dependence on one customer</td></tr>
        </tbody>
      </table></div>
      <h3>What You Get Back</h3>
      <p>A short list, not a mailing blast. We send an anonymous teaser only when a company fits your mandate and has passed a light screen of its financials. Names come after you sign an NDA. If nothing fits, we tell you, and we would rather do that than send you filler.</p>
      <h3>What We Ask of You</h3>
      <p>Tell us quickly when a teaser is not a fit, and why. A one-line answer is enough, and it makes the next one better. Treat what we send as confidential. And tell us when your mandate changes, because a fund that has just filled its healthcare slot should not keep seeing healthcare.</p>
      <h3>Honest Limits</h3>
      <p>A mandate is a guide, not a contract, and sending one does not oblige you to do a deal. We do not give investment advice. Your own diligence and your own advisers decide what you buy. Foreign ownership limits in some sectors can narrow what you are allowed to hold, so say so in your mandate if that applies. We talk about fees before the first introduction, not after.</p>
      <h3>Who Should Send One</h3>
      <ul>
        <li>Private equity and growth funds with a Philippines or ASEAN mid-market focus.</li>
        <li>Family offices looking for direct stakes in operating companies.</li>
        <li>Corporates that want bolt-on acquisitions or a partner in a new region.</li>
      </ul>
      <p>Email your mandate to <a href="mailto:info@purlieu.us">info@purlieu.us</a>. A page, a short note, or even a call is enough to start. Funders who know what they want find it faster, and the page is a small effort for a much better list.</p>
      <p><em>If your fund wrote down its ideal Philippine target on one page today, how much of it could you fill in?</em></p>
      <p><em>${DISCLOSURE}</em></p>
      <p><em>Sources: Deloitte, Asia Pacific Private Equity 2026 Almanac; Foxmont Capital Partners, 2026 private capital report, via The Asset and Daily Guardian.</em></p>
    `,
  },
]
