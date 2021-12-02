import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { DataTable } from 'react-native-paper';
import {GlobalStyles} from '../Style/Global';
import {View, Text, StyleSheet, FlatList,Button,TouchableOpacity,TouchableHighlight} from 'react-native';



class SearchResult extends Component{
    constructor(props){
        super(props);
      }
    static propTypes ={
        results: PropTypes.array.isRequired,
    };
    

    addRecords () {
        alert("In Add")
        try{
            
            this.props.navigation.navigate('Add Patient Record',
            {
                patientId: '61a128da71232b9fb3b61ff7',
                otherParam: 'anything you want here',
            });
                
        } catch(error){
            console.error(error);
        }
    }

    listRecords () {
        alert("In List")
        try{
            
            
        } catch(error){
            console.error(error);
        }
    }  

        
    render(){

        return(
            <View >
                <DataTable >
                    <DataTable.Header >
                    
                    <DataTable.Title style={{flex: 3}}>Name</DataTable.Title>
                    <DataTable.Title style={{flex: 4}}>Date of Birth</DataTable.Title>
                    <DataTable.Title style={{flex: 3}}>HealthID</DataTable.Title>
                    <DataTable.Title style={{flex: 2}}></DataTable.Title>
                    <DataTable.Title style={{flex: 2}}></DataTable.Title>
                    
                    </DataTable.Header>
                </DataTable>

                

                <FlatList
                data={this.props.results}
                renderItem={({item}) =>
                <View style= {{flex : 13 , flexDirection : 'row' }}>

                    <Text style = {{flex : 6 , fontSize : 10 , fontWeight: "bold" , paddingVertical: 9}}>
                        {item.firstName}&nbsp;{item.lastName}
                    </Text>

                    <Text style = {{flex : 6 , fontSize : 10 , fontWeight: "bold" , paddingVertical: 9}}>
                        {item.dateOfBirth}
                    </Text>
                    <Text style = {{flex : 4 , fontSize : 10 , fontWeight: "bold" , paddingVertical: 9}}>
                    {item.servicePlan}
                    </Text>
                    <TouchableHighlight
                           style = {[GlobalStyles.appButtonContainerTwo ,  {flex: 2 ,flexDirection:'column' }]} title="Add" onPress={()=>this.addRecords()}>
                        <Text style = {GlobalStyles.appButtonTextTwo}>Add</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                           style = {[GlobalStyles.appButtonContainerTwo ,  {flex: 2 ,flexDirection:'column' }]} onPress={()=>this.listRecords()}>
                        <Text style = {GlobalStyles.appButtonTextTwo}>List</Text>
                    </TouchableHighlight>


                </View>}
                />
                
            </View>
        );
    }
}


export default SearchResult;
