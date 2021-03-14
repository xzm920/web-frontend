import { Card } from 'antd';
import { Link } from 'react-router-dom';

import styles from './index.module.css';

function VideoCard({ id, title }) {
  return (
    <Link to={`/videos/${id}/playback`}>
      <Card
        hoverable
        className={styles.card}
        cover={(
          <img
            className={styles.image}
            alt="poster"
            src={`https://xuzhiming.tech/images/${id}.jpg`}
          />
        )}
      >
        <Card.Meta description={title} />
      </Card>
    </Link>
  );
}

export default VideoCard;
