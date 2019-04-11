//Author: Alfonso Fernandez Alvarez
//Version: 1.0

// /client/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ViewDetail from './ViewDetail';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


//Routes of my App
function AppRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/ViewDetail/">Details</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="./App" exact component={App} />
                <Route path="./ViewDetail" component={ViewDetail} />
            </div>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
export default AppRouter;
