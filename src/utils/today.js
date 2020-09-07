import dayjs from 'dayjs';

import { dateFormat } from 'config';

const today = () => dayjs().format(dateFormat);

export default today;
