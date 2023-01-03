import React, {useEffect} from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { firebaseAuth } from '../config';

export default function Loading({navigation}){

    useEffect(()=> {
        firebaseAuth.onAuthStateChanged(user => {
            navigation.navigate(user? 'Dashboard': 'Login')
        })
    }, []);

    return(
        <View style = {styles.container}>
            <Text style = {styles.textStyle}>Loading</Text>
            <ActivityIndicator size = 'large' style = {{marginTop: 20}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#000'
    },
    textStyle: {
        fontWeight: 'bold', 
        fontSize: 30, 
        color: '#fff'
    }
})