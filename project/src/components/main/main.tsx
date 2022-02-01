//import React, { Fragment } from 'react';
//import { Link } from 'react-router-dom';
//import { Dispatch } from 'react';
import { State } from '../../types/State';
//import { Actions} from '../../types/Action';
//import { changeRoom } from '../../store/action';
import Card from '../card/card';
import Logo from '../logo/logo';
import {CardEx,Cardis,Points} from '../../types/Card';
import Maper from '../map/map';
import ListCity from '../listCity/listCity';
import {Cityes} from '../../types/Card';
import { connect, ConnectedProps } from 'react-redux';
import Sortlist  from '../sortlist/sortlist';

type NumberProps = {
  //card: Cardis;
  room:Cardis;
  points: Points;
  cityName: Cityes;
}

const mapStateToProps = ({ city, cardts,sort,checkPoint }: State) => ({
  city,
  cardts,
  sort,
});


const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & NumberProps;


function Main({cardts,room,points,cityName,city}: ConnectedComponentProps): JSX.Element{
  const [oneRoom] = room;
  return(
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <ListCity cityName={cityName}/>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cardts.length} places to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by </span>

                <Sortlist />
              </form>
              <div className="cities__places-list places__list tabs__content">
                <Card  />
              </div>
            </section>
            <Maper room={oneRoom as CardEx} points={points}/>
          </div>
        </div>
      </main>
    </>
  );}

export default connector(Main);
