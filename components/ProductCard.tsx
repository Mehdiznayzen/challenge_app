import { Link } from 'expo-router';
import { Image, Text, View } from 'react-native'

interface ProductProps {
    product: {
        id: string,
        title: string;
        description: string;
        thumbnail: string;
        price: number;
    }
}

const ProductCard = ({ product }: ProductProps) => {
    return (
        <Link href={`/product/${product.id}`}>
            <View className="p-4 w-80 border-dashed border-[2px] border-[#dfd7fe] rounded-lg">
                <Image
                    source={{ uri: product.thumbnail }}
                    className="w-full h-36 object-contain rounded-lg mb-4"
                />
                
                <Text className="text-xl font-semibold text-gray-800 mb-2">
                    {product.title}
                </Text>
                
                <Text className="text-sm text-muted-foreground mb-2">
                    {product.description}
                </Text>
                
                <View className="flex-row justify-end items-end">
                    <Text className="text-lg font-bold text-[#453a6f] text-end">
                        ${product.price.toFixed(2)}
                    </Text>
                </View>
            </View>
        </Link>
    )
}

export default ProductCard