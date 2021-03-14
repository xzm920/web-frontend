import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Main from '../../components/Main';

import styles from './index.module.css';

function VideoPlayback() {
  const { id } = useParams();

  useEffect(() => {
    let hls;
    const video = document.getElementById('video');
    const videoSrc = `https://xuzhiming.tech/videos/${id}.m3u8`;
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
    } else if (window.Hls.isSupported()) {
      hls = new window.Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
    }

    return () => {
      if (window.Hls.isSupported()) {
        hls.destroy();
      }
    };
  }, [id]);

  return (
    <Main>
      <video id="video" controls autoplay className={styles.video}></video>
    </Main>
  );
}

export default VideoPlayback;
