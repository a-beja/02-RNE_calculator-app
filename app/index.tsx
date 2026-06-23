import CalculatorButton from '@/components/CalculatorButton';
import ThemeText from '@/components/ThemeText';
import { globalStyles } from '@/styles/global-styles';
import { View } from 'react-native';


const CalculatorApp = () => {
  return (
    <View style={ globalStyles.calculatorContainer }>
      
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20}}>
        <ThemeText variant='h1'>50 x 500</ThemeText>
        <ThemeText variant='h2'>250</ThemeText>
      </View>

      {/* Filas de botones */}
      <View style={ globalStyles.row }>
        <CalculatorButton label='C' color ='lightGray' blackText={true} onPress={() => alert('!')}/>
        <CalculatorButton label='+/-' color ='lightGray' blackText={true} onPress={() => alert('!')}/>
        <CalculatorButton label='del' color ='lightGray' blackText={true} onPress={() => alert('!')}/>
        <CalculatorButton label='÷' color ='orange' onPress={() => alert('!')}/>
      </View>

    </View>
  )
}
export default CalculatorApp;