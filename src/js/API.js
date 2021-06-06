/* eslint-disable no-unused-vars */
import { interval } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

export default class API {
  initStream() {
    this.unread$ = ajax.getJSON('https://maryniki-rxjs.herokuapp.com/messages/unread');
    return interval(3000).pipe(
      switchMap((intervalValue) => this.unread$),
      map((value) => value.messages),
    );
  }
}
