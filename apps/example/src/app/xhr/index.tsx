import { Button, StyleSheet, View } from 'react-native';

export default function XHRView() {
  return (
    <View style={styles.container}>
      <Button
        title="Get Products"
        onPress={() => {
          fetch('https://dummyjson.com/products').then((res) => console.log('test', res));
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
