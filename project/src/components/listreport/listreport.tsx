
import { ListReportList } from '../../types/Card';

type RepsProps = {
  reps: ListReportList;
}
function Listreport(props: RepsProps): JSX.Element{
  const {reps} = props;
  const {ReportInfo} = reps;
  return(
    <>
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">{reps.ReportInfo.length}</span>
      </h2>
      {ReportInfo.map((oneRep, id)=>{
        const keyValue = `${id}-${oneRep.avatar}`;
        return(
          <ul className="reviews__list" key={keyValue}>
            <li className="reviews__item">
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src={oneRep.avatar}width="54" height="54" alt="Reviews avatar" />
                </div>
                <span className="reviews__user-name">
                  {oneRep.username}
                </span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{ width: '80%' }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">
                  {oneRep.text}
                </p>
                <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
              </div>
            </li>
          </ul>
        );
      })}
    </>
  );}

export default Listreport;
