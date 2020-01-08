import React from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';

export default props => {
  return (
    <View style={{...styles.inputContainer, ...props.styles}}>
      <Image style={styles.inputIcon} source={props.iconPath} />
      <TextInput
        {...props}
        onChangeText={props.onChangeText || ''}
        value={props.value}
        style={props.style?props.style:styles.inputs }
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        underlineColorAndroid="transparent"
        keyboardType={props.keyboardType}
        returnKeyType={props.returnKeyType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    height: 55,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(20, 153, 255, 0.3)',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.8)',
    borderRadius:10
  },
  inputs: {
    height: 50,
    marginLeft: 16,
    flex: 1,
    fontSize: 25,
    fontWeight: '400',
    color: '#fff',
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
});
