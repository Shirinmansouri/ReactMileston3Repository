import React, { Component } from 'react'
import { StyleSheet,View, Text} from 'react-native'
import {GlobalStyles} from '../Style/Global';
import { DataTable } from 'react-native-paper';
import { Table, Row} from 'react-native-table-component';
import { any } from 'prop-types';
import PatientList from './PatientList';
import ajax from './ajax';

class ListAllPatientsScreen extends Component {
  state={
    patients: [any],
  }
   constructor(props){
     super(props);
   }

   //use API
   async componentDidMount(){
    //get patient from API
    const result = await ajax.fetchPatients()
    //set records to state
    this.setState({patients:result});
   }
   render(){
     return (
    <View style={GlobalStyles.container}>
    <View style={[GlobalStyles.patientData , {backgroundColor: '#ABD3EC' }]}>
       {
         this.state.patients.length > 0
         ? <PatientList patients={this.state.patients}/>
         : <Text style={styles.header}>No records available!</Text>
       }
   </View>
    </View>
  );
  }
}

export default ListAllPatientsScreen;
