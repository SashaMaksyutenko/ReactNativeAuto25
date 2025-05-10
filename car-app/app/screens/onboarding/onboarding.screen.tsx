import {Image, ImageBackground, Text, View} from 'react-native';
import React from 'react';
import {createStyles} from './onboarding.styles';
import assets from '../../assets';
import Button from '../../components/button/component';
import {navigate} from '../../navigators/navigation-utilities';
const OnBoardingScreen = () => {
  const styles = createStyles();
  const {logo, overlayBg, whiteCar} = assets;
  return (
    <ImageBackground
      resizeMode="cover"
      source={whiteCar}
      style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={overlayBg}
        style={styles.overLay}>
        <View>
          <View style={styles.logoContainer}>
            <Image resizeMode="contain" source={logo} style={styles.carLogo} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome to</Text>
            <Text style={styles.title}>RentCar</Text>
          </View>
        </View>
        <Button
          onPress={() => navigate('onBoardingScreenTwo')}
          text="Get Started"
          buttonStyles={styles.buttonStyle}
          textStyles={styles.buttonText}
        />
      </ImageBackground>
    </ImageBackground>
  );
};
export default OnBoardingScreen;
