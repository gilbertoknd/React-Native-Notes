import { View } from 'react-native';

/* 
Por padrão a view ocupa apenas o espaço dos seus filhos, se não tiver nenhum filho, não ocupará nenhum lugar na tela.
Ao colocar o parâmetro flex: 1, ela ocupará o espaço disponível na tela
*/
export default function App() {
  return <View style = {{flex: 1, backgroundColor: "plum"}}>
    <View style = {{height: 200, width: 200, backgroundColor: "lightblue"}}>
    </View>

    <View style = {{height: 300, width: 300, backgroundColor: "lightgreen"}}>
    </View>
  </View>
}