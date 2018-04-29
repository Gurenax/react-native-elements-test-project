import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Header, Card, Button, ButtonGroup, Avatar, Text, ListItem } from 'react-native-elements'
import { Font } from 'expo'

export default class App extends React.Component {
  state = {
    fontLoaded: false,
    selectedIndex: null
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

  updateIndex (selectedIndex) {
    this.setState({
      selectedIndex: selectedIndex
    })
  }

  render() {
    const buttons = ['Menu 1', 'Menu 2', 'Menu 3']
    const list = [
      {
        title: 'Appointments',
        icon: 'av-timer'
      },
      {
        title: 'Trips',
        icon: 'flight-takeoff'
      },
      {
        title: 'Passwords',
        icon: 'fingerprint'
      },
      {
        title: 'Pitches',
        icon: 'lightbulb-outline'
      },
      {
        title: 'Updates',
        icon: 'update'
      }
      
    ]
    
    const { selectedIndex } = this.state

    return !!this.state.fontLoaded ? (
      <View style={styles.container}>
        
        {/* HEADER */}
        <View>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Glenn', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }} />

          <ButtonGroup
                onPress={this.updateIndex.bind(this)}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={{height: 40}}
              />
        </View>

        {/* BODY */}
        <ScrollView style={{flex: 1 /* Set Scrollview to 100% height */}}>
          
          {/* Avatar and Name */}
          <View style={{
            marginLeft: 15,
            marginTop: 10,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Avatar
              large
              title="GD"
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
            <Text h3
              style={{
                marginLeft: 10
              }}>Glenn Dimaliwat</Text>
          </View>

          {/* List */}
          <View style={{ marginTop: 10 }}>
            {
              list.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{ name: item.icon }}
                />
              ))
            }
          </View>
          
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

        {/* FOOTER */}
        <View style={{height: 50}}>
          <ButtonGroup
            onPress={this.updateIndex.bind(this)}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 50}}
          />
        </View>
      </View>
    ) : <View><Text>Loading...</Text></View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'//,
    // alignItems: 'center',
    // justifyContent: 'center'
  }
})
