import { useState, useEffect } from 'react';

type Product = {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
    description: string;
    category: string;
    brand: string;
    discountPercentage: number;
    stock: number;
    rating: number;
    availabilityStatus: string;
    warrantyInformation: string;
    shippingInformation: string;
    returnPolicy: string;
    sku: string;
    weight: number;
};


const useFetchProductsByCategory = (id: string | string[]) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (id) {
            setLoading(true);
            setError(null);

            fetch(`https://dummyjson.com/products/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    setProduct(data);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error.message);
                    setLoading(false);
                });
        }
    }, [id]);

    return { 
        loading, 
        error, 
        product
    };
};

export default useFetchProductsByCategory;
