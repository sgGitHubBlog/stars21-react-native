import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class Item extends PureComponent {

    constructor(props) {
        super(props);
    }

    _onPress() {
        
    }

    render() {
        return(
            <TouchableOpacity onPress={() => {this._onPress.bind(this)}}>
                <View style={styles.container}>
                    <Text style={styles.title}>最美的星空</Text>
                    <Image style={styles.titleImage} source={{uri: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2135099879,2011238163&fm=27&gp=0.jpg'}}/>
                    <Text style={styles.textContent}>
                        react的宽度不支持百分比，设置宽度时不需要带单位,那么10代表的具体宽度是多少呢？
                        不知道是官网文档不全还是我眼瞎，反正是没找到，那做一个实验自己找吧：
                    </Text>
                    <View style={styles.footerContainer}>
                        <Image style={styles.headImage} source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515660754954&di=41c62db2044fbe9560d6bd04862d5cee&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2015-01-16%2F092804564.jpg'}}></Image>
                        <Text style={styles.nickText}>super</Text>
                        <View style={styles.iconContainer}>
                            <Text style={styles.iconText}>600</Text>
                            <Image style={styles.iconImage} source={require('../../assets/imgs/icon_skip.png')}></Image>
                            <Text style={styles.iconText}>88</Text>
                            <Image style={styles.iconImage} source={require('../../assets/imgs/icon_comments.png')}></Image>
                            <Text style={styles.iconText}>5</Text>
                            <Image style={styles.iconImage} source={require('../../assets/imgs/icon_favorites.png')}></Image>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6'
    },
    title: {
        marginTop: 8,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 15,
        fontWeight: 'bold'
    },
    titleImage: {
        marginTop: 8,
        height: 140
    },
    textContent: {
        marginTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 12,
        lineHeight: 18
    },
    headImage: {
        marginLeft: 5,
        width: 26,
        height: 26,
        borderRadius: 20
    },
    nickText: {
        marginLeft: 5,
        color: '#bfbfbf'
    },
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40
    },
    iconContainer: {
        position: 'absolute',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        right: 0,
        height: 40
    },
    iconImage: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    iconText: {
        width: 20,
        height: 20,
        marginRight: 10,
        fontSize: 12,
        marginTop: 15,
        color: '#bfbfbf'
    }
})