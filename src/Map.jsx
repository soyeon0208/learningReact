/* global kakao */
import React, { useEffect } from "react";
const { kakao } = window;

const Map = () => {
  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new kakao.maps.LatLng(37.3415708, 126.8309276),
      level: 3,
    };

    let map = new kakao.maps.Map(container, options);
    let markerPosition = new kakao.maps.LatLng(37.3415708, 126.8309276);

    let marker = new kakao.maps.Marker({
      position: markerPosition
    });

    marker.setMap(map);
  }, []);

  return (
    <div>
        <div id="map" style={{width:'500px', height:'400px'}}></div>
    </div>
  );
};

export default Map;