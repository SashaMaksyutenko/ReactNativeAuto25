import React from 'react';
import {Pressable, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BottomSheet} from '../../../components/bottomSheet/BottomSheet';
import {colors} from '../../../theme/colors';
import {scale} from '../../../theme/scale';
import {IFilterProps} from '../ISearch.props';
import {createStyles} from '../search.styles';
const FilterView = ({visible, setVisible}: IFilterProps) => {
  const styles = createStyles();
  return (
    <BottomSheet visible={visible} setVisible={setVisible}>
      <View style={styles.filterView}>
        <View style={styles.header}>
          <Pressable>
            <MaterialIcons
              name="close"
              size={scale(22)}
              color={colors.crossBg}
            />
          </Pressable>
          <Text style={styles.text}>Filters</Text>
          <View style={styles._f08} />
        </View>
      </View>
    </BottomSheet>
  );
};
export default FilterView;