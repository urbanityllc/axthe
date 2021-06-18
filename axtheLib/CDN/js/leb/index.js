/* eslint-disable linebreak-style */
// https://github.com/PierfrancescoSoffritti/light-event-bus.js

import _EventBus from 'https://cdn.jsdelivr.net/npm/axthe@0.0.29/CDN/js/leb/EventBus.min.js'

export const EventBus = _EventBus;
export const EventBusSingleton = new _EventBus();
