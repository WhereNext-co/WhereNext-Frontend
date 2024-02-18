import { View, Text, TextInput, Button} from "react-native";
import { Link } from "expo-router";


export default function Login() {
    return(
    <View>
        <Text>Login Page</Text>
        <TextInput 
        placeholder="Username"
        style={{backgroundColor: '#FF0000',
                padding: 20,
                margin: 20,}}
        />
        <TextInput
        placeholder="Password"
        style={{backgroundColor: '#FF0000',
                padding: 20,
                margin: 20,}}
        />

        <Link href='/'>
            <Button title="Login" />
        </Link>

        <Link href='/sign_up'>
            <Button title="Sign Up" />
        </Link>

    </View>
    ); 
}