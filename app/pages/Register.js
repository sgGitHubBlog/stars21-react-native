import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Alert,
    Text,
    View,
    TextInput,
    AsyncStorage
} from 'react-native';
import Button from '../components/Button'
import NavigationUtil from '../utils/NavigationUtil';

export default class Register extends Component {

    static navigationOptions = {
        title: '注册'
    }

    constructor(props) {
        super(props);
        this.state = { 
            username: null,
            password: null
        };
    }

    login = () => {
        NavigationUtil.reset(this.props.navigation, 'Main')
        // fetch('http://localhost:8080/public/user/login', {
        //     method: 'POST',
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       username: this.state.username,
        //       password: this.state.password,
        //     })
        // })
        // .then((response) => response.json())
        // .then((responseJson) => {
        //     if (responseJson.resultCode === 0) {
        //         AsyncStorage.setItem('token', responseJson.data, () => {});
        //         NavigationUtil.reset(this.props.navigation, 'Main')
        //     } 
        // })
        // .catch((error) => {
        //     NavigationUtil.reset(this.props.navigation, 'Main')
        // //   console.error(error);
        // });
    }

    render() {
        return (
            <View>
                <View style={styles.inputView}>
                    <TextInput placeholder="手机号" style={styles.textInput} onChangeText={(username) => this.setState({username})} value={this.state.username}/>
                    <TextInput placeholder="验证码" style={styles.textInput} onChangeText={(password) => this.setState({password})} value={this.state.password}/>
                    <Button 
                        onPress={this.login} 
                        containerStyle={[styles.loginButton]} 
                        style={[styles.loginText]} 
                        text="注册"/>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 20
    },
    inputView: {
        height: 100,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15
    },
    textInput: {
        height: 46,
        paddingLeft: 5,
        borderBottomWidth: 1,
        fontSize: 13,
        borderBottomColor: '#377BF3'
    },
    loginButton: {
        height: 40,
        borderColor: '#377BF3',
        backgroundColor: '#377BF3',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 30
    },
    loginText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#ffffff',
        lineHeight: 36
    }
});