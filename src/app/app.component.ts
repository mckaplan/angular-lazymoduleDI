import { Component } from '@angular/core';
import { LazyModuleAService } from './LazyModuleA/lazyModuleA.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent {
  constructor(private lazyService: LazyModuleAService) {
    console.log('lazy service is ' + this.lazyService.id);
  }
}
