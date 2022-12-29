import React, { useState } from 'react';

const InputData = () => {
    const [data, setData] = useState('');
    const handleChange = (event) => {
        setData(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setData(event.target.value);
        axois.post('http://locathost/api/post', {
            data
        }).then(() => {
            console.log("Add");
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                Input box
                <input type='text' value={data} />
                <button type='submit' onChange={handleChange}>Submit</button>
            </form>

        </div>
    )
}

export default InputData
