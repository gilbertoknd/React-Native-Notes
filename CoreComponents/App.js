import { View, Button } from 'react-native';


export default function App() {
  return (
  <View style={{flex: 1, backgroundColor: "plum", padding: 60}}> 
    <Button 
      title="Press" 
      onPress={() => console.log("Apertou o botao")}
      color="green"
      disabled
    > 
      Submit 
    </Button>
  </View>
  );
}