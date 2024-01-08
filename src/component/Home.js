import React, { Component, Fragment } from 'react';
import Header from './Header';
import RestaurantsDisplay from './Restaurants';

const url = "http://43.205.216.77:8443/restaurant/";

class Home extends Component {
    constructor() {
        super();

        this.state = {
            restaurants: [] // Initialize as an array
        };
    }

    componentDidMount() {
        fetch(url, {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    restaurants: Array.isArray(data) ? data : [] // Update state with an array
                });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    render() {
        return (
            <Fragment>
                <Header />
                <RestaurantsDisplay datalist={this.state.restaurants} />
            </Fragment>
        );
    }
}

export default Home;
