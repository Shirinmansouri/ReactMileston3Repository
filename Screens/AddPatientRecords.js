import React, { Component } from 'react'
import { StyleSheet,TextInput,View, Text, TouchableHighlight, FlatList ,Button,TouchableOpacity} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import DatePicker from 'react-native-neat-date-picker'
import {GlobalStyles} from '../Style/Global';
import DropDownPicker from 'react-native-dropdown-picker';
import { Table, Row} from 'react-native-table-component';
import ajax from './ajax';
import { any } from 'prop-types';


class AddPatientRecords extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      value: 'Blood Pressure',
      patient: [any],
      dateTime: '',
      nurseName: '',
      type: '',
      category: 'Heart Beat Rate',
      singleValue: '',
      date: new Date(Date.now()),
      options : ['one', 'two', 'three'],
      defaultOption : 'one',
      showDatePicker: false,

    };

  }
   openDatePicker =()=> {
    this.setState({showDatePicker: true});

  }


    onCancel =()=> {
    // You should close the modal in here
  this.setState({showDatePicker: false})
  }
    onConfirm = ( date ) => {
    // You should close the modal in here
    setShowDatePicker(false)
    // The parameter 'date' is a Date object so that you can use any Date prototype method.
    console.log(date.getDate())

  }
   //use API
   async componentDidMount(){
    //get patient from API
    const patient = await ajax.fetchPatientbyId(this.props.route.params.patientId)
    //set records to state
    this.setState({patient});
   }

  addPatientRecord = async () => {
      // POST request using fetch with async/await
    //for non
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dateTime: this.state.dateTime,
          nurseName: this.state.nurseName,
          type: this.state.type,
          category: this.state.category,
          singleValue: this.state.singleValue,
        })
    };

   try{

    const response = await fetch('http://127.0.0.1:5000/patients/'+ this.props.route.params.patientId +"/tests", requestOptions).catch(err => console.log(err));
    // console.log(response._bodyBlob)
    // console.log(response)
    // const data = await response.json();
    // console.log(data)
  } catch (error) {
    console.error(error);
  }

  this.props.navigation.navigate('View Patients')
}

  //  showPicker = () => {
  //    this.setState({isPickerShow:true});
  //  }
  //  onChange = (event, value) => {
  //  this.setState({date:value});
  //  if (Platform.OS === 'android') {
  //     this.setState({isPickerShow:false});
  //  }
  // }
  // handleDate=(text)=>
  // {
  //   this.setState({date:text});

  // }

  render()
  {
    const { open, value } = this.state;
    return (
   <View style={GlobalStyles.container}>
     <View
      style={{
        height: 20,
      }} />
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

    <View style={[GlobalStyles.contentflex , {flex: 6 }]} >
    <View style={{flex: 0.8, flexDirection: 'row' }}>
        <Text style={[GlobalStyles.titleText]}>Date / Time:      </Text>
        <TextInput style={GlobalStyles.textInputStyles}   placeholder="YYYY/MM/DD" onChangeText={(text)=> {this.setState({dateTime: text});}}/>

      </View>
      <View style={{flex: 0.8, flexDirection: 'row' }}>
        <Text style={[GlobalStyles.titleText]}>Nurse Name:    </Text>
        <TextInput style={GlobalStyles.textInputStyles} onChangeText={(text)=> {this.setState({nurseName: text});}}/>
      </View>
      <View style={{flex: 0.8, flexDirection: 'row' }}>
        <Text style={[GlobalStyles.titleText]}>Type:                   </Text>
        <TextInput style={GlobalStyles.textInputStyles} onChangeText={(text)=> {this.setState({type: text});}}/>
      </View>
      <View style={{flex: 0.8, flexDirection: 'row' }}>
        <Text style={[GlobalStyles.titleText]}>Reading/Value:</Text>
        <TextInput style={GlobalStyles.textInputStyles} onChangeText={(text)=> {this.setState({singleValue: text});}}/>
      </View>

      <View style={{flex: 0.8, flexDirection: 'row' }}>
        <Text style={[GlobalStyles.titleText  ]}>Type Of Data</Text>

        <Picker
            style={GlobalStyles.picker}
            selectedValue={this.state.category}
            onValueChange={(text)=> {this.setState({category: text});}}>
          <Picker.Item style={GlobalStyles.pickerItem} label="Blood Pressure (X/Y mmHg) "      value="Blood Pressure" />
          <Picker.Item style={GlobalStyles.pickerItem} label="Respiratory Rate (X/min)" value="Respiratory Rate" />
          <Picker.Item style={GlobalStyles.pickerItem} label="Blood Oxygen Level (X%)" value="Blood Oxygen Level" />
            <Picker.Item style={GlobalStyles.pickerItem} label="Heartbeat Rate (X/min)" value="Heart Beat Rate" />
        </Picker>
    </View>


      <View style={{flex: 1.7, flexDirection: 'column',alignSelf: 'center'}}>


      </View>
      <View style={{flex: 1 , flexDirection: 'row' }}>
        <TouchableHighlight
           onPress={this.addPatientRecord} style = {[GlobalStyles.appButtonContainer ,  {flex: 1 ,flexDirection:'column' }]}>
          <Text style = {GlobalStyles.appButtonText}> Add</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>this.props.navigation.navigate('View Patients')} style = {[GlobalStyles.appButtonContainer ,  {flex: 1 ,flexDirection:'column' }]} >
          <Text style = {GlobalStyles.appButtonText}> Cancel</Text>
        </TouchableHighlight>
      </View>
    </View>
    <View
      style={{
        height: 20,
      }}
    />
</View>
    );
  }
}
export default AddPatientRecords;
