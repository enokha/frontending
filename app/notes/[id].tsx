// app/notes/[id].tsx
import { View, StyleSheet, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';

import { items } from '@/assets/data';

const Note = () => {
    const { id } = useLocalSearchParams();
    const noteId = Array.isArray(id) ? id[0] : id;

    const note = items.find((item) => item.id === noteId);

    if (!note) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Note not found</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{note.title}</Text>
            <Text style={styles.body}>{note.body}</Text>
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
        padding: 20,
        backgroundColor: 'black',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    body: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
});

export default Note;
