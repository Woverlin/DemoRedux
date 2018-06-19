import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { showAll, showMemorized, showNeedPractice } from '../redux/reducer/actionCreator';
class Filter extends Component {
    getTextStyle(statusName) {
        const { myFilterStatus } = this.props;
        if (statusName === myFilterStatus) return { color: 'yellow', fontWeight: 'bold' }
        return styles.buttonText;
    }
    setFilterStatus(actionType) {
        this.props.dispatch({ type: actionType });
    }
    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={() => this.props.showAll()}>
                    <Text style={this.getTextStyle('SHOW_ALL')}>SHOW ALL </Text>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => this.props.showMemorized()}>
                    <Text style={this.getTextStyle('MEMORIZED')}>MEMORIZED </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.showNeedPractice()}>
                    <Text style={this.getTextStyle('NEED_PRACTICE')}>NEED PRACTICE </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7b7b80',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white'
    }
})

function mapStatetoProps(state) {
    return { myFilterStatus: state.filterStatus }
}
export default connect(mapStatetoProps, {
    showAll, showMemorized, showNeedPractice
})(Filter);
