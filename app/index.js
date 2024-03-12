import { Link } from "expo-router"
import { NativeBaseProvider, Text, Box } from "native-base"

export default function Home() {
  return (
    <NativeBaseProvider>
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        justifyContent="center"
        alignItems="center"
      >
        <Link href="/login">
          <Box bg="#fff" width="100px" height="50px" borderRadius={5}>
            <Text margin="auto">Login</Text>
          </Box>
        </Link>
      </Box>
    </NativeBaseProvider>
  )
}
