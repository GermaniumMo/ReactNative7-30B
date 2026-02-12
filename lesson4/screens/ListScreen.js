import React from "react";
import { Text, StyleSheet, View, FlatList} from "react-native";

const students = [
    {name: 'Jon', surname: 'Behra', age: '17'},
    {name: 'Leo', surname: 'Krasniqi', age: '16'},
    {name: 'Dion', surname: 'Ibrahimi', age: '17'},
    {name: 'Germanium', surname: 'Morina', age: '26'}
]

const ListScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>List of Students</Text>
            <FlatList
                data={students}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={student => student.name}
                renderItem={({item})=> {
                    return <Text style={styles.studentsWrapper}>{item.name} {item.surname} - {item.age}</Text>
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    textStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    studentsWrapper: {
        fontSize: 20,
        marginRight: 20,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        width: 300,
    },
});

export default ListScreen;