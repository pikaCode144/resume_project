import { UserOutlined, ScheduleOutlined, ToolOutlined, LaptopOutlined, BookOutlined, TrophyOutlined, SearchOutlined, DesktopOutlined, TagsOutlined, LikeOutlined } from '@ant-design/icons';

export const modelListData = [
  {
    id: crypto.randomUUID(),
    icon: <UserOutlined className='flex items-center text-xl text-[#c4c4c4]' />,
    name: '基本信息',
    checked: true
  },
  {
    id: crypto.randomUUID(),
    icon: <ScheduleOutlined className='flex items-center text-xl text-[#c4c4c4]' />,
    name: '教育经历',
    checked: true
  },
  {
    id: crypto.randomUUID(),
    icon: <ToolOutlined className='flex items-center text-xl text-[#c4c4c4]' />,
    name: '专业技能',
    checked: true
  },
  {
    id: crypto.randomUUID(),
    icon: <LaptopOutlined className='flex items-center text-xl text-[#c4c4c4]' />,
    name: '工作经历',
    checked: true
  },
  {
    id: crypto.randomUUID(),
    icon: <BookOutlined className='flex items-center text-xl text-[#c4c4c4]' />,
    name: '项目经历',
    checked: true
  },
  {
    id: crypto.randomUUID(),
    icon: <TrophyOutlined className='flex items-center text-xl text-[#c4c4c4]' />,
    name: '荣誉奖项',
    checked: false
  },
  {
    id: crypto.randomUUID(),
    icon: <SearchOutlined className='flex items-center text-xl text-[#c4c4c4]' />,
    name: '研究经历',
    checked: false
  },
  {
    id: crypto.randomUUID(),
    icon: <DesktopOutlined className='flex items-center text-xl text-[#c4c4c4]' />,
    name: '个人作品',
    checked: false
  },
  {
    id: crypto.randomUUID(),
    icon: <TagsOutlined className='flex items-center text-xl text-[#c4c4c4]' />,
    name: '其他经历',
    checked: false
  },
  {
    id: crypto.randomUUID(),
    icon: <LikeOutlined className='flex items-center text-xl text-[#c4c4c4]' />,
    name: '个人简介',
    checked: false
  }
]
