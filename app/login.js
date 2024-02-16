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
} from "native-base";

export default function Login() {
  const [phoneNum, setPhoneNum] = useState("");

  const onSetPhoneNum = (text) => setPhoneNum(text);

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Heading
          size="3xl"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          WhereNext
        </Heading>
        <Box safeArea p="2" py="8" w="90%" maxW="290">

          <VStack space={4} mt="5">
            <FormControl>
              <FormControl.Label>Phone Number</FormControl.Label>
              <Input value={phoneNum} onChangeText={onSetPhoneNum} />
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
