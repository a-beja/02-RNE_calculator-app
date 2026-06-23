import { Colors } from '@/constants/theme';
import { globalStyles } from '@/styles/global-styles';
import { Pressable, Text } from 'react-native';

interface Props {
    label: string;
    color?: 'lightGray' | 'darkGray' | 'orange';
    blackText?: boolean;
    onPress: () => void;
}

const CalculatorButton = ({ 
    label, 
    color = 'lightGray', 
    blackText = false, 
    onPress
  }: Props) => {


  const colorStyles = {
    lightGray: Colors.lightGray,
    darkGray: Colors.darkGray,
    orange: Colors.orange
  }

  return (
    <Pressable 
      style={{
        ...globalStyles.button,
        backgroundColor: colorStyles[color],
       }}
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