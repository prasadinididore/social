import React, { Component } from 'react';
import { Alert, TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Resetpassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
        };
    }

    onLogin() {
        const { username } = this.state;

        Alert.alert('Credentials', `${username}`);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>   Forgot Password</Text>
                <Text style={styles.text1}>New Password</Text>
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder={'Username'}
                    placeholderTextColor='yellow'
                    style={styles.input}
                />

                <TouchableOpacity
                    onPress={this.onLogin.bind(this)}
                    style={{ backgroundColor: 'yellow', width: '96%', height: 50, marginTop: 20, borderRadius: 2 }}>
                    <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Send</Text>
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
        alignItems: 'center',
        marginBottom: 10,
        marginTop: '20%'
    },

    text1: {
        fontSize: 15,
        color: 'yellow',
        marginBottom: 50,
    },
});