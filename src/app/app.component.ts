import { Component } from '@angular/core';
import { LazyModuleAService } from './LazyModuleA/lazyModuleA.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent {
  title = 'devSession';

  constructor(private lazyService: LazyModuleAService) {
    console.log('lazy servis is ' + this.lazyService.id);
  }
}
