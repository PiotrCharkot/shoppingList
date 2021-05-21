import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import {v4 as uuidv4} from 'uuid';

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'milk'},
    {id: uuidv4(), text: 'butter'},
    {id: uuidv4(), text: 'juice'},
    {id: uuidv4(), text: 'bread'},
  ]);

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Entert item', [{text: 'OK'}]);
    } else {
      const newThings = [...items, {id: uuidv4(), text}];
      setItems(newThings);
    }
  };

  const deleteItem = (id) => {
    const newThings = items.filter((item) => item.id !== id);
    setItems(newThings);
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'black',
  },
});

export default App;
