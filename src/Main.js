import React, { Component } from 'react';
import {news} from './news.js';

class Main extends Component {
  render() {
    return (
      <div>
        <div
          className="grid-container"
          data-uk-scrollspy="cls: uk-animation-fade; target: div; delay: 300; repeat: true">
          <div className="grid-30">
            <div style={{textAlign: 'center', paddingBottom: '0.5em'}}><b><u>Terkini</u></b></div>
            <div className="uk-child-1-1@s uk-grid-small" data-uk-grid>
              {
                news.map(thenews => {
                  return (
                    <div key={thenews.id} className="grid-container">
                      <div className="grid-35">
                        <img
                          alt=""
                          src={thenews.img}
                          width="90" />
                      </div>
                      <div className="grid-65">
                        {thenews.title}
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="grid-40" style={{borderRight: '0.1em solid #ADD8E6', borderLeft: '0.1em solid #ADD8E6'}}>
            <label><b>Selamat menyambut bulan Ramadhan Al-Mubarak daripada Buletin 01</b></label>
            <div style={{padding: '1em'}} className="uk-overflow-hidden">
              <img
                alt=""
                width="100%"
                src="http://buletin01.com/wp-content/uploads/2019/05/Ramadhan-Buletin-01-Johor-348x180.jpg"
                 data-uk-scrollspy="cls: uk-animation-kenburns; repeat: true"
                 className="uk-animation-reverse uk-transform-origin-top-right" />
            </div>
            <div>
              ISKANDAR PUTERI, 5 MEI: Selamat menyambut bulan Ramadhan Al-Mubarak kepada semua umat Islam di Malaysia secara amnya, dan di negeri Johor Datul Ta'zim secara khususnya. Semoga dengan kehadiran …
            </div>
          </div>
          <div className="grid-30">
            <div style={{textAlign: 'center', paddingBottom: '0.5em'}}><b><u>Acara</u></b></div>
            <div className="uk-child-1-1@s uk-grid-small" data-uk-grid>
              {
                news.map(thenews => {
                  return (
                    <div key={thenews.id} className="grid-container">
                      <div className="grid-65">
                        {thenews.title}
                      </div>
                      <div className="grid-35">
                        <img
                          alt=""
                          src={thenews.img}
                          width="90" />
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div style={{borderBottom: '0.1em solid #ADD8E6', width: '90%', contentAlign:'center', align:'center', padding: '0.5em', margin: 'auto'}}></div>
        <div className="uk-section uk-section-default">
          <div
            className="grid-container"
            data-uk-scrollspy="cls: uk-animation-fade; target: div; delay: 300; repeat: true">
            <div className="grid-40" style={{borderRight: '0.1em solid #ADD8E6', borderLeft: '0.1em solid #ADD8E6'}}>
              <div style={{textAlign: 'center'}}>Info-Grafik</div>
              <label><b>Selamat menyambut bulan Ramadhan Al-Mubarak daripada Buletin 01</b></label>
              <div style={{padding: '1em'}} className="uk-overflow-hidden">
                <img
                  alt=""
                  width="100%"
                  src="http://buletin01.com/wp-content/uploads/2019/05/Ramadhan-Buletin-01-Johor-348x180.jpg"
                   data-uk-scrollspy="cls: uk-animation-kenburns; repeat: true"
                   className="uk-animation-reverse uk-transform-origin-top-right" />
              </div>
              <div>
                ISKANDAR PUTERI, 5 MEI: Selamat menyambut bulan Ramadhan Al-Mubarak kepada semua umat Islam di Malaysia secara amnya, dan di negeri Johor Datul Ta'zim secara khususnya. Semoga dengan kehadiran …
              </div>
            </div>
            <div className="grid-30">
              <div style={{textAlign: 'center', paddingBottom: '0.5em'}}><b><u>Politik</u></b></div>
              <div className="uk-child-1-1@s uk-grid-small" data-uk-grid>
                {
                  news.map(thenews => {
                    return (
                      <div key={thenews.id} className="grid-container">
                        <div className="grid-35">
                          <img
                            alt=""
                            src={thenews.img}
                            width="90" />
                        </div>
                        <div className="grid-65">
                          {thenews.title}
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="grid-30">
              <div style={{textAlign: 'center', paddingBottom: '0.5em'}}><b><u>Hiburan</u></b></div>
              <div className="uk-child-1-1@s uk-grid-small" data-uk-grid>
                {
                  news.map(thenews => {
                    return (
                      <div key={thenews.id} className="grid-container">
                        <div className="grid-65">
                          {thenews.title}
                        </div>
                        <div className="grid-35">
                          <img
                            alt=""
                            src={thenews.img}
                            width="90" />
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
