import React, { Component, Fragment } from 'react';
import DropdownItems from './dropdownItems';

import '../css/dropdown.scss';

class Dropdown extends Component {

    state = {
        listOpen: false,
    }

    toggleList (event) {
        event.preventDefault();
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }));
    };

    render () {
        return (
            <Fragment>
                <div className='dropdown__container--grid' onClick={(event) => this.toggleList(event)}>
                    <h3 className='dropdown__container--style'>{this.props.title}</h3>
                    <DropdownItems
                        list={this.props.list}
                        listOpen={this.state.listOpen}
                    />
                </div>
            </Fragment>
        );
    };
};

export default Dropdown;