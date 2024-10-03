import {useLocation} from "react-router-dom";
import {BooleanInput, List, pimTheme, SectionTitle, SkeletonPlaceholder, Table} from "akeneo-design-system";
import {ThemeProvider} from "styled-components";
import React from "react";
import {useGetAttributes, useGetProduct} from "../hooks/index.js";

function EditProduct() {
    const search = useLocation().search;
    const product_uuid = new URLSearchParams(search).get('product[uuid]');
    const product = useGetProduct(product_uuid);
    const attributes = useGetAttributes(Object.keys((product || {}).values || {}));

    const values = (product || {}).values || {};
    let flattenValues = [];
    Object.keys(values).forEach(attributeCode => {
        values[attributeCode].forEach(value => {
            flattenValues.push({
                attribute: attributeCode,
                locale: value.locale,
                scope: value.scope,
                data: value.data,
            });
        });
    });

    const getAttribute = (attributeCode) => {
        return attributes.find((attribute) => attribute.code === attributeCode);
    }

    const getAttributeLabel = (attributeCode) => {
        const attribute = getAttribute(attributeCode);
        if (attribute) {
            return attribute.labels['en_US'];
        }
        return `[${attributeCode}]`;
    }

    const getAttributeValue = (attributeCode, data) => {
        const attributeType = getAttribute(attributeCode)?.type;
        switch (attributeType) {
            case 'pim_catalog_identifier':
            case 'pim_catalog_simpleselect':
            case 'pim_catalog_number':
            case 'pim_catalog_date':
            case 'pim_catalog_text': return data;
            case 'pim_catalog_metric': return `${data.amount} ${data.unit}`;
            case 'pim_catalog_boolean': return <BooleanInput value={data} yesLabel={'Yes'} noLabel={'No'} readOnly={true}/>;
            case 'pim_catalog_textarea': return <div style={{whiteSpace: "break-spaces"}} dangerouslySetInnerHTML={{__html: data.replace(/\\n/g, '<br/>')}}/>;
            case undefined: return <SkeletonPlaceholder>{JSON.stringify(data)}</SkeletonPlaceholder>
            default: console.log(attributeType, data); return JSON.stringify(data);
        }
    }

    return (
        <ThemeProvider theme={pimTheme}>
            <SectionTitle>
                <SectionTitle.Title>
                    Values
                </SectionTitle.Title>
            </SectionTitle>
            <Table>
                <Table.Header>
                    <Table.HeaderCell>Attribute</Table.HeaderCell>
                    <Table.HeaderCell>Locale</Table.HeaderCell>
                    <Table.HeaderCell>Scope</Table.HeaderCell>
                    <Table.HeaderCell>Data</Table.HeaderCell>
                </Table.Header>
                <Table.Body>
                    {typeof product === 'undefined' ? [0, 1, 2].map(() => <Table.Row>
                        <Table.Cell><SkeletonPlaceholder>Placeholder Attribute</SkeletonPlaceholder></Table.Cell>
                        <Table.Cell><SkeletonPlaceholder>Placeholder Locale</SkeletonPlaceholder></Table.Cell>
                        <Table.Cell><SkeletonPlaceholder>Placeholder Scope</SkeletonPlaceholder></Table.Cell>
                        <Table.Cell><SkeletonPlaceholder>Placeholder Data</SkeletonPlaceholder></Table.Cell>
                    </Table.Row>) : flattenValues.map((value, i) => <Table.Row key={i}>
                        <Table.Cell>{getAttributeLabel(value.attribute)}</Table.Cell>
                        <Table.Cell>{value.locale}</Table.Cell>
                        <Table.Cell>{value.scope}</Table.Cell>
                        <Table.Cell>{getAttributeValue(value.attribute, value.data)}</Table.Cell>
                    </Table.Row>)}
                </Table.Body>
            </Table>
            <SectionTitle>
                <SectionTitle.Title>
                    Categories
                </SectionTitle.Title>
            </SectionTitle>
            <List>
                {((product || {}).categories || []).map(category => <List.Row><List.Cell>{category}</List.Cell></List.Row>)}
            </List>
        </ThemeProvider>
    )
}

export {EditProduct};
