import React,{useEffect} from 'react'
import '../css/Road.scss'

import 'ol/ol.css';

import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import {transformExtent,transform} from 'ol/proj'
import {Circle as CircleStyle, Fill, Stroke, Style,Icon} from 'ol/style';

import markerIcon from '../images/marker.png';

import Point from 'ol/geom/Point';

import Feature from 'ol/Feature';
import { Button, ButtonGroup, Intent } from '@blueprintjs/core';

function Road() {

    useEffect(() => {
        
    
        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                  source: new OSM()
                })
              
            ],
            view: new View({
              projection: 'EPSG:3857',
              center: transform([127.032974,37.485540],"EPSG:4326","EPSG:3857"),
              zoom: 18,
              extent: transformExtent([123.44238281249997, 32.74570253945518, 132.71484375, 39.00637903337457], 'EPSG:4326', 'EPSG:3857'),
            })
          });


          let iconFeature = new Feature({
            geometry: new Point(map.getView().getCenter()),
          });
    
        let iconStyle = new Style({
            fill: new Fill({
                color: 'rgba(255, 255, 255, 0.2)',
              }),
              stroke: new Stroke({
                color: '#ff3366',
                width: 2,
              }),
              image: new Icon({
                scale: 0.1,
                src: `${markerIcon}`
              }),
        });
    
        iconFeature.setStyle(iconStyle);
    
        let iconSource = new VectorSource({
            features: [iconFeature]
        });
    
        let iconLayer = new VectorLayer({
            source: iconSource,
          });

        map.addLayer(iconLayer);
        
    }, [])

    useEffect(() => {
        document.querySelectorAll(".navi___link").forEach((v)=>v.classList.remove('active'))
        document.querySelector(".navi___link.route_link").classList.add('active');
    }, [])

   

    return(
        <div className="road_page">
            <div id="map"></div>
            <ButtonGroup>
                <a className="map_link" href="http://naver.me/FlYoMtVX"><Button className="map_btn" text="네이버로 열기" intent={Intent.SUCCESS}/></a>
                <a className="map_link" href="http://kko.to/XnX67DPDM"><Button className="map_btn" text="카카오로 열기" intent={Intent.PRIMARY}/></a>
            </ButtonGroup>
        </div>
    )
}

export default Road;