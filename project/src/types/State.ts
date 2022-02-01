import {InfoCard, Point} from '../types/Card';

export type State ={
  city: string,
  cardts: InfoCard[],
  sort: string,
  checkPoint: Point | null,
}
