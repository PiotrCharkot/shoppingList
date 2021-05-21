import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => {
  const {title} = props;
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'default title',
};
const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    fontSize: 23,
    textAlign: 'center',
    color: 'white',
  },
});

export default Header;
