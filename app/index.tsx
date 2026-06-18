import ThemeText from '@/components/ThemeText';
import { globalStyles } from '@/styles/global-styles';
import { View } from 'react-native';


const CalculatorApp = () => {
  return (
    <View style={ globalStyles.calculatorContainer }>

      <ThemeText variant='h1'> 50 x 5000000 </ThemeText>
      <ThemeText variant='h2'> 250 </ThemeText>
      
      {/* Gracias al componente que creé, ThemeText, nos ahorramos esta carpintería sucia */}
      {/* <Text 
        style={ globalStyles.mainResult }
        numberOfLines={ 1 }
        adjustsFontSizeToFit>
        50 x 500000000000
      </Text>
      <Text style= { globalStyles.subResult }>
        250
      </Text> */}
      
    </View>
  )
}
export default CalculatorApp;