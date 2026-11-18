/** Owner-confirmed facts only. No prices, reviews, client names or response-time promises. */
export const BRAND = {
  name: 'EV Mobile Charging Dallas',
  short: 'EV Mobile Charging',
  phone: '+1 888-675-9555',
  phoneHref: 'tel:+18886759555',
  phoneE164: '+18886759555',
  email: 'info@beechargedev.com',
  street: '66 W Flagler St',
  locality: 'Miami',
  region: 'FL',
  zip: '33130',
  founded: 2020,
  /** Legal entity: shown on the privacy and terms pages only. */
  legalEntity: 'Bee Charged EV LLC',
} as const;

export type Service = { slug: string; title: string; short: string; blurb: string; points: string[]; lead: string; who: string[]; steps: string[]; faq: { q: string; a: string }[] };
const P = BRAND.phone;

export const SERVICES: Service[] = [
  {
    slug: 'emergency-mobile-ev-charging', title: 'Emergency Mobile EV Charging', short: 'Emergency charging',
    blurb: 'A technician brings a DC fast charger to a stranded or low-battery EV anywhere in Dallas-Fort Worth.',
    lead: 'Emergency mobile EV charging puts a DC fast charger next to your stranded electric vehicle in Dallas-Fort Worth, so you drive away on your own power instead of waiting for a tow.',
    points: ['Charger delivered to the vehicle', 'Works with most EV makes and models', 'Staff confirm coverage and details by phone', 'Coverage around the clock through our national network'],
    who: ['Drivers whose EV ran out of range', 'Rideshare and delivery drivers losing earnings while parked', 'Visitors in rental EVs unfamiliar with local stations', 'Anyone parked where no charger is nearby'],
    steps: [`Call ${P} and share your location and vehicle`, 'Staff confirm coverage and details by phone', 'A technician brings the charger to your vehicle', 'You get enough charge to reach your destination or a station'],
    faq: [
      { q: 'What does emergency mobile EV charging include?', a: 'Emergency mobile EV charging includes a technician delivering a portable DC fast charger to your vehicle and adding charge so the car can move again.' },
      { q: 'Can you charge any EV in Dallas?', a: 'We charge most electric vehicle makes and models. Share your vehicle details when you call so staff can confirm compatibility.' },
      { q: 'Is emergency EV charging available at night in Dallas?', a: `We support emergency charging around the clock through our national network. Call ${P} and staff confirm availability for your location.` },
    ],
  },
  {
    slug: 'fleet-business-ev-charging', title: 'Fleet and Business EV Charging', short: 'Fleet and business',
    blurb: 'Mobile charging for delivery, rideshare, dealership and corporate fleets that cannot afford downtime.',
    lead: 'Fleet and business EV charging keeps Dallas delivery, rideshare, dealership and corporate vehicles charged at the depot, lot or job site, with plans built around your schedule.',
    points: ['Charging at your depot, lot or job site', 'Scheduled or one-time visits', 'Quote-based plans built around your vehicles', 'Experience supporting fleets in 30+ states'],
    who: ['Delivery and last-mile logistics fleets', 'Rideshare and car rental operators', 'EV dealerships preparing inventory', 'Corporate, hospitality and property managers with EV users'],
    steps: ['Share your fleet size, vehicle types and locations', 'We design a charging plan around your schedule', 'Receive a written quote with no surprise pricing', 'Technicians deliver charging on the agreed schedule'],
    faq: [
      { q: 'How does fleet EV charging work in Dallas?', a: 'Fleet EV charging works by sending a technician with a charger to your vehicles on a planned schedule, so vehicles charge without driving to public stations.' },
      { q: 'Do you have fleet experience?', a: 'Yes. Our team has supported fleets across more than 30 states and 300 counties since 2020.' },
      { q: 'How is fleet charging priced?', a: `Fleet charging is quote-based and depends on vehicle count, locations and schedule. Call ${P} to request a quote.` },
    ],
  },
  {
    slug: 'home-ev-charger-installation', title: 'Home EV Charger Installation', short: 'Home charger installation',
    blurb: 'Level 2 and Level 3 charger installation for Dallas homes, garages and driveways.',
    lead: 'Home EV charger installation brings Level 2 charging to Dallas garages and driveways after a site review, so your car is full every morning without a station trip.',
    points: ['Level 2 installs for garages and driveways', 'Site review before any work starts', 'Written quote, no surprise pricing', 'Tested and handed over ready to use'],
    who: ['New EV owners setting up home charging', 'Homeowners upgrading from a wall outlet', 'Condo and townhome owners with approval to install', 'Households adding a second EV'],
    steps: ['Contact us with your property and vehicle details', 'Staff review the site and your goals', 'Receive a written quote for the install', 'We install and test the charger'],
    faq: [
      { q: 'What does a home EV charger installation include?', a: 'A home installation includes a site review, the charger setup, and testing so the unit works with your vehicle before handover.' },
      { q: 'Is Level 2 enough for home charging?', a: 'A Level 2 charger suits overnight home charging and adds range much faster than a standard wall outlet.' },
      { q: 'Do I need a site visit before installation?', a: `A site review comes first, because electrical capacity and layout decide which charger fits. Call ${P} to arrange it.` },
    ],
  },
  {
    slug: 'commercial-ev-charger-installation', title: 'Commercial EV Charger Installation', short: 'Commercial installation',
    blurb: 'Level 2 and Level 3 chargers for offices, retail, hospitality and multifamily properties.',
    lead: 'Commercial EV charger installation adds Level 2 and Level 3 charging to Dallas offices, retail sites, hotels and multifamily properties, planned around your users and power capacity.',
    points: ['Level 2 and Level 3 options', 'Planning around power capacity and parking layout', 'Written quote before work begins', 'Support for fleet depots and customer charging'],
    who: ['Office and retail property owners', 'Hotels and hospitality operators', 'Multifamily and condo managers', 'Fleet operators building a depot'],
    steps: ['Tell us about the property and who will charge', 'Staff review the site and power options', 'Receive a written quote and plan', 'We install, test and hand over the chargers'],
    faq: [
      { q: 'What is the difference between Level 2 and Level 3 chargers?', a: 'A Level 2 charger suits workday or overnight charging, while a Level 3 DC fast charger adds range far faster and suits commercial and fleet use.' },
      { q: 'Can you install chargers for a multifamily building?', a: `Yes. We plan commercial installs for multifamily, office and hospitality properties after a site review. Call ${P} to start.` },
      { q: 'Do you offer mobile charging while the install is built?', a: 'Yes, mobile charging can cover vehicles while a permanent installation is planned. Staff confirm the details on the call.' },
    ],
  },
  {
    slug: 'ev-charging-equipment-sales', title: 'EV Charging Equipment and Startup Kits', short: 'Equipment and startup kits',
    blurb: 'Charging equipment and all-in-one startup kits for businesses and entrepreneurs entering EV charging.',
    lead: 'EV charging equipment and startup kits give Dallas businesses and entrepreneurs the hardware to start charging customers, fleets or their own vehicles.',
    points: ['Charging hardware for resale or use', 'Business startup kits', 'Guidance from an operating charging team', 'Quote-based packages'],
    who: ['Entrepreneurs starting a mobile charging business', 'Businesses adding charging for customers', 'Resellers building an EV offer', 'Fleet owners standardizing equipment'],
    steps: ['Tell us your goal and budget range', 'We recommend equipment or a startup kit', 'Receive a written quote', 'Order and get set up with guidance'],
    faq: [
      { q: 'What is included in an EV charging startup kit?', a: `Kits are all-in-one packages built for new charging businesses. Call ${P} for the current contents and a quote.` },
      { q: 'Can I buy equipment without a kit?', a: 'Yes. We quote individual charging equipment for businesses and resellers.' },
    ],
  },
];
export const servicePath = (slug: string) => `/services/${slug}/`;

export type Area = { slug: string; name: string; intro: string; hoods: string[]; scenarios: string[]; faq: { q: string; a: string } };
export const AREAS: Area[] = [
  { slug: 'dallas', name: 'Dallas', intro: 'We deliver mobile EV charging in Dallas to drivers and fleets across downtown, Uptown, Deep Ellum and nearby neighborhoods, at the curb, garage or lot.', hoods: ['Downtown Dallas', 'Uptown', 'Deep Ellum', 'Oak Lawn', 'Bishop Arts District', 'Preston Hollow'], scenarios: ['A rideshare driver low on charge between airport runs', 'A resident in a high-rise garage with no available charger', 'A delivery fleet needing a midday top-up'], faq: { q: 'Do you charge EVs in downtown Dallas and Uptown?', a: 'Yes. We serve downtown Dallas, Uptown and nearby neighborhoods. Call to confirm your exact location.' } },
  { slug: 'fort-worth', name: 'Fort Worth', intro: 'We bring mobile EV charging to Fort Worth drivers, visitors and fleets, from downtown garages to the Stockyards and the Near Southside.', hoods: ['Downtown Fort Worth', 'Sundance Square', 'Near Southside', 'Stockyards', 'Cultural District'], scenarios: ['A visitor in a rental EV low on charge downtown', 'A resident parked near the hospital district', 'A tour or event vehicle needing charge before an evening out'], faq: { q: 'Can you charge an EV in downtown Fort Worth?', a: 'Yes. We serve downtown Fort Worth and nearby districts. Call to confirm your exact location.' } },
  { slug: 'plano', name: 'Plano', intro: 'We provide mobile EV charging in Plano for corporate campuses, residents and commuters, with scheduled visits for teams that charge on a routine.', hoods: ['Legacy West', 'Downtown Plano', 'Willow Bend'], scenarios: ['An office employee whose EV is low at midday', 'A family whose home charger is not installed yet', 'A corporate team needing scheduled charging'], faq: { q: 'Do you serve Plano offices and corporate campuses?', a: 'Yes. We offer charging for office parking and can quote scheduled visits for teams.' } },
  { slug: 'irving', name: 'Irving', intro: 'We deliver mobile EV charging in Irving to hotel guests, business travelers, logistics fleets and residents around Las Colinas and the airport corridor.', hoods: ['Las Colinas', 'Valley Ranch', 'DFW Airport area'], scenarios: ['A traveler low on charge near a hotel', 'A logistics fleet charging at a depot', 'A rideshare driver waiting between airport trips'], faq: { q: 'Can you charge a car near DFW Airport?', a: 'We serve the Irving and airport corridor when coverage allows. Call to confirm your location.' } },
  { slug: 'arlington', name: 'Arlington', intro: 'We bring mobile EV charging to Arlington for event visitors, students, residents and local businesses, including the Entertainment District and the campus area.', hoods: ['Entertainment District', 'Downtown Arlington', 'UT Arlington area'], scenarios: ['A visitor low on charge before an event', 'A student or staff member parked on campus', 'A small business with an EV work vehicle'], faq: { q: 'Do you charge EVs in the Arlington Entertainment District?', a: 'We can serve visitors in the area when the property and parking allow it. Call to confirm the details.' } },
  { slug: 'frisco', name: 'Frisco', intro: 'We offer mobile EV charging in Frisco for residents, shoppers and offices, so drivers recharge where they already park.', hoods: ['The Star', 'Stonebriar', 'Downtown Frisco'], scenarios: ['A shopper low on charge at a retail center', 'A resident waiting on a home charger install', 'An office team needing scheduled charging'], faq: { q: 'Do you serve Frisco homes and businesses?', a: 'Yes. We serve Frisco homes, offices and lots. Call to confirm coverage for your address.' } },
  { slug: 'garland', name: 'Garland', intro: 'We deliver mobile EV charging in Garland to commuters, local businesses and fleets, keeping vehicles on the road without a trip to a station.', hoods: ['Downtown Garland', 'Firewheel area'], scenarios: ['A commuter stuck with a low battery', 'A delivery vehicle needing charge between stops', 'A small business with an EV work truck'], faq: { q: 'Can you charge an EV in Garland?', a: 'Yes. We serve Garland and nearby areas. Call to confirm your exact address.' } },
  { slug: 'mckinney', name: 'McKinney', intro: 'We provide mobile EV charging in McKinney for downtown visitors, residents and growing communities in north Collin County.', hoods: ['Historic Downtown McKinney', 'Craig Ranch', 'Stonebridge Ranch'], scenarios: ['A visitor low on charge near the downtown square', 'A resident without a home charger yet', 'A property manager serving EV tenants'], faq: { q: 'Do you serve McKinney neighborhoods?', a: 'We serve McKinney when coverage allows. Call to confirm coverage for your street.' } },
  { slug: 'richardson', name: 'Richardson', intro: 'We bring mobile EV charging to Richardson offices, campuses and residents, from the Telecom Corridor to CityLine and the university area.', hoods: ['Telecom Corridor', 'CityLine', 'UT Dallas area'], scenarios: ['An employee whose EV is low at the office', 'A student or staff member parked on campus', 'A company adding charging for visitors'], faq: { q: 'Can you charge cars at Richardson offices?', a: 'Yes. We can serve office parking and quote scheduled visits for teams. Call for details.' } },
  { slug: 'denton', name: 'Denton', intro: 'We offer mobile EV charging in Denton for students, residents and businesses around the square and the university campuses.', hoods: ['Denton Square', 'UNT area'], scenarios: ['A student or staff member low on charge on campus', 'A resident without home charging', 'A visitor parked near the square'], faq: { q: 'Do you serve Denton?', a: 'We serve Denton when coverage allows. Call to confirm your location.' } },
];
export const areaPath = (slug: string) => `/locations/${slug}/`;

export const FAQ_GENERAL = [
  { q: 'What is mobile EV charging?', a: 'Mobile EV charging is a service where a technician brings a portable charger to your electric vehicle, so you charge where you are instead of driving to a station.' },
  { q: 'How do I request a charge in Dallas?', a: `Call ${P} or email ${BRAND.email}. Staff confirm your location, vehicle and coverage before dispatch, and a request alone is not a confirmed visit.` },
  { q: 'Which areas near Dallas do you serve?', a: 'We serve the Dallas-Fort Worth area, including Dallas, Fort Worth, Plano, Irving, Arlington, Frisco, Garland, McKinney, Richardson and Denton. Call to confirm your exact address.' },
  { q: 'Do you work with fleets and businesses?', a: 'Yes. Our team supports fleet and business charging programs in more than 30 states and 300 counties, and builds Dallas plans around each client.' },
  { q: 'How much does mobile EV charging cost in Dallas?', a: `Pricing is quote-based because it depends on the service, vehicle and location. Call ${P} and the team provides a quote before any work begins.` },
  { q: 'Can you install a home or business charger?', a: 'Yes. We install Level 2 and Level 3 chargers for homes and commercial properties after a site review and a written quote.' },
];

/** Neighborhoods that get their own page. Notes are general public geography only: no company claims. */
export const HOOD_NOTES: Record<string, string> = {
  'Downtown Dallas': 'the central business district, with office towers, hotels and parking garages',
  'Uptown': 'a dense district of apartments, offices and restaurants just north of downtown',
  'Deep Ellum': 'an entertainment district known for live music, murals and busy street parking',
  'Oak Lawn': 'an urban neighborhood of apartments, shops and restaurants near Turtle Creek',
  'Bishop Arts District': 'a district of independent shops and restaurants in the Oak Cliff area',
  'Preston Hollow': 'a residential area of larger homes in north Dallas',
  'Downtown Fort Worth': 'the central business district, with offices, hotels and garages',
  'Sundance Square': 'a downtown district of dining, shopping and entertainment with nearby garages',
  'Near Southside': 'a district south of downtown with hospitals, restaurants and shops',
  'Stockyards': 'a historic district known for western heritage, shops and visitors',
  'Cultural District': 'the area west of downtown that is home to several major museums',
  'Legacy West': 'a mixed-use district of corporate offices, retail and apartments',
  'Downtown Plano': 'the historic center of Plano with shops, restaurants and public parking',
  'Willow Bend': 'a shopping and residential area in west Plano',
  'Las Colinas': 'a business and residential district with corporate offices and hotels',
  'Valley Ranch': 'a residential community in north Irving',
  'DFW Airport area': 'the area around the airport with hotels, rental lots and logistics sites',
  'Entertainment District': 'the area of stadiums and attractions with large event parking lots',
  'Downtown Arlington': 'the central district of Arlington with restaurants and nearby campus life',
  'UT Arlington area': 'the university campus neighborhood with students, staff and visitors',
  'The Star': 'a mixed-use district with offices, retail and sports facilities',
  'Stonebriar': 'a major shopping and residential area in Frisco',
  'Downtown Frisco': 'the historic center of Frisco with shops and restaurants',
  'Downtown Garland': 'the central district of Garland with shops and public buildings',
  'Firewheel area': 'a shopping and dining area in northeast Garland',
  'Historic Downtown McKinney': 'a walkable square of shops, restaurants and public parking',
  'Craig Ranch': 'a mixed-use community of homes, offices and retail',
  'Stonebridge Ranch': 'a large residential community in McKinney',
  'Telecom Corridor': 'a corridor of technology and corporate offices',
  'CityLine': 'a mixed-use district with offices, apartments and retail',
  'UT Dallas area': 'the university campus neighborhood with students and staff',
  'Denton Square': 'the downtown square with shops, restaurants and nearby parking',
  'UNT area': 'the university campus neighborhood with students, staff and visitors',
};
export type Hood = { slug: string; name: string; note: string; area: Area };
const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const HOODS: Hood[] = AREAS.flatMap((area) => area.hoods.filter((h) => HOOD_NOTES[h] && h !== area.name).map((name) => ({ slug: slugify(name), name, note: HOOD_NOTES[name], area })));
export const hoodPath = (h: Pick<Hood, 'slug'> & { area: Pick<Area, 'slug'> }) => `/locations/${h.area.slug}/${h.slug}/`;
export const hoodFor = (areaSlug: string, name: string) => HOODS.find((h) => h.area.slug === areaSlug && h.name === name);
