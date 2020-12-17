import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import './app.css';
import { progressBarFetch, setOriginalFetch, ProgressBar } from 'react-fetch-progressbar';
import { HireTeamPage } from '../HireTeamPage/HireTeamPage';
import { CommonPage } from '../CommonPage/CommonPage';
 
// Let react-fetch-progressbar know what the original fetch is.
setOriginalFetch(window.fetch);
 
/* 
  Now override the fetch with progressBarFetch, so the ProgressBar
  knows how many requests are currently active.
*/
window.fetch = progressBarFetch;


function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <React.Fragment>
            <ProgressBar />
            {alert.message && !alert.hideontop && 
                <div className={`bm-alert top-message ${alert.type}`}>{alert.message}</div>
            }
            <Router history={history}>
                <Switch>              
                    <Route exact path="/" component={HireTeamPage} />
                    <Route exact path="/terms-and-conditions" component={CommonPage} />
                    <Route exact path="/privacy-policy" component={CommonPage} />
                    <Route exact path="/cookie-policy" component={CommonPage} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export { App };