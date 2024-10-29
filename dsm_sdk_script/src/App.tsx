import * as React from "react";
import {PIM_SDK} from "../global";
import {useProduct} from "./useProduct.ts";

type AppProps = {
  PIM: PIM_SDK
}

const App: React.FC<AppProps> = ({PIM}) => {
  const product = useProduct(PIM.context.product?.uuid);

  return <>
    {product && JSON.stringify(product)}
  </>
}

export default App
