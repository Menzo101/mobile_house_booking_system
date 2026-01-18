import ScreenContainer from '@/components/ui/ScreenContainer';
import ScreenHeader from '@/components/ui/ScreenHeader';

import { View, Text, StyleSheet } from 'react-native';

const ListScreen = () => {
  return (
    <ScreenContainer fixedHeader={<ScreenHeader title="Semarang" />}>
      {[1, 2, 3].map(item => (
        <View key={item} style={styles.row}>
          <View style={styles.image} />
          <View>
            <Text style={styles.title}>De’ Aura – Exclusive Kost</Text>
            <Text style={styles.price}>Rp1.650.000 / month</Text>
          </View>
        </View>
      ))}
    </ScreenContainer>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    width: 90,
    height: 90,
    backgroundColor: '#DDD',
    borderRadius: 12,
    marginRight: 12,
  },
  title: {
    fontWeight: '600',
  },
  price: {
    marginTop: 6,
  },
});
