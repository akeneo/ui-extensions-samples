import React from 'react';
import {Button, Field, pimTheme, SelectInput, TextInput} from "akeneo-design-system";
import styled, {ThemeProvider} from "styled-components";
import {EXPRESS_SERVER, NODE_URL} from "../env.js";
import {useNavigate} from "react-router-dom";

const FieldList = styled.div`
    & > * {
        margin-bottom: 20px;
    } 
`

const flatSearchParameters = (parameters, prefix) => {
    if (prefix === void 0) { prefix = ''; }
    var result = {};
    for (var parameterKey in parameters) {
        if (Object.prototype.hasOwnProperty.call(parameters, parameterKey)) {
            var flattenKey = prefix ? "".concat(prefix, "[").concat(parameterKey, "]") : parameterKey;
            if (typeof parameters[parameterKey] === 'object' && parameters[parameterKey] !== null && !('name' in parameters[parameterKey])) {
                Object.assign(result, flatSearchParameters(parameters[parameterKey], flattenKey));
            }
            else {
                result[flattenKey] = parameters[parameterKey];
            }
        }
    }
    return result;
};

function New() {
    const navigate = useNavigate();
    const [type, setType] = React.useState('iframe');
    const [position, setPosition] = React.useState('edit_product_tab');
    const [label, setLabel] = React.useState('');
    const [name, setName] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [dirtyCode, setDirtyCode] = React.useState(false);
    const [file, setFile] = React.useState(null);

    const predefinedUrls = {
        'Akeneo.com': 'https://www.akeneo.com',
        'Category': `${NODE_URL}/edit_category_tab`,
        'Product': `${NODE_URL}/edit_product_tab`,
    }

    const configuration = {
        'iframe': {
            label: 'Iframe',
            positions: ['pim.product.tab', 'pim.category.tab', 'pim.product-grid.action-bar'],
            configuration: ['url'],
        },
        'link': {
            label: 'Link',
            positions: ['pim.product.header'],
            configuration: ['url'],
        },
        'sdk_script': {
            label: 'SDK Script',
            positions: ['pim.product.tab'],
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
            setName(l.replaceAll(/[^a-zA-Z0-9]/g, '_'));
        }
    }

    const handleSetName = (c) => {
        setName(c);
        setDirtyCode(true);
    }

    const callExpressServer = async (params) => {
        const formData = new FormData();
        const flatParams = flatSearchParameters(params);
        Object.keys(flatParams).forEach((key) => {
            formData.set(key, flatParams[key]);
        });
        const response = await fetch(`${EXPRESS_SERVER}/addUiExtension`, {
            method: 'POST',
            body: formData,
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
            configuration.default_label = label;
            configuration.labels = {en_US: label};
        }
        const params = {name, type, position, configuration}
        callExpressServer(params);
    }

    return <ThemeProvider theme={pimTheme}>
        <h1>Create a new UI Extension</h1>
        <FieldList>
            <Field label={'Label English'}>
                <TextInput value={label} onChange={handleSetLabel}></TextInput>
            </Field>

            <Field label={'Name'}>
                <TextInput value={name} onChange={handleSetName}></TextInput>
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

            {configuration[type].configuration.includes('file') && <Field label={'File'}>
                <input type='file' onChange={(event) => setFile(event.target.files[0])}/>
            </Field>}
        </FieldList>
        <Button onClick={handleCreate} disabled={name === ''}>Create</Button>
    </ThemeProvider>;
}

export {New};
