export type Activity = {
    id: number;
    name: string;
    dayOfWeek: string;
    startTime: string;
    durationMin: number;
    room: {
        id: number;
        name: string;
    };
    trainer: string;
};
