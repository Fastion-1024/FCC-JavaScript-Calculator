import { useGlobalContext } from '../../hooks/context';
import { VscHistory } from 'react-icons/vsc';
import './Display.css';

const Display = () => {
    const { input1, operator, input2, answer, isNegative, toggleSideContainerVisibility } =
        useGlobalContext();

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
            <div>
                <button className='toggle-btn' onClick={toggleSideContainerVisibility}>
                    <span className='visually-hidden'>Toggle History / Memory</span>
                    <VscHistory />
                </button>
                <h3 id='formula'>{getFormula()}</h3>
            </div>
            <h2 id='display'>{`${isNegative ? '-' : ''}${getInput()}`}</h2>
        </div>
    );
};

export default Display;
