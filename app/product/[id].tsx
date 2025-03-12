import Loader from '@/components/Loader';
import useFetchProductsByCategory from '@/hooks/useProductsById';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { ArrowLeft } from '@/constants/icons';

const ProductPage = () => {
    const navigation = useNavigation();
    const { id } = useLocalSearchParams();
    const { error, loading, product } = useFetchProductsByCategory(id);

    if (loading) {
        return <Loader />;
    }

    return (
        <View className="flex-1 bg-white p-6">
            {
                loading ? (
                    <Loader />
                ) : error ? (
                    <Text className="text-red-500 text-center">Error: {error}</Text>
                ) : (
                    <View className="p-6 rounded-lg flex flex-col gap-[10px]">
                        <TouchableOpacity onPress={() => navigation.goBack()} className="mb-4">
                            <Image 
                                source={ArrowLeft}
                                className="h-6 w-6 object-cover rounded-lg"
                            />
                        </TouchableOpacity>

                        <View className="relative">
                            <Image
                                source={{ uri: product?.thumbnail }}
                                className="w-full h-56 object-cover rounded-lg"
                            />
                            <View className="absolute top-4 right-4 bg-[#f4f4f9] bg-opacity-60 p-2 rounded-lg">
                                <Text className="text-[#000] font-semibold text-lg">${product?.price}</Text>
                            </View>
                        </View>

                        <Text className="text-center text-[28px] font-bold text-[#333]">{product?.title}</Text>
                        <Text className="text-center text-[14px] text-gray-500 mb-4">{product?.description}</Text>

                        <View className="p-4 bg-[#f4f4f9] rounded-lg shadow-md">
                            <Text className="text-[#333] font-semibold text-[16px]">Details:</Text>
                            <Text className="text-[14px] text-[#555]">Category: {product?.category}</Text>
                            <Text className="text-[14px] text-[#555]">Brand: {product?.brand}</Text>
                            <Text className="text-[14px] text-[#555]">Discount: {product?.discountPercentage}%</Text>
                            <Text className="text-[14px] text-[#555]">Stock: {product?.stock}</Text>
                            <Text className="text-[14px] text-[#555]">Rating: {product?.rating}</Text>
                            <Text className="text-[14px] text-[#555]">Availability Status: {product?.availabilityStatus}</Text>
                            <Text className="text-[14px] text-[#555]">Warranty: {product?.warrantyInformation}</Text>
                            <Text className="text-[14px] text-[#555]">Shipping: {product?.shippingInformation}</Text>
                            <Text className="text-[14px] text-[#555]">Return Policy: {product?.returnPolicy}</Text>
                        </View>

                        <View className="p-4 mt-6 bg-[#f4f4f9] rounded-lg shadow-md">
                            <Text className="text-[#333] font-semibold text-[16px]">Other Information:</Text>
                            <Text className="text-[14px] text-[#555]">SKU: {product?.sku}</Text>
                            <Text className="text-[14px] text-[#555]">Weight: {product?.weight}kg</Text>
                        </View>
                    </View>
                )
            }
        </View>
    );
};

export default ProductPage;