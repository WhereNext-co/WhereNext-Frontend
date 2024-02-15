import { View, Text } from "react-native"
import { Link } from "expo-router"

export default function Home() {
  return (
    <View>
      <Link href="/login">Start</Link>
    </View>
  )
}
