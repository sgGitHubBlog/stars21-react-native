import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor: '#fff'
        }
        this._onPress = this._onPress.bind(this);
    }

    _onPress() {
        this.setState({bgColor: '#bfbfbf'});
        setTimeout(() => {
            this.setState({bgColor: '#fff'});
        }, 150);
    }

    render() {
        return(
            <TouchableOpacity onPress={this._onPress} activeOpacity={1}>
                <View style={[styles.container, {backgroundColor: this.state.bgColor}]}>
                    <Image style={styles.icon} source={require('../../assets/imgs/react_logo.jpeg')}></Image>
                    <Text style={styles.text}>react</Text>
                    <Image style={styles.iconRight} source={require('../../assets/imgs/flatlist_arrow_right.png')}></Image>
                </View>
            </TouchableOpacity>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        height: 60,
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        borderTopWidth: 1,
        borderTopColor: '#e6e6e6'
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 5
    },
    text: {
        marginLeft: 10
    },
    iconRight: {
        position: 'absolute',
        right: 8,
        width: 18,
        height: 18
    },
});

