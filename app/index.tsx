import CalculatorButton from '@/components/CalculatorButton';
import ThemeText from '@/components/ThemeText';
import { useCalculator } from '@/hooks/useCalculator';
import { globalStyles } from '@/styles/global-styles';
import { View } from 'react-native';


const CalculatorApp = () => {

  const {
    formula,
    buildNumber
  } = useCalculator();

  return (
    <View style={ globalStyles.calculatorContainer }>
      
      {/* Resultados */}
      <View style={{ marginBottom: 20 }}>
        <ThemeText variant='h1'>{ formula }</ThemeText>
        <ThemeText variant='h2'>250000000000</ThemeText>
      </View>

      {/* Filas de botones */}
      <View style={{ paddingHorizontal: 50}}>
        <View style={ globalStyles.row }>
          <CalculatorButton label='C' color='lightGray' blackText={true} onPress={() => console.log('C')}/>
          <CalculatorButton label='+/-' color='lightGray' blackText={true} onPress={() => console.log('+/-')}/>
          <CalculatorButton label='del' color='lightGray' blackText={true} onPress={() => console.log('÷')}/>
          <CalculatorButton label='÷' color ='orange' onPress={() => console.log('!')}/>
        </View>
        <View style={ globalStyles.row }>
          <CalculatorButton label='7' onPress={() => buildNumber('7')}/>
          <CalculatorButton label='8' onPress={() => buildNumber('8')}/>
          <CalculatorButton label='9' onPress={() => buildNumber('9')}/>
          <CalculatorButton label='x' color='orange' onPress={() => console.log('x')}/>
        </View>
        <View style={ globalStyles.row }>
          <CalculatorButton label='4' onPress={() => buildNumber('4')}/>
          <CalculatorButton label='5' onPress={() => buildNumber('5')}/>
          <CalculatorButton label='6' onPress={() => buildNumber('6')}/>
          <CalculatorButton label='-' color = 'orange' onPress={() => console.log('-')}/>
        </View>
        <View style={ globalStyles.row }>
          <CalculatorButton label='1' onPress={() => buildNumber('1')}/>
          <CalculatorButton label='2' onPress={() => buildNumber('2')}/>
          <CalculatorButton label='3' onPress={() => buildNumber('3')}/>
          <CalculatorButton label='+' color ='orange' onPress={() => console.log('+')}/>
        </View>
        <View style={ globalStyles.row }>
          <CalculatorButton label='0' doubleSize={true} onPress={() => buildNumber('0')}/>
          <CalculatorButton label='.' onPress={() => buildNumber('.')}/>
          <CalculatorButton label='=' color ='orange' onPress={() => console.log('=')}/>
        </View>
      </View>

    </View>
  )
}
export default CalculatorApp;