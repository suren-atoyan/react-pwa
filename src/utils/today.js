import dayjs from 'dayjs';

import { dateFormat } from 'config';

const today = _ => {
  return dayjs().format(dateFormat);
};

export default today;
