import React from "react";
import { 
    createDrawerNavigator, 
    DrawerContentScrollView, 
    DrawerItem, 
    DrawerItemList 
} from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";
import { firebaseAuth } from "../config";
import { Alert } from "react-native";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({navigation}) => {
    const handleSignOut = () => {
        console.log('sign out');
        firebaseAuth.signOut()
        .then(()=> navigation.navigate('Login'))
        .catch(error => Alert.alert('Opps!', error.message));
    }

    const CustomDrawerComponent = (props) => {
        return(
            <DrawerContentScrollView>
                <DrawerItemList {...props} />
                <DrawerItem label={'Log Out'} onPress = {handleSignOut}/>
            </DrawerContentScrollView>
        );
    }
    
    return (
        <Drawer.Navigator 
            drawerContent={(props) => <CustomDrawerComponent {...props}/>}
        >
            <Drawer.Screen name="Home" component={StackNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;