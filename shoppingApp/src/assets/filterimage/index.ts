import allFilter from './allFilter.png';
import brandFilter from './brandFilter.png';
import categoryFilter from './categoryFilter.png';
import exhibitionFilter from './exhibitionFilter.png';
import productFilter from './productFilter.png';

export interface FilterImageInterface {
  src: string;
  title: string;
  param: string;
}

export const filterImage: FilterImageInterface[] = [
  {
    src: allFilter,
    title: '전체',
    param: 'list',
  },
  {
    src: productFilter,
    title: '상품',
    param: 'product',
  },
  {
    src: categoryFilter,
    title: '카테고리',
    param: 'category',
  },
  {
    src: exhibitionFilter,
    title: '기획전',
    param: 'exhibition',
  },
  {
    src: brandFilter,
    title: '브랜드',
    param: 'brand',
  },
];
