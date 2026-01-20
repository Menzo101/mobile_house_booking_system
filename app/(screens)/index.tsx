import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'expo-router';
import ScreenContainer from '@/components/ui/ScreenContainer';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import themeColors from '@/styles/themeColors';
import { Heart, Star, Search } from 'lucide-react-native';
import { houseImages, cityImages } from '@/data/house.ts';

const tabs = ['Popular', 'Promo', 'Newcomer', 'Luxury', 'Top Rated'];

export default function HomeScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Popular');

  
  const scrollRef = useRef<ScrollView>(null);
  const currentIndex = useRef(0);

  const CARD_WIDTH = 280 + 18; 

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex.current += 1;

      if (currentIndex.current >= houseImages.length) {
        currentIndex.current = 0;
      }

      scrollRef.current?.scrollTo({
        x: currentIndex.current * CARD_WIDTH,
        animated: true,
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ScreenContainer>
      <Text style={styles.subtitle}>Good Morning, Dew</Text>
      <Text style={styles.description}>Cozy kost, just for you</Text>

      <TouchableOpacity
        style={styles.searchBar}
        onPress={() => router.push('/listscreen')}
      >
        <Search size={18} color={themeColors.muted} />
        <Text style={styles.searchText}>Where do you want to stay?</Text>
      </TouchableOpacity>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardScroll}
        snapToInterval={CARD_WIDTH}
        decelerationRate="fast"
        scrollEventThrottle={16}
      >
        {houseImages.map((img, index) => (
          <TouchableOpacity
            key={index}
            style={styles.kostCard}
            activeOpacity={0.9}
            onPress={() => router.push('/detailscreen')}
          >
            <View style={styles.imageWrapper}>
              <Image source={img} style={styles.houseImage} />

              <TouchableOpacity
                style={styles.loveIcon}
                onPress={() => console.log('liked', index)}
              >
                <Heart size={18} color={themeColors.primary} />
              </TouchableOpacity>
            </View>

            <Text style={styles.kostTitle}>De’ Aura – Exclusive Kost</Text>

            <View style={styles.ratingRow}>
              <Star size={14} color="#F5A623" fill="#F5A623" />
              <Text style={styles.ratingText}>4.9</Text>
              <Text style={styles.reviewText}>(324)</Text>
            </View>

            <Text style={styles.kostLocation}>Tembalang, Semarang</Text>
            <Text style={styles.kostPrice}>Rp1.650.000 / month</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Popular City */}
      <Text style={styles.sectionTitle}>Kost in Popular City</Text>

      <View style={styles.cityGrid}>
        <Image source={cityImages.jakarta} style={styles.cityTall} />

        <View style={styles.cityMiddle}>
          <Image source={cityImages.semarang} style={styles.citySmall} />
          <Image source={cityImages.bali} style={styles.citySmall} />
        </View>

        <Image source={cityImages.jogja} style={styles.cityTall} />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: themeColors.textPrimary,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  description: {
    color: themeColors.textSecondary,
    fontSize: 16,
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: themeColors.white,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: themeColors.border,
    marginBottom: 20,
  },
  searchText: {
    color: themeColors.muted,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 22,
    backgroundColor: themeColors.white,
    borderWidth: 1,
    borderColor: themeColors.border,
    marginRight: 12,
    marginBottom: 22,
  },
  activeTab: {
    backgroundColor: themeColors.primary,
    borderColor: themeColors.primary,
  },
  tabText: {
    fontSize: 14,
    color: themeColors.textSecondary,
  },
  activeTabText: {
    color: themeColors.white,
    fontWeight: '600',
  },
  cardScroll: {
    paddingRight: 20,
    marginBottom: 20,
  },
  kostCard: {
    width: 300,
    backgroundColor: themeColors.white,
    borderRadius: 15,
    marginRight: 18,
    padding: 14,
  },
  imageWrapper: {
    position: 'relative',
  },
  houseImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  loveIcon: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
  },
  kostTitle: {
    fontWeight: '600',
    fontSize: 15,
    marginTop: 10,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  ratingText: {
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 4,
  },
  reviewText: {
    fontSize: 13,
    color: themeColors.textSecondary,
    marginLeft: 4,
  },
  kostLocation: {
    fontSize: 13,
    color: themeColors.textSecondary,
    marginVertical: 4,
  },
  kostPrice: {
    fontWeight: '600',
    color: themeColors.primary,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 10,
  },
  cityGrid: {
    flexDirection: 'row',
    gap: 10,
  },
  cityTall: {
    width: 110,
    height: 240,
    borderRadius: 10,
  },
  cityMiddle: {
    justifyContent: 'space-between',
  },
  citySmall: {
    width: 120,
    height: 115,
    borderRadius: 10,
  },
});
