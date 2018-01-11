import React, { Component } from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import NavigationUtil from '../utils/NavigationUtil';

export default class Welcome extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor() {
        super();
        this.timer = null;
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            AsyncStorage.getItem('token', (error, result) => {
                if (result && result.length > 30) {
                    //登录成功
                    NavigationUtil.reset(this.props.navigation, 'Main')
                } else {
                    //未登录
                    NavigationUtil.reset(this.props.navigation, 'Main')
                }
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    欢迎您！~~
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {

    }
  });