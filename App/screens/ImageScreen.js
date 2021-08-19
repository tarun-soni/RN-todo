import React from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native'
import colors from '../constants/colors'

const screen = Dimensions.get('window')

const styles = StyleSheet.create({
  logo: {},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
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
})
export default ImageScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
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
    </View>
  )
}
