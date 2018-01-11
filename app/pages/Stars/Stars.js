import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from './StarsHeader';
import Item from './StarsItem';

export default class Stars extends Component {

    static navigationOptions = {
        header: null,
        title: 'Stars',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-star" size={25} color={tintColor} />
        )
    } 

    constructor() {
        super();
        this.state = {
            refreshing: false
        };
    }

    onRefresh = () => {

    }

    _renderItem = ({item, index}) => (
        <Item/>
    );

    render() {
        return(
            <FlatList
                ListHeaderComponent={Header}
                data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}]}
                renderItem={this._renderItem}
                onRefresh={this.onRefresh}
                refreshing={this.state.refreshing}
            />
        );
    }
}
