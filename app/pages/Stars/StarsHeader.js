import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Swiper from 'react-native-swiper';
const { width } = Dimensions.get('window');  

export default class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Swiper style={styles.wrapper} height={240}
                dot={<View style={{backgroundColor:'rgba(255,255,255,0.3)', width: 6, height: 6,borderRadius: 3, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                activeDot={<View style={{backgroundColor: 'rgba(255,255,255,0.9)', width: 6, height: 6, borderRadius: 3, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                paginationStyle={{
                    bottom: 5
                }}
                loop>
                <Image source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515646271442&di=a36f20eba218a83453dbf1fd9f4f2999&imgtype=0&src=http%3A%2F%2Fpic.vjshi.com%2F2015-01-04%2F1420336694242_320.jpg'}} style={styles.img}/>
                <Image source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515646271442&di=ee1f6bdb2745c5c3cd20689674ca2fba&imgtype=0&src=http%3A%2F%2Fscimg.jb51.net%2Fallimg%2F151012%2F14-1510121551380-L.jpg'}} style={styles.img}/>
                <Image source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515646271440&di=63cce7e6a8b835f8b64d862da0ec98b3&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20160121%2Flanzijianbianxingkongmohubeijingsucai_5792509_small.jpg'}} style={styles.img}/>
                <Image source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515646271440&di=045756ae87fb994a2afbea3446c3d7ce&imgtype=0&src=http%3A%2F%2Fscimg.jb51.net%2Fallimg%2F160121%2F14-160121163S30-L.jpg'}} style={styles.img}/>
            </Swiper>
        );
    }

}

const styles = StyleSheet.create({
    wrapper: {
    },
    img: {
        flex: 1
    }
  });