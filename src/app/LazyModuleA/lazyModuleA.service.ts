import { forwardRef, Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class LazyModuleAService {
  id: string;

  constructor() {
    this.id = this.makeid(10);
  }

  private makeid(length: number) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
