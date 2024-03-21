import React, { useState, useRef } from 'react';
import {
    SafeAreaView,
    View,
    StatusBar,
    TouchableOpacity,
    Text,
  } from "react-native";
import PhoneInput from 'react-native-phone-number-input';

export default function PhoneNumInput() {
    // Initialize state variables
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    // Initialize ref
    const phoneInput = useRef<PhoneInput>(null);

    return (
        <>
        <StatusBar barStyle="dark-content" />
        <View>
          <SafeAreaView>
            <PhoneInput
            defaultValue= {value}
            defaultCode="TH"
            onChangeText={(text) => {
                setValue(text);
              }}
              onChangeFormattedText={(text) => {
                setFormattedValue(text);
              }} />
          </SafeAreaView>
        </View>
      </>
    );
}
