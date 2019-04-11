import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import viewDetail from './viewDetail';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
                            <Link to="/viewDetail/">Details</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="./App" exact component={App} />
                <Route path="./viewDetail" component={viewDetail} />
            </div>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
export default AppRouter;
