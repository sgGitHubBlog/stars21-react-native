import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';

export default class Shop extends Component {

    static navigationOptions = {
        title: 'Shop',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-briefcase" size={24} color={tintColor} />
        )
    } 

    constructor() {
        super();
    }

    render() {
        return(
            <View>

            </View>
        );
    }
}
