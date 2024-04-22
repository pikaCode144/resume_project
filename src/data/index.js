export const resumeDetails = {
  personInfo: {
    name: '臧志群',
    phone: '18746706768',
    email: '1447881964@qq.com',
    currentStatus: '',
    jobTilte: '前端开发',
    expectedWorkLocation: '成都',
    expectedPay: '4k-6k',
    highestEducationLevel: '本科',
    personalWebsite: 'https://test.qidianchat.com/',
    facePhotoPath: 'https://pikacode.oss-cn-chengdu.aliyuncs.com/person_info/zangzhiqun.jpg',
  },
  education: [
    {
      school: '成都东软学院',
      college: '计算机与软件学院',
      major: '计算机科学与技术',
      educationLevel: '',
      educationType: '',
      city: '成都',
      enrollmentPeriod: '2020/09-2024/06',
      description: '参加过学校实验室：成都东软学院软件开发项目组',
    },
  ],
  workExperience: [
    {
      companyName: '奇点软件',
      departmentName: '研发部',
      JobTitle: '前端开发',
      city: '成都',
      enrollmentPeriod: '2023/08-2024/03',
      description: '开发gpt网站',
    },
    {
      companyName: '美团',
      departmentName: 'SaaS技术部',
      JobTitle: '前端开发',
      city: '成都',
      enrollmentPeriod: '2023/03-2024/04',
      description: '餐饮SaaS系统',
    },
  ],
  projectExperience: [
    {
      projectTitle: '奇点慧语',
      role: '前端开发',
      city: '成都',
      projectLink: 'https://test.qidianchat.com/',
      enrollmentPeriod: '2023/08-2024/03',
      description: '描述:一个运行在 PC 端响应式的 AI 聊天系统。 前端技术栈:Vue3 全家桶 + Quasar 组件库 + Tailwind CSS + Vite 团队规模:研发 2 人,前端 1 人。 个人负责部分: 1、利用 Quasar 组件库和 Tailwind css 进行原子化的页面编写。 2、利用 @microsoft/fetch-event-source 开发聊天功能。 3、利用 pinia 管理各种状态,遵循 vue 单向数据流。 4、检查各种问题,通过逐一排查解决各种问题。 项目链接:https://test.qidianchat.com/',
    },
    {
      projectTitle: '大学物理实验',
      role: '前端开发',
      city: '成都',
      projectLink: '',
      enrollmentPeriod: '2023/03-2024/04',
      description: '描述:一个运行在 PC 端的大学物理实验答题系统,分为学生答题和教师阅览2个系统。 前端技术栈:Vue2全家桶 团队规模:后端 2 人,前端 2 人。 个人负责部分: 1、增加新的需求,将原生表格替换成 Handsontable 组件库,使其可以像 Excel 表格一样拖拽。 2、增加新的考试页面,新的霍尔实验,新的箱式实验。 3、增加逻辑判断是否已答题逻辑。 4、增加新的 Excel 导出逻辑。',
    },
  ],
};

export const modelListData = [];

// export const modelListData = [
//   {
//     id: 1,
//     icon: 'userOutlined',
//     title: '基本信息',
//     model: MODEL_TYPE.BASIC,
//     // data: [
//     //   {
//     //     id: crypto.randomUUID(),
//     //     label: '姓名',
//     //     value: '张三',
//     //     type: 'input',
//     //     tag: 'basic',
//     //   },
//     //   {
//     //     id: crypto.randomUUID(),
//     //     label: '电话',
//     //     value: '13344445555',
//     //     type: 'input',
//     //     tag: 'basic',
//     //   },
//     //   {
//     //     id: crypto.randomUUID(),
//     //     label: '邮箱',
//     //     value: '1234445555@qq.com',
//     //     type: 'input',
//     //     tag: 'basic',
//     //   },
//     //   {
//     //     id: crypto.randomUUID(),
//     //     label: '头像',
//     //     value: 'https://pikacode.oss-cn-chengdu.aliyuncs.com/person_info/zangzhiqun.jpg',
//     //     type: 'upload',
//     //     tag: 'basic',
//     //   },
//     //   {
//     //     id: crypto.randomUUID(),
//     //     label: '当前状态',
//     //     value: '在职',
//     //     type: 'input',
//     //     tag: 'basic',
//     //   },
//     //   {
//     //     id: crypto.randomUUID(),
//     //     label: '职位名称',
//     //     value: '前端工程师',
//     //     type: 'input',
//     //     tag: 'basic',
//     //   },
//     //   {
//     //     id: crypto.randomUUID(),
//     //     label: '期望工作地',
//     //     value: '成都',
//     //     type: 'input',
//     //     tag: 'basic',
//     //   },
//     //   {
//     //     id: crypto.randomUUID(),
//     //     label: '期望薪资',
//     //     value: '6k',
//     //     type: 'input',
//     //     tag: 'basic',
//     //   },
//     //   {
//     //     id: crypto.randomUUID(),
//     //     label: '学历',
//     //     value: '本科',
//     //     type: 'input',
//     //     tag: 'basic',
//     //   },
//     //   {
//     //     id: crypto.randomUUID(),
//     //     label: '个人网站',
//     //     value: 'https://qidianchat.com/chat',
//     //     type: 'input',
//     //     tag: 'basic',
//     //   },
//     // ],
//     data: {
//       // basic: {
//       //   name: { label: '姓名', value: '张三' },
//       //   phone: { label: '电话', value: '13344445555' },
//       //   email: { label: '邮箱', value: '1234445555@qq.com' },
//       //   avatar: { label: '头像', value: 'https://pikacode.oss-cn-chengdu.aliyuncs.com/person_info/zangzhiqun.jpg' },
//       // },
//       // jobIntention: {
//       //   currentState: { label: '当前状态', value: '在职' },
//       //   jobTitle: { label: '职位名称', value: '前端工程师' },
//       //   expectedWorkLocation: { label: '期望工作地', value: '成都' },
//       //   expectedPay: { label: '期望薪资', value: '6k' },
//       // },
//       // otherInfo: {
//       //   educationLevel: { label: '学历', value: '本科' },
//       //   personalWebsite: { label: '个人网站', value: 'https://qidianchat.com/chat' },
//       // },
//     }
//   },
//   {
//     id: 2,
//     icon: 'scheduleOutlined',
//     title: '教育经历',
//     data: [],
//   },
//   // {
//   //   id: 3,
//   //   icon: 'toolOutlined',
//   //   title: '专业技能',
//   //   data: [],
//   // },
//   // {
//   //   id: 4,
//   //   icon: 'laptopOutlined',
//   //   title: '工作经历',
//   //   data: [],
//   // },
//   // {
//   //   id: 5,
//   //   icon: 'bookOutlined',
//   //   title: '项目经历',
//   //   data: [],
//   // },
//   // {
//   //   id: 6,
//   //   icon: 'trophyOutlined',
//   //   title: '荣誉奖项',
//   //   data: [],
//   // },
//   // {
//   //   id: 7,
//   //   icon: 'searchOutlined',
//   //   title: '研究经历',
//   //   data: [],
//   // },
//   // {
//   //   id: 8,
//   //   icon: 'desktopOutlined',
//   //   title: '个人作品',
//   //   data: [],
//   // },
//   // {
//   //   id: 9,
//   //   icon: 'tagsOutlined',
//   //   title: '其他经历',
//   //   data: [],
//   // },
//   // {
//   //   id: 10,
//   //   icon: 'likeOutlined',
//   //   title: '个人简介',
//   //   data: [],
//   // }
// ]
