import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import getTemp from '../api/getTemp';
import { connect } from 'react-redux'
import * as actionCreator from '../redux/actionCreator';
class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cityName: ''
    }
  }
  getWheatherMessage() {
    const { error, isLoading, cityName, temp } = this.props;
    if (isLoading) return '...Loading';
    if (error) return 'Vui long thu lai abc';
    if (!cityName) return 'Nhap ten thanh pho cua ban...';
    return `${cityName} hien tai la ${temp}oC`;


  }
  getTempByCity() {
    const { cityName } = this.state;
    // this.props.startFetchData();
    // getTemp(cityName)
    //   .then(temp => this.props.fetchSuccess(cityName, temp))
    //   .catch(() => this.props.fetchError());
    this.props.fetchDataThunk(cityName);
  }

  render() {
    return (
      <View style={styles.contain}>
        <Text style={styles.message}>{this.getWheatherMessage()} </Text>
        <TextInput
          style={styles.textIp}
          value={this.state.cityName}
          onChangeText={text => this.setState({ cityName: text })}
        />
        <TouchableOpacity style={styles.button} onPress={this.getTempByCity.bind(this)}>
          <Text>Lấy nhiệt độ</Text>
        </TouchableOpacity>
      </View>
    )
  }
};
const styles = StyleSheet.create({
  contain: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  message: {
    color: 'white',
    fontSize: 25,
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    margin: 10,
  },
  textIp: {
    margin: 10,
    backgroundColor: 'white',
    height: 40,
    width: 100,
  }
});
function mapStatetoProps(state) {
  return {
    cityName: state.cityName,
    temp: state.temp,
    error: state.error,
    isLoading: state.isLoading
  }
}
export default connect(mapStatetoProps, actionCreator)(Main)