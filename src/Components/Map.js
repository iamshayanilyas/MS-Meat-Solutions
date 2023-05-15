// import React, { Component } from "react";
// // import Slide from "react-reveal";
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import About from "./About";


// class Resume extends Component {
//   getRandomColor() {
//     let letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

//   render() {
//     if (!this.props.data) return null;

//     return (
//       <section id="resume" >
//         <div className="row" >
//           <div className="twelve columns collapsed" style={{ height: '500px' }}
// >
//             <Map google={this.props.google} zoom={14}>
 
//               <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />
 
              
//             </Map>
//           </div>
//         </div>
        
//       </section>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyCJblhbnlnayxUgOvzG6hw0xR5g7Egexg8")
// })(Resume)




import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  state = {
    currentLocation: {
      lat: null,
      lng: null
    }
  };

  componentDidMount() {
    // Check if the Geolocation API is supported by the browser
    if (navigator.geolocation) {
      // Request the current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          this.setState({
            currentLocation: {
              lat: latitude,
              lng: longitude
            }
          });
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  render() {
    const { google } = this.props;
    const { currentLocation } = this.state;

    return (
      <section id='resume'>
        <div className='row'>
          <div className='twelve columns collapsed' style={{ height: '500px' }}>
      <Map google={google} zoom={14}
        initialCenter={currentLocation}
        center={currentLocation}
      >
        <Marker onClick={this.onMarkerClick} name={'Current location'} />
            </Map>
            </div>
          </div>
        </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCJblhbnlnayxUgOvzG6hw0xR5g7Egexg8'
})(MapContainer);