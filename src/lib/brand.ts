/** Owner-confirmed facts only. No prices, reviews, client names or response-time promises. */
export const BRAND = {
  name: 'EV Mobile Charging Dallas',
  short: 'EV Mobile Charging',
  phone: '+1 888-675-9555',
  phoneHref: 'tel:+18886759555',
  phoneE164: '+18886759555',
  email: 'info@beechargedev.com',
  street: '66 W Flagler St',
  locality: 'Dallas',
  region: 'TX',
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
    blurb: 'A technician brings a DC fast charger to a stranded or low-battery EV anywhere in Dallas.',
    lead: 'Emergency mobile EV charging puts a DC fast charger next to your stranded electric vehicle in Dallas, so you drive away on your own power instead of waiting for a tow.',
    points: ['Charger delivered to the vehicle', 'Works with most EV makes and models', 'Staff confirm coverage and details by phone', 'Coverage around the clock through our national network'],
    who: ['Drivers whose EV ran out of range', 'Rideshare and delivery drivers losing earnings while parked', 'Drivers caught in a storm, flood or outage with a low battery', 'Anyone parked where no charger is nearby'],
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
    lead: 'Fleet and business EV charging keeps the Dallas-Fort Worth area delivery, rideshare, dealership and corporate vehicles charged at the depot, lot or job site, with plans built around your schedule.',
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
    blurb: 'Level 2 and Level 3 charger installation for the Dallas-Fort Worth area homes, garages and driveways.',
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
    lead: 'Commercial EV charger installation adds Level 2 and Level 3 charging to the Dallas-Fort Worth area offices, retail sites, hotels and multifamily properties, planned around your users and power capacity.',
    points: ['Level 2 and Level 3 options', 'Planning around power capacity and parking layout', 'Written quote before work begins', 'Support for fleet depots and customer charging'],
    who: ['Office and retail property owners', 'Hotels and hospitality operators', 'Multifamily and apartment managers', 'Fleet operators building a depot'],
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
    lead: 'EV charging equipment and startup kits give the Dallas-Fort Worth area businesses and entrepreneurs the hardware to start charging customers, fleets or their own vehicles.',
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

/** Cities named in structured data. Owner must confirm the real service area. */
export const AREAS = [
  { name: 'Dallas' }, { name: 'Fort Worth' }, { name: 'Plano' }, { name: 'Irving' }, { name: 'Arlington' }, { name: 'Frisco' }, { name: 'Garland' }, { name: 'McKinney' }, { name: 'Richardson' }, { name: 'Denton' },
] as const;

export const FAQ_GENERAL = [
  { q: 'What is mobile EV charging?', a: 'Mobile EV charging is a service where a technician brings a portable charger to your electric vehicle, so you charge where you are instead of driving to a station.' },
  { q: 'How do I request a charge in Dallas?', a: `Call ${P} or email ${BRAND.email}. Staff confirm your location, vehicle and coverage before dispatch, and a request alone is not a confirmed visit.` },
  { q: 'Which areas around Dallas do you serve?', a: 'We serve the Dallas-Fort Worth area, including Dallas, Fort Worth, Plano, Irving, Arlington, Frisco, Garland, McKinney, Richardson and Denton. Staff confirm coverage for each address.' },
  { q: 'Do you work with fleets and businesses?', a: 'Yes. Our team supports fleet and business charging programs in more than 30 states and 300 counties, and builds Dallas plans around each client.' },
  { q: 'How much does mobile EV charging cost in Dallas?', a: `Pricing is quote-based because it depends on the service, vehicle and location. Call ${P} and the team provides a quote before any work.` },
  { q: 'Can you install a home or business charger?', a: 'Yes. We install Level 2 and Level 3 chargers for homes and commercial properties after a site review and a written quote.' },
  { q: 'Is a request the same as a confirmed dispatch?', a: 'No. Staff confirm coverage, vehicle details and location first. A call or message is a request, not a confirmed visit.' },
  { q: 'Can you charge any electric vehicle?', a: 'We charge most electric vehicle makes and models. Share your vehicle details when you call so staff can confirm compatibility.' },
];
