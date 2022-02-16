import React, { Component } from 'react';
import { Alert, TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Login from './Login'

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            useremail: '',
            firstname: '',
            lastname: '',
            password: '',
        };
    }

    onLogin() {
        const { firstname, lastname , password, useremail } = this.state;

        Alert.alert('Credentials', `${firstname + lastname} + ${password} + ${useremail}` );
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Create new</Text>
                <Text style={styles.text1}>Account</Text>
                <Text style={styles.text2}>Already Registered? Log in here</Text>
                <TextInput
                    value={this.state.firstname}
                    onChangeText={(firstname) => this.setState({ firstname })}
                    placeholder={'firstname'}
                    placeholderTextColor='yellow'
                    style={styles.input}
                />
                <TextInput
                    value={this.state.lastname}
                    onChangeText={(lastname) => this.setState({ lastname })}
                    placeholder={'lastname'}
                    placeholderTextColor='yellow'
                    style={styles.input}
                />
                <TextInput
                    value={this.state.email}
                    onChangeText={(useremail) => this.setState({ useremail })}
                    placeholder={'Email'}
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
                    style={{ backgroundColor: 'yellow', width: '96%', height: 50, marginTop: 0, borderRadius: 2 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center', marginTop: '2%' }}>sing up</Text>
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
        fontSize: 40,
        color: 'yellow',
        fontWeight: 'bold',
        marginTop: '20%',
        marginBottom: -12
    },
    text1: {
        fontSize: 40,
        color: 'yellow',
        fontWeight: 'bold',
        marginBottom: 15,
    },

    text2: {
        fontSize: 15,
        color: 'yellow',
        marginBottom: 50,
    },
});