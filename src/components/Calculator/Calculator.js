import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import History from '../History/History';
import Memory from '../Memory/Memory';
import TabContainer from '../TabContainer/TabContainer';
import './Calculator.css';

const Calculator = () => {
    return (
        <section className='calculator-container'>
            <div className='calculator'>
                <Display />
                <Keypad />
            </div>
            <TabContainer headers={['History', 'Memory']}>
                <History />
                <Memory />
            </TabContainer>
        </section>
    );
};

export default Calculator;
