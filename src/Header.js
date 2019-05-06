import React, { Component } from 'react';
// import moment from 'moment';
import { NavLink } from 'react-router-dom';
import fb from './images/fb.jpg';
import youtube from './images/youtube.jpg';
import twitter from './images/twitter.jpg';
import instagram from './images/instagram.jpg';
import cloudy from './images/cloudy.png';
import './navbar.css';

class Header extends Component {
  render() {
    // let now = moment().format('Do MMMM YYYY');
    return (
      <div>
        <div className="grid-container" style={{padding: '10px'}} data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
          <div className="grid-30" style={{textAlign: 'left'}} uk-scrollspy-class="uk-animation-slide-right">
            <div style={{position: 'relative', textAlign: 'left', 'color': 'black'}}>
              <img alt="" src={cloudy} width="50" height="50" />
              <div style={{position:'absolute', top: '50%', left: '0%', transform: 'translate(-50%, -50%)', fontSize:'1.5em'}}>35<sup>o</sup>C</div>
            </div>
          </div>
          <div className="grid-40 buletin-logo" style={{fontSize: '3em', textAlign: 'center'}} uk-scrollspy-class="uk-animation-slide-bottom">buletin01</div>
          <div className="grid-30" style={{textAlign: 'right'}} uk-scrollspy-class="uk-animation-slide-left">
            <div>
              <img alt="" src={fb} height="30" width="30" />&nbsp;
              <img alt="" src={youtube} height="30" width="30" />&nbsp;
              <img alt="" src={twitter} height="30" width="30" />&nbsp;
              <img alt="" src={instagram} height="30" width="30" />&nbsp;
            </div>
            <div>English | Malay</div>
          </div>
        </div>
        <div style={{ padding:'1em', textAlign:'center'}} data-uk-scrollspy="cls:uk-animation-fade; delay: 1000">
          <label htmlFor="show-menu" className="show-menu">Show Menu</label>
          <input type="checkbox" id="show-menu" role="button" />
          <ul id="menu" style={{width: '95%', borderStyle: 'solid'}} className="stretch">
            <li><NavLink to="./"> Home </NavLink></li>
            <li><NavLink to="./about"> Mengenai Kami </NavLink></li>
            <li><NavLink to="./current"> Terkini </NavLink></li>
            <li><NavLink to="./politic"> Politik </NavLink></li>
            <li><NavLink to="./commentary"> Ulasan </NavLink></li>
            <li><NavLink to="./sports"> Sukan </NavLink></li>
            <li><NavLink to="./entertainment"> Hiburan </NavLink></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
