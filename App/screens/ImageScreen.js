import React from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'
import colors from '../constants/colors'
import { Entypo } from '@expo/vector-icons'

const screen = Dimensions.get('window')

const styles = StyleSheet.create({
  logo: {},
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBackground: {
    width: screen.width / 0.4,
    height: screen.width * 0.4,
  },
  logo: {
    position: 'absolute',
    width: screen.width * 0.2,
    height: screen.width * 0.2,
  },
  header: {
    alignItems: 'flex-end',
    marginHorizontal: 30,
  },
})

export default ImageScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <SafeAreaView style={styles.header}>
        <TouchableOpacity onPress={() => navigation.push('TodoScreen')}>
          <Entypo name="cog" size={32} color={colors.lightBlue} />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.logoContainer}>
        <Image
          style={[styles.logoBackground]}
          source={require('../assets/images/background.png')}
          resizeMode="contain"
        />
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  )
}
