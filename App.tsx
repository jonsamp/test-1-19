import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text } from 'react-native';
import * as Updates from 'expo-updates';
import Constants from 'expo-constants';

// Constants.manifest2.extra.expoClient.extra.eas.API_URL
// but what will it be in a non expoClient context?

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style='auto' />
      <Text style={styles.text}>Build #2</Text>
      <Text style={styles.text}>
        Updates API_URL:{' '}
        {Updates.manifest?.extra?.expoClient?.extra?.eas?.API_URL}
      </Text>
      <Text style={styles.text}>---</Text>
      <Text style={styles.text}>
        Constants API_URL:{' '}
        {Constants.manifest2?.extra?.expoClient?.extra?.eas?.API_URL}
      </Text>
      <Text style={styles.text}>---</Text>
      <Text style={styles.text}>API_URL: {process.env.API_URL}</Text>
      <Text style={styles.text}>---</Text>
      <Text style={styles.text}>
        Updates: {JSON.stringify(Updates, null, 2)}
      </Text>
      <Text style={styles.text}>---</Text>
      <Text style={styles.text}>
        Updates keys: {JSON.stringify(Object.keys(Updates))}
      </Text>
      <Text style={styles.text}>---</Text>
      <Text style={styles.text}>
        Constants.manifest: {JSON.stringify(Constants.manifest, null, 2)}
      </Text>
      <Text style={styles.text}>---</Text>
      <Text style={styles.text}>
        Constants.manifest2: {JSON.stringify(Constants.manifest2, null, 2)}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 100,
    backgroundColor: '#000',
  },
  text: {
    color: '#ddd',
    fontFamily: 'Menlo',
  },
});
