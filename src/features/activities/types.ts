export type Activity = {
    id: number;
    name: string;
    dayOfWeek: {
        label: string;
        value: string;
    };
    startTime: string;
    durationMin: string;
    room: {
        id: number;
        name: string;
    };
    trainer: string;
};
