import { useState } from "react";

export const useCalculator = () => {

    const [formula, setFormula] = useState('0');


    const getLastNumber = (): string => {
        const parts = formula.split(/[+\-x÷]/);
        return parts[ parts.length - 1 ];
    }

    const clean = () => {
        setFormula('0');
    }

    const deleteLast = () => {
        if (formula.length === 1) {
            setFormula('0');
        } else {
            setFormula(formula.slice(0, -1));
        }
    }

    const buildFormula = ( newDigit: string ) => {
        let lastNumber = getLastNumber();
        
        if( lastNumber === '0' && newDigit !== '.'){
            console.log('hola, empiezo con cero y no puse un punto');
            setFormula(formula.slice(0, -1) + newDigit);
            return;
        }

        if( lastNumber === '' && newDigit === '.'){
            console.log('hola, lastnumer es vacio y puse un punto');
            return setFormula( formula + '0' + newDigit );
        }

        if( lastNumber.includes('.') && newDigit === '.' ){
            console.log('hola, ya tengo un punto y quiero poner otro');
            return;
        }

        if( lastNumber === '0' && newDigit === '0') return;
        
        setFormula( formula + newDigit );
    }

    return {
        formula,

        buildFormula,
        clean,
        deleteLast,
    }
}