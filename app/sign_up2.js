import { View, Text, TextInput,  StyleSheet,Pressable,} from "react-native";
import { Link } from "expo-router";

import Button from './components/Button';

export default function Login() {
    const pickImageAsync = async () => {
        
        console.log('ads');
        
      };
    return(
    <View style={styles.container}>
        <Text style={{color: '#fff'}}>Hello there! Nice to meet you.</Text>
        <Text style={{color: '#fff'}}>What's your phone number?</Text>
        <TextInput 
        placeholder="Enter name"
        style={{backgroundColor: '#2a3845',
                padding: 20,
                margin: 20,}}
        />
        <Link href='/sign_up2'>
            <Button label="Done" />
        </Link>
        


    </View>
    ); 
}
const styles = StyleSheet.create({
    // Styles that are unchanged from previous step are hidden for brevity. 
    footerContainer: {
      flex: 1 / 3,
      alignItems: 'center',
    },container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
    },
    imageContainer: {
      flex: 1,
      paddingTop: 58,
    },
    image: {
      width: 320,
      height: 440,
      borderRadius: 18,
    },
  });