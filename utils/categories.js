import men from '../public/man.png';
import women from '../public/woman.png';
import foot from '../public/boot.png';
import electronics from '../public/watch.png';
import beauty from '../public/makeup-pouch.png';
import home from '../public/house.png';
import sport from '../public/sports.png';
import accessories from '../public/accessories.png';

export const categories = [
    {
        id: "mens-fashion",
        name: "Men's",
        description: "Premium clothing for mens",
        link: "/category/mens-fashion",
        icon: men,
        data: [
            {
                id: 1,
                name: 'Casual Shirt',
                category: 'Men',
                price: 25.99,
                originalPrice: 35.99,
                rating: 4.2,
                imageColor: '#e0f7fa',
                arrivalType: "Just launched",
                imgurl: 'https://plus.unsplash.com/premium_photo-1678218594563-9fe0d16c6838?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnR8ZW58MHx8MHx8fDA%3D'
            },
            {
                id: 2,
                name: 'Graphic T-Shirt',
                category: 'Men',
                price: 19.99,
                originalPrice: 24.99,
                rating: 4.5,
                imageColor: '#fff3e0',
                imgurl: 'https://images.unsplash.com/photo-1758214873619-32d1674ffd3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
            },
            {
                id: 3,
                name: "Classic White Watch",
                category: "Men",
                price: 29.99,
                originalPrice: 49.99,
                rating: 4.5,
                imageColor: "#e2e8f0",
                arrivalType: "Sale",
                imgurl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
            },
            {
                id: 4,
                name: "Smart Watch",
                category: "Men",
                price: 149.99,
                originalPrice: 199.99,
                rating: 4.2,
                imageColor: "#e2e8f0",
                imgurl: 'https://images.unsplash.com/photo-1549482199-bc1ca6f58502?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
            },
            {
                id: 5,
                name: "Premium Cotton T-Shirt",
                category: "Men",
                price: 24.99,
                originalPrice: 34.99,
                rating: 4.5,
                stock: "available",
                imgurl: 'https://plus.unsplash.com/premium_photo-1756085509463-59d0110430ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVuJTIwUHJlbWl1bSUyMENvdHRvbiUyMFQtU2hpcnR8ZW58MHx8MHx8fDA%3D'
            },
            {
                id: 6,
                name: "Casual Shirt",
                category: "Men",
                price: 44.99,
                originalPrice: 69.99,
                rating: 4.2,
                stock: "available",
                arrivalType: "Sale",
                imgurl: 'https://images.unsplash.com/photo-1651592440650-2c1dfddf3573?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWVuJTIwQ2FzdWFsJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D'
            },
            {
                id: 7,
                name: "Organic Cotton Hoodie",
                category: "Men",
                price: 64.99,
                originalPrice: 89.99,
                rating: 4.5,
                arrivalType: "This Week",
                imgurl: "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVuJTIwT3JnYW5pYyUyMENvdHRvbiUyMEhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D"
            }
        ]
    },
    {
        id: "womens-wear",
        name: "Women's",
        description: "Trendy fashion for women",
        link: "/category/womens-wear",
        icon: women,
        data: [
            {
                id: 1,
                name: 'Summer Hat',
                category: 'Women',
                price: 19.99,
                originalPrice: 39.99,
                rating: 4.5,
                imageColor: '#ffcc80',
                arrivalType: "Sale",
                imgurl: 'https://images.unsplash.com/photo-1561625386-8688df36dd3f?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3VtbWVyJTIwSGF0fGVufDB8fDB8fHww'
            },
            {
                id: 2,
                name: 'Leather Bag',
                category: 'Women',
                price: 129.99,
                originalPrice: 169.99,
                rating: 4.8,
                imageColor: '#c8e6c9',
                arrivalType: "Sale",
                imgurl: 'https://images.unsplash.com/photo-1732963574895-f4b6af2dec06?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGF0aGVyJTIwYmFnfGVufDB8fDB8fHww'
            },
            {
                id: 3,
                name: 'Silk Scarf',
                category: 'Women',
                price: 39.99,
                originalPrice: 49.99,
                rating: 4.4,
                imageColor: '#ffebee',
                imgurl: 'https://plus.unsplash.com/premium_photo-1674747086849-3ec94d641ded?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNpbGslMjBza2FsZnxlbnwwfHwwfHx8MA%3D%3D'
            },
            {
                id: 4,
                name: "Summer Dress",
                category: "Women",
                price: 59.99,
                originalPrice: 79.99,
                rating: 4.7,
                stock: "available",
                imgurl: 'https://images.unsplash.com/photo-1609695813802-3c443be34359?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D'
            },
        ]
    },
    {
        id: "footwear",
        name: "Footwear",
        description: "Shoes for every occasion",
        link: "/category/footwear",
        icon: foot,
        data: [
            {
                id: 1,
                name: "Running Sneakers",
                category: "Footwear",
                price: 89.99,
                originalPrice: 119.99,
                rating: 4.3,
                imageColor: "#c6f6d5",
                imgurl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
            },
            {
                id: 2,
                name: "Formal Leather Shoes",
                category: "Footwear",
                price: 119.99,
                originalPrice: 149.99,
                rating: 4.6,
                imageColor: "#d7ccc8",
                imgurl: 'https://plus.unsplash.com/premium_photo-1726862590258-be23cc00b55e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Rm9ybWFsJTIwTGVhdGhlciUyMFNob2VzfGVufDB8fDB8fHww'
            },
            {
                id: 3,
                name: "Running Shoes",
                category: "Footwear",
                price: 89.99,
                originalPrice: 119.99,
                rating: 4.3,
                stock: "available",
                arrivalType: "Sale",
                imgurl: 'https://images.unsplash.com/photo-1739132268718-53d64165d29a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Rm9vdHdlYXIlMjBSdW5uaW5nJTIwU2hvZXN8ZW58MHx8MHx8fDA%3D'
            },
            {
                id: 4,
                name: "Limited Edition Sneakers",
                category: "Footwear",
                price: 149.99,
                rating: 4.8,
                arrivalType: "This Week",
                imgurl: "https://images.unsplash.com/photo-1588207415599-de82d6e5ae0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fExpbWl0ZWQlMjBFZGl0aW9uJTIwU25lYWtlcnN8ZW58MHx8MHx8fDA%3D"
            }
        ]
    },
    {
        id: "electronics",
        name: "Electronics",
        description: "Latest gadgets and devices",
        link: "/category/electronics",
        icon: electronics,
        data: [
            {
                id: 1,
                name: 'Wireless Headphones',
                category: "Electronics",
                price: 79.99,
                originalPrice: 99.99,
                rating: 4.8,
                imageColor: '#e0f2f1',
                imgurl: 'https://plus.unsplash.com/premium_photo-1710962439403-a35fbc684b15?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8V2lyZWxlc3MlMjBIZWFkcGhvbmVzfGVufDB8fDB8fHww'
            },
            {
                id: 2,
                name: 'Simple Watch',
                category: "Electronics",
                price: 149.99,
                originalPrice: 239.99,
                rating: 4.5,
                imageColor: '#f0f4c3',
                arrivalType: "Sale",
                imgurl: 'https://images.unsplash.com/photo-1565450115751-5f2e5de23d7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
            },
            {
                id: 3,
                name: "Black Headphone",
                category: "Electronics",
                price: 59.99,
                originalPrice: 79.99,
                rating: 4.8,
                imageColor: "#fed7d7",
                imgurl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
            },
            {
                id: 4,
                name: "Wireless Earbuds",
                category: "Electronics",
                price: 79.99,
                originalPrice: 109.99,
                rating: 4.6,
                stock: "available",
                arrivalType: "Sale",
                imgurl: 'https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RWxlY3Ryb25pY3MlMjBXaXJlbGVzcyUyMEVhcmJ1ZHN8ZW58MHx8MHx8fDA%3D'
            },
            {
                id: 5,
                name: "Smart Watch Series 5",
                category: "Electronics",
                price: 299.99,
                originalPrice: 359.99,
                rating: 4.9,
                arrivalType: "This Week",
                arrivalType: "Sale",
                imgurl: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U21hcnQlMjBXYXRjaCUyMFNlcmllcyUyMDV8ZW58MHx8MHx8fDA%3D"
            },
            {
                id: 6,
                name: "Wireless Gaming Mouse",
                category: "Electronics",
                price: 79.99,
                originalPrice: 109.99,
                rating: 4.7,
                arrivalType: "Just Launched",
                imgurl: "https://images.unsplash.com/photo-1755373255602-c030aac3bc69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RWxlY3Ryb25pY3MlMjBXaXJlbGVzcyUyMEdhbWluZyUyME1vdXNlfGVufDB8fDB8fHww"
            }
        ]
    },
    {
        id: "beauty-health",
        name: "Beauty",
        description: "Skincare and wellness products",
        link: "/category/beauty-health",
        icon: beauty,
        data: [
            {
                id: 1,
                name: 'Anti-Aging Cream',
                category: "Beauty",
                price: 29.99,
                originalPrice: 39.99,
                rating: 4.6,
                imageColor: '#f3e5f5',
                imgurl: 'https://images.unsplash.com/photo-1763503836825-97f5450d155a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW50aS1BZ2luZyUyMENyZWFmfGVufDB8fDB8fHww'
            },
            {
                id: 2, name: 'Matte Lipstick',
                category: "Beauty",
                price: 19.99,
                originalPrice: 24.99,
                rating: 4.2,
                imageColor: '#fce4ec',
                imgurl: 'https://plus.unsplash.com/premium_photo-1677172236687-dd440c298cb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWF0dGUlMjBMaXBzdGlja3xlbnwwfHwwfHx8MA%3D%3D'
            },
            {
                id: 3,
                name: "Skincare Set",
                category: "Beauty",
                price: 69.99,
                originalPrice: 89.99,
                rating: 4.9,
                stock: "available",
                imgurl: 'https://plus.unsplash.com/premium_photo-1726750973468-0d273fc6d6dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmVhdXR5JTIwU2tpbmNhcmUlMjBTZXR8ZW58MHx8MHx8fDA%3D'
            },

        ]
    },
    {
        id: "home-living",
        name: "Homes",
        description: "Home decor and essentials",
        link: "/category/home-living",
        icon: home,
        data: [
            {
                id: 1,
                name: 'Comfortable Sofa',
                category: 'Home',
                price: 519.99,
                originalPrice: 649.99,
                rating: 4.3,
                imageColor: '#ffe0b2',
                arrivalType: "Sale",
                imgurl: 'https://images.unsplash.com/photo-1759722667832-48e555120458?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q29tZm9ydGFibGUlMjBTb2ZhfGVufDB8fDB8fHww'
            },
            {
                id: 2,
                name: 'Table Lamp',
                category: 'Home',
                price: 49.99,
                originalPrice: 89.99,
                rating: 4.0,
                imageColor: '#fbe9e7',
                arrivalType: "Sale",
                imgurl: 'https://images.unsplash.com/photo-1570974802254-4b0ad1a755f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFibGUlMjBsYW1wfGVufDB8fDB8fHww'
            },
            {
                id: 3,
                name: "Portable Blender",
                category: "Home",
                price: 39.99,
                originalPrice: 59.99,
                rating: 4.3,
                arrivalType: "Just Launched",
                imgurl: "https://plus.unsplash.com/premium_photo-1719060015414-c66eb449b9be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UG9ydGFibGUlMjBCbGVuZGVyfGVufDB8fDB8fHww"
            }
        ]
    },
    {
        id: "sports-outdoors",
        name: "Sports",
        description: "Gear for active lifestyle",
        link: "/category/sports-outdoors",
        icon: sport,
        data: [
            {
                id: 1,
                name: 'Yoga Mat',
                category: 'Sports',
                price: 19.99,
                originalPrice: 49.99,
                rating: 4.4,
                imageColor: '#c8e6c9',
                arrivalType: "Sale",
                imgurl: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D'
            },
            {
                id: 2,
                name: 'Mountain Bicycle',
                category: 'Sports',
                price: 449.99,
                originalPrice: 599.99,
                rating: 4.8,
                imageColor: '#e8f5e9',
                imgurl: 'https://images.unsplash.com/photo-1605008585058-fdb3fb5fc5f1?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE1vdW50YWluJTIwQmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D'
            },
            {
                id: 3,
                name: "Football",
                category: "Sports",
                price: 64.99,
                originalPrice: 99.99,
                rating: 4.4,
                arrivalType: "Just Launched",
                imgurl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbHxlbnwwfHwwfHx8MA%3D%3D"
            }
        ]
    },
    {
        id: "accessories",
        name: "Accessories",
        description: "Everything to complete your look",
        link: "/category/accessories",
        icon: accessories,
        data: [
            {
                id: 1,
                name: "Water Bottle",
                category: "Accessories",
                price: 129.99,
                originalPrice: 159.99,
                rating: 4.7,
                imageColor: "#e9d8fd",
                imgurl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
            },
            {
                id: 2,
                name: "Sunglasses",
                category: "Accessories",
                price: 199.99,
                originalPrice: 149.99,
                rating: 4.6,
                imageColor: "#bee3f8",
                arrivalType: "Sale",
                imgurl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
            },
            {
                id: 3,
                name: "Perfume",
                category: "Accessories",
                price: 45.99,
                originalPrice: 59.99,
                rating: 4.4,
                imageColor: "#fed7e2",
                imgurl: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
            },
            {
                id: 4,
                name: "School Bag",
                category: "Accessories",
                price: 199.99,
                originalPrice: 299.99,
                rating: 4.9,
                imageColor: "#fed7d7",
                arrivalType: "Sale",
                imgurl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
            },
            {
                id: 5,
                name: "Designer Handbag",
                category: "Accessories",
                price: 129.99,
                originalPrice: 179.99,
                rating: 4.8,
                arrivalType: "Just Launched",
                imgurl: 'https://images.unsplash.com/photo-1758879219613-1e161ce3b369?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QWNjZXNzb3JpZXMlMjBEZXNpZ25lciUyMEhhbmRiYWd8ZW58MHx8MHx8fDA%3D'
            },
            {
                id: 6,
                name: "Leather Wallet",
                category: "Accessories",
                price: 34.99,
                originalPrice: 49.99,
                rating: 4.4,
                arrivalType: "This Week",
                imgurl: 'https://images.unsplash.com/photo-1570549667552-8a73ebf96469?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEFjY2Vzc29yaWVzJTIwTGVhdGhlciUyMFdhbGxldHxlbnwwfHwwfHx8MA%3D%3D'
            },
            {
                id: 7,
                name: "Designer Sunglasses",
                category: "Accessories",
                price: 129.99,
                originalPrice: 179.99,
                rating: 4.6,
                arrivalType: "Just Launched",
                imgurl: "https://images.unsplash.com/photo-1760446032732-c042b0d43580?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QWNjZXNzb3JpZXMlMjBEZXNpZ25lciUyMFN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D"
            },
            {
                id: 8,
                name: "Leather Backpack",
                category: "Accessories",
                price: 159.99,
                originalPrice: 219.99,
                rating: 4.9,
                arrivalType: "Just Launched",
                imgurl: "https://images.unsplash.com/photo-1732613839533-ac54fcee9d9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWNjZXNzb3JpZXMlMjBMZWF0aGVyJTIwQmFja3BhY2t8ZW58MHx8MHx8fDA%3D"
            }
        ]
    },
];