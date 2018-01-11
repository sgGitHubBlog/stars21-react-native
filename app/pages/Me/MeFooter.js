import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor: '#fff'
        }
    }

    _onPress() {
        this.setState({bgColor: '#bfbfbf'});
        this.props.onPressItem();
        setTimeout(() => {
            this.setState({bgColor: '#fff'});
        }, 350);
    }

    render() {
        return(
            <TouchableOpacity onPress={this._onPress.bind(this)} activeOpacity={1}>
                <View style={[styles.container, {backgroundColor: this.state.bgColor}]}>
                    <Image style={styles.icon} source={require('../../assets/imgs/icon_setting_blue.png')}></Image>
                    <Text style={styles.text}>设置</Text>
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
        height: 44,
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        borderTopWidth: 1,
        borderTopColor: '#e6e6e6'
    },
    icon: {
        width: 18,
        height: 18
    },
    text: {
        marginLeft: 10,
        fontSize: 12
    },
    iconRight: {
        position: 'absolute',
        right: 8,
        width: 18,
        height: 18
    },
});

