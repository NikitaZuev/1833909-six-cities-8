import {ActionType} from '../types/Action';
import {InfoCard} from '../types/Card';

export const changeCity = (city : string) =>({
  type: ActionType.ChangeCity,
  payload: city,
}as const);

export const changeRoom = (cardts : InfoCard[]) =>({
  type: ActionType.ChangeRoom,
  payload: cardts,
}as const);
