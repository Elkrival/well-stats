import React from 'react';
import video_mp4 from '../../img/wellness_promo_video.mp4'

const Header = () =>{
 return(
  <header className="header">
   <div className="bg-video">
    <video className="bg-video__content" autoPlay muted loop>
     <source src={ video_mp4} type="video/mp4"/>
    </video>
   </div>
  </header>
 )
}

export default Header
