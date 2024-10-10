// \AkeneoEnterprise\Connectivity\UiExtension\Infrastructure\Controller\InternalAPI\SdkIframeContentController::getUserInfo
type PIM_USER = {
  username: string;
  first_name: string;
  last_name: string;
};

// src/AkeneoEnterprise/Connectivity/UiExtension/back/Infrastructure/Symfony/Resources/public/edit_product_tab_sdk_script.js
type PIM_CONTEXT = {
  product: {
    uuid: string,
    identifier: string | null,
  },
}

type PIM_SCRIPT_URL = string;

declare global {
  namespace globalThis {
    var PIM_USER: PIM_USER;
    var PIM_CONTEXT: PIM_CONTEXT;
    var PIM_JWT: string;
    var PIM_HOST: string;
    var PIM_SCRIPT_URL: PIM_SCRIPT_URL
    var PIM: {
      user: PIM_USER,
      context: PIM_CONTEXT,
      api: {
        products_uuid: {
          get: (uuid: string) => Promise<Response>,
        }
      },
    }
  }
}

export interface global {}
