import { useState, useEffect } from 'react';
import { getValues, getIndexes, postValues } from './services/api';

const Fib = () => {
    const [seenIndexes, setSeenIndexes] = useState([]);
    const [values, setValues] = useState({});
    const [index, setIndex] = useState('');

    
    
    useEffect(() => {
        try {
            const apiValues = getValues();
            const apiIndexes = getIndexes();
            setValues(apiValues.data ?? {});
            setSeenIndexes(apiIndexes.data ?? []); 
        } catch (error) {
            console.error(error);
        }
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        postValues(index);
        setIndex('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit} > 
                <label>Enter your index:</label>
                <input value={index} onChange={event => setIndex(event.target.value)} />
                <button>Submit</button>
            </form>

            <h3>Indexes I have seen</h3>
            {seenIndexes.map(({ number }) => number).join(', ')}
            <h3>Calculated Values</h3>
            {Object.keys(values).forEach(key => {
                return (
                    <div key={key}>
                        For index {key} I calculated {values[key]}
                    </div>
                );
            })}
        </div>
    )
};

export { Fib };