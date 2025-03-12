import useProducts from "@/hooks/useFetchProducts";
import { FlatList, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";

const HomePage = () => {
    const { error, loading, products } = useProducts()

    const getSalutation = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning";
        if (hour < 18) return "Good Afternoon";
        return "Good Evening";
    };

    return (
        <View
            className="flex-1"
        >
            <View
                className="flex flex-row p-4 items-center justify-center h-[63px]"
            >
                <Text className="text-[25px] text-black">
                    {getSalutation()},{" "}
                    <Text className="font-bold">Friend👋🤩</Text>
                </Text>
            </View>
            
            <View className="p-4 mt-[20px]">
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
                            renderItem={({ item }) => <ProductCard product={item} />}
                            keyExtractor={(item) => item.id.toString()}
                            contentContainerStyle={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingBottom: 20,
                            }}
                        />
                    )
                }
            </View>
        </View>
    );
};

export default HomePage;