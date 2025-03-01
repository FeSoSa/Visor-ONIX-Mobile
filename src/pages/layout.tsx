import React, { ReactNode } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {

  return (
    <SafeAreaView style={styles.background}>
      <StatusBar hidden={true} />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    color: "#FFF",
    backgroundColor: "#171717",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default Layout;