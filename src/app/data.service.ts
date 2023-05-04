import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data = new Subject<any>();
  // constructor() {}

  update(data: any) {
    this.data.next(data);
  }

  get() {
    return this.data.asObservable();
  }
}
