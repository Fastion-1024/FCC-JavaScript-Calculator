import { useGlobalContext } from '../../hooks/context';

const Display = () => {
    const { input1, operator, input2, answer, isNegative } = useGlobalContext();

    const getInput = () => {
        if (answer) return answer;
        if (!input1) return '0';
        if (operator && input2) return input2;
        return input1;
    };

    const getFormula = () => {
        if (answer) return `${input1} ${operator} ${input2} =`;
        if (input1 && operator) return `${input1} ${operator}`;
    };

    return (
        <div className='display'>
            <h3>{getFormula()}</h3>
            <h2 id='display'>{`${isNegative ? '-' : ''}${getInput()}`}</h2>
        </div>
    );
};

export default Display;
