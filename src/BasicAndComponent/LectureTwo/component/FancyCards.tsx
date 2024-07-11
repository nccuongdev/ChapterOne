import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headerTitle}>FancyCards</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://image.nhandan.vn/w800/Uploaded/2024/kplbaob/2022_12_25/anh-1-nuicam-5964.jpg.webp',
          }}
          style={styles.cardImage}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Núi Cấm (Thiên Cấm Sơn)</Text>
          <Text style={styles.cardLable}>
            Núi Cấm nằm trên địa bàn xã An Hảo,thị xã Tịnh Biên
          </Text>
          <Text style={styles.cardShortDes}>
            Là ngọn núi cao nhất trong dãy Thất Sơn với 715m so với mặt nước
            biển (vùng Bảy Núi), tỉnh An Giang, Núi Cấm hay còn gọi Thiên Cấm
            Sơn không chỉ kỳ vĩ về cảnh sắc “bồng lai tiên cảnh”, mà còn chứa
            đựng nhiều câu chuyện huyền bí. Nơi đây là một trong những điểm du
            lịch tâm linh hành hương nổi tiếng của tỉnh An Giang.
          </Text>
          <Text style={styles.cardFooter}>Cách bạn 60 km</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardImage: {
    height: 180,
    borderRadius: 4,
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 4,
  },
  cardElevated: {
    backgroundColor: 'lightblue',
    elevation: 9,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: 'gray',
    shadowRadius: 2,
    shadowOpacity: 0.4,
  },
  cardBody: {
    padding: 12,
    alignItems: 'flex-start',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 2,
  },
  cardLable: {
    fontSize: 10,
    color: 'gray',
    textDecorationStyle: 'solid',
  },
  cardShortDes: {
    paddingTop: 8,
    fontSize: 13,
    fontWeight: 'light',
  },
  cardFooter: {
    fontSize: 10,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    padding: 8,
  },
});
