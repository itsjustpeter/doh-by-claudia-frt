export const getCurrentTime = () => {
  const curr = new Date();

  // 2. UTC 시간 계산
  const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const kr_curr = new Date(utc + KR_TIME_DIFF);

  const timeList = [
    kr_curr.getFullYear(),
    kr_curr.getMonth() + 1,
    kr_curr.getDate(),
    kr_curr.getHours(),
    kr_curr.getMinutes(),
    kr_curr.getSeconds(),
  ];

  return timeList;
};
