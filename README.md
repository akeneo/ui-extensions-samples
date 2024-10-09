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

## Upsert a UI Extension

Call `/api/rest/v1/ui-extension/my_category_extension'` with a `POST`. The body should look like this:

```json
{
  "code": "my_category_extension",
  "position": "edit_category_tab",
  "type": "simple_iframe",
  "configuration": {
    "url": "https://mycustomerwebsite.com/iframe/",
    "labels": {
      "en_US": "My custom iframe"
    }
  }
}
```

It returns:
- 201 if UI extension is created
- 204 if UI extension is updated
- 422 if there is a violation error
- 400 if JSON is invalid

The `configuration` depends on the `position`. Available positions are `edit_product_tab`, `edit_category_tab` and `edit_product_header`.
For now, the only configuration keys are the same for all the position.

The `type` available are `simple_iframe` and `simple_button`. It depends on the `position` :
- `simple_iframe` for `edit_product_tab`, `edit_category_tab` and `product_grid_quick_action`
- `simple_button` for `edit_product_header`

### url

The URL of the iframe to display. For example:
```json
{
  "url": "https://mycustomerwebsite.com/iframe"
}
```

### labels (optional)

An object of locale*label. For example:
```json
{
  "labels": {
    "en_US": "My english label",
    "fr_FR": "My french label"
  }
}
```

## Delete a UI Extension

Call `/api/rest/v1/ui-extension/ui_extension_code` with a `DELETE`.

It returns:
- 204 if ui_extension_code is deleted
- 404 if ui_extension_code does not exist

## List UI Extensions

Call `/api/rest/v1/ui-extension` with a `GET`.

There is no search and no filter.

It returns all UI extensions in this format:

```json
[
  {
    "code": "my_category_extension_1",
    "position": "edit_category_tab",
    "type": "simple_iframe",
    "configuration": {
      "config_key_a": "value_key_a",
      "config_key_b": "value_key_b"
    }
  },
  {
    "code": "my_category_extension_2",
    "position": "edit_category_tab",
    "type": "simple_iframe",
    "configuration": {
      "config_key_a": "value_key_a",
      "config_key_b": "value_key_b"
    }
  },
  {
    "code": "my_edit_product_header_extension_1",
    "position": "edit_product_header",
    "type": "simple_button",
    "configuration": {
      "config_key_a": "value_key_a",
      "config_key_b": "value_key_b"
    }
  }
]
```

# The UI Extension parameters

When loading an iframe, several parameters are send as SearchParameters in a GET query, so the server knows who is the connected user (insecure) and in which context the iframe is opened.

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
