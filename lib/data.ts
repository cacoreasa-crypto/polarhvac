// lib/data.ts

export type ServiceItem = {
  title: string
  description: string
  hint: string
  icon: 'monitor' | 'wrench' | 'clock' | 'layers' | 'home' | 'sun' | 'lock'
  paragraphs: string[]
  bullets: string[]
}

export const ACServices: ServiceItem[] = [
  {
    title: 'AC Installation',
    description:
      'Professional installation of high-efficiency air conditioning systems sized for your home or business. We handle permits, startup, and testing so you get reliable cooling from day one.',
    hint: 'Click any card (or press Enter) to open a detailed guide: what we check, what is included, and what to expect on install day.',
    icon: 'monitor',
    paragraphs: [
      'We start with a load calculation and duct inspection so your new system is neither undersized nor oversized—both cause comfort and energy problems. You receive clear equipment options (efficiency tiers, warranties, and noise levels) before we schedule work.',
      'Our crew protects floors and work areas, removes the old equipment responsibly, and follows manufacturer specs for refrigerant charge and airflow. When we leave, we walk you through the thermostat, filter schedule, and warranty registration.',
    ],
    bullets: [
      'Permit-ready documentation and code-compliant electrical & refrigerant work',
      'Vacuum, leak check, and commissioning (temperature splits, static pressure)',
      'Cleanup, startup report, and follow-up if you have questions after install',
    ],
  },
  {
    title: 'AC Repair',
    description:
      'Fast diagnostics for all makes and models—from weak airflow and warm vents to odd noises and water leaks. We explain the fix and cost before we start, and we stock common parts for same-day repairs when possible.',
    hint: 'Open the modal to see how we troubleshoot, when a repair vs replacement makes sense, and what “flat diagnosis” means for you.',
    icon: 'wrench',
    paragraphs: [
      'Technicians use electrical, refrigerant, and airflow checks to find the root cause—not just the symptom. You get photos or readings when helpful so you can see why a part failed.',
      'If a repair is unsafe or not cost-effective (old R-22 systems, cracked heat exchangers on paired furnaces, etc.), we will tell you plainly and quote replacement options without pressure.',
    ],
    bullets: [
      'Transparent pricing: diagnosis explained before major component changes',
      'Emergency visits available for no-cool situations in peak season',
      'Post-repair testing to confirm pressures, drains, and safety controls',
    ],
  },
  {
    title: 'AC Maintenance',
    description:
      'Seasonal tune-ups that restore efficiency, catch worn parts early, and keep manufacturer warranties valid. Ideal before summer demand hits the DMV.',
    hint: 'See the full maintenance checklist and why skipping tune-ups often leads to mid-summer breakdowns.',
    icon: 'clock',
    paragraphs: [
      'Maintenance includes cleaning the condenser coil, checking refrigerant levels, tightening electrical connections, testing capacitors and contactors, clearing condensate drains, and verifying blower cleanliness.',
      'We note anything trending toward failure (weak capacitors, dirty coils, worn belts) so you can plan fixes instead of reacting in a heat wave.',
    ],
    bullets: [
      'Filter replacement guidance based on pets, allergies, and system type',
      'Written summary you can keep for warranty or home-sale documentation',
      'Membership-friendly reminders so you do not forget next season',
    ],
  },
  {
    title: 'Ductless Mini-Split Systems',
    description:
      'Flexible zoning for additions, garages, server rooms, and older homes without ductwork. Single and multi-head designs with clean line-hide options when the space allows.',
    hint: 'Modal covers placement rules, efficiency ratings, and how we hide linesets for a clean interior look.',
    icon: 'layers',
    paragraphs: [
      'Mini-splits shine when ducts are impossible or rooms have hot/cold spots. We design head locations for airflow and noise, then size the outdoor unit for the combined load of all indoor heads.',
      'We verify wall structure for mounting, plan condensate pumping if needed, and pressure-test refrigerant lines before charging to manufacturer specs.',
    ],
    bullets: [
      'Heat-pump models for year-round comfort in mild DMV winters',
      'Wi-Fi stat options and service access planning for future maintenance',
      'Warranty registration support and owner training on modes & filters',
    ],
  },
]

export const HeatingServices: ServiceItem[] = [
  {
    title: 'Heating Installation',
    description:
      'Furnaces, heat pumps, and hybrid systems installed to code with proper venting, gas piping or electrical whips, and thorough commissioning for safe, efficient heat.',
    hint: 'Click for venting rules of thumb, AFUE vs HSPF guidance, and what happens on installation day.',
    icon: 'monitor',
    paragraphs: [
      'We match equipment to your duct system and insulation level. Gas furnaces get combustion analysis; heat pumps get defrost and auxiliary heat staging checks.',
      'You receive filter size, warranty paperwork, and a maintenance timeline tailored to your fuel type and usage.',
    ],
    bullets: [
      'Carbon monoxide safety checks when gas appliances are involved',
      'Thermostat wiring verified for multi-stage or heat-pump setups',
      'Old equipment removal and recycling coordinated on the same visit',
    ],
  },
  {
    title: 'Heating Repair',
    description:
      'Ignition failures, limit trips, short cycling, cold rooms, and strange smells—we track down electrical, airflow, and fuel issues and restore safe operation.',
    hint: 'Open for common winter failures in the DMV and how we prioritize safety on no-heat calls.',
    icon: 'wrench',
    paragraphs: [
      'No-heat calls get triage for safety first (gas leaks, cracked exchangers, blocked flues). Then we sequence through ignitors, flame sensors, pressure switches, and inducer motors.',
      'We document readings so repeat issues are easier to trace, and we flag corrosion or age limits that suggest planning a replacement before peak cold.',
    ],
    bullets: [
      'After-hours availability for true emergencies',
      'Parts for major brands stocked or next-day ordered when possible',
      'Heat restored with verification of limit cycles and supply air temps',
    ],
  },
  {
    title: 'Heating Maintenance',
    description:
      'Pre-winter tune-ups for furnaces and heat pumps: burners, heat exchanger visual, defrost, backup heat, and airflow—so you are not surprised on the first freeze.',
    hint: 'See the seasonal checklist and how maintenance protects warranty coverage.',
    icon: 'sun',
    paragraphs: [
      'Gas furnaces: inspect heat exchanger, clean burners, check flame rollout, test safety switches, verify flue draft. Heat pumps: coil cleaning, defrost board test, aux heat staging.',
      'We also confirm humidifier pads, media filters, and stat programs are ready for heating mode.',
    ],
    bullets: [
      'Carbon monoxide spot-check mindset on every heating visit',
      'Recommendations prioritized: safety, comfort, efficiency, noise',
      'Photos of concerns emailed or shown on-site for absent homeowners',
    ],
  },
  {
    title: 'Duct Cleaning & Air Quality',
    description:
      'Source removal duct cleaning, filter upgrades, UV options where appropriate, and advice when duct cleaning is not the real fix (leaks, bypass, or return sizing).',
    hint: 'Modal explains when duct cleaning helps vs when sealing or repairs matter more.',
    icon: 'home',
    paragraphs: [
      'We inspect supply and return trunks, registers, and the coil area before recommending cleaning. Heavy dust, post-renovation debris, or mold-risk situations are common drivers.',
      'Agitation + negative air methods are used with access ports placed strategically; we protect your home from dust migration during the process.',
    ],
    bullets: [
      'Before/after camera options when accessible',
      'MERV guidance compatible with your system static budget',
      'Coordination with HVAC repairs if leaks or insulation issues are found',
    ],
  },
  {
    title: 'Thermostat Installation',
    description:
      'Smart and programmable stats wired correctly for heat pumps (O/B), multi-stage furnaces, and humidifiers—so you do not lose comfort features after an “upgrade.”',
    hint: 'Click for compatibility checks (C-wire, heat pump vs conventional) and common wiring pitfalls.',
    icon: 'lock',
    paragraphs: [
      'Many Wi-Fi stats fail when C-wire is missing or when heat pump reversing logic is mis-assigned. We map your old stat terminals, verify at the air handler, and configure software stages to match equipment.',
      'We teach you scenes, geofencing (if you want it), and filter reminders so the stat actually saves money instead of fighting your schedule.',
    ],
    bullets: [
      'Power and Wi-Fi signal checks before cutting drywall',
      'Humidifier / dehumid / fresh air integration when present',
      'Rollback plan if a proprietary communicating stat must stay',
    ],
  },
]

export const FAQItems = [
  {
    question: 'What areas do you serve?',
    answer:
      'We work throughout the DMV — Washington DC, Maryland, and Virginia — for residential and commercial customers. Call us with your address and we will confirm scheduling anywhere in the region.',
  },
  {
    question: 'Do you offer emergency HVAC service?',
    answer:
      'Absolutely. We provide 24/7 emergency HVAC service because heating and cooling failures don\'t follow business hours. Call us any time at 301 526 2926 and we\'ll dispatch a technician as fast as possible.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes. Polar HVAC Services LLC is fully licensed and insured, and we follow applicable local codes and regulations everywhere we work across Washington DC, Maryland, and Virginia — so you have peace of mind on every job.',
  },
  {
    question: 'How often should I service my HVAC system?',
    answer:
      'We recommend servicing your HVAC system at least twice a year — once before summer for your AC and once before winter for your heating. Regular maintenance extends equipment life, improves efficiency, and prevents costly emergencies.',
  },
  {
    question: 'What brands do you install and service?',
    answer:
      'We work with all major HVAC brands including Carrier, Trane, Lennox, Rheem, Goodman, Bryant, York, Daikin and more. Whether repair or new installation, our technicians handle it all.',
  },
  {
    question: 'Do you offer free estimates?',
    answer:
      'Yes! We offer free estimates for new installations and system replacements. Contact us through our form or call 301 526 2926 to schedule your no-obligation assessment.',
  },
  {
    question: 'What is a mini-split system and is it right for me?',
    answer:
      'A ductless mini-split is a flexible, energy-efficient heating and cooling solution that doesn\'t require ductwork. It\'s ideal for additions, garages, offices, or older homes. We\'ll assess your space during a free consultation.',
  },
]

export const GalleryItems = [
  { label: 'Commercial rooftop', location: 'Solar & HVAC · DMV', type: 'cool' as const, image: '/Portfolio/polar-portfolio-01.jpeg' },
  { label: 'Equipment service', location: 'Preventive maintenance', type: 'cool' as const, image: '/Portfolio/polar-portfolio-02.jpeg' },
  { label: 'Field installation', location: 'Residential upgrade', type: 'cool' as const, image: '/Portfolio/polar-portfolio-03.jpeg' },
  { label: 'Heating system', location: 'Furnace & heat pump', type: 'heat' as const, image: '/Portfolio/polar-portfolio-04.jpeg' },
  { label: 'On-site repair', location: 'Diagnostics & parts', type: 'cool' as const, image: '/Portfolio/polar-portfolio-05.jpeg' },
  { label: 'Controls & startup', location: 'Commissioning', type: 'cool' as const, image: '/Portfolio/polar-portfolio-06.jpeg' },
]

export const Stats = [
  { value: 500, suffix: '+', label: 'Happy Clients' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 24, suffix: '/7', label: 'Emergency Service' },
  { value: 100, suffix: '%', label: 'Satisfaction Rate' },
]

export const WhyPanels = [
  {
    num: '01',
    label: 'Why Polar HVAC',
    title: 'Always Fast.',
    titleHighlight: 'Always Ready.',
    body: 'When your system fails, every minute matters. Our technicians cover Washington DC, Maryland, and Virginia and are ready to respond 24 hours a day, 7 days a week — including holidays. Average response time under 2 hours.',
    visual: 'Response time under 2 hours',
    iconType: 'clock' as const,
    imageSrc: '/scroll/jacksonpolohvac.png',
  },
  {
    num: '02',
    label: 'Certified Technicians',
    title: 'Licensed',
    titleHighlight: '& Insured.',
    body: 'Every Polar technician is EPA-certified, properly licensed and insured for work across the DMV, and carries comprehensive coverage. We train continuously on the latest HVAC systems so your equipment is always in expert hands.',
    visual: 'EPA Certified · Licensed & Insured · DMV-wide',
    iconType: 'shield' as const,
    imageSrc: '/scroll/scroll2.jpeg',
  },
  {
    num: '03',
    label: 'All Brands Serviced',
    title: 'Every Brand.',
    titleHighlight: 'Every System.',
    body: 'Carrier, Trane, Lennox, Rheem, Goodman, Bryant, York, Daikin — we service and install all major HVAC brands. Residential or commercial, new installation or legacy repair, we have the parts and the expertise.',
    visual: 'All Major Brands · Residential & Commercial',
    iconType: 'sun' as const,
    imageSrc: '/scroll/scroll3.jpeg',
  },
]
