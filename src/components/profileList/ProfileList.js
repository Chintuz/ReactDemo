import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, FlatList, View } from "react-native";
import { ProfileItem } from '.'
import { getProfileList } from "../../redux/profileList/profileList.Action";
import { isProfileDataDiff, showError } from "../../utils/utils";
import StyleSheetFactory from "./styles.ProfileList";
import { profileLables } from "../../utils/lables";
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

/**
 * This is a ProfileList list component
 * It will render list of option chain data
 */
class ProfileList extends Component {

    /**
     * This method manage rerendering of component
     * @param {object} nextProps - show upcoming props 
     * @param {object} nextState - show current nextProps
     */
    shouldComponentUpdate(nextProps, nextState) {

        const { errorMessage: errorMessageOld, profileList: profileListOld } = this.props;
        const { errorMessage: errorMessageNew, profileList: profileListNew } = nextProps;

        if (errorMessageOld != errorMessageNew
            || isProfileDataDiff(profileListOld, profileListNew)) {
            return true
        }

        return false
    }

    /**
     * This is a lifecycle method invoked once
     * component is mounted
     */
    componentDidMount() {
        check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
            .then((result) => {
                switch (result) {
                    case RESULTS.UNAVAILABLE:
                        console.log('This feature is not available (on this device / in this context)');
                        break;
                    case RESULTS.DENIED:
                        console.log('The permission has not been requested / is denied but requestable');
                        this.checkPermissionAndProceed()
                        break;
                    case RESULTS.LIMITED:
                        console.log('The permission is limited: some actions are possible');
                        this.fetchProfileData()
                        break;
                    case RESULTS.GRANTED:
                        console.log('The permission is granted');
                        this.fetchProfileData()
                        break;
                    case RESULTS.BLOCKED:
                        console.log('The permission is denied and not requestable anymore');
                        this.checkPermissionAndProceed()
                        break;
                }
            })
            .catch((error) => {
                // ???
            });

    }

    checkPermissionAndProceed = () => {

        request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then((result) => {
            switch (result) {
                case RESULTS.UNAVAILABLE:
                    console.log('This feature is not available (on this device / in this context)');
                    break;
                case RESULTS.DENIED:
                    console.log('The permission has not been requested / is denied but requestable');
                    showError('The permission has not been requested / is denied but requestable', false, this.checkPermissionAndProceed)

                    break;
                case RESULTS.LIMITED:
                    console.log('The permission is limited: some actions are possible');
                    this.fetchProfileData()
                    break;
                case RESULTS.GRANTED:
                    console.log('The permission is granted');
                    this.fetchProfileData()
                    break;
                case RESULTS.BLOCKED:
                    console.log('The permission is denied and not requestable anymore');
                    showError('The permission is denied and not requestable anymore', false, this.checkPermissionAndProceed)

                    break;
            }
            // ???
        });
    }

    /**
     * This is a method to fetch profile data
     */
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

    /**
     * This is a method to render the item of list
     */
    renderItem = ({ item, index }) => (
        <ProfileItem
            item={item}
            index={index}
            storagePermissionGranted={true}
        />
    )

    /**
     * This is a render method of the component 
     */
    render() {
        const { errorMessage, profileList } = this.props;
        const styles = StyleSheetFactory.getStyles();

        return (
            <View style={styles.listContainer}>
                {
                    profileList && profileList[0] ?
                        <FlatList
                            data={profileList}
                            extraData={profileList.length}
                            keyExtractor={this.keyStockExtractor}
                            renderItem={this.renderItem}
                            windowSize={4}
                        />
                        :
                        <Text style={styles.loadingText}>{profileLables.loading}</Text>
                }
                {
                    errorMessage ? showError(errorMessage,
                        (profileList && profileList[0]),
                        this.fetchProfileData) : null
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
