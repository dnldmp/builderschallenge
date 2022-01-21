import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

export function FooterComponent() {
  const refreshButtonIcon = require('../../../assets/refresh.png')

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.roundedButton} onPress={() => {}}>
            <Image source={refreshButtonIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#13173F',
    width: '100%',
    height: 100,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  background: {
    backgroundColor: '#1C2E68'
  },
  roundedButton: {
    marginTop: 10,
    backgroundColor: '#FFAE1B',
    width: 65,
    height: 65,
    alignItems: 'center',
    borderRadius: 1000,
    justifyContent: 'center'
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%'
  }
})
