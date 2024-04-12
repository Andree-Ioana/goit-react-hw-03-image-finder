import React, { Component } from 'react';
import styles from "./Searchbar.module.css";
import { CiSearch } from "react-icons/ci";

class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.search);
    };

    handleChange = (e) => {
        this.setState({ search: e.target.value });
    };

    render() {
        const { search } = this.state;
        return (
            <form className={styles.searchContainer} onSubmit={this.handleSubmit}>
                <div className={styles.inputContainer}>
                    <input
                        className={styles.inputSearch}
                        type="text"
                        name="search"
                        value={search}
                        placeholder="Search image"
                        onChange={this.handleChange}
                    />
                    <CiSearch className={styles.iconSearch} />
                </div>
            </form>
        );
    }
}


export default Searchbar;