import ScreenContainer from '@/components/ui/ScreenContainer';
import ScreenHeader from '@/components/ui/ScreenHeader';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import  themeColors  from '@/styles/themeColors';

const ChatScreen = () => {
  return (
    <ScreenContainer
      scrollable={false}
      fixedHeader={<ScreenHeader title="De’ Aura – Owner" />}
    >
      <View style={styles.message}>
        <Text>Do you have rooms available?</Text>
      </View>

      <View style={styles.inputRow}>
        <TextInput placeholder="Message" style={styles.input} />
      </View>
    </ScreenContainer>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  message: {
    backgroundColor: themeColors.white,
    padding: 14,
    borderRadius: 14,
    marginTop: 20,
  },
  inputRow: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  input: {
    backgroundColor: themeColors.white,
    padding: 14,
    borderRadius: 14,
  },
});
