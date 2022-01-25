import { useEffect, useState,MutableRefObject } from 'react';
import {Map, TileLayer} from 'leaflet';
import {CardEx} from '../types/Card';

function useMap(mapRef: MutableRefObject<HTMLElement | null>,room: CardEx): Map | null {
  const [map,setMap] = useState(<Map | null>(null));
  const {cardInfo} = room;
  const [oneRoom] = cardInfo;
  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: oneRoom.latitude,
          lng: oneRoom.longitude,
        },
        zoom: 10,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );
      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map, room]);


  return map;
}

export default useMap;
