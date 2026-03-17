import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

class UsersScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const jsonData = await data.json();
        this.setState({users: jsonData});
    }

    render(){
        const {users} = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Users</Text>
                <FlatList
                    keyExtractor={user => user.id.toString()}
                    data={users}
                    renderItem={({item}) => (
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemId}>ID: {item.id}</Text>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemEmail}>{item.email}</Text>
                            <Text style={styles.itemPhone}>{item.phone}</Text>
                            <Text style={styles.itemCompany}>{item.company.name}</Text>
                        </View>
                    )}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.backButton}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Text style={styles.buttonText}>← Go Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.navButton}
                        onPress={() => this.props.navigation.navigate('Todos')}
                    >
                        <Text style={styles.buttonText}>Go to Todos →</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
        color: '#333'
    },
    itemContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
        marginVertical: 8,
        marginHorizontal: 5,
        borderLeftWidth: 4,
        borderLeftColor: '#007AFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3
    },
    itemId: {
        fontSize: 12,
        color: '#999',
        marginBottom: 5
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5
    },
    itemEmail: {
        fontSize: 13,
        color: '#0066cc',
        marginBottom: 5
    },
    itemPhone: {
        fontSize: 13,
        color: '#666',
        marginBottom: 5
    },
    itemCompany: {
        fontSize: 13,
        color: '#008000',
        fontWeight: '500'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        gap: 10
    },
    backButton: {
        flex: 1,
        backgroundColor: '#666',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    navButton: {
        flex: 1,
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600'
    }
});

export default UsersScreen;
