import AsyncStorage from "@react-native-community/async-storage";

export const getCacheData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value) {
            return JSON.parse(value);
        } else {
            return null;
        }
    } catch (e) {
        return null;
    }
};

export const setCacheData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.log("error in saving data")
    }
};
