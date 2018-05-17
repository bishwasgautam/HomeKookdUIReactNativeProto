import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class MealDetails extends React.Component{


  render(){
      return(
      <View id="divMealDetails" className="mealDetails">
          <Image style={{flex:3, width:100, height: 100}} source={require('./images/meal1.jpeg')}/>
          <Text className="mealName">{this.props.id}</Text>
      </View>
    );

  }
}

export default MealDetails