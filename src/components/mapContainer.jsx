import React, { useEffect,useState } from 'react'
import { connect } from 'react-redux';
import '../assets/css/leafletContainer.css';
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet'
import { Icon  } from 'leaflet'
import Description from './leaflet/customButton'
import db from '../modules/db.json'
import { PopupInfo } from './leaflet/popupInfo';

const REIcon = new Icon({
    iconUrl: "/img/realestateIcon.svg",
    iconSize:[20,20]
})

const MapWraper = (props) => {
    const [location, setLocation] = useState([20.27, -157])
    const [checkRealEstate, setCheckRealEstate] = useState(null)
    const [filteredLocation, setfilteredLocation] = useState(props.realEstate)

    useEffect(() => {
        if(checkRealEstate){
            return checkRealEstate
        }
        return null
    }, [checkRealEstate])

    useEffect(() => {
        setfilteredLocation(props.realEstate)
    }, [props.realEstate])

    let getMyLocation = () => {
        window.navigator.geolocation.getCurrentPosition(function(position) {
            setLocation([position.coords.latitude, position.coords.longitude])
        },function(failure){
            console.log(failure);
        });
    }

    useEffect(() => {
        getMyLocation()
        return () => {
            return null
        }
    }, [])

    return (
        <div className="w-full h-full pr-10 md:pl-0 pl-10">
            <MapContainer className="markercluster-map" center={[15.650393523984054, 32.53563762363086]} zoom={12} maxZoom={20} zoomControl={false}>
                <Description
                    title={'<img src="./img/navigation_icon.png" width="16" height="16" />'}
                    markerPosition={location}
                    description="This is a custom description!"
                />
                <TileLayer 
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                />
                <ZoomControl position="bottomright" zoomInText="+" zoomOutText="-"/>

                {filteredLocation?.map((realEstate)=>(
                    <Marker 
                        key={realEstate.id}
                        position={realEstate.location} 
                        eventHandlers={{ click: () => {
                            setCheckRealEstate(realEstate);
                        } }}
                        icon={REIcon}
                    />
                )
                )}

                {checkRealEstate && (
                    <Popup
                        position={checkRealEstate.location}
                        onClose={()=>{
                            setCheckRealEstate(null);
                        }}
                    >
                        <div className="p-3">
                            <div className="serviceType"><span className="font-bold">Service Type: </span> {checkRealEstate.serviceType}</div>
                            <div className="propertyType"><span className="font-bold">Property Type: </span> {checkRealEstate.propertyType}</div>
                            <div className="fullAddress"><span className="font-bold">Address: </span> {checkRealEstate.address +", "+ checkRealEstate.city+", "+ checkRealEstate.state+", "+ checkRealEstate.country}</div>
                            <div className="price"><span className="font-bold">Price: </span> {checkRealEstate.price}</div>
                            <div className="area flex"><span className="font-bold">Area: </span> {checkRealEstate.area} m<small className="flex flex-col text-xs items-start">2</small></div>
                            <div className="roomsTable">
                                <PopupInfo {...checkRealEstate} />
                            </div>
                        </div>
                    </Popup>
                )}
                
            </MapContainer>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        realEstate: state.realEstate
    }
}

export default connect(mapStateToProps)(MapWraper);