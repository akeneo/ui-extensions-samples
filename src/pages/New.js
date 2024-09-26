import React from 'react';
import {Button, Field, pimTheme, SelectInput, TextAreaInput, TextInput} from "akeneo-design-system";
import styled, {ThemeProvider} from "styled-components";
import {EXPRESS_SERVER, NODE_URL} from "../env.js";
import {useNavigate} from "react-router-dom";

const FieldList = styled.div`
    & > * {
        margin-bottom: 20px;
    } 
`

function New() {
    const navigate = useNavigate();
    const [type, setType] = React.useState('simple_iframe');
    const [position, setPosition] = React.useState('edit_product_tab');
    const [label, setLabel] = React.useState('');
    const [code, setCode] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [dirtyCode, setDirtyCode] = React.useState(false);
    const [file, setFile] = React.useState('');

    const predefinedUrls = {
        'Akeneo.com': 'https://www.akeneo.com',
        'Category': `${NODE_URL}/edit_category_tab`,
        'Product': `${NODE_URL}/edit_product_tab`,
    }

    const predefinedScripts = {
        'Basic': "document.body.innerHTML = 'It works!';",
    }

    const configuration = {
        'simple_iframe': {
            label: 'Simple iframe',
            positions: ['edit_product_tab', 'edit_category_tab'],
            configuration: ['url'],
        },
        'simple_button': {
            label: 'Simple button',
            positions: ['edit_product_header'],
            configuration: ['url'],
        },
        'sdk_script': {
            label: 'SDK Script',
            positions: ['edit_product_tab'],
            configuration: ['file'],
        },
    };

    const handleSetType = (t) => {
        setType(t);
        setPosition(configuration[t].positions[0]);
        if (!configuration[t].configuration.includes('url')) {
            setUrl(null);
        }
        if (!configuration[t].configuration.includes('file')) {
            setFile(null);
        }
    }

    const handleSetLabel = (l) => {
        setLabel(l);
        if (!dirtyCode) {
            setCode(l.replaceAll(/[^a-zA-Z0-9]/g, '_'));
        }
    }

    const handleSetCode = (c) => {
        setCode(c);
        setDirtyCode(true);
    }

    const callExpressServer = async (params) => {
        const response = await fetch(`${EXPRESS_SERVER}/addUiExtension`, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await response.json();
        if (json.error) {
            alert(JSON.stringify(json.error));
        } else {
            navigate('/');
        }
    }

    const handleCreate = () => {
        const configuration = {};
        if (url) {
            configuration.url = url;
        }
        if (file) {
            configuration.file = file;
        }
        if (label) {
            configuration.labels = {en_US: label};
        }
        const params = {code, type, position, configuration}
        callExpressServer(params);
    }

    return <ThemeProvider theme={pimTheme}>
        <h1>Create a new UI Extension</h1>
        <FieldList>
            <Field label={'Label English'}>
                <TextInput value={label} onChange={handleSetLabel}></TextInput>
            </Field>

            <Field label={'Code'}>
                <TextInput value={code} onChange={handleSetCode}></TextInput>
            </Field>

            <Field label={'UI Extension type'}>
                <SelectInput value={type} emptyResultLabel={''} openLabel={''} onChange={handleSetType} clearable={false}>
                    {Object.keys(configuration).map((t) => <SelectInput.Option value={t}>{configuration[t].label}</SelectInput.Option>)}
                </SelectInput>
            </Field>

            <Field label={'Position'}>
                <SelectInput value={position} emptyResultLabel={''} openLabel={''} onChange={setPosition} clearable={false}>
                    {configuration[type].positions.map((p) => <SelectInput.Option value={p}>{p}</SelectInput.Option>)}
                </SelectInput>
            </Field>

            {configuration[type].configuration.includes('url') && <Field label={'URL'} actions={<>
                {Object.keys(predefinedUrls).map((u) => <Button ghost onClick={() => setUrl(predefinedUrls[u])} size={"small"} level={"tertiary"}>{u}</Button>)}
            </>}>
                <TextInput value={url} onChange={setUrl}></TextInput>
            </Field>}

            {configuration[type].configuration.includes('file') && <Field label={'File'} actions={<>
                {Object.keys(predefinedScripts).map((s) => <Button ghost onClick={() => setFile(predefinedScripts[s])} size={"small"} level={"tertiary"}>{s}</Button>)}
            </>}>
                <TextAreaInput value={file} onChange={setFile}></TextAreaInput>
            </Field>}
        </FieldList>
        <Button onClick={handleCreate} disabled={code === ''}>Create</Button>
    </ThemeProvider>;
}

export {New};
