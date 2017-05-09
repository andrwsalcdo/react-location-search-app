const React = require('react');
const ReactDom = require('react-dom');

const Map = React.createClass({

      componentDidMount() {

            //only componentDidMount is called when the component is first added to
            //the page. this is why we are calling the following method manually.
            //this makes sure that our map initialization code is run the first time.

            this.componentDidUpdate();
      },

      componentDidUpdate() {

            if(this.lastLat == this.props.lat && this.lastLng == this.props.lng) {

                  //the map has already been initialized at this address.
                  //return from this method so that we don't reinitialize it
                  // and cause it to flicker.

                  return;
            }

            this.lastLat = this.props.lat;
            this.lastLng = this.props.lng;

            let map = new GMaps({
                  el: '#map',
                  lat: this.props.lat,
                  lng: this.props.lng
            });

            //adding a marker to the location we are showing

            map.addMarker({
                  lat: this.props.lat,
                  lng: this.props.lng
            });
      },

      render() {

            return (
                  <div className="map-holder">
                        <p>Loading...</p>
                        <div id="map"></div>
                  </div>
            );
      }
});

module.exports = Map; 
