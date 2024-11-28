"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, TextInput, MessageBar, DangerIcon, Field, AnimateMessageBar } from 'akeneo-design-system';

export default function Login() {
    const router = useRouter()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        // Implement your login logic here
        if (username === 'admin' && password === 'password') {
        // Successful login
            router.push('/')
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="shadow-lg rounded-lg p-8 w-full max-w-md">
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
                </div>
            </div>
            {error && (
                <div>
                    <AnimateMessageBar>
                        <MessageBar
                        icon={<DangerIcon />}
                        level="error"
                        onClose={function noRefCheck(){}}
                        title="Error"
                        dismissTitle="Close"
                        >
                        {error}
                        </MessageBar>
                    </AnimateMessageBar>
                </div>
            )}
        </>
    );
};
