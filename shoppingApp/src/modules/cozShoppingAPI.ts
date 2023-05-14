import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export interface CozApiInterface {
  id: number;
  type: string;
  title: string;
  sub_title: string | null;
  brand_name: string | null;
  price: string;
  discountPercentage: number | null;
  image_url: string;
  brand_image_url: string | null;
  follower: string | null;
  bookmark: boolean;
}

export const cozShoppingAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `http://cozshopping.codestates-seb.link/api/v1/`,
  }),

  endpoints: (
    builder: EndpointBuilder<
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        object,
        FetchBaseQueryMeta
      >,
      never,
      'api'
    >,
  ) => ({
    getProduct: builder.query<CozApiInterface, string>({
      query: (count?: string | number) => ({
        url: count ? `/products?count=${count}` : `/products`,
      }),
    }),
  }),
});

export const { useGetProductQuery } = cozShoppingAPI;
