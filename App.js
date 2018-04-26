import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, Card, Button } from 'react-native-elements'
import { Font } from 'expo'

export default class App extends React.Component {
  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    try {
      await Font.loadAsync({
        'LatoRegular': require('./assets/fonts/Lato-Regular.ttf')
      })
      this.setState({ fontLoaded: true })
    }
    catch (error) {
      console.error(error)
    }
  }

  render() {
    return !!this.state.fontLoaded ? (
      // <View style={styles.container}>
      <ScrollView>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Glenn', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }} />

        <Card
          title='HELLO WORLD'
          image={require('./assets/images/frenchie-small.jpg')}>
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            fontFamily='LatoRegular'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW'
            onPress={() => { console.log('View Now Pressed') }} />
        </Card>

        <Card
          title='HELLO WORLD'
          image={require('./assets/images/frenchie-small.jpg')}>
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            fontFamily='LatoRegular'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW'
            onPress={() => { console.log('View Now Pressed') }} />
        </Card>

        <Card
          title='HELLO WORLD'
          image={require('./assets/images/frenchie-small.jpg')}>
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            fontFamily='LatoRegular'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW'
            onPress={() => { console.log('View Now Pressed') }} />
        </Card>

      </ScrollView>
    ) : <View><Text>Loading...</Text></View>
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })
