import { Link } from 'react-router-dom';
import {CardEx} from '../../types/Card';
import { useState,MouseEvent,MutableRefObject } from 'react';

type InfoCardProps = {
  info: CardEx;
}
function CardNearby(props: InfoCardProps,cardRef: MutableRefObject<HTMLElement | null>): JSX.Element{
  const {info} = props;
  const {cardInfo} = info;
  const  ifenter = [true,true,true,true];
  const ifout =[false,false,false,false];
  const [activeCards, setActiveCards] = useState(ifout);
  return(
    <>
      {cardInfo.map((cardInfoO, id) => {
        const keyValue = `${id}-${cardInfoO.cardImg}`;
        return(
          <article key={keyValue} className="near-places places"
            id ={`cardInfoO-${id}`}
            onMouseEnter={(event: MouseEvent<HTMLElement>) =>{
              if (event){
                setActiveCards([...activeCards.slice(0,id),ifenter[id],...activeCards.slice(id+1)]);
              }
            }}
            onMouseOut={(event: MouseEvent<HTMLElement>)=>{
              if (event){
                setActiveCards([...activeCards.slice(0,id),ifout[id],...activeCards.slice(id+1)]);
              }
            }}
          >
            <div className="place-card__mark">
              <span>{cardInfoO.cardMark}</span>
            </div>
            <div className="cities__image-wrapper place-card__image-wrapper">
              <Link to="/offer/:id" title="/offer/:id">
                <img className="place-card__image" src={cardInfoO.cardImg} width="260" height="200" alt="Place image"/>
              </Link>
            </div>
            <div className="place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">{cardInfoO.priceValue}</b>
                  <span className="place-card__price-text">{cardInfoO.currency}{cardInfoO.time}</span>
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
                <Link to="/offer/:id" title="/offer/:id">{cardInfoO.cardName}</Link>
              </h2>
              <p className="place-card__type">{cardInfoO.cardType}</p>
            </div>
          </article>
        );})}
    </>
  );}

export default CardNearby;
