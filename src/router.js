import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import { Warning, LoseEffective, Feedback, Flop } from './routes';

function RouterConfig({ history }) {
  return (
    <Router history={history} >
      <Route path="/" >
        <IndexRoute component={Warning} />
        <Route path="/warning" component={Warning} />
        <Route path="/loseEffective" component={LoseEffective} />
        <Route path="/flop" component={Flop} />
        <Route path="/feedback" component={Feedback} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
