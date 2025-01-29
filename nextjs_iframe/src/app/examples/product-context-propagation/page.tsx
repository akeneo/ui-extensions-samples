"use client"

import { Helper, Information, Locale, UsersIllustration } from 'akeneo-design-system';
import React, { useState } from 'react';

function ContextPropagation() {

    const [locale, setLocale] = useState('');
    const [scope, setScope] = useState('');

    const handlePostMessage = (event: MessageEvent) => {
        console.log("enter handle post message");

        // Check if the origin is http://localhost:8080
        // Check if the origin is a subdomain of https://*.akeneo.com
        const akeneoPattern = /^https:\/\/[^\/]+\.akeneo\.com$/;
        if (event.origin !== "http://localhost:8080" && !akeneoPattern.test(event.origin)) {
            console.log(event);
            console.error("can't accept MessageEvent from this origin due to my configuration");
            return;
        }

        const data = JSON.parse(event.data);

        if(data.context.locale != null)        
        {
            setLocale(data.context.locale);
        }

        if(data.context.scope != null)        
        {
            setScope(data.context.scope);
        }

        console.log(event);
    };

    React.useEffect(() => {
        console.log("add event listener on message");
        window.addEventListener('message', handlePostMessage, false);

        // cleanup this component
        return () => {
            console.log("remove event listener on message");
            window.removeEventListener('message', handlePostMessage);
        };
    }, []);

    return (
        <>
            {(typeof window !== "undefined" && window.location === window.parent.location) ? <Helper level="error">In order to work properly, this page must be rendered as an iFrame in the PEF to benefit from the window.postMessage events</Helper> : <></>}
            <div>
                <Information
                illustration={<UsersIllustration />}
                title="Listen to pim context propagation"
                >
                Pim product page is contextualized by a scope and a locale.<br/><br/>
                Your app can react to those change in order to:
                <ul>
                    <li>- display relevant data to the user</li>
                    <li>- realize actions on the correct context</li>
                </ul>
                <br/>
                Change the scope and/or locale of the product you&apos;re on and see the context updated in this page.
                </Information>
            </div>
            <div>
                Current locale is: <Locale code={locale} /> ({locale})
                <br/>
                Current scope is: {scope}
            </div>
            <div>
                
            </div>
        </>
    );
};

export default ContextPropagation;