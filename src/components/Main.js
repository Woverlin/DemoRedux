import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import Word from './Word'
import Filter from './Filter'
import Header from './Header'
import Form from './Form'
class Main extends Component {
    getWorList() {
        const { myWords, myFilter } = this.props;
        if (myFilter === 'NEED_PRACTICE') return myWords.filter(e => !e.memorized);
        if (myFilter === 'MEMORIZED') return myWords.filter(e => e.memorized);
        return myWords;
    }
    render() {
        return (
            <View style={{ backgroundColor: 'yellow', flex: 1, alignSelf: 'stretch', justifyContent: 'center' }}>
                <Header />

                <View style={{ flex: 10 }}>
                    {this.props.myisAdding ? <Form /> : null}
                    <FlatList
                        data={this.getWorList()}
                        renderItem={({ item }) => <Word myWord={item} />}
                        keyExtractor={item => item.id}
                    />
                </View>
                <Filter />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
})
function mapStatetoProps(state) {
    return {
        myFilter: state.filterStatus,
        myWords: state.arrWord,
        myisAdding: state.isAdding
    };
}
export default connect(mapStatetoProps)(Main);