import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contact = [
    {
      uid: '1',
      name: 'Nguyễn Văn A',
      imageUrl:
        'https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png',
      phoneNumber: '0123456789',
      address: '123 Đường ABC, Quận 1, TP.HCM',
    },
    {
      uid: '2',
      name: 'Trần Thị B',
      imageUrl: 'https://cdn-icons-png.freepik.com/512/147/147142.png',
      phoneNumber: '0987654321',
      address: '456 Đường DEF, Quận 2, TP.HCM',
    },
    {
      uid: '3',
      name: 'Lê Văn C',
      imageUrl:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
      phoneNumber: '0345678901',
      address: '789 Đường GHI, Quận 3, TP.HCM',
    },
    {
      uid: '4',
      name: 'Phạm Thị D',
      imageUrl:
        'https://cdn.iconscout.com/icon/free/png-256/free-avatar-375-456327.png',
      phoneNumber: '0912345678',
      address: '101 Đường JKL, Quận 4, TP.HCM',
    },
    {
      uid: '5',
      name: 'Đỗ Văn E',
      imageUrl: 'https://cdn-icons-png.freepik.com/512/147/147144.png',
      phoneNumber: '0834567890',
      address: '202 Đường MNO, Quận 5, TP.HCM',
    },
  ];

  return (
    <View>
      <Text style={styles.headingTitle}>ContactList</Text>
      {contact.map(({uid, name, imageUrl, phoneNumber, address}) => (
        <View style={[styles.card, styles.elevatedCard]} key={uid}>
          <Image source={{uri: imageUrl}} style={styles.imageContact} />
          <View style={styles.infoContact}>
            <Text style={[styles.name, styles.textStyle]}>{name}</Text>
            <Text style={[styles.phone, styles.textStyle]}>{phoneNumber}</Text>
            <Text style={[styles.address, styles.textStyle]}>{address}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  headingTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    padding: 8,
  },
  card: {
    marginHorizontal: 8,
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 4,
  },
  elevatedCard: {
    backgroundColor: '#5A52FF',
  },
  imageContact: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
  infoContact: {
    flexDirection: 'column',
    marginLeft: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 12,
    fontWeight: '400',
  },
  address: {
    fontSize: 12,
  },
  textStyle: {color: '#FFF'},
});
