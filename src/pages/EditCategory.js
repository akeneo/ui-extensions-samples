import {useLocation} from "react-router-dom";
import React from "react";
import {ThemeProvider} from "styled-components";
import {
    DeleteIcon,
    IconButton,
    Link,
    LoaderIcon,
    pimTheme,
    Placeholder,
    Table,
    UsersIllustration
} from "akeneo-design-system";
import {EXPRESS_SERVER, PIM_URL} from "../env.js";
import {useGetProductsFromCategory} from "../hooks/index.js";

function EditCategory() {
    const search = useLocation().search;
    const categoryCode = new URLSearchParams(search).get('category[code]');
    const [tick, setTick] = React.useState(true);
    const products = useGetProductsFromCategory(categoryCode, tick);
    const [currentlyDeletingProductUuid, setCurrentlyDeletingProductUuid] = React.useState(undefined);

    const handleRemove = (productUuid) => {
        setCurrentlyDeletingProductUuid(productUuid);
        fetch(`${EXPRESS_SERVER}/removeCategoryOfProduct?productUuid=${productUuid}&categoryCode=${categoryCode}`).then(response => {
            response.json().then(() => {
                setCurrentlyDeletingProductUuid(undefined);
                setTick(tick => !tick);
            })
        });
    }

    return (
        <ThemeProvider theme={pimTheme}>
            <Table>
                <Table.Header>
                    <Table.HeaderCell>Uuid</Table.HeaderCell>
                    <Table.HeaderCell>Identifier</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Header>
                <Table.Body>
                    {typeof products !== 'undefined' && products.length === 0 && <Table.Row><Table.Cell colspan={4}>
                        <Placeholder
                            illustration={<UsersIllustration />}
                            title="No products"
                        >
                            There are no linked products.
                        </Placeholder></Table.Cell></Table.Row>}
                    {typeof products !== 'undefined' && products.map(product => <Table.Row>
                        <Table.Cell><Link href={`${PIM_URL}/#/enrich/product/${product.uuid}`} target={'_parent'}>{product.uuid}</Link></Table.Cell>
                        <Table.Cell>{product.values.sku[0].data}</Table.Cell>
                        <Table.Cell>{product.values.name[0].data}</Table.Cell>
                        <Table.Cell><IconButton
                            level={'danger'}
                            onClick={() => handleRemove(product.uuid)}
                            icon={currentlyDeletingProductUuid === product.uuid ? <LoaderIcon /> : <DeleteIcon/>}
                        /></Table.Cell>
                    </Table.Row>)}
                </Table.Body>
            </Table>
        </ThemeProvider>
    )
}

export {EditCategory};
