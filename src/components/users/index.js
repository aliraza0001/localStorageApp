import React from 'react';
import {View,Text,Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class Users extends React.Component{


componentWillReceiveProps() {
  console.log( 'componentWillReceiveProps')
  this.getData()
}

componentDidCatch() {
  console.log('componentDidCatch')
  this.getData()
}

componentDidMount() {
  console.log('componentDidMount')
  this.getData()

}

shouldComponentUpdate() {
  console.log('shouldComponentUpdate')
  this.getData()

}

componentDidUpdate() {
  console.log('componentDidUpdate')
  this.getData()
  
}
componentWillMount() {
  console.log('componentWillMount')
  this.getData()

}

componentWillUnmount() {
  console.log('componentWillUnmount')
  this.getData()
  
}
componentWillUpdate() {
  console.log('componentWillUpdate')
  this.getData()

}


  getData = async () => {
    try {
      // const remove = await AsyncStorage.removeItem('Users')
      const value = await AsyncStorage.getItem('Users')
      console.log(JSON.parse(value))
  
      if(value !== null) {
        console.log(value)
      }
    } catch(e) {
      // error reading value
    }
  }
  

  render() {
    this.getData()

    return(
      <View>
          <Text>
              user Page
          </Text>
          <Button onPress={this.getData} title='Get Data' />
      </View>
  )
  }
}

export default Users;

