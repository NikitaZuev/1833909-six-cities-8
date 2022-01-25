import {CardEx} from '../types/Card';
import { Point } from '../types/Card';
import { ListReportList } from '../types/Card';
import {City} from '../types/Card';

export const cardOne: CardEx[] = [
  {
    cardInfo:[{
      NameCity: 'Amsterdam',
      id: 1,
      cardMark: 'Premium',
      cardImg: 'img/apartment-01.jpg',
      priceValue: 120,
      cardName: 'Beautiful & luxurious apartment',
      cardType: 'Apartment',
      imgSmall: 'img/apartment-small-03.jpg',
      time: '/night',
      currency: '€',
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
    },
    {
      NameCity: 'Amsterdam',
      id: 1,
      cardMark: 'Premium',
      cardImg: 'img/apartment-01.jpg',
      priceValue: 120,
      cardName: 'Beautiful & luxurious apartment',
      cardType: 'Apartment',
      imgSmall: 'img/apartment-small-03.jpg',
      time: '/night',
      currency: '€',
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
    },{
      NameCity: 'Paris',
      id: 2,
      cardMark: 'Premium',
      cardImg: 'img/apartment-02.jpg',
      priceValue: 140,
      cardName: 'Wood and stone place',
      cardType: 'Apartment',
      imgSmall: 'img/apartment-small-03.jpg',
      time: '/night',
      currency: '€',
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
    },{
      NameCity: 'Hamburg',
      id: 3,
      cardMark: 'Premium',
      cardImg: 'img/apartment-03.jpg',
      priceValue: 220,
      cardName: 'Canal View Prinsengracht',
      cardType: 'Apartment',
      imgSmall: 'img/apartment-small-04.jpg',
      time: '/night',
      currency: '€',
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
    },{
      NameCity: 'Cologne',
      id: 4,
      cardMark: 'Premium',
      cardImg: 'img/apartment-03.jpg',
      priceValue: 240,
      cardName: 'Nice, cozy, warm big bed apartment',
      cardType: 'Apartment',
      imgSmall: 'img/apartment-small-04.jpg',
      time: '/night',
      currency: '€',
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
    },{
      NameCity: 'Brussels',
      id: 5,
      cardMark: 'Premium',
      cardImg: 'img/apartment-03.jpg',
      priceValue: 240,
      cardName: 'Nice, cozy, warm big bed apartment',
      cardType: 'Apartment',
      imgSmall: 'img/apartment-small-04.jpg',
      time: '/night',
      currency: '€',
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
    },{
      NameCity: 'Dusseldorf',
      id: 6,
      cardMark: 'Premium',
      cardImg: 'img/apartment-03.jpg',
      priceValue: 240,
      cardName: 'Nice, cozy, warm big bed apartment',
      cardType: 'Apartment',
      imgSmall: 'img/apartment-small-04.jpg',
      time: '/night',
      currency: '€',
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
    }],
  },
];

export const Points: Point[]=[
  {
    id: 1,
    cardName: 'Beautiful & luxurious apartment at great location',
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
  },
  {
    id: 2,
    cardName: 'Wood and stone place',
    latitude: 52.369553943508,
    longitude: 4.85309666406198,
  },
  {
    id: 3,
    cardName: 'Canal View Prinsengracht',
    latitude: 52.3909553943508,
    longitude: 4.929309666406198,
  },
  {
    id: 4,
    cardName: 'Nice, cozy, warm big bed apartment',
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
  },
];

export const ReportFirst: ListReportList[]=[
  {
    ReportInfo:[{
      id: 1,
      avatar: 'img/avatar-angelina.jpg',
      username: 'Angelina',
      userstatus: 'Pro',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    },
    {
      id: 2,
      avatar: 'img/avatar-max.jpg',
      username: 'Max',
      userstatus: '',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    },
    ]},
];

export const muchCites: City[] = [
  {
    city: 'Amsterdam',
  },
  {
    city: 'Paris',
  },
  {
    city: 'Hamburg',
  },
  {
    city: 'Cologne',
  },
  {
    city: 'Brussels',
  },
  {
    city: 'Dusseldorf',
  },
];
