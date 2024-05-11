const getNextLunchtime = (hours: number, minutes: number) => {
  const lunchtime = new Date();
  lunchtime.setHours(hours);
  lunchtime.setMinutes(minutes);
  lunchtime.setSeconds(0);
  lunchtime.setMilliseconds(0);

  // 如果吃过午饭，则设定时间为明天时间
  if (lunchtime.valueOf() < Date.now()) {
    lunchtime.setDate(lunchtime.getDate() + 1);
  }

  return lunchtime;
};

export default getNextLunchtime;
