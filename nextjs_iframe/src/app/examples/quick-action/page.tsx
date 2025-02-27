"use client"

import { Badge, Helper, Information, Link, Locale, UsersIllustration } from 'akeneo-design-system';
import React, {useRef, useState} from "react";


function ContextPropagation() {

    const [locale, setLocale] = useState('');
    const [channel, setChannel] = useState('');
    const [productFilters, setProductFilters] = useState('');
    const [productModelFilters, setProductModelFilters] = useState('');

    const contextAlreadyAsked = useRef<boolean>(false)
    const requestContext = () => {
        if (!contextAlreadyAsked.current) {
            contextAlreadyAsked.current = true;
            window.parent.postMessage(
                {
                    type: 'request_context'
                },
                "*"
            );
        }
    }

    const handlePostMessage = (event: MessageEvent) => {
        console.log("enter handle post message");
        console.log(event);

        // Check if the origin is http://localhost:8080
        // Check if the origin is a subdomain of https://*.akeneo.com
        const akeneoPattern = /^https:\/\/[^\/]+\.akeneo\.com$/;
        if (event.origin !== "http://localhost:8080" && !akeneoPattern.test(event.origin)) {
            console.error("can't accept MessageEvent from this origin due to my configuration");
            return;
        }

        const data = event.data;

        if(data.context.locale != null)
        {
            setLocale(data.context.locale);
        }

        if(data.context.channel != null)
        {
            setChannel(data.context.channel);
        }

        if(data.filters.productFilters != null)
        {
            setProductFilters(JSON.stringify(JSON.parse(data.filters.productFilters), null, 4));
        }

        if(data.filters.productModelFilters != null)
        {
            setProductModelFilters(JSON.stringify(JSON.parse(data.filters.productModelFilters), null, 4));
        }
    };

    React.useEffect(() => {
        window.addEventListener('message', handlePostMessage, false);
        requestContext();
        // cleanup this component
        return () => {
            window.removeEventListener('message', handlePostMessage);
        };
    }, []);

    return (
        <>
            {(typeof window !== "undefined" && window.location === window.parent.location) ? <Helper level="error">In order to work properly, this page must be rendered as an iFrame at a quick_action position to benefit from the window.postMessage events</Helper> : <></>}
            <div>
                <Information
                illustration={<UsersIllustration />}
                title="Listen to pim context propagation"
                >
                Pim product grid is contextualized by a scope and a locale.<br/><br/>
                With an iFrame dealing with product grid data, you&apos;ll also receive the product selection with a <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage" target="_blank">window.postMessage</Link> event.
                </Information>
            </div>
            <div>
                Current locale is: <Locale code={locale} /> ({locale})
                <br/>
                Current channel is: {channel}
            </div>
            <br/>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-100">
                    <Badge level="tertiary">
                    product filters
                    </Badge>
                    <pre >
                        {productFilters}
                    </pre>
                </div>
                <div className="bg-purple-200">
                    <Badge level="tertiary">
                    product model filters
                    </Badge>
                    <pre >
                        {productModelFilters}
                    </pre>
                </div>
            </div>
        </>
    );
}

export default ContextPropagation;
