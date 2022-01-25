import {changeCity,changeRoom} from '../store/action';

export enum ActionType {
  ChangeCity = 'ChangeCity',
  ChangeRoom = 'ChangeRoom',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof changeRoom>
  //| ReturnType<typeof ChangeCity>

