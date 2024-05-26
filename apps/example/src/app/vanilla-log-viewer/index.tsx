import { Button, StyleSheet, View } from 'react-native';

export default function VanillaLogView() {
  return (
    <View style={styles.container}>
      <Button
        title="Send console.log"
        onPress={() => {
          console.log('Hello');
        }}
      />
      <Button
        title="Send console.log number"
        onPress={() => {
          console.log(152);
        }}
      />
      <Button
        title="Send console.log boolean"
        onPress={() => {
          console.log(true);
        }}
      />
      <Button
        title="Send console.log with extra arguments"
        onPress={() => {
          console.log('Hello', 'World', new Date().toISOString());
        }}
      />
      <Button
        title="Send console.log with object and extra argument"
        onPress={() => {
          console.log('Hello', 'World', new Date().toISOString(), {
            hello: 'world',
            hi: ['bonjour', 'salut'],
          });
        }}
      />
      <Button
        title="Send console.log with object"
        onPress={() => {
          console.log({
            hello: 'world',
            hi: ['bonjour', 'salut'],
          });
        }}
      />
      <Button
        title="Send console.log with complexe object"
        onPress={() => {
          console.log({
            test: 212,
            oo: ['dldk', 'lkl'],
            ee: [{ dkdk: 'lkdl', ldl: 212 }],
            jj: { dkdk: 'lkdl', ldl: 212 },
            test2: 212,
            oo2: ['dldk', 'lkl'],
            ee2: [{ dkdk: 'lkdl', ldl: 212 }],
            jj2: { dkdk: 'lkdl', ldl: 212 },
            test3: 212,
            oo3: ['dldk', 'lkl'],
            ee3: [{ dkdk: 'lkdl', ldl: 212 }],
            jj3: { dkdk: 'lkdl', ldl: 212 },
            test4: 212,
            oo4: ['dldk', 'lkl'],
            ee4: [{ dkdk: 'lkdl', ldl: 212 }],
            jj4: { dkdk: 'lkdl', ldl: 212 },
            test5: 212,
            oo5: ['dldk', 'lkl'],
            ee5: [{ dkdk: 'lkdl', ldl: 212 }],
            jj5: { dkdk: 'lkdl', ldl: 212 },
          });
        }}
      />
      <Button
        title="Send console.warn"
        onPress={() => {
          console.warn('A warning should present as a yellow box in apps');
        }}
      />
      <Button
        title="Send console.error"
        onPress={() => {
          console.error(`Error happened at ${new Date().toISOString()}`);
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
