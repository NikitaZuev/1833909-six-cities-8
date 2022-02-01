import {changeCheckPoint, changeCity,changeRoom, changeSort} from '../store/action';

export enum ActionType {
  ChangeCity = 'ChangeCity',
  ChangeRoom = 'ChangeRoom',
  ChangeSort = 'ChangeSort',
  ChangeCheckPoint = 'ChangeCheckPoint',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof changeRoom>
  | ReturnType<typeof changeSort>
  | ReturnType<typeof changeCheckPoint>
  //| ReturnType<typeof ChangeCity>

