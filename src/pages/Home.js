import React from "react";
import {ThemeProvider} from "styled-components";
import {Button, pimTheme, Placeholder, SkeletonPlaceholder, Table, UsersIllustration} from "akeneo-design-system";
import {EXPRESS_SERVER} from "../env.js";
import {useUiExtensions} from "../hooks/index.js";

function Home() {
    const [tick, setTick] = React.useState(true);
    const uiExtensions = useUiExtensions(tick);

    const callExpressServer = async (url) => {
        const response = await fetch(`${EXPRESS_SERVER}/${url}`);
        const json = await response.json();
        if (json.error) {
            alert(JSON.stringify(json.error));
        } else {
            setTick(tick => !tick);
        }
    }

    const addEditProductTabUiExtension = async () => callExpressServer('addEditProductTabUiExtension');
    const addEditCategoryTabUiExtension = async () => callExpressServer('addEditCategoryTabUiExtension');
    const deleteProductTabUiExtension = async (code) => callExpressServer(`deleteTabExtension?code=${code}`);

    return (
        <ThemeProvider theme={pimTheme}>
            <Button level={'secondary'} onClick={addEditProductTabUiExtension}>Add Edit Product UI Extension</Button>{' '}
            <Button level={'secondary'} onClick={addEditCategoryTabUiExtension}>Add Edit Category UI Extension</Button>
            <Table>
                <Table.Header>
                    <Table.HeaderCell>Code</Table.HeaderCell>
                    <Table.HeaderCell>Position</Table.HeaderCell>
                    <Table.HeaderCell>Configuration</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Header>
                <Table.Body>
                    {typeof uiExtensions !== 'undefined' && uiExtensions.length === 0 && <Table.Row><Table.Cell colspan={4}>
                        <Placeholder
                            illustration={<UsersIllustration />}
                            title="No UI extensions"
                        >
                            There are no UI extensions in your PIM.
                        </Placeholder></Table.Cell></Table.Row>}
                    {typeof uiExtensions === 'undefined' ? [0, 1, 2].map(() => <Table.Row>
                        <Table.Cell><SkeletonPlaceholder>Placeholder code</SkeletonPlaceholder></Table.Cell>
                        <Table.Cell><SkeletonPlaceholder>Placeholder position</SkeletonPlaceholder></Table.Cell>
                        <Table.Cell><SkeletonPlaceholder>Placeholder configuration</SkeletonPlaceholder></Table.Cell>
                        <Table.Cell><SkeletonPlaceholder>Placeholder action</SkeletonPlaceholder></Table.Cell>
                    </Table.Row>) : (uiExtensions || []).map(uiExtension => <Table.Row>
                        <Table.Cell>{uiExtension.code}</Table.Cell>
                        <Table.Cell>{uiExtension.position}</Table.Cell>
                        <Table.Cell>{JSON.stringify(uiExtension.configuration)}</Table.Cell>
                        <Table.Cell><Button level={'danger'} onClick={() => deleteProductTabUiExtension(uiExtension.code)}>Delete</Button></Table.Cell>
                    </Table.Row>)}
                </Table.Body>
            </Table>
        </ThemeProvider>
    )
}

export {Home};
