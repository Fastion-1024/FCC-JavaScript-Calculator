import { useGlobalContext } from '../../hooks/context';

const History = () => {
    const { history, clearHistory, removeItemFromHistory, restoreItemFromHistory } =
        useGlobalContext();

    return (
        <section>
            {history.map((item, index) => {
                const { input1, operator, input2, answer } = item;
                return (
                    <div key={index} onClick={() => restoreItemFromHistory(item)}>
                        <p>{`${input1} ${operator} ${input2} =`}</p>
                        <p>{answer}</p>
                    </div>
                );
            })}
            <button onClick={clearHistory}>
                <span>Delete History</span>
            </button>
        </section>
    );
};

export default History;
