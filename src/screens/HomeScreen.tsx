import React from 'react';
import {TextInput,Text,View,TouchableOpacity,StyleSheet,Button} from 'react-native';

export default function HomeScreen({navigation}){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F3F4F6' },
    text: { fontSize: 20, fontWeight: 'bold' }
});