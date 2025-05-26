import {View, Text, Switch} from 'react-native';
import React, {useState} from 'react';
import HeaderComponent from '../../components/header/component';
import {createStyles} from './booking.styles';
import StepperComponent from '../../components/stepper/component';
import {colors} from '../../theme/colors';
import {renderMarginBottom} from '../../utils/ui-utils';
import InputComponent from '../../components/input/component';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {scale} from '../../theme/scale';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const BookingScreen = () => {
  const styles = createStyles();
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  return (
    <View style={styles.container}>
      <HeaderComponent title="Booking Details" hasBack />
      <View style={styles.main}>
        <StepperComponent active={3} />
        {renderMarginBottom(6)}
        <View style={styles.switchContainer}>
          <View>
            <Text style={styles.bookTitle}>Book with driver</Text>
            <Text style={styles.bookText}>
              Don't have a driver? book with driver.
            </Text>
          </View>
          <Switch
            value={isSwitchOn}
            onValueChange={setIsSwitchOn}
            thumbColor={colors.black}
            trackColor={{
              false: colors.placeholder,
              true: colors.gray,
            }}
          />
        </View>
        {renderMarginBottom(12)}
        <InputComponent
          leftAction={
            <MaterialIcons
              name="person-outline"
              size={scale(22)}
              color={colors.placeholder}
            />
          }
          containerStyle={styles.inputContainer}
          placeholder="Full Name*"
          onChangeText={e => console.log(e)}
        />
        <InputComponent
          leftAction={
            <MaterialCommunityIcons
              name="email-outline"
              size={scale(22)}
              color={colors.placeholder}
            />
          }
          containerStyle={styles.inputContainer}
          placeholder="Email Address*"
          onChangeText={e => console.log(e)}
        />
        <InputComponent
          leftAction={
            <MaterialCommunityIcons
              name="phone-outline"
              size={scale(22)}
              color={colors.placeholder}
            />
          }
          containerStyle={styles.inputContainer}
          placeholder="Contact*"
          onChangeText={e => console.log(e)}
        />
      </View>
    </View>
  );
};

export default BookingScreen;