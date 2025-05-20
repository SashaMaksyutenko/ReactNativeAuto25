export interface ITabProps {
  title?: string;
  data: ITab[];
  onPress: (e: ITab) => void;
  tabContainerStyle?: ViewStyle;
  tabStyle?: ViewStyle | ViewStyle[];
  tabTextStyle?: TextStyle;
}

export interface ITab {
  id: number;
  label: string;
  value: string;
}