import { useGlobalContext } from '../../hooks/context';
import { VscTrash } from 'react-icons/vsc';
import './Memory.css';

const Memory = () => {
    const {
        memory,
        clearMemory,
        removeItemFromMemory,
        memoryPlusCurrentItem,
        memorySubtractCurrentItem,
        recallMemoryItem,
    } = useGlobalContext();

    return (
        <section className='memory-container'>
            <div className='memory-item-container'>
                {memory.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className='memory-item'
                            onClick={() => recallMemoryItem(index)}
                        >
                            <p>{item}</p>
                            <div>
                                <button
                                    className='memory-btn'
                                    onClick={(e) => removeItemFromMemory(e, index)}
                                >
                                    MC
                                </button>
                                <button
                                    className='memory-btn'
                                    onClick={(e) => memoryPlusCurrentItem(e, index)}
                                >
                                    M+
                                </button>
                                <button
                                    className='memory-btn'
                                    onClick={(e) => memorySubtractCurrentItem(e, index)}
                                >
                                    M-
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='memory-footer'>
                <button className='delete-btn' onClick={clearMemory}>
                    <span className='visually-hidden'>Delete Memory</span>
                    <VscTrash />
                </button>
            </div>
        </section>
    );
};

export default Memory;
