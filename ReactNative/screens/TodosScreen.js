import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

class TodosScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            todos: []
        }
    }

    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/todos");
        const jsonData = await data.json();
        this.setState({todos: jsonData});
    }

    render(){
        const {todos} = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Todos</Text>
                <FlatList
                    keyExtractor={todo => todo.id.toString()}
                    data={todos}
                    renderItem={({item}) => (
                        <View style={[styles.itemContainer, item.completed && styles.completedItem]}>
                            <Text style={styles.itemId}>ID: {item.id}</Text>
                            <Text style={styles.userId}>User ID: {item.userId}</Text>
                            <Text style={[styles.itemTitle, item.completed && styles.completedText]}>
                                {item.title}
                            </Text>
                            <Text style={[styles.itemStatus, item.completed ? styles.statusComplete : styles.statusPending]}>
                                Status: {item.completed ? "✓ Completed" : "⊗ Pending"}
                            </Text>
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
                        onPress={() => this.props.navigation.navigate('Comments')}
                    >
                        <Text style={styles.buttonText}>Go to Comments →</Text>
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
        borderLeftColor: '#FF9500',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3
    },
    completedItem: {
        borderLeftColor: '#34C759',
        backgroundColor: '#f0fdf4'
    },
    itemId: {
        fontSize: 12,
        color: '#999',
        marginBottom: 5
    },
    userId: {
        fontSize: 12,
        color: '#666',
        marginBottom: 5
    },
    itemTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
        lineHeight: 20
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: '#999'
    },
    itemStatus: {
        fontSize: 12,
        fontWeight: '600',
        marginTop: 5
    },
    statusComplete: {
        color: '#34C759'
    },
    statusPending: {
        color: '#FF3B30'
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
        backgroundColor: '#FF9500',
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

export default TodosScreen;
