import React, { Component } from 'react'
import { StyleSheet,View, Text} from 'react-native'
import {GlobalStyles} from '../Style/Global';
import { DataTable } from 'react-native-paper';
import { Table, Row} from 'react-native-table-component';


class ListAllPatientsScreen extends Component {
   constructor(props){
     super(props);
   }
   render(){
     return (
    <View style={GlobalStyles.container}>
    <View style={[GlobalStyles.contentflex, {flex:2 ,
    justifyContent:'flex-start' ,marginVertical:8 , marginVertical : 50}]} >
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={{flex: 1}}>#</DataTable.Title>
          <DataTable.Title style={{flex: 2}}>Name</DataTable.Title>
          <DataTable.Title style={{flex: 1}}>Age </DataTable.Title>
          <DataTable.Title style={{flex: 2}}>HealthId</DataTable.Title>
          <DataTable.Title style={{flex: 2}}>BirthDate</DataTable.Title>
          <DataTable.Title style={{flex: 3}}>Address</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row >
        <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>1</Text>
          </DataTable.Cell>

          <DataTable.Cell style={{flex: 2}}>
              <Text style={GlobalStyles.recordRow}>Roud.G</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>40</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>234</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 2}}>
              <Text style={GlobalStyles.recordRow}>25/05/1986</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 3}}>
              <Text style={GlobalStyles.recordRow}>L4J7R6</Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row >

        <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>2</Text>
          </DataTable.Cell>

          <DataTable.Cell style={{flex: 2}}>
              <Text style={GlobalStyles.recordRow}>Botton.M</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>38</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>123</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 2}}>
              <Text style={GlobalStyles.recordRow}>23/06/1976</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 3}}>
              <Text style={GlobalStyles.recordRow}>H7K7T5</Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row >
        <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>3</Text>
          </DataTable.Cell>

          <DataTable.Cell style={{flex: 2}}>
              <Text style={GlobalStyles.recordRow}>Sancho.W</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>28</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>678</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 2}}>
              <Text style={GlobalStyles.recordRow}>09/01/2001</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 3}}>
              <Text style={GlobalStyles.recordRow}>L6G9W6</Text>
          </DataTable.Cell>
        </DataTable.Row>

         <DataTable.Row >

         <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>4</Text>
          </DataTable.Cell>

          <DataTable.Cell style={{flex: 2}}>
              <Text style={GlobalStyles.recordRow}>Sancho.W</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>40</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>234</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 2}}>
              <Text style={GlobalStyles.recordRow}>25/05/1986</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 3}}>
              <Text style={GlobalStyles.recordRow}>L4J7R6</Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row >

        <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>5</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 2}}>
              <Text style={GlobalStyles.recordRow}>Botton.M</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>38</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>123</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 2}}>
              <Text style={GlobalStyles.recordRow}>23/06/1976</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 3}}>
              <Text style={GlobalStyles.recordRow}>H7K7T5</Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row >

          <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>6</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 2}}>
              <Text style={GlobalStyles.recordRow}>Sancho.W</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>28</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>678</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 2}}>
              <Text style={GlobalStyles.recordRow}>09/01/2001</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 3}}>
              <Text style={GlobalStyles.recordRow}>L6G9W6</Text>
          </DataTable.Cell>
        </DataTable.Row>

      </DataTable>
      </View>
    </View>
  );
  }
}

export default ListAllPatientsScreen;
