// app/index.tsx
import { View, StyleSheet, TouchableOpacity, FlatList, Text } from 'react-native';
import { RelativePathString, router } from 'expo-router';
import React from 'react';

// Importing the data
import { items } from '@/assets/data';

interface Item {
    id: string;
    title: string;
    body: string;
}

const Index = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notes App</Text>
            <FlatList
                data={items}
                keyExtractor={(item: Item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => router.push(`notes/${item.id}` as RelativePathString)}
                    >
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <Text style={styles.cardBody}>{item.body}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#222021',
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    cardBody: {
        fontSize: 16,
        color: 'white',
    },
});

export default Index;
