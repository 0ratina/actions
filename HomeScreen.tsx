import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { RootStackParamList } from './RootStackNavigator';

type Props = NativeStackScreenProps<RootStackParamList, "Home">
export default function HomeScreen(props: Props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is HomeScreen</Text>
            <Button title="Go to Detail" onPress={() => props.navigation.navigate("Detail")} />
        </View>
    );
}
