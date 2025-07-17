globalThis.PIM = {
    user: {
        username: 'admin',
        first_name: 'John',
        last_name: 'Doe',
    },
    context: {
        product: {
            uuid: '77aac2d4-cbec-4394-8ac7-ee1ccbfb079b',
            identifier: 'my_product'
        }
    },
    api: {
        product_uuid: {
            get: () => new Promise((e) => e({
                uuid: '77aac2d4-cbec-4394-8ac7-ee1ccbfb079b',
                enabled: true,
                family: 'loudspeakers',
                categories: ['loudspeakers'],
                groups: [],
                values: {
                    sku: [
                        {
                            locale: null,
                            scope: null,
                            data: 'my_product',
                            attribute_type: 'pim_catalog_identifier'
                        }
                    ],
                    name: [{
                        locale: null,
                        scope: null,
                        data: 'My awesome product',
                        attribute_type: 'pim_catalog_text'
                    }],
                },
                associations: {},
                quantifiedAssociations: {},
                created: '2024-11-28T13:00:18+00:00',
                updated: '2024-11-28T13:00:18+00:00',
                metadata: {}
            })),
        },
        external: {
            call: () => new Promise((resolve) => {
                resolve({
                    
                        "id": 1,
                        "title": "Essence Mascara Lash Princess",
                        "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
                        "category": "beauty",
                        "price": 9.99,
                        "discountPercentage": 7.17,
                        "rating": 4.94,
                        "stock": 5,
                        "tags": [
                          "beauty",
                          "mascara"
                        ],
                        "brand": "Essence",
                        "sku": "RCH45Q1A",
                        "weight": 2,
                        "dimensions": {
                          "width": 23.17,
                          "height": 14.43,
                          "depth": 28.01
                        },
                        "warrantyInformation": "1 month warranty",
                        "shippingInformation": "Ships in 1 month",
                        "availabilityStatus": "Low Stock",
                        "reviews": [
                          {
                            "rating": 2,
                            "comment": "Very unhappy with my purchase!",
                            "date": "2024-05-23T08:56:21.618Z",
                            "reviewerName": "John Doe",
                            "reviewerEmail": "john.doe@x.dummyjson.com"
                          },
                          {
                            "rating": 2,
                            "comment": "Not as described!",
                            "date": "2024-05-23T08:56:21.618Z",
                            "reviewerName": "Nolan Gonzalez",
                            "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
                          },
                          {
                            "rating": 5,
                            "comment": "Very satisfied!",
                            "date": "2024-05-23T08:56:21.618Z",
                            "reviewerName": "Scarlett Wright",
                            "reviewerEmail": "scarlett.wright@x.dummyjson.com"
                          }
                        ],
                        "returnPolicy": "30 days return policy",
                        "minimumOrderQuantity": 24,
                        "meta": {
                          "createdAt": "2024-05-23T08:56:21.618Z",
                          "updatedAt": "2024-05-23T08:56:21.618Z",
                          "barcode": "9164035109868",
                          "qrCode": "..."
                        },
                        "thumbnail": "...",
                        "images": ["...", "...", "..."]
                      }
                );
            }),
        }
    }
}
