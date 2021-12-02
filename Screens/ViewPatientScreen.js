import React, { Component } from 'react'
import { StyleSheet,TextInput,View, Text, SafeAreaView, TouchableHighlight,Button,Alert,TouchableOpacity} from 'react-native'
import {GlobalStyles} from '../Style/Global';
import { DataTable } from 'react-native-paper';
import { Table, Row} from 'react-native-table-component';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchResult from './SearchResult';

 class ViewPatientsScreen extends Component {
   constructor(props){
     super(props);
   }
   state={
    results: [],
    servicePlan: '',
    firstName: '',
    lastName: '',
  }
  updateServicePlan=(text)=>{
    this.setState({servicePlan:text});
  }
  updateFirstName=(text)=>{
    this.setState({firstName:text});
  }
  updateLastName=(text)=>{
    this.setState({lastName:text});
  }

  async searchForPatient(){
    alert(this.state.firstName)
    const result = await ajax.fetchPatientsBySearch(this.state.servicePlan, this.state.firstName, this.state.lastName)
    this.setState({results:result});
   }

   render(){
     return (
      <View style={GlobalStyles.container}>
      <View style={[GlobalStyles.contentflex, {flex:3 ,backgroundColor: 'silver' ,
      justifyContent:'flex-start' ,marginVertical:8}]} >

       <View style={{flex: 1, flexDirection: 'row' }}>
       <Text style={[GlobalStyles.titleText, {flex: 1 ,flexDirection:'column' }]}>First Name</Text>
       <TextInput
         style={GlobalStyles.textInputStyles} onChangeText={text => this.updateFirstName(text)}
       />
      </View>
      <View style={{flex: 1, flexDirection: 'row' }}>
    <Text style={[GlobalStyles.titleText, {flex: 1 ,flexDirection:'column' }]}>Last Name:</Text>
    <TextInput
         style={GlobalStyles.textInputStyles} onChangeText={text => this.updateLastName(text)}
       />
     </View>
     <View style={{flex: 1, flexDirection: 'row' }}>
     <Text style={[GlobalStyles.titleText, {flex: 1 ,flexDirection:'column' }]}>Health Id:</Text>
     <TextInput
         style={GlobalStyles.textInputStyles} onChangeText={text => this.updateServicePlan(text)}
       />
    </View>
    <View style={{flex: 1 , flexDirection: 'row' }}>
    <TouchableHighlight
       style = {[GlobalStyles.appButtonContainer ,  {flex: 1 ,flexDirection:'column' }]} onPress={this.searchForPatient}>
       <Text style = {GlobalStyles.appButtonText}>Find</Text>
    </TouchableHighlight>
    </View>

    <View style={[GlobalStyles.contentflex , {flex: 5 }]} >

    <View style={[GlobalStyles.patientData , {backgroundColor: '#ABD3EC' }]}>
       {
         this.state.results.length > 0
         ? <SearchResult results={this.state.results}/>
         : <Text>No records available!</Text>
       }
   </View>

    </View>

    </View>
    </View>

  );
  }
}

export default ViewPatientsScreen;
