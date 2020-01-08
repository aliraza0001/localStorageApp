import React from 'react';
import {View,Text, StyleSheet} from 'react-native';


export default (props) => {
    return(
        <View style={styles.MainContainer}>
            <Text>Main Tab</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    mapStyle: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });