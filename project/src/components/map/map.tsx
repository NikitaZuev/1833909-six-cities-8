//import React from 'react';
import {Icon, Marker} from 'leaflet';
import { useRef,useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { CardEx, Point, Points } from '../../types/Card';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../const/const';
type MapProps = {
  room: CardEx;
  points: Points;
  selectPoint: Point | undefined;
};

function Maper(props: MapProps):JSX.Element{
  const {room,points,selectPoint} = props;
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
            selectPoint !== undefined && point.cardName === selectPoint.cardName
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, points, selectPoint]);
  return(
    <div className="cities__right-section property__map map" ref={mapRef}>
    </div>
  );
}

export default Maper;
