import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { toggleIsAdding } from '../redux/reducer/actionCreator';
class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text></Text>
                <Text> My Word</Text>
                <TouchableOpacity onPress={() => this.props.toggleIsAdding()}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        )
    };
};
const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20
    }
})
// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// };

export default connect(null, { toggleIsAdding })(Header)



