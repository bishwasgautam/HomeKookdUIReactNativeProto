import React, {Component} from 'react'
import {View, Button} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchKookdEntries, resetKookdEntries} from '../actions/actions'
import KookdEntry from './kookdEntry'


class Home extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    if(!this.props.kookdEntries || this.props.kookdEntries.length === 0){
        //call action directly
        this.props.actions.fetchKookdEntries();

     //or
     //dispatch action
     // dispatch(this.props.actions.fetchKookdEntries());
    }
  }

  resetData(){
    //call action directly
    this.props.actions.resetKookdEntries();

     //or
     //dispatch action
     // dispatch(this.props.actions.resetKookdEntries());
  }

  renderKookdEntry(i){
    if(this.props.kookdEntries)
      return(
        <KookdEntry chef={this.props.kookdEntries[i].chef} mealDetail={this.props.kookdEntries[i].mealDetail}/>
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

function mapStateToProps(state, props){
  return {kookdEntries: state.kookdEntries}
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators({fetchKookdEntries,resetKookdEntries}, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);