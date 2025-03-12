import { Text, TouchableOpacity } from 'react-native'

interface Category {
    name : string
}

const CategoryCard = ({ item }: { item: Category}) => {
    return (
        <TouchableOpacity
            style={{
                marginRight: 16,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 20,
                borderWidth: 2,
                borderColor: '#dfd7fe',
                borderStyle: 'dashed',
            }}
            onPress={() => console.log(item.name)}
            onPressIn={() => {}}
        >
            <Text className="text-[#8d71ff] text-lg">{item.name}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard