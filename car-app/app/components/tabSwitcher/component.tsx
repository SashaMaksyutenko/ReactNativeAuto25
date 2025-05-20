import React, {useState} from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import {renderMarginBottom} from '../../utils/ui-utils';
import {ITabProps} from './ITab.props';
import {createStyles} from './tab.styles';

const TabSwitcher = ({title, data, onPress}: ITabProps) => {
  const [active, setActive] = useState(data[0]);
  const styles = createStyles();
  return (
    <View style={styles.typeView}>
      {title && <Text style={styles.filterTypeText}>{title}</Text>}
      {renderMarginBottom(16)}
      <View style={styles.tabContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          data={data}
          renderItem={({item}) => (
            <Pressable
              onPress={() => {
                onPress(item);
                setActive(item);
              }}
              style={[styles.tab, item.id === active.id && styles.activeTab]}>
              <Text
                style={[
                  styles.tabText,
                  item.id === active.id && styles.tabTextActive,
                ]}>
                {item.label}
              </Text>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

export default TabSwitcher;