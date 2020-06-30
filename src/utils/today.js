import dayjs from 'dayjs';

import { dateFormat } from 'config';

const today = _ => dayjs().format(dateFormat);

export default today;
