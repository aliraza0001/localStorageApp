import React, { useState } from 'react';
import { Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import TextInput from '../input/index';
import backgroundImage from '../../assets/background.jpg'

export default (props) => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const { height, width } = Dimensions.get('window');
    const navigation = props.navigation;
    const Handler = () => {
        const user = {
            name: name,
            address: address,
            phone: parseFloat(phone)
        }
        _storeData(user)
        console.log('I m Working bro')
    }

    const _storeData = async (user) => {
        const existingUsers = await AsyncStorage.getItem("Users")
        let newUser = JSON.parse(existingUsers);
        if (!newUser) {
            newUser = []
        }

        newUser.push( user )
        console.log(newUser)

        try {
            console.log('try')
            await AsyncStorage.setItem('Users', JSON.stringify(newUser))
        } catch (e) {
            console.log('Else')

        }



    }

    return (

        <ImageBackground source={backgroundImage} style={{ width: width, height: height, ...styles.container }}>

            <TextInput
                placeholder='Type Name Here'
                keyboardType='name-phone-pad'
                placeholderTextColor="white"
                returnKeyType='next'
                value={name}
                onChangeText={(name) => setName(name)}
            />
            <TextInput
                placeholder='Type Address Here'
                keyboardType='name-phone-pad'
                placeholderTextColor="white"
                returnKeyType='next'
                value={address}
                onChangeText={(address) => setAddress(address)}
            />
            <TextInput
                placeholderTextColor="white"
                placeholder='Type Phone Number'
                keyboardType='numeric'
                returnKeyType='done'
                value={phone}
                onChangeText={(phone) => setPhone(phone)}
            />
            <TouchableOpacity onPress={Handler} activeOpacity={0.7} style={styles.buttonContainer}>
                <Text style={styles.loginText}>Add</Text>
            </TouchableOpacity>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: '90%',
        borderRadius: 10,
        backgroundColor: 'rgba(20, 153, 255,0.9)'
    },
    loginText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    }

});


