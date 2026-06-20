import { globalStyles } from '@/styles/global-styles';
import { Text, type TextProps } from 'react-native';

// Hereda todos los props de TextProps, interface nativa de RN
interface Props extends TextProps {
    variant?: 'h1' | 'h2';
}

// Children se sacó fuera del ...rest porque se usa explícitamente

// ...rest es para sacar el resto de props por si se usan usando el componente ThemeText:
// <ThemeText variant='h1' onPress={() => alert('!')} selectable>
//    50 x 50
// </ThemeText>
const ThemeText = ({ children, variant = 'h1', ...rest }: Props) => {
  return (
    <Text 
        style={[
            { color: 'white' },
            variant === 'h1' && globalStyles.mainResult,
            variant === 'h2' && globalStyles.subResult, 
        ]}
        numberOfLines={1}
        adjustsFontSizeToFit
        { ...rest }
    >
        {/* Se usa explícitamente aquí */}
        { children }
    </Text>
  )
}
export default ThemeText