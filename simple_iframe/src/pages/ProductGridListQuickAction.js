import {Button, pimTheme, SectionTitle, SkeletonPlaceholder, Table} from "akeneo-design-system";
import styled, {ThemeProvider} from "styled-components";
import React from "react";
import {useGetProducts} from "../hooks/index.js";

const Container = styled.div`
    padding: 20px;
    background: #e9ebee;
`;

function ProductGridListQuickAction() {
    //listen to the iframe parent the data send by postMessage
    const [search, setSearch] = React.useState('');
    React.useEffect(() => {
            window.addEventListener('message', (event) => {
                const data = event.data;
                console.log('Received data from parent postMessage event:', data);
                if (data && data.filters) {
                    setSearch(data.filters.productFilters);
                }
            });
        },
        []);

    const products = useGetProducts(search);

    const handleDownload = () => {
        const element = document.createElement('a');
        const file = new Blob([JSON.stringify(products)], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = 'products.json';
        document.body.appendChild(element);
        element.click();
        element.remove();
    }

    return (
        <ThemeProvider theme={pimTheme}>
            <Container>
                <SectionTitle>
                    <SectionTitle.Title>
                        Values
                    </SectionTitle.Title>
                    <SectionTitle.Separator/>
                    {products && <Button level="primary" onClick={handleDownload}>Download JSON file</Button>}
                </SectionTitle>
                <Table>
                    <Table.Header>
                        <Table.HeaderCell>uuid</Table.HeaderCell>
                        <Table.HeaderCell>Label</Table.HeaderCell>
                        <Table.HeaderCell>Family</Table.HeaderCell>
                    </Table.Header>
                    <Table.Body>
                        {typeof products === 'undefined' ? [0].map(() => <Table.Row>
                            <Table.Cell><SkeletonPlaceholder>Placeholder uuid</SkeletonPlaceholder></Table.Cell>
                            <Table.Cell><SkeletonPlaceholder>Placeholder label</SkeletonPlaceholder></Table.Cell>
                            <Table.Cell><SkeletonPlaceholder>Placeholder Family</SkeletonPlaceholder></Table.Cell>
                        </Table.Row>) : products.map((product, i) => <Table.Row key={i}>
                            <Table.Cell>{product.uuid}</Table.Cell>
                            <Table.Cell>{product.values?.name && product.values.name.length > 0 ? product.values.name[0].data : 'N/A'}</Table.Cell>
                            <Table.Cell>{product.family}</Table.Cell>
                        </Table.Row>)}
                    </Table.Body>
                </Table>
            </Container>
        </ThemeProvider>
    )
}

export {ProductGridListQuickAction};
