import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native';

export default function Login(){
    return(
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Login</Text>
            <ActivityIndicator/>
        </View>
    )
}