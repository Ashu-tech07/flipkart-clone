


export const navData = [
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100', text: 'Grocery', link: `/grocery`, arrow: false },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100', text: 'Mobile', link: `/mobile`, arrow: false },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100', text: 'Fashion', menuItems: [{ title: `Men's Wear`, link: `/men` }, { title: `Women's Wear`, link: `/women` }, { title: 'Kids', link: `/kids` }, { title: `Men's Shirts`, link: `/men` }, { title: `Women's Shirts`, link: `/women` }, { title: 'Kids Wear', link: `/kids` }], arrow: true },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100', text: 'Electronics', menuItems: [{ title: 'Electronics Store', link: `/electronics` }, { title: 'Laptop & Desktop', link: `/laptop` }, { title: 'Camera', link: `/camera` }, { title: 'IT Accessories', link: `/electronics` }, { title: 'Personal Computer', link: `/laptop` }, { title: 'Camcorders', link: `/camera` }], arrow: true },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100', text: 'Home & Furniture', menuItems: [{ title: 'Home Furnishings', link: `/furniture` }, { title: 'Home Decor', link: `/decor` }, { title: 'Tools & Utility', link: `/tools` }, { title: 'Furniture Studio', link: `/furniture` }, { title: 'Wallpapers & Clocks', link: `/decor` }, { title: 'Locks & Safety', link: `/tools` }], arrow: true },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100', text: 'Appliances', link: `/appliances`, arrow: false },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100', text: 'Travel', link: `/travel`, arrow: false },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100', text: 'Beauty, Toys & More', menuItems: [{ title: 'Beauty & Personal Care', link: `/beauty` }, { title: 'Sports & Fitness', link: `/sports` }, { title: 'Books', link: `/books` }, { title: 'Fragrance & Hair Care', link: `/beauty` }, { title: 'Fitness Equipment', link: `/sports` }, { title: 'Literature & Fiction', link: `/books` }], arrow: true },
    { url: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100', text: 'Two Wheelers', menuItems: [{ title: 'Petrol Vehicles', link: `/petrolVehicles` }, { title: 'Electric Vehicles', link: `/electricVehicles` }], arrow: true },
];

export const bannerData = [
    { id: 1, url: 'https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/d1e2c6399c50f2f9.jpg?q=20', path: '/PhoneCarouselitems' },
    { id: 2, url: 'https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/830b0b3bff28e292.jpg?q=20', path: '/TravelCarouselitems' },
    { id: 3, url: 'https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/4f9ffd5f11a2a4b9.jpg?q=20', path: '/TravelCarouselitems' },
    { id: 4, url: 'https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/850993b3fd3b450f.jpg?q=20', path: '/LedCarouselitems' },
]

export const bannerData2 = [
    { id: 1, url: 'https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/352e6f0f8034fab5.jpg?q=50' },
    { id: 2, url: 'https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/9a8b2d3f3cb861f0.png?q=50' },
    { id: 3, url: 'https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/299013e0bba29562.jpg?q=50' },
    { id: 4, url: 'https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/dd75bf0d7c3bb4b4.jpg?q=50' },
]

export const mobileProducts = [
    {
        brandName: 'Realme smartphones', details: {
            product1: { url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/5/5/-original-imagt4qzhsrnpyhb.jpeg?q=70', title: 'realme C51 (Carbon Black, 64 GB)', price: { mrp: '₹8,999', cost: '₹10,999', discount: '18% off' }, link: `/product1` },
            product2: { url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/q/g/-original-imagtqqd4vcdzqdg.jpeg?q=70', title: 'realme 11x 5G (Purple Dawn, 128 GB)', price: { mrp: '₹14,999', cost: '₹16,999', discount: '11% off' }, link: `/product2` },
            product3: { url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/8/d/-original-imagqadpnygfnn2v.jpeg?q=70', title: 'realme 11 Pro 5G (Sunrise Beige, 128 GB)', price: { mrp: '₹21,999', cost: '₹25,999', discount: '15% off' }, link: `/product3` },
            product4: { url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/i/x/-original-imagt4qptrkzwmxa.jpeg?q=70', title: 'realme C51 (Mint Green, 64 GB)', price: { mrp: '₹8,999', cost: '₹10,999', discount: '18% off' }, link: `/product4` },
            product5: { url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/s/3/-original-imagtqqdw4tnwjbh.jpeg?q=70', title: 'realme 11x 5G (Midnight Black, 128 GB)', price: { mrp: '₹14,999', cost: '₹16,999', discount: '11% off' }, link: `/product5` },
            product6: { url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/x/x/-original-imagp55frhhddu6n.jpeg?q=70', title: 'realme C55 (Sunshower, 64 GB)', price: { mrp: '₹8,499', cost: '₹12,999', discount: '34% off' }, link: `/product6` },
        }
    },
    {
        brandName: 'Samsung smartphones', details: {
            product1: { url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/f/i/galaxy-a15-5g-sm-a156ezbnins-samsung-original-imagwkgzv7vs8zd2.jpeg?q=70', title: 'SAMSUNG Galaxy A15 5G (Blue, 128 GB)', price: { mrp: '₹19,499', cost: '₹21,499', discount: '9% off' }, link: `/product1` },
            product2: { url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/t/h/galaxy-f54-5g-sm-e546bzshins-samsung-original-imagq79f82pfyzvh.jpeg?q=70', title: 'SAMSUNG Galaxy F54 5G (Meteor Blue, 256 GB)', price: { mrp: '₹26,999', cost: '₹35,999', discount: '25% off' }, link: `/product2` },
            product3: { url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/i/c/galaxy-a15-5g-sm-a156elbnins-samsung-original-imagwkgykezdha6z.jpeg?q=70', title: 'SAMSUNG Galaxy A15 5G (Light Blue, 128 GB)', price: { mrp: '₹19,999', cost: '₹21,499', discount: '6% off' }, link: `/product3` },
            product4: { url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/r/x/-original-imagth5xf4shxcuv.jpeg?q=70', title: 'SAMSUNG Galaxy S22 5G (Phantom White, 128 GB)', price: { mrp: '₹35,999', cost: '₹85,999', discount: '58% off' }, link: `/product4` },
            product5: { url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/o/r/-original-imagu4haetzha9bj.jpeg?q=70', title: 'SAMSUNG Galaxy S21 FE 5G (Graphite, 128 GB)', price: { mrp: '₹34,999', cost: '₹74,999', discount: '53% off' }, link: `/product5` },
            product6: { url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/t/h/galaxy-f54-5g-sm-e546bzshins-samsung-original-imagq79f82pfyzvh.jpeg?q=70', title: 'SAMSUNG Galaxy F54 5G (Stardust Silver, 256 GB)', price: { mrp: '₹26,999', cost: '₹35,999', discount: '25% off' }, link: `/product6` },
        }
    },
    {
        brandName: 'Motorola smartphones', details: {
            product1: { url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/h/7/edge-40-neo-payj0004in-motorola-original-imagtkezzam4qxfq.jpeg?q=70', title: 'MOTOROLA Edge 40 Neo (Soothing Sea, 256 GB)', price: { mrp: '₹24,999', cost: '₹29,999', discount: '16% off' }, link: `/product1` },
            product2: { url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/q/2/edge-40-neo-payj0001in-motorola-original-imagtkf5ewhafvhh.jpeg?q=70', title: 'MOTOROLA Edge 40 Neo (Soothing Sea, 128 GB)', price: { mrp: '₹22,999', cost: '₹27,999', discount: '17% off' }, link: `/product2` },
            product3: { url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/1/c/-original-imagt5uhcnfy66wa.jpeg?q=70', title: 'MOTOROLA g54 5G (Pearl Blue, 128 GB)', price: { mrp: '₹13,999', cost: '₹17,999', discount: '22% off' }, link: `/product3` },
            product4: { url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/g/b/g54-5g-payw0008in-motorola-original-imagt3md9swqcyr3.jpeg?q=70', title: 'MOTOROLA g54 5G (Pearl Blue, 256 GB)', price: { mrp: '₹15,999', cost: '₹21,999', discount: '27% off' }, link: `/product4` },
            product5: { url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/s/s/edge-40-neo-payj0005in-motorola-original-imagtkehwcgvttfb.jpeg?q=70', title: 'MOTOROLA Edge 40 Neo (Caneel Bay, 256 GB)', price: { mrp: '₹24,999', cost: '₹29,999', discount: '16% off' }, link: `/product5` },
            product6: { url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/a/k/-original-imagqx45wnzbh25s.jpeg?q=70', title: 'MOTOROLA Edge 40 (Viva Magenta, 256 GB)', price: { mrp: '₹26,499', cost: '₹34,999', discount: '24% off' }, link: `/product6` },
        }
    },
]

export const applianceProducts = [
    {
        brandName: 'Televisions', details: {
            product1: { url: 'https://rukminim2.flixcart.com/image/300/300/xif0q/television/f/e/c/43alpha005bl-thomson-original-imagtvpchdhuwbpf.jpeg?q=70', title: `Best 40 43 inch TV's`, tagline: '#JustHere', price: 'From ₹19,999' },
            product2: { url: 'https://rukminim2.flixcart.com/image/300/300/xif0q/television/y/0/0/-original-imagvgcge6n7ewzc.jpeg?q=70', title: 'Sony TVs', tagline: 'No Cost EMI', price: 'Up to 50% Off' },
            product3: { url: 'https://rukminim2.flixcart.com/image/300/300/xif0q/television/z/w/p/-original-imagtve44dmyc4zs.jpeg?q=70', title: 'LG Televisions', tagline: 'No Cost EMI', price: 'Up to 50% Off' },
            product4: { url: 'https://rukminim2.flixcart.com/image/300/300/kbs9k7k0/television/c/j/3/samsung-ua32t4340akxxl-original-imaft25qdysfsq7k.jpeg?q=70', title: 'Samsung Televisions', tagline: 'No Cost EMI', price: 'Up to 50% Off' },
            product5: { url: 'https://rukminim2.flixcart.com/image/300/300/xif0q/television/g/z/b/-original-imagu6usgdau2eqg.jpeg?q=70', title: 'Kodak Televisions', tagline: 'No Cost EMI', price: 'Up to ₹11,000 Off on EXCHANGE' },
            product6: { url: 'https://rukminim2.flixcart.com/image/300/300/xif0q/television/n/l/c/rmv2205-realme-original-imagpa2hbyqqezm2.jpeg?q=70', title: 'Realme TVs', tagline: '#GraborGone', price: 'From ₹9,999' },
            product7: { url: 'https://rukminim2.flixcart.com/image/300/300/kq6yefk0/television/e/e/g/rmv2003-realme-original-imag49agdvvhpejg.jpeg?q=70', title: 'realme 80 cm (32 inch) Full HD LED Smart Android TV', tagline: '#GraborGone', price: 'From ₹13,499' },
        }
    },
    {
        brandName: 'Washing Machine', details: {
            product1: { url: 'https://rukminim2.flixcart.com/image/300/300/xif0q/washing-machine-new/i/r/e/-original-imaguyg3nnhrmbph.jpeg?q=70', title: `Top Load Washing Machines`, tagline: 'Buy Now', price: 'Biggest Price Drop' },
            product2: { url: 'https://rukminim2.flixcart.com/image/300/300/xif0q/washing-machine-new/r/s/4/-original-imagwhdg6ayq8gjf.jpeg?q=70', title: 'Front Load Washing Machines', tagline: 'Buy Now', price: 'Up to ₹7,200 Off On Exchange' },
            product3: { url: 'https://rukminim2.flixcart.com/image/300/300/km2clu80/washing-machine-new/f/a/1/t62cgn-crystal-62-onida-original-imagffsh5zugj2gg.jpeg?q=70', title: 'Fully Automatic Top Loads', tagline: 'Shop Now!', price: 'No Cost EMI' },
            product4: { url: 'https://rukminim2.flixcart.com/image/300/300/xif0q/washing-machine-new/z/l/l/-original-imags7tpwaxawghz.jpeg?q=70', title: 'Fully Automatics', tagline: 'Shop Now!', price: 'No Cost EMI*' },
            product5: { url: 'https://rukminim2.flixcart.com/image/300/300/xif0q/washing-machine-new/u/y/x/-original-imagvc2zvu97vgqs.jpeg?q=70', title: 'Fully Automatic Front Loads', tagline: 'Shop Now!', price: 'No Cost EMI*' },
            product6: { url: 'https://rukminim2.flixcart.com/image/300/300/xif0q/washing-machine-new/b/c/g/-original-imagvrbhcwuwz7j7.jpeg?q=70', title: 'LG Semi Automatics', tagline: 'Shop Now!', price: 'No Cost EMI' },
            product7: { url: 'https://rukminim2.flixcart.com/image/300/300/xif0q/washing-machine-new/f/f/f/-original-imagrfh9gw844uqh.jpeg?q=70', title: 'Semi Automatic Top Loads', tagline: 'Grab Now', price: 'No Cost EMI*' },
        }
    },
]

export const groceryData = [
    { id: 1, url: 'https://rukminim2.flixcart.com/flap/960/960/image/7245c5bc2a7c3dcb.jpg?q=50', link: `/shampoos` },
    { id: 2, url: 'https://rukminim2.flixcart.com/flap/960/960/image/f2f929242d71a365.jpg?q=50', link: `/oralCare` },
    { id: 3, url: 'https://rukminim2.flixcart.com/flap/960/960/image/538bbfa1ed73f14a.jpg?q=50', link: `/babyCare` },
    { id: 4, url: 'https://rukminim2.flixcart.com/flap/960/960/image/14017df9b6f0c7c5.png?q=50', link: `/faceWash` },
    { id: 5, url: 'https://rukminim2.flixcart.com/flap/960/960/image/6b4b795405956a68.jpg?q=50', link: `/personalCare` },
    { id: 6, url: 'https://rukminim2.flixcart.com/flap/960/960/image/f04eacc1076a8789.jpg?q=50', link: `/beautyProducts` },
]

export const beautyProducts = [
    {
        brandName: 'Fragrances', details: {
            product1: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/g/v/6/50-sky-long-lasting-perfume-for-men-eau-de-toilette-the-man-original-imaghe46q3akaegs.jpeg?q=70', title: `THE MAN COMPANY Sky | Long Lasting Perfume for men Eau de Parfum - 50 ml  (For Men & Women)`, tagline: 'For Men and Women', price: { mrp: '₹749', cost: '₹187', discount: '75% off' } },
            product2: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/m/n/f/-original-imagrk7muxyrbb7j.jpeg?q=70', title: 'BEARDO Godfather Perfume for Men, 50 ml | EAU DE PARFUM | Premium, Strong & Long Lasting Fragrance | Aromatic Woody Spicy Eau de Parfum  -  50 ml', tagline: 'For Men', price: { mrp: '₹499', cost: '₹188', discount: '58% off' } },
            product3: { url: 'https://rukminim2.flixcart.com/image/612/612/kdnf98w0pkrrdj/personal-care/2/f/7/200-good-morning-original-collection-park-avenue-original-imafumrrb73j7enq.jpeg?q=70', title: 'PARK AVENUE Good Morning Original Collection_3 Deodorant Spray  -  For Men', tagline: '600 ml, Pack of 3', price: { mrp: '₹675', cost: '₹456', discount: '32% off' } },
            product4: { url: 'https://rukminim2.flixcart.com/image/612/612/l5iid8w0/deodorant/j/b/5/600-privilege-intense-legend-bold-active-4-deodorant-spray-the-original-imagg6hb7qgtgbjy.jpeg?q=70', title: 'THE MAN COMPANY Privilege Intense , Legend, Bold & Acti...', tagline: '600 ml, Pack of 4', price: { mrp: '₹1,196', cost: '₹275', discount: '77% off' } },
            product5: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/o/p/j/-original-imaguaahecua4v5x.jpeg?q=70', title: 'BEARDO Whisky Smoke EDP Perfume for Men 50ml | EAU DE PARFUM | Strong & Long Lasting Eau de Parfum  -  50 ml', tagline: 'For Men', price: { mrp: '₹499', cost: '₹249', discount: '50% off' } },
            product6: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/z/0/p/50-black-perfume-eau-de-toilette-the-man-company-men-original-imagkvac7eaqkbjq.jpeg?q=70', title: 'THE MAN COMPANY Black perfume Eau de Toilette  -  50 ml', tagline: 'For Men', price: { mrp: '₹1,299', cost: '₹597', discount: '54% off' } },
        },
    },
    {
        brandName: 'Hair Care', details: {
            product1: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/hair-oil/n/m/l/-original-imagrfdyzsycxed6.jpeg?q=70', title: `BEARDO Beard and Hair Growth Oil, 50 ml| Beard growth oil for men | Hair growth oil for men | For faster beard growth | For thicker and fuller looking beard | Best Beard Oil for Patchy Beard | Clinically Tested | Non-Sticky Hair Oil`, tagline: '50 ml', price: { mrp: '₹750', cost: '₹435', discount: '42% off' } },
            product2: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/hair-oil/p/q/b/30-godfather-lite-beard-and-moustache-oil-30-ml-non-sticky-light-original-imagm5ywqgduqfhg.jpeg?q=70', title: 'BEARDO Godfather Lite Beard and Moustache Oil, 30 ml | Non-Sticky, Light Beard Oil for Men| Pleasant Fragrance | Ideal for daily use|Nourishes and Strengthens Beard | Provides Shine to Beard | Prevents dry and flaky beard Hair Oil', tagline: '30 ml', price: { mrp: '₹499', cost: '₹188', discount: '58% off' } },
            product3: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shave-oil/4/f/h/50-beard-growth-oil-for-boys-men-hair-oil-with-almond-oil-and-original-imagjnv2ztfcbmpx.jpeg?q=70', title: 'White Leaf Beard Growth Oil For Boys & Men Hair Oil With Almond Oil And Kalonji Oil Shave Oil', tagline: '100 ml', price: { mrp: '₹295', cost: '₹245', discount: '16% off' } },
            product4: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/aftershave-lotion/f/d/r/100-turmeric-sandalwood-after-shave-lotion-bombay-shaving-original-imagsht3ehdvypqa.jpeg?q=70', title: 'BOMBAY SHAVING COMPANY Turmeric & Sandalwood After Shave Lotion', tagline: '100 ml', price: { mrp: '₹1,196', cost: '₹275', discount: '77% off' } },
            product5: { url: 'https://rukminim2.flixcart.com/image/612/612/l432ikw0/aftershave-lotion/t/x/s/-original-imagf2h4subgczfh.jpeg?q=70', title: 'SIRONA Natural Mineral Oil Free Post Wax & Shave Gel for Men & Women with Aloe Vera', tagline: '100 g', price: { mrp: '₹189', cost: '₹249', discount: '24% off' } },
            product6: { url: 'https://rukminim2.flixcart.com/image/612/612/kku1yfk0/aftershave-lotion/e/b/y/200-alum-stone-fitkari-organic-bites-original-imagy3cqv3bqyzhm.jpeg?q=70', title: 'Organic Bites Alum Stone (Fitkari)', tagline: '200 g', price: { mrp: '₹200', cost: '₹145', discount: '27% off' } },
        },
    },
]

export const sportsProducts = [
    {
        brandName: 'Fitness Equipment', details: {
            product1: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/rowing-machine/d/d/2/113-marsh-hrx-original-imagw6wgb5hsqumv.jpeg?q=70', title: `HRX Marsh With Max Weight 120kg & 8 Level Magnetic Resistance For Full Body Workout Rowing Machine`, tagline: 'Foldable', price: { mrp: '₹45,999', cost: '₹25,499', discount: '44% off' } },

            product2: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/exercise-bike/b/2/f/-original-imagszb6h6xhmyaz.jpeg?q=70', title: 'RPM Fitness by Cultsport RPM600 (13.22lbs Flywheel) | Max Weight: 110kg, Diet Plan & Trainer Led Sessions Spinner Exercise Bike', tagline: 'Black', price: { mrp: '₹40,599', cost: '₹14,389', discount: '64% off' } },

            product3: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/fitness-grip/v/o/x/adjustable-hand-grip-strengthener-hand-gripper-finger-grip-hand-original-imags6g9hkar36em.jpeg?q=70', title: 'PROWL by Tiger Shroff Adjustable Strengthener |Finger|Exerciser Hand Grip/Fitness Grip', tagline: 'Grey', price: { mrp: '₹999', cost: '₹179', discount: '82% off' } },

            product4: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/support/q/p/y/left-to-right-ultimate-weightlifting-s-28-na-prowl-32-original-imagg9yxfdhpnkfa.jpeg?q=70', title: 'PROWL Ultimate weightlifting Back / Lumbar Support', tagline: 'Black/Grey', price: { mrp: '₹1,700', cost: '₹700', discount: '58% off' } },

            product5: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sport-mat/v/r/w/for-wellness-non-slip-super-soft-for-men-and-women-with-cover-6-original-imagv8h3wgezyezx.jpeg?q=70', title: 'YFMATS For Wellness Non Slip Super Soft for men and women with cover Green 6 mm Yoga Mat', tagline: 'For Men and Women', price: { mrp: '₹999', cost: '₹249', discount: '75% off' } },

            product6: { url: 'https://rukminim2.flixcart.com/image/612/612/ka73y4w0/kit/d/k/g/pvc-50-kg-home-gym-set-with-one-3-ft-curl-one-5-ft-plain-rod-and-original-imafrtuynqwqgugr.jpeg?q=70', title: 'KRX PVC 50 Kg Home Gym Set with 3 Ft Curl & 5 Ft plain Rod & 1 Pair Dumbbell Rods Home Gym Kit', tagline: 'Black', price: { mrp: '₹9,999', cost: '₹2,199', discount: '78% off' } },
        },
    },
    {
        brandName: 'Sports Equipment', details: {
            product1: { url: 'https://rukminim2.flixcart.com/image/612/612/l3vxbbk0/kit/b/2/h/dominator-senior-plastic-cricket-bat-with-soft-cricket-ball-na-4-original-imagewskwrppxtpu.jpeg?q=70', title: `Jaspo Dominator Senior Plastic Cricket Bat with Soft Cricket Ball Cricket Kit`, tagline: '850-880 g', price: { mrp: '₹1,199', cost: '₹531', discount: '55% off' } },

            product2: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/a/r/7/-original-imagtjhffkevqfvm.jpeg?q=70', title: 'Lifelong Chaze by Milind Soman SGX 20 CZBC2794 27.5T with Dual Disc 21 Speed 27.5 T Mountain/Hardtail Cycle', tagline: '21 Gear, Black', price: { mrp: '₹17,999', cost: '₹11,999', discount: '58% off' } },

            product3: { url: 'https://rukminim2.flixcart.com/image/612/612/jggv53k0/ball/w/y/e/80-5-light-3-na-cricket-tennis-ball-headly-original-imaf4p5bxgnz2skg.jpeg?q=70', title: 'Headly Light Cricket Tennis Ball', tagline: 'Pack of 3, Yellow', price: { mrp: '₹270', cost: '₹199', discount: '26% off' } },

            product4: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/racquet/8/5/7/g1-4-inches-strung-pb-3000-combo-with-full-cover-pb-3000-combo-original-imagupwhgbex5tpb.jpeg?q=70', title: 'Jager-Smith PB 3000 Combo with Full Cover Black Strung Badminton Racquet', tagline: 'Pack of: 2, 98 g', price: { mrp: '₹1,190', cost: '₹499', discount: '58% off' } },

            product5: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/skate/s/0/h/6-9-sport-sketing-1-1-pair-in-line-glowenterprise-original-imaghbuvv9gcgjge.jpeg?q=70', title: 'GLOWENTERPRISE sport sketing In-line Skates - Size 6-9 UK', tagline: 'Black', price: { mrp: '₹2,999', cost: '₹935', discount: '68% off' } },

            product6: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/ball/6/8/d/300-storm-football-size-5-5-20-1-1-football-nivia-original-imaggurhz3jukjd3.jpeg?q=70', title: 'NIVIA Storm Football - Size: 5', tagline: 'Pack of 1, White', price: { mrp: '₹726', cost: '₹399', discount: '45% off' } },
        },
    },
]

export const booksData = [
    {
        brandName: `Publisher's Corner`, details: {
            product1: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/book/i/g/1/-original-imagqtdtfpebmzjj.jpeg?q=70', title: `Indian Polity - for Civil Services and Other State Examinations  - Indian Polity`, tagline: 'up to 50% off', byLine: 'by McGraw Hill' },
            product2: { url: 'https://rukminim2.flixcart.com/image/612/612/kjd6nww0-0/book/x/c/o/marketing-management-15e-with-free-indian-cases-book-original-imafyxhqvhyps8fy.jpeg?q=70', title: `Marketing Management 15e (with INDIAN CASES book)`, tagline: 'up to 50% off', byLine: 'by Pearson Books' },
            product3: { url: 'https://rukminim2.flixcart.com/image/612/612/jpfsnm80/regionalbooks/g/y/6/meg14-contemporary-indian-literature-in-english-translation-original-imafbzdeypqsrn6b.jpeg?q=70', title: `MEG14 Contemporary Indian Literature In English Translation | English Medium | Neeraj Publications Guide With Question Bank`, tagline: 'up to 60% off', byLine: 'By Neeraj Publication' },
            product4: { url: 'https://rukminim2.flixcart.com/image/612/612/k9re3rk0/book/2/5/3/xamidea-social-science-class-9-2020-21-original-imafrhh9kxppzbex.jpeg?q=70', title: `Xam Idea Social Science Class 9 Cbse Examination 2020-2021 First Edition`, tagline: 'up to 50% off', byLine: 'by VK Global Publishers' },
            product5: { url: 'https://rukminim2.flixcart.com/image/612/612/kpinwy80/book/y/7/w/cracking-the-coding-interview-189-programming-questions-and-original-imag3qh8hpmzuwza.jpeg?q=70', title: `Cracking the Coding Interview`, tagline: 'up to 60% off', byLine: 'By Career Cup Publications' },
            product6: { url: 'https://rukminim2.flixcart.com/image/612/612/kctf0cw0/book/5/3/9/review-of-microbiology-immunology-original-imaftuhqazqqnm76.jpeg?q=70', title: `Review of Microbiology & Immunology Ninth Edition`, tagline: 'up to 50% off', byLine: 'by Jaypee Publications' },
        },
    },
    {
        brandName: `Miss & Chief`, details: {
            product1: { url: 'https://rukminim2.flixcart.com/image/312/312/kqidx8w0/book/w/h/y/word-search-knowledge-power-original-imag4hvmrbt7qxzk.jpeg?q=70', title: `Word Search  - By Miss & Chief`, tagline: '33% off', byLine: 'by Miss & Chief' },
            product2: { url: 'https://rukminim2.flixcart.com/image/312/312/kqidx8w0/book/b/k/k/my-first-100-box-set-original-imag4gazbn6tuq6g.jpeg?q=70', title: `My First 100 Box Set  - By Miss & Chief`, tagline: '31% off', byLine: 'by Miss & Chief' },
            product3: { url: 'https://rukminim2.flixcart.com/image/312/312/kqidx8w0/book/z/m/x/my-first-all-in-one-original-imag4hvdfybfufk2.jpeg?q=70', title: `My First All in One  - By Miss & Chief`, tagline: '4% off', byLine: 'by Miss & Chief' },
            product4: { url: 'https://rukminim2.flixcart.com/image/312/312/kqidx8w0/book/9/u/j/the-tempest-original-imag4gyfwmdfwv7h.jpeg?q=70', title: `The Tempest  - By Miss & Chief`, tagline: '4% off', byLine: 'by Miss & Chief' },
            product5: { url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/book/z/f/4/-original-imaggcb5g4ahtqqp.jpeg?q=70', title: `Doodle Coloring for Girls  - Pink Edition First Edition`, tagline: '31% off', byLine: 'by Miss & Chief' },
            product6: { url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/book/i/u/y/-original-imagqtdtkxsyuh26.jpeg?q=70', title: `My First Library: Boxset of 10 Board Books for Kids By Miss & Chief`, tagline: '39% off', byLine: 'by Miss & Chief' },
        },
    },

]

export const furnitureData = [
    {
        brandName: `Livingroom Furniture`, details: {
            product1: { url: 'https://rukminim2.flixcart.com/image/300/300/jmz7csw0/recliner/f/7/7/brown-pvc-24002-woodness-original-imaf9rzvrrav8phf.jpeg?q=70', title: `Recliners`, price: 'From ₹11,899', byLine: 'Fabric & Leatherette' },
            product2: { url: 'https://rukminim2.flixcart.com/image/300/300/jql8fbk0/book-shelf/z/7/h/particle-board-fibscheckersbs5twt-home-by-nilkamal-walnut-original-imafckhkkcn5qk7y.jpeg?q=70', title: `Book Shelf`, price: 'From ₹11,899', byLine: 'The Attic, @home & more' },
            product3: { url: 'https://rukminim2.flixcart.com/image/150/150/jevpj0w0/inflatable-sofa/p/d/g/pvc-sorange01-wds-original-imaex8j6trqmfkpt.jpeg?q=70', title: `Inflatable Sofas`, price: 'From ₹1,029', byLine: 'Furn Central, WDS & more' },
            product4: { url: 'https://rukminim2.flixcart.com/image/150/150/js6e1e80/ottoman-pouffe/7/5/m/na-cotton-120131-welhous-original-imafdskne9yc4nzg.jpeg?q=70', title: `Ottoman And Pouffes`, price: 'From ₹499', byLine: 'Top Collection' },
            product5: { url: 'https://rukminim2.flixcart.com/image/150/150/jgy0fbk0/side-table/h/9/v/mango-wood-r1811-bedside-table-the-jaipur-living-honey-brown-original-imaf52jf82qk5mhz.jpeg?q=70', title: `Side Tables`, price: 'From ₹4,900', byLine: 'Induscraft, TimberTaste & more' },
            product6: { url: 'https://rukminim2.flixcart.com/image/150/150/j5jx1u80/office-study-table/w/8/p/particle-board-winner-study-table-spacewood-natural-wenge-original-imaew7tvjbzhmphg.jpeg?q=70', title: `Office & Study Tables`, price: 'Upto 70% Off', byLine: 'Modern & Durable' },
        },
    },
    {
        brandName: `Bedroom Furniture`, details: {
            product1: { url: 'https://rukminim2.flixcart.com/image/150/150/j7td5e80/bed-mattress/y/m/c/6-60-72-ecosoft-ecosoft-6-size-72x60-thickness-6-pocket-spring-original-imaexyg6uga4mdgn.jpeg?q=70', title: `King Mattresses`, price: 'From ₹5,399', byLine: 'Springwel, Eurodreams & more' },
            product2: { url: 'https://rukminim2.flixcart.com/image/150/150/jqv8ia80/portable-laptop-table/u/6/c/rubber-wood-foldable-wooden-laptop-desk-for-bed-walnut-black-original-imafcp5geksbptjg.jpeg?q=70', title: `Portable Laptop Table`, price: 'From ₹299', byLine: 'Wooden, Metal & more' },
            product3: { url: 'https://rukminim2.flixcart.com/image/150/150/j6nxdow0/dressing-table/5/k/h/particle-board-kosmo-dresser-liwa-in-rigato-walnut-spacewood-original-imaewszzkghuftue.jpeg?q=70', title: `Dressing Tables`, price: 'From ₹5,899', byLine: 'Free Standing & Wall Hanging' },
            product4: { url: 'https://rukminim2.flixcart.com/image/150/150/jzd0qkw0/bed/y/g/m/king-light-grey-particle-board-zc211-okra-dark-walnut-original-imafjcy8zpbhz6cz.jpeg?q=70', title: `King Beds`, price: 'From ₹7,590', byLine: 'Okra,Royal Oak & more ' },
            product5: { url: 'https://rukminim2.flixcart.com/image/150/150/j7f2qvk0/tv-entertainment-unit/7/f/y/particle-board-etvlwwen0052p-perfect-homes-by-flipkart-wenge-original-imaexjepxxuh9dvg.jpeg?q=70', title: `TV Entertainment Unit`, price: 'From ₹1,449', byLine: 'Bluewud, Home Full & more' },
            product6: { url: 'https://rukminim2.flixcart.com/image/150/150/jlb6v0w0/home-temple/n/b/g/pooja-mandir-marusthalee-original-imaf8gk4jzfdhv22.jpeg?q=70', title: `Home Temple`, price: 'From ₹550', byLine: 'With door, Without Door & more' },
        },
    },
]

export const decorData = [
    {
        brandName: `Stickers & Wallpapers`, details: {
            product1: { url: 'https://rukminim2.flixcart.com/image/612/612/kekadu80/sticker/z/z/k/wall-decals-pink-tree-with-birds-and-nest-wall-stickers-pvc-original-imafv826gpzauzjr.jpeg?q=70', title: `Decal O Decal 1 cm Wall Decals ' Pink Tree With Birds C...`, price: { mrp: '₹899', cost: '₹110', discount: '87% off' }, byLine: 'Pack of 1' },
            product2: { url: 'https://rukminim2.flixcart.com/image/612/612/k47cgi80pkrrdj/sticker/w/f/d/large-lord-ganesha-with-lotus-wall-stickers-pvc-vinyl-original-imafn6yxg5wr8ux9.jpeg?q=70', title: `Decal O Decal 75 cm Lord Ganesha with Lotus Wall Sticke...`, price: { mrp: '₹799', cost: '₹59', discount: '92% off' }, byLine: 'Pack of 1' },
            product3: { url: 'https://rukminim2.flixcart.com/image/612/612/jw84ya80/sticker/r/e/w/large-wall-decals-buddha-mind-quotes-wall-stickers-pvc-vinyl-original-imafgyygqwbjkpdg.jpeg?q=70', title: `Flipkart SmartBuy 49 cm Wall Decals ' Buddha - Mind Quo...`, price: { mrp: '₹749', cost: '₹49', discount: '93% off' }, byLine: 'Pack of 1' },
            product4: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/wallpaper/m/q/a/77-70-2-pinkbrick-ansari-decor-original-imagrezywwzdgp6n.jpeg?q=70', title: `Ansari Decor Drama Pink Wallpaper`, price: { mrp: '₹1,199', cost: '₹469', discount: '60% off' }, byLine: '70 cm x 77 cm, Pack of 2' },
            product5: { url: 'https://rukminim2.flixcart.com/image/612/612/kbgu1e80/sticker/m/y/s/medium-adiyogi-745-66-adiyogi-745-god-god-s-original-imafst8fyatzk9wm.jpeg?q=70', title: `god & god's 66 cm Adiyogi- 745 Self Adhesive Sticker`, price: { mrp: '₹449', cost: '₹99', discount: '77% off' }, byLine: 'Pack of 1' },
            product6: { url: 'https://rukminim2.flixcart.com/image/612/612/k12go7k0/sticker/w/y/e/wall-stickers-wallpaper-happy-winter-trees-and-frames-home-diy-original-imafknv4vc3xf4wm.jpeg?q=70', title: `Flipkart SmartBuy Abstract Multicolor Wallpaper`, price: { mrp: '₹999', cost: '₹229', discount: '77% off' }, byLine: '500 cm x 45 cm' },
        },
    },
    {
        brandName: `Clocks`, details: {
            product1: { url: 'https://rukminim2.flixcart.com/image/612/612/kjabs7k0-0/wall-clock/a/g/e/handpainted-peacock-wall-clock-wc-331-analog-divinecrafts-original-imafyvmxgyhdyefg.jpeg?q=70', title: `DivineCrafts Analog 32.5 cm X 32.5 cm Wall Clock`, price: { mrp: '₹2,999', cost: '₹365', discount: '87% off' }, byLine: 'Multicolor, With Glass, Standard' },
            product2: { url: 'https://rukminim2.flixcart.com/image/612/612/kqo3onk0/wall-clock/g/k/u/fancy-and-designer-wall-clock-for-home-offices-bedroom-living-original-imag4hyvahrggekr.jpeg?q=70', title: `R&P ENTERPRISE Analog 65 cm X 35 cm Wall Clock`, price: { mrp: '₹2,616', cost: '₹279', discount: '89% off' }, byLine: 'Black, Red, Without Glass, Standard' },
            product3: { url: 'https://rukminim2.flixcart.com/image/612/612/kdbzqfk0/wall-clock/u/j/s/3d-acrylic-wall-clock-tree-bird-coffee-cup-on-jhula-design-for-original-imafu9nvnm2qrfqx.jpeg?q=70', title: `Mysticoal Analog 30 cm X 30 cm Wall Clock`, price: { mrp: '₹1,599', cost: '₹277', discount: '82% off' }, byLine: 'Black, Without Glass, Standard' },
            product4: { url: 'https://rukminim2.flixcart.com/image/612/612/kzsqykw0/wall-clock/o/c/4/lord-ganesha-shape-vintage-wall-clock-bbc4380-analog-big-bang-original-imagbq5qyn4kgaqf.jpeg?q=70', title: `BIG BANG CREATIONS Analog 33 cm X 23 cm Wall Clock`, price: { mrp: '₹999', cost: '₹254', discount: '74% off' }, byLine: 'Top Collection' },
            product5: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/wall-clock/7/i/z/latest-home-decor-analog-wall-clock-acrylic-wall-clock-with-original-imagt2jghr6kgwa7.jpeg?q=70', title: `HorSHead Analog 36 cm X 38 cm Wall Clock`, price: { mrp: '₹3,999', cost: '₹795', discount: '77% off' }, byLine: 'Red, With Glass, Standard' },
            product6: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/wall-clock/5/3/p/big-size-latest-home-decor-analog-wall-clock-acrylic-wall-clock-original-imagspcvweq5khsu.jpeg?q=70', title: `Attractionz Analog 40 cm X 34 cm Wall Clock`, price: { mrp: '₹3,599', cost: '₹590', discount: '83% off' }, byLine: 'White, With Glass, Standard' },
        },
    },
]

export const toolsData = [
    {
        brandName: `Tools And Measuring Equipment`, details: {
            product1: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/soldering-iron/2/0/n/4-4in1-basic-25w-soldering-iron-kit-with-5-meter-soldering-wire-original-imagpjyzkt86vj6k.jpeg?q=70', title: `Hillgrove 4in1 Basic 25W Soldering Iron Kit with 5 Mete...`, price: { mrp: '₹299', cost: '₹246', discount: '17% off' }, byLine: 'Flat Tip' },
            product2: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/glue-gun/3/t/j/20-7-electric-20w-black-mini-hot-glue-gun-with-10-pcs-hot-melt-original-imagpjygpgzdjaae.jpeg?q=70', title: `Hillgrove Electric 20W Black Mini Hot Glue Gun With 10 ...`, price: { mrp: '₹699', cost: '₹244', discount: '65% off' }, byLine: '7 mm' },
            product3: { url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/nailer/t/i/h/130-pneumatic-pinner-pro-6435-64-series-gold-with-red-headless-original-imagrxh4fanr4zq5.jpeg?q=70', title: `KAYMO Pneumatic Pinner PRO-6435 64 Series Gold with Red...`, price: { mrp: '₹13,000', cost: '₹10,899', discount: '16% off' }, byLine: '64 Series gauge' },
            product4: { url: 'https://rukminim2.flixcart.com/image/612/612/l2urv680/soldering-iron/i/q/0/10-advance-3rd-kit-combo-pack-of-10-fadman-original-image3whcjrewr69.jpeg?q=70', title: `FADMAN Advance 3rd Kit Combo Pack of 10 25 W Simple`, price: { mrp: '₹589', cost: '₹268', discount: '54% off' }, byLine: 'Flat Tip' },
            product5: { url: 'https://rukminim2.flixcart.com/image/612/612/kh0vonk0/socket-set/z/b/g/46pcs-socket-set-size-1-4-inch-tool-ratchet-torque-wrench-combo-original-imafx4uhgbhzzeza.jpeg?q=70', title: `MECHBORN Hand Tool Kit`, price: { mrp: '₹1,699', cost: '₹483', discount: '71% off' }, byLine: '46 Tools' },
            product6: { url: 'https://rukminim2.flixcart.com/image/612/612/kr0ynbk0/multimeter/v/s/d/th-m98-digital-multimeter-themisto-original-imag4wg7drafhgcw.jpeg?q=70', title: `tHemiStO TH-M98 Digital Multimeter`, price: { mrp: '₹1,499', cost: '₹759', discount: '77% off' }, byLine: 'Black 2000 Counts' },
        },
    },
]
// export const bannerData = [
//     { id: 1, url: 'https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50' },
//     { id: 2, url: 'https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50' },
//     { id: 3, url: 'https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50' },
//     { id: 4, url: 'https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50' }
// ]