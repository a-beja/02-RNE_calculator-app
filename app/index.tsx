import CalculatorButton from '@/components/CalculatorButton';
import ThemeText from '@/components/ThemeText';
import { globalStyles } from '@/styles/global-styles';
import { View } from 'react-native';


const CalculatorApp = () => {
  return (
    <View style={ globalStyles.calculatorContainer }>

    
      {/* Resultados */}
      <View>
        <ThemeText variant='h1'> 50 x 500 </ThemeText>
        <ThemeText variant='h2'> 250 </ThemeText>
      </View>
      
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


      {/* Filas de botones */}
      <View style={ globalStyles.row }>
        <CalculatorButton label='C'/>
        <CalculatorButton label='+/-'/>
        <CalculatorButton label='del'/>
        <CalculatorButton label='÷'/>
      </View>
    </View>
  )
}
export default CalculatorApp;