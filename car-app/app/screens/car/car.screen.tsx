import React from 'react';
import {Pressable, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HeaderComponent from '../../components/header/component';
import ImageSlider from '../../components/slider/component';
import {colors} from '../../theme/colors';
import {
  renderBorderBottom,
  renderMarginBottom,
  renderMarginTop,
} from '../../utils/ui-utils';
import {createStyles} from './car.styles';
import {scale} from '../../theme/scale';
import {Image} from 'react-native';
import assets from '../../assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/button/component';

const CarScreen = () => {
  const {person} = assets;
  const styles = createStyles();
  const data = [
    'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  return (
    <View style={styles.container}>
      <HeaderComponent title="Car Details" hasBack />
      <View style={styles.flex}>
        <ImageSlider images={data} />
        {renderMarginTop(12)}
        <View style={styles.main}>
          <View>
            <View style={styles.titleContainer}>
              <View style={styles.flex}>
                <Text style={styles.title}>Tesla Model S</Text>
                <Text style={styles.text}>
                  A car with high specs that are rented at an affordable price
                </Text>
              </View>
              <View>
                <View style={styles.reviewContainer}>
                  <Text style={styles.textBold}>5.0</Text>
                  <FontAwesome
                    name="star"
                    size={scale(18)}
                    color={colors.star}
                  />
                </View>
                <Text style={[styles.text]}>(100+ Reviews)</Text>
              </View>
            </View>
            {renderMarginBottom(12)}
            {renderBorderBottom(2)}
            {renderMarginTop(18)}
            <View style={styles.profile}>
              <View style={styles.cg14}>
                <Image source={person} style={styles.person} />
                <Text style={styles.ownerName}>John Doe</Text>
              </View>
              <View style={styles.cg14}>
                <Pressable style={styles.iconBorder}>
                  <Feather name="phone" size={scale(22)} color={colors.gray} />
                </Pressable>
                <Pressable style={styles.iconBorder}>
                  <AntDesign
                    name="message1"
                    size={scale(20)}
                    color={colors.gray}
                  />
                </Pressable>
              </View>
            </View>
            {renderMarginTop(18)}
            <View>
              <Text style={styles.title}>Car Features</Text>
              {renderMarginTop(12)}
              <View style={styles.cg14}>
                <Pressable style={styles.featureContainer}>
                  <Pressable style={styles.featureBorder}>
                    <MaterialCommunityIcons
                      name="car-seat"
                      color={colors.gray}
                      size={scale(20)}
                    />
                  </Pressable>
                  <View>
                    <Text style={styles.featureTitle}>Capacity</Text>
                    <Text style={styles.featureInfo}>5 Seats</Text>
                  </View>
                </Pressable>
                <Pressable style={styles.featureContainer}>
                  <Pressable style={styles.featureBorder}>
                    <MaterialCommunityIcons
                      name="car-seat"
                      color={colors.gray}
                      size={scale(20)}
                    />
                  </Pressable>
                  <View>
                    <Text style={styles.featureTitle}>Capacity</Text>
                    <Text style={styles.featureInfo}>5 Seats</Text>
                  </View>
                </Pressable>
                <Pressable style={styles.featureContainer}>
                  <Pressable style={styles.featureBorder}>
                    <MaterialCommunityIcons
                      name="car-seat"
                      color={colors.gray}
                      size={scale(20)}
                    />
                  </Pressable>
                  <View>
                    <Text style={styles.featureTitle}>Capacity</Text>
                    <Text style={styles.featureInfo}>5 Seats</Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
          <Button text="Book Now" />
        </View>
      </View>
    </View>
  );
};
export default CarScreen;