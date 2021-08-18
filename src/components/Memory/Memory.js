import { useGlobalContext } from '../../hooks/context';

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
        <section>
            {memory.map((item, index) => {
                return (
                    <div key={index} onClick={() => recallMemoryItem(index)}>
                        <p>{item}</p>
                        <div>
                            <button onClick={() => removeItemFromMemory(index)}>MC</button>
                            <button onClick={() => memoryPlusCurrentItem(index)}>M+</button>
                            <button onClick={() => memorySubtractCurrentItem(index)}>M-</button>
                        </div>
                    </div>
                );
            })}
            <button onClick={clearMemory}>
                <span>Delete Memory</span>
            </button>
        </section>
    );
};

export default Memory;
