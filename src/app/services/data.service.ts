import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/RX';

@Injectable()
export class DataService {
  messages = [
    {
      name: 'Missing script',
      updated: new Date('1/1/16'),
      type: 'error',
      ip: '204.132.147.11',
      browser: 'Chrome',
      country: 'Italy'
    },
    {
      name: 'Error 404',
      updated: new Date('1/17/16'),
      type: 'error',
      ip: '204.132.147.11',
      browser: 'Chrome',
      country: 'Ireland'
    },
    {
      name: 'Client bootstrap',
      updated: new Date('1/17/16'),
      type: 'dns',
      ip: '204.132.147.11',
      browser: 'Chrome',
      country: 'Denmark'
    },
    {
      name: 'Running in development mode',
      updated: new Date('1/28/16'),
      type: 'announcement',
      ip: '204.132.147.11',
      browser: 'Firefox',
      country: 'Germany'
    },
    {
      name: 'Error 404',
      updated: new Date('1/28/16'),
      type: 'error',
      ip: '204.132.147.11',
      browser: 'Internet Explorer',
      country: 'Spain'
    },
    {
      name: 'i18en.json not found',
      updated: new Date('1/28/16'),
      type: 'warning',
      ip: '204.132.147.11',
      browser: 'Chrome',
      country: 'Italy'
    },
    {
      name: 'Component loaded',
      updated: new Date('1/28/16'),
      type: 'announcement',
      ip: '204.132.147.11',
      browser: 'Internet Explorer',
      country: 'Italy'
    },
    {
      name: 'Timeout',
      updated: new Date('1/28/16'),
      type: 'warning',
      ip: '204.132.147.11',
      browser: 'Firefox',
      country: 'Italy'
    }
  ];

  constructor() { }

  // Promise
  getData() {
    return Promise.resolve(this.messages);
  }

  // Observable
  getDataObservable() {
    return Observable.from(this.messages).map(o => JSON.stringify(o))
  }

}
