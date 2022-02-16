import React, { Component } from 'react';
import { Alert, TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Login</Text>
        <Text style={styles.text1}>Sign in to continue</Text>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          placeholderTextColor='yellow'
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          placeholderTextColor='yellow'
          secureTextEntry={true}
          style={styles.input}
        />

        <TouchableOpacity
          onPress={this.onLogin.bind(this)}
          style={{ backgroundColor: 'yellow', width: '96%', height: 50, marginTop: 20, borderRadius: 2}}>
          <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>log in</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'black',
  },

  input: {
    width: '97%',
    height: 70,
    padding: 15,
    borderWidth: 1,
    fontSize: 20,
    color: 'yellow',
    borderColor: 'yellow',
    marginBottom: 20,
    borderRadius: 5,
  },
  text: {
    fontSize: 50,
    color: 'yellow',
    fontWeight: 'bold',
    marginTop: '20%',
    marginBottom: 10
  },

  text1: {
    fontSize: 15,
    color: 'yellow',
    marginBottom: 50,
  },
});