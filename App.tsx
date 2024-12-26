import React from 'react';
import { Text, View } from 'react-native';


function App(): React.JSX.Element {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(data => console.log(data));
  return (
    <View>
      <Text>Hola22</Text>
    </View>
  );
}

export default App;
