import React, { ReactNode } from 'react';
import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';

interface LayoutProps {
  children: ReactNode;
  backgroundImage?: string; // opcional: se não tiver, usa cor sólida
}

function Layout({ children, backgroundImage }: LayoutProps) {
  const Wrapper = backgroundImage ? ImageBackground : View;
  const wrapperProps = backgroundImage
    ? { source: { uri: backgroundImage }, resizeMode: 'cover' as const }
    : {};

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar hidden={true} />
      <Wrapper style={styles.background} {...wrapperProps}>
        {children}
      </Wrapper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#171717', // fallback se imagem falhar
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Layout;
