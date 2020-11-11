import React from 'react'
import Item from './Item';
import Filter from './Filter';
import ErrorBoundary from '../ErrorBoundary';

function ListItems(props) {

    const [searchTerm, setISearchTerm] = React.useState('');

    const updateSearchTerm = event => {
        setISearchTerm(event.target.value);
    }

    const List = () => {

        const { items, removeItem, toggleItem } = props;

        const filteredItems = items.filter(item => item.value.toLowerCase().includes(searchTerm.toLowerCase()));

        return filteredItems.map(item => (
                <Item
                    key={item.id}
                    item={item}
                    removeItem={removeItem}
                    toggleItem={toggleItem}
                />
            )
        )

        
    }

    const { title } = props;

    return (
        <section>
            <h3 className='mb-3'>{title}</h3>
            <Filter searchTerm={searchTerm} onChange={updateSearchTerm} />
            <ErrorBoundary>
                <ul className='list-group mb-3'><List /></ul>
            </ErrorBoundary>
        </section>
    )
}

export default ListItems;
