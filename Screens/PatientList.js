import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { DataTable } from 'react-native-paper';

import {View, Text, StyleSheet, FlatList} from 'react-native';

class PatientList extends React.Component{
    static propTypes ={
        patients: PropTypes.array.isRequired,
    };
    render(){
        return(
            <View >
                <DataTable >
                    <DataTable.Header >
                    <DataTable.Title style={{flex: 2.5}}>firstName</DataTable.Title>
                    <DataTable.Title style={{flex: 2.5}}>lastName</DataTable.Title>
                    <DataTable.Title style={{flex: 2.5}}>dateOfBirth</DataTable.Title>
                      <DataTable.Title style={{flex: 2.5}}>HealthId</DataTable.Title>
                    
                    </DataTable.Header>
                </DataTable>

                <FlatList
                data={this.props.patients}
                renderItem={({item}) =>
                <View style= {{flex : 5 , flexDirection : 'row' }}>
                    <Text style = {{flex : 1.6 }}>
                        {item.firstName}
                        </Text>
                        <Text style = {{flex : 2 }}>
                        {item.lastName}
                        </Text>

                        <Text style = {{flex : 1.4 , fontSize : 10 , fontWeight: "bold"}}>
                        {item.dateOfBirth}
                    </Text>
                    <Text style = {{flex : 1.4 , fontSize : 10 , fontWeight: "bold"}}>
                    {item.servicePlan}
                </Text>
                </View>}
                />
            </View>
        );
    }
}

export default PatientList;
