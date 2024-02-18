import { View, Text, TextInput,  StyleSheet,Pressable,} from "react-native";
import { Link } from "expo-router";

import Button from './components/Button';

export default function Login() {
    const pickImageAsync = async () => {
        
        console.log('ads');
        
      };
    return(
    <View style={styles.container}>
      
        <Text style={{color: '#fff',fontSize:30,marginTop: 50}}>Hello there! Nice to meet you.</Text>
        <Text style={{color: '#fff',fontSize:30,marginTop: 100}}>What's your name?</Text>
        <TextInput 
        placeholder="Enter name"
        style={styles.Folded}
        />
        <Link href='/sign_up2'>
            <Button label="Done" />
        </Link>
        <Link href='/login'>
            <Button label="Already have an account?" />
        </Link>
        <Link href='/'>
            <Button label="Sign in as guest" />
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
    Folded: {
      backgroundColor: '#202020',
      paddingHorizontal: 10,
      margin: 20,
      color: '#fff',
      height: 50,
      borderRadius:10,
      width: '50%'
    },
  });