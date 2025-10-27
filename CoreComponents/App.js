import { useState } from 'react';
import { View, Button, Modal, Text } from 'react-native';


export default function App() {
  //{Constante para controlar a visibilidade do Modal}
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
  <View style={{flex: 1, backgroundColor: "plum", padding: 60}}> 
    {/*Ao pressionar, seta a const para true, ativando o modal*/}
    <Button title='Ativando o Modal' onPress={() => setIsModalVisible(true)} />
    
    <Modal visible={isModalVisible}>
      <View style={{flex: 1, backgroundColor: "skyblue", padding: 60}}>
        <Text>Conteudo do Modal</Text>
        {/*Ao pressionar, seta a const para false, desativando o modal*/}
        <Button title='Fechar Modal' onPress={() => setIsModalVisible(false)} />
      </View>
    </Modal>

  </View>
  );
}