import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

const Calculator = () => {
    return (
        <div className='calculator'>
            <Display />
            <Keypad />
        </div>
    );
};

export default Calculator;
