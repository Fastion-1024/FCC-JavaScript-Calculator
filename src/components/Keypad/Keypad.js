import { useGlobalContext } from '../../hooks/context';
import buttons, { memoryButtons } from '../../lib/buttons';
import './Keypad.css';

const Keypad = () => {
    const { handleClick } = useGlobalContext();

    return (
        <div className='keypad'>
            <div className='btn-container-memory'>
                {memoryButtons.map((btn) => {
                    return (
                        <button key={btn.id} id={btn.id} onClick={() => handleClick(btn)}>
                            {btn.value}
                        </button>
                    );
                })}
            </div>
            <div className='btn-container-default'>
                {buttons.map((btn) => {
                    return (
                        <button key={btn.id} id={btn.id} onClick={() => handleClick(btn)}>
                            {btn.value}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Keypad;
