import {StatusBar} from 'expo-status-bar';
import React from 'react';
import { View, Text, TextInput, Button, Pressable, StyleSheet} from "react-native";
import { Link } from "expo-router";
import Icon from 'react-native-ico-material-design';

var iconHeight = 26;
var iconWidth = 26;

export default function Navbar() {
    return (
        <View style={StyleSheet.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Icon name="add-plus-button" height="40" width="40" />
            <StatusBar style='auto'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});