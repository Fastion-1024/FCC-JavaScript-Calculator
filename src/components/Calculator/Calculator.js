import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import History from '../History/History';
import Memory from '../Memory/Memory';
import TabContainer from '../TabContainer/TabContainer';
import { useGlobalContext } from '../../hooks/context';
import './Calculator.css';

const Calculator = () => {
    const { isSideContainerHidden } = useGlobalContext();

    return (
        <section className='calculator-container'>
            <div className='calculator'>
                <Display />
                <Keypad />
            </div>
            {isSideContainerHidden || (
                <TabContainer headers={['History', 'Memory']}>
                    <History />
                    <Memory />
                </TabContainer>
            )}
        </section>
    );
};

export default Calculator;
