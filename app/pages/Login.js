import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Alert,
    Text,
    View,
    TextInput,
    AsyncStorage,
    ToastAndroid
} from 'react-native';
import Button from '../components/Button'
import StatusButton from '../components/StatusButton'
import NavigationUtil from '../utils/NavigationUtil';

export default class Login extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft: null,
        headerRight: (
            <Button
                activeOpacity={0.8}
                text="注册"
                style={styles.headerRight}
                onPress={() => {
                    navigation.navigate('Register');
                }}/>
        ),
        title: 'Stars21'
    });

    constructor(props) {
        super(props);
        this.timer = null;
        this.state = {
            username: null,
            password: null,
            loginText: '登录',
            loginLoading: false,
            loginDisabled: false
        };
    }

    login = () => {
        this.setState({loginLoading: true, loginDisabled: true, loginText: '登录中..'});
        fetch('http://10.0.5.36:8080/public/user/login', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.password,
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.resultCode === 0) {
                AsyncStorage.setItem('token', responseJson.data, () => {});
                NavigationUtil.reset(this.props.navigation, 'Main')
            } else {
                if (Platform.OS === 'ios') {
                    Alert.alert(responseJson.message);
                } else {
                    ToastAndroid.showWithGravity(responseJson.message, ToastAndroid.SHORT, ToastAndroid.CENTER);
                }
                this.setState({loginLoading: false, loginDisabled: false, loginText: '登录'});
            }
        })
        .catch((error) => {
            // console.error(error);
            this.timer = setTimeout(() => {
                this.setState({loginLoading: false, loginDisabled: false, loginText: '登录'});
                // NavigationUtil.reset(this.props.navigation, 'Main')
            }, 1000);
            if (Platform.OS === 'ios') {
                Alert.alert('网络错误');
            } else {
                ToastAndroid.showWithGravity('网络错误', ToastAndroid.SHORT, ToastAndroid.CENTER);
            }
        });
    }

    render() {
        return (
            <View>
                <View style={styles.inputView}>
                    <TextInput placeholder="用户名(手机号/邮箱)" style={styles.textInput} onChangeText={(username) => this.setState({username})} value={this.state.username} underlineColorAndroid="transparent"/>
                    <TextInput secureTextEntry={true} placeholder="密码(不能少于6位)" style={styles.textInput} onChangeText={(password) => this.setState({password})} value={this.state.password} underlineColorAndroid="transparent"/>
                    <StatusButton
                        onPress={this.login}
                        loading={this.state.loginLoading}
                        disabled={this.state.loginDisabled}
                        containerStyle={[styles.loginButton]}
                        style={[styles.loginText]}
                        text={this.state.loginText}/>
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
        borderBottomColor: '#377BF3',
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
        color: '#ffffff'
    },
    headerRight: {
        color: '#ffffff',
        paddingRight: 5
    }
});
