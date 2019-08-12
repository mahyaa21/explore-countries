import React, { Component } from 'react';
import Axios from 'axios';
import { withRouter } from "react-router-dom";
import logo from './world.svg';
import back from './arrow-left.svg';
import './styles/bootstrap-grid.min.css';
import  {MapContainer} from './_component';
import { stat } from 'fs';
class Country extends Component {


    constructor(props) {

        
        super(props);
        
        Axios.get('https://restcountries.eu/rest/v2/alpha/' + props.match.params.code).then(response => { this.setState({ ...response.data}) })
        

    }

    goBack = () => {
        this.props.history.push('/');
    }
    render() {
        const { state } = this;
        let map, marker;

        return <>
            <nav>

                <button onClick={this.goBack}><img src={back} width="30" height="30" /></button>
                <span>Country info - {state && state.name}</span>
                <img src={logo} />
            </nav>
            {state ? <main className="container-fluid row">

                <div className="col-12 col-lg-4 item">
                     <ul>
                        <li><h2>{state.name}</h2></li>
                        <li><span className="title">Native Name</span> : <span>{state.nativeName}</span></li>
                        <li><span className="title">Capital</span>:<span>{state.capital}</span></li>
                        <li><span className="title">Region</span>:<span>{state.region},{state.subregion}</span></li>
                        <li><span className="title">Population</span>:<span>{state.population}</span></li>
                        <li><span className="title">Languges</span>:<span>{state.languages[0].name}</span></li>
                        <li><span className="title">TimeZone</span>:<span>{state.timezones}</span></li>
                    </ul> 
                </div>
                <div className="col-12 col-lg-4 item callingCode">
                    <div>CALLING CODE</div>
                     <div>{state.callingCodes}</div> 
                </div>
                <div className="col-12 col-lg-4 item"><img src={state.flag} className="flag" /></div>



                <div className="col-12 col-lg-4 item callingCode">
                    <div>CAPITAL WEATHER REPORT</div>
                </div>
                  <div className="col-12 col-lg-8 item"><MapContainer lat={state.latlng[0]} lng={state.latlng[1]}/></div>  


            </main> : <span>Loading...</span>}
        </>
    }
}

withRouter(Country);
export { Country };