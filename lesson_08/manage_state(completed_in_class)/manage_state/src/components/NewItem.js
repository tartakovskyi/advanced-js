import React from 'react'
import { generate as id } from 'shortid';

function NewItem(props) {

    const [value, setIValue] = React.useState('');

    const handleChange = event => setIValue(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        props.addItem({id: id(), value, packed: false });
        setIValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='row'>
                <div className='col-md-10'>
                    <input
                        type="text"
                        className='form-control mb-3'
                        onChange={handleChange}
                        value={value}
                    />
                </div>
                <div className='col-md-2'>
                    <input className='btn btn-success' type="submit" value='Send' />
                </div>
            </div>
        </form>
    )
}

export default NewItem;
