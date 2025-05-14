import React from 'react';
import {BottomSheet} from '../bottomSheet/BottomSheet';
import {FlatList, Pressable, Text, View} from 'react-native';
import {createStyles} from './countrypicker.styles';
import {ICountryProps} from './ICountrypicker.props';
const countries = [
  {code: 'US', name: 'United States', flag: '🇺🇸', ph: '+1'},
  {code: 'GB', name: 'United Kingdom', flag: '🇬🇧', ph: '+44'},
  {code: 'FR', name: 'France', flag: '🇫🇷', ph: '+33'},
  {code: 'UA', name: 'Ukraine', flag: '🇺🇦', ph: '+380'},
  {code: 'DE', name: 'Germany', flag: '🇩🇪', ph: '+49'},
  {code: 'IT', name: 'Italy', flag: '🇮🇹', ph: '+39'},
  {code: 'ES', name: 'Spain', flag: '🇪🇸', ph: '+34'},
  {code: 'PL', name: 'Poland', flag: '🇵🇱', ph: '+48'},
  {code: 'NL', name: 'Netherlands', flag: '🇳🇱', ph: '+31'},
  {code: 'SE', name: 'Sweden', flag: '🇸🇪', ph: '+46'},
  {code: 'CH', name: 'Switzerland', flag: '🇨🇭', ph: '+41'},
  {code: 'BE', name: 'Belgium', flag: '🇧🇪', ph: '+32'},
  {code: 'AT', name: 'Austria', flag: '🇦🇹', ph: '+43'},
  {code: 'FI', name: 'Finland', flag: '🇫🇮', ph: '+358'},
  {code: 'DK', name: 'Denmark', flag: '🇩🇰', ph: '+45'},
  {code: 'NO', name: 'Norway', flag: '🇳🇴', ph: '+47'},
  {code: 'IE', name: 'Ireland', flag: '🇮🇪', ph: '+353'},
  {code: 'CZ', name: 'Czech Republic', flag: '🇨🇿', ph: '+420'},
  {code: 'SK', name: 'Slovakia', flag: '🇸🇰', ph: '+421'},
  {code: 'HU', name: 'Hungary', flag: '🇭🇺', ph: '+36'},
  {code: 'PT', name: 'Portugal', flag: '🇵🇹', ph: '+351'},
  {code: 'GR', name: 'Greece', flag: '🇬🇷', ph: '+30'},
  {code: 'RO', name: 'Romania', flag: '🇷🇴', ph: '+40'},
  {code: 'BG', name: 'Bulgaria', flag: '🇧🇬', ph: '+359'},
  {code: 'SI', name: 'Slovenia', flag: '🇸🇮', ph: '+386'},
  {code: 'LT', name: 'Lithuania', flag: '🇱🇹', ph: '+370'},
  {code: 'LV', name: 'Latvia', flag: '🇱🇻', ph: '+371'},
  {code: 'EE', name: 'Estonia', flag: '🇪🇪', ph: '+372'},
  {code: 'IS', name: 'Iceland', flag: '🇮🇸', ph: '+354'},
  {code: 'MT', name: 'Malta', flag: '🇲🇹', ph: '+356'},
  {code: 'CY', name: 'Cyprus', flag: '🇨🇾', ph: '+357'},
  {code: 'LU', name: 'Luxembourg', flag: '🇱🇺', ph: '+352'},
  {code: 'AL', name: 'Albania', flag: '🇦🇱', ph: '+355'},
  {code: 'RS', name: 'Serbia', flag: '🇷🇸', ph: '+381'},
  {code: 'ME', name: 'Montenegro', flag: '🇲🇪', ph: '+382'},
  {code: 'MK', name: 'North Macedonia', flag: '🇲🇰', ph: '+389'},
  {code: 'BA', name: 'Bosnia and Herzegovina', flag: '🇧🇦', ph: '+387'},
  {code: 'IN', name: 'India', flag: '🇮🇳', ph: '+91'},
];
const CountryComponent = ({onPress}: ICountryProps) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState(countries[0]);
  const styles = createStyles();
  return (
    <View>
      <Pressable
        onPress={() => setIsVisible(!isVisible)}
        style={styles.container}>
        <Text style={styles.text}>
          {selectedCountry?.flag}
          {'\t\t'}
          {selectedCountry?.name}
        </Text>
      </Pressable>
      <BottomSheet visible={isVisible} setVisible={setIsVisible}>
        <View style={styles.bottomSheet}>
          <FlatList
            data={countries}
            showsVerticalScrollIndicator={true}
            renderItem={({item}) => (
              <Pressable
                onPress={() => {
                  setSelectedCountry(item);
                  setIsVisible(false);
                  onPress(item);
                }}
                style={styles.itemContainer}>
                <Text style={styles.text}>
                  {item?.flag} {'\t\t'}
                  {item?.name}
                </Text>
              </Pressable>
            )}
          />
        </View>
      </BottomSheet>
    </View>
  );
};
export default CountryComponent;
