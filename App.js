//general imports
import {Text, SafeAreaView, StyleSheet} from "react-native";
import { View } from "react-native-web";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
//navegación
import Navigation from "./src/navigation";
//amplify
import Amplify from "aws-amplify";
import config from './src/aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native';

Amplify.configure(config);

//app
const App:() => Node = () => {
  return(
    <SafeAreaView style={styles.root}>
      <Navigation/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root:{
    height: '100%',
    width:'100%',
    backgroundColor: '#ECEFF1'
  }
});

//config para aws
const signUpConfig = {
  header: "My Customized Sign Up",
  hiddenDefaults: ['username','phone_number'],
  signUpFields: [
    {
      label: "Full name",
      key: "name",
      required: true,
      displayOrder: 1,
      type: "string",
    },
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 2,
      type: "string",
    },
    // {
    //   //label: "Username",
    //   key: "username",
    //   required: false,
    //   //displayOrder: false,
    //   //type: "string",
    // },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 4,
      type: "password",
    },
  ],
};


export default withAuthenticator(App, {signUpConfig});
