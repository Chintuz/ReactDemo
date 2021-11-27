import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import FastImage from 'react-native-fast-image'
import StyleSheetFactory from "./styles.ProfileList";


/**
 * This is a ProfileList list component
 * It will render list of option chain data
 */
class ProfileItem extends PureComponent {

    /**
     * render function for profile list item 
     */
    render() {
        const { item } = this.props;
        const styles = StyleSheetFactory.getStyles();

        return (
            <View style={styles.listItemContainer}>
                <FastImage
                    source={{
                        uri: item.img,
                        priority: FastImage.priority.normal,
                    }}
                    style={styles.imageContainer}

                />
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
            </View>
        )
    }

}

export default ProfileItem;
