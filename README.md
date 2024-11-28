# UI Extension samples

## Prerequisites: BETA stage

We would like to inform you that this feature is currently in its <b>BETA</b> stage. As part of the ongoing development process, method names, parameter names, and other aspects of the functionality may be subject to change. We are continually working to improve and refine the feature.
Please be aware that updates or modifications may occur without prior notice as we aim to enhance stability, performance, and usability.
Thank you for your understanding and collaboration during this phase.

## Simple iframe & simple buttons example

This application example gives access to 4 features:
- A UI for listing and create UI Extensions,
- An example page for the product edit tab position, displaying the product values in a compressed design,
- An example page for the category edit tab position, displaying the products belonging to a category.
- An example page for the Quick action position, displaying the products / product models belonging to a product grid selection.

Please read the [README.md](./simple_iframe/README.md) in the simple_iframe folder.

## DSM SDK script example

This folder contains a minimal example for the SDK Script feature, including the Akeneo DSM.

Please check the [README.md](./dsm_sdk_script/README.md)

# API documentation

There are 3 endpoints: upsert, delete and list.
Each of this endpoint will return a 404 id the feature flag `enable-ui-extension` is disabled.

The [openapi specification](./api/openapi.yaml) describe how to use this API.

The prefered way of testing out this API is by using the [Postman Collection](./api/generated/generated_postman_collection.json)
Import the collection and the [postman environment template](./api/postman/postman_environment_template.json) into postman, then fill the environment variable.

# Enhanced context

## Query parameters placeholders

You can ask for specific values to construct the urls thanks to a specific placeholder pattern. Let's take an example:

You want to configure a `simple_button` to open Google Shopping with a search filtered on the product you're on by it's name.

You can configure a UI Extension with the following url `https://www.google.com/search?q=%name%&tbm=shop&gl=us`, then we will dynamically put the value of the attribute code `name` when the user will click on the simple button.

Valid placeholders attributes are:
- attribute of type: `identifier` & `text` only
- non scopable
- non localizable

You can add a placeholder anywhere in your url as soon as they're surrounded by `%` symbol.
Examples:
- `https://www.google.com/search?q=%name%`
- `https://yourwebsite.com/%sku%`

## The parameters accessible by the iFrame

When loading an iframe, several parameters are sent by default as SearchParameters in a GET query, so the server knows who is the connected user (insecure) and in which context the iframe is opened.

For example, when `url` is `https://customerwebsite.com/iframe/`, the called URL is `https://customerwebite.com/iframe/?paramA=valueA&paramB=valueB`

For all positions except `product_grid_quick_action`, parameters relative to the connected user are sent:
- `user[catalog_locale]`
- `user[catalog_scope]`
- `user[ui_locale]`
- `user[username]`
- `user[email]`

For `edit_product_tab` position, these parameters are sent:
- `product[uuid]`
- `product[identifier]`

For `edit_category_tab` position, this parameter is sent:
- `category[code]`

## The specificities of the grid quick action

For `product_grid_quick_action` position, an object is sent by the parent iframe with a [postMessage JS event](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage):
```json
{
  "filters": {
    "productFilters": {
      "uuid": [
        {
          "operator": "IN",
          "value": [
            "90faabea-83ce-4f0a-85e4-9832abc565d6"
          ]
        }
      ]
    },
    "productModelFilters": []
  },
  "itemsCount": 1,
  "context": {
    "locale": "en_US",
    "scope": "ecommerce"
  }
}
```
