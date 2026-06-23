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
        <ThemeText variant='h2'>250000000000</ThemeText>
      </View>

      {/* Filas de botones */}
      <View style={ globalStyles.row }>
        <CalculatorButton label='C' color='lightGray' blackText={true} onPress={() => console.log('C')}/>
        <CalculatorButton label='+/-' color='lightGray' blackText={true} onPress={() => console.log('+/-')}/>
        <CalculatorButton label='del' color='lightGray' blackText={true} onPress={() => console.log('÷')}/>
        <CalculatorButton label='÷' color ='orange' onPress={() => console.log('!')}/>
      </View>

      <View style={ globalStyles.row }>
        <CalculatorButton label='7' onPress={() => console.log('7')}/>
        <CalculatorButton label='8' onPress={() => console.log('8')}/>
        <CalculatorButton label='9' onPress={() => console.log('9')}/>
        <CalculatorButton label='x' color='orange' onPress={() => console.log('x')}/>
      </View>

      <View style={ globalStyles.row }>
        <CalculatorButton label='4' onPress={() => console.log('4')}/>
        <CalculatorButton label='5' onPress={() => console.log('5')}/>
        <CalculatorButton label='6' onPress={() => console.log('6')}/>
        <CalculatorButton label='-' color = 'orange' onPress={() => console.log('-')}/>
      </View>

      <View style={ globalStyles.row }>
        <CalculatorButton label='1' onPress={() => console.log('1')}/>
        <CalculatorButton label='2' onPress={() => console.log('2')}/>
        <CalculatorButton label='3' onPress={() => console.log('3')}/>
        <CalculatorButton label='+' color ='orange' onPress={() => console.log('+')}/>
      </View>

      <View style={ globalStyles.row }>
        <CalculatorButton label='0' doubleSize={true} onPress={() => console.log('0')}/>
        <CalculatorButton label='.' onPress={() => console.log('.')}/>
        <CalculatorButton label='=' color ='orange' onPress={() => console.log('=')}/>
      </View>

    </View>
  )
}
export default CalculatorApp;