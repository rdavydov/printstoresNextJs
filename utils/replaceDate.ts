import moment from 'moment';

const day = {
  Monday: 'Понедельник',
  Tuesday: 'Вторник',
  Wednesday: 'Среда',
  Thursday: 'Четверг',
  Friday: 'Пятница',
  Saturday: 'Суббота',
  Sunday: 'Воскресенье',
};

const replaceDate = (value) =>
  `${
    day[
      moment(value)
        .format('LLLL')
        .replace(moment(value).format('LLL'), '')
        .replace(',', '')
        .trim()
    ]
  }, ${moment(value).format('L')}`;

export default replaceDate;
