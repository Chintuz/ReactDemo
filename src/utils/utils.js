import Toast from 'react-native-simple-toast';
import { Alert } from 'react-native';
import { profileLables } from './lables';

export const isProfileDataDiff = (arrayOne, arrayTwo) => {
    if (!arrayOne || (arrayOne && !arrayOne[0])) return true
    if (!arrayTwo || (arrayTwo && !arrayTwo[0])) return true

    let filteredData = arrayOne.filter(({ img: id1 }) => !arrayTwo.some(({ img: id2 }) => id2 === id1))
    return filteredData
}

export const showError = (message, isToast, press) => {
    if (isToast) {
        Toast.show(message)
    } else {
        Alert.alert(
            message,
            profileLables.retry,
            [
                { text: profileLables.ok, onPress: press },
            ],
            { cancelable: false }
        )
    }
}