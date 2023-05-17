type PascalCaseCardEnumType = 'Product' | 'Category' | 'Exhibition' | 'Brand';
type LowerCaseCardEnumType =
  | 'product'
  | 'category'
  | 'exhibition'
  | 'brand'
  | 'list';

const PRODUCT: PascalCaseCardEnumType = 'Product';
const CATEGORY: PascalCaseCardEnumType = 'Category';
const EXHIBITION: PascalCaseCardEnumType = 'Exhibition';
const BRAND: PascalCaseCardEnumType = 'Brand';

const product: LowerCaseCardEnumType = 'product';
const category: LowerCaseCardEnumType = 'category';
const exhibition: LowerCaseCardEnumType = 'exhibition';
const brand: LowerCaseCardEnumType = 'brand';
const list: LowerCaseCardEnumType = 'list';

export const PascalCaseCardEnums = {
  PRODUCT,
  CATEGORY,
  EXHIBITION,
  BRAND,
};

export const LowerCaseCardEnums = {
  product,
  category,
  exhibition,
  brand,
  list,
};
