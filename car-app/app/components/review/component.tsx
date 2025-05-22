import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {createStyles} from './review.styles';
import assets from '../../assets';

const ReviewComponent = () => {
  const styles = createStyles();
  const {person} = assets;
  return (
    <Pressable>
      <View style={styles.frcg}>
        <Image source={person} style={styles.person} resizeMode="contain" />
        <Text style={styles.reviewTitle}>John Doe</Text>
      </View>
    </Pressable>
  );
};

export default ReviewComponent;