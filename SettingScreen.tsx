import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { RootStackParamList } from './RootStackNavigator';

type Props = NativeStackScreenProps<RootStackParamList, "Setting">
export default function SettingScreen(props: Props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Setting Screen</Text>
        </View>
    );
}
