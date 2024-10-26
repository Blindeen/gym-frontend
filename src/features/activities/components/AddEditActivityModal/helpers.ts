import { Time } from '@internationalized/date';

export const timeFromString = (time: string): Time => {
    const [hours, minutes] = time.split(':').map(Number);
    return new Time(hours, minutes);
};
