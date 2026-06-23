import { Colors } from '@/constants/theme';
import { globalStyles } from '@/styles/global-styles';
import { Pressable, Text } from 'react-native';

interface Props {
    label: string;
    color?: 'lightGray' | 'darkGray' | 'orange';
    blackText?: boolean;
    doubleSize?: boolean;
    onPress: () => void;
}

const CalculatorButton = ({ 
    label, 
    color = 'darkGray', 
    blackText = false, 
    doubleSize = false, 
    onPress
}: Props ) => {


  const colorStyles = {
    lightGray: Colors.lightGray,
    darkGray: Colors.darkGray,
    orange: Colors.orange
  }

  return (
    <Pressable 
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: colorStyles[color],
        opacity: pressed ? 0.5 : 1,
        width: doubleSize ? 180 : 80,
      })}
      onPress={ onPress }
    >
      <Text 
        style={{
          ...globalStyles.buttonText,
          color: blackText ? 'black' : 'white',
        }}
      >
        { label }
      </Text>
    </Pressable>
  )
}
export default CalculatorButton