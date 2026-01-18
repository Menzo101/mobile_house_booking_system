import React, { ReactNode } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import themeColors from '@/styles/themeColors';

interface ScreenContainerProps {
  children: ReactNode;
  fixedHeader?: ReactNode;
  scrollable?: boolean;
  paddingHorizontal?: number;
}

const HEADER_HEIGHT = 50;

const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  fixedHeader,
  scrollable = true,
  paddingHorizontal = 20,
}) => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ExpoStatusBar style="dark" />

      {fixedHeader && (
        <View style={styles.header}>
          {fixedHeader}
        </View>
      )}

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {scrollable ? (
          <ScrollView
            contentContainerStyle={[
              styles.scrollContent,
              {
                paddingHorizontal,
                paddingTop: fixedHeader ? HEADER_HEIGHT + 12 : 12,
              },
            ]}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        ) : (
          <View
            style={[
              styles.content,
              {
                paddingHorizontal,
                paddingTop: fixedHeader ? HEADER_HEIGHT + 12 : 12,
              },
            ]}
          >
            {children}
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: themeColors.background,
  },
  flex: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: themeColors.white,
    borderBottomWidth: 1,
    borderBottomColor: themeColors.border,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  content: {
    flex: 1,
  },
});
