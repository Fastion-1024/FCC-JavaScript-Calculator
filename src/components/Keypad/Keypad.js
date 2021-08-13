import { useGlobalContext } from '../../hooks/context';
import buttons from '../../lib/buttons';

const Keypad = () => {
    const { handleClick } = useGlobalContext();

    return (
        <div className='keypad'>
            {buttons.map((btn) => {
                return (
                    <button key={btn.id} id={btn.id} onClick={() => handleClick(btn)}>
                        {btn.value}
                    </button>
                );
            })}
        </div>
    );
};

export default Keypad;
