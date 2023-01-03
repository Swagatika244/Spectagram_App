import React, { useState } from 'react'
import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    TextInput, 
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    ScrollView
} from 'react-native';

export default function Login({navigation}){
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const handlePress = () => {
        console.log(Email, Password)
    }

    return(
        <KeyboardAvoidingView 
            style = {styles.container} 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle = {{alignItems: 'center', backgroundColor: '#000'}}>
                <Image 
                    source={require('../assets/logo2.png')}
                    style = {{width: 100, height: 100, marginBottom: 30}}
                    resizeMode = 'contain'
                />
                <Text style = {styles.titleStyle}>Spectagram</Text>
                <View style = {styles.textInputContainer}>
                    <TextInput
                        style = {styles.textInputStyle}
                        placeholder = 'Enter Email'
                        placeholderTextColor={'#666'}
                        value = {Email}
                        onChangeText = {text => setEmail(text)}
                        keyboardType = 'email-address'
                    />
                    <TextInput
                        style = {styles.textInputStyle}
                        placeholder = 'Enter Password'
                        placeholderTextColor={'#666'}
                        value = {Password}
                        onChangeText = {text => setPassword(text)}
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity style = {styles.buttonContainer} onPress = {handlePress}>
                    <Text style = {styles.buttonStyle}>Login</Text>
                </TouchableOpacity>
                <View style = {styles.signUpContainer}>
                    <Text style = {{color: '#fff'}}>Create a new account, </Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
                        <Text style = {{color: '#FFC600', fontWeight: 'bold'}}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        backgroundColor: '#000',
        paddingTop: 150
    },
    titleStyle : {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
    },
    textInputStyle: {
        backgroundColor: '#fff',
        width: Dimensions.get('screen').width * 0.77,
        borderRadius: 30,
        marginVertical: 22,
        height: 50,
        paddingLeft: 30,
        fontSize: 20
    },
    textInputContainer: {
        marginTop: 50
    },
    buttonContainer: {
        backgroundColor: '#9BD3DD',
        width: Dimensions.get('screen').width * 0.45,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 40
    },
    buttonStyle: {
        fontSize: 25,
        fontWeight: '900'
    },
    signUpContainer: {
        marginTop: 35,
        flexDirection: 'row'
    }
})