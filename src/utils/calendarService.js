import { config } from '../config/env.config.js';

const{ place } = config;

export const addToGoogleCalendar = (date, timeInit, timeFinish) => {
    
    const eventDate = date.replace(/-/g, '');
    const formatTimeInit = timeInit.replace(':', '') + '00';
    const formatTimeFinish = timeFinish.replace(':', '') + '00';

    const event = {
        action: 'TEMPLATE',
        text: 'Matrimonio Alan y Mariel',
        dates: `${eventDate}T${formatTimeInit}/${eventDate}T${formatTimeFinish}`,
        details: 'Te esperamos en nuestro gran día c:',
        location: place
    };

    const BASE_URL = 'https://calendar.google.com/calendar/render';
    const urlParams = new URLSearchParams(event).toString();
    window.open(`${BASE_URL}?${urlParams}`, '_blank');
}