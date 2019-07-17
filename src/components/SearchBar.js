import React, { Component } from 'react';
// import SearchInput, {createFilter} from 'react-search-input'
import ReactSearchBox from 'react-search-box'

const data = [
    {
        key: 'bangalore',
        value: 'Bangalore',
    },
    {
        key: 'Delhi',
        value: 'Delhi',
    },
];

class SearchBar extends Component {

    render() {

        return (
            <div>
                <ReactSearchBox
                    placeholder="Discover Incredible Places"
                    value="Doe"
                    data={data}
                    callback={record => console.log(record)}
                    inputBoxBorderColor="black"
                />
            </div>

        );
    }

}

export default SearchBar;
