import React, { Component } from 'react'
import { StyleSheet,TextInput,View, Text, SafeAreaView, TouchableHighlight,Button,Alert,TouchableOpacity} from 'react-native'
import {GlobalStyles} from '../Style/Global';
import { DataTable } from 'react-native-paper';
import { Table, Row} from 'react-native-table-component';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 class ViewPatientsScreen extends Component {
   constructor(props){
     super(props);
   }
   render(){
     return (
      <View style={GlobalStyles.container}>
      <View style={[GlobalStyles.contentflex, {flex:3 ,backgroundColor: 'silver' ,
      justifyContent:'flex-start' ,marginVertical:8}]} >

       <View style={{flex: 1, flexDirection: 'row' }}>
       <Text style={[GlobalStyles.titleText, {flex: 1 ,flexDirection:'column' }]}>First Name</Text>
       <TextInput
         style={GlobalStyles.textInputStyles}
       />
      </View>
      <View style={{flex: 1, flexDirection: 'row' }}>
    <Text style={[GlobalStyles.titleText, {flex: 1 ,flexDirection:'column' }]}>LastName:</Text>
    <TextInput
         style={GlobalStyles.textInputStyles}
       />
     </View>
     <View style={{flex: 1, flexDirection: 'row' }}>
     <Text style={[GlobalStyles.titleText, {flex: 1 ,flexDirection:'column' }]}>Health Id:</Text>
     <TextInput
         style={GlobalStyles.textInputStyles}
       />
    </View>
    <View style={{flex: 1 , flexDirection: 'row' }}>
    <TouchableHighlight
       style = {[GlobalStyles.appButtonContainer ,  {flex: 1 ,flexDirection:'column' }]}>
       <Text style = {GlobalStyles.appButtonText}>Find</Text>
    </TouchableHighlight>
    </View>

    <View style={[GlobalStyles.contentflex , {flex: 5 }]} >


    <View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={{flex: 1}}>#</DataTable.Title>
          <DataTable.Title style={{flex: 2}}>Name</DataTable.Title>
          <DataTable.Title style={{flex: 1}}>Age </DataTable.Title>
          <DataTable.Title style={{flex: 2}}>HealthId</DataTable.Title>
          <DataTable.Title style={{flex: 2}}></DataTable.Title>
          <DataTable.Title style={{justifyContent:"flex-end", flex: 2}}></DataTable.Title>
          <DataTable.Title style={{justifyContent:"flex-end", flex: 2}}></DataTable.Title>
        </DataTable.Header>
        <DataTable.Row >
        <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>1</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 2}}>
              <Text style={GlobalStyles.recordRow}>Roud.G</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 1}} numeric>
              <Text style={GlobalStyles.recordRow}>40</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 2}} numeric>
              <Text style={GlobalStyles.recordRow}>234</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 2}} numeric>
              <Button style={GlobalStyles.recordRow} title="Add" onPress={()=>{
                    this.props.navigation.navigate('Add Patient Record',
                    {
                        patientId: '619dd6f360ac90f3ca548a3b',
                        otherParam: 'anything you want here',
                        });
                    }}
                />
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 2}} numeric>
              <Button style={GlobalStyles.recordRow} title="List" onPress={()=>{
                    this.props.navigation.navigate('View Patient Record', {
                        patientId: '619dd6f360ac90f3ca548a3b',
                        otherParam: 'anything you want here',
                        });
                    }}
                />
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row >

        <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>2</Text>
          </DataTable.Cell>

          <DataTable.Cell style={{flex: 2}}>
              <Text style={GlobalStyles.recordRow}>Botton.M</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 1}} numeric>
              <Text style={GlobalStyles.recordRow}>38</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 2}} numeric>
              <Text style={GlobalStyles.recordRow}>123</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 2}} numeric>
              <Button style={GlobalStyles.recordRow} title="Add" onPress={()=>this.props.navigation.navigate('Add Patient Record')}></Button>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 2}} numeric>
              <Button style={GlobalStyles.recordRow} title="List" onPress={()=>this.props.navigation.navigate('View Patient Record')}></Button>
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row >
        <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>3</Text>
          </DataTable.Cell>

          <DataTable.Cell style={{flex: 2}}>
              <Text style={GlobalStyles.recordRow}>Sancho.W</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 1}} numeric>
              <Text style={GlobalStyles.recordRow}>28</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 2}} numeric>
              <Text style={GlobalStyles.recordRow}>678</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 2}} numeric>
              <Button style={GlobalStyles.recordRow} title="Add" onPress={()=>this.props.navigation.navigate('Add Patient Record')}></Button>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 2}} numeric>
              <Button style={GlobalStyles.recordRow} title="List" onPress={()=>this.props.navigation.navigate('View Patient Record')}></Button>
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row >

         <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>4</Text>
          </DataTable.Cell>

          <DataTable.Cell style={{flex: 2}}>
              <Text style={GlobalStyles.recordRow}>Sancho.W</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 1}} numeric>
              <Text style={GlobalStyles.recordRow}>28</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 2}} numeric>
              <Text style={GlobalStyles.recordRow}>234</Text>
          </DataTable.Cell>
            <DataTable.Cell style={{flex: 2}} numeric>
                <Button style={GlobalStyles.recordRow} title="Add" onPress={()=>this.props.navigation.navigate('Add Patient Record')}></Button>
            </DataTable.Cell>
            <DataTable.Cell style={{flex: 2}} numeric>
                <Button style={GlobalStyles.recordRow} title="List" onPress={()=>this.props.navigation.navigate('View Patient Record')}></Button>
            </DataTable.Cell>
        </DataTable.Row>

        </DataTable>
        </View>


    </View>

    </View>
    </View>

  );
  }
}

export default ViewPatientsScreen;
