import AsyncStorage from "@react-native-community/async-storage";

/**
 * This method is to get data for given key
 * @param {string} key - key to get from local storage
 */
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

/**
 * This method is to set data for given key
 * @param {string} key - key to set from local storage
 * @param {object} value - value to be stored
 */
export const setCacheData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.log("error in saving data")
    }
};
