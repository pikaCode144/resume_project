export const currentStatusMap = {
  employed: { label: '在职', value: 'employed' },
  employedOpenToOpportunities: { label: '在职-考虑机会', value: 'employedOpenToOpportunities' },
  employedNotConsideringOpportunities: { label: '在职-暂不考虑', value: 'employedNotConsideringOpportunities' },
  employedCanStartWithinAMonth: { label: '在职-月内到岗', value: 'employedCanStartWithinAMonth' },
  unemployed: { label: '离职', value: 'unemployed' },
  unemployedAvailableImmediately: { label: '离职-随时到岗', value: 'unemployedAvailableImmediately' },
  currentlyStudying: { label: '在读', value: 'currentlyStudying' },
  recentGraduate: { label: '应届毕业生', value: 'recentGraduate' },
  interning: { label: '实习中', value: 'interning' },
  freelancing: { label: '自由职业', value: 'freelancing' },
};

export const educationLevelMap = {
  secondarySpecialized: { label: '中专', value: 'secondarySpecialized' },
  highSchool: { label: '高中', value: 'highSchool' },
  juniorCollege: { label: '大专', value: 'juniorCollege' },
  undergraduate: { label: '本科', value: 'undergraduate' },
  mastersDegree: { label: '硕士', value: 'mastersDegree' },
  doctorate: { label: '博士', value: 'doctorate' },
}

export const educationTypeMap = {
  fullTime: { label: '全日制', value: 'fullTime' },
  partTime: { label: '非全日制', value: 'partTime' },
};
