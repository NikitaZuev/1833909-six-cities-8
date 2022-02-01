import {ActionType} from '../types/Action';
import {InfoCard, Point} from '../types/Card';

export const changeCity = (city : string) =>({
  type: ActionType.ChangeCity,
  payload: city,
}as const);

export const changeRoom = (cardts : InfoCard[]) =>({
  type: ActionType.ChangeRoom,
  payload: cardts,
}as const);

export const changeSort = (sort: string) =>({
  type: ActionType.ChangeSort,
  payload: sort,
}as const);

export const changeCheckPoint = (checkPoint: Point | null) =>({
  type: ActionType.ChangeCheckPoint,
  payload: checkPoint,
}as const);
