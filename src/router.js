import React from 'react';
import { DrawerRouter, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home/index.js';
import Detail from './pages/Detail/index.js';
import Checkout from './pages/Checkout/index.js';
import Feed from './pages/Feed/index.js';
import Store from './pages/Store/index.js';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen
            name="Home"
            component={Home}/>
            <Drawer.Screen
            name="Feed"
            component={Feed}/>
            <Drawer.Screen
            name="Store"
            component={Store}/>
        </Drawer.Navigator>
    );
}

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{headerShown: false}}
                />
                <Stack.Screen
                name="Detail"
                component={Detail}
                />
                <Stack.Screen
                name="Checkout"
                component={Checkout}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Routes;