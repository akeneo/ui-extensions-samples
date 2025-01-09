import React from "react";
import {ThemeProvider} from "styled-components";
import {
    Button,
    Helper, Information,
    pimTheme,
    Placeholder, ProjectIllustration,
    SkeletonPlaceholder,
    Table,
    UsersIllustration
} from "akeneo-design-system";
import {EXPRESS_SERVER} from "../env.js";
import {useUiExtensions} from "../hooks/index.js";
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();
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

    const deleteProductTabUiExtension = async (uuid) => callExpressServer(`deleteTabExtension?uuid=${uuid}`);

    return (
        <ThemeProvider theme={pimTheme}>
            <h1>UI Extensions</h1>
            <Information
                illustration={<ProjectIllustration />}
                title={'Feature in BETA: Subject to Changes'}
            >
                We would like to inform you that this feature is currently in its <em>BETA</em> stage. As part of the ongoing development process, method names, parameter names, and other aspects of the functionality may be subject to change. We are continually working to improve and refine the feature.
                <p/>
                Please be aware that updates or modifications may occur without prior notice as we aim to enhance stability, performance, and usability.
                <p/>
                Thank you for your understanding and collaboration during this phase.
            </Information>
            <Table>
                <Table.Header>
                    <Table.HeaderCell>Code</Table.HeaderCell>
                    <Table.HeaderCell>Position</Table.HeaderCell>
                    <Table.HeaderCell>Type</Table.HeaderCell>
                    <Table.HeaderCell>Configuration</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Header>
                <Table.Body>
                    {uiExtensions === null && <Table.Row><Table.Cell colspan={4}>
                        <Helper level={'error'}>
                        An error occurred during UI Extension fetch. Check console.
                        </Helper>
                        </Table.Cell></Table.Row>
                    }
                    {typeof uiExtensions !== 'undefined' && uiExtensions !== null && uiExtensions.length === 0 && <Table.Row><Table.Cell colspan={4}>
                        <Placeholder
                            illustration={<UsersIllustration />}
                            title="No UI extensions"
                        >
                            There are no UI extensions in your PIM.
                        </Placeholder></Table.Cell></Table.Row>}
                    {typeof uiExtensions === 'undefined' ? [0, 1, 2].map(() => <Table.Row>
                        <Table.Cell><SkeletonPlaceholder>Placeholder name</SkeletonPlaceholder></Table.Cell>
                        <Table.Cell><SkeletonPlaceholder>Placeholder position</SkeletonPlaceholder></Table.Cell>
                        <Table.Cell><SkeletonPlaceholder>Placeholder configuration</SkeletonPlaceholder></Table.Cell>
                        <Table.Cell><SkeletonPlaceholder>Placeholder action</SkeletonPlaceholder></Table.Cell>
                    </Table.Row>) : (uiExtensions || []).map(uiExtension => <Table.Row>
                        <Table.Cell>{uiExtension.name}</Table.Cell>
                        <Table.Cell>{uiExtension.position}</Table.Cell>
                        <Table.Cell>{uiExtension.type}</Table.Cell>
                        <Table.Cell><pre>{JSON.stringify(uiExtension.configuration)}</pre></Table.Cell>
                        <Table.Cell><Button level={'danger'} onClick={() => deleteProductTabUiExtension(uiExtension.uuid)}>Delete</Button></Table.Cell>
                    </Table.Row>)}
                </Table.Body>
            </Table>
            <Button onClick={() => navigate('/new')}>Create UI Extension</Button>
        </ThemeProvider>
    )
}

export {Home};
