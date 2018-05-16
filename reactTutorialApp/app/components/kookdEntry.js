import {Component} from 'react';
import {View, Text, Image} from 'react-native';
import KookdChef from './chef'
import MealDetails from './mealDetails'

class KookdEntry extends Component {

  render(){
    return (
      <View id="divKookdEntry" className="kookdEntry">
        <KookdChef id={this.props.chef}/>
        <MealDetails id={this.props.mealDetail}/>
      </View>
      );
    }

}

export default KookdEntry