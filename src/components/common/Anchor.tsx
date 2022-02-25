import { Anchor } from 'antd';

const { Link } = Anchor;

interface timeline {
  year: string,
  anchors: string
}

interface anchorProps {
  timeline: Array<timeline>;
}

export default (props: anchorProps) => {
  const { timeline } = props;

  return (
    <Anchor offsetTop={200} targetOffset={0}>
      {timeline.map((item) => (
        <Link key={item.year} href={`#${item.anchors}`} title={item.year} />
      ))}
    </Anchor>
  );
};
