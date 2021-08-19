import { useState, useEffect } from 'react';
import './TabContainer.css';

const TabContainer = ({ children, headers }) => {
    const [currentChild, setCurrentChild] = useState(null);

    const handleClick = (id) => {
        setCurrentChild(children[id]);
    };

    useEffect(() => {
        if (headers.length > 0 && children.length > 0) {
            setCurrentChild(children[0]);
        }
    }, []);

    return (
        <section className='tab-container'>
            <div className='tab-headers'>
                {headers.map((btn, index) => {
                    return (
                        <button key={index} onClick={() => handleClick(index)}>
                            {btn}
                        </button>
                    );
                })}
            </div>
            <div className='tab-children'>{currentChild}</div>
        </section>
    );
};

export default TabContainer;
