import { View, Text, Button } from 'react-native';
import React from 'react';
import { useAuth } from '~/context/authContext';

const Other = () => {
    const {logout} = useAuth();
    const handleLogout = async () => {
        await logout();
    }
    return (
        <View>
            <Button title="Sign Out" onPress={handleLogout} />
        </View>
    );
}

export default Other;
