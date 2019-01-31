import React, { Component } from 'react';

import Header from '../components/commun/header';
import Footer from '../components/commun/footer';

import './index.css'

export default class MainLayout extends Component {
    render() {
        return (
            <div id="layout">
                <Header navigation={this.props} />
                <div className="content" >
                    {this.props.children}
                </div>
                <Footer navigation={this.props} />
            </div>
        );
    }
}
