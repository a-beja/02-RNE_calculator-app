import { useState } from "react";

export const useCalculator = () => {

    const [formula, setFormula] = useState('0');


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

    const buildFormula = (formulaString: string) => {
        
        if( formula === '0') return setFormula(formulaString);
        setFormula(formula + formulaString);
    }

    return {
        formula,
        buildFormula,
        clean,
        deleteLast,
    }
}