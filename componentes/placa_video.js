import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function placa_video() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Placa de video</Text>
      <Text style={styles.texto}>A placa de vídeo, também conhecida como placa gráfica ou GPU Graphics Processing Unit, é um componente essencial para a renderização de imagens e vídeos em um computador. Sua principal função é processar e gerar os gráficos que serão exibidos no monitor, permitindo que o usuário interaja com jogos, softwares de design gráfico, edição de vídeo e outras aplicações que exigem processamento gráfico intenso.

Diferentemente do processador central CPU, que é responsável por lidar com uma variedade de tarefas do sistema, a placa de vídeo é especializada em cálculos gráficos e operações relacionadas à visualização de imagens. Ela possui uma unidade de processamento dedicada, que realiza as operações de renderização, e memória própria VRAM para armazenar texturas, gráficos e outras informações necessárias para exibir imagens com alta qualidade e desempenho.

As placas de vídeo são fundamentais para atividades que envolvem gráficos 3D, como jogos de computador, simulações e modelagens, pois são capazes de processar grandes volumes de dados gráficos em alta velocidade. Além disso, elas também são utilizadas em tarefas de edição de vídeo e animações, onde o poder de processamento paralelo da GPU pode acelerar significativamente o trabalho.

Existem dois tipos principais de placas de vídeo: as integradas e as dedicadas. As placas integradas são aquelas que vêm embutidas na placa-mãe ou no próprio processador, compartilhando a memória RAM do sistema para realizar as operações gráficas. Embora sejam mais econômicas e suficientes para tarefas simples, como navegação na internet ou assistir a vídeos, elas não são ideais para jogos ou programas de design gráfico pesados.

Já as placas de vídeo dedicadas possuem um chip gráfico próprio e memória exclusiva, oferecendo desempenho muito superior.</Text>
<Image style={styles.img} source={require('../assets/placa-video.png')}></Image>
      <StatusBar style="auto" />
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
    marginBottom:10,
  },

  texto: {
    marginLeft:10,
    marginRight:10,
  },

  img: {
    width: 200,
    height: 200,
    marginBottom:150,
  }
});
