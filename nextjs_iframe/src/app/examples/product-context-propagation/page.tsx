"use client"

import { Helper, Information, Locale, UsersIllustration } from 'akeneo-design-system';
import React, { useState } from 'react';

function ContextPropagation() {

    const [locale, setLocale] = useState('');
    const [scope, setScope] = useState('');

    const handlePostMessage = (event: MessageEvent) => {
        if (event.origin !== "http://localhost:8080") {
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
        window.addEventListener('message', handlePostMessage, false);

        // cleanup this component
        return () => {
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