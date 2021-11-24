
import React, { Component } from 'react'
import { StyleSheet,View, Text} from 'react-native'
import {GlobalStyles} from '../Style/Global';
import { DataTable } from 'react-native-paper';
import { Table, Row} from 'react-native-table-component';
import ajax from './ajax';
import RecordList from './RecordList';
import { any } from 'prop-types';

class ViewPatientRecordsScreen extends React.Component {
  //set state for the records and patient
  state={
    records:[],
    patient: [any],
  }
   constructor(props){
     super(props);
   }

   //use API
   async componentDidMount(){
    //get patient from API
    const patient = await ajax.fetchPatientbyId(this.props.route.params.patientId)
    //set records to state
    this.setState({patient});

    //get records from API
    const records = await ajax.fetchPatientRecords(this.props.route.params.patientId)
    //set records to state
    this.setState({records});

   }

   render(){
     return (
    <View style={GlobalStyles.recordContainer}>
     <View style={[GlobalStyles.patientData , {backgroundColor: 'silver' }]}>
     <Table borderStyle={"none"}>
        <Row
          data={['HealthId:', this.state.patient[0].servicePlan]}
          flexArr={[1, 1]}
        />
        <Row
          data={['Name:', this.state.patient[0].firstName + ' ' + this.state.patient[0].lastName]}
          flexArr={[1,1]}
        />
        <Row
          data={['Date of birth:', this.state.patient[0].dateOfBirth]}
          flexArr={[1, 1]}
         />
        <Row
          data={['Address:', this.state.patient[0].address]}
          flexArr={[1, 1]}
         />
      </Table>
     </View>
     <View
      style={{
        height: 20,
      }}
    />
     <View style={[GlobalStyles.patientData , {backgroundColor: '#ABD3EC' }]}>
        {
          this.state.records.length > 0
          ? <RecordList records={this.state.records}/>
          : <Text style={styles.header}>No records available!</Text>
        }
    </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 100, backgroundColor: '#fff' },
  header: {},
  head: { height: 40, backgroundColor: 'orange' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#2ecc71' },
  row: { height: 28 },
  text: { textAlign: 'center' },
});

export default ViewPatientRecordsScreen;
