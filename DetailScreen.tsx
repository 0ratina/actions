import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from './RootStackNavigator';

type Props = NativeStackScreenProps<RootStackParamList, "Detail">
export default function DetailsScreen(props: Props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Setting Screen</Text>
        </View>
    );
}
