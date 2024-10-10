type PIM_USER = {
  username: string;
  first_name: string;
  last_name: string;
};

type PIM_CONTEXT = {
  product: {
    uuid: string,
    identifier: string | null,
  },
}

type Product = {
  uuid?: string;
  enabled?: boolean;
  family?: string;
  categories?: Array<string>;
  groups?: Array<string>;
  parent?: string;
  values?: { [key: string]: Array<{
      scope?: string;
      locale?: string;
      data?: object;
      linkedData?: any;
      attributeType?: string;
      referenceDataName?: string;
    }>
  };
  associations?: any;
  quantifiedAssociations?: any;
  created?: string;
  updated?: string;
  metadata?: any;
  qualityScores?: object;
  completenesses?: any;
}

declare global {
  namespace globalThis {
    var PIM: {
      user: PIM_USER,
      context: PIM_CONTEXT,
      api: {
        products_uuid: {
          get: (params: {
            uuid: string;
            withAttributeOptions?: boolean;
            withAssetShareLinks?: boolean;
            withQualityScores?: boolean;
            withCompletenesses?: boolean;
          }) => Promise<Product>,
          list: (params: {
            search?: string;
            scope?: string;
            locales?: string;
            attributes?: string;
            paginationType?: 'page' | 'search_after';
            page?: number;
            searchAfter?: string;
            limit?: number;
            withCount?: boolean;
            withAttributeOptions?: boolean;
            withAssetShareLinks?: boolean;
            withQualityScores?: boolean;
            withCompletenesses?: boolean;
          }) => Promise<{
            links?: {
              self?: any;
              first?: any;
              previous?: any;
              next?: any;
            };
            currentPage?: number;
            embedded?: {
              items?: Array<{
                links?: any;
                uuid?: string;
                enabled?: boolean;
                family?: string;
                categories?: Array<string>;
                groups?: Array<string>;
                parent?: string;
                values?: { [key: string]: Array<any>; };
                associations?: any;
                quantifiedAssociations?: any;
                created?: string;
                updated?: string;
                metadata?: any;
                qualityScores?: object;
                completenesses?: Array<any>
              }>
            }
          }>
        }
      },
    }
  }
}

export interface global {}
