import { memo } from 'react';
import { UserOutlined, ScheduleOutlined, ToolOutlined, LaptopOutlined, BookOutlined, TrophyOutlined, SearchOutlined, DesktopOutlined, TagsOutlined, LikeOutlined } from '@ant-design/icons';

// 创建一个映射，将字符串键映射到对应的图标组件
const iconMap = {
  userOutlined: <UserOutlined />,
  scheduleOutlined: <ScheduleOutlined />,
  toolOutlined: <ToolOutlined />,
  laptopOutlined: <LaptopOutlined />,
  bookOutlined: <BookOutlined />,
  trophyOutlined: <TrophyOutlined />,
  searchOutlined: <SearchOutlined />,
  desktopOutlined: <DesktopOutlined />,
  tagsOutlined: <TagsOutlined />,
  likeOutlined: <LikeOutlined />,
};

const DynamicIcon = memo(({ icon }) => {
  const IconComponent = iconMap[icon];
  return IconComponent;
});

export default DynamicIcon;
