import { Link } from 'react-router-dom';
import { State } from '../../types/State';
import { connect, ConnectedProps } from 'react-redux';
import { cardOne } from '../../moks/offer';
import { changeRoom } from '../../store/action';
import { Dispatch } from 'react';
import { Actions} from '../../types/Action';
import { InfoCard } from '../../types/Card';
import { useEffect } from 'react';


const mapStateToProps = ({city, cardts }: State) => ({
  city,
  cardts,
});
const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onRoomChange(cardts: InfoCard[]){
    dispatch(changeRoom(cardts));
  },
});

const connector = connect(mapStateToProps,mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function Card(props: ConnectedComponentProps): JSX.Element{
  const {city,onRoomChange} = props;
  const cardts = cardOne[0].cardInfo.filter((o)=> o.NameCity === city);
  useEffect(()=>{
    onRoomChange(cardts);
  });
  return(
    <>
      {cardts.map((cardInfoO, id) => {
        const keyValue = `${id}-${cardInfoO.cardImg}`;
        return(
          <article key={keyValue} className="cities__place-card place-card"
            id ={`cardInfoO-${id}`}
            //onChange={()=>{onRoomChange(cardts);}}
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

export {Card};
export default connector(Card);
