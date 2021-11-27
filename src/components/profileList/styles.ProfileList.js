import { StyleSheet } from 'react-native';
import { normalize } from '../../utils/normalize';

/**
 * Define stylesheet for ManageWatchlist
 */
export default class StyleSheetFactory {
    /**
     * @param {Object} props - props is an object which contains colorcodes
     */
    static getStyles() {
        return StyleSheet.create({
            listItemContainer: {
                margin: normalize(10),
                backgroundColor: "#00000060",
                borderRadius: normalize(6)
            },
            imageContainer: {
                height: normalize(150),
                borderTopLeftRadius: normalize(6),
                borderTopRightRadius: normalize(6)
            },
            nameContainer: { height: normalize(30) },
            name: {
                color: "white",
                padding: normalize(8)
            },
            listContainer: { flex: 1, justifyContent: "center" },
            loadingText: {
                alignSelf: "center",
                color: "black",
                fontSize: normalize(16)
            }
        })
    }
}