import { useState } from "react";
import {
  NativeBaseProvider,
  FormControl,
  Box,
  Center,
  Input,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Link,
  WarningOutlineIcon,
} from "native-base";


export default function Login() {
  const [phoneNum, setPhoneNum] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const [isError, setIsError] = useState(false);


  const setPhoneNumHandler = (text) => {
    setPhoneNum(text);
    if (text.length == 0) {
      seterrorMessage("Please input something");
      setIsError(true);
    } else if (isNaN(text)) {
      seterrorMessage("Enter only number");
      setIsError(true);
    }
  }

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Heading>Login</Heading>
        <Box>
          <VStack space={4} mt="5">
            <FormControl isInvalid={isError}>
              <FormControl.Label>Phone Number</FormControl.Label>
              <Input value={phoneNum} onChangeText={setPhoneNumHandler}/>
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                {errorMessage}
              </FormControl.ErrorMessage>
            </FormControl>
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
            <Text>{phoneNum}</Text>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
