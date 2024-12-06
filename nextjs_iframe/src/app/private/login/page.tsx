"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, TextInput, MessageBar, DangerIcon, Field, Information, UsersIllustration, Link } from 'akeneo-design-system';
import { CookiesProvider, useCookies } from 'react-cookie';

export default function Login() {
    const router = useRouter()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [cookies, setCookie] = useCookies(['weak-session']);

    const handleLogin = () => {
        // Implement your login logic here
        if (username === 'admin' && password === 'password') {
            // Successful login
            console.log('login')

            //Weak example of considering a user is "logged" using script useable cookie.
            //Do not implement it this way for production usage.
            setCookie('weak-session', true, {path: '/private', sameSite: "none"});
            router.push('/private/dashboard');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <>
            <CookiesProvider defaultSetOptions={{ path: '/private' }}>
                <div>
                    <Information
                    illustration={<UsersIllustration />}
                    title="Access an authenticated remote service"
                    >
                        Displaying iFrame content within the PIM should require to be authenticated by the remote server as you don't want this content to be publicly accessible over internet.<br/><br/>
                        You can provide a dedicated login screen to let the user fill its credentials or benefit from your enterprise SSO capabilities.<br/><br/>
                        If you're displaying the content of <Link href="https://api.akeneo.com/apps/overview.html" target="_blank">an App or a Custom App</Link> you will benefit from <Link href="https://api.akeneo.com/apps/authentication-and-authorization.html#getting-started-with-openid-connect" target="_blank">the seamless user authentication</Link> thanks to the OpenID Connect protocol.<br/><br/>
                        For the sake of the example, you can use "admin/password" as credentials to simulate the access to the private content of this iFrame.
                    </Information>
                </div>
                <div className="flex justify-center items-center h-screen">
                    <div className="shadow-lg rounded-lg p-8 w-full max-w-md bg-purple-200">
                        <h2 className="text-2xl font-bold mb-4">Login</h2>
                        
                        <div className="mb-4">
                            <Field label="Username">
                                <TextInput placeholder="Enter your username" value={username} onChange={(e) => setUsername(e)}/>
                            </Field>
                        </div>
                        <div className="mb-4">
                            <Field label="Password">
                                <TextInput placeholder="Enter your password" value={password} onChange={(e) => setPassword(e)}/>
                            </Field>
                        </div>
                        <Button level="primary" onClick={handleLogin}>
                            Login
                        </Button>
                        <br/><br/>
                        {error && (
                            <div>
                                <MessageBar
                                icon={<DangerIcon />}
                                level="error"
                                onClose={() => setError('')}
                                title="Error"
                                dismissTitle="Close"
                                >
                                {error}
                                </MessageBar>
                            </div>
                        )}
                    </div>
                </div>
            </CookiesProvider>
        </>
    );
};
