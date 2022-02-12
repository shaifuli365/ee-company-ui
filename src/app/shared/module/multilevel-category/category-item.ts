

export interface CategoryItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: CategoryItem[];
}
