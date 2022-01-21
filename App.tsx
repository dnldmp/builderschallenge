import { StyleSheet, Text, View, Image } from 'react-native';
import { FooterComponent } from './src/components/footer';

export default function App() {
  const imageSource = require('./assets/sun.png')

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={[styles.text, {fontSize: 50}]}>Curitiba</Text>
          <Text style={[styles.text, {fontSize: 20}]}>Rua corbélia, 2376</Text>
        </View>
        <Image style={styles.climateImage} source={imageSource}/>
        <View>
          <Text style={[styles.text, styles.textBold, {fontSize: 75}]}>22 °C</Text>
          <Text style={[styles.text, styles.textBold, {fontSize: 55}]}>71 °F</Text>
        </View>
        <View>
          <Text style={[styles.text, {fontSize: 18, marginBottom: 25}]}>Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.</Text>
          <Text style={[styles.text, styles.textBold, {textTransform: 'uppercase', fontSize: 18}]}>ROBERTO SHINYASHIKI</Text> 
        </View>
      </View>
      <FooterComponent />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#1C2E68',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    color: '#ffffff',
  },
  textBold: {
    fontWeight: 'bold'
  },
  climateImage: {
    width: 220,
    height: 220
  }
});
