import React, {Component} from 'react';
import { AppRegistry, View, Text, Image, Button} from 'react-native';

import App from './App';



class KookdChef extends Component{

getImageSrc(id){
  if(id)
    return "https://previews.123rf.com/images/krisdog/krisdog1108/krisdog110800040/10299785-portrait-of-a-rather-wicked-looking-cartoon-chef.jpg";

  return null;
}

render(){
  
  return(
    <View id="divKookdChef" className="kookdChef">
      <Image source={{uri:this.getImageSrc(this.props.id)}}/>
      <Text className="chefName">{this.props.id}</Text>
    </View>
    );
  }
}

class MealDetails extends React.Component{

  getImageHref(id){
    if(id)
      return "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/2/25/0/bw2b07_french_fries1.jpg.rend.hgtvcom.616.462.suffix/1383933925968.jpeg";
  	 
    return null;
  }

  render(){
      return(
      <View id="divMealDetails" className="mealDetails">
          <Image source={{uri:this.getImageHref(this.props.id)}}/>
          <Text className="mealName">{this.props.id}</Text>
      </View>
    );

  }
}

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

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {KookdEntries :[{
      chef: "Gordon",
      mealDetail: "Shepherds Pie"
    },{
      chef: "Ful Maya",
      mealDetail: "Thukpa"
    },{
      chef: "Harke",
      mealDetail: "Choila"
    },{
      chef: "Balotelli",
      mealDetail: "Spaghetti"
    }]};
  }

  resetData(){
    if(this.state.KookdEntries){
      this.setState({KookdEntries:null});
    }else{
       this.setState ({KookdEntries :[{
      chef: "Gordon",
      mealDetail: "Shepherds Pie"
    },{
      chef: "Ful Maya",
      mealDetail: "Thukpa"
    },{
      chef: "Harke",
      mealDetail: "Choila"
    },{
      chef: "Balotelli",
      mealDetail: "Spaghetti"
    }]});


    }
  }

  renderKookdEntry(i){
    if(this.state.KookdEntries)
      return(
        <KookdEntry chef={this.state.KookdEntries[i].chef} mealDetail={this.state.KookdEntries[i].mealDetail}/>
      )
      else
        return ;
  }

  render(){
    return(
	    <View>
		    <Button onPress={() => this.resetData()} title="Reset Data"></Button>
		      {this.renderKookdEntry(0)}
		      {this.renderKookdEntry(1)}
		      {this.renderKookdEntry(2)}
		      {this.renderKookdEntry(3)}
	    </View>
    );
  }

}


class reactTutorialApp extends Component{
	render(){
		return (
			<View>
				<Home />
			</View>
		);
	}

}

export default reactTutorialApp



AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp);


