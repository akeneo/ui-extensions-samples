/**
 *
 * @export
 * @interface Attributes
 */
declare interface Attributes {
  /**
   *
   * @type {ProductsAllOfLinks}
   * @memberof Attributes
   */
  links?: ProductsAllOfLinks;
  /**
   * Current page number
   * @type {number}
   * @memberof Attributes
   */
  currentPage?: number;
  /**
   *
   * @type {AttributesAllOfEmbedded}
   * @memberof Attributes
   */
  embedded?: AttributesAllOfEmbedded;
}

/**
 *
 * @export
 * @interface AttributesAllOfEmbedded
 */
declare interface AttributesAllOfEmbedded {
  /**
   *
   * @type {Array<AttributesAllOfEmbeddedItemsInner>}
   * @memberof AttributesAllOfEmbedded
   */
  items?: Array<AttributesAllOfEmbeddedItemsInner>;
}

/**
 *
 * @export
 * @interface AttributesAllOfEmbeddedItemsInner
 */
declare interface AttributesAllOfEmbeddedItemsInner {
  /**
   *
   * @type {ProductsAllOfEmbeddedItemsInnerAllOfLinks}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  links?: ProductsAllOfEmbeddedItemsInnerAllOfLinks;
  /**
   * Attribute code
   * @type {string}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  code: string;
  /**
   * Attribute type. See <a href='/concepts/catalog-structure.html#attribute'>type</a> section for more details.
   * @type {string}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  type: AttributesAllOfEmbeddedItemsInnerTypeEnum;
  /**
   *
   * @type {AttributesAllOfEmbeddedItemsInnerAllOfLabels}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  labels?: AttributesAllOfEmbeddedItemsInnerAllOfLabels;
  /**
   * Attribute group
   * @type {string}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  group: string;
  /**
   *
   * @type {AttributesAllOfEmbeddedItemsInnerAllOfGroupLabels}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  groupLabels?: AttributesAllOfEmbeddedItemsInnerAllOfGroupLabels;
  /**
   * Order of the attribute in its group
   * @type {number}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  sortOrder?: number;
  /**
   * Whether the attribute is localizable, i.e. can have one value by locale
   * @type {boolean}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  localizable?: boolean;
  /**
   * Whether the attribute is scopable, i.e. can have one value by channel
   * @type {boolean}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  scopable?: boolean;
  /**
   * To make the attribute locale specfic, specify here for which locales it is specific
   * @type {Array<string>}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  availableLocales?: Array<string>;
  /**
   * Whether two values for the attribute cannot be the same
   * @type {boolean}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  unique?: boolean;
  /**
   * Whether the attribute can be used as a filter for the product grid in the PIM user interface
   * @type {boolean}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  useableAsGridFilter?: boolean;
  /**
   * Number maximum of characters allowed for the value of the attribute when the attribute type is `pim_catalog_text`, `pim_catalog_textarea` or `pim_catalog_identifier`
   * @type {number}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  maxCharacters?: number;
  /**
   * Validation rule type used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
   * @type {string}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  validationRule?: string;
  /**
   * Regexp expression used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
   * @type {string}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  validationRegexp?: string;
  /**
   * Whether the WYSIWYG interface is shown when the attribute type is `pim_catalog_textarea`
   * @type {boolean}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  wysiwygEnabled?: boolean;
  /**
   * Minimum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
   * @type {string}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  numberMin?: string;
  /**
   * Maximum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
   * @type {string}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  numberMax?: string;
  /**
   * Whether decimals are allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
   * @type {boolean}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  decimalsAllowed?: boolean;
  /**
   * Whether negative values are allowed when the attribute type is `pim_catalog_metric` or `pim_catalog_number`
   * @type {boolean}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  negativeAllowed?: boolean;
  /**
   * Metric family when the attribute type is `pim_catalog_metric`
   * @type {string}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  metricFamily?: string;
  /**
   * Default metric unit when the attribute type is `pim_catalog_metric`
   * @type {string}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  defaultMetricUnit?: string;
  /**
   * Minimum date allowed when the attribute type is `pim_catalog_date`
   * @type {Date}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  dateMin?: Date;
  /**
   * Maximum date allowed when the attribute type is `pim_catalog_date`
   * @type {Date}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  dateMax?: Date;
  /**
   * Extensions allowed when the attribute type is `pim_catalog_file` or `pim_catalog_image`
   * @type {Array<string>}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  allowedExtensions?: Array<string>;
  /**
   * Max file size in MB when the attribute type is `pim_catalog_file` or `pim_catalog_image`
   * @type {string}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  maxFileSize?: string;
  /**
   * Reference entity code when the attribute type is `akeneo_reference_entity` or `akeneo_reference_entity_collection` OR Asset family code when the attribute type is `pim_catalog_asset_collection`
   * @type {string}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  referenceDataName?: string;
  /**
   * Default value for a Yes/No attribute, applied when creating a new product or product model (only available since the 5.0)
   * @type {boolean}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  defaultValue?: boolean;
  /**
   * Configuration of the Table attribute (columns)
   * @type {Array<AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInner>}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  tableConfiguration?: Array<AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInner>;
  /**
   * Is this attribute main identifier when attribute type is `pim_catalog_identifier`
   * @type {boolean}
   * @memberof AttributesAllOfEmbeddedItemsInner
   */
  isMainIdentifier?: boolean;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Group labels for each locale
 * @export
 * @interface AttributesAllOfEmbeddedItemsInnerAllOfGroupLabels
 */
declare interface AttributesAllOfEmbeddedItemsInnerAllOfGroupLabels {
  /**
   * Group label for the locale `localeCode`
   * @type {string}
   * @memberof AttributesAllOfEmbeddedItemsInnerAllOfGroupLabels
   */
  localeCode?: string;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Attribute labels for each locale
 * @export
 * @interface AttributesAllOfEmbeddedItemsInnerAllOfLabels
 */
declare interface AttributesAllOfEmbeddedItemsInnerAllOfLabels {
  /**
   * Attribute label for the locale `localeCode`
   * @type {string}
   * @memberof AttributesAllOfEmbeddedItemsInnerAllOfLabels
   */
  localeCode?: string;
}

/**
 *
 * @export
 * @interface AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInner
 */
declare interface AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInner {
  /**
   * Column code
   * @type {string}
   * @memberof AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInner
   */
  code: string;
  /**
   * Column data type
   * @type {string}
   * @memberof AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInner
   */
  dataType: AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerDataTypeEnum;
  /**
   *
   * @type {AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerValidations}
   * @memberof AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInner
   */
  validations?: AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerValidations;
  /**
   *
   * @type {AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerLabels}
   * @memberof AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInner
   */
  labels?: AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerLabels;
  /**
   * Defines if the column should be entirely filled for the attribute to be considered complete
   * @type {boolean}
   * @memberof AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInner
   */
  isRequiredForCompleteness?: boolean;
}

/**
 * @export
 */
declare const AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerDataTypeEnum: {
  readonly Select: "select";
  readonly Text: "text";
  readonly Number: "number";
  readonly Boolean: "boolean";
};

declare type AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerDataTypeEnum = typeof AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerDataTypeEnum[keyof typeof AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerDataTypeEnum];

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Column labels for each locale
 * @export
 * @interface AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerLabels
 */
declare interface AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerLabels {
  /**
   * Column label for the locale `localeCode`
   * @type {string}
   * @memberof AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerLabels
   */
  localeCode?: string;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * User defined validation constraints on the cell content
 * @export
 * @interface AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerValidations
 */
declare interface AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerValidations {
  /**
   * minimum value of a numeric cell
   * @type {number}
   * @memberof AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerValidations
   */
  min?: number;
  /**
   * maximum value of a numeric cell
   * @type {number}
   * @memberof AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerValidations
   */
  max?: number;
  /**
   * whether the value of a numeric cell can hold a decimal part
   * @type {boolean}
   * @memberof AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerValidations
   */
  decimalsAllowed?: boolean;
  /**
   * maximum length of a text cell
   * @type {number}
   * @memberof AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerValidations
   */
  maxLength?: number;
}

/**
 * @export
 */
declare const AttributesAllOfEmbeddedItemsInnerTypeEnum: {
  readonly PimCatalogIdentifier: "pim_catalog_identifier";
  readonly PimCatalogMetric: "pim_catalog_metric";
  readonly PimCatalogNumber: "pim_catalog_number";
  readonly PimCatalogReferenceDataMultiSelect: "pim_catalog_reference_data_multi_select";
  readonly PimCatalogReferenceDataSimpleSelect: "pim_catalog_reference_data_simple_select";
  readonly PimCatalogSimpleselect: "pim_catalog_simpleselect";
  readonly PimCatalogMultiselect: "pim_catalog_multiselect";
  readonly PimCatalogDate: "pim_catalog_date";
  readonly PimCatalogTextarea: "pim_catalog_textarea";
  readonly PimCatalogText: "pim_catalog_text";
  readonly PimCatalogFile: "pim_catalog_file";
  readonly PimCatalogImage: "pim_catalog_image";
  readonly PimCatalogPriceCollection: "pim_catalog_price_collection";
  readonly PimCatalogBoolean: "pim_catalog_boolean";
  readonly AkeneoReferenceEntity: "akeneo_reference_entity";
  readonly AkeneoReferenceEntityCollection: "akeneo_reference_entity_collection";
  readonly PimCatalogAssetCollection: "pim_catalog_asset_collection";
};

declare type AttributesAllOfEmbeddedItemsInnerTypeEnum = typeof AttributesAllOfEmbeddedItemsInnerTypeEnum[keyof typeof AttributesAllOfEmbeddedItemsInnerTypeEnum];

/**
 *
 * @export
 * @interface Categories
 */
declare interface Categories {
  /**
   *
   * @type {ProductsAllOfLinks}
   * @memberof Categories
   */
  links?: ProductsAllOfLinks;
  /**
   * Current page number
   * @type {number}
   * @memberof Categories
   */
  currentPage?: number;
  /**
   *
   * @type {CategoriesAllOfEmbedded}
   * @memberof Categories
   */
  embedded?: CategoriesAllOfEmbedded;
}

/**
 *
 * @export
 * @interface CategoriesAllOfEmbedded
 */
declare interface CategoriesAllOfEmbedded {
  /**
   *
   * @type {Array<CategoriesAllOfEmbeddedItemsInner>}
   * @memberof CategoriesAllOfEmbedded
   */
  items?: Array<CategoriesAllOfEmbeddedItemsInner>;
}

/**
 *
 * @export
 * @interface CategoriesAllOfEmbeddedItemsInner
 */
declare interface CategoriesAllOfEmbeddedItemsInner {
  /**
   *
   * @type {ProductsAllOfEmbeddedItemsInnerAllOfLinks}
   * @memberof CategoriesAllOfEmbeddedItemsInner
   */
  links?: ProductsAllOfEmbeddedItemsInnerAllOfLinks;
  /**
   * Category code
   * @type {string}
   * @memberof CategoriesAllOfEmbeddedItemsInner
   */
  code: string;
  /**
   * Category code of the parent's category
   * @type {string}
   * @memberof CategoriesAllOfEmbeddedItemsInner
   */
  parent?: string;
  /**
   * Date of the last update
   * @type {string}
   * @memberof CategoriesAllOfEmbeddedItemsInner
   */
  updated?: string;
  /**
   * Position of the category in its level, start from 1 (only available since the 7.0 version and when query parameter "with_position" is set to "true")
   * @type {number}
   * @memberof CategoriesAllOfEmbeddedItemsInner
   */
  position?: number;
  /**
   *
   * @type {CategoriesAllOfEmbeddedItemsInnerAllOfLabels}
   * @memberof CategoriesAllOfEmbeddedItemsInner
   */
  labels?: CategoriesAllOfEmbeddedItemsInnerAllOfLabels;
  /**
   *
   * @type {CategoriesAllOfEmbeddedItemsInnerAllOfValues}
   * @memberof CategoriesAllOfEmbeddedItemsInner
   */
  values?: CategoriesAllOfEmbeddedItemsInnerAllOfValues;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Category labels for each locale
 * @export
 * @interface CategoriesAllOfEmbeddedItemsInnerAllOfLabels
 */
declare interface CategoriesAllOfEmbeddedItemsInnerAllOfLabels {
  /**
   * Category label for the locale `localeCode`
   * @type {string}
   * @memberof CategoriesAllOfEmbeddedItemsInnerAllOfLabels
   */
  localeCode?: string;
}

/**
 * Attribute values
 * @export
 * @interface CategoriesAllOfEmbeddedItemsInnerAllOfValues
 */
declare interface CategoriesAllOfEmbeddedItemsInnerAllOfValues {
  /**
   *
   * @type {Array<CategoriesAllOfEmbeddedItemsInnerAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInner>}
   * @memberof CategoriesAllOfEmbeddedItemsInnerAllOfValues
   */
  attributeCodeAttributeUuidChannelCodeLocaleCode?: Array<CategoriesAllOfEmbeddedItemsInnerAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInner>;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface CategoriesAllOfEmbeddedItemsInnerAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInner
 */
declare interface CategoriesAllOfEmbeddedItemsInnerAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInner {
  /**
   * Attribute value
   * @type {object}
   * @memberof CategoriesAllOfEmbeddedItemsInnerAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInner
   */
  data?: object;
  /**
   * The attribute type
   * @type {string}
   * @memberof CategoriesAllOfEmbeddedItemsInnerAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInner
   */
  type?: string;
  /**
   * <a href='api-reference.html#Locale'>Locale</a> code of the attribute value
   * @type {string}
   * @memberof CategoriesAllOfEmbeddedItemsInnerAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInner
   */
  locale?: string;
  /**
   * <a href='api-reference.html#Channel'>Channel</a> code of the attribute value
   * @type {string}
   * @memberof CategoriesAllOfEmbeddedItemsInnerAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInner
   */
  channel?: string;
  /**
   * The attribute code with its uuid (attributeCode|attributeUuid)
   * @type {string}
   * @memberof CategoriesAllOfEmbeddedItemsInnerAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInner
   */
  attributeCode?: string;
}

declare interface DeleteProductsUuidUuidRequest {
  uuid: string;
}

/**
 *
 * @export
 * @interface Families
 */
declare interface Families {
  /**
   *
   * @type {ProductsAllOfLinks}
   * @memberof Families
   */
  links?: ProductsAllOfLinks;
  /**
   * Current page number
   * @type {number}
   * @memberof Families
   */
  currentPage?: number;
  /**
   *
   * @type {FamiliesAllOfEmbedded}
   * @memberof Families
   */
  embedded?: FamiliesAllOfEmbedded;
}

/**
 *
 * @export
 * @interface FamiliesAllOfEmbedded
 */
declare interface FamiliesAllOfEmbedded {
  /**
   *
   * @type {Array<FamiliesAllOfEmbeddedItemsInner>}
   * @memberof FamiliesAllOfEmbedded
   */
  items?: Array<FamiliesAllOfEmbeddedItemsInner>;
}

/**
 *
 * @export
 * @interface FamiliesAllOfEmbeddedItemsInner
 */
declare interface FamiliesAllOfEmbeddedItemsInner {
  /**
   *
   * @type {ProductsAllOfEmbeddedItemsInnerAllOfLinks}
   * @memberof FamiliesAllOfEmbeddedItemsInner
   */
  links?: ProductsAllOfEmbeddedItemsInnerAllOfLinks;
  /**
   * Family code
   * @type {string}
   * @memberof FamiliesAllOfEmbeddedItemsInner
   */
  code: string;
  /**
   * Attribute code used as label
   * @type {string}
   * @memberof FamiliesAllOfEmbeddedItemsInner
   */
  attributeAsLabel: string;
  /**
   * Attribute code used as the main picture in the user interface (only since v2.0)
   * @type {string}
   * @memberof FamiliesAllOfEmbeddedItemsInner
   */
  attributeAsImage?: string;
  /**
   * Attributes codes that compose the family
   * @type {Array<string>}
   * @memberof FamiliesAllOfEmbeddedItemsInner
   */
  attributes?: Array<string>;
  /**
   *
   * @type {FamiliesAllOfEmbeddedItemsInnerAllOfAttributeRequirements}
   * @memberof FamiliesAllOfEmbeddedItemsInner
   */
  attributeRequirements?: FamiliesAllOfEmbeddedItemsInnerAllOfAttributeRequirements;
  /**
   *
   * @type {FamiliesAllOfEmbeddedItemsInnerAllOfLabels}
   * @memberof FamiliesAllOfEmbeddedItemsInner
   */
  labels?: FamiliesAllOfEmbeddedItemsInnerAllOfLabels;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Attributes codes of the family that are required for the completeness calculation for each channel
 * @export
 * @interface FamiliesAllOfEmbeddedItemsInnerAllOfAttributeRequirements
 */
declare interface FamiliesAllOfEmbeddedItemsInnerAllOfAttributeRequirements {
  /**
   *
   * @type {Array<string>}
   * @memberof FamiliesAllOfEmbeddedItemsInnerAllOfAttributeRequirements
   */
  channelCode?: Array<string>;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Family labels for each locale
 * @export
 * @interface FamiliesAllOfEmbeddedItemsInnerAllOfLabels
 */
declare interface FamiliesAllOfEmbeddedItemsInnerAllOfLabels {
  /**
   * Family label for the locale `localeCode`
   * @type {string}
   * @memberof FamiliesAllOfEmbeddedItemsInnerAllOfLabels
   */
  localeCode?: string;
}

declare interface GetAttributesCodeRequest {
  code: string;
  withTableSelectOptions?: boolean;
}

declare interface GetAttributesRequest {
  search?: string;
  page?: number;
  limit?: number;
  withCount?: boolean;
  withTableSelectOptions?: boolean;
}

/**
 *
 * @export
 * @interface GetCategoriesCode200Response
 */
declare interface GetCategoriesCode200Response {
  /**
   * Category code
   * @type {string}
   * @memberof GetCategoriesCode200Response
   */
  code: string;
  /**
   * Category code of the parent's category
   * @type {string}
   * @memberof GetCategoriesCode200Response
   */
  parent?: string;
  /**
   * Date of the last update
   * @type {string}
   * @memberof GetCategoriesCode200Response
   */
  updated?: string;
  /**
   * Position of the category in its level, start from 1 (only available since the 7.0 version and when query parameter "with_position" is set to "true")
   * @type {number}
   * @memberof GetCategoriesCode200Response
   */
  position?: number;
  /**
   *
   * @type {CategoriesAllOfEmbeddedItemsInnerAllOfLabels}
   * @memberof GetCategoriesCode200Response
   */
  labels?: CategoriesAllOfEmbeddedItemsInnerAllOfLabels;
  /**
   *
   * @type {CategoriesAllOfEmbeddedItemsInnerAllOfValues}
   * @memberof GetCategoriesCode200Response
   */
  values?: CategoriesAllOfEmbeddedItemsInnerAllOfValues;
}

declare interface GetCategoriesCodeRequest {
  code: string;
  withPosition?: boolean;
  withEnrichedAttributes?: boolean;
}

declare interface GetCategoriesRequest {
  search?: string;
  page?: number;
  limit?: number;
  withCount?: boolean;
  withPosition?: boolean;
  withEnrichedAttributes?: boolean;
}

declare interface GetFamiliesCodeRequest {
  code: string;
}

declare interface GetFamiliesRequest {
  search?: string;
  page?: number;
  limit?: number;
  withCount?: boolean;
}

/**
 * @export
 */
declare const GetProductsUuidPaginationTypeEnum: {
  readonly Page: "page";
  readonly SearchAfter: "search_after";
};

declare type GetProductsUuidPaginationTypeEnum = typeof GetProductsUuidPaginationTypeEnum[keyof typeof GetProductsUuidPaginationTypeEnum];

declare interface GetProductsUuidRequest {
  search?: string;
  scope?: string;
  locales?: string;
  attributes?: string;
  paginationType?: GetProductsUuidPaginationTypeEnum;
  page?: number;
  searchAfter?: string;
  limit?: number;
  withCount?: boolean;
  withAttributeOptions?: boolean;
  withAssetShareLinks?: boolean;
  withQualityScores?: boolean;
  withCompletenesses?: boolean;
}

declare interface GetProductsUuidUuidRequest {
  uuid: string;
  withAttributeOptions?: boolean;
  withAssetShareLinks?: boolean;
  withQualityScores?: boolean;
  withCompletenesses?: boolean;
}

/**
 *
 * @export
 * @interface GetReferenceEntitiesCode200Response
 */
declare interface GetReferenceEntitiesCode200Response {
  /**
   *
   * @type {GetReferenceEntitiesCode200ResponseAllOfLinks}
   * @memberof GetReferenceEntitiesCode200Response
   */
  links?: GetReferenceEntitiesCode200ResponseAllOfLinks;
  /**
   * Reference entity code
   * @type {string}
   * @memberof GetReferenceEntitiesCode200Response
   */
  code: string;
  /**
   *
   * @type {ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLabels}
   * @memberof GetReferenceEntitiesCode200Response
   */
  labels?: ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLabels;
  /**
   * Code of the reference entity image
   * @type {string}
   * @memberof GetReferenceEntitiesCode200Response
   */
  image?: string;
}

/**
 *
 * @export
 * @interface GetReferenceEntitiesCode200ResponseAllOfLinks
 */
declare interface GetReferenceEntitiesCode200ResponseAllOfLinks {
  /**
   *
   * @type {ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLinksImageDownload}
   * @memberof GetReferenceEntitiesCode200ResponseAllOfLinks
   */
  imageDownload?: ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLinksImageDownload;
}

/**
 *
 * @export
 * @interface GetReferenceEntitiesCodeAttributes200ResponseInner
 */
declare interface GetReferenceEntitiesCodeAttributes200ResponseInner {
  /**
   * Attribute code
   * @type {string}
   * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
   */
  code: string;
  /**
   *
   * @type {AttributesAllOfEmbeddedItemsInnerAllOfLabels}
   * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
   */
  labels?: AttributesAllOfEmbeddedItemsInnerAllOfLabels;
  /**
   * Attribute type. See <a href='/concepts/reference-entities.html#reference-entity-attribute'>type</a> section for more details.
   * @type {string}
   * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
   */
  type: GetReferenceEntitiesCodeAttributes200ResponseInnerTypeEnum;
  /**
   * Whether the attribute is localizable, i.e. can have one value by locale
   * @type {boolean}
   * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
   */
  valuePerLocale?: boolean;
  /**
   * Whether the attribute is scopable, i.e. can have one value by channel
   * @type {boolean}
   * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
   */
  valuePerChannel?: boolean;
  /**
   * Whether the attribute should be part of the record's completeness calculation
   * @type {boolean}
   * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
   */
  isRequiredForCompleteness?: boolean;
  /**
   * Maximum number of characters allowed for the value of the attribute when the attribute type is `text`
   * @type {number}
   * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
   */
  maxCharacters?: number;
  /**
   * Whether the UI should display a text area instead of a simple field when the attribute type is `text`
   * @type {boolean}
   * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
   */
  isTextarea?: boolean;
  /**
   * Whether the UI should display a rich text editor instead of a simple text area when the attribute type is `text`
   * @type {boolean}
   * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
   */
  isRichTextEditor?: boolean;
  /**
   * Validation rule type used to validate the attribute value when the attribute type is `text`
   * @type {string}
   * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
   */
  validationRule?: GetReferenceEntitiesCodeAttributes200ResponseInnerValidationRuleEnum;
  /**
   * Regexp expression used to validate the attribute value when the attribute type is `text`
   * @type {string}
   * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
   */
  validationRegexp?: string;
  /**
   * Extensions allowed when the attribute type is `image`
   * @type {Array<string>}
   * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
   */
  allowedExtensions?: Array<string>;
  /**
   * Max file size in MB when the attribute type is `image`
   * @type {string}
   * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
   */
  maxFileSize?: string;
  /**
   * Code of the linked reference entity when the attribute type is `reference_entity_single_link` or `reference_entity_multiple_links`
   * @type {string}
   * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
   */
  referenceEntityCode?: string;
  /**
   * Whether decimals are allowed when the attribute type is `number`
   * @type {boolean}
   * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
   */
  decimalsAllowed?: boolean;
  /**
   * Minimum value allowed when the attribute type is `number`
   * @type {string}
   * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
   */
  minValue?: string;
  /**
   * Maximum value allowed when the attribute type is `number`
   * @type {string}
   * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
   */
  maxValue?: string;
}

/**
 * @export
 */
declare const GetReferenceEntitiesCodeAttributes200ResponseInnerTypeEnum: {
  readonly Text: "text";
  readonly Image: "image";
  readonly Number: "number";
  readonly SingleOption: "single_option";
  readonly MultipleOptions: "multiple_options";
  readonly ReferenceEntitySingleLink: "reference_entity_single_link";
  readonly ReferenceEntityMultipleLinks: "reference_entity_multiple_links";
};

declare type GetReferenceEntitiesCodeAttributes200ResponseInnerTypeEnum = typeof GetReferenceEntitiesCodeAttributes200ResponseInnerTypeEnum[keyof typeof GetReferenceEntitiesCodeAttributes200ResponseInnerTypeEnum];

/**
 * @export
 */
declare const GetReferenceEntitiesCodeAttributes200ResponseInnerValidationRuleEnum: {
  readonly Email: "email";
  readonly Url: "url";
  readonly Regexp: "regexp";
  readonly None: "none";
};

declare type GetReferenceEntitiesCodeAttributes200ResponseInnerValidationRuleEnum = typeof GetReferenceEntitiesCodeAttributes200ResponseInnerValidationRuleEnum[keyof typeof GetReferenceEntitiesCodeAttributes200ResponseInnerValidationRuleEnum];

declare interface GetReferenceEntitiesCodeAttributesRequest {
  referenceEntityCode: string;
}

declare interface GetReferenceEntitiesCodeRequest {
  code: string;
}

declare interface GetReferenceEntitiesRequest {
  searchAfter?: string;
}

/**
 *
 * @export
 * @interface GetReferenceEntityAttributesCode200Response
 */
declare interface GetReferenceEntityAttributesCode200Response {
  /**
   * Attribute code
   * @type {string}
   * @memberof GetReferenceEntityAttributesCode200Response
   */
  code: string;
  /**
   *
   * @type {AttributesAllOfEmbeddedItemsInnerAllOfLabels}
   * @memberof GetReferenceEntityAttributesCode200Response
   */
  labels?: AttributesAllOfEmbeddedItemsInnerAllOfLabels;
  /**
   * Attribute type. See <a href='/concepts/reference-entities.html#reference-entity-attribute'>type</a> section for more details.
   * @type {string}
   * @memberof GetReferenceEntityAttributesCode200Response
   */
  type: GetReferenceEntityAttributesCode200ResponseTypeEnum;
  /**
   * Whether the attribute is localizable, i.e. can have one value by locale
   * @type {boolean}
   * @memberof GetReferenceEntityAttributesCode200Response
   */
  valuePerLocale?: boolean;
  /**
   * Whether the attribute is scopable, i.e. can have one value by channel
   * @type {boolean}
   * @memberof GetReferenceEntityAttributesCode200Response
   */
  valuePerChannel?: boolean;
  /**
   * Whether the attribute should be part of the record's completeness calculation
   * @type {boolean}
   * @memberof GetReferenceEntityAttributesCode200Response
   */
  isRequiredForCompleteness?: boolean;
  /**
   * Maximum number of characters allowed for the value of the attribute when the attribute type is `text`
   * @type {number}
   * @memberof GetReferenceEntityAttributesCode200Response
   */
  maxCharacters?: number;
  /**
   * Whether the UI should display a text area instead of a simple field when the attribute type is `text`
   * @type {boolean}
   * @memberof GetReferenceEntityAttributesCode200Response
   */
  isTextarea?: boolean;
  /**
   * Whether the UI should display a rich text editor instead of a simple text area when the attribute type is `text`
   * @type {boolean}
   * @memberof GetReferenceEntityAttributesCode200Response
   */
  isRichTextEditor?: boolean;
  /**
   * Validation rule type used to validate the attribute value when the attribute type is `text`
   * @type {string}
   * @memberof GetReferenceEntityAttributesCode200Response
   */
  validationRule?: GetReferenceEntityAttributesCode200ResponseValidationRuleEnum;
  /**
   * Regexp expression used to validate the attribute value when the attribute type is `text`
   * @type {string}
   * @memberof GetReferenceEntityAttributesCode200Response
   */
  validationRegexp?: string;
  /**
   * Extensions allowed when the attribute type is `image`
   * @type {Array<string>}
   * @memberof GetReferenceEntityAttributesCode200Response
   */
  allowedExtensions?: Array<string>;
  /**
   * Max file size in MB when the attribute type is `image`
   * @type {string}
   * @memberof GetReferenceEntityAttributesCode200Response
   */
  maxFileSize?: string;
  /**
   * Code of the linked reference entity when the attribute type is `reference_entity_single_link` or `reference_entity_multiple_links`
   * @type {string}
   * @memberof GetReferenceEntityAttributesCode200Response
   */
  referenceEntityCode?: string;
  /**
   * Whether decimals are allowed when the attribute type is `number`
   * @type {boolean}
   * @memberof GetReferenceEntityAttributesCode200Response
   */
  decimalsAllowed?: boolean;
  /**
   * Minimum value allowed when the attribute type is `number`
   * @type {string}
   * @memberof GetReferenceEntityAttributesCode200Response
   */
  minValue?: string;
  /**
   * Maximum value allowed when the attribute type is `number`
   * @type {string}
   * @memberof GetReferenceEntityAttributesCode200Response
   */
  maxValue?: string;
}

/**
 * @export
 */
declare const GetReferenceEntityAttributesCode200ResponseTypeEnum: {
  readonly Text: "text";
  readonly Image: "image";
  readonly Number: "number";
  readonly SingleOption: "single_option";
  readonly MultipleOptions: "multiple_options";
  readonly ReferenceEntitySingleLink: "reference_entity_single_link";
  readonly ReferenceEntityMultipleLinks: "reference_entity_multiple_links";
};

declare type GetReferenceEntityAttributesCode200ResponseTypeEnum = typeof GetReferenceEntityAttributesCode200ResponseTypeEnum[keyof typeof GetReferenceEntityAttributesCode200ResponseTypeEnum];

/**
 * @export
 */
declare const GetReferenceEntityAttributesCode200ResponseValidationRuleEnum: {
  readonly Email: "email";
  readonly Url: "url";
  readonly Regexp: "regexp";
  readonly None: "none";
};

declare type GetReferenceEntityAttributesCode200ResponseValidationRuleEnum = typeof GetReferenceEntityAttributesCode200ResponseValidationRuleEnum[keyof typeof GetReferenceEntityAttributesCode200ResponseValidationRuleEnum];

declare interface GetReferenceEntityAttributesCodeRequest {
  referenceEntityCode: string;
  code: string;
}

/**
 *
 * @export
 * @interface GetReferenceEntityRecordsCode200Response
 */
declare interface GetReferenceEntityRecordsCode200Response {
  /**
   * Code of the record
   * @type {string}
   * @memberof GetReferenceEntityRecordsCode200Response
   */
  code: string;
  /**
   * Record attributes values, see <a href='/concepts/reference-entities.html#focus-on-the-reference-entity-record-values'>Reference entity record values</a> section for more details
   * @type {{ [key: string]: Array<ReferenceEntityRecordAllOfEmbeddedItemsInnerAllOfValuesValueInner>; }}
   * @memberof GetReferenceEntityRecordsCode200Response
   */
  values?: {
    [key: string]: Array<ReferenceEntityRecordAllOfEmbeddedItemsInnerAllOfValuesValueInner>;
  };
  /**
   * Date of creation.
   * @type {string}
   * @memberof GetReferenceEntityRecordsCode200Response
   */
  created?: string;
  /**
   * Date of the last update.
   * @type {string}
   * @memberof GetReferenceEntityRecordsCode200Response
   */
  updated?: string;
}

declare interface GetReferenceEntityRecordsCodeRequest {
  referenceEntityCode: string;
  code: string;
}

declare interface GetReferenceEntityRecordsRequest {
  referenceEntityCode: string;
  search?: string;
  channel?: string;
  locales?: string;
  searchAfter?: string;
}

declare type HTTPBody = Json | FormData | URLSearchParams;

declare type HTTPHeaders = {
  [key: string]: string;
};

declare type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';

declare type HTTPQuery = {
  [key: string]: string | number | null | boolean | Array<string | number | null | boolean> | Set<string | number | null | boolean> | HTTPQuery;
};

declare type HTTPRequestInit = {
  headers?: HTTPHeaders;
  method: HTTPMethod;
  credentials?: RequestCredentials;
  body?: HTTPBody;
};

declare type InitOverrideFunction = (requestContext: {
  init: HTTPRequestInit;
  context: RequestOpts;
}) => Promise<RequestInit>;

declare type Json = any;

declare interface PatchAttributesCodeRequest {
  code: string;
  body: PostAttributesRequest;
}

declare interface PatchAttributesOperationRequest {
  body?: PatchAttributesRequest;
}

/**
 *
 * @export
 * @interface PatchAttributesRequest
 */
declare interface PatchAttributesRequest {
  /**
   * Attribute code
   * @type {string}
   * @memberof PatchAttributesRequest
   */
  code: string;
  /**
   * Attribute type. See <a href='/concepts/catalog-structure.html#attribute'>type</a> section for more details.
   * @type {string}
   * @memberof PatchAttributesRequest
   */
  type: PatchAttributesRequestTypeEnum;
  /**
   *
   * @type {AttributesAllOfEmbeddedItemsInnerAllOfLabels}
   * @memberof PatchAttributesRequest
   */
  labels?: AttributesAllOfEmbeddedItemsInnerAllOfLabels;
  /**
   * Attribute group
   * @type {string}
   * @memberof PatchAttributesRequest
   */
  group: string;
  /**
   *
   * @type {AttributesAllOfEmbeddedItemsInnerAllOfGroupLabels}
   * @memberof PatchAttributesRequest
   */
  groupLabels?: AttributesAllOfEmbeddedItemsInnerAllOfGroupLabels;
  /**
   * Order of the attribute in its group
   * @type {number}
   * @memberof PatchAttributesRequest
   */
  sortOrder?: number;
  /**
   * Whether the attribute is localizable, i.e. can have one value by locale
   * @type {boolean}
   * @memberof PatchAttributesRequest
   */
  localizable?: boolean;
  /**
   * Whether the attribute is scopable, i.e. can have one value by channel
   * @type {boolean}
   * @memberof PatchAttributesRequest
   */
  scopable?: boolean;
  /**
   * To make the attribute locale specfic, specify here for which locales it is specific
   * @type {Array<string>}
   * @memberof PatchAttributesRequest
   */
  availableLocales?: Array<string>;
  /**
   * Whether two values for the attribute cannot be the same
   * @type {boolean}
   * @memberof PatchAttributesRequest
   */
  unique?: boolean;
  /**
   * Whether the attribute can be used as a filter for the product grid in the PIM user interface
   * @type {boolean}
   * @memberof PatchAttributesRequest
   */
  useableAsGridFilter?: boolean;
  /**
   * Number maximum of characters allowed for the value of the attribute when the attribute type is `pim_catalog_text`, `pim_catalog_textarea` or `pim_catalog_identifier`
   * @type {number}
   * @memberof PatchAttributesRequest
   */
  maxCharacters?: number;
  /**
   * Validation rule type used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
   * @type {string}
   * @memberof PatchAttributesRequest
   */
  validationRule?: string;
  /**
   * Regexp expression used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
   * @type {string}
   * @memberof PatchAttributesRequest
   */
  validationRegexp?: string;
  /**
   * Whether the WYSIWYG interface is shown when the attribute type is `pim_catalog_textarea`
   * @type {boolean}
   * @memberof PatchAttributesRequest
   */
  wysiwygEnabled?: boolean;
  /**
   * Minimum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
   * @type {string}
   * @memberof PatchAttributesRequest
   */
  numberMin?: string;
  /**
   * Maximum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
   * @type {string}
   * @memberof PatchAttributesRequest
   */
  numberMax?: string;
  /**
   * Whether decimals are allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
   * @type {boolean}
   * @memberof PatchAttributesRequest
   */
  decimalsAllowed?: boolean;
  /**
   * Whether negative values are allowed when the attribute type is `pim_catalog_metric` or `pim_catalog_number`
   * @type {boolean}
   * @memberof PatchAttributesRequest
   */
  negativeAllowed?: boolean;
  /**
   * Metric family when the attribute type is `pim_catalog_metric`
   * @type {string}
   * @memberof PatchAttributesRequest
   */
  metricFamily?: string;
  /**
   * Default metric unit when the attribute type is `pim_catalog_metric`
   * @type {string}
   * @memberof PatchAttributesRequest
   */
  defaultMetricUnit?: string;
  /**
   * Minimum date allowed when the attribute type is `pim_catalog_date`
   * @type {Date}
   * @memberof PatchAttributesRequest
   */
  dateMin?: Date;
  /**
   * Maximum date allowed when the attribute type is `pim_catalog_date`
   * @type {Date}
   * @memberof PatchAttributesRequest
   */
  dateMax?: Date;
  /**
   * Extensions allowed when the attribute type is `pim_catalog_file` or `pim_catalog_image`
   * @type {Array<string>}
   * @memberof PatchAttributesRequest
   */
  allowedExtensions?: Array<string>;
  /**
   * Max file size in MB when the attribute type is `pim_catalog_file` or `pim_catalog_image`
   * @type {string}
   * @memberof PatchAttributesRequest
   */
  maxFileSize?: string;
  /**
   * Reference entity code when the attribute type is `akeneo_reference_entity` or `akeneo_reference_entity_collection` OR Asset family code when the attribute type is `pim_catalog_asset_collection`
   * @type {string}
   * @memberof PatchAttributesRequest
   */
  referenceDataName?: string;
  /**
   * Default value for a Yes/No attribute, applied when creating a new product or product model (only available since the 5.0)
   * @type {boolean}
   * @memberof PatchAttributesRequest
   */
  defaultValue?: boolean;
  /**
   * Configuration of the Table attribute (columns)
   * @type {Array<AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInner>}
   * @memberof PatchAttributesRequest
   */
  tableConfiguration?: Array<AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInner>;
  /**
   * Is this attribute main identifier when attribute type is `pim_catalog_identifier`
   * @type {boolean}
   * @memberof PatchAttributesRequest
   */
  isMainIdentifier?: boolean;
}

/**
 * @export
 */
declare const PatchAttributesRequestTypeEnum: {
  readonly PimCatalogIdentifier: "pim_catalog_identifier";
  readonly PimCatalogMetric: "pim_catalog_metric";
  readonly PimCatalogNumber: "pim_catalog_number";
  readonly PimCatalogReferenceDataMultiSelect: "pim_catalog_reference_data_multi_select";
  readonly PimCatalogReferenceDataSimpleSelect: "pim_catalog_reference_data_simple_select";
  readonly PimCatalogSimpleselect: "pim_catalog_simpleselect";
  readonly PimCatalogMultiselect: "pim_catalog_multiselect";
  readonly PimCatalogDate: "pim_catalog_date";
  readonly PimCatalogTextarea: "pim_catalog_textarea";
  readonly PimCatalogText: "pim_catalog_text";
  readonly PimCatalogFile: "pim_catalog_file";
  readonly PimCatalogImage: "pim_catalog_image";
  readonly PimCatalogPriceCollection: "pim_catalog_price_collection";
  readonly PimCatalogBoolean: "pim_catalog_boolean";
  readonly AkeneoReferenceEntity: "akeneo_reference_entity";
  readonly AkeneoReferenceEntityCollection: "akeneo_reference_entity_collection";
  readonly PimCatalogAssetCollection: "pim_catalog_asset_collection";
};

declare type PatchAttributesRequestTypeEnum = typeof PatchAttributesRequestTypeEnum[keyof typeof PatchAttributesRequestTypeEnum];

declare interface PatchCategoriesCodeRequest {
  code: string;
  body: PostCategoriesRequest;
}

declare interface PatchCategoriesOperationRequest {
  body?: PatchCategoriesRequest;
}

/**
 *
 * @export
 * @interface PatchCategoriesRequest
 */
declare interface PatchCategoriesRequest {
  /**
   * Category code
   * @type {string}
   * @memberof PatchCategoriesRequest
   */
  code: string;
  /**
   * Category code of the parent's category
   * @type {string}
   * @memberof PatchCategoriesRequest
   */
  parent?: string;
  /**
   * Date of the last update
   * @type {string}
   * @memberof PatchCategoriesRequest
   */
  updated?: string;
  /**
   * Position of the category in its level, start from 1 (only available since the 7.0 version and when query parameter "with_position" is set to "true")
   * @type {number}
   * @memberof PatchCategoriesRequest
   */
  position?: number;
  /**
   *
   * @type {CategoriesAllOfEmbeddedItemsInnerAllOfLabels}
   * @memberof PatchCategoriesRequest
   */
  labels?: CategoriesAllOfEmbeddedItemsInnerAllOfLabels;
  /**
   * Attribute values (only available on SaaS).
   * @type {Array<PostCategoriesRequestValuesInner>}
   * @memberof PatchCategoriesRequest
   */
  values?: Array<PostCategoriesRequestValuesInner>;
}

declare interface PatchFamiliesCodeRequest {
  code: string;
  body: PostFamiliesRequest;
}

declare interface PatchFamiliesOperationRequest {
  body?: PatchFamiliesRequest;
}

/**
 *
 * @export
 * @interface PatchFamiliesRequest
 */
declare interface PatchFamiliesRequest {
  /**
   * Family code
   * @type {string}
   * @memberof PatchFamiliesRequest
   */
  code: string;
  /**
   * Attribute code used as label
   * @type {string}
   * @memberof PatchFamiliesRequest
   */
  attributeAsLabel: string;
  /**
   * Attribute code used as the main picture in the user interface (only since v2.0)
   * @type {string}
   * @memberof PatchFamiliesRequest
   */
  attributeAsImage?: string;
  /**
   * Attributes codes that compose the family
   * @type {Array<string>}
   * @memberof PatchFamiliesRequest
   */
  attributes?: Array<string>;
  /**
   *
   * @type {FamiliesAllOfEmbeddedItemsInnerAllOfAttributeRequirements}
   * @memberof PatchFamiliesRequest
   */
  attributeRequirements?: FamiliesAllOfEmbeddedItemsInnerAllOfAttributeRequirements;
  /**
   *
   * @type {FamiliesAllOfEmbeddedItemsInnerAllOfLabels}
   * @memberof PatchFamiliesRequest
   */
  labels?: FamiliesAllOfEmbeddedItemsInnerAllOfLabels;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface PatchProducts200Response
 */
declare interface PatchProducts200Response {
  /**
   * Line number
   * @type {number}
   * @memberof PatchProducts200Response
   */
  line?: number;
  /**
   * Resource identifier, only filled when the resource is a product
   * @type {string}
   * @memberof PatchProducts200Response
   */
  identifier?: string;
  /**
   * Resource code, only filled when the resource is not a product
   * @type {string}
   * @memberof PatchProducts200Response
   */
  code?: string;
  /**
   * HTTP status code, see <a href="/documentation/responses.html#client-errors">Client errors</a> to understand the meaning of each code
   * @type {number}
   * @memberof PatchProducts200Response
   */
  statusCode?: number;
  /**
   * Message explaining the error
   * @type {string}
   * @memberof PatchProducts200Response
   */
  message?: string;
}

declare interface PatchProductsUuidUuidRequest {
  uuid: string;
  body: PostProductsUuidRequest;
}

declare interface PatchReferenceEntityAttributesCodeRequest {
  referenceEntityCode: string;
  code: string;
  body: GetReferenceEntityAttributesCode200Response;
}

declare interface PatchReferenceEntityCodeOperationRequest {
  code: string;
  body: PatchReferenceEntityCodeRequest;
}

/**
 *
 * @export
 * @interface PatchReferenceEntityCodeRequest
 */
declare interface PatchReferenceEntityCodeRequest {
  /**
   * Reference entity code
   * @type {string}
   * @memberof PatchReferenceEntityCodeRequest
   */
  code: string;
  /**
   *
   * @type {ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLabels}
   * @memberof PatchReferenceEntityCodeRequest
   */
  labels?: ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLabels;
  /**
   * Code of the reference entity image
   * @type {string}
   * @memberof PatchReferenceEntityCodeRequest
   */
  image?: string;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface PatchReferenceEntityRecords200ResponseInner
 */
declare interface PatchReferenceEntityRecords200ResponseInner {
  /**
   * Resource code
   * @type {string}
   * @memberof PatchReferenceEntityRecords200ResponseInner
   */
  code?: string;
  /**
   * HTTP status code, see <a href="/documentation/responses.html#client-errors">Client errors</a> to understand the meaning of each code
   * @type {number}
   * @memberof PatchReferenceEntityRecords200ResponseInner
   */
  statusCode?: number;
  /**
   * Message explaining the error
   * @type {string}
   * @memberof PatchReferenceEntityRecords200ResponseInner
   */
  message?: string;
}

declare interface PatchReferenceEntityRecordsCodeOperationRequest {
  referenceEntityCode: string;
  code: string;
  body: PatchReferenceEntityRecordsCodeRequest;
}

/**
 *
 * @export
 * @interface PatchReferenceEntityRecordsCodeRequest
 */
declare interface PatchReferenceEntityRecordsCodeRequest {
  /**
   * Code of the record
   * @type {string}
   * @memberof PatchReferenceEntityRecordsCodeRequest
   */
  code: string;
  /**
   * Record attributes values, see <a href='/concepts/reference-entities.html#focus-on-the-reference-entity-record-values'>Reference entity record values</a> section for more details
   * @type {{ [key: string]: Array<ReferenceEntityRecordAllOfEmbeddedItemsInnerAllOfValuesValueInner>; }}
   * @memberof PatchReferenceEntityRecordsCodeRequest
   */
  values?: {
    [key: string]: Array<ReferenceEntityRecordAllOfEmbeddedItemsInnerAllOfValuesValueInner>;
  };
  /**
   * Date of creation.
   * @type {string}
   * @memberof PatchReferenceEntityRecordsCodeRequest
   */
  created?: string;
  /**
   * Date of the last update.
   * @type {string}
   * @memberof PatchReferenceEntityRecordsCodeRequest
   */
  updated?: string;
}

declare interface PatchReferenceEntityRecordsRequest {
  referenceEntityCode: string;
  body: Array<PatchReferenceEntityRecordsRequestInner>;
}

/**
 *
 * @export
 * @interface PatchReferenceEntityRecordsRequestInner
 */
declare interface PatchReferenceEntityRecordsRequestInner {
  /**
   * Code of the record
   * @type {string}
   * @memberof PatchReferenceEntityRecordsRequestInner
   */
  code: string;
  /**
   * Record attributes values, see <a href='/concepts/reference-entities.html#focus-on-the-reference-entity-record-values'>Reference entity record values</a> section for more details
   * @type {{ [key: string]: Array<ReferenceEntityRecordAllOfEmbeddedItemsInnerAllOfValuesValueInner>; }}
   * @memberof PatchReferenceEntityRecordsRequestInner
   */
  values?: {
    [key: string]: Array<ReferenceEntityRecordAllOfEmbeddedItemsInnerAllOfValuesValueInner>;
  };
  /**
   * Date of creation.
   * @type {string}
   * @memberof PatchReferenceEntityRecordsRequestInner
   */
  created?: string;
  /**
   * Date of the last update.
   * @type {string}
   * @memberof PatchReferenceEntityRecordsRequestInner
   */
  updated?: string;
}

export declare type PIM_CONTEXT = {
  product: {
    uuid: string;
    identifier: string | null;
  };
} | {
  category: {
    code: string;
  };
};

export declare type PIM_SDK = {
  user: PIM_USER;
  context: PIM_CONTEXT;
  api: {
    product_uuid: SdkApiProductUuid;
    attribute: SdkApiAttribute;
    family: SdkApiFamily;
    category: SdkApiCategory;
    reference_entity: SdkApiReferenceEntity;
    reference_entity_record: SdkApiReferenceEntityRecord;
    reference_entity_attribute: SdkApiReferenceEntityAttribute;
  };
};

export declare type PIM_USER = {
  username: string;
  first_name: string;
  last_name: string;
};

declare interface PostAttributesOperationRequest {
  body?: PostAttributesRequest;
}

/**
 *
 * @export
 * @interface PostAttributesRequest
 */
declare interface PostAttributesRequest {
  /**
   * Attribute code
   * @type {string}
   * @memberof PostAttributesRequest
   */
  code: string;
  /**
   * Attribute type. See <a href='/concepts/catalog-structure.html#attribute'>type</a> section for more details.
   * @type {string}
   * @memberof PostAttributesRequest
   */
  type: PostAttributesRequestTypeEnum;
  /**
   *
   * @type {AttributesAllOfEmbeddedItemsInnerAllOfLabels}
   * @memberof PostAttributesRequest
   */
  labels?: AttributesAllOfEmbeddedItemsInnerAllOfLabels;
  /**
   * Attribute group
   * @type {string}
   * @memberof PostAttributesRequest
   */
  group: string;
  /**
   *
   * @type {AttributesAllOfEmbeddedItemsInnerAllOfGroupLabels}
   * @memberof PostAttributesRequest
   */
  groupLabels?: AttributesAllOfEmbeddedItemsInnerAllOfGroupLabels;
  /**
   * Order of the attribute in its group
   * @type {number}
   * @memberof PostAttributesRequest
   */
  sortOrder?: number;
  /**
   * Whether the attribute is localizable, i.e. can have one value by locale
   * @type {boolean}
   * @memberof PostAttributesRequest
   */
  localizable?: boolean;
  /**
   * Whether the attribute is scopable, i.e. can have one value by channel
   * @type {boolean}
   * @memberof PostAttributesRequest
   */
  scopable?: boolean;
  /**
   * To make the attribute locale specfic, specify here for which locales it is specific
   * @type {Array<string>}
   * @memberof PostAttributesRequest
   */
  availableLocales?: Array<string>;
  /**
   * Whether two values for the attribute cannot be the same
   * @type {boolean}
   * @memberof PostAttributesRequest
   */
  unique?: boolean;
  /**
   * Whether the attribute can be used as a filter for the product grid in the PIM user interface
   * @type {boolean}
   * @memberof PostAttributesRequest
   */
  useableAsGridFilter?: boolean;
  /**
   * Number maximum of characters allowed for the value of the attribute when the attribute type is `pim_catalog_text`, `pim_catalog_textarea` or `pim_catalog_identifier`
   * @type {number}
   * @memberof PostAttributesRequest
   */
  maxCharacters?: number;
  /**
   * Validation rule type used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
   * @type {string}
   * @memberof PostAttributesRequest
   */
  validationRule?: string;
  /**
   * Regexp expression used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
   * @type {string}
   * @memberof PostAttributesRequest
   */
  validationRegexp?: string;
  /**
   * Whether the WYSIWYG interface is shown when the attribute type is `pim_catalog_textarea`
   * @type {boolean}
   * @memberof PostAttributesRequest
   */
  wysiwygEnabled?: boolean;
  /**
   * Minimum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
   * @type {string}
   * @memberof PostAttributesRequest
   */
  numberMin?: string;
  /**
   * Maximum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
   * @type {string}
   * @memberof PostAttributesRequest
   */
  numberMax?: string;
  /**
   * Whether decimals are allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
   * @type {boolean}
   * @memberof PostAttributesRequest
   */
  decimalsAllowed?: boolean;
  /**
   * Whether negative values are allowed when the attribute type is `pim_catalog_metric` or `pim_catalog_number`
   * @type {boolean}
   * @memberof PostAttributesRequest
   */
  negativeAllowed?: boolean;
  /**
   * Metric family when the attribute type is `pim_catalog_metric`
   * @type {string}
   * @memberof PostAttributesRequest
   */
  metricFamily?: string;
  /**
   * Default metric unit when the attribute type is `pim_catalog_metric`
   * @type {string}
   * @memberof PostAttributesRequest
   */
  defaultMetricUnit?: string;
  /**
   * Minimum date allowed when the attribute type is `pim_catalog_date`
   * @type {Date}
   * @memberof PostAttributesRequest
   */
  dateMin?: Date;
  /**
   * Maximum date allowed when the attribute type is `pim_catalog_date`
   * @type {Date}
   * @memberof PostAttributesRequest
   */
  dateMax?: Date;
  /**
   * Extensions allowed when the attribute type is `pim_catalog_file` or `pim_catalog_image`
   * @type {Array<string>}
   * @memberof PostAttributesRequest
   */
  allowedExtensions?: Array<string>;
  /**
   * Max file size in MB when the attribute type is `pim_catalog_file` or `pim_catalog_image`
   * @type {string}
   * @memberof PostAttributesRequest
   */
  maxFileSize?: string;
  /**
   * Reference entity code when the attribute type is `akeneo_reference_entity` or `akeneo_reference_entity_collection` OR Asset family code when the attribute type is `pim_catalog_asset_collection`
   * @type {string}
   * @memberof PostAttributesRequest
   */
  referenceDataName?: string;
  /**
   * Default value for a Yes/No attribute, applied when creating a new product or product model (only available since the 5.0)
   * @type {boolean}
   * @memberof PostAttributesRequest
   */
  defaultValue?: boolean;
  /**
   * Configuration of the Table attribute (columns)
   * @type {Array<AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInner>}
   * @memberof PostAttributesRequest
   */
  tableConfiguration?: Array<AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInner>;
  /**
   * Is this attribute main identifier when attribute type is `pim_catalog_identifier`
   * @type {boolean}
   * @memberof PostAttributesRequest
   */
  isMainIdentifier?: boolean;
}

/**
 * @export
 */
declare const PostAttributesRequestTypeEnum: {
  readonly PimCatalogIdentifier: "pim_catalog_identifier";
  readonly PimCatalogMetric: "pim_catalog_metric";
  readonly PimCatalogNumber: "pim_catalog_number";
  readonly PimCatalogReferenceDataMultiSelect: "pim_catalog_reference_data_multi_select";
  readonly PimCatalogReferenceDataSimpleSelect: "pim_catalog_reference_data_simple_select";
  readonly PimCatalogSimpleselect: "pim_catalog_simpleselect";
  readonly PimCatalogMultiselect: "pim_catalog_multiselect";
  readonly PimCatalogDate: "pim_catalog_date";
  readonly PimCatalogTextarea: "pim_catalog_textarea";
  readonly PimCatalogText: "pim_catalog_text";
  readonly PimCatalogFile: "pim_catalog_file";
  readonly PimCatalogImage: "pim_catalog_image";
  readonly PimCatalogPriceCollection: "pim_catalog_price_collection";
  readonly PimCatalogBoolean: "pim_catalog_boolean";
  readonly AkeneoReferenceEntity: "akeneo_reference_entity";
  readonly AkeneoReferenceEntityCollection: "akeneo_reference_entity_collection";
  readonly PimCatalogAssetCollection: "pim_catalog_asset_collection";
};

declare type PostAttributesRequestTypeEnum = typeof PostAttributesRequestTypeEnum[keyof typeof PostAttributesRequestTypeEnum];

declare interface PostCategoriesOperationRequest {
  body?: PostCategoriesRequest;
}

/**
 *
 * @export
 * @interface PostCategoriesRequest
 */
declare interface PostCategoriesRequest {
  /**
   * Category code
   * @type {string}
   * @memberof PostCategoriesRequest
   */
  code: string;
  /**
   * Category code of the parent's category
   * @type {string}
   * @memberof PostCategoriesRequest
   */
  parent?: string;
  /**
   * Date of the last update
   * @type {string}
   * @memberof PostCategoriesRequest
   */
  updated?: string;
  /**
   * Position of the category in its level, start from 1 (only available since the 7.0 version and when query parameter "with_position" is set to "true")
   * @type {number}
   * @memberof PostCategoriesRequest
   */
  position?: number;
  /**
   *
   * @type {CategoriesAllOfEmbeddedItemsInnerAllOfLabels}
   * @memberof PostCategoriesRequest
   */
  labels?: CategoriesAllOfEmbeddedItemsInnerAllOfLabels;
  /**
   * Attribute values (only available on SaaS).
   * @type {Array<PostCategoriesRequestValuesInner>}
   * @memberof PostCategoriesRequest
   */
  values?: Array<PostCategoriesRequestValuesInner>;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface PostCategoriesRequestValuesInner
 */
declare interface PostCategoriesRequestValuesInner {
  /**
   * Attribute value. It should be a `string` for Text and Text Area attributes, a `boolean` for Yes/No attribute and for Image attribute use the <a href="api-reference.html#post_category_media_files">create category media file endpoint</a>. It can also be `null` to remove the value.
   * @type {string}
   * @memberof PostCategoriesRequestValuesInner
   */
  data?: string;
  /**
   * <a href="api-reference.html#Locale">Locale</a> code of the attribute value.
   * @type {string}
   * @memberof PostCategoriesRequestValuesInner
   */
  locale?: string;
  /**
   * <a href="api-reference.html#Channel">Channel</a> code of the attribute value.
   * @type {string}
   * @memberof PostCategoriesRequestValuesInner
   */
  channel?: string;
  /**
   * The attribute code.
   * @type {string}
   * @memberof PostCategoriesRequestValuesInner
   */
  attributeCode?: string;
}

declare interface PostFamiliesOperationRequest {
  body?: PostFamiliesRequest;
}

/**
 *
 * @export
 * @interface PostFamiliesRequest
 */
declare interface PostFamiliesRequest {
  /**
   * Family code
   * @type {string}
   * @memberof PostFamiliesRequest
   */
  code: string;
  /**
   * Attribute code used as label
   * @type {string}
   * @memberof PostFamiliesRequest
   */
  attributeAsLabel: string;
  /**
   * Attribute code used as the main picture in the user interface (only since v2.0)
   * @type {string}
   * @memberof PostFamiliesRequest
   */
  attributeAsImage?: string;
  /**
   * Attributes codes that compose the family
   * @type {Array<string>}
   * @memberof PostFamiliesRequest
   */
  attributes?: Array<string>;
  /**
   *
   * @type {FamiliesAllOfEmbeddedItemsInnerAllOfAttributeRequirements}
   * @memberof PostFamiliesRequest
   */
  attributeRequirements?: FamiliesAllOfEmbeddedItemsInnerAllOfAttributeRequirements;
  /**
   *
   * @type {FamiliesAllOfEmbeddedItemsInnerAllOfLabels}
   * @memberof PostFamiliesRequest
   */
  labels?: FamiliesAllOfEmbeddedItemsInnerAllOfLabels;
}

/**
 *
 * @export
 * @interface PostProductsUuidRequest
 */
declare interface PostProductsUuidRequest {
  /**
   * Product uuid
   * @type {string}
   * @memberof PostProductsUuidRequest
   */
  uuid?: string;
  /**
   * Whether the product is enabled
   * @type {boolean}
   * @memberof PostProductsUuidRequest
   */
  enabled?: boolean;
  /**
   * <a href='api-reference.html#Family'>Family</a> code from which the product inherits its attributes and attributes requirements.
   * @type {string}
   * @memberof PostProductsUuidRequest
   */
  family?: string;
  /**
   * Codes of the <a href='api-reference.html#Category'>categories</a> in which the product is classified
   * @type {Array<string>}
   * @memberof PostProductsUuidRequest
   */
  categories?: Array<string>;
  /**
   * Codes of the groups to which the product belong
   * @type {Array<string>}
   * @memberof PostProductsUuidRequest
   */
  groups?: Array<string>;
  /**
   * Code of the parent <a href='api-reference.html#Productmodel'>product model</a> when the product is a variant (only available since the 2.0). This parent can be modified since the 2.3.
   * @type {string}
   * @memberof PostProductsUuidRequest
   */
  parent?: string;
  /**
   * Product attributes values, see <a href='/concepts/products.html#focus-on-the-product-values'>Product values</a> section for more details
   * @type {{ [key: string]: Array<ProductsAllOfEmbeddedItemsInnerAllOfValuesValueInner>; }}
   * @memberof PostProductsUuidRequest
   */
  values?: {
    [key: string]: Array<ProductsAllOfEmbeddedItemsInnerAllOfValuesValueInner>;
  };
  /**
   *
   * @type {ProductsAllOfEmbeddedItemsInnerAllOfAssociations}
   * @memberof PostProductsUuidRequest
   */
  associations?: ProductsAllOfEmbeddedItemsInnerAllOfAssociations;
  /**
   *
   * @type {ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociations}
   * @memberof PostProductsUuidRequest
   */
  quantifiedAssociations?: ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociations;
  /**
   * Date of creation
   * @type {string}
   * @memberof PostProductsUuidRequest
   */
  created?: string;
  /**
   * Date of the last update
   * @type {string}
   * @memberof PostProductsUuidRequest
   */
  updated?: string;
  /**
   *
   * @type {ProductsAllOfEmbeddedItemsInnerAllOfMetadata}
   * @memberof PostProductsUuidRequest
   */
  metadata?: ProductsAllOfEmbeddedItemsInnerAllOfMetadata;
  /**
   * Product quality scores for each channel/locale combination (only available since the 5.0 and when the "with_quality_scores" query parameter is set to "true")
   * @type {object}
   * @memberof PostProductsUuidRequest
   */
  qualityScores?: object;
  /**
   * Product completenesses for each channel/locale combination (only available since the 7.0 version, and when the "with_completenesses" query parameter is set to "true")
   * @type {Array<ProductsAllOfEmbeddedItemsInnerAllOfCompletenessesInner>}
   * @memberof PostProductsUuidRequest
   */
  completenesses?: Array<ProductsAllOfEmbeddedItemsInnerAllOfCompletenessesInner>;
}

/**
 *
 * @export
 * @interface Products
 */
declare interface Products {
  /**
   *
   * @type {ProductsAllOfLinks}
   * @memberof Products
   */
  links?: ProductsAllOfLinks;
  /**
   * Current page number
   * @type {number}
   * @memberof Products
   */
  currentPage?: number;
  /**
   *
   * @type {ProductsAllOfEmbedded}
   * @memberof Products
   */
  embedded?: ProductsAllOfEmbedded;
}

/**
 *
 * @export
 * @interface ProductsAllOfEmbedded
 */
declare interface ProductsAllOfEmbedded {
  /**
   *
   * @type {Array<ProductsAllOfEmbeddedItemsInner>}
   * @memberof ProductsAllOfEmbedded
   */
  items?: Array<ProductsAllOfEmbeddedItemsInner>;
}

/**
 *
 * @export
 * @interface ProductsAllOfEmbeddedItemsInner
 */
declare interface ProductsAllOfEmbeddedItemsInner {
  /**
   *
   * @type {ProductsAllOfEmbeddedItemsInnerAllOfLinks}
   * @memberof ProductsAllOfEmbeddedItemsInner
   */
  links?: ProductsAllOfEmbeddedItemsInnerAllOfLinks;
  /**
   * Product uuid
   * @type {string}
   * @memberof ProductsAllOfEmbeddedItemsInner
   */
  uuid?: string;
  /**
   * Whether the product is enabled
   * @type {boolean}
   * @memberof ProductsAllOfEmbeddedItemsInner
   */
  enabled?: boolean;
  /**
   * <a href='api-reference.html#Family'>Family</a> code from which the product inherits its attributes and attributes requirements.
   * @type {string}
   * @memberof ProductsAllOfEmbeddedItemsInner
   */
  family?: string;
  /**
   * Codes of the <a href='api-reference.html#Category'>categories</a> in which the product is classified
   * @type {Array<string>}
   * @memberof ProductsAllOfEmbeddedItemsInner
   */
  categories?: Array<string>;
  /**
   * Codes of the groups to which the product belong
   * @type {Array<string>}
   * @memberof ProductsAllOfEmbeddedItemsInner
   */
  groups?: Array<string>;
  /**
   * Code of the parent <a href='api-reference.html#Productmodel'>product model</a> when the product is a variant (only available since the 2.0). This parent can be modified since the 2.3.
   * @type {string}
   * @memberof ProductsAllOfEmbeddedItemsInner
   */
  parent?: string;
  /**
   * Product attributes values, see <a href='/concepts/products.html#focus-on-the-product-values'>Product values</a> section for more details
   * @type {{ [key: string]: Array<ProductsAllOfEmbeddedItemsInnerAllOfValuesValueInner>; }}
   * @memberof ProductsAllOfEmbeddedItemsInner
   */
  values?: {
    [key: string]: Array<ProductsAllOfEmbeddedItemsInnerAllOfValuesValueInner>;
  };
  /**
   *
   * @type {ProductsAllOfEmbeddedItemsInnerAllOfAssociations}
   * @memberof ProductsAllOfEmbeddedItemsInner
   */
  associations?: ProductsAllOfEmbeddedItemsInnerAllOfAssociations;
  /**
   *
   * @type {ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociations}
   * @memberof ProductsAllOfEmbeddedItemsInner
   */
  quantifiedAssociations?: ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociations;
  /**
   * Date of creation
   * @type {string}
   * @memberof ProductsAllOfEmbeddedItemsInner
   */
  created?: string;
  /**
   * Date of the last update
   * @type {string}
   * @memberof ProductsAllOfEmbeddedItemsInner
   */
  updated?: string;
  /**
   *
   * @type {ProductsAllOfEmbeddedItemsInnerAllOfMetadata}
   * @memberof ProductsAllOfEmbeddedItemsInner
   */
  metadata?: ProductsAllOfEmbeddedItemsInnerAllOfMetadata;
  /**
   * Product quality scores for each channel/locale combination (only available since the 5.0 and when the "with_quality_scores" query parameter is set to "true")
   * @type {object}
   * @memberof ProductsAllOfEmbeddedItemsInner
   */
  qualityScores?: object;
  /**
   * Product completenesses for each channel/locale combination (only available since the 7.0 version, and when the "with_completenesses" query parameter is set to "true")
   * @type {Array<ProductsAllOfEmbeddedItemsInnerAllOfCompletenessesInner>}
   * @memberof ProductsAllOfEmbeddedItemsInner
   */
  completenesses?: Array<ProductsAllOfEmbeddedItemsInnerAllOfCompletenessesInner>;
}

/**
 * Several associations related to groups, product models and/or other products, grouped by association types
 * @export
 * @interface ProductsAllOfEmbeddedItemsInnerAllOfAssociations
 */
declare interface ProductsAllOfEmbeddedItemsInnerAllOfAssociations {
  /**
   *
   * @type {ProductsAllOfEmbeddedItemsInnerAllOfAssociationsAssociationTypeCode}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfAssociations
   */
  associationTypeCode?: ProductsAllOfEmbeddedItemsInnerAllOfAssociationsAssociationTypeCode;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface ProductsAllOfEmbeddedItemsInnerAllOfAssociationsAssociationTypeCode
 */
declare interface ProductsAllOfEmbeddedItemsInnerAllOfAssociationsAssociationTypeCode {
  /**
   * Array of groups codes with which the product is in relation
   * @type {Array<string>}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfAssociationsAssociationTypeCode
   */
  groups?: Array<string>;
  /**
   * Array of product uuids with which the product is in relation
   * @type {Array<string>}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfAssociationsAssociationTypeCode
   */
  products?: Array<string>;
  /**
   * Array of product model codes with which the product is in relation (only available since the v2.1)
   * @type {Array<string>}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfAssociationsAssociationTypeCode
   */
  productModels?: Array<string>;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface ProductsAllOfEmbeddedItemsInnerAllOfCompletenessesInner
 */
declare interface ProductsAllOfEmbeddedItemsInnerAllOfCompletenessesInner {
  /**
   *
   * @type {string}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfCompletenessesInner
   */
  scope?: string;
  /**
   *
   * @type {string}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfCompletenessesInner
   */
  locale?: string;
  /**
   *
   * @type {number}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfCompletenessesInner
   */
  data?: number;
}

/**
 *
 * @export
 * @interface ProductsAllOfEmbeddedItemsInnerAllOfLinks
 */
declare interface ProductsAllOfEmbeddedItemsInnerAllOfLinks {
  /**
   *
   * @type {ProductsAllOfEmbeddedItemsInnerAllOfLinksSelf}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfLinks
   */
  self?: ProductsAllOfEmbeddedItemsInnerAllOfLinksSelf;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface ProductsAllOfEmbeddedItemsInnerAllOfLinksSelf
 */
declare interface ProductsAllOfEmbeddedItemsInnerAllOfLinksSelf {
  /**
   * URI of the resource
   * @type {string}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfLinksSelf
   */
  href?: string;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * More information around the product (only available since the v2.0 in the Enterprise Edition)
 * @export
 * @interface ProductsAllOfEmbeddedItemsInnerAllOfMetadata
 */
declare interface ProductsAllOfEmbeddedItemsInnerAllOfMetadata {
  /**
   * Status of the product regarding the user permissions
   * @type {string}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfMetadata
   */
  workflowStatus?: ProductsAllOfEmbeddedItemsInnerAllOfMetadataWorkflowStatusEnum;
}

/**
 * @export
 */
declare const ProductsAllOfEmbeddedItemsInnerAllOfMetadataWorkflowStatusEnum: {
  readonly ReadOnly: "read_only";
  readonly DraftInProgress: "draft_in_progress";
  readonly ProposalWaitingForApproval: "proposal_waiting_for_approval";
  readonly WorkingCopy: "working_copy";
};

declare type ProductsAllOfEmbeddedItemsInnerAllOfMetadataWorkflowStatusEnum = typeof ProductsAllOfEmbeddedItemsInnerAllOfMetadataWorkflowStatusEnum[keyof typeof ProductsAllOfEmbeddedItemsInnerAllOfMetadataWorkflowStatusEnum];

/**
 * Several quantified associations related to products and/or product models, grouped by quantified association types (only available since the 5.0)
 * @export
 * @interface ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociations
 */
declare interface ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociations {
  /**
   *
   * @type {ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociations
   */
  quantifiedAssociationTypeCode?: ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode;
}

/**
 *
 * @export
 * @interface ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode
 */
declare interface ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode {
  /**
   * Array of objects containing product uuids and quantities with which the product is in relation
   * @type {Array<ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsInner>}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode
   */
  products?: Array<ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsInner>;
  /**
   * Array of objects containing product model codes and quantities with which the product is in relation
   * @type {Array<ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsInner>}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode
   */
  productModels?: Array<ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsInner>;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsInner
 */
declare interface ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsInner {
  /**
   *
   * @type {string}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsInner
   */
  code?: string;
  /**
   *
   * @type {number}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsInner
   */
  quantity?: number;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsInner
 */
declare interface ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsInner {
  /**
   *
   * @type {string}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsInner
   */
  uuid?: string;
  /**
   *
   * @type {number}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsInner
   */
  quantity?: number;
}

/**
 *
 * @export
 * @interface ProductsAllOfEmbeddedItemsInnerAllOfValuesValueInner
 */
declare interface ProductsAllOfEmbeddedItemsInnerAllOfValuesValueInner {
  /**
   * <a href='api-reference.html#Channel'>Channel</a> code of the product value
   * @type {string}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfValuesValueInner
   */
  scope?: string;
  /**
   * <a href='api-reference.html#Locale'>Locale</a> code of the product value
   * @type {string}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfValuesValueInner
   */
  locale?: string;
  /**
   * Product value. See <a href='/concepts/products.html#the-data-format'>the `data` format</a> section for more details.
   * @type {object}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfValuesValueInner
   */
  data?: object;
  /**
   *
   * @type {ProductsAllOfEmbeddedItemsInnerAllOfValuesValueInnerLinkedData}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfValuesValueInner
   */
  linkedData?: ProductsAllOfEmbeddedItemsInnerAllOfValuesValueInnerLinkedData;
  /**
   * The type of the value's attribute. See <a href='/concepts/catalog-structure.html#attribute'>type</a> section for more details.
   * @type {string}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfValuesValueInner
   */
  attributeType?: string;
  /**
   * Reference entity code when the attribute type is `akeneo_reference_entity` or `akeneo_reference_entity_collection` OR Asset family code when the attribute type is `pim_catalog_asset_collection`
   * @type {string}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfValuesValueInner
   */
  referenceDataName?: string;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Object containing additional data when a related query parameter is enabled. See <a href='/concepts/products.html#the-linked_data-format'>the `linked_data` format</a> section for more details. (only available since the 5.0)
 * @export
 * @interface ProductsAllOfEmbeddedItemsInnerAllOfValuesValueInnerLinkedData
 */
declare interface ProductsAllOfEmbeddedItemsInnerAllOfValuesValueInnerLinkedData {
  /**
   *
   * @type {string}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfValuesValueInnerLinkedData
   */
  attribute?: string;
  /**
   *
   * @type {string}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfValuesValueInnerLinkedData
   */
  code?: string;
  /**
   *
   * @type {object}
   * @memberof ProductsAllOfEmbeddedItemsInnerAllOfValuesValueInnerLinkedData
   */
  labels?: object;
}

/**
 *
 * @export
 * @interface ProductsAllOfLinks
 */
declare interface ProductsAllOfLinks {
  /**
   *
   * @type {ProductsAllOfLinksSelf}
   * @memberof ProductsAllOfLinks
   */
  self?: ProductsAllOfLinksSelf;
  /**
   *
   * @type {ProductsAllOfLinksFirst}
   * @memberof ProductsAllOfLinks
   */
  first?: ProductsAllOfLinksFirst;
  /**
   *
   * @type {ProductsAllOfLinksPrevious}
   * @memberof ProductsAllOfLinks
   */
  previous?: ProductsAllOfLinksPrevious;
  /**
   *
   * @type {ProductsAllOfLinksNext}
   * @memberof ProductsAllOfLinks
   */
  next?: ProductsAllOfLinksNext;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface ProductsAllOfLinksFirst
 */
declare interface ProductsAllOfLinksFirst {
  /**
   * URI of the first page of resources
   * @type {string}
   * @memberof ProductsAllOfLinksFirst
   */
  href?: string;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface ProductsAllOfLinksNext
 */
declare interface ProductsAllOfLinksNext {
  /**
   * URI of the next page of resources
   * @type {string}
   * @memberof ProductsAllOfLinksNext
   */
  href?: string;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface ProductsAllOfLinksPrevious
 */
declare interface ProductsAllOfLinksPrevious {
  /**
   * URI of the previous page of resources
   * @type {string}
   * @memberof ProductsAllOfLinksPrevious
   */
  href?: string;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface ProductsAllOfLinksSelf
 */
declare interface ProductsAllOfLinksSelf {
  /**
   * URI of the current page of resources
   * @type {string}
   * @memberof ProductsAllOfLinksSelf
   */
  href?: string;
}

/**
 *
 * @export
 * @interface ReferenceEntities
 */
declare interface ReferenceEntities {
  /**
   *
   * @type {ReferenceEntitiesAllOfLinks}
   * @memberof ReferenceEntities
   */
  links?: ReferenceEntitiesAllOfLinks;
  /**
   *
   * @type {ReferenceEntitiesAllOfEmbedded}
   * @memberof ReferenceEntities
   */
  embedded?: ReferenceEntitiesAllOfEmbedded;
}

/**
 *
 * @export
 * @interface ReferenceEntitiesAllOfEmbedded
 */
declare interface ReferenceEntitiesAllOfEmbedded {
  /**
   *
   * @type {Array<ReferenceEntitiesAllOfEmbeddedItemsInner>}
   * @memberof ReferenceEntitiesAllOfEmbedded
   */
  items?: Array<ReferenceEntitiesAllOfEmbeddedItemsInner>;
}

/**
 *
 * @export
 * @interface ReferenceEntitiesAllOfEmbeddedItemsInner
 */
declare interface ReferenceEntitiesAllOfEmbeddedItemsInner {
  /**
   *
   * @type {ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLinks}
   * @memberof ReferenceEntitiesAllOfEmbeddedItemsInner
   */
  links?: ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLinks;
  /**
   * Reference entity code
   * @type {string}
   * @memberof ReferenceEntitiesAllOfEmbeddedItemsInner
   */
  code: string;
  /**
   *
   * @type {ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLabels}
   * @memberof ReferenceEntitiesAllOfEmbeddedItemsInner
   */
  labels?: ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLabels;
  /**
   * Code of the reference entity image
   * @type {string}
   * @memberof ReferenceEntitiesAllOfEmbeddedItemsInner
   */
  image?: string;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Reference entity labels for each locale
 * @export
 * @interface ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLabels
 */
declare interface ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLabels {
  /**
   * Reference entity label for the locale `localeCode`
   * @type {string}
   * @memberof ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLabels
   */
  localeCode?: string;
}

/**
 *
 * @export
 * @interface ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLinks
 */
declare interface ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLinks {
  /**
   *
   * @type {ProductsAllOfEmbeddedItemsInnerAllOfLinksSelf}
   * @memberof ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLinks
   */
  self?: ProductsAllOfEmbeddedItemsInnerAllOfLinksSelf;
  /**
   *
   * @type {ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLinksImageDownload}
   * @memberof ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLinks
   */
  imageDownload?: ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLinksImageDownload;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLinksImageDownload
 */
declare interface ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLinksImageDownload {
  /**
   * URI to download the binaries of the reference entity image file
   * @type {string}
   * @memberof ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLinksImageDownload
   */
  href?: string;
}

/**
 *
 * @export
 * @interface ReferenceEntitiesAllOfLinks
 */
declare interface ReferenceEntitiesAllOfLinks {
  /**
   *
   * @type {ProductsAllOfLinksSelf}
   * @memberof ReferenceEntitiesAllOfLinks
   */
  self?: ProductsAllOfLinksSelf;
  /**
   *
   * @type {ProductsAllOfLinksFirst}
   * @memberof ReferenceEntitiesAllOfLinks
   */
  first?: ProductsAllOfLinksFirst;
  /**
   *
   * @type {ProductsAllOfLinksNext}
   * @memberof ReferenceEntitiesAllOfLinks
   */
  next?: ProductsAllOfLinksNext;
}

/**
 *
 * @export
 * @interface ReferenceEntityRecord
 */
declare interface ReferenceEntityRecord {
  /**
   *
   * @type {ReferenceEntitiesAllOfLinks}
   * @memberof ReferenceEntityRecord
   */
  links?: ReferenceEntitiesAllOfLinks;
  /**
   *
   * @type {ReferenceEntityRecordAllOfEmbedded}
   * @memberof ReferenceEntityRecord
   */
  embedded?: ReferenceEntityRecordAllOfEmbedded;
}

/**
 *
 * @export
 * @interface ReferenceEntityRecordAllOfEmbedded
 */
declare interface ReferenceEntityRecordAllOfEmbedded {
  /**
   *
   * @type {Array<ReferenceEntityRecordAllOfEmbeddedItemsInner>}
   * @memberof ReferenceEntityRecordAllOfEmbedded
   */
  items?: Array<ReferenceEntityRecordAllOfEmbeddedItemsInner>;
}

/**
 *
 * @export
 * @interface ReferenceEntityRecordAllOfEmbeddedItemsInner
 */
declare interface ReferenceEntityRecordAllOfEmbeddedItemsInner {
  /**
   *
   * @type {ProductsAllOfEmbeddedItemsInnerAllOfLinks}
   * @memberof ReferenceEntityRecordAllOfEmbeddedItemsInner
   */
  links?: ProductsAllOfEmbeddedItemsInnerAllOfLinks;
  /**
   * Code of the record
   * @type {string}
   * @memberof ReferenceEntityRecordAllOfEmbeddedItemsInner
   */
  code: string;
  /**
   * Record attributes values, see <a href='/concepts/reference-entities.html#focus-on-the-reference-entity-record-values'>Reference entity record values</a> section for more details
   * @type {{ [key: string]: Array<ReferenceEntityRecordAllOfEmbeddedItemsInnerAllOfValuesValueInner>; }}
   * @memberof ReferenceEntityRecordAllOfEmbeddedItemsInner
   */
  values?: {
    [key: string]: Array<ReferenceEntityRecordAllOfEmbeddedItemsInnerAllOfValuesValueInner>;
  };
  /**
   * Date of creation.
   * @type {string}
   * @memberof ReferenceEntityRecordAllOfEmbeddedItemsInner
   */
  created?: string;
  /**
   * Date of the last update.
   * @type {string}
   * @memberof ReferenceEntityRecordAllOfEmbeddedItemsInner
   */
  updated?: string;
}

/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface ReferenceEntityRecordAllOfEmbeddedItemsInnerAllOfValuesValueInner
 */
declare interface ReferenceEntityRecordAllOfEmbeddedItemsInnerAllOfValuesValueInner {
  /**
   * Channel code of the reference entity record value
   * @type {string}
   * @memberof ReferenceEntityRecordAllOfEmbeddedItemsInnerAllOfValuesValueInner
   */
  channel?: string;
  /**
   * Locale code of the reference entity record value
   * @type {string}
   * @memberof ReferenceEntityRecordAllOfEmbeddedItemsInnerAllOfValuesValueInner
   */
  locale?: string;
  /**
   * Reference entity record value. See <a href='/concepts/reference-entities.html#the-data-format'>the `data` format</a> section for more details.
   * @type {object}
   * @memberof ReferenceEntityRecordAllOfEmbeddedItemsInnerAllOfValuesValueInner
   */
  data?: object;
}

declare interface RequestOpts {
  path: string;
  method: HTTPMethod;
  headers: HTTPHeaders;
  query?: HTTPQuery;
  body?: HTTPBody;
}

declare type SdkApiAttribute = {
  get: (requestParameters: GetAttributesCodeRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<PostAttributesRequest>;
  list: (requestParameters?: GetAttributesRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<Attributes>;
  patch_multiple: (requestParameters?: PatchAttributesOperationRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<PatchProducts200Response>;
  patch: (requestParameters: PatchAttributesCodeRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<void>;
  create_multiple: (requestParameters?: PostAttributesOperationRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<void>;
};

declare type SdkApiCategory = {
  get: (requestParameters: GetCategoriesCodeRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<GetCategoriesCode200Response>;
  list: (requestParameters?: GetCategoriesRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<Categories>;
  patch: (requestParameters: PatchCategoriesCodeRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<void>;
  patch_multiple: (requestParameters?: PatchCategoriesOperationRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<PatchProducts200Response>;
  create_multiple: (requestParameters?: PostCategoriesOperationRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<void>;
};

declare type SdkApiFamily = {
  get: (requestParameters: GetFamiliesCodeRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<PostFamiliesRequest>;
  list: (requestParameters?: GetFamiliesRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<Families>;
  patch_multiple: (requestParameters?: PatchFamiliesOperationRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<PatchProducts200Response>;
  patch: (requestParameters: PatchFamiliesCodeRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<void>;
  create_multiple: (requestParameters?: PostFamiliesOperationRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<void>;
};

declare type SdkApiProductUuid = {
  get: (requestParameters: GetProductsUuidUuidRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<PostProductsUuidRequest>;
  list: (requestParameters?: GetProductsUuidRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<Products>;
  patch: (requestParameters: PatchProductsUuidUuidRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<void>;
  delete: (requestParameters: DeleteProductsUuidUuidRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<void>;
};

declare type SdkApiReferenceEntity = {
  get: (requestParameters: GetReferenceEntitiesCodeRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<GetReferenceEntitiesCode200Response>;
  list: (requestParameters?: GetReferenceEntitiesRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<ReferenceEntities>;
  patch: (requestParameters: PatchReferenceEntityCodeOperationRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<void>;
};

declare type SdkApiReferenceEntityAttribute = {
  get: (requestParameters: GetReferenceEntityAttributesCodeRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<GetReferenceEntityAttributesCode200Response>;
  list: (requestParameters: GetReferenceEntitiesCodeAttributesRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<Array<GetReferenceEntitiesCodeAttributes200ResponseInner>>;
  patch: (requestParameters: PatchReferenceEntityAttributesCodeRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<void>;
};

declare type SdkApiReferenceEntityRecord = {
  get: (requestParameters: GetReferenceEntityRecordsCodeRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<GetReferenceEntityRecordsCode200Response>;
  list: (requestParameters: GetReferenceEntityRecordsRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<ReferenceEntityRecord>;
  patch_multiple: (requestParameters: PatchReferenceEntityRecordsRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<Array<PatchReferenceEntityRecords200ResponseInner>>;
  patch: (requestParameters: PatchReferenceEntityRecordsCodeOperationRequest, initOverrides?: RequestInit | InitOverrideFunction) => Promise<void>;
};

export { }


declare global {
  namespace globalThis {
    var PIM: PIM_SDK;
  }
}
