/** Educational and audience content. General EV knowledge only: no prices, no client names, no response-time promises. */
export type Faq = { q: string; a: string };
export type GuideSection = { h: string; p: string[] };
export type Source = { label: string; url: string };
export type Guide = { slug: string; title: string; short: string; description: string; lead: string; sections: GuideSection[]; faq: Faq[]; sources?: Source[] };

export const GUIDES: Guide[] = [
  {
    slug: 'what-to-do-when-your-ev-runs-out-of-charge', title: 'What to Do When Your EV Runs Out of Charge', short: 'EV out of charge',
    description: 'Safe steps when an electric vehicle is out of charge, from moving off the road to calling for help.',
    lead: 'An EV that runs out of charge needs a safe stop first, then a plan: call for mobile charging, a tow or a nearby station.',
    sections: [
      { h: 'Get to safety first', p: ['Turn on the hazard lights and steer to the shoulder or a parking lot while the car still has power. Stay inside with the seat belt on on a busy road.', 'Most EVs warn the driver several times before power drops. Slow down when the range estimate shows 10 miles or fewer.'] },
      { h: 'Decide how to get charge', p: ['Three options usually exist: a mobile charging visit, a tow to a station or waiting for a friend with a portable charger.', 'Mobile charging avoids a tow and keeps the car on its own wheels, so many drivers call it first.'] },
      { h: 'What to tell the team on the phone', p: ['Give the vehicle make and model, the exact location and any landmarks. Say whether the car is on a road, in a lot or in a garage.', 'Staff confirm coverage and next steps before a visit is scheduled.'] },
      { h: 'After you have charge', p: ['Add enough range to reach a fast charger, then plan the next stop at 20 percent or more. A small buffer avoids a repeat.', 'If the battery ran low often, a home or workplace charger solves the cause.'] },
    ],
    faq: [{ q: 'Can I drive a few more miles after the range hits zero?', a: 'No. Most EVs reduce power or stop soon after the range reads zero, so a driver should stop at the first safe place.' }, { q: 'Does a tow damage an EV?', a: 'A tow can damage some EVs if the wrong wheels stay on the ground, so the owner manual guides the correct method.' }],
  },
  {
    slug: 'level-1-level-2-dc-fast-charging-explained', title: 'Level 1, Level 2 and DC Fast Charging Explained', short: 'Charging levels explained',
    description: 'The three EV charging levels, typical speeds and when each one fits.',
    lead: 'EV charging comes in three levels: Level 1 adds about 2 to 5 miles of range per hour, Level 2 adds about 12 to 40, and DC fast charging adds far more.',
    sections: [
      { h: 'Level 1: the wall outlet', p: ['Level 1 uses a standard 120 volt household outlet. It adds roughly 2 to 5 miles of range per hour.', 'It suits drivers who travel short distances and park for many hours, such as overnight.'] },
      { h: 'Level 2: the everyday charger', p: ['Level 2 uses a 240 volt circuit like a clothes dryer. It typically adds 12 to 40 miles of range per hour, depending on the car and the charger.', 'It is the common choice for homes, workplaces and hotels.'] },
      { h: 'DC fast charging: the quick top-up', p: ['DC fast chargers feed direct current to the battery and can add 100 to 200 miles of range in about 20 to 40 minutes on many cars.', 'Speed drops as the battery fills, so the first 80 percent is the fastest part.'] },
      { h: 'Which level fits', p: ['A home or workplace usually needs Level 2. Fleets, dealerships and busy sites often need Level 3 DC fast charging.', 'A site review shows what power the building can support before any equipment is chosen.'] },
    ],
    faq: [{ q: 'Is Level 3 the same as DC fast charging?', a: 'Yes. Level 3 is a common name for DC fast charging.' }, { q: 'Which level does mobile EV charging use?', a: 'Mobile EV charging uses portable DC fast charging equipment so the car gains range quickly.' }],
  },
  {
    slug: 'winter-storm-ev-charging-dallas', title: 'Winter Storms and EV Charging in Dallas-Fort Worth: Plan Before a Freeze', short: 'Winter storms and EV charging',
    description: 'Reported guidance for Dallas-Fort Worth EV drivers in freezing weather: charge before the storm, expect lines and outages, and know what cold does to range.',
    lead: 'Dallas-Fort Worth EV drivers should charge before a freeze, because cold cuts range and working stations can have long lines.',
    sections: [
      { h: 'Cold cuts range and crowds stations', p: ['An Associated Press report carried by NBC DFW described a week of freezing weather from Chicago to northern Texas in which EV drivers faced reduced range, long lines at charging stations and cars that would not charge when plugged in.', 'The practical takeaway is to leave with a full battery and a plan B for each stop, because the nearest station may be busy.'] },
      { h: 'Charge before the storm', p: ['Green Mountain Energy\'s Texas winter weather guide tells EV owners to charge the vehicle before a storm in case an outage follows, and to line up a backup energy source.', 'A PlugShare survey of 580 Texas battery-electric drivers after Winter Storm Uri found that many topped off their batteries ahead of the blackouts, and that 74 percent also had access to a gasoline or diesel vehicle.'] },
      { h: 'Stations can go offline', p: ['CleanTechnica reported during the February 2021 Texas freeze that some Tesla Superchargers and Electrify America stations were down while utilities restored power. During a freeze, check a station\'s status before you drive to it.'] },
      { h: 'If your car is stranded low on charge', p: ['Call early. Staff confirm coverage, location and conditions first, and a call is a request, not a confirmed dispatch. During an ice storm or widespread outage, roads and availability can limit what is possible.'] },
    ],
    faq: [{ q: 'Does cold weather reduce EV range in Texas?', a: 'Yes. An Associated Press report on a North Texas deep freeze described reduced driving range and long lines at charging stations for EV drivers.' }, { q: 'Should I charge my EV before a winter storm?', a: 'Yes. Green Mountain Energy\'s Texas winter weather guide advises charging an EV before a storm in case a power outage follows.' }],
    sources: [
      { label: 'NBC DFW (AP): Frigid temps can cut electric vehicle range and make charging tough', url: 'https://www.nbcdfw.com/news/national-international/frigid-temps-can-cut-electric-vehicle-range-make-charging-tough-heres-what-to-know/3437800/' },
      { label: 'Green Mountain Energy: Texas winter weather guide', url: 'https://www.greenmountainenergy.com/winterweatherguide' },
      { label: 'PlugShare Research: Texas power blackouts did not stop most EV drivers (March 2021)', url: 'https://recargo.com/texas-power-blackouts.html' },
      { label: 'CleanTechnica: Rolling blackouts in Texas are affecting fast charging (Feb. 2021)', url: 'https://cleantechnica.com/2021/02/16/travelers-beware-rolling-blackouts-in-texas-are-affecting-fast-charging-safety-tips/' },
    ],
  },
];
export const guidePath = (slug: string) => `/resources/${slug}/`;
