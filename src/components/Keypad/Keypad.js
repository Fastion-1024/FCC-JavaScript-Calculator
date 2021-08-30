import { useGlobalContext } from '../../hooks/context';
import buttons, { memoryButtons } from '../../lib/buttons';
import { FiDelete } from 'react-icons/fi';
import './Keypad.css';

const Keypad = () => {
    const { handleClick } = useGlobalContext();

    return (
        <div className='keypad'>
            <div className='btn-container-memory'>
                {memoryButtons.map((btn) => {
                    return (
                        <button
                            key={btn.id}
                            id={btn.id}
                            className='btn-memory corner-borders top-left bottom-right'
                            onClick={() => handleClick(btn)}
                        >
                            {btn.value}
                        </button>
                    );
                })}
            </div>
            <div className='btn-container-default'>
                {buttons.map((btn) => {
                    return (
                        <button
                            key={btn.id}
                            id={btn.id}
                            className='btn-keypad'
                            onClick={() => handleClick(btn)}
                        >
                            {btn.value === '<=' ? (
                                <>
                                    <span className='visually-hidden'>Backspace</span>
                                    <FiDelete focusable={false} />
                                </>
                            ) : (
                                btn.value
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Keypad;
