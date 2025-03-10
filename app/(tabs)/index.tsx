import { StyleSheet, FlatList } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import SimpleTextInput from '@/components/text-inputs/SimpleTextInput';

interface CheckboxSectionProps {
  title: String;
  isChecked: boolean;
  setChecked: (value: boolean) => void;
}

export default function HomeScreen(){
  
  return (
    <ThemedView style={styles.screenContainer}>

      <TitleSection/>
      <CheckboxSection/>
      
      
    </ThemedView>
  );
}

function TitleSection() {
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">To-do list</ThemedText>
    </ThemedView>
  );
}

const Item = ({title, isChecked, setChecked}: CheckboxSectionProps) => (
  <ThemedView style= {styles.section}>
      <Checkbox style= {styles.checkbox} value={isChecked} onValueChange={setChecked} />
      <ThemedText style= {styles.paragraph}> {title}</ThemedText>
  </ThemedView>
);

function CheckboxSection() {
  const [data, setData] = useState([
    { id: 1, txt: 'first check', isChecked: false },
    { id: 2, txt: 'second check', isChecked: false },
    { id: 3, txt: 'third check', isChecked: false },
  ]);
  const [isChecked, setChecked] = useState(false)
  const [itemName, setItemName] = useState("");
  
  return (
    <ThemedView style={styles.checkboxContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item
            title={item.txt}
            isChecked={item.isChecked}
            setChecked={() => {
              setData((prevData) =>
                prevData.map((el) =>
                  el.id === item.id ? { ...el, isChecked: !el.isChecked } : el
                )
              );
            }}
          />
        )}
        ListFooterComponent={
          <ThemedView style={styles.section}>
            <Checkbox style={styles.checkbox} value={false} disabled={true} />
            <SimpleTextInput
              value={itemName}
              onChangeText={setItemName}
              placeholder="adicione outro item..."
            />
          </ThemedView>
        }
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screenContainer:{
    flex: 1,
    padding: 25,
    paddingTop: 100,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  flatList: {
    maxHeight: 200, 
  },
  checkboxContainer: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 20,
  },
  checkbox: {
    margin: 8,
  },
});
