import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanagesMap.css';

import markerImg from '../images/local.svg';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={markerImg} alt="Happy" />
                    <h1>Escolha um orfanato no mapa</h1>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Minas Gerais</strong>
                    <span>Belo Hrizonte</span>
                </footer>
            </aside>

            <Map
                className="map"
                center={[-19.985853, -44.0294353]}
                zoom={15}
                style={{ width: '100%', height: '100%' }} >

                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link to="#" className="button">
                <FiPlus size={32} color="white" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;
