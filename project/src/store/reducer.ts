import {State} from '../types/State';
//import {cardOne} from '../moks/offer';
import { Actions, ActionType } from '../types/Action';
import {DEFAULT_SET_CITY} from '../components/const/const';

const FirstCondCity = {
  city: DEFAULT_SET_CITY,
  cardts: [],
  sort: 'Popular',
  //Изначально null что бы поинты были синими
  checkPoint: null,
};

export const reducer = (state: State = FirstCondCity, action: Actions): State =>{
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, city: action.payload };
    case ActionType.ChangeRoom:
      return { ...state, cardts: action.payload };
    case ActionType.ChangeSort:
      return {...state, sort: action.payload};
    case ActionType.ChangeCheckPoint:
      return {...state, checkPoint: action.payload};
    default:
      return state;
  }
};
