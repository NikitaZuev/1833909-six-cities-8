import { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { changeSort } from '../../store/action';
import { State } from '../../types/State';
import { Dispatch } from 'react';
import { Actions} from '../../types/Action';

enum SortType {
  POPULAR = 'Popular',
  PRICE_LOW = 'Price: low to high',
  PRICE_HIGH = 'Price: high to low',
  TOP_RATED = 'Top rated first',
}

const mapStateToProps = ({sort,city }: State) => ({
  sort,
  city,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onSortChange(sort: string){
    dispatch(changeSort(sort));
  },
});

const connector = connect(mapStateToProps,mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function Sortlist(props: ConnectedComponentProps): JSX.Element{
  const {city,onSortChange,sort} = props;
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  useEffect(() => () => {
    setIsSortMenuOpen(false);
    onSortChange(sort);
  }, [city]);
  return(
    <>
      <span className="places__sorting-type" tabIndex={0} onClick={() => {if(isSortMenuOpen){
        setIsSortMenuOpen(false);
      }
      else{
        setIsSortMenuOpen(true);
      }
      }}
      >
        {sort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom
    ${isSortMenuOpen ? 'places__options--opened' : ''}`}
      >
        {Object.entries(SortType).map((typeWithDescription) => {
          const [type, description] = typeWithDescription;
          return (
            <li key={type} className={`places__option
          ${sort === description ? 'places__option--active' : ''}`}
            onClick={() => (onSortChange(description))} tabIndex={0}
            >
              {description}
            </li>
          );
        })}

      </ul>
    </>
  );}

export {Sortlist};
export default connector(Sortlist);
