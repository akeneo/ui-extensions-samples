import { Placeholder, SectionTitle, ServerErrorIllustration } from "akeneo-design-system";
import { useGetExternalData } from "./useGetExternalData";
import JsonRenderer from "./JsonRenderer";

function App() {
  const { data, loading, error } = useGetExternalData();

  if (loading) {
    return (
      <SectionTitle>
        <SectionTitle.Title>Loading...</SectionTitle.Title>
      </SectionTitle>
    );
  }

  return (
    <>
      <SectionTitle style={{ marginBottom: 16 }}>
        <SectionTitle.Title>External Data</SectionTitle.Title>
      </SectionTitle>
        {error || !data 
          ?  <Placeholder illustration={<ServerErrorIllustration />} title={"Sorry, an error occured while fetching data."}/>
          : <JsonRenderer data={data} />
        }
    </>
  );
}

export default App;