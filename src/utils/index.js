import dayjs from "dayjs";

export const handleEnrollmentPeriod = (time) => {
  if (time === '') {
    return [null, null];
  }
  const timeArray = time.split('-');
  const [startTime, endTime] = timeArray;
  const mountArray = [dayjs(startTime, 'YYYY/MM'), dayjs(endTime, 'YYYY/MM')];
  return mountArray;
};

export const parseToEnrollmentPeriod = (mountArray) => {
  if (mountArray === null) {
    return '';
  }
  const [startMount, endMount] = mountArray;
  const timeArray = [dayjs(startMount).format('YYYY/MM'), dayjs(endMount).format('YYYY/MM')];
  const time = timeArray.join('-');
  return time;
};
