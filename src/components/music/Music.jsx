import React from "react";
import ReactPlayer from "react-player";
import classes from "../music/music.module.scss";

const Music = () => {
  return (
    <div>
      <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/573035961&color=%23d8252d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
        <ReactPlayer
          url="https://soundcloud.com/meetdrew/blur-mottive-remix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          width="100%"
          height="400"
          config={{ soundcloud: { options: { sharing: true } } }}
        />
      </iframe>
    </div>
  );
};
export default Music;
