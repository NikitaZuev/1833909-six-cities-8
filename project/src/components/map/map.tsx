//import React from 'react';
import {Icon, Marker} from 'leaflet';
import { useRef,useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { CardEx, Points } from '../../types/Card';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../const/const';
import { State } from '../../types/State';
import { connect, ConnectedProps } from 'react-redux';
type MapProps = {
  room: CardEx;
  points: Points;
};

//Беру данные из стейта которые получил при наведении на карточку для сравнения которое описано ниже
const mapStateToProps = ({checkPoint}: State) => ({
  checkPoint,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MapProps;

function Maper(props: ConnectedComponentProps):JSX.Element{
  const {room,points,checkPoint} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef,room);
  const defaultCustomIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = new Icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });

        marker
          .setIcon(
            //Условия для переключения поинтов с синего на красный
            checkPoint !== null && point.cardName === checkPoint.cardName
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, points, checkPoint]);
  return(
    <div className="cities__right-section property__map map" ref={mapRef}>
    </div>
  );
}

export  {Maper};
export default connector(Maper);
