
export const settings={
    "schedules": [
        {
            "name": "开考前15分钟",
            "positionBy": "start",
            "offset": -15,
            "mediaPath": "",
            "volume": 100
        },
        {
            "name": "结束前15分钟",
            "positionBy": "end",
            "offset": -15,
            "mediaPath": "",
            "volume": 50
        }
    ]
};

export const defaultPlan = {
    "name": "默认方案",
    "subjects": [
        {
            "name": "语文",
            "startTime": 0,
            "length": 120,
            "schedules": [
                {
                    "name": "开考前15分钟",
                    "positionBy": "start",
                    "offset": -15,
                    "mediaPath": "",
                    "volume": 100
                },
                {
                    "name": "结束前15分钟",
                    "positionBy": "end",
                    "offset": -15,
                    "mediaPath": "",
                    "volume": 50
                }
                ]
        }
        ]
};


export function getDeafultSchedules() {
    return settings.schedules;
}
export function addSchedule(schedule) {
    settings.schedules.push(schedule);
}
