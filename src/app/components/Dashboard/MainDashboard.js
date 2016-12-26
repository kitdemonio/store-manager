import React, { Component } from 'react';

import InfoBoxes from './InfoBoxes/InfoBoxes';
import LastOrdersTable from './Tables/LastOrdersTable';

export default class Dashboard extends Component {

    render() {
        return (
            <main className="dashboard">
                <h2>Dashboard</h2>
                <InfoBoxes/>
                <LastOrdersTable dataLimit="40" dataPerPage="8"/>
            </main>
        )
    }
}