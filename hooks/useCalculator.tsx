import { useEffect, useState } from "react";

export const useCalculator = () => {

    const [ formula, setFormula ] = useState('0');


    useEffect(() => {
        (global as any).formula = formula;
        setFormula( formula );
    }, [ formula ])

    const clean = () => {
        setFormula('0');
    }

    const deleteLast = () => {
        if( formula.length === 1 ){
            setFormula('0')
        } else {
            setFormula( formula.slice(0, -1) );
        }
    }

    const buildFormula = ( formulaString: string ) => {
        // Verificar si ya existe el punto decimal
        if( formula.includes('.') && formulaString === ('.')) {
            console.log('Se intentó digitar otro . además del ya existente. No se digita')
            return;
        }

        // Esto es para las verificaciones del mero inicio 
        if( formula.startsWith('0') || formula.startsWith('-0')) {
            // Si es un punto, seguir (después de esto, ya existe el único punto del formula)
            if( formulaString === '.' ) {
                console.log('Se digitó punto (Sólo puede haber uno por formula)');
                return setFormula( formula + formulaString );
            }

            // Evaluar si es otro cero y no hay punto
            if( formulaString === '0' && formula.includes('.')) {
                console.log('Hay un cero, pero después del punto')
                return setFormula( formula + formulaString );
            }

            // Evaluar si es diferente de cero, no hay punto y es el primer número
            if( formulaString !== '0' && !formula.includes('.') ) {
                console.log('Aquí reemplaza el primer cero con un numero que sea diferente a 0, siempre y cuando no incluya un punto.');
                return setFormula( formulaString );
            }

            // Evitar el 000000.0
            if( formulaString === '0' && !formula.includes('.')){
                console.log('El usuario trata de digitar más 0 cuando no hay nada más. Debería de estar después de otro numero o de un punto');
                return;
            }
        }

        setFormula( formula + formulaString )
    }

    
    return {
        // Props
        formula,

        // Methods
        buildFormula,
        clean,
        deleteLast,
    }
    
}