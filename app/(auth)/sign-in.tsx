import { Href, Link } from 'expo-router';
import { styled } from 'nativewind';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);

const SignIn = () => {
  return (
    <SafeAreaView>
      <Text>Sign-in</Text>
      <Link href="/(auth)/sign-up">Create Account</Link>
      <Link href={"/" as Href}>Go Home</Link>
    </SafeAreaView>
  )
}

export default SignIn