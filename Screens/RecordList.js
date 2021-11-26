import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { DataTable } from 'react-native-paper';

import {View, Text, StyleSheet, FlatList} from 'react-native';

class RecordList extends React.Component{
    static propTypes ={
        records: PropTypes.array.isRequired,
    };
    render(){
        return(
            <View >
                <DataTable >
                    <DataTable.Header >
                    <DataTable.Title style={{flex: 2}}>Date & Time</DataTable.Title>
                    <DataTable.Title style={{flex: 2.5}}>Type of Data</DataTable.Title>
                    <DataTable.Title style={{flex: 2}}>Reading/Value</DataTable.Title>
                    </DataTable.Header>
                </DataTable>

                <FlatList 
                data={this.props.records}
                renderItem={({item}) =>
                <View style= {{flex : 5 , flexDirection : 'row' }}>
                    <Text style = {{flex : 1.6 }}>
                        {Moment(item.dateTime).format('L')}
                        </Text>
                        <Text style = {{flex : 2 }}>
                        {item.category}
                        </Text>

                        <Text style = {{flex : 1.4 , fontSize : 10 , fontWeight: "bold"}}>
                        {item.readings.singleValue}
                    </Text>
                </View>}
                />
            </View>
        );
    }
}

export default RecordList;
