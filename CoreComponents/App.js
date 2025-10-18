import { View, Text, Image, ImageBackground} from 'react-native';
const logoImg = require("./assets/adaptive-icon.png")

/* 
Por padrão a view ocupa apenas o espaço dos seus filhos, se não tiver nenhum filho, não ocupará nenhum lugar na tela.
Ao colocar o parâmetro flex: 1, ela ocupará o espaço disponível na tela
*/
export default function App() {
  return (
  <View style={{flex: 1, backgroundColor: "plum", padding: 60}}> 
    
    <Image source={logoImg} style={{width: 300, height: 300}} ></Image>
    
    <Image source={{uri:"https://picsum.photos/300"}} 
    style={{width: 300, height: 300}} >
    </Image>
    
    <ImageBackground source={logoImg} style={{flex:1}}>
      <Text>IMAGE TEXT</Text>
    </ImageBackground>

  </View>
  );
}