const products = [
    {
        id: 'plunger',
        name: 'Plunger',
        sku: '20670',
        brand: 'CT Standard',
        category: 'Washroom Care',
        subcategory: 'Toilet Cleaning',
        description: 'Standard rubber suction plunger with wooden handle. High durability and strong suction for household and commercial use.',
        fullDescription: 'Essential for every bathroom, our Plunger is built for maximum suction power with minimal effort. The high-grade rubber cup ensures a tight seal on most surfaces, while the sturdy, ergonomic wooden handle provides a comfortable grip and lasting durability. Whether you’re dealing with a minor clog in the sink or a more stubborn toilet blockage, this classic tool is your first line of defense.',
        image: 'assets/images/plunger_red.png',
        catalogImage: 'assets/images/plunger.png',
        thumbnails: ['assets/images/plunger_red.png', 'assets/images/plunger_blue.png', 'assets/images/plunger_black.png', 'assets/images/plunger_green.png'],
        colors: ['#D0312D', '#1A5276', '#4A235A', '#1E8449'],
        specs: [
            ['Material', 'Rubber & Sustainably Sourced Wood'],
            ['Cup Diameter', '5.5 Inches'],
            ['Handle Length', '18 Inches'],
            ['Best Use', 'Toilets, Sinks, Showers'],
            ['Durability', 'Heavy-Duty Commercial Grade']
        ]
    },
    {
        id: 'toilet-brush',
        name: 'Toilet Brush',
        sku: '20671',
        brand: 'CT Hygienic',
        category: 'Washroom Care',
        subcategory: 'Toilet Cleaning',
        description: 'Includes robust stand and curve-reaching bristles. Effective cleaning for under-the-rim spots.',
        fullDescription: 'Keep your bathroom pristine with our heavy-duty Toilet Brush set. Featuring stiff, durable bristles that resist shedding, this brush is designed to reach deep into the bowl and under the rims for a thorough clean. The included ventilated stand keeps the brush head dry and hygienic between uses, with a sleek design that blends seamlessly into any modern restroom.',
        image: 'assets/images/toilet_brush.png',
        catalogImage: 'assets/images/toilet_brush.png',
        thumbnails: ['assets/images/toilet_brush.png', 'assets/images/toilet_brush.png'],
        colors: ['#ffffff', '#000000', '#3498DB'],
        specs: [
            ['Bristle Type', 'Nylon Anti-Bacterial'],
            ['Stand Material', 'High-Impact PVC'],
            ['Design', '360° Scrubbing Head'],
            ['Features', 'Splash Guard Handle']
        ]
    },
    {
        id: 'fabian-toilet-bowl-cleaner',
        name: 'Fabian Toilet Bowl Cleaner',
        sku: '20672',
        brand: 'Fabian Clean',
        category: 'Washroom Care',
        subcategory: 'Toilet Cleaning',
        description: 'Thick gel formula for tackling tough limescale stains and killing 99.9% of germs.',
        fullDescription: 'Fabian Toilet Bowl Cleaner delivers a deep clean that leaves your toilet sparkling. Its powerful, thick gel formula clings to the bowl’s surface, even below the waterline, to dissolve tough stains like limescale and rust. With a fresh scent and advanced germ-killing action, it ensures your washroom remains hygienic and inviting for everyone.',
        image: 'assets/images/toilet_bowl_cleaner.png',
        catalogImage: 'assets/images/toilet_bowl_cleaner.png',
        thumbnails: ['assets/images/toilet_bowl_cleaner.png'],
        colors: ['#0A6EBD'],
        specs: [
            ['Volume', '750ml / 5L'],
            ['Formula', 'Concentrated Germ-Kill Gel'],
            ['Scent', 'Ocean Breeze / Fresh Lemon'],
            ['pH Level', 'Acidic (Strong Limescale Removal)']
        ]
    },
    {
        id: 'toilet-roll',
        name: 'Toilet Roll',
        sku: '20673',
        brand: 'SoftTouch',
        category: 'Washroom Care',
        subcategory: 'Toilet Cleaning',
        description: 'Soft 2-ply commercial bathroom rolls (150–450 pulls). Ideal for high-traffic environments.',
        fullDescription: 'Experience the perfect balance of softness and strength with our premium 2-ply Toilet Rolls. Designed specifically for commercial environments, these rolls offer exceptional absorbency and comfort. They are fully compatible with standard dispensers and are septic-safe, ensuring smooth operation in hotels, offices, and public facilities.',
        image: 'assets/images/toilet_roll.png',
        catalogImage: 'assets/images/toilet_roll.png',
        thumbnails: ['assets/images/toilet_roll.png'],
        colors: ['#ffffff'],
        specs: [
            ['Ply', '2-Ply Pure Cellulose'],
            ['Pulls', '150 to 450 per roll'],
            ['Embossing', 'Micro-Quilted for Softness'],
            ['Eco-Friendly', '100% Biodegradable']
        ]
    },
    {
        id: 'urinal-mat',
        name: 'Urinal Mat',
        sku: '20674',
        brand: 'Eco-Fresh',
        category: 'Washroom Care',
        subcategory: 'Urinal Care',
        description: 'Scented debris-catching mat for public urinals. Reduces splash and masking odors.',
        fullDescription: 'Our Scented Urinal Mats are engineered to revolutionize restroom hygiene. The unique design significantly reduces splash-back, keeping the surrounding area drier and cleaner. Infused with long-lasting fragrances, these mats neutralize odors for up to 30 days while filtering out cigarette butts and other debris to prevent costly piping clogs.',
        image: 'assets/images/urinal_mat.png',
        catalogImage: 'assets/images/urinal_mat.png',
        thumbnails: ['assets/images/urinal_mat.png'],
        colors: ['#3498DB', '#1E8449', '#D35400'],
        specs: [
            ['Material', 'Flexible EVU Polymer'],
            ['Fragrance Life', '30 Days Guaranteed'],
            ['Safety', 'Anti-Splash Wave Design'],
            ['Dimensions', '7" x 7" (Universal Fit)']
        ]
    },
    {
        id: 'liquid-hand-wash',
        name: 'Liquid Hand Wash',
        sku: '20679',
        brand: 'CleanGlow',
        category: 'Washroom Care',
        subcategory: 'Hygiene',
        description: 'Moisturizing pink hand wash with a pleasant floral scent. Gentle on skin.',
        fullDescription: 'A premium moisturizing hand wash blended with skin-soothing ingredients. Its rich, creamy lather gently removes dirt and bacteria without over-drying, leaving your hands soft, refreshed, and lightly fragranced with fresh flowers.',
        image: 'assets/images/hand_wash.png',
        catalogImage: 'assets/images/hand_wash.png',
        thumbnails: ['assets/images/hand_wash.png'],
        colors: ['#FFC0CB', '#ffffff'],
        specs: [
            ['Volume', '250ml / 500ml / 5L'],
            ['Type', 'Anti-Bacterial Moisturizer'],
            ['pH', 'Balanced for skin']
        ]
    },
    {
        id: 'hand-sanitizer',
        name: 'Hand Sanitizer',
        sku: '20680',
        brand: 'PureSafe',
        category: 'Washroom Care',
        subcategory: 'Hygiene',
        description: '70% alcohol-based gel for quick hand disinfection without water.',
        fullDescription: 'Our PureSafe Hand Sanitizer provides rapid disinfection where soap and water aren’t available. Formulated with 70% ethyl alcohol, it effectively eliminates 99.9% of common germs while glycerin ensures your skin remains hydrated despite frequent use.',
        image: 'assets/images/sanitizer.png',
        catalogImage: 'assets/images/sanitizer.png',
        thumbnails: ['assets/images/sanitizer.png'],
        colors: ['#E8F8F5'],
        specs: [
            ['Alcohol Content', '70% v/v'],
            ['Format', 'Viscous Gel'],
            ['Certification', 'Medical Grade']
        ]
    },
    {
        id: 'air-freshener',
        name: 'Aerosol Air Freshener',
        sku: '20681',
        brand: 'FreshBreeze',
        category: 'Washroom Care',
        subcategory: 'Air Care',
        description: 'Instantly neutralizes odors with a dry spray formula. Long-lasting fragrance.',
        fullDescription: 'Transform your restroom atmosphere with FreshBreeze. Unlike heavy water-based sprays, our dry aerosol technology lingers in the air longer without leaving damp residue on floors or surfaces. It doesn’t just mask odors—it absorbs and neutralizes them.',
        image: 'assets/images/air_freshener.png',
        catalogImage: 'assets/images/air_freshener.png',
        thumbnails: ['assets/images/air_freshener.png'],
        colors: ['#ffffff'],
        specs: [
            ['Scent', 'Lavender / Citrus / Pine'],
            ['Can Volume', '300ml'],
            ['Technology', 'Dry-Spray Aroma-Lock']
        ]
    },
    {
        id: 'drain-opener',
        name: 'Heavy-Duty Drain Opener',
        sku: '20682',
        brand: 'FlowMaster',
        category: 'Washroom Care',
        subcategory: 'Maintenance',
        description: 'Fast-acting liquid to dissolve hair, grease, and paper clogs in pipes.',
        fullDescription: 'FlowMaster is a powerful, non-acidic drain cleaner designed to cut through the toughest organic blockages. Safe for all metal and PVC pipes, its high-density formula sinks through standing water to reach the clog directly and melt it away in minutes.',
        image: 'assets/images/drain_opener.png',
        catalogImage: 'assets/images/drain_opener.png',
        thumbnails: ['assets/images/drain_opener.png'],
        colors: ['#ffffff'],
        specs: [
            ['Format', 'Direct-Pour Liquid'],
            ['Action Time', '15 - 30 Minutes'],
            ['Safety', 'PVC & Septic Safe']
        ]
    },
    {
        id: 'glass-cleaner',
        name: 'Glass & Surface Cleaner',
        sku: '20683',
        brand: 'ShineX',
        category: 'Washroom Care',
        subcategory: 'Maintenance',
        description: 'Ammonia-free spray for streak-free windows, mirrors, and stainless steel.',
        fullDescription: 'Achieve professional-grade clarity with ShineX. Its streak-free, ammonia-free formula is designed to easily lift dust, fingerprints, and smudges from glass, mirrors, and polished surfaces without leaving hazy residue behind.',
        image: 'assets/images/glass_cleaner.png',
        catalogImage: 'assets/images/glass_cleaner.png',
        thumbnails: ['assets/images/glass_cleaner.png'],
        colors: ['#85C1E9'],
        specs: [
            ['Application', 'Trigger Spray'],
            ['Drying Speed', 'Instant / Streak-Free'],
            ['Volume', '500ml']
        ]
    }
];

// Helper function to find a product by ID or Name
function getProductById(id) {
    return products.find(p => p.id === id || p.name.toLowerCase().replace(/ /g, '-') === id || p.sku === id);
}

// Helper function to get related products
function getRelatedProducts(product, limit = 12) {
    // Return more to support carousel
    return products
        .filter(p => p.id !== product.id && (p.category === product.category || p.subcategory === product.subcategory))
        .concat(products.filter(p => p.id !== product.id && p.category !== product.category)) // Fallback to other products to fill carousel
        .slice(0, limit);
}
