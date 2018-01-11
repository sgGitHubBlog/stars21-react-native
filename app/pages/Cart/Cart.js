import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';

export default class Cart extends Component {

    static navigationOptions = {
        title: 'Cart',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-cart" size={24} color={tintColor} />
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
