import { Slot, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { AuthContextProvider, useAuth } from '~/context/authContext';

const MainLayout = () => {
    const {isAuthenticated} = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        // check if user is authenticed or not
        if (typeof isAuthenticated == 'undefined') return;
        const inApp = segments[0] =='(tabs)';
        if (isAuthenticated && !inApp){
            // redirect to home
            router.replace('MapScreen');
        } else if (isAuthenticated == false) {
            // redirect to sign in page
            router.replace('signIn');
        }
    }, [isAuthenticated])

    return <Slot/>
}

export default function RootLayout() {
    return (
        <AuthContextProvider>
            <MainLayout/>
        </AuthContextProvider>
    )
}