import { View, Text } from 'react-native'
import React from 'react'
import { Link, Href } from 'expo-router'
import {styled} from 'nativewind'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);

const SignUp = () => {
  return (
    <SafeAreaView>
      <Text>Creat Account</Text>
      <Link href="/(auth)/sign-up">Sign In</Link>
      <Link href={"/" as Href}>Go Home</Link>
    </SafeAreaView>
  )
}

export default SignUp