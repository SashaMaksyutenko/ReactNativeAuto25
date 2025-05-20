import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import CarComponent from '../../components/car/component';
import CarBrandComponent from '../../components/carBrand/component';
import HeaderComponent from '../../components/header/component';
import SearchComponent from '../../components/search/component';
import {createStyles} from './search.styles';
import CarActions from './view/carActions.view';

const SearchScreen = () => {
  const styles = createStyles();

  return (
    <View style={styles.container}>
      <HeaderComponent title="Search" hasBack />
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}>
        <SearchComponent />
        <View style={[styles.showCase, styles.p18]}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal
            data={[1, 2, 3, 4, 5]}
            renderItem={({item}) => (
              <CarBrandComponent
                item={item}
                text="Tesla"
                isHorizontal
                isSelected={1}
              />
            )}
          />
        </View>
        <View style={[styles.showCaseCars, styles.p18]}>
          <View style={styles.viewContainer}>
            <Text style={styles.text}>Recommend For You</Text>
            <Text style={styles.viewAll}>View All</Text>
          </View>
          <View style={styles.flexRow}>
            <CarComponent bottomActions={<CarActions />} />
            <CarComponent bottomActions={<CarActions />} />
          </View>
          <View style={styles.flexRow}>
            <CarComponent bottomActions={<CarActions />} />
            <CarComponent bottomActions={<CarActions />} />
          </View>
          <View style={styles.flexRow}>
            <CarComponent bottomActions={<CarActions />} />
            <CarComponent bottomActions={<CarActions />} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;