import React, { Component } from 'react';
import Axios from 'axios';
import { withRouter } from "react-router-dom";
class Input extends Component {

    state = {
        name: '',
        suggest: []
    }

    changeHandler = (event) =>{
        const {value,name}= event.target;
        this.setState({[name]:value})
        if(value.length > 2){
            Axios.get('https://restcountries.eu/rest/v2/name/'+value).then(response=>{this.setState({suggest: response.data})})
        }else{
            this.setState({suggest:[]});
        }
    }
    gotoCountry = countrycode => () =>{
        this.props.history.push('/country/' + countrycode);
    }
    render() {
        return <div>
            <div className="App-input">
                <input type="text" autoComplete="off" value={this.state.name} name="name" onChange={this.changeHandler}/>
                {this.state.suggest.length > 0 && <ul className="suggest">
                    {this.state.suggest.map(country=><li onClick={this.gotoCountry(country.alpha2Code)} key={country.alpha2Code} className="suggest-item"><img src={country.flag}/> {country.name}</li>)}
            </ul>}
                <button className="button">GO</button>
            </div>
            
        </div>
    }
}
const inputWithRouter = withRouter(Input);

export {inputWithRouter as Input};
