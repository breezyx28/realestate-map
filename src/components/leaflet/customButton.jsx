import React from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

class Description extends React.Component {
    createButtonControl() {
        const MapHelp = L.Control.extend({
          onAdd: (map) => {
            const helpDiv = L.DomUtil.create("button", "");
            this.helpDiv = helpDiv;
            // set the inner content from the props
            helpDiv.innerHTML = this.props.title;
            helpDiv.classList.add("p-3","bg-white","rounded-full","mr-4","cursor-pointer");
            helpDiv.style.marginRight = "2rem";
            helpDiv.style.marginBottom = "2rem";
            helpDiv.style.boxShadow = "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
            

            // custom font awesome icon
            const fontAwesomeIcon = L.divIcon({
              html: '<i class="fas fa-map-pin fa-4x text-primary-blue"></i>',
              iconSize: [100, 100],
              className: 'random'
            });

            // add the event listener that will create a marker on the map
            helpDiv.addEventListener("click", () => {
              const marker = L.marker(this.props.markerPosition,{
                icon:fontAwesomeIcon
                })
                .bindPopup(this.props.description)
                // .bindTooltip('This location is based on <br/> your <strong class="text-lg">browser</strong> location', {offset: [24, 32], permanent: true, direction: 'right'})
                .addTo(map);

                map.flyTo(this.props.markerPosition, 15)
                // map.panTo(new L.LatLng(this.props.markerPosition[0], this.props.markerPosition[1]));
    
              marker.openPopup();
            });
     
            // return the button div
            return helpDiv;
          }
        });
        return new MapHelp({ position: "bottomright" });
      }

  componentDidMount() {
    const { map } = this.props;
    const control = this.createButtonControl();
    control.addTo(map);
  }

  render() {
    return null;
  }
}

function withMap(Component) {
  return function WrappedComponent(props) {
    const map = useMap();
    return <Component {...props} map={map} />;
  };
}

export default withMap(Description);