import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";

class PhotosScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            photos: []
        }
    }

    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/photos");
        const jsonData = await data.json();
        this.setState({photos: jsonData});
    }

    render(){
        const {photos} = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Photos</Text>
                <FlatList
                    keyExtractor={photo => photo.id.toString()}
                    data={photos}
                    renderItem={({item}) => (
                        <View style={styles.itemContainer}>
                            <Image 
                                source={{ uri: item.thumbnailUrl }} 
                                style={styles.thumbnail}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.itemId}>Photo #{item.id}</Text>
                                <Text style={styles.albumId}>Album ID: {item.albumId}</Text>
                                <Text style={styles.itemTitle} numberOfLines={2}>{item.title}</Text>
                                <Text style={styles.url} numberOfLines={1}>{item.url}</Text>
                            </View>
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
                        onPress={() => this.props.navigation.navigate('Menu')}
                    >
                        <Text style={styles.buttonText}>Go to Menu →</Text>
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
        flexDirection: 'row',
        borderLeftWidth: 4,
        borderLeftColor: '#FF6B6B',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3
    },
    thumbnail: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 12,
        backgroundColor: '#e0e0e0'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    itemId: {
        fontSize: 12,
        color: '#999',
        marginBottom: 4,
        fontWeight: '600'
    },
    albumId: {
        fontSize: 12,
        color: '#666',
        marginBottom: 6
    },
    itemTitle: {
        fontSize: 13,
        fontWeight: '600',
        color: '#333',
        marginBottom: 6,
        lineHeight: 16
    },
    url: {
        fontSize: 11,
        color: '#0066cc',
        fontStyle: 'italic'
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
        backgroundColor: '#FF6B6B',
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

export default PhotosScreen;
