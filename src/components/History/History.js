import { useGlobalContext } from '../../hooks/context';
import { VscTrash } from 'react-icons/vsc';
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
            <div className='history-footer'>
                <button className='delete-btn' onClick={clearHistory}>
                    <span className='visually-hidden'>Delete History</span>
                    <VscTrash />
                </button>
            </div>
        </section>
    );
};

export default History;
