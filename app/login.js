import { useState } from "react";
import { View, Text } from "react-native";
import {
  NativeBaseProvider,
  Box,
  Center,
  Heading,
  VStack,
  HStack,
  Button,
  Link,
} from "native-base";
import PhoneNumInput  from '../components/PhoneNumInput';


export default function Login() {


  return (
   <NativeBaseProvider>
      <Center flex={1}>
        <Heading>Login</Heading>
        <Box>
          <VStack space={4} mt="5">
            <PhoneNumInput /> 
            <Button mt="10px" colorScheme="indigo">
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                I'm a new user.{" "}
              </Text>
              <Link
                _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                href="#"
              >
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider> 
  );
}
