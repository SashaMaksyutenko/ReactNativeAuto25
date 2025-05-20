export interface ITabProps {
  title?: string;
  data: ITab[];
  onPress: (e: ITab) => void;
}

export interface ITab {
  id: number;
  label: string;
  value: string;
}