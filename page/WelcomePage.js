import { StyleSheet, TouchableOpacity, Image, } from 'react-native'
import React, { Component } from 'react'
import { Center, Container, Heading, NativeBaseProvider, Box, Text, Avatar } from 'native-base';
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'

GoogleSignin.configure({
  webClientId: '361963500971-1m6vgs99f9qkc4fm0a7vr5dtkf98uq48.apps.googleusercontent.com',
});


export default function WelcomePage() {


  const onGoogleButtonPress = async () => {
    console.log("login");
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <NativeBaseProvider>
      <Center>
        <Container>
          <Box>
            <Heading size="2xl" ml='6%' mt='40%' mb="1%">
              T  A  L  I  T  A
            </Heading>

            <Text italic underline fontSize="sm" ml='10%'>
              welcome to the world of talent...
            </Text>

          </Box>

          <TouchableOpacity style={styles.black_button}>
            <Text bold color='error.50'>SIGN UP</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.black_button}>
            <Text bold color='error.50'>SIGN IN </Text>
          </TouchableOpacity>


          <Text fontSize="lg" marginLeft={'8%'} marginTop="180" >Login With Social Media ?</Text>

          <TouchableOpacity style={styles.googleButton} onPress={onGoogleButtonPress}>
            <Avatar alignSelf="center" bg="primary.50" size="md" source={{
              uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            }}>
            </Avatar>
          </TouchableOpacity>

          <TouchableOpacity style={styles.facebookButton}>
            <Avatar alignSelf="center" bg="primary.50" size="md" source={{
              uri: "https://www.seekpng.com/png/detail/365-3655298_fb-icon-circle-ltblue-facebook-logo-round-vector.png"
            }}>
            </Avatar>
          </TouchableOpacity>
        </Container>
      </Center>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  black_button: {
    marginTop: 110,
    marginBottom: -100,
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 10,
    elevation: 1,
    backgroundColor: 'black'
  },
  googleButton: {
    marginTop: 20,
    marginLeft: 60,
  },
  facebookButton: {
    marginTop: -50,
    marginLeft: 130,

  },
});
