import {Component} from 'react';
import {View, Button} from 'react-native';
import KookdEntry from './kookdEntry'

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

export default Home