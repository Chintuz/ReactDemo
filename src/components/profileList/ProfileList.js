import React, { Component } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";


/**
 * This is a ProfileList list component
 * It will render list of option chain data
 */
class ProfileList extends Component {

    render() {
        return (
            <>
                <Text>Hi</Text>
            </>
        )
    }

}

/**
 * It should take a first argument called state, optionally a second argument called ownProps,
 * and return a plain object containing the data that the connected component needs.
 */
const mapStateToProps = (state) => ({
});

/**
 * Providing a mapDispatchToProps allows you to specify which actions your component might need to dispatch.
 */
const mapDispatchToProps = (dispatch) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProfileList);
