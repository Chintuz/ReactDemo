import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import FastImage from 'react-native-fast-image'
import StyleSheetFactory from "./styles.ProfileList";
import { downloadFile, deleteImages } from "../../utils/localCache";
import store from '../../redux/store'
import CustomImage from "../common/CustomImage";
import DefaultImage from '../../assets/index'
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
                <CustomImage
                    source={{ uri: item.img }}
                    defaultSource={DefaultImage}
                    style={styles.imageContainer}
                    networkAvailable={true}
                />
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
            </View>
        )
    }

}

export default ProfileItem;
