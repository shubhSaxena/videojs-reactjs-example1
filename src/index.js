import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


var Component = React.createClass({
  render: function(){
    return (<video
    id="my-player"
    className="video-js vjs-default-skin"
    controls
    preload="auto"
    poster="//vjs.zencdn.net/v/oceans.png"
    data-setup='{}'>
  <source src="http://bc-jsanford.s3.amazonaws.com/instant_play_demo/1402004163/index.m3u8" type="application/x-mpegURL"></source>
  <p class="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a
    web browser that
    <a href="http://videojs.com/html5-video-support/" target="_blank">
      supports HTML5 video
    </a>
  </p>
</video>);
  }
});


ReactDOM.render(
  <Component />,
  document.getElementById('root')
);
