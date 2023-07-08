import React from 'react'
import './../../src/cssfile/Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const redirect=useNavigate();
  function navi(){
    redirect('/men')
  }
  return (
    <div id="home">
      <div id="slide">
        <img src="https://assets.tatacliq.com/medias/sys_master/images/47596855590942.jpg" alt="" />
      </div>
      <div id="cate">
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47596848218142.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47548678373406.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466152990.jpg' />
        </div>
        <div onClick={navi}>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466218526.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47575793303582.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466349598.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466415134.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466480670.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466546206.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466611742.jpg' />
        </div>
      </div>
      <div id="pay">
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/46762762436638.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47596855787550.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/46690782937118.jpg' />
        </div>
      </div>
      <div id="offer">
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47532422234142.png' />
      </div>
      <div id="offer1">
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47596857851934.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47596865257502.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47596857983006.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47596866830366.jpg' />
        </div>
      </div>
      <div id="deals">
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47520344211486.jpg' />
      </div>
      <div id="deals1">
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47596650758174.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47596853493790.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47596853690398.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47596865323038.jpg' />
        </div>
      </div>
      <div id="cliq_offer">
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47520344277022.jpg' />
      </div>
      <div id="cliq_offer1">
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47513577619486.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47513577685022.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47513577750558.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47513577816094.jpg' />
        </div>
      </div>
      <div id="cliq_top">
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47520344408094.jpg' />
      </div>
      <div id="cliq_top1">
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47596866895902.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47596867223582.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47596867944478.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47596866961438.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47596854804510.jpg' />
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47596854870046.jpg' />
        </div>
      </div>
    </div>
  )
}

export default Home