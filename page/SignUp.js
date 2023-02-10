import React, { useState } from 'react'
import { NativeBaseProvider, Stack, Input, Text, Button, Box, Center, Container,StyleSheet } from 'native-base'
import auth from '@react-native-firebase/auth';

export default function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const RegisterUser = async () => {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }
  return (
    <NativeBaseProvider>
      <Center>
        <Container>
         <Text color='#000000' marginLeft={'30%'} fontSize="3xl" bold  mt='40%'>SIGN UP</Text>
         <Input variant="rounded" marginTop={'25%'} value={email} onChangeText={txt => setEmail(txt)} placeholder="Email" />
         <Input variant="rounded" marginTop={'11%'} value={password} onChangeText={txt => setPassword(txt)} placeholder="Password" />
         <Input variant="rounded" marginTop={'11%'} value={confirmPassword} onChangeText={txt => setConfirmPassword(txt)} placeholder="Password Again" />
        <Button  mt='10' pr='10' pl='10' marginLeft='20' onPress={RegisterUser}>SIGN UP</Button>
        </Container>
      </Center>
   </NativeBaseProvider>
  )
}
