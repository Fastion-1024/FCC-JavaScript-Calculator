import { useState, useEffect, useRef } from 'react';
import './TabContainer.css';

const TabContainer = ({ children, headers }) => {
    const [currentChild, setCurrentChild] = useState(null);
    const buttonRefs = useRef([]);

    const handleClick = (id) => {
        setCurrentChild(children[id]);
        switchActiveElement(id);
    };

    const switchActiveElement = (id) => {
        buttonRefs.current.forEach((element, index) => {
            id !== index && element.classList.remove('active');
            id === index && element.classList.add('active');
        });
    };

    useEffect(() => {
        if (headers.length > 0 && children.length > 0) {
            setCurrentChild(children[0]);
            switchActiveElement(0);
        }
    }, []);

    return (
        <section className='tab-container'>
            <div className='tab-headers'>
                {headers.map((btn, index) => {
                    return (
                        <button
                            key={index}
                            ref={(element) => (buttonRefs.current[index] = element)}
                            onClick={() => handleClick(index)}
                        >
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
