import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

/*{
    id: 0,
    author: 'Omkar Godbole',
    title: 'Mike Pence: The rare times he made headlines',
    description:
      'In picking veteran politician Mike Pence as his vice-president in 2016, Donald Trump went with a safe choice that would also help secure him the evangelical Christian vote.',
    imageUrl:
      'https://ichef.bbci.co.uk/news/800/cpsprodpb/0104/production/_114106200_gettyimages-1219055296.jpg',
  }*/

const NewsCard = (props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: props.news.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{props.news.title}</Text>
      <Text>{props.news.description}</Text>
    </View>
  );
};

export {NewsCard};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#eceff1',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
    padding: 3,
  },
  description: {textAlign: 'justify'},
  image: {
    resizeMode: 'stretch',
    height: Dimensions.get('window').height * 0.25,
    borderRadius: 5,
  },
});
