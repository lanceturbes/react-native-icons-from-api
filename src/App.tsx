import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {RemoteIcon} from './features/remote-icons';

const queryClient = new QueryClient();

export default function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.background}>
        <StatusBar barStyle="light-content" />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.background}>
          <View style={styles.container}>
            <Text style={{color: 'white'}}>Remote Icons</Text>
            <RemoteIcon
              fill="orange"
              stroke="white"
              size={256}
              iconName="deno"
            />
            <RemoteIcon
              fill="white"
              stroke="white"
              size={256}
              iconName="stag"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#202020',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
