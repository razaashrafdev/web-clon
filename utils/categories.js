export const categories = [ 
    { 
        id: 1, 
        name: "Men's Fashion", 
        slug: "mens-fashion", 
        description: "Premium clothing and accessories for men", 
        subcategories: ["Shirts", "T-Shirts", "Pants", "Jackets", "Accessories"], 
        items: 245, 
        count: "120 items", 
        link: "/mens-fashion", 
        color: "#4299e1",
        data: [
            { id: 1, name: 'Casual Shirt', category: 'Shirts', price: 25.99, originalPrice: 35.99, rating: 4.2, imageColor: '#e0f7fa', imgurl: 'https://media.istockphoto.com/id/1397016572/photo/confident-man-with-hands-in-pockets.webp?a=1&b=1&s=612x612&w=0&k=20&c=u6tPnDDvukjbrCzQ6cVT90239MGjr4u__ZKxzmU30SQ=' },
            { id: 2, name: 'Graphic T-Shirt', category: 'T-Shirts', price: 19.99, originalPrice: 24.99, rating: 4.5, imageColor: '#fff3e0', imgurl: 'https://images.unsplash.com/photo-1758214873619-32d1674ffd3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEdyYXBoaWMlMjBULVNoaXJ0fGVufDB8fDB8fHww' },
        ]
    },
    { 
        id: 2, 
        name: "Women's Wear", 
        slug: "womens-wear", 
        description: "Trendy fashion for women",
        subcategories: ["Dresses", "Tops", "Bottoms", "Outerwear", "Accessories"], 
        items: 389, 
        count: "245 items", 
        link: "/womens-wear", 
        color: "#ed64a6",
        data: [
            { id: 1, name: 'Summer Hat', category: 'Accessories', price: 19.99, originalPrice: 29.99, rating: 4.5, imageColor: '#ffcc80', imgurl: 'https://images.unsplash.com/photo-1561625386-8688df36dd3f?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3VtbWVyJTIwSGF0fGVufDB8fDB8fHww' },
            { id: 2, name: 'Leather Bag', category: 'Bags', price: 129.99, originalPrice: 159.99, rating: 4.8, imageColor: '#c8e6c9', imgurl: 'https://images.unsplash.com/photo-1732963574895-f4b6af2dec06?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGF0aGVyJTIwYmFnfGVufDB8fDB8fHww' },
            { id: 3, name: 'Silk Scarf', category: 'Accessories', price: 39.99, originalPrice: 49.99, rating: 4.4, imageColor: '#ffebee', imgurl: 'https://plus.unsplash.com/premium_photo-1674747086849-3ec94d641ded?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNpbGslMjBza2FsZnxlbnwwfHwwfHx8MA%3D%3D' }
        ]
    },
    { 
        id: 3, 
        name: "Accessories", 
        slug: "accessories", 
        count: "89 items", 
        color: "#38b2ac",
        data: [] // You can add relevant items if available
    },
    { 
        id: 4, 
        name: "Footwear", 
        slug: "footwear", 
        count: "156 items", 
        color: "#ed8936",
        data: [] // Add relevant items if available
    },
    { 
        id: 5, 
        name: "Electronics", 
        slug: "electronics", 
        description: "Latest gadgets and devices", 
        subcategories: ["Headphones", "Wearables", "Chargers", "Speakers", "Cases"], 
        items: 156, 
        count: "78 items", 
        link: "/electronics", 
        color: "#9f7aea",
        data: [
            { id: 1, name: 'Wireless Headphones', category: 'Headphones', price: 79.99, originalPrice: 99.99, rating: 4.8, imageColor: '#e0f2f1', imgurl: 'https://plus.unsplash.com/premium_photo-1710962439403-a35fbc684b15?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8V2lyZWxlc3MlMjBIZWFkcGhvbmVzfGVufDB8fDB8fHww' },
            { id: 2, name: 'Watch', category: 'Wearables', price: 199.99, originalPrice: 229.99, rating: 4.5, imageColor: '#f0f4c3', imgurl: 'https://images.unsplash.com/photo-1565450115751-5f2e5de23d7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtYXJ0dCUyMHdhdGNofGVufDB8fDB8fHww' },
        ]
    },
    { 
        id: 6, 
        name: "Beauty & Health", 
        slug: "beauty-and-health", 
        description: "Skincare and wellness products", 
        subcategories: ["Skincare", "Makeup", "Haircare", "Fragrances", "Wellness"], 
        items: 134, 
        count: "92 items", 
        link: "/beauty-health", 
        color: "#f56565",
        data: [
            { id: 1, name: 'Anti-Aging Cream', category: 'Skincare', price: 29.99, originalPrice: 39.99, rating: 4.6, imageColor: '#f3e5f5', imgurl: 'https://images.unsplash.com/photo-1763503836825-97f5450d155a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW50aS1BZ2luZyUyMENyZWFmfGVufDB8fDB8fHww' },
            { id: 2, name: 'Matte Lipstick', category: 'Makeup', price: 19.99, originalPrice: 24.99, rating: 4.2, imageColor: '#fce4ec', imgurl: 'https://plus.unsplash.com/premium_photo-1677172236687-dd440c298cb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWF0dGUlMjBMaXBzdGlja3xlbnwwfHwwfHx8MA%3D%3D' },
        ]
    },
    { 
        id: 7, 
        name: "Home & Living", 
        slug: "home-and-living", 
        description: "Home decor and essentials", 
        items: 178, 
        subcategories: ["Decor", "Kitchen", "Bedding", "Furniture", "Lighting"], 
        link: "/home-living", 
        color: "#ed64a6",
        data: [
            { id: 1, name: 'Comfortable Sofa', category: 'Furniture', price: 399.99, originalPrice: 499.99, rating: 4.3, imageColor: '#ffe0b2', imgurl: 'https://images.unsplash.com/photo-1759722667832-48e555120458?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q29tZm9ydGFibGUlMjBTb2ZhfGVufDB8fDB8fHww' },
            { id: 2, name: 'Table Lamp', category: 'Lighting', price: 49.99, originalPrice: 69.99, rating: 4.0, imageColor: '#fbe9e7', imgurl: 'https://images.unsplash.com/photo-1570974802254-4b0ad1a755f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFibGUlMjBsYW1wfGVufDB8fDB8fHww' },
        ]
    },
    { 
        id: 8, 
        name: "Sports & Outdoors", 
        slug: "sports-and-outdoors", 
        description: "Gear for active lifestyle", 
        items: 92, 
        subcategories: ["Fitness", "Camping", "Cycling", "Swimming", "Team Sports"], 
        link: "/sports-outdoors", 
        color: "#48bb78",
        data: [
            { id: 1, name: 'Yoga Mat', category: 'Fitness', price: 19.99, originalPrice: 29.99, rating: 4.4, imageColor: '#c8e6c9', imgurl: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D' },
            { id: 2, name: 'Mountain Bicycle', category: 'Cycling', price: 349.99, originalPrice: 399.99, rating: 4.8, imageColor: '#e8f5e9', imgurl: 'https://images.unsplash.com/photo-1605008585058-fdb3fb5fc5f1?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE1vdW50YWluJTIwQmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D' },
        ]
    }
];
