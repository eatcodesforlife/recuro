import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import {styled} from 'nativewind'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);

const SignIn = () => {
  return (
    <SafeAreaView>
      <Text>Sign-in</Text>
      <Link href="/(auth)/sign-up">Create Account</Link>
    </SafeAreaView>
  )
}

export default SignIn