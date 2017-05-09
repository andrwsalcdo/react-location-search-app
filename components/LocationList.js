const react = require('react');
const LocationItem = require('./LocationItem');

const LocationList = React.createClass({

        render() {

              let self = this;

              let locations = this.props.locations.map(function(location) {

                    let active = self.props.activeLocationAddress == location.address;

                    //notice that we are passing the onClick callback of this
                    //LocationList to each LocationItem.

                    return <LocationItem address = { location.address} timestamp={location.timestamp}
                          active={active} onClick={self.props.onClick} />
              });

              if (!locations.length) {
                    return null;
              }

              return (

                    <div className="list-group col-xs-12 col-md-6 col-md-offset-3">
                          <span className="list-group-item active">Saved Locations</span>
                          {locations}
                    </div>
              )
        }
});

module.exports = LocationList;
