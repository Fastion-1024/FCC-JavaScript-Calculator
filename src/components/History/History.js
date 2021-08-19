import { useGlobalContext } from '../../hooks/context';
import './History.css';

const History = () => {
    const { history, clearHistory, removeItemFromHistory, restoreItemFromHistory } =
        useGlobalContext();

    return (
        <section className='history-container'>
            <div className='history-item-container'>
                {history.map((item, index) => {
                    const { input1, operator, input2, answer } = item;
                    return (
                        <div
                            key={index}
                            className='history-item'
                            onClick={() => restoreItemFromHistory(item)}
                        >
                            <p>{`${input1} ${operator} ${input2} =`}</p>
                            <p>{answer}</p>
                        </div>
                    );
                })}
            </div>
            <button onClick={clearHistory}>
                <span>Delete History</span>
            </button>
        </section>
    );
};

export default History;
