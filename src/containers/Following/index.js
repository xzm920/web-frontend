import Main from '../../components/Main';
import VideoCard from '../../components/VideoCard';

import styles from './index.module.css';

function Following() {
  return (
    <Main>
      <h2>My Following</h2>
      <div className={styles.videos}>
        <VideoCard
          id="Q-5SqWfOBmI"
          title="3/14/2021路德时评（路安墨谈）：前国家情报总监RATCLIFFE福克斯采访透露重要灭共信息和步骤；北约即将发布“北约2030”战略报告，准星全面对准中共意味着什么？"
        />
      </div>
    </Main>
  );
}

export default Following;
