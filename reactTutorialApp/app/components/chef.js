import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class KookdChef extends Component{

render(){
  
  return(
    <View id="divKookdChef" className="kookdChef">
      <Image source={require('./images/chef1.jpg')} style={{width: 100, height: 100}}/>
      <Text className="chefName">{this.props.id}</Text>
    </View>
    );
  }
}

export default KookdChef;