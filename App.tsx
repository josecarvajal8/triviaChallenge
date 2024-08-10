import React from 'react';
import {SafeAreaView, Text} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text style={{fontFamily: 'Montserrat-Regular'}}>{'Hello'}</Text>
      <Text style={{fontFamily: 'Montserrat-Bold'}}>{'Hello'}</Text>
      <Text style={{fontFamily: 'Montserrat-Light'}}>{'Hello'}</Text>
    </SafeAreaView>
  );
}

export default App;
