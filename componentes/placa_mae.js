import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function placa_mae() {
  return (
    <View style={styles.container}>
        <ScrollView>
      <Text style={styles.titulo}>Placa mãe</Text>
      <Text style={styles.texto}>A placa-mãe, também conhecida como motherboard, é um dos componentes mais fundamentais de um computador. Ela funciona como a espinha dorsal do sistema, conectando e permitindo a comunicação entre todos os outros componentes essenciais, como o processador CPU, memória RAM, armazenamento HD, SSD, placa de vídeo, entre outros. Sem ela, nenhum dos outros componentes funcionaria de forma integrada.

Uma das funções primárias da placa-mãe é fornecer as trilhas elétricas que permitem a comunicação entre os componentes do computador. Além disso, ela distribui energia elétrica, recebida da fonte de alimentação, para os diversos elementos conectados a ela. Por isso, ela tem slots específicos para cada tipo de dispositivo, como processadores, memórias, placas de expansão e até mesmo discos rígidos.

As entradas e saídas da placa-mãe, como portas USB, HDMI, Ethernet e conexões de áudio, são cruciais para a interação com dispositivos externos, permitindo a conexão de periféricos como teclado, mouse, impressora, monitores e muito mais.

Existem diferentes modelos de placa-mãe, com variações de tamanho, formato e características. Os formatos mais comuns são ATX, microATX e miniATX, sendo que o ATX é o maior e oferece mais slots de expansão, enquanto os modelos menores possuem menos opções, mas são ideais para computadores mais compactos. Além disso, a escolha do modelo de placa-mãe também depende da compatibilidade com o tipo de processador Intel ou AMD, por exemplo e a quantidade de memória RAM que o sistema precisa.

A qualidade e especificações da placa-mãe podem influenciar significativamente o desempenho do computador. Ela define a quantidade de memória RAM suportada, a quantidade de portas e slots de expansão, o tipo de conexão com a rede e a compatibilidade com outros componentes. Além disso, algumas placas-mãe oferecem recursos adicionais, como suporte a overclocking, Wi-Fi integrado, Bluetooth, entre outros.</Text>
<Image style={styles.img} source={require('../assets/placa-mae.png')}></Image>
</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize:20,
    textAlign: 'center',
    marginBottom: 10,
  },

  texto: {
    marginLeft:10,
    marginRight:10,
  },

  img: {
    width: 200,
    height: 200,
    marginBottom:100,
    justifyContent: 'center',
  }
});

