import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput, Text } from 'react-native';
import { connect } from 'react-redux';
import { toggleIsAdding, addWord } from '../redux/reducer/actionCreator'
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            en: '',
            vn: ''
        };
    }
    onAdd() {
        const { en, vn } = this.state;
        this.props.addWord(en, vn);
        this.props.toggleIsAdding();
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    value={this.state.en}
                    onChangeText={text => this.setState({ en: text })}
                    placeholder="English word"
                />
                <TextInput
                    style={styles.textInput}
                    value={this.state.vn}
                    onChangeText={text => this.setState({ vn: text })}
                    placeholder="Meaning"
                />
                <TouchableOpacity onPress={this.onAdd.bind(this)}>
                    <Text> Add </Text>
                </TouchableOpacity>
            </View>
        )
    };
};
const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        height: 50,
        width: 300,
        backgroundColor: 'red',
        paddingHorizontal: 10,
        margin: 10,

    }
});
// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// };

export default connect(null, { addWord, toggleIsAdding })(Form)
