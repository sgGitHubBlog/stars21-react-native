import React, { PureComponent } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
var ScreenWidth = Dimensions.get('window').width

export default class Item extends PureComponent {

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
        if (this.props.index === 0) {
            return(
                <TouchableOpacity onPress={this._onPress} activeOpacity={1}>
                    <View style={[styles.container, {backgroundColor: this.state.bgColor, borderTopWidth: 1, borderTopColor: '#e6e6e6'}]}>
                        <Text style={styles.text}>{this.props.index}</Text>
                        <Image style={styles.iconRight} source={require('../../assets/imgs/flatlist_arrow_right.png')}></Image>
                        <View style={[styles.line, {width: ScreenWidth - 15}]}></View>
                    </View>
                </TouchableOpacity>
            )
        } else if (this.props.index === this.props.maxIndex - 1) {
            return(
                <TouchableOpacity onPress={this._onPress} activeOpacity={1}>
                    <View style={[styles.container, {backgroundColor: this.state.bgColor, borderBottomWidth: 1, borderBottomColor: '#e6e6e6'}]}>
                        <Text style={styles.text}>{this.props.title}</Text>
                        <Image style={styles.iconRight} source={require('../../assets/imgs/flatlist_arrow_right.png')}></Image>
                    </View>
                </TouchableOpacity>
            )
        } else {
            return(
                <TouchableOpacity onPress={this._onPress} activeOpacity={1}>
                    <View style={[styles.container, {backgroundColor: this.state.bgColor}]}>
                        <Text style={styles.text}>{this.props.title}</Text>
                        <Image style={styles.iconRight} source={require('../../assets/imgs/flatlist_arrow_right.png')}></Image>
                        <View style={[styles.line, {width: ScreenWidth - 15}]}></View>
                    </View>
                </TouchableOpacity>
            )
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 44,
        paddingLeft: 15
    },
    icon: {
        width: 18,
        height: 18
    },
    text: {
        fontSize: 12
    },
    iconRight: {
        position: 'absolute',
        right: 8,
        width: 18,
        height: 18
    },
    line: {
        position: 'absolute',
        left: 15,
        bottom: 0,        
        height: 1, 
        backgroundColor: '#e6e6e6'
    }
});

