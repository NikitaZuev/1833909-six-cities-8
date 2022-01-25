import {State} from '../types/State';
//import {cardOne} from '../moks/offer';
import { Actions, ActionType } from '../types/Action';
import {DEFAULT_SET_CITY} from '../components/const/const';

const FirstCondCity = {
  city: DEFAULT_SET_CITY,
  cardts: [],
};

export const reducer = (state: State = FirstCondCity, action: Actions): State =>{
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, city: action.payload };
    case ActionType.ChangeRoom:
      return { ...state, cardts: action.payload };
    default:
      return state;
  }
};
