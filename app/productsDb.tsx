interface Iproducts {
    _id: string;
    product_name: string;
    description: string;
    price: number;
    currency: string;
    imageUrl: string;
}

const products: Iproducts[] = [
    {
        _id: "1",
        product_name: "collagen bliss",
        description: "antioxidant suplement powder",
        price: 25.00,
        currency: "$",
        imageUrl: "/products/pote1.png"
    },
    {
        _id: "2",
        product_name: "green mix",
        description: "Super Green Powder",
        price: 25.00,
        currency: "$",
        imageUrl: "/products/pote-2.png"
    },
    {
        _id: "3",
        product_name: "box collagen bliss",
        description: "collagen bliss box 45 packs",
        price: 65.00,
        currency: "$",
        imageUrl: "/products/carton-1.png"
    },
    {
        _id: "4",
        product_name: "green mix box",
        description: "green mix box 45 packs",
        price: 65.00,
        currency: "$",
        imageUrl: "/products/carton-2.png"
    },
    {
        _id: "5",
        product_name: "collagen bliss 1kg",
        description: "collagen bliss 90 servings",
        price: 45.00,
        currency: "$",
        imageUrl: "/products/tarro-1.png"
    },
    {
        _id: "6",
        product_name: "green mix 1kg",
        description: "green mix 90 servings",
        price: 45.00,
        currency: "$",
        imageUrl: "/products/tarro-2.png"
    },
    {
        _id: "7",
        product_name: "collagen bliss",
        description: "antioxidant suplement powder",
        price: 25.00,
        currency: "$",
        imageUrl: "/products/pote1.png"
    },
    {
        _id: "8",
        product_name: "green mix",
        description: "Super Green Powder",
        price: 25.00,
        currency: "$",
        imageUrl: "/products/pote-2.png"
    },
    {
        _id: "9",
        product_name: "box collagen bliss",
        description: "collagen bliss box 45 packs",
        price: 65.00,
        currency: "$",
        imageUrl: "/products/carton-1.png"
    },
    {
        _id: "10",
        product_name: "green mix box",
        description: "green mix box 45 packs",
        price: 65.00,
        currency: "$",
        imageUrl: "/products/carton-2.png"
    },
    {
        _id: "11",
        product_name: "collagen bliss 1kg",
        description: "collagen bliss 90 servings",
        price: 45.00,
        currency: "$",
        imageUrl: "/products/tarro-1.png"
    },
    {
        _id: "12",
        product_name: "green mix 1kg",
        description: "green mix 90 servings",
        price: 45.00,
        currency: "$",
        imageUrl: "/products/tarro-2.png"
    },
]

export default products;