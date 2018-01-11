import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, AsyncStorage, FlatList } from 'react-native';
import Header from './MeHeader';
import Footer from './MeFooter';
import Item from './MeItem';

export default class Me extends Component {

    static navigationOptions = {
        title: 'Me',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-person" size={25} color={tintColor} />
        )
    } 

    constructor() {
        super();
        this.state = {
            refreshing: false,
            data: [{key: 'a', title: '1'}, {key: 'b', title: '2'}, {key: 'c', title: 'sadas'}, {key: 'd', title: 'sadas'}]
        };
    }

    onRefresh = () => {

    }

    _onPressItem() {
        this.props.navigation.navigate('Setting')
    }

    _keyExtractor = (item, index) => item.key;

    _renderItem = ({item, index}) => (
        <Item
            title={item.title} 
            index={index} 
            maxIndex={this.state.data.length} />
    );

    render() {
        return(
            <FlatList
                 ListHeaderComponent={Header}
                 ListFooterComponent={<Footer onPressItem={this._onPressItem.bind(this)}/>}
                 data={this.state.data}
                 keyExtractor={this._keyExtractor}
                 renderItem={this._renderItem}
                 onRefresh={this.onRefresh}
                 refreshing={this.state.refreshing}
            />
        );
    }
}

const styles = StyleSheet.create({
    listHeader: {
        marginTop: 10,
        height: 50,
        backgroundColor: '#fff'
    },
    listHeaderText: {
        height: 50,
        width: 100,
        lineHeight: 50,
        marginLeft: 10,
        backgroundColor: '#FF4040'
    }
});