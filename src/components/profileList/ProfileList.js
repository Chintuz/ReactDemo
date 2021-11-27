import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, FlatList, View } from "react-native";
import { ProfileItem } from '.'
import { getProfileList } from "../../redux/profileList/profileList.Action";
import { isProfileDataDiff, showToast } from "../../utils/utils";
import { normalize } from "../../utils/normalize";
import StyleSheetFactory from "./styles.ProfileList";
import { profileLables } from "../../utils/lables";

/**
 * This is a ProfileList list component
 * It will render list of option chain data
 */
class ProfileList extends Component {

    shouldComponentUpdate(nextProps, nextState) {

        const { errorMessage: errorMessageOld, profileList: profileListOld } = this.props;
        const { errorMessage: errorMessageNew, profileList: profileListNew } = nextProps;

        if (errorMessageOld != errorMessageNew
            || isProfileDataDiff(profileListOld, profileListNew)) {
            return true
        }

        return false
    }

    componentDidMount() {
        this.fetchProfileData()
    }

    fetchProfileData = () => {
        const { getProfileList } = this.props
        getProfileList()
    }

    /**
   * This is a key extractor for flat list
   * @param {object} item
   * @param {Number} index
   */
    keyStockExtractor = (item, index) => index.toString();

    renderItem = ({ item, index }) => (
        <ProfileItem
            item={item}
            index={index}
        />
    )

    render() {
        const { errorMessage, profileList } = this.props;
        const styles = StyleSheetFactory.getStyles();

        return (
            <View style={styles.listContainer}>
                {
                    profileList && profileList[0] ?
                        <FlatList
                            data={profileList}
                            extraData={profileList}
                            keyExtractor={this.keyStockExtractor}
                            renderItem={this.renderItem}
                        />
                        :
                        <Text style={styles.loadingText}>{profileLables.loadingText}</Text>
                }
                {
                    errorMessage ? showToast(errorMessage) : null
                }
            </View>
        )
    }

}

/**
 * It should take a first argument called state, optionally a second argument called ownProps,
 * and return a plain object containing the data that the connected component needs.
 */
const mapStateToProps = (state) => ({
    profileList: state.profile.listData,
    errorMessage: state.profile.errorMessage,
});

/**
 * Providing a mapDispatchToProps allows you to specify which actions your component might need to dispatch.
 */
const mapDispatchToProps = (dispatch) => ({
    getProfileList: () => dispatch(getProfileList())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProfileList);
