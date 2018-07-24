import React from 'react'

/**
* Renders the component and applies custom logic to the process
* @param {Array} items - the items to be represented
* @param {String} alignment - alignment type
*/
const ListItem = ({ value, key }) => {
    console.log(value)
    return (<li key={key}>
                {value}
            </li>)
}

export default ListItem
