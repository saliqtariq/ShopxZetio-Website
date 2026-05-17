import type { Product } from "../types";

export const IMG = {
  headphone1: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
  headphone2: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
  earbuds: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&q=80",
  iphone1: "https://images.unsplash.com/photo-1695048133142-1a20484429be?w=800&q=80",
  iphone15pm: "/Iphone 15pm.jpg",
  iphone13pm: "/iphone 13pm.webp",
  ps4: "/ps4 updated pic.webp",
  logiProX: "/LogiTech G Pro X.jpeg",
  stinger2: "/HyperX Cloud Stinger 2.jpeg",
  cloud2: "/HyperX Cloud 2.jpeg",
  earbuds2: "/HyperX Earbuds 2.webp",
  appleEarbuds: "/Apple EarBuds.jpg",
  mcdodoSplitter: "/McDodo Spliter.jpeg",
  appleSinglePinSplitter: "/Apple SinglePin Spliter.jpeg",
  bluksPowerbank: "/BLUKS Powerbank.webp",
  sogoFan: "/Sogo Fan.png",
};

export const HOME_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "HyperX Cloud 2",
    category: "headphones",
    price: 14500,
    currency: "PKR",
    image: IMG.cloud2,
    isNew: true,
    description: "The legendary HyperX Cloud II is a ultra-comfortable gaming headset designed for supreme audio precision. Engineered with a durable aluminum frame, signature memory foam, and custom-tuned 53mm drivers, it delivers immersive virtual 7.1 surround sound that lets you pinpoint every detail on the battlefield.",
    deliveryTime: "Fast Delivery: 2-3 Working Days (Free Shipping)",
    specs: [
      "Signature HyperX Memory Foam and Premium Leatherette",
      "Custom 53mm Neodymium Drivers",
      "Immersive Hardware-Driven Virtual 7.1 Surround Sound",
      "Durable, Solid Aluminum Frame Construction",
      "Detachable Noise-Cancellation Microphone",
      "TeamSpeak and Discord Certified for Clear Comms"
    ]
  },
  {
    id: "2",
    name: "HyperX Cloud Stinger 2",
    category: "headphones",
    price: 12000,
    currency: "PKR",
    image: IMG.stinger2,
    description: "The HyperX Cloud Stinger 2 offers premium comfort and performance at an exceptional value. Featuring DTS Headphone:X Spatial Audio, rotating ear cups, and 50mm directional drivers, this lightweight headset delivers rich, impactful gaming audio with effortless accessibility.",
    deliveryTime: "Fast Delivery: 2-3 Working Days (Free Shipping)",
    specs: [
      "DTS Headphone:X Spatial Audio (2-year activation code included)",
      "Ultra-Lightweight Comfort with Memory Foam",
      "50mm Directional Drivers for Audio Precision",
      "Swivel-to-Mute Noise-Cancelling Microphone",
      "Easy-Access On-Ear Volume Controls",
      "Multi-platform Compatibility (PC, Xbox, PlayStation, Switch)"
    ]
  },
  {
    id: "3",
    name: "Apple Earbuds",
    category: "earbuds",
    price: 5000,
    currency: "PKR",
    image: IMG.appleEarbuds,
    description: "Genuine Apple EarPods featuring a dynamic acoustic design that fits the geometry of the ear perfectly. Unlike traditional circular earbuds, the design of the EarPods is defined by the geometry of the ear, making them more comfortable for more people than any other earbud-style headphones.",
    deliveryTime: "Fast Delivery: 2-3 Working Days (Free Shipping)",
    specs: [
      "Designed by Apple for Ergonomic Comfort",
      "Deeper, Richer Bass Tones",
      "Greater Protection from Sweat and Water",
      "Control Music and Video Playback",
      "Answer and End Calls with In-line Remote & Mic",
      "Lightning Connector Interface"
    ]
  },
  {
    id: "4",
    name: "iPhone 15 Pro Max Non-Pta 256GB",
    category: "phones",
    price: 220000,
    currency: "PKR",
    image: IMG.iphone15pm,
    isNew: true,
    description: "Forged in aerospace-grade titanium, the iPhone 15 Pro Max is the ultimate flagship device. Powering through heavy tasks is the groundbreaking A17 Pro chip, featuring a custom Pro-class GPU. Discover spectacular detailing with the most advanced triple-camera system yet, housing a 5x optical telephoto lens and an adaptive Action button.",
    deliveryTime: "Secure Courier Delivery: 1-2 Working Days (Insured Shipping)",
    specs: [
      "Aerospace-Grade Titanium Design with Textured Matte Glass Back",
      "Groundbreaking A17 Pro Chip with 6-Core Pro GPU",
      "6.7-inch Super Retina XDR Display with ProMotion & Always-On",
      "Pro Camera System: 48MP Main, 12MP Ultra Wide, 12MP 5x Telephoto",
      "Customizable Action Button for Personalized Shortcuts",
      "USB-C Connector with USB 3 Speeds (up to 10Gb/s)"
    ]
  },
  {
    id: "15",
    name: "PlayStation 4",
    category: "phones", // Sticking to default codebase categorizations
    price: 120000,
    currency: "PKR",
    image: IMG.ps4,
    description: "Immerse yourself in blockbuster gaming with the PlayStation 4. Delivering spectacular graphics, high-speed execution, and a massive community, the PS4 console provides the ultimate portal to the world's most immersive gaming experiences. Bundle includes a matching DUALSHOCK 4 wireless controller.",
    deliveryTime: "Fast Insured Delivery: 2-3 Working Days",
    specs: [
      "Powerful Custom CPU/GPU AMD Radeon Hardware Architecture",
      "High-Speed 8GB GDDR5 System Memory",
      "Generous 500GB Internal Storage for Games and Media",
      "DUALSHOCK 4 Wireless Controller with Touchpad & Motion Sensors",
      "HDR (High Dynamic Range) Supported Gaming output",
      "Share Play and Remote Play Integration"
    ]
  },
];

export const ALL_PRODUCTS: Product[] = [
  ...HOME_PRODUCTS,
  {
    id: "16",
    name: "iPhone 13 Pro Max Non-Pta",
    category: "phones",
    price: 140000,
    currency: "PKR",
    image: IMG.iphone13pm,
    description: "The iPhone 13 Pro Max represents the peak of mobile power, performance, and endurance. Powered by the incredibly fast A15 Bionic chip and a massive leap in battery life, it boasts the ultra-responsive 120Hz ProMotion Super Retina XDR screen and a dramatic camera hardware upgrade for professional cinematic video and macro shots.",
    deliveryTime: "Secure Courier Delivery: 1-2 Working Days (Insured Shipping)",
    specs: [
      "Stunning 6.7-inch Super Retina XDR display with ProMotion",
      "Ultra-Fast A15 Bionic chip with 5-Core GPU",
      "Pro camera system: 12MP Telephoto, Wide, and Ultra Wide cameras",
      "Cinematic mode adds shallow depth of field and shifts focus automatically",
      "Up to 28 hours of video playback (the longest battery life in an iPhone yet)",
      "Ceramic Shield front, tougher than any smartphone glass"
    ]
  },
  {
    id: "6",
    name: "Logitech G Pro X",
    category: "headphones",
    price: 25000,
    currency: "PKR",
    image: IMG.logiProX,
    description: "The Logitech G Pro X Gaming Headset is designed in collaboration with esports professionals to deliver championship-grade audio and communications. Armed with advanced Blue VO!CE technology, hybrid mesh PRO-G 50mm drivers, and next-gen DTS Headphone:X 2.0 surround sound, you will hear everything with unmatched depth and clarity.",
    deliveryTime: "Fast Delivery: 2-3 Working Days (Free Shipping)",
    specs: [
      "Blue VO!CE Microphone Technology for Professional-Grade Voice Comms",
      "Advanced PRO-G 50mm Hybrid Mesh Audio Drivers",
      "DTS Headphone:X 2.0 7.1 Channel Spatial Surround Sound",
      "Steel-Reinforced Durable Headband and Aluminum Forks",
      "Premium Memory Foam Earpads (both leatherette and soft cloth options)",
      "Pro-Tuned EQ Profiles from Elite Esports Athletes"
    ]
  },
  {
    id: "10",
    name: "HyperX Earbuds 2",
    category: "earbuds",
    price: 12000,
    currency: "PKR",
    image: IMG.earbuds2,
    description: "HyperX Cloud Earbuds II are engineered to deliver immersive console gaming audio directly on the go. Optimized for mobile, Nintendo Switch, and handheld gaming, these premium ear buds feature angled 14mm drivers, a low-profile 90-degree audio connector, and a crystal-clear in-line microphone with multi-function controls.",
    deliveryTime: "Fast Delivery: 2-3 Working Days (Free Shipping)",
    specs: [
      "Optimized for Handheld Console and Mobile Audio",
      "Angled 14mm Drivers for Deep, Impactful Sound",
      "Signature HyperX Comfort with 4 Patented Ear Tip Sizes",
      "Low-Profile 90-degree Flat Cable Connector",
      "In-line Microphone with Multi-Function Playback Button",
      "Durable Hard-shell Travel Case Included"
    ]
  },
  {
    id: "11",
    name: "McDodo Spliter",
    category: "accessories",
    price: 6000,
    currency: "PKR",
    image: IMG.mcdodoSplitter,
    description: "High-performance McDodo 2-in-1 Dual USB-C and 3.5mm Headphone Jack Adapter. Charge your device at full speed while enjoying crystal-clear lossless audio playback simultaneously without interference or static. Crafted with premium zinc alloy housing and a durable braided cable.",
    deliveryTime: "Fast Delivery: 2-3 Working Days (Free Shipping)",
    specs: [
      "2-in-1 Dual Interface: USB-C and 3.5mm Aux Audio Jack",
      "Supports PD Fast Charging (up to 60W charging speeds)",
      "Built-in DAC High-Fidelity Audio Decoding Chip",
      "Premium Anti-Interference Aluminum Shell Construction",
      "Extra Tough Nylon Braided Cable Design",
      "Plug and Play - No Drivers Required"
    ]
  },
  {
    id: "12",
    name: "Apple Single Pin Spliter",
    category: "accessories",
    price: 2000,
    currency: "PKR",
    image: IMG.appleSinglePinSplitter,
    description: "Apple Lightning to 3.5mm Headphone Jack Adapter. Connect devices that use a standard 3.5mm audio plug to your Lightning devices. Perfect for using wired headsets, external microphones, and car aux cables with Apple iPhones.",
    deliveryTime: "Fast Delivery: 2-3 Working Days (Free Shipping)",
    specs: [
      "Original Apple Lightning to 3.5 mm Aux Headphone Adapter",
      "Lossless High-Quality Analog-to-Digital Converter",
      "Ultra-Compact and Flexible Cable Construction",
      "Enables Microphone and In-Line Remote Control Functions",
      "Fully Certified and Compatible with iOS Devices",
      "Durable White Polymer Sheathing"
    ]
  },
  {
    id: "13",
    name: "BLUK'S Powerbank",
    category: "accessories",
    price: 2500,
    currency: "PKR",
    image: IMG.bluksPowerbank,
    description: "Heavy-duty BLUK'S 10,000mAh Ultra-Compact Fast Charging Powerbank. Packed with high-density lithium polymer cells, dual USB-A smart output ports, and a fast USB-C input/output, it ensures you remain powered up through long gaming sessions or travels.",
    deliveryTime: "Fast Delivery: 2-3 Working Days (Free Shipping)",
    specs: [
      "High-Density 10,000mAh Lithium Polymer Battery Capacity",
      "Dual Smart USB-A Output Ports (charges two devices at once)",
      "High-Speed USB-C Input/Output Charging Port",
      "9-Layer Advanced Circuit Protection Chipset",
      "Lightweight, Pocket-sized Ergonomic Design",
      "LED Power Capacity Indicator Lights"
    ]
  },
  {
    id: "14",
    name: "Sogo Rechargable Fan",
    category: "accessories",
    price: 2000,
    currency: "PKR",
    image: IMG.sogoFan,
    description: "Stay cool and focused during intense gaming sessions with the Sogo Rechargeable Desktop Fan. Equipped with a high-capacity lithium battery, multi-speed wind controls, and low-noise aerodynamic blades, this portable cooling unit delivers sustained airflow for hours on a single charge.",
    deliveryTime: "Fast Delivery: 2-3 Working Days (Free Shipping)",
    specs: [
      "High-Performance Brushless Silent DC Motor",
      "Equipped with Long-Life Rechargeable Lithium Battery",
      "3-Speed Adjustable Airflow Speed Settings",
      "120-Degree Adjustable Tilting Head Fan Position",
      "USB Charging Interface (fully charges in 2-3 hours)",
      "Up to 6 Hours of High-Speed Wireless Fan Run Time"
    ]
  },
];
