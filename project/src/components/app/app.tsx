import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import Err404 from '../404/404';
import PrivateRoute from '../private-route/private-route';
import { AppRoute,AuthorizationStatus } from '../const/const';
import {Cardis,CardEx,Points,ListReportList} from '../../types/Card';
import {Cityes} from '../../types/Card';

type AppNumberProps = {

  card: Cardis;
  room:Cardis;
  points: Points;
  reps: ListReportList;
  rep: ListReportList;
  cityName: Cityes;
}
function App({card,room,points,reps,rep,cityName}: AppNumberProps): JSX.Element {
  const [favCard] = card;
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <Main   room={room} points={points} cityName={cityName}/>
        </Route>
        <Route path={AppRoute.Login} exact>
          <Login/>
        </Route>
        <PrivateRoute exact path={AppRoute.Favorites} authorizationStatus={AuthorizationStatus.Auth}>
          <Favorites fav = {favCard as CardEx}/>
        </PrivateRoute>
        <Route path={AppRoute.Room} exact>
          <Room reps={reps} rep={rep} room={room} points={points} card={card}/>
        </Route>
        <Route>
          <Err404/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
