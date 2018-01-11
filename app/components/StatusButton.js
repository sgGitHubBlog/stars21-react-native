import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ViewPropTypes, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';

const propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  style: Text.propTypes.style,
  containerStyle: ViewPropTypes.style,
  text: PropTypes.string,
  loading: PropTypes.bool,
  loadingSize: PropTypes.string,
  loadingColor: PropTypes.string,
  activeOpacity: PropTypes.number
};

const StatusButton = ({
  onPress,
  disabled,
  style,
  containerStyle,
  text,
  loading,
  loadingSize,
  loadingColor,
  activeOpacity
}) => (
  <TouchableOpacity
    style={containerStyle}
    onPress={onPress}
    disabled={disabled}
    activeOpacity={activeOpacity}>
    <View style={[styles.layout]}>
      <ActivityIndicator 
        style={[styles.loading]} 
        animating={loading} 
        size={loadingSize} 
        color={loadingColor} />
      <Text style={[style, { paddingRight: 22 }]}>{text}</Text>
    </View>
  </TouchableOpacity>
);

StatusButton.propTypes = propTypes;

StatusButton.defaultProps = {
  onPress() {},
  disabled: false,
  loading: false,
  loadingSize: 'small',
  loadingColor: 'white',
  activeOpacity: 0.8
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    marginTop: 2,
    marginRight: 8
  }
});

export default StatusButton;
