import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const HomeHeader = ({ onPress, onPressBag, titleText }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPressBag}>
      <Image resizeMode="contain" style={styles.icon} source={require('../../images/menu.png')} />
    </TouchableOpacity>
    <Text style={styles.text}>{titleText}</Text>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        resizeMode="contain"
        style={styles.icon}
        source={require('../../images/settings.png')}
      />
    </TouchableOpacity>
  </View>
);

HomeHeader.propTypes = {
  onPress: PropTypes.func,
  titleText: PropTypes.string,
};

export default HomeHeader;
