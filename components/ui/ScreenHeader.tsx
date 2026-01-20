import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import themeColors from '@/styles/themeColors';
import { useRouter } from 'expo-router';

interface ScreenHeaderProps {
  title: string;
  showBack?: boolean;
  rightComponent?: React.ReactNode;
}

const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  title,
  showBack = true,
  rightComponent,
}) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {showBack ? (
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.side}
        >
          <ArrowLeft size={24} color={themeColors.textPrimary} />
        </TouchableOpacity>
      ) : (
        <View style={styles.side} />
      )}

      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>

      <View style={styles.side}>
        {rightComponent}
      </View>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  side: {
    width: 32,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: themeColors.textPrimary,
  },
});
