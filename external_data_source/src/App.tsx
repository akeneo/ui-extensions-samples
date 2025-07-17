import { SectionTitle } from "akeneo-design-system";
import { useGetExternalData } from "./useGetExternalData.ts";
import JsonRenderer from "./JsonRenderer.tsx";

function App() {
  const response = useGetExternalData();

/*   if (response.status !== 200) {
    <SectionTitle>
      <SectionTitle.Title>Error while fetching data.</SectionTitle.Title>
    </SectionTitle>
  } */

  return <>
    <SectionTitle>
      <SectionTitle.Title>External Data</SectionTitle.Title>
    </SectionTitle>
    <JsonRenderer data={response} />
  </>
}

export default App
