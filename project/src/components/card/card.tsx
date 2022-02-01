/* eslint-disable @typescript-eslint/no-shadow */
import { Link } from 'react-router-dom';
import { State } from '../../types/State';
import { connect, ConnectedProps } from 'react-redux';
import { cardOne } from '../../moks/offer';
import { changeCheckPoint, changeRoom } from '../../store/action';
import { Dispatch } from 'react';
import { Actions} from '../../types/Action';
import { InfoCard } from '../../types/Card';
import { useEffect } from 'react';


function sortOffers(cardts: InfoCard[], sort: string):  InfoCard[] {
  switch (sort) {
    case ('Price: low to high'):
      return cardts.slice().sort((firstOffer, secondOffer) => firstOffer.priceValue - secondOffer.priceValue);
    case ('Price: high to low'):
      return cardts.slice().sort((firstOffer, secondOffer) => secondOffer.priceValue - firstOffer.priceValue);
    // case (SortType.TOP_RATED):
    //   return cardts.slice().sort((firstOffer, secondOffer) => secondOffer.rating - firstOffer.rating);
    default:
      return cardts;
  }
}

const mapStateToProps = ({city, cardts,sort }: State) => ({
  city,
  cardts,
  sort,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onRoomChange(cardts: InfoCard[]){
    dispatch(changeRoom(cardts));
  },
  //Создаю объект из отфильтрованных карточек на основе созданного мока "Point" который передаю в reduser, и так же который описан в типах, тип "Point" используется в описании типа State и асtion.
  onCheckPoinChange(cardts: InfoCard | null){
    const location = cardts ? {id:cardts.id ,cardName:cardts.cardName,latitude:cardts.latitude , longitude:cardts.longitude}: null;
    dispatch(changeCheckPoint(location));
  },
});

const connector = connect(mapStateToProps,mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function Card(props: ConnectedComponentProps): JSX.Element{
  const {city,onRoomChange,sort,onCheckPoinChange} = props;
  const cardts = cardOne[0].cardInfo.filter((o)=> o.NameCity === city);
  useEffect(()=>{
    onRoomChange(cardts);
  },[city]);
  return(
    <>
      {sortOffers(cardts,sort).map((cardts) => {
        const keyValue = `${cardts}`;
        return(
          <article key={keyValue} className="cities__place-card place-card"
            id ={`cardts-${cardts.id}`}
            //Events при наведении и отведении от карточки
            onMouseEnter={()=> (onCheckPoinChange(cardts))}
            onMouseLeave={()=> (onCheckPoinChange(null))}
          >
            <div className="place-card__mark">
              <span>{cardts.cardMark}</span>
            </div>
            <div className="cities__image-wrapper place-card__image-wrapper">
              <Link to="/offer/:id" title="/offer/:id">
                <img className="place-card__image" src={cardts.cardImg} width="260" height="200" alt="Place image"/>
              </Link>
            </div>
            <div className="place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">{cardts.priceValue}</b>
                  <span className="place-card__price-text">{cardts.currency}{cardts.time}</span>
                </div>
                <button className="place-card__bookmark-button button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{width:'80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <Link to="/offer/:id" title="/offer/:id">{cardts.cardName}</Link>
              </h2>
              <p className="place-card__type">{cardts.cardType}</p>
            </div>
          </article>
        );})}
    </>
  );}

export {Card};
export default connector(Card);
