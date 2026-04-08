import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignUp = () => {
  return (
    <View>
      <Text>Creat Account</Text>
      <Link href="/(auth)/sign-up">Sign In</Link>
      <Link href="/"> Home </Link>
    </View>
  )
}

export default SignUp