import { Badge, Button, IconButton, MoreIcon, SectionTitle, Table } from 'akeneo-design-system';

function Fitment() {
    return (
        <>
            <div>
                <SectionTitle>
                    <SectionTitle.Title>General parameters</SectionTitle.Title>
                    <SectionTitle.Spacer />
                    <SectionTitle.Information>10 results</SectionTitle.Information>
                    <SectionTitle.Separator />
                    <Button>Action</Button>
                    <Button level="danger">Action</Button>
                    <IconButton icon={<MoreIcon />} title="More" />
                </SectionTitle>
            </div>
            <div>
                <Table
                    hasLockedRows
                    hasWarningRows
                >
                    <Table.Header sticky={0}>
                    <Table.HeaderCell>
                        Name
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Family
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Order
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Genus
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Conservation status
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Actions
                    </Table.HeaderCell>
                    </Table.Header>
                    <Table.Body>
                    <Table.Row level="tertiary">
                        <Table.Cell>
                        Giant panda
                        </Table.Cell>
                        <Table.Cell>
                        Ursidae
                        </Table.Cell>
                        <Table.Cell>
                        Carnivora
                        </Table.Cell>
                        <Table.Cell>
                        Ursus
                        </Table.Cell>
                        <Table.Cell>
                        <Badge level="warning">
                            vu
                        </Badge>
                        </Table.Cell>
                        <Table.ActionCell>
                        <Button
                            ghost
                            level="primary"
                        >
                            Button
                        </Button>
                        </Table.ActionCell>
                    </Table.Row>
                    <Table.Row level="warning">
                        <Table.Cell>
                        Giant panda
                        </Table.Cell>
                        <Table.Cell>
                        Ursidae
                        </Table.Cell>
                        <Table.Cell>
                        Carnivora
                        </Table.Cell>
                        <Table.Cell>
                        Ursus
                        </Table.Cell>
                        <Table.Cell>
                        <Badge level="warning">
                            vu
                        </Badge>
                        </Table.Cell>
                        <Table.ActionCell>
                        <Button
                            ghost
                            level="primary"
                        >
                            Button
                        </Button>
                        </Table.ActionCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                        Red panda
                        </Table.Cell>
                        <Table.Cell>
                        Ailuridae
                        </Table.Cell>
                        <Table.Cell>
                        Carnivora
                        </Table.Cell>
                        <Table.Cell>
                        Ailurus
                        </Table.Cell>
                        <Table.Cell>
                        <Badge level="warning">
                            vu
                        </Badge>
                        </Table.Cell>
                        <Table.ActionCell>
                        <Button
                            ghost
                            level="primary"
                        >
                            Button
                        </Button>
                        </Table.ActionCell>
                    </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </>
    );
};

export default Fitment;