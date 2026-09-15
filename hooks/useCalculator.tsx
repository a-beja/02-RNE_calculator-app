import { useEffect, useRef, useState } from "react";


enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '÷'
}

export const useCalculator = () => {

    const [ formula, setFormula ] = useState('0');

    const [ number, setNumber ] = useState('0');
    const [ prevNumber, setPrevNumber ] = useState('0');

    const lastOperation = useRef<Operator>(null);

    useEffect(() => {
        (global as any).number = number;
        setFormula( number );
    }, [ number ])

    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        setFormula('0')

        lastOperation.current = null;
    }

    // const toggleSign = () => {
    //     if( !number.includes('-')){
    //         setNumber('-' + number );
    //     } else {
    //         setNumber( number.replace('-', '') );
    //     }
    // }

    const deleteLast = () => {
        if( number.length === 1 ){
            setNumber('0')
        } else {
            setNumber( number.slice(0, -1) );
        }
    }

    const buildNumber = ( numberString: string ) => {
        // Verificar si ya existe el punto decimal
        if( number.includes('.') && numberString === ('.')) {
            console.log('Se intentó digitar otro . además del ya existente. No se digita')
            return;
        }

        // Esto es para las verificaciones del mero inicio 
        if( number.startsWith('0') || number.startsWith('-0')) {
            // Si es un punto, seguir (después de esto, ya existe el único punto del number)
            if( numberString === '.' ) {
                console.log('Se digitó punto (Sólo puede haber uno por number)');
                return setNumber( number + numberString );
            }

            // Evaluar si es otro cero y no hay punto
            if( numberString === '0' && number.includes('.')) {
                console.log('Hay un cero, pero después del punto')
                return setNumber( number + numberString );
            }

            // Evaluar si es diferente de cero, no hay punto y es el primer número
            if( numberString !== '0' && !number.includes('.') ) {
                console.log('Aquí reemplaza el primer cero con un numero que sea diferente a 0, siempre y cuando no incluya un punto.');
                return setNumber( numberString );
            }

            // Evitar el 000000.0
            if( numberString === '0' && !number.includes('.')){
                console.log('El usuario trata de digitar más 0 cuando no hay nada más. Debería de estar después de otro numero o de un punto');
                return;
            }
        }

        setNumber( number + numberString )
    }

    
    return {
        // Props
        formula,
        number,
        prevNumber,

        // Methods
        buildNumber,
        clean,
        // toggleSign,
        deleteLast,
    }
    
}