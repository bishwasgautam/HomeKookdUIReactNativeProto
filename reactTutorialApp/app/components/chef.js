import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class KookdChef extends Component{

getImageSrc(id){
  if(id)
    return "https://previews.123rf.com/images/krisdog/krisdog1108/krisdog110800040/10299785-portrait-of-a-rather-wicked-looking-cartoon-chef.jpg";

  return null;
}

render(){
  
  return(
    <View id="divKookdChef" className="kookdChef">
      <Image source={{uri:'https://previews.123rf.com/images/krisdog/krisdog1108/krisdog110800040/10299785-portrait-of-a-rather-wicked-looking-cartoon-chef.jpg'}}/>
      <Text className="chefName">{this.props.id}</Text>
    </View>
    );
  }
}

export default KookdChef;