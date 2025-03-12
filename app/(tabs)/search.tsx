import { Button, Text, TextInput, View, FlatList } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import ProductCard from "@/components/ProductCard";
import Loader from "@/components/Loader";

const SearchPage = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        setLoading(true)
        try {
            const response = await fetch(`https://dummyjson.com/products/search?q=${searchValue.toLowerCase()}`);
            if (!response.ok) throw new Error("Failed to fetch products");
            
            const data = await response.json();
            setProducts(data.products);
        } catch (error: any) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    };

    const getSalutation = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning";
        if (hour < 18) return "Good Afternoon";
        return "Good Evening";
    };

    return (
        <View className="flex-1">
            {/* Search Input */}
            <View className="flex-row items-center bg-gray-200 mx-4 mt-6 p-3 rounded-lg">
                <MagnifyingGlassIcon size={24} color="#555" />
                <TextInput
                    className="flex-1 ml-2 text-gray-700"
                    placeholder="Search by product name"
                    keyboardType="ascii-capable"
                    value={searchValue}
                    onChangeText={setSearchValue}
                />
                <Button title="Search" onPress={handleSearch} />
            </View>
            
            <View className="flex items-center justify-center mt-[10px]">
                {
                    loading ? (
                        <View className="w-[100%] flex items-center justify-center">
                            <Loader />
                        </View>
                    ) : error ? (
                        <Text>Error: {error}</Text>
                    ) : (
                        <FlatList
                            data={products}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => <ProductCard product={item} />}
                            ListEmptyComponent={!loading && searchValue ? (
                                <Text className="text-center text-gray-500 mt-4">No products found.</Text>
                            ) : null}
                        />
                    )
                }
            </View>
        </View>
    );
};

export default SearchPage;