import { useGlobalContext } from '../../hooks/context';

const Display = () => {
    const { input1, operator, input2, answer, isInput1Negative, isInput2Negative } =
        useGlobalContext();

    const getInput = () => {
        if (answer) return answer;
        if (!input1) return '0';

        if (operator && input2) {
            return `${isInput2Negative ? '-' : ''}${input2}`;
        }
        return `${isInput1Negative ? '-' : ''}${input1}`;
    };

    const getFormula = () => {
        if (answer) {
            const input1Formula = `${isInput1Negative ? '-' : ''}${input1}`;
            const input2Formula = `${isInput2Negative ? '-' : ''}${input2}`;
            return `${input1Formula} ${operator} ${input2Formula} =`;
        }

        if (operator) {
            return `${isInput1Negative ? '-' : ''}${input1} ${operator}`;
        }
    };

    return (
        <div className='display'>
            <h3>{getFormula()}</h3>
            <h2 id='display'>{getInput()}</h2>
        </div>
    );
};

export default Display;
