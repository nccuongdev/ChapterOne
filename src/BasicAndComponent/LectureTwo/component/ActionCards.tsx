import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCards() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headerTitle}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCards]}>
        <View style={styles.headingTitle}>
          <Text style={styles.title}>What's new Xcode 16</Text>
        </View>
        <Image
          source={{
            uri: 'https://developer.apple.com/xcode/images/xcode-15-hero-large_2x.webp',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyCard}>
          <Text style={styles.subTitle} numberOfLines={3}>
            Transform your ideas into code with predictive code completion and
            faster previews. Supercharge your builds with explicit modules. Get
            deeper insight into your ap'p's performance with improved
            diagnostics and the flame graph view in Instruments. And bring your
            app to even more people around the world with enhancements to
            localization Catalogs.
          </Text>
          <View style={styles.footerCard}>
            <TouchableOpacity
              onPress={() => openWebsite('https://developer.apple.com/xcode/')}
              style={styles.buttonLink}>
              <Text>Read more</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonLink}
              onPress={() =>
                openWebsite(
                  'https://developer.apple.com/videos/play/wwdc2024/10135/',
                )
              }>
              <Text>Learn about Xcode 16</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 4,
  },
  bodyCard: {
    padding: 12,
  },
  elevatedCards: {
    backgroundColor: '#3572EF',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 7,
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    textShadowRadius: 9,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFF',
    padding: 2,
  },
  cardImage: {
    height: 200,
  },
  headingTitle: {
    alignItems: 'center',
    padding: 4,
  },
  subTitle: {
    color: '#fff',
    fontSize: 16,
  },
  footerCard: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 8,
  },
  buttonLink: {
    backgroundColor: '#A7E6FF',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 8,
    color: '#fff',
  },
});
