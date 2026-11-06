import type { InsightPost } from '@/lib/types'

const DISCLOSURE =
  'Disclosure: Burton W. Crapps Sr. is founder and director of RoadPacker International Pte Ltd, and Purlieu Management advises RoadPacker ASEAN, which supplies RoadPacker Plus.'

const base = { date: '2026-11-05', category: 'Infrastructure', featured: false }

export const roadPackerPosts: InsightPost[] = [
  {
    ...base,
    slug: 'philippine-farm-road-budget-halved',
    title: "The Philippines' 2027 Budget Proposal Halves Farm Road Money. The Backlog Isn't Shrinking.",
    readTime: '4 min read',
    excerpt:
      'A halved farm-road budget does not have to mean half the roads. It does mean every peso has to carry more road.',
    content: `
      <p>The 2027 National Expenditure Program proposes ₱16 billion for the DA's farm-to-market roads, less than half of this year's ₱33.01 billion. Congress is not finished: last year's proposal was also ₱16 billion before lawmakers doubled it.</p>
      <p>At an October 21 Senate hearing, Agriculture Secretary Francisco Tiu Laurel Jr. put the backlog at 52,000 kilometres. His answer to the gap is another ₱80 billion of projects through public-private partnerships, on top of the ₱16 billion. Whether that programme materialises or not, planners are going to be asked to do more road with less peso.</p>
      <p>That leaves one lever worth pulling: cost per kilometre.</p>
      <p>The DA now works on about ₱15 million per kilometre for a concrete two-lane farm-to-market road, a figure it kept because of higher materials and fuel costs. Last year it hoped to reach ₱12 million or lower, including by using soil stabilisers in certain areas. Those are finished-road numbers. But not every one of those 52,000 kilometres needs a concrete carriageway on day one. A lot of rural Philippines runs on gravel and compacted earth, and the real question for those roads is how long they last once the rains arrive.</p>
      <h3>Where Stabilisation Fits</h3>
      <p>This is where in-situ stabilisation earns a look. RoadPacker Plus is an ionic concentrate that changes how clay particles in the existing soil pack and bond, so the soil underfoot becomes the road base. No quarry, no haul, no stockpile.</p>
      <h3>What Our Cost Model Says</h3>
      <p>Here is what our own cost model says for a 1 km access road, 6 m wide, 150 mm deep, with a local quarry about as far away as it usually is:</p>
      <ul>
        <li>Conventional gravel build: ₱2.43 million</li>
        <li>RoadPacker Plus build: ₱1.39 million</li>
        <li>Difference: about ₱1.05 million per kilometre, or 43%</li>
      </ul>
      <p>One 205-litre drum treats roughly 5,760 m² at 150 mm. For that kilometre it replaces about 2,040 tonnes of imported aggregate. I want to be careful here: this is a gravel-class road, so I am not comparing it with ₱15 million concrete. I am comparing it with the road farmers actually end up with when the concrete money doesn't arrive, which is gravel that washes off in the next wet season.</p>
      <h3>Two Honest Limits</h3>
      <p>First, the soil has to qualify. We ask for pH between 7.0 and 8.0, cation exchange capacity above 15 meq/100g by the methylene blue method, and more than 15% clay. Some alluvial plains fit. Many weathered upland soils are acidic and may fail on pH without lime pre-treatment. A lab decides, not a brochure.</p>
      <p>Second, the buyer matters. Government tenders are a slow, crowded lane, and we are confirming how RP+ fits DPWH's current base-course specifications. The practical first customers are private: plantations, cooperatives, developers and local governments spending their own funds, and any PPP proponent hunting for a lower cost per kilometre in the ₱80 billion programme the DA is proposing.</p>
      <h3>The Bottom Line</h3>
      <p>A halved budget does not have to mean half the roads. It does mean every peso has to carry more road.</p>
      <p><em>If you plan or build farm roads and the 2027 money comes in at ₱16 billion, which kilometres do you drop, and which could you build for less?</em></p>
      <p><em>${DISCLOSURE}</em></p>
      <p><em>Sources: Manila Times via Newswav, BusinessMirror and Philstar, October 2026; GMA News on the 2026 budget; PTV News on per-kilometre costs; RoadPacker cost model (company data).</em></p>
    `,
  },
  {
    ...base,
    slug: 'flood-control-scandal-trust-is-not-a-specification',
    title: 'After the Flood Control Scandal, "Trust Us" Is Not a Specification',
    readTime: '3 min read',
    excerpt:
      'Procurement reform tells you who built the road. A plate load test tells you whether it holds.',
    content: `
      <p>By October 2025, inspectors from the military, police and the planning department had checked an initial 8,000 flood control projects, and DPWH Secretary Vince Dizon reported that 421 were ghosts.</p>
      <p>That figure explains most of what has happened in Philippine infrastructure since 2025. Farm-to-market roads began moving from DPWH to the Department of Agriculture, though DPWH still holds most of this year's projects. A DA audit of those roads found nine projects in Mindanao that did not exist, worth about ₱125 million. DPWH floated a procurement green lane in February 2026 to coax reputable builders back, and launched a blockchain ledger, starting with foreign-assisted projects, meant to follow projects from bidding to completion. And in October 2026, Secretary Dizon said the scandal had delayed the completion of government projects.</p>
      <h3>Paperwork Versus Performance</h3>
      <p>All of that is reform of paperwork: who bids, who awards, who gets tracked. It matters. But a road is not a document.</p>
      <p>A road either carries its load or it doesn't, and you can find out in a day with a plate and a hydraulic jack. The most useful thing an owner, an auditor or a farmer's cooperative can ask for is a result that someone else can repeat.</p>
      <h3>What Verification Looks Like</h3>
      <p>Here is what that looks like in practice. On a pilot access road section in Laguna last February, we treated a 600 m² area, 200 mm deep, and had it tested three ways.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Test</th><th>What it checks</th><th>Pass mark</th><th>Result</th></tr></thead>
        <tbody>
          <tr><td>Field density</td><td>Compaction of the treated layer</td><td>90% minimum</td><td>100.7%, 101.4%, 101.8%</td></tr>
          <tr><td>DCP / penetration</td><td>Stiffness down through the layer</td><td>4,000 PSI minimum</td><td>7,215 to 13,071 PSI</td></tr>
          <tr><td>Plate load</td><td>Bearing capacity under load</td><td>550 kPa target</td><td>637 kPa (+15.8%)</td></tr>
        </tbody>
      </table></div>
      <p>None of those numbers needs anyone's goodwill. Any competent lab can run the same three tests on the same road next year and compare.</p>
      <p>That is how we like to work. Before a full project, a trial section on the actual alignment. Pass or fail tests reported to the owner's engineer. A completion record signed jointly by both sides' engineers confirming the soil met requirements, the product was applied to specification, and the density results were in. If a result misses, the paper says so.</p>
      <h3>The Honest Caveat</h3>
      <p>To be fair to everyone: tests do not fix procurement. A rigged award can still sit on top of a good test. But when the acceptance criterion is a number a third party can verify, the room for a road that exists only in a progress report gets a lot smaller.</p>
      <p>Procurement reform tells you who built the road. A plate load test tells you whether it holds. You want both.</p>
      <p><em>If you could make one field test mandatory on every government road in the Philippines, which would it be?</em></p>
      <p><em>${DISCLOSURE}</em></p>
      <p><em>Sources: GMA News, October 2025; BusinessMirror, October 2026; Manila Bulletin and Daily Tribune, February 2026; Manila Times, 8 October 2026; RoadPacker Plus pilot results, Paete, Laguna (company data).</em></p>
    `,
  },
  {
    ...base,
    slug: 'vietnam-sand-shortage-asean-roads',
    title: "Seven Vietnamese Road Projects Still Need 22 Million Cubic Metres of Sand. What Does That Say About the Rest of ASEAN's Roads?",
    readTime: '3 min read',
    excerpt:
      'Sand is the symptom. The real exposure is how much of a conventional road has to be dug up somewhere else.',
    content: `
      <p>Seven major Vietnamese transport projects, including an expressway in the Mekong Delta and two ring roads around Hanoi and Ho Chi Minh City, still need to find more than 22 million cubic metres of sand.</p>
      <h3>The Sand Squeeze</h3>
      <p>That was the June 2026 count, and it followed a hard first half. Sand, stone and brick prices jumped 13.5% to 23.3% in a single month this spring. One Vietnamese report puts on-site sand at 5% to 35% above published prices. The Ministry of Construction reported asphalt up by nearly a third. In January, barges queued along almost two kilometres of the Tien River to take on Cambodian sand. By mid-June steel prices were easing, but sand and stone were not.</p>
      <p>I should say plainly that RoadPacker has not worked in Vietnam. I am using it as the clearest signal in the region of where road-building materials are heading.</p>
      <h3>The Real Lesson</h3>
      <p>The lesson is not about sand alone. It is about how much of a conventional road is simply material that has to be dug up somewhere else, loaded, trucked and dumped. In our cost model for a 1 km access road (6 m wide, 150 mm deep), aggregate and haulage come to ₱1.53 million of ₱2.21 million in direct cost. That is about 70%. Whatever moves the price of quarry stone and diesel moves most of the bill.</p>
      <p>In-situ stabilisation attacks that line. About one drum of RoadPacker Plus treats that same kilometre and replaces about 2,040 tonnes of aggregate, which is roughly a hundred 20-tonne truck loads (our arithmetic). The soil that is already there does the work.</p>
      <h3>The Trade-Off</h3>
      <p>No free lunch, though. The drum is about half of the stabilised road's cost, and it is priced in dollars. You are swapping exposure to local quarry and fuel prices for a fixed product price plus a short, light delivery. For most sites the swap is favourable. For a site sitting next to a cheap quarry it may not be, and we will say so.</p>
      <p>What this does not do: it does not replace sand in concrete, or fill in an embankment. It is a base for access, haul and farm roads where the in-situ soil passes the lab tests.</p>
      <h3>What to Watch</h3>
      <p>Two things are worth watching as ASEAN keeps building. Whether sand and quarry supply tightens in more countries, as it has in Vietnam, where new mine licences have not closed the gap. And whether contractors on fixed-price packages, who carry all the material risk, start asking what a smaller material footprint is worth.</p>
      <p><em>If your last road job went over budget, how much of the overrun was material you didn't see coming?</em></p>
      <p><em>${DISCLOSURE}</em></p>
      <p><em>Sources: Dan Tri, 15 June 2026; Saigon Times; Vietstock/Bizhub, April 2026; Tuoi Tre, 12 January 2026; Vietnam News; index.vn; RoadPacker cost model (company data).</em></p>
    `,
  },
  {
    ...base,
    slug: 'every-gigawatt-needs-a-road',
    title: 'Every Gigawatt Needs a Road',
    readTime: '4 min read',
    excerpt:
      'The energy transition is told as a technology story. On site, a lot of it is a dirt-road story.',
    content: `
      <p>The Philippines' fourth Green Energy Auction awarded about 10.2 GW of renewable projects. That includes about 4.2 GW of ground-mounted solar and around 2.5 GW of onshore wind.</p>
      <h3>More Is Coming</h3>
      <p>The Department of Energy is not stopping there. Its 10-year roadmap targets at least another 25 GW by 2035. Rounds planned for the next two years cover onshore wind, geothermal and canal-top solar, and an agrisolar and aquasolar round has terms of reference targeted for late 2026.</p>
      <p>Indonesia is pushing the same direction. It is already the world's second-largest geothermal producer, with about 2.7 GW installed, and in June 2025 it broke ground on five more plants totalling 260 MW, one of them in Lampung. Back in the Philippines, Silangan has produced its first metal and is moving toward commercial operation, Kingking is at feasibility stage, and Tampakan is aiming for 2028.</p>
      <h3>Where the Delay Starts</h3>
      <p>Every one of those projects begins the same way: somebody has to get a crane, a transformer or a haul truck onto remote, often clay-rich ground before a single panel is mounted or a single tonne is mined.</p>
      <p>Access roads are rarely the headline, and they are often the first schedule risk. Rain stops gravel placement. Open sections soften and rut. Aggregate has to travel from a quarry that may be a long way off.</p>
      <h3>What We Have Tested</h3>
      <p>This is the setting RoadPacker Plus is aimed at. In February 2026, on a pilot access road section in Laguna, a 200 mm treated layer reached 637 kPa on the plate load test against a 550 kPa target, and passed density and penetration tests on every point. In our cost model, a 150 mm access road comes to ₱231 per square metre, against ₱406 for a conventional gravel build, a saving of about 43% per kilometre.</p>
      <h3>Why Contractors Care</h3>
      <p>Three reasons contractors on energy packages care:</p>
      <p><strong>Margin.</strong> Fixed-price packages leave little room for overruns. A lower direct cost lets you bid sharper and still protect your margin.</p>
      <p><strong>Schedule.</strong> No aggregate stockpiling or haul cycles, and standard equipment: grader, water truck, vibratory roller.</p>
      <p><strong>Weather.</strong> A dense, water-resistant surface holds up better than loose gravel through the wet season.</p>
      <h3>Two Cautions</h3>
      <p>Geothermal and volcanic soils are often acidic, and our process needs a pH between 7.0 and 8.0. That can mean lime pre-treatment, which adds cost and a step. We price it in rather than hope.</p>
      <p>And mining is policy-driven. Indonesia cut its 2026 nickel ore quota by about a third, which market sources read as a move to support prices, and has since begun approving revisions. Haul-road demand there tracks regulators as much as the market. Private energy and mining clients still look like the fastest path to a decision, because they don't need a government accreditation to say yes.</p>
      <p>The energy transition gets described as a technology story. On site, a lot of it is a dirt-road story.</p>
      <p><em>If you are in EPC or O&amp;M for renewables or mining in ASEAN, what has been the single biggest access-road delay on your last project?</em></p>
      <p><em>${DISCLOSURE}</em></p>
      <p><em>Sources: pv magazine and Enerdata on GEA-4; Rigzone and pv magazine on the auction roadmap; Antara and ThinkGeoEnergy on Indonesian geothermal; Insider PH, Stantec and The Star on mining projects; Argus, Jakarta Post and Mysteel on nickel quotas; RoadPacker pilot results and cost model (company data).</em></p>
    `,
  },
  {
    ...base,
    slug: 'ai-build-out-mud-problem',
    title: 'The AI Build-out Has a Mud Problem',
    readTime: '3 min read',
    excerpt:
      'Announced capacity gets the headlines. Getting trucks onto the site through the first wet season gets the halls built.',
    content: `
      <p>Asia Pacific's data centre development pipeline hit a record 26.5 GW in the first half of 2026, and Southeast Asia holds about half of the region's capacity under construction.</p>
      <h3>Where the Capacity Is</h3>
      <p>Malaysia leads with 1,039 MW under construction. Thailand follows at 859 MW, all of it in Bangkok, where the figure rose 148%. Johor's pipeline stands at more than 3 GW. Bangkok's is about 2.1 GW and Jakarta's about 1.7 GW, according to Cushman &amp; Wakefield's H1 2026 update.</p>
      <p>A fair warning before we get excited: announced is not delivered. Malaysia alone reports more than 6 GW of announced capacity, against 1,039 MW under construction. Across Asia Pacific, about 82% of the pipeline is still only planned (21.7 GW of 26.5 GW, our arithmetic). Some of this will not get built, or not on schedule.</p>
      <h3>The Problem Nobody Announces</h3>
      <p>But the part that is getting built has a problem nobody puts in the press release. Before a hall goes up, trucks have to reach the site with piling rigs, precast, switchgear, generators and chillers. On soft or low-lying ground, the first heavy rains can turn a site entrance into a pond.</p>
      <p>A data centre developer's schedule is measured in weeks of delay to revenue. A firm all-weather access road and laydown area on day one is cheap insurance, and it is exactly the kind of civil work that a stabilised in-situ base can deliver without shipping in thousands of tonnes of gravel.</p>
      <h3>What Our Model Says</h3>
      <p>The numbers from our access-road cost model (1 km, 6 m wide, 150 mm deep, Philippine rates):</p>
      <ul>
        <li>RoadPacker Plus: about ₱231 per m²</li>
        <li>Conventional gravel base: about ₱406 per m²</li>
        <li>Aggregate not trucked in: about 2,040 tonnes per kilometre</li>
      </ul>
      <h3>The Limits</h3>
      <p>Some important honesty here. A haul road for 100-tonne transformers is not the same design as a farm track, and thickness has to come from a site-specific design, not from our model. Johor, Batam and Eastern Seaboard soils differ from Laguna's, and we will not guess whether they qualify. Suitability comes from pH, methylene blue and clay tests at an accredited lab. What we can say is that wherever the in-situ soil passes, the aggregate, haulage and re-grading line items shrink or go.</p>
      <p>The contractors who win data centre packages in this region will be the ones who solve the unglamorous parts quickly. Roads are one of them.</p>
      <p><em>If you are on a data centre site team in ASEAN, how many days did weather cost you on access and laydown last wet season?</em></p>
      <p><em>${DISCLOSURE}</em></p>
      <p><em>Sources: Cushman &amp; Wakefield, Asia Pacific Data Centre Update H1 2026; The Next Web; Computer Weekly; RoadPacker cost model (company data).</em></p>
    `,
  },
  {
    ...base,
    slug: 'asean-road-budgets-new-road-money-squeeze',
    title: 'Three ASEAN Governments Are Squeezing New-Road Money. What Does That Mean for Repairs?',
    readTime: '4 min read',
    excerpt:
      'When new-build money is tight, the question buyers should ask is how long a repair lasts.',
    content: `
      <p>Indonesia's 2027 highway budget of about Rp 37.3 trillion, down roughly a quarter from 2026, targets 13.5 km of new toll road and about 200 km of other new road. It also covers routine preservation of 47,603 km. Preservation takes Rp 16.5 trillion, about twice the Rp 8.2 trillion for road construction.</p>
      <p>Read those numbers side by side and you see the shift. The ministry is also targeting 97% of national roads in good condition by 2027, and 73% of provincial and 61% of district roads.</p>
      <h3>Thailand and Malaysia</h3>
      <p>Thailand is moving in a similar direction. Its Transport Ministry has told agencies to build the FY2027 budget around repair and rehabilitation of existing roads rather than new construction, though its requests still include 17 road-expansion projects, which a deputy minister said were already planned and may be trimmed.</p>
      <p>Malaysia topped up its 2026 Rural Roads Programme to RM3.1 billion from RM2.11 billion to keep projects going and pay contractors, and asked that new awards wait until arrears clear. Budget 2027 gives the Works Ministry RM10.88 billion, with nearly RM800 million for federal road maintenance. In Sabah and Sarawak, the government spent RM44.83 million repairing 254.8 km of farm roads between 2022 and mid-2025. That works out to about RM176,000 a kilometre (our arithmetic).</p>
      <p>Three countries, three budget cycles, one pressure: new-build money is tight, and the roads already in the ground need looking after.</p>
      <h3>What That Changes</h3>
      <p>That changes which products make sense. A maintenance budget does not reward the cheapest first cost. It rewards whatever reduces the number of times you send a grader and a gravel truck back to the same section. If a treated base stays dense, water-resistant and dust-free through the wet season, the re-grading line shrinks. Field observations in our pilot noted a stable surface under equipment loading and reduced dust.</p>
      <h3>The Part We Should Say Ourselves</h3>
      <p>Here is the part I would rather say myself than have someone else point out. Our field record is nine months old. Our pilot passed every test it was given, but a nine-month-old road does not prove a ten-year road. What would settle it is simple and public: re-test the same sections at 6, 12 and 18 months and publish the results, good or bad. A maintenance buyer should insist on that from any stabiliser, ours included.</p>
      <p>The other thing a maintenance buyer should ask is where the money goes. In our model, product is about half of the stabilised cost. The rest is the same grader, water truck and roller the crew already owns, which suits the "fix more with what we have" mood in these budgets.</p>
      <p>If governments have decided that keeping roads is the priority, long-run performance data is what buyers should ask every supplier for, us included.</p>
      <p><em>What would you need to see, in months and in numbers, before specifying a stabilised base on a maintenance contract?</em></p>
      <p><em>${DISCLOSURE}</em></p>
      <p><em>Sources: Antara, Warta Kini and Majalah Lintas on Indonesia; Pattaya Mail and Thairath on Thailand; Malay Mail, Bernama and The Sun on Malaysia; RoadPacker pilot observations and cost model (company data).</em></p>
    `,
  },
  {
    ...base,
    slug: 'why-we-turn-down-some-soils',
    title: 'Why We Turn Down Some Soils',
    readTime: '4 min read',
    excerpt:
      'A supplier that never says no is not giving advice. Here is how we decide when RoadPacker Plus is the wrong answer.',
    content: `
      <p>Recently a partner in Indonesia sent us a client's soil report and asked whether our product would work. We said we couldn't tell yet. Here is why that answer is good for both of us.</p>
      <h3>What We Ask For</h3>
      <p>RoadPacker Plus works by ionic exchange on clay particles. No clay, or the wrong chemistry, and there is nothing for it to work on. So before we quote, we ask for four things, tested at an accredited lab:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Parameter</th><th>We need</th><th>Method</th></tr></thead>
        <tbody>
          <tr><td>Soil pH</td><td>7.0 to 8.0</td><td>ASTM D4972</td></tr>
          <tr><td>Methylene blue index (our CEC proxy)</td><td>Above 15 meq/100g</td><td>ASTM C837</td></tr>
          <tr><td>Clay content</td><td>Above 15%</td><td>ASTM D7928, hydrometer</td></tr>
          <tr><td>Plasticity</td><td>Plastic fines</td><td>ASTM D4318</td></tr>
        </tbody>
      </table></div>
      <p>We do not accept CEC from extraction methods such as ammonium acetate as a substitute. They can give different numbers from a methylene blue index, so our threshold does not transfer.</p>
      <h3>A Recent Example</h3>
      <p>The Indonesian report is a good example. All three samples came back acidic, at pH 3.83, 6.48 and 6.41, and on a whole-soil basis the CEC was well under 15. But the samples had been taken from nine to 29 metres down. We treat the top 150 to 200 mm. We could not rule it in or out, and we said so. We asked for near-surface samples, flagged that the lowest pH might point to acid-sulfate soil that needs checking, and proposed a small bench trial before anyone spent money.</p>
      <p>That is the first honest answer: not yet.</p>
      <h3>Where the Money Is</h3>
      <p>The second is about money. The saving depends on what aggregate costs where you are.</p>
      <ul>
        <li>In our Philippine model, RoadPacker Plus beats gravel by 43% per kilometre, with aggregate priced at ₱750 a tonne delivered. By our arithmetic the saving disappears if delivered aggregate falls to about ₱284 a tonne.</li>
        <li>In our indicative Oman model for farm roads, the saving is about 21% at a 50 km haul, and the break-even is around OMR 3.1 a tonne delivered.</li>
      </ul>
      <p>If your quarry is next door and the stone is cheap, gravel can win. We would rather tell you that now than after your purchase order.</p>
      <h3>The Finish</h3>
      <p>The third is about the finish. In the heat, our pilot section developed fine surface shrinkage cracks. Cement-stabilised bases also crack as they cure, and those cracks can run through the layer. Ours stayed in the top few millimetres and did not change the test results. Light watering for the first few days is the control. In our pilot, that kept them cosmetic.</p>
      <p>A supplier that never says no is not giving advice. Ask us for the soil criteria, run your own tests, and hold us to the results.</p>
      <p><em>What is the clearest "no" a supplier has ever given you that later turned out to be the right call?</em></p>
      <p><em>${DISCLOSURE}</em></p>
      <p><em>Sources: ASTM standards D4972, C837, D7928 and D4318; RoadPacker soil criteria, cost models and pilot results (company data).</em></p>
    `,
  },
]
