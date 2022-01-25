export type InfoCard ={
  NameCity: string;
  cardMark: string;
  cardImg: string;
  priceValue: number;
  cardName: string;
  cardType: string;
  time: string;
  currency: string;
  id: number;
  latitude: number;
  longitude: number;
  imgSmall: string;
};

export type City ={
  city: string;
}

export type Cityes = City[];

export type Point = {
  id: number;
  cardName: string;
  latitude: number;
  longitude: number;
}
export type ReportsList ={
  id: number;
  avatar: string;
  username: string;
  userstatus: string;
  text: string;
}
export type ListReportList={
  ReportInfo: ReportsList[]
}
export type CardEx = {
  cardInfo:InfoCard[]
};

export type ReportsLists = ListReportList[];
export type Points = Point[];
export type Cardis = CardEx[];
