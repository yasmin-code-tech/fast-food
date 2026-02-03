import { Text, View } from "react-native";
import './global.css'

export default function Index() {
  return (
    <View
     className='flex-1 items-center justify-center'
    >
      <Text className='text-lg'>Edit app/index.tsx to edit this screen.</Text>
      <Text className='text-2xl font-bold'> Hello world!</Text>
    </View>
  );
}
