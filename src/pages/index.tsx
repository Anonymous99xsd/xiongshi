import '@/assets/css/global.less';
import 'antd/dist/antd.css';
import styles from './index.less';
import Anchor from '@/components/common/Anchor';
import data from '@/assets/static/data.json';

export default function IndexPage() {
  const { timeline } = data;
  return (
    <div className={styles.container}>
      <div className={styles.header}>Title</div>
      <div className={styles.content}>
        <div className={styles.aside}>
          <Anchor timeline={timeline}></Anchor>
        </div>
        <div className={styles.main}>
          {timeline.map((item) => {
            return (
              <div
                key={item.year}
                id={item.anchors}
                style={{ height: '500px' }}
              >
                <div className={styles.title}>{item.year}</div>
                <div className={styles.videoContainer}>
                  {item.video?.map(
                    ({ id, img, url, name, author, date, type }) => {
                      let imgStyle: any = img
                        ? {
                            backgroundImage: `url("${require('../assets/image/' +
                              img)}")`,
                          }
                        : null;
                      return (
                        <div
                          key={id}
                          className={styles.videoContent}
                          style={imgStyle}
                        >
                          <a href={url} target="_blank">
                            <div className={styles.mask}>
                              <span>{name}</span>
                              <div>
                                <span>{author}</span>
                                <span>{date}</span>
                              </div>
                            </div>
                            <div
                              className={styles.sign}
                              style={{ backgroundColor: 'rgba(255,145,83,1)' }}
                            >
                              {type}
                            </div>
                          </a>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
