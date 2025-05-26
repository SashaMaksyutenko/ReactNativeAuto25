import {View, Text} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/header/component';
import {createStyles} from './booking.styles';

const BookingScreen = () => {
  const styles = createStyles();
  return (
    <View style={styles.container}>
      <HeaderComponent title="Booking Details" hasBack />
      <View style={styles.main}>
        <View style={styles.checkMarkContainer}>
          <View style={styles.line} />
          <View style={styles.checkMark}>
            <View style={styles.check}>
              <View style={styles.active} />
            </View>
            <Text style={styles.checkMarkText}>Booking details</Text>
          </View>
          <View style={styles.checkMark}>
            <View style={styles.check}>
              {/* <View style={styles.active} /> */}
            </View>
            <Text style={styles.checkMarkText}>Payment methods</Text>
          </View>
          <View style={styles.checkMark}>
            <View style={styles.check}>
              {/* <View style={styles.active} /> */}
            </View>
            <Text style={styles.checkMarkText}>confirmation</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text>hellow</Text>
        </View>
      </View>
    </View>
  );
};
export default BookingScreen;