import React, { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';

export default function App() {
  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./assets/stars.gif')}
        style={styles.backgroundImage}
      />
      <SafeAreaView style={styles.titulo}>
        <Text style={styles.paragraph}>
          Os melhores Plot twists de Todos os Tempos
        </Text>
      </SafeAreaView>
      <Image
        source={require('./assets/spoiler-alert.gif')}
        style={styles.imgCmc}
      />
      <FlatList
        data={arrayDados}
        renderItem={({ item, index }) => <ItemCard item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const ItemCard = ({ item }) => {
  const [show, setShow] = useState(false);

  return (
    <SafeAreaView style={styles.grupo}>
      <Image source={item.img} style={styles.imgP} />
      <Text style={styles.textos}>{show ? item.texto : 'Spoiler'}</Text>
      <View style={styles.containerBotao}>
        <TouchableOpacity style={styles.botao} onPress={() => setShow(!show)}>
          <Text style={styles.textoBotao}>
            {show ? 'Esconder Spoiler' : 'Mostrar Spoiler'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const largura = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 70,
    margin: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'white',
    fontFamily: 'BebasNeue_400Regular',
  },
  imgCmc: {
    marginLeft: 119,
    marginBottom: 20,
    width: 140,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgP: {
    width: 330,
    height: 270,
    margin: 50,
  },
  textos: {
    fontSize: 20,
    margin: 10,
    textAlig: 'center',
    backgroundColor: '#ff45',
    color: 'white',
    borderRadius: 50,
    padding: 10,
    marginBottom: 20,
  },
  grupo: {
    alignItems: 'center',
  },
  containerBotao: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
    borderRadius: 18,
    width: 220,
  },

  botao: {
    padding: 10,
    borderRadius: 5,
  },

  textoBotao: {
    color: 'black',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'BebasNeue_400Regular',
  },
});

const arrayDados = [
  {
    texto:
      'O Sexto Sentido (1999): O plot twist revela que o personagem principal, interpretado por Bruce Willis, é na verdade um fantasma.',
    img: require('./assets/sexto.jpg'),
  },
  {
    texto:
      'Oldboy (2003): Uma história de vingança. O antagonista sequestra o protagonista e o faz se apaixonar e transar com sua própria filha que ele não vê há anos por causa de seu confinamento. O protagonista decide tomar um remédio para esquecer de tudo.',
    img: require('./assets/oldboy.jpg'),
  },
  {
    texto:
      'Clube da Luta (1999): O protagonista descobre que ele e seu amigo (interpretado por Brad Pitt) são a mesma pessoa.',
    img: require('./assets/luta.png'),
  },
  {
    texto:
      'The Red Wedding - "Game of Thrones" (Temporada 3, Episódio 9): O casamento era uma conspiração para matar todos da família Stark.',
    img: require('./assets/casamento.png'),
  },
  {
    texto:
      'Os Outros (2001): A reviravolta revela que os supostos fantasmas na casa são, na verdade, os vivos, e a família da protagonista está assombrando os verdadeiros fantasmas.',
    img: require('./assets/outros.jpg'),
  },
  {
    texto:
      'Garota Exemplar (2014): A mulher que desapareceu planejou tudo e fez tudo para se vingar de seu marido que a traía.',
    img: require('./assets/garota.png'),
  },
  {
    texto:
      'Ilha do Medo (2010): O protagonista é na verdade um paciente do hospital e nada do que aconteceu era real. O parceiro policial do protagonista é na verdade seu cuidador.',
    img: require('./assets/medo.jpg'),
  },
  {
    texto:
      'A Vila (2004): O filme faz parece que tudo se passa em 1500, mas na verdade são os anos 2000 e não existem monstros. Os monstros são pessoas fantasiadas que causam esse medo para isolar a vila do resto do mundo.',
    img: require('./assets/vila.jpg'),
  },
  {
    texto:
      'O Planeta dos Macacos (1968): O protagonista descobre que o planeta em que estava era a Terra o tempo todo e não um planeta perdido no espaço.',
    img: require('./assets/planeta.jpeg'),
  },
  {
    texto:
      'O Nevoeiro (2007): O exército chega para matar os monstros do nevoeiro, mas o protagonista neste ponto já matou toda sua família.',
    img: require('./assets/nevoeiro.jpg'),
  },
];
