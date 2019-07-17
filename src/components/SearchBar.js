import React, { Component } from 'react';
import SearchField from "react-search-field";







class SearchBar extends Component {


    render() {

        return (
            <div>

                <SearchField
                    placeholder="Search..."
                    // onChange={onChange}
                    searchText="This is initial search text"
                    classNames="test-class"
                />
            </div>
        );
    }

}

export default SearchBar;
