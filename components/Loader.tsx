import { Animated, Easing, View, Text } from 'react-native';


const Loader = () => {
    const rotateValue = new Animated.Value(0);

    Animated.loop(
        Animated.timing(rotateValue, {
            toValue: 1,
            duration: 1500,
            easing: Easing.linear,
            useNativeDriver: true,
        })
    ).start();

    const rotate = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View className={`flex flex-col gap-[3px] items-center justify-center h-[100%]`}>
            <Animated.View
                className="w-10 h-10 rounded-full border-4 border-violet-500 border-t-transparent"
                style={{ transform: [{ rotate }] }}
            />
            <Text className="text-xs font-bold text-violet-500 mt-2">Loading...</Text>
        </View>
    );
};

export default Loader;
