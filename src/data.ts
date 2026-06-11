/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Contractor, VettingTier, CategoryInfo } from "./types";

export const START_CATEGORIES: CategoryInfo[] = [
  {
    id: "electrician",
    name: "Electrician",
    iconName: "Zap",
    description: "Bijli & Network Grid Specialist (بجلی اور ورکنگ نیٹ ورک) — Residential & Corporate smart wiring, commercial DB boards, UPS, and server room grounding.",
    colorTheme: "amber"
  },
  {
    id: "painter",
    name: "Painter",
    iconName: "Paintbrush",
    description: "Rang & Polishing (رنگ و سجاوٹ) — Office spaces, commercial weather-coat facades, luxury home interiors, and custom furniture finishes.",
    colorTheme: "sky"
  },
  {
    id: "event_decorator",
    name: "Event Decorator",
    iconName: "Sparkles",
    description: "Sajawat & Corporate Decorator (تقاریب اور سیمینار سجاوٹ) — Wedding stages, floral assemblies, and corporate launching ceremonies.",
    colorTheme: "rose"
  },
  {
    id: "plumber",
    name: "Plumber",
    iconName: "Droplet",
    description: "Sewerage & Pipe Expert (پلمبر) — High-pressure booster pumps, office bathroom sanitary fittings, commercial water loops, and leak detection.",
    colorTheme: "emerald"
  },
  {
    id: "ac_repair",
    name: "AC & Fridge Tech",
    iconName: "Snowflake",
    description: "AC & Chiller HVAC (اے سی اور چیلر سروسز) — Commercial HVAC plants, office split system maintenance, inverter current tuning, and gas recharging.",
    colorTheme: "cyan"
  }
];

export const INITIAL_CONTRACTORS: Contractor[] = [
  {
    id: "c1",
    name: "Kashif Ali",
    companyName: "Kashif Electric-Works & UPS Services",
    category: "electrician",
    title: "Licensed Master Electrician & Inverter/UPS Specialist",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Kashif Ali has been serving Lahore's major areas (DHA, Gulberg, Model Town) with high-quality electrical safety checks for 10+ years. Specialized in high-efficiency DB box wiring, zero-flicker smart LED setups, automated UPS changeover switches, and custom solar power panel alignments. Kashif is best known for clean wiring paths that prevent short circuits during monsoon seasons.",
    phone: "+92 300 1234567",
    whatsapp: "+923001234567",
    email: "kashif.electric@gmail.com",
    website: "https://kashifelectric.com.pk",
    location: "Phase 5, DHA, Lahore",
    city: "Lahore",
    rating: 4.9,
    reviewCount: 74,
    yearsInBusiness: 11,
    vettedStatus: VettingTier.MASTER_GUILD,
    verifiedDate: "Jan 12, 2026",
    licenseNumber: "LHR-ELEC-4402",
    insuranceAmount: "PKR 1,500,000 Safety Cover",
    hourlyRate: "Rs. 800 - 1,550 / visit",
    portfolio: [
      {
        id: "p1_1",
        title: "Commercial Distribution DB Panel Redesign",
        description: "Re-engineered unsafe wiring distributions into an orderly, color-coded grid protected by circuit breakers.",
        imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
        completedDate: "March 2026"
      },
      {
        id: "p1_2",
        title: "UPS & Solar Alternate Switchover Panel",
        description: "Configured reliable automatic transfer switches for automatic back-up energy activation.",
        imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
        completedDate: "May 2026"
      }
    ],
    reviews: [
      {
        id: "r1_1",
        author: "Zainab Chaudhry",
        rating: 5,
        date: "May 24, 2026",
        comment: "Kashif Bhai came within 40 minutes for an emergency short circuit in our kitchen. He explained the load distribution clearly. No hidden charges!",
        projectCompleted: "Kitchen DB box breaker fix",
        verifiedHired: true
      },
      {
        id: "r1_2",
        author: "Kamran Shah",
        rating: 4.8,
        date: "Apr 15, 2026",
        comment: "Installed our complete 10KW solar breaker panel with zero loose wires. Extremely tidy work, highly recommended for DHA residents.",
        projectCompleted: "Solar Panel wiring & breakers",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c2",
    name: "Ustad Bashir Ahmed",
    companyName: "Bashir Painters & Wood-Polish Guild",
    category: "painter",
    title: "Master Decorative Painter & High-Glow Deco Polish Artisan",
    avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=400&q=80",
    bio: "Ustad Ahmed is a widely respected artisan in Karachi specializing in luxury architectural weather-coating, premium matte wall putty prepping, and classic wooden door Deco polishing. Bashir Ahmed guides a team of disciplined karigars who seal your furniture with dust-proof sheets before putting a single brush stroke to work.",
    phone: "+92 321 9876543",
    whatsapp: "+923219876543",
    email: "ustad.bashir@outlook.com",
    website: "https://bashirpaints.com.pk",
    location: "Gulshan-e-Iqbal, Block 4, Karachi",
    city: "Karachi",
    rating: 5.0,
    reviewCount: 92,
    yearsInBusiness: 18,
    vettedStatus: VettingTier.MASTER_GUILD,
    verifiedDate: "Feb 10, 2026",
    licenseNumber: "KHI-PAINTS-9921",
    insuranceAmount: "PKR 2,000,000 Safety Cover",
    hourlyRate: "Rs. 25,000+ per room (Package)",
    portfolio: [
      {
        id: "p2_1",
        title: "Venetian Stucco Luxury Finished Accent Wall",
        description: "Multi-layered burnished putty finish providing marble mirror properties inside a DHA Clifton guest lounge.",
        imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
        completedDate: "January 2026"
      },
      {
        id: "p2_2",
        title: "Matte-Satin Kitchen Cabinet Polishing",
        description: "Stripped honey oak cabinets to apply premium dustless dark matte gray polyurethane finish.",
        imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
        completedDate: "April 2026"
      }
    ],
    reviews: [
      {
        id: "r2_1",
        author: "Noman Siddiqui",
        rating: 5,
        date: "May 29, 2026",
        comment: "Ustad Bashir's team did wood polishing on our main ash-wood entrance door. The final texture looks absolutely outstanding. True masters of their craft.",
        projectCompleted: "Ashwood door restoration and stain",
        verifiedHired: true
      },
      {
        id: "r2_2",
        author: "Mariam Fahad",
        rating: 5,
        date: "May 02, 2026",
        comment: "No mess left behind! They wrapped everything in protective plastics. Putty alignment on walls is flawlessly flat. Excellent behavior.",
        projectCompleted: "Full house painter package",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c3",
    name: "Syed Roshan Ali",
    companyName: "Roshan Decors & Stage Planners",
    category: "event_decorator",
    title: "Signature Floral Stage & Bespoke Wedding Scenographer",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    bio: "Roshan Decors handles Islamabad's elite marriage banquets, lawn Mehndi programs, and custom corporate setups with a high focus on elegance. Syed Roshan Ali fuses fresh local roses, custom structural scaffolding, and Warm LED fairy-lights backdrops to deliver jaw-dropping atmospheres.",
    phone: "+92 333 5551234",
    whatsapp: "+923335551234",
    email: "roshan@roshandecors.com.pk",
    website: "https://roshandecors.com",
    location: "Sector F-8, Islamabad",
    city: "Islamabad",
    rating: 4.9,
    reviewCount: 41,
    yearsInBusiness: 7,
    vettedStatus: VettingTier.ELITE,
    verifiedDate: "Jan 18, 2026",
    licenseNumber: "ISB-EVT-7721",
    insuranceAmount: "PKR 3,000,000 Safety Cover",
    hourlyRate: "Rs. 75,000+ / Event Design",
    portfolio: [
      {
        id: "p3_1",
        title: "Bespoke Foliage & Light Canopy Mehndi Stage",
        description: "Created high-contrast organic visual screen using fresh marigolds, local Jasmine vines, and customized warm brass accents.",
        imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80",
        completedDate: "April 2026"
      }
    ],
    reviews: [
      {
        id: "r3_1",
        author: "Amina Alvi",
        rating: 5,
        date: "May 10, 2026",
        comment: "Roshan team transformed my lawn into an absolute dreamscape. They finished the setup 3 hours before guests arrived, leaving us stress-free.",
        projectCompleted: "Lawn Mehndi backdrop decoration",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c4",
    name: "Mukhtar Ahmed",
    companyName: "Al-Rehman Sanitary & Leakage Solutions",
    category: "plumber",
    title: "Master Sanitary Technician & Underground Leak Detector",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    bio: "Serving Rawalpindi and Bahria Town zones, Mukhtar and his team address stubborn underground pipe leakages, water pump motor windups, bathroom sanitary upgrades, and clean water filtration installations. Features competitive pricing structures and no charge if they can't locate the source of leak.",
    phone: "+92 312 4445556",
    whatsapp: "+923124445556",
    email: "alrehman.sanitary@gmail.com",
    website: "https://alrehmanplumbing.pk",
    location: "Saddar, Rawalpindi",
    city: "Rawalpindi",
    rating: 4.7,
    reviewCount: 56,
    yearsInBusiness: 9,
    vettedStatus: VettingTier.VERIFIED,
    verifiedDate: "Mar 05, 2026",
    licenseNumber: "RWP-PLUM-1104",
    insuranceAmount: "PKR 500,000 Liability Cover",
    hourlyRate: "Rs. 600 - 1,200 / visit",
    portfolio: [
      {
        id: "p4_1",
        title: "Modern Bathroom Concealed Water Line Installation",
        description: "Removed heavy corroded galvanized iron pipes to install durable composite PPR-C conduits with pressure checks.",
        imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
        completedDate: "May 2026"
      }
    ],
    reviews: [
      {
        id: "r4_1",
        author: "Sajid Bajwa",
        rating: 5,
        date: "Apr 29, 2026",
        comment: "Mukhtar arrived with a pressure-gauge meter and quickly identified the hidden wall leakage that three other plumbers failed to locate. Solved it permanently.",
        projectCompleted: "Wall dampness leak repair",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c5",
    name: "Farhan Qureshi",
    companyName: "Farhan Cool-Force & Inverter Specialists",
    category: "ac_repair",
    title: "Eco-Friendly Inverter AC Installation & Chemical Wash Master",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    bio: "Specializing in eco-conscious chemical washes, Farhan Cool-Force makes sure your inverter split AC units draw minimal electric current. Working out of Peshawar (Hayatabad, University Road), the team prides itself on exact R410 cabinet pressure readings and clean water jet sprayers that leave zero mud inside your rooms.",
    phone: "+92 345 8889900",
    whatsapp: "+923458889900",
    email: "farhan.coolservice@gmail.com",
    website: "https://farhanacservices.com.pk",
    location: "Phase 3, Hayatabad, Peshawar",
    city: "Peshawar",
    rating: 4.8,
    reviewCount: 38,
    yearsInBusiness: 6,
    vettedStatus: VettingTier.ELITE,
    verifiedDate: "Jan 30, 2026",
    licenseNumber: "PEW-HVAC-3312",
    insuranceAmount: "PKR 1,000,000 Safety Cover",
    hourlyRate: "Rs. 1,200 - 2,500 / chemical service",
    portfolio: [
      {
        id: "p5_1",
        title: "Clean High-Pressure Jet AC Service",
        description: "Implemented standard high-pressure water jet wash with dust collection bags to keep neighboring walls pristine.",
        imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
        completedDate: "April 2026"
      }
    ],
    reviews: [
      {
        id: "r5_1",
        author: "Engr. Bilal Khan",
        rating: 5,
        date: "May 18, 2026",
        comment: "Farhan is extremely professional. He measured input current amperages before and after split wash to prove the power savings. Clean service.",
        projectCompleted: "Dual Inverter AC chemical wash",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c6",
    name: "Tariq Mehmood",
    companyName: "Karachi Powerline Grid & Solar",
    category: "electrician",
    title: "Bungalow Wiring Specialist & Safety Auditor",
    avatar: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=400&q=80",
    bio: "Serving Clifton, DHA, and KDA Schema 1 areas in Karachi. Tariq possesses exceptional competence in structural safety audits, premium copper cabling, and surge protector installation designed specifically for coastal humidity protection.",
    phone: "+92 321 4455667",
    whatsapp: "+923214455667",
    email: "tariq.power@gmail.com",
    website: "https://tariqsolar.com.pk",
    location: "Clifton, Block 5, Karachi",
    city: "Karachi",
    rating: 4.8,
    reviewCount: 65,
    yearsInBusiness: 14,
    vettedStatus: VettingTier.MASTER_GUILD,
    verifiedDate: "Feb 15, 2026",
    licenseNumber: "KHI-ELEC-8812",
    insuranceAmount: "PKR 2,500,000 Safety Cover",
    hourlyRate: "Rs. 1,000 - 2,000 / visit",
    portfolio: [
      {
        id: "p6_1",
        title: "Bungalow Smart LED Fitting & Board Retrofit",
        description: "Equipped an 11-room luxury home with integrated surge protectors & responsive solid-brass accent switches.",
        imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
        completedDate: "February 2026"
      }
    ],
    reviews: [
      {
        id: "r6_1",
        author: "Murtaza Baig",
        rating: 5,
        date: "Apr 11, 2026",
        comment: "Extremely tidy job. He diagnosed several hidden earthing failures in minor appliances that saved us from prospective heavy losses.",
        projectCompleted: "Full house safety certification & grounding",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c7",
    name: "Muhammad Asif",
    companyName: "Asif Raza Paint Craft & Wall Putty Masters",
    category: "painter",
    title: "Luxury Texture Artist & Premium Weathercoat Expert",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    bio: "Asif brings state-of-the-art paint styling straight to Lahore's elite households. Specializes in luxury venetian stucco wallpapers, customized matte finishes, dustless sanding, and moisture sealer compound layering designed specifically for high ceiling drawing rooms.",
    phone: "+92 301 9876543",
    whatsapp: "+923019876543",
    email: "asifpaintcraft@outlook.com",
    website: "https://asifpaints.com.pk",
    location: "Phase 4, DHA, Lahore",
    city: "Lahore",
    rating: 4.9,
    reviewCount: 48,
    yearsInBusiness: 8,
    vettedStatus: VettingTier.ELITE,
    verifiedDate: "Mar 11, 2026",
    licenseNumber: "LHR-PAINTS-4819",
    insuranceAmount: "PKR 1,500,000 Safety Cover",
    hourlyRate: "Rs. 18,000 - 35,000 / room package",
    portfolio: [
      {
        id: "p7_1",
        title: "Velvet Finish Metallic Accent Wall",
        description: "Curated an exquisite multi-tone feature wall with dynamic metallic pigments representing luxury gold-leafing.",
        imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
        completedDate: "January 2026"
      }
    ],
    reviews: [
      {
        id: "r7_1",
        author: "Fahad Bhatti",
        rating: 5,
        date: "May 05, 2026",
        comment: "Asif and his boys did an exceptionally tidy job on our main dining room. The velvet luster paint shifts softly with the warm ceiling lights. Flawless execution.",
        projectCompleted: "Luxury textured accent wall project",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c8",
    name: "Sajid Mahmood",
    companyName: "Al-Harmain Sanitary & PPR-C Piping Guild",
    category: "plumber",
    title: "Water Pump Restoration Master & Composite Plumbing Expert",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Karachi's trusted authority on heavy underground pipelines. Sajid specializes in composite PPR-C network mapping, water-tank structural overflow setups, leak isolation via electronic acoustic systems, and high-tech booster jet motor alignment. Serving Gulshan, Federal B Area, and Korangi industrial plots.",
    phone: "+92 321 8881234",
    whatsapp: "+923218881234",
    email: "harmainsanitary@gmail.com",
    website: "https://alharmainsanitary.pk",
    location: "Gulshan-e-Iqbal, Block 13, Karachi",
    city: "Karachi",
    rating: 4.6,
    reviewCount: 39,
    yearsInBusiness: 12,
    vettedStatus: VettingTier.VERIFIED,
    verifiedDate: "Jan 25, 2026",
    licenseNumber: "KHI-PLUM-7723",
    insuranceAmount: "PKR 750,000 Liability Cover",
    hourlyRate: "Rs. 700 - 1,500 / visit",
    portfolio: [
      {
        id: "p8_1",
        title: "Commercial Water Loop Pipeline Overhaul",
        description: "Replaced 120 feet of damaged rust-loaded GI tubes with top quality high density composite plumbing.",
        imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
        completedDate: "March 2026"
      }
    ],
    reviews: [
      {
        id: "r8_1",
        author: "Rashid Minhas",
        rating: 4.8,
        date: "Feb 02, 2026",
        comment: "Our old water pump was making awful grinding noises. Sajid replaced the bearings in two hours. Very polite and completely transparent about billing.",
        projectCompleted: "1.5HP domestic water motor rescue",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c9",
    name: "Mian Salman",
    companyName: "Mian Inverter Specialists & HVAC Elite",
    category: "ac_repair",
    title: "Multi-Brand Variable Refrigerant Flow (VRF) & Ducted AC Repair",
    avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80",
    bio: "Lahore's premier professional specializing in modern variable speed inverter AC models (Gree, Dawlance, Haier). Mian Salman uses computerized diagnostic equipment to accurately measure current draws, isolate electronic control board issues, and perform safe environment-compliant gas recharge procedures.",
    phone: "+92 302 4443322",
    whatsapp: "+923024443322",
    email: "miansalmanac@gmail.com",
    website: "https://miansalmanhvac.com.pk",
    location: "Gulberg III, Lahore",
    city: "Lahore",
    rating: 4.9,
    reviewCount: 51,
    yearsInBusiness: 8,
    vettedStatus: VettingTier.ELITE,
    verifiedDate: "Apr 01, 2026",
    licenseNumber: "LHR-HVAC-9901",
    insuranceAmount: "PKR 1,500,000 Safety Cover",
    hourlyRate: "Rs. 1,500 - 3,000 / task",
    portfolio: [
      {
        id: "p9_1",
        title: "Multi-Split Intelligent Heating/Cooling Integration",
        description: "Designed clean hidden drain line installation for a triple inverter split configuration in a Gulberg office complex.",
        imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
        completedDate: "April 2026"
      }
    ],
    reviews: [
      {
        id: "r9_1",
        author: "Haris Butt",
        rating: 5,
        date: "May 25, 2026",
        comment: "Excellent service. He found an electronic motherboard bug that three previous technicians wanted me to replace entirely. Cost effective and transparent.",
        projectCompleted: "Gree 1.5 Ton inverter cabinet repair",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c10",
    name: "Zafar Iqbal",
    companyName: "Margalla Hills Plumbing & Thermal Leak Detection",
    category: "plumber",
    title: "Certified Leakage Analyst & PPR-C Smart Pipe Fitter",
    avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=400&q=80",
    bio: "Zafar Iqbal brings sophisticated electro-acoustic diagnostic equipment to Islamabad's upscale neighborhoods. Specializing in tracing hidden floor dampness, repairing delicate designer bath mixers, and installing durable PPR-C pipe loops under lawns without damaging flower beds.",
    phone: "+92 345 5556677",
    whatsapp: "+923455556677",
    email: "zafarplumbing@gmail.com",
    website: "https://margallaplumbing.pk",
    location: "Sector G-11, Islamabad",
    city: "Islamabad",
    rating: 4.8,
    reviewCount: 43,
    yearsInBusiness: 10,
    vettedStatus: VettingTier.MASTER_GUILD,
    verifiedDate: "Feb 22, 2026",
    licenseNumber: "ISB-PLUM-3810",
    insuranceAmount: "PKR 1,200,000 Safety Cover",
    hourlyRate: "Rs. 800 - 2,000 / visit",
    portfolio: [
      {
        id: "p10_1",
        title: "Acoustic Leakage Mapping & Tile Restoration",
        description: "Accurately pinned down an underground pipe puncture beneath marble tiles using high-tech audio mapping sensors.",
        imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
        completedDate: "May 2026"
      }
    ],
    reviews: [
      {
        id: "r10_1",
        author: "Maj. Gen. Farooq",
        rating: 5,
        date: "May 09, 2026",
        comment: "Extremely professional, came in fully equipped with sensors. He located the exact puncture under the guest room restroom tiles in 15 minutes. Best service in F-7 / G-11.",
        projectCompleted: "Thermal acoustic leak isolation",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c11",
    name: "Shazia Malik",
    companyName: "Shazia Creative Floral & Mughal Event Planners",
    category: "event_decorator",
    title: "High-Fashion Scenographer & Traditional Stage Curator",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    bio: "Specializing in premium high-contrast floral setups for Mehndi, Barat, and corporate galas in Karachi's core clubs and high-end banquet halls. Shazia blends luxurious marigolds, local fresh jasmine, hand-carved brass accents, and custom ambient lighting styles to curate memorable moments.",
    phone: "+92 331 7778889",
    whatsapp: "+923317778889",
    email: "shazia.decors@gmail.com",
    website: "https://shaziadecors.com.pk",
    location: "DHA Phase 6, Karachi",
    city: "Karachi",
    rating: 4.9,
    reviewCount: 57,
    yearsInBusiness: 9,
    vettedStatus: VettingTier.ELITE,
    verifiedDate: "Mar 15, 2026",
    licenseNumber: "KHI-EVT-4891",
    insuranceAmount: "PKR 4,000,000 Material Cover",
    hourlyRate: "Rs. 100,000+ / Event Design",
    portfolio: [
      {
        id: "p11_1",
        title: "Bespoke Royal Jasmine Lawn Baraat Setup",
        description: "Configured a stunning fresh floral dome draped in local fragrant jasmine ropes for a selective beach club wedding.",
        imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80",
        completedDate: "April 2026"
      }
    ],
    reviews: [
      {
        id: "r11_1",
        author: "Zain Hashmi",
        rating: 5,
        date: "Apr 20, 2026",
        comment: "Absolutely outstanding. The entire courtyard smelled of premium roses and real jasmine. Shazia's color palette coordination was highly praised by all guests.",
        projectCompleted: "Royal Barat courtyard styling",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c12",
    name: "Bilal Shah",
    companyName: "Pindi Powerhouse & Switchgear Masters",
    category: "electrician",
    title: "Complex DB Panel Wire Engineer & ATS Controller Expert",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    bio: "Bilal is highly respected throughout Rawalpindi (Saddar, Satellite Town, Bahria Town) for resolving persistent neutral-line wire heating issues, wiring safe commercial distribution breaker boxes, and integrating solar hybrid backup inverter cabinets securely.",
    phone: "+92 313 5554433",
    whatsapp: "+923135554433",
    email: "pindipower@gmail.com",
    website: "https://pindipower.com.pk",
    location: "Saddar, Rawalpindi",
    city: "Rawalpindi",
    rating: 4.8,
    reviewCount: 42,
    yearsInBusiness: 7,
    vettedStatus: VettingTier.VERIFIED,
    verifiedDate: "Jan 19, 2026",
    licenseNumber: "RWP-ELEC-4409",
    insuranceAmount: "PKR 1,000,000 Liability Cover",
    hourlyRate: "Rs. 800 - 1,500 / visit",
    portfolio: [
      {
        id: "p12_1",
        title: "Automatic Solar Switchover Panel Integration",
        description: "Fitted robust dual transfer motorized break controllers to guarantee flawless alternate power switching.",
        imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
        completedDate: "March 2026"
      }
    ],
    reviews: [
      {
        id: "r12_1",
        author: "Waris Baig",
        rating: 5,
        date: "Mar 30, 2026",
        comment: "Excellent technical competency. Bilal solved our continuous trip issue with the solar system inverter on his very first attempt. Highly recommended.",
        projectCompleted: "Grid phase sync and breaker overhaul",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c13",
    name: "Zulfiqar Ahmed",
    companyName: "Al-Jadeed Wedding & Stage Planners",
    category: "event_decorator",
    title: "Affordable Custom Tentage & Traditional Mehndi Planners",
    avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&q=80",
    bio: "Al-Jadeed Decors specializes in traditional Peshawari style rugs, rustic village themes, colorful marigolds setups, and ambient fairy-lights cascades. We focus on providing exquisite decors in Pindi/Islamabad region within friendly budget ranges.",
    phone: "+92 315 2221144",
    whatsapp: "+923152221144",
    email: "aljadeeddecors@gmail.com",
    website: "https://aljadeeddecors.pk",
    location: "Saddar Road, Rawalpindi",
    city: "Rawalpindi",
    rating: 4.7,
    reviewCount: 31,
    yearsInBusiness: 5,
    vettedStatus: VettingTier.VERIFIED,
    verifiedDate: "Mar 01, 2026",
    licenseNumber: "RWP-EVT-7722",
    insuranceAmount: "PKR 500,000 Liability Cover",
    hourlyRate: "Rs. 35,000 - 75,000 / complete event",
    portfolio: [
      {
        id: "p13_1",
        title: "Traditional Colorful Marigold Mehndi Stage",
        description: "Constructed classic canopy setup wrapped completely in real orange and yellow marigold strings.",
        imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80",
        completedDate: "April 2026"
      }
    ],
    reviews: [
      {
        id: "r13_1",
        author: "Ayesha Noor",
        rating: 5,
        date: "May 10, 2026",
        comment: "Very elegant set up at our rooftop. The team arrived on time and organized everything exactly as requested. Budget-friendly and honest layout.",
        projectCompleted: "Rooftop Mehndi wedding decor",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c14",
    name: "Sher Zaman",
    companyName: "Zaman Frontier Sanitary Works",
    category: "plumber",
    title: "High-Pressure Booster Pump Master & Sewerage Clean Expert",
    avatar: "https://images.unsplash.com/photo-1542178243-fcb159f4ee43?w=400&q=80",
    bio: "Serving Peshawar (Hayatabad, Khyber Bazaar, Ring Road) with premium plumbing and deep sewerage line cleaning. Zaman and his crew possess commercial machinery designed to clear blockages without dismantling lines.",
    phone: "+92 346 9998822",
    whatsapp: "+923469998822",
    email: "zamansanitarywork@gmail.com",
    website: "https://zamansanitary.pk",
    location: "Hayatabad, Peshawar",
    city: "Peshawar",
    rating: 4.8,
    reviewCount: 29,
    yearsInBusiness: 11,
    vettedStatus: VettingTier.ELITE,
    verifiedDate: "Jan 15, 2026",
    licenseNumber: "PEW-PLUM-8812",
    insuranceAmount: "PKR 1,500,000 Material Cover",
    hourlyRate: "Rs. 1,000 - 2,500 / visit",
    portfolio: [
      {
        id: "p14_1",
        title: "Villa Multi-Level Bathroom Pipe Upgrade",
        description: "Upgraded complete rusted line into clean multi-channel composite plumbing lines with independent isolation valves.",
        imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
        completedDate: "January 2026"
      }
    ],
    reviews: [
      {
        id: "r14_1",
        author: "Asfand Yar",
        rating: 5,
        date: "Feb 18, 2026",
        comment: "Excellent sewerage flush service. They used automated spiral blades that immediately cleared our persistent main-drain blockage. Master plumber.",
        projectCompleted: "Deep block clearance & bypass line fit",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c15",
    name: "Yasir Khan",
    companyName: "Khyber Deco Painters & Polish Masters",
    category: "painter",
    title: "Premium Ashwood Wood-Polisher & Exterior Weathercoat Artisan",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
    bio: "Yasir Khan and his trained karigars specialize in luxury architectural paint and fine polish for wooden doors, windows, and hand-crafted furniture in Peshawar area. Our hallmark is zero dust and premium multi-layer matte satin varnish.",
    phone: "+92 334 1122334",
    whatsapp: "+923341122334",
    email: "khyberdecopaints@gmail.com",
    website: "https://khyberpaints.com.pk",
    location: "University Road, Peshawar",
    city: "Peshawar",
    rating: 4.9,
    reviewCount: 35,
    yearsInBusiness: 6,
    vettedStatus: VettingTier.MASTER_GUILD,
    verifiedDate: "Jan 20, 2026",
    licenseNumber: "PEW-PAINTS-4411",
    insuranceAmount: "PKR 1,200,000 Safety Cover",
    hourlyRate: "Rs. 20,000 - 45,000 / premium project",
    portfolio: [
      {
        id: "p15_1",
        title: "Premium High-Gloss Wood Polish Finish",
        description: "Carefully hand-sanded and applied 4 layers of weather-proof polyurethane resin coating on Main Ashwood Entrance Door.",
        imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
        completedDate: "February 2026"
      }
    ],
    reviews: [
      {
        id: "r15_1",
        author: "Suleman Khattak",
        rating: 5,
        date: "May 12, 2026",
        comment: "Yasir polished our main gate and wooden stairs perfectly. The shine is extraordinary and the wood grain pops beautifully. Highly punctual team.",
        projectCompleted: "Gate and custom wooden staircase finish",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c16",
    name: "Kamran Jameel",
    companyName: "Kamran AC Inverter Care & Chiller Specialist",
    category: "ac_repair",
    title: "Senior HVAC Diagnostic Technician & Compressor Restorer",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    bio: "Kamran Jameel and his licensed crew are the top choice for complex inverter split and ducted AC issues across DHA and Clifton, Karachi. Specializes in restoring Variable Refrigerant Flow (VRF) systems, eco-friendly chemical washes, and repairing compressor cards with high precision.",
    phone: "+92 331 4455889",
    whatsapp: "+923314455889",
    email: "kamran.inverter@gmail.com",
    website: "https://kamranac.com.pk",
    location: "DHA Phase 5, Karachi",
    city: "Karachi",
    rating: 4.8,
    reviewCount: 47,
    yearsInBusiness: 9,
    vettedStatus: VettingTier.ELITE,
    verifiedDate: "Feb 18, 2026",
    licenseNumber: "KHI-HVAC-1920",
    insuranceAmount: "PKR 1,500,000 Safety Cover",
    hourlyRate: "Rs. 1,500 - 3,500 / job",
    portfolio: [
      {
        id: "p16_1",
        title: "Multi-Unit Inverter Custom Drainage Setup",
        description: "Re-routed messy outdoor condensate pipes in a multi-story apartment block into a concealed single line.",
        imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
        completedDate: "January 2026"
      }
    ],
    reviews: [
      {
        id: "r16_1",
        author: "Mustafa Alvi",
        rating: 5,
        date: "Apr 28, 2026",
        comment: "Kamran Bhai is a lifesaver. Our bedroom AC was constantly dripping water. He did a thorough jet wash and cleared the clogged drain. Fantastic service!",
        projectCompleted: "Premium jet wash & unclog drain",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c17",
    name: "Muhammad Rasheed",
    companyName: "Rasheed PPR-C Pipe Fitters & Sanitary Solutions",
    category: "plumber",
    title: "Master Sanitary Engineer & High-Volume Pressure Pump Integrator",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    bio: "Muhammad Rasheed has resolved persistent water loop blockages and luxury bathroom renovation plumbing across Lahore (Gulberg, DHA, Cantt) for over 12 years. Expert in thermal camera leakage tracking and installing high-grade composite water pumps.",
    phone: "+92 300 9876123",
    whatsapp: "+923009876123",
    email: "rasheed.plumbing@gmail.com",
    website: "https://rasheedplumbing.pk",
    location: "Gulberg III, Lahore",
    city: "Lahore",
    rating: 4.9,
    reviewCount: 68,
    yearsInBusiness: 12,
    vettedStatus: VettingTier.MASTER_GUILD,
    verifiedDate: "Mar 10, 2026",
    licenseNumber: "LHR-PLUM-8821",
    insuranceAmount: "PKR 1,800,000 Safety Cover",
    hourlyRate: "Rs. 900 - 2,000 / visit",
    portfolio: [
      {
        id: "p17_1",
        title: "Automatic Multi-Stage Water Pump System",
        description: "Constructed dual-pump system with auto changeover sensors to protect motors from dry running.",
        imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
        completedDate: "February 2026"
      }
    ],
    reviews: [
      {
        id: "r17_1",
        author: "Asma Jahangir",
        rating: 5,
        date: "May 19, 2026",
        comment: "Rasheed Bhai identified the exact source of water seepage on our drawing room wall using thermal scan. Highly skilled and neat work.",
        projectCompleted: "Concealed wall water leakage repair",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c18",
    name: "Zainab Fatima",
    companyName: "Zainab Majestic Florals & Stage Artistry",
    category: "event_decorator",
    title: "Premium Bridal Canopy Scenographer & Light Designer",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    bio: "Specializing in luxury wedding floral backdrops, fresh marigold canopies, and fairy-light garden theme parties across Model Town and Cantt, Lahore. Zainab Fatima marries rich cultural heritage with modern, elegant layouts.",
    phone: "+92 301 4455669",
    whatsapp: "+923014455669",
    email: "zainab.majestic@gmail.com",
    website: "https://zainabdecors.com.pk",
    location: "Model Town, Lahore",
    city: "Lahore",
    rating: 5.0,
    reviewCount: 53,
    yearsInBusiness: 8,
    vettedStatus: VettingTier.MASTER_GUILD,
    verifiedDate: "Apr 05, 2026",
    licenseNumber: "LHR-EVT-9021",
    insuranceAmount: "PKR 3,500,000 Safety Cover",
    hourlyRate: "Rs. 120,000+ / Event Design",
    portfolio: [
      {
        id: "p18_1",
        title: "Model Town Club Imperial Baraat Walkway",
        description: "Created a stunning 100-foot archway made from fresh red roses, white carnations, and vintage brass lamps.",
        imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80",
        completedDate: "March 2026"
      }
    ],
    reviews: [
      {
        id: "r18_1",
        author: "Saman Qureshi",
        rating: 5,
        date: "May 20, 2026",
        comment: "Absolute dream setup! Everyone at the wedding could not stop taking pictures of the stage. The floral fragrance was amazing.",
        projectCompleted: "Main wedding stage and walk arch",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c19",
    name: "Shahid Mahmood",
    companyName: "Shahid Smart-Home Electrical & Solar Systems",
    category: "electrician",
    title: "Registered Home Automation & Solar DB Installer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Working across F-sector and G-sector zones in Islamabad, Shahid Mahmood and his team specialize in installing smart home touch boards, high-grade hybrid solar backup switches, and structural earthing to protect expensive appliances.",
    phone: "+92 345 1122998",
    whatsapp: "+923451122998",
    email: "shahid.smarthome@gmail.com",
    website: "https://shahidsolar.com.pk",
    location: "Sector F-10, Islamabad",
    city: "Islamabad",
    rating: 4.8,
    reviewCount: 39,
    yearsInBusiness: 6,
    vettedStatus: VettingTier.ELITE,
    verifiedDate: "Jan 15, 2026",
    licenseNumber: "ISB-ELEC-7711",
    insuranceAmount: "PKR 2,000,000 Safety Cover",
    hourlyRate: "Rs. 1,000 - 2,500 / visit",
    portfolio: [
      {
        id: "p19_1",
        title: "Smart-Living DB Box and Touch Switches",
        description: "Renovated a classic G-11 house into a modern electrical layout with voice-activated smart relay breaker boards.",
        imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
        completedDate: "December 2025"
      }
    ],
    reviews: [
      {
        id: "r19_1",
        author: "Dr. Tariq Niazi",
        rating: 5,
        date: "Jan 30, 2026",
        comment: "Shahid did a marvelous job automating our house electrical board. Professional behavior, fully equipped with tools, and very neat.",
        projectCompleted: "Whole-home smart breaker system upgrade",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c20",
    name: "Adnan Siddiqui",
    companyName: "Margalla Premium Painters & Wall Artistry",
    category: "painter",
    title: "Fine Stucco Artisan & Premium Weathercoat Expert",
    avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=400&q=80",
    bio: "Adnan provides premium interior putty coatings, luxury marble textures, and high-performance exterior weather-sheeting designed to withstand Islamabad's heavy monsoon seasons without moisture leaks.",
    phone: "+92 333 1122339",
    whatsapp: "+923331122339",
    email: "adnan.paints@gmail.com",
    website: "https://margallapaints.com",
    location: "Sector F-7, Islamabad",
    city: "Islamabad",
    rating: 4.9,
    reviewCount: 52,
    yearsInBusiness: 10,
    vettedStatus: VettingTier.MASTER_GUILD,
    verifiedDate: "Feb 28, 2026",
    licenseNumber: "ISB-PAINTS-4802",
    insuranceAmount: "PKR 2,500,000 Safety Cover",
    hourlyRate: "Rs. 22,000+ / room package",
    portfolio: [
      {
        id: "p20_1",
        title: "Luxury Dining Room Stucco Venetian Finish",
        description: "Applied meticulous 5-layer plaster technique for a stunning glass-mirror feature wall in F-7 villa.",
        imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
        completedDate: "January 2026"
      }
    ],
    reviews: [
      {
        id: "r20_1",
        author: "Ziad Kayani",
        rating: 5,
        date: "Apr 04, 2026",
        comment: "Outstanding paint job on our house exterior. Outstanding attention to weathercoating prep. They scraped everything perfectly before applying product.",
        projectCompleted: "Exterior full villa weathercoat shield",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c21",
    name: "Faisal Qadri",
    companyName: "Qadri Cooling Care & Inverter Experts",
    category: "ac_repair",
    title: "Inverter AC PCB Board Repair Specialist",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Faisal Qadri is a trusted technical hand in Islamabad for troubleshooting modern inverter split units. He carries specialized diagnostic board testers to repair units on-site instead of suggesting expensive replacements.",
    phone: "+92 300 5558811",
    whatsapp: "+923005558811",
    email: "qadricooling@gmail.com",
    website: "https://qadricooling.pk",
    location: "Sector G-9, Islamabad",
    city: "Islamabad",
    rating: 4.7,
    reviewCount: 44,
    yearsInBusiness: 7,
    vettedStatus: VettingTier.VERIFIED,
    verifiedDate: "Mar 11, 2026",
    licenseNumber: "ISB-HVAC-3109",
    insuranceAmount: "PKR 1,000,000 Safety Cover",
    hourlyRate: "Rs. 1,200 - 2,200 / visit",
    portfolio: [
      {
        id: "p21_1",
        title: "Inverter Split PCB Micro-soldering and Relay Fix",
        description: "Fixed a blown capacitor circuit in a 1.5Ton smart AC motherboard saving client more than Rs. 15,000.",
        imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
        completedDate: "April 2026"
      }
    ],
    reviews: [
      {
        id: "r21_1",
        author: "Noman Abbasi",
        rating: 5,
        date: "May 03, 2026",
        comment: "Excellent service. Located a simple relay bug and fixed it in 30 minutes. Extremely honest and professional young man.",
        projectCompleted: "AC motherboard capacitor repair",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c22",
    name: "Ustad Majeed Ahmed",
    companyName: "Majeed Paint Masters & Polish Guild",
    category: "painter",
    title: "Commercial Weather-Shield & Ashwood Polish Master",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    bio: "Ustad Majeed Ahmed leads a highly efficient team of painters providing elegant weather-coating and wooden door polishing across Saddar, Bahria Town, and Satellite Town Rawalpindi. Focused on high-quality paints and clean room preparation.",
    phone: "+92 321 5556633",
    whatsapp: "+923215556633",
    email: "majeed.paint@gmail.com",
    website: "https://majeedpaints.pk",
    location: "Satellite Town, Rawalpindi",
    city: "Rawalpindi",
    rating: 4.8,
    reviewCount: 61,
    yearsInBusiness: 15,
    vettedStatus: VettingTier.MASTER_GUILD,
    verifiedDate: "Jan 22, 2026",
    licenseNumber: "RWP-PAINTS-9912",
    insuranceAmount: "PKR 1,500,000 Safety Cover",
    hourlyRate: "Rs. 15,000+ / room package",
    portfolio: [
      {
        id: "p22_1",
        title: "Ashwood Executive Door Deco-Polish",
        description: "Removed previous flaking coats and applied flawless multi-layered matte walnut stain on residential doors.",
        imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
        completedDate: "January 2026"
      }
    ],
    reviews: [
      {
        id: "r22_1",
        author: "Col. Naveed Bajwa",
        rating: 5,
        date: "Apr 15, 2026",
        comment: "Ustad Majeed has polished all doors of our house and painted the guest rooms. The finish is fantastic, clean, and smells zero of raw solvents.",
        projectCompleted: "6 Master doors high-grade walnut polish",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c23",
    name: "Naveed Iqbal",
    companyName: "Naveed Air Conditioning & Refrigerator Care",
    category: "ac_repair",
    title: "Variable Speed AC Specialist & Deep Restoration Tech",
    avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80",
    bio: "Offering supreme quality R410a leak fixes, silent inverter installations, and dual chemical jet-washes in Bahria Town and DHA Rawalpindi. Honest diagnostics with warranty.",
    phone: "+92 312 9993344",
    whatsapp: "+923129993344",
    email: "naveedcooling@gmail.com",
    website: "https://naveedcooling.com.pk",
    location: "Phase 4, Bahria Town, Rawalpindi",
    city: "Rawalpindi",
    rating: 4.9,
    reviewCount: 50,
    yearsInBusiness: 8,
    vettedStatus: VettingTier.ELITE,
    verifiedDate: "Feb 05, 2026",
    licenseNumber: "RWP-HVAC-4402",
    insuranceAmount: "PKR 1,200,000 Safety Cover",
    hourlyRate: "Rs. 1,000 - 2,500 / job",
    portfolio: [
      {
        id: "p23_1",
        title: "Villa Variable-Speed Compressor Replaced",
        description: "Replaced faulty inverter compressor with high density copper tube vacuuming to avoid system humidity block.",
        imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
        completedDate: "March 2026"
      }
    ],
    reviews: [
      {
        id: "r23_1",
        author: "Hamid Bilal",
        rating: 5,
        date: "May 22, 2026",
        comment: "Excellent technical work, Naveed arrived on time. Safely diagnosed an underperforming compressor. Saved my summer cooling!",
        projectCompleted: "2-Ton Inverter compressor replacement and gas charge",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c24",
    name: "Arshad Ali",
    companyName: "Arshad Peshawar Electric-Works & Solar",
    category: "electrician",
    title: "Master Industrial Electrician & Phase-Load Balancer",
    avatar: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=400&q=80",
    bio: "Specializes in resolving persistent voltage drops, three-phase main DB connections, solar system installation, and automated UPS circuits in Peshawar (Khyber Bazaar, Hayatabad). Veteran craft leader.",
    phone: "+92 315 1122336",
    whatsapp: "+923151122336",
    email: "arshad.electric@gmail.com",
    website: "https://peshawarelectric.pk",
    location: "Khyber Bazaar, Peshawar",
    city: "Peshawar",
    rating: 4.7,
    reviewCount: 41,
    yearsInBusiness: 13,
    vettedStatus: VettingTier.VERIFIED,
    verifiedDate: "Mar 15, 2026",
    licenseNumber: "PEW-Y-ELEC-2241",
    insuranceAmount: "PKR 1,000,000 Safety Cover",
    hourlyRate: "Rs. 700 - 1,500 / visit",
    portfolio: [
      {
        id: "p24_1",
        title: "Heavy commercial 3-Phase Phase Distribution Panel",
        description: "Re-engineered a hot-wire junction at a flour mill into safe thermal breaker rows with copper balancing.",
        imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
        completedDate: "January 2026"
      }
    ],
    reviews: [
      {
        id: "r24_1",
        author: "Jamil Afridi",
        rating: 5,
        date: "Apr 10, 2026",
        comment: "Excellent work, solved a persistent fluctuation in our building. True ustad of heavy wiring.",
        projectCompleted: "Three-phase distribution overhaul",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c25",
    name: "Gul Khan",
    companyName: "Khyber Traditional Banquets & Stage Decors",
    category: "event_decorator",
    title: "Rustic Frontier Stage Planner & Traditional Peshawar Decorator",
    avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&q=80",
    bio: "Combining majestic traditional Peshawari rugs, hand-welded iron frames, local marigolds, and copper lantern arrangements to build gorgeous event stages across Peshawar.",
    phone: "+92 344 7773344",
    whatsapp: "+923447773344",
    email: "gulkhan.decors@gmail.com",
    website: "https://khyberdecor.pk",
    location: "Ring Road, Peshawar",
    city: "Peshawar",
    rating: 4.9,
    reviewCount: 37,
    yearsInBusiness: 10,
    vettedStatus: VettingTier.ELITE,
    verifiedDate: "Apr 10, 2026",
    licenseNumber: "PEW-EVT-1902",
    insuranceAmount: "PKR 2,000,000 Safety Cover",
    hourlyRate: "Rs. 60,000+ / event",
    portfolio: [
      {
        id: "p25_1",
        title: "Traditional Khyber Brass Canopy Stage",
        description: "Setup custom wooden frame backdrops styled with hand-crafted Peshawar copper accents and direct ambient lights.",
        imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80",
        completedDate: "April 2026"
      }
    ],
    reviews: [
      {
        id: "r25_1",
        author: "Saeed Jan",
        rating: 5,
        date: "May 01, 2026",
        comment: "Gul Khan made our family wedding memorable with traditional Peshawar theme. Highly cost-effective and respectful management.",
        projectCompleted: "Elite cultural stage setup",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c26",
    name: "Zubair Mahmood",
    companyName: "ArchiTech Corporate Painters & Office Partitions",
    category: "painter",
    title: "Premium Commercial Renovation, Drywall & Low-VOC Office Polish Specialist",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    bio: "Zubair and his team specialize in modern office transformations, glass-door fit-outs, durable drywall acoustic partitions, and premium odorless low-VOC painting. They perform weekend and night shifts in DHA, Gulberg, and Johar Town to ensure your business experiences absolute zero downtime during renovations.",
    phone: "+92 300 8887711",
    whatsapp: "+923008887711",
    email: "zubair.architech@gmail.com",
    website: "https://architechrenovations.pk",
    location: "Gulberg III, Lahore",
    city: "Lahore",
    rating: 4.9,
    reviewCount: 38,
    yearsInBusiness: 9,
    vettedStatus: VettingTier.MASTER_GUILD,
    verifiedDate: "May 10, 2026",
    licenseNumber: "LHR-PAINTS-8833",
    insuranceAmount: "PKR 3,000,000 Workplace Damage Shield",
    hourlyRate: "Rs. 35,000+ per office zone (Package)",
    portfolio: [
      {
        id: "p26_1",
        title: "IT Firm Open-Plan Office Drywall & Matte Coat",
        description: "Successfully partitioned 5,000 sq ft office space utilizing fire-rated acoustic sheetrock with smooth dustless white paint overlay.",
        imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
        completedDate: "April 2026"
      }
    ],
    reviews: [
      {
        id: "r26_1",
        author: "Salman Ghani (CEO, TekStart)",
        rating: 5,
        date: "May 28, 2026",
        comment: "Outstanding project management. Zubair's team completed the entire painting and sectioning during the Eid holidays. We walked into a brand new office with zero paint odor!",
        projectCompleted: "Acoustic partitions and painting for 40-seat workspace",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c27",
    name: "Khurram Shahzad",
    companyName: "Khurram Network Systems & Server Room Electricals",
    category: "electrician",
    title: "Certified Corporate Data Cabling, Server Grounding & UPS Engineer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Islamabad's expert for full-tier commercial cabling and electrical systems. Khurram is highly sought after by corporate offices in Blue Area and sector G-11 for robust Cat6/Cat7 structure layouts, copper grid server grounding, commercial hybrid generators, and long-load UPS backup solutions.",
    phone: "+92 333 4445588",
    whatsapp: "+923334445588",
    email: "khurram.cabling@gmail.com",
    website: "https://khurramnetworks.com.pk",
    location: "Blue Area, Islamabad",
    city: "Islamabad",
    rating: 4.8,
    reviewCount: 47,
    yearsInBusiness: 7,
    vettedStatus: VettingTier.ELITE,
    verifiedDate: "Jan 15, 2026",
    licenseNumber: "ISB-ELEC-9051",
    insuranceAmount: "PKR 5,000,000 Hardware Liability Cover",
    hourlyRate: "Rs. 2,000 - 4,500 / corporate visit",
    portfolio: [
      {
        id: "p27_1",
        title: "Software House Server Room Power Backup Sync",
        description: "Engineered three-phase automatic transfer panel for dual 30kVA online UPS units with integrated high-surge safety circuit breakers.",
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        completedDate: "March 2026"
      }
    ],
    reviews: [
      {
        id: "r27_1",
        author: "Dr. Amjad Malik",
        rating: 5,
        date: "Feb 27, 2026",
        comment: "Installed our network cabling and backup energy lines with immaculate label tags on every terminal box. Understood server-level safety specs precisely.",
        projectCompleted: "Server room electrical grounding and alternate backup loop",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c28",
    name: "Sohail Ahmed",
    companyName: "Sohail Commercial HVAC & Tower Chiller Experts",
    category: "ac_repair",
    title: "Commercial Chiller Operator, VRF Ducting & Premium Cassette AC Specialist",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    bio: "Sohail leads the premier industrial HVAC service team in Karachi, serving commercial towers, bank branches, and multinational hubs. Expert in variable refrigerant flow (VRF) maintenance, ducted indoor unit chemical operations, gas level restorations, and central cooling air path calibrations.",
    phone: "+92 321 7779955",
    whatsapp: "+923217779955",
    email: "sohail.hvac@gmail.com",
    website: "https://sohailcommercialhvac.pk",
    location: "I.I. Chundrigar Road, Karachi",
    city: "Karachi",
    rating: 4.9,
    reviewCount: 66,
    yearsInBusiness: 12,
    vettedStatus: VettingTier.MASTER_GUILD,
    verifiedDate: "Feb 10, 2026",
    licenseNumber: "KHI-HVAC-7788",
    insuranceAmount: "PKR 4,000,000 Safety Cover",
    hourlyRate: "Rs. 2,500 - 6,000 / diagnostics",
    portfolio: [
      {
        id: "p28_1",
        title: "Multi-Zone VRF System Diagnostic & Recovery",
        description: "Corrected critical cooling pressure failure on an 8-zone outdoor compressor unit powering three floors of a corporate building.",
        imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
        completedDate: "May 2026"
      }
    ],
    reviews: [
      {
        id: "r28_1",
        author: "Afaq Siddiqui (Facilities Mgr, Habib Tower)",
        rating: 5,
        date: "May 19, 2026",
        comment: "Exceptional technicians. Our central inverter system is working flawlessly after their custom high-jet multi-coil commercial wash. Huge difference in airflow.",
        projectCompleted: "Full commercial cassette AC routine service and pressure calibration",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c29",
    name: "Sajjan Masih",
    companyName: "Sajjan High-Pressure Drainage & Commercial Plumbing",
    category: "plumber",
    title: "Office Restroom Sanitary specialist & Multi-Floor Blockage Expert",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    bio: "Sajjan Masih has resolved complex commercial sewerage blocks and high-pressure water pump network malfunctions in Rawalpindi & Bahria Town zones for 11 years. Highly appreciated for professional conduct, high-end drain snakes, and modern PPR-C pipe routing inside office layouts.",
    phone: "+92 312 5556688",
    whatsapp: "+923125556688",
    email: "sajjan.plumb@gmail.com",
    website: "https://sajjanplumbing.com.pk",
    location: "Phase 7, Bahria Town, Rawalpindi",
    city: "Rawalpindi",
    rating: 4.7,
    reviewCount: 33,
    yearsInBusiness: 11,
    vettedStatus: VettingTier.VERIFIED,
    verifiedDate: "Mar 05, 2026",
    licenseNumber: "RWP-PLUM-6671",
    insuranceAmount: "PKR 1,500,000 Complete Damage Cover",
    hourlyRate: "Rs. 1,000 - 3,000 / emergency fix",
    portfolio: [
      {
        id: "p29_1",
        title: "Corporate Toilet Blockage Clearance",
        description: "Cleared nested industrial waste blockage in 4-inch main sewer riser using automated motorized flexible cleanout cables.",
        imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
        completedDate: "February 2026"
      }
    ],
    reviews: [
      {
        id: "r29_1",
        author: "Zulqarnain Shah (Admin Exec)",
        rating: 5,
        date: "Apr 22, 2026",
        comment: "Excellent response. Sajjan arrived within 30 minutes for a severe office washroom flooding. Handled everything with proper industrial gear and kept lines perfectly clean.",
        projectCompleted: "Severe mainline sewer backup restoration",
        verifiedHired: true
      }
    ]
  },
  {
    id: "c30",
    name: "Anum Fatima",
    companyName: "Anum Corporate Launches & Institutional Scenography",
    category: "event_decorator",
    title: "Elite Workspace Launch, Exhibition Display & Seminar Theme Creator",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    bio: "Anum leads a team that fuses corporate brand identities with gorgeous minimalist event styling. They specialize in upscale company seminars, product launch backdrops, ribbon-cutting decor sets, and exhibition booth layout fabrication across DHA and Cantt, Lahore.",
    phone: "+92 301 5551122",
    whatsapp: "+923015551122",
    email: "anum.launches@gmail.com",
    website: "https://anumlaunches.com.pk",
    location: "DHA Phase 3, Lahore",
    city: "Lahore",
    rating: 4.9,
    reviewCount: 40,
    yearsInBusiness: 8,
    vettedStatus: VettingTier.ELITE,
    verifiedDate: "May 01, 2026",
    licenseNumber: "LHR-EVT-7744",
    insuranceAmount: "PKR 3,500,000 Material & Setup Cover",
    hourlyRate: "Rs. 120,000+ / Event Design",
    portfolio: [
      {
        id: "p30_1",
        title: "E-Commerce Headquarters Grand Launch Stage",
        description: "Created a stunning clean-cut hybrid stage with integrated backlit acrylic corporate logos and bespoke natural greenery panels.",
        imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80",
        completedDate: "April 2026"
      }
    ],
    reviews: [
      {
        id: "r30_1",
        author: "Ayesha Malik (HR VP, CloudScale)",
        rating: 5,
        date: "May 15, 2026",
        comment: "Wonderful workspace launching design. Anum understood our brand colors perfectly. The lighting and staging looked extremely professional.",
        projectCompleted: "New headquarters ribbon-cutting ceremony set",
        verifiedHired: true
      }
    ]
  }
];

