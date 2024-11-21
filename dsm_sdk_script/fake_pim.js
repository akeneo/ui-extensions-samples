/// <reference path="global.d.ts" />
globalThis.PIM = {
    context: {
        product: {
            uuid: 'a289baa6-a59c-49dd-8146-9a0b8e7635fb',
            identifier: 'My product identifier'
        }
    },
    api: {
        products_uuid: {
            get: () => new Promise(resolve => {
                resolve({
                    uuid: '37bd66c4-c665-4cc1-98d2-a3f5fcc9539a',
                    enabled: true,
                    family: 'digital_cameras',
                    categories: ['cameras_sales','digital_cameras'],
                    groups: [],
                    values: {
                        camera_type: [
                            {locale: null, scope: null, data: 'compact', attribute_type: 'pim_catalog_simpleselect'}
                        ],
                        sku: [
                            {locale: null, scope: null, data: '13710067', attribute_type: 'pim_catalog_identifier'}
                        ],
                        name: [
                            {
                                locale: null,
                                scope: null,
                                data: 'Fujifilm FinePix S4200',
                                attribute_type: 'pim_catalog_text'
                            }
                        ],
                        total_megapixels: [
                            {locale: null, scope: null, data: '16000000', attribute_type: 'pim_catalog_text'}
                        ],
                        weight: [
                            {
                                locale: null,
                                scope: null,
                                data: {amount: '533.0000', unit: 'GRAM'},
                                attribute_type: 'pim_catalog_metric'
                            }
                        ],
                        description: [
                            {
                                locale: 'en_US',
                                scope: 'print',
                                data: "<b>Long 24x optical zoom</b>\\nThe combination of versatile & functional Fujinon lens and a bright viewfinder gives a sensational shooting experience.\\n\\n<b>SR AUTO & Detection Functions</b>\\nEquipped with SR AUTO, an auto 6 scene-recognition function fully loaded with detection functions that finds faces, blinks and smiles for clear optimised people photos.\\n\\n<b>High Performance Shooting Functions</b>\\nIntroducing high-performance shooting functions of Motion Panorama, Super Macro, Tracking Auto Focus, Instant Zoom and a Zoom Bracketing Mode.\\n\\n<b>Easy Upload and Searching</b>\\nShare pictures with friends and family, tagging pictures and movies for upload to FACEBOOK and YouTube™ right within your camera.",
                                attribute_type: 'pim_catalog_textarea'
                            }
                        ],
                        optical_zoom: [
                            {locale: null, scope: null, data: 24, attribute_type: 'pim_catalog_number'}
                        ],
                        release_date: [
                            {
                                locale: null,
                                scope: 'ecommerce',
                                data: '2012-04-08T00:00:00+00:00',
                                attribute_type: 'pim_catalog_date'
                            }
                        ],
                        auto_exposure: [
                            {locale: null, scope: null, data: false, attribute_type: 'pim_catalog_boolean'}
                        ],
                    },
                    associations: {},
                    quantifiedAssociations: {},
                    created: '2024-10-16T14:40:41+00:00',
                    updated: '2024-10-16T14:40:41+00:00',
                    metadata: {
                        workflowStatus: 'working_copy'
                    }
                });
            })
        }
    }
}
