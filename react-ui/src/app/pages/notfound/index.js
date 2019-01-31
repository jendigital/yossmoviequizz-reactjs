import React, { Component } from 'react';
import './index.css';

import MainLayout from '../../layouts/default';

export default class NotFound extends Component {
    render() {
        return (
            <MainLayout>
                <div id='NotFound'>
                    <h3>Not Any <span>Element</span> Here, There are perfectly hide!</h3>
                    <h4>Are you sure, you are searching in the right place?</h4>
                </div>
            </MainLayout>
        )
    }
}
