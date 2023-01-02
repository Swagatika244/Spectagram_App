import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";
import Loading from "../screens/Loading";
import Register from '../screens/Register';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Loader"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Loader" component={Loading}/>
            <Stack.Screen name="Dashboard" component={DrawerNavigator} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
