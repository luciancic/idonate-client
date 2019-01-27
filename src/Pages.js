import React from "react";
import {Route} from "react-router-dom";
import Header from './Header';
import Donor from './Donor';
import Receiver from './Receiver';
import Manager from './Manager';

const Pages = () => {
    return (
        <div>
            <Header />
            <Route path="/donor" component={Donor} />
            <Route path="/receiver" component={Receiver} />
            <Route path="/manager" component={Manager} />
        </div>
    )
}

export default Pages