"use client"

import { Button, Information, UsersIllustration} from 'akeneo-design-system';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';

function ContextPropagation() {

    const router = useRouter();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cookies, setCookie] = useCookies(['weak-session']);

    const handleLogout = () => {
        console.log('logout')
        setCookie('weak-session', false, {path:'/private', maxAge: 0, sameSite: "none"});
        router.push('/private/login');
    };
    return (
        <>
            <div>
                <Information
                illustration={<UsersIllustration />}
                title="You're authenticated !"
                >
                    This page illustrate the fact that you have to restrict access to the web page you&apos;re displaying.
                    <br/><br/>
                    Using the logout button will redirect you to the login page. You can access this page without proper authentication.
                </Information>
            </div>
            <br/><br/>
            <div>Welcome dear connected user, you&apos;re navigating a page which needs to be authenticated.</div>
            <br/><br/>
            <Button level="danger" onClick={handleLogout}>
                Logout
            </Button>
        </>
    );
};

export default ContextPropagation;