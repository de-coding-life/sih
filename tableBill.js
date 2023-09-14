import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Redirect } from 'expo-router';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const TableBill = () => {
    const [TableData, setTableData] = useState([]);
    const [ItemName, setItemName] = useState('');
    const [ItemQ, setItemQ] = useState('');
    const [ItemP, setItemP] = useState('');
    const [Total, setTotal] = useState(0);
    const [Tax, setTax] = useState(0);
    const handleSubmit = () => {
        <Redirect href={"/home"} />
    };
    return (
        <ScrollView style={styles.container} >

            <Table borderStyle={{ borderWidth: 1, borderColor: '#ffa1d2' }}>
                <Row data={['Item Name', 'Quantity', 'Price']} flexArr={[7, 2, 2]} style={styles.HeadStyle} textStyle={styles.TableText} />
                <Rows data={TableData} flexArr={[7, 2, 2]} textStyle={styles.TableText} />
            </Table>
            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                <TextInput
                    style={{ ...styles.input, width: '70%' }}
                    placeholder="Item Name"
                    value={ItemName}
                    onChangeText={(text) => setItemName(text)}
                />
                <TextInput
                    style={{ ...styles.input, width: '20%' }}
                    placeholder="Item Quantity"
                    value={ItemQ}
                    onChangeText={(text) => setItemQ(text)}
                    keyboardType='numeric'
                />
                <TextInput
                    style={{ ...styles.input, width: '20%' }}
                    placeholder="Item Price"
                    value={ItemP}
                    onChangeText={(text) => setItemP(text)}
                    keyboardType='numeric'
                />
            </View>
            <Button
                onPress={() => {
                    if (ItemName == '' || ItemQ == '' || ItemP == '')
                        alert("Data cannot be added as some field are empty !");
                    else {
                        setTotal(Number(Total) + Number(ItemQ) * Number(ItemP));
                        setFTotal(Number(Total) + (Number(Tax) * Number(Total) / 100));
                        setTableData([...TableData, [ItemName, ItemQ, ItemP]]);
                        setItemName('');
                        setItemQ('');
                        setItemP('');
                    }

                }}
                title="Add"
                color="#841584"
            />
            <View style={{ alignItems: 'center' }}>
                <TextInput
                    style={{ ...styles.input, width: '50%' }}
                    placeholder="Tax ( in % ) "
                    value={Tax}
                    onChangeText={(text) => {
                        setTax(text);
                        setFTotal(Number(Total) + (Number(Tax) * Number(Total) / 100));
                    }}
                    keyboardType='numeric'
                />
                <Text style={styles.label}>Subtotal: Rs. {Total}</Text>
                <Text style={styles.label}>Tax: Rs. {Number(Total) * Number(Tax) / 100}</Text>
                <Text style={styles.label}>Total: Rs. {Number(Total) + Number(Total) * Number(Tax) / 100}</Text>
            </View>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 10,
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        margin: 10,
        textAlign: 'center'
    },
    heading: {
        fontSize: 16
    },
    HeadStyle: {
        height: 50,
        alignContent: "center",
        backgroundColor: '#ffe0f0'
    },
    TableText: {
        margin: 10
    }
});

export default TableBill;
