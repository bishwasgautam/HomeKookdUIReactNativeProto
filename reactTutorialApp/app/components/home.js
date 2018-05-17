import React, {Component} from 'react'
import {View, Button} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchKookdEntries, resetKookdEntries} from '../actions/actions'
import KookdEntry from './kookdEntry'
import '../styles/home.css'


class Home extends Component {

  constructor(props){
    super(props);
    this.props.toggle = true
  }

  //before component has rendered
  componentWillMount() {
    if(!this.props.kookdEntries || this.props.kookdEntries.length === 0){
        //call action directly
        this.props.actions.fetchKookdEntries();
       //or
       //dispatch action
       //dispatch(this.props.actions.fetchKookdEntries());
    }
  }

  //after component renders
  componentDidMount(){
    //your code here
  }

  resetData(){
    //call action directly
    this.props.actions.resetKookdEntries();
     //or
     //dispatch action
     // dispatch(this.props.actions.resetKookdEntries());
  }

  renderKookdEntry(i){
    console.log(this.props)
    if(this.props.kookdEntries)
      return(
        <KookdEntry chef={this.props.kookdEntries[i].chef} mealDetail={this.props.kookdEntries[i].mealDetail}/>
      )
      else{
        console.log("no entries");
        return ;
      }
  }
    

  render(){
    return(
	    <View>
        <Text styleName='header'> HEADER </Text>
		    <Button onPress={() => this.resetData()} title="Toggle Data"></Button>
		      {this.renderKookdEntry(0)}
		      {this.renderKookdEntry(1)}
		      {this.renderKookdEntry(2)}
		      {this.renderKookdEntry(3)}
	    </View>
    );
  }
}

function mapStateToProps(state){
  return {kookdEntries: state.homePage.kookdEntries}
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators({fetchKookdEntries,resetKookdEntries}, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);