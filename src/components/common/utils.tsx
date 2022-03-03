// 标签颜色计算
export const tagColor = (type: string): string => {
  switch (type) {
    case '桌游':
      return 'rgb(255,145,83)';
    case '生活':
      return 'rgb(14,111,93)';
    default:
      return '#000';
  }
};

// author颜色计算
export const authorColor = (author: string): string => {
  switch (author) {
    case '桌游林吃素':
      return 'rgb(231,198,152)';
    case '碳酸熊卡':
      return 'rgb(249,215,172)';
    case '吃素的狮子':
      return 'rgb(244,248,165)';
    default:
      return '#fff';
  }
};