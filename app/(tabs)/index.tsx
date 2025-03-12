import useProducts from "@/hooks/useFetchProducts";
import { FlatList, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import { useGlobalContext } from "@/lib/global-provider";
import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";

const HomePage = () => {
    const { error, loading, products } = useProducts()
    const { isAllProducts } = useGlobalContext()

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
            <LinearGradient
                colors={['#3b82f6', '#60a5fa', '#93c5fd']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                    height: 100,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Text className="text-white text-2xl">
                    {getSalutation()},{" "}
                    <Text className="font-bold">My Friend 🤩👋</Text>
                </Text>
            </LinearGradient>
            
            {/* Fetch all products */}
            {
                isAllProducts ? (
                    <View className="p-4">
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
                ) : (
                    <Text>no all products</Text>
                )
            }
        </View>
    );
};

export default HomePage;