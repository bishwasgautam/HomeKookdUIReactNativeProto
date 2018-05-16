import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class MealDetails extends React.Component{

  getImageHref(id){
    if(id)
      return "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/2/25/0/bw2b07_french_fries1.jpg.rend.hgtvcom.616.462.suffix/1383933925968.jpeg";
  	 
    return null;
  }

  render(){
      return(
      <View id="divMealDetails" className="mealDetails">
          <Image style={{flex:3, width:100, height: 100}} source={{uri:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/2/25/0/bw2b07_french_fries1.jpg.rend.hgtvcom.616.462.suffix/1383933925968.jpeg'}}/>
          <Text className="mealName">{this.props.id}</Text>
      </View>
    );

  }
}

export default MealDetails