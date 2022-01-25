import {Cityes} from '../../types/Card';
import { Dispatch } from 'react';
import { State } from '../../types/State';
import { Actions} from '../../types/Action';
import { changeCity } from '../../store/action';
import { connect, ConnectedProps } from 'react-redux';

type CityName ={
  cityName: Cityes,
}
const mapStateToProps = ({ city, cardts}: State) => ({
  city,
  cardts,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCityChange( city: string ) {
    dispatch(changeCity(city));
  },
});


const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & CityName;

function ListCity (props: ConnectedComponentProps): JSX.Element{
  const{cityName,onCityChange,city} = props;
  return(
    <>
      {cityName.map((oneCity, id)=>{
        const keyValue = `${id}-${oneCity.city}`;
        return(
          <li key={keyValue} className="locations__item">
            <a
              className={city === oneCity.city ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
              onClick={()=>{onCityChange (oneCity.city);}}
            >
              <span>{oneCity.city}</span>
            </a>
          </li>
        );
      })}
    </>
  );}

export  {ListCity};
export default connector(ListCity);
