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
                style={[
                    styles.loader,
                    { transform: [{ rotate }] },
                ]}
            />
            <Text style={styles.text}>Loading...</Text>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    loader: {
        width: 40,
        height: 40,
        borderRadius: 40,
        borderWidth: 4,
        borderColor: '#8d71ff',
        borderTopColor: 'transparent',
        position: 'relative',
    },
    text: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#8d71ff',
    },
};

export default Loader;
