import '@/assets/css/global.less';
import 'antd/dist/antd.css';
import styles from './index.less';
import data from '@/assets/static/data.json';
import Anchor from '@/components/common/Anchor';
import { tagColor, authorColor } from '@/components/common/utils';

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
              <div key={item.year} id={item.anchors}>
                <div className={styles.title}>{item.year}</div>
                <div className={styles.videoContainer}>
                  {item.video?.map(
                    ({ id, img, url, name, author, date, type }) => {
                      let imgStyle: any = img
                        ? {
                            backgroundImage: `url("${require('../assets/image/cover/' +
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
                                <span style={{ color: authorColor(author) }}>
                                  {author}
                                </span>
                                <span>{date}</span>
                              </div>
                            </div>
                            <div
                              className={styles.sign}
                              style={{ backgroundColor: tagColor(type) }}
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
      <div className={styles.test}>
        <div className={styles.scrollbar}></div>
      </div>
    </div>
  );
}
