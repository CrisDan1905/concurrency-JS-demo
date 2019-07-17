import { Component, OnInit } from '@angular/core';
import { GeneratorClass } from '../helpers/concurrency-generator';

@Component({
  selector: 'app-concurrency-view',
  templateUrl: './concurrency-view.component.html',
  styleUrls: ['./concurrency-view.component.scss']
})
export class ConcurrencyViewComponent implements OnInit {

  stack: object;
  stepsGenerator: any;

  constructor() { }

  ngOnInit() {
    function* stepsGenerator() {
      while (true) {
        const step = yield
        switch (step.callType) {
          case 'stack':
            yield this.talk();
          break;
          default:
          break;
        }
      }
    }

    this.stepsGenerator = new GeneratorClass();
    console.log(this.stepsGenerator)
    // this.stepsGenerator.iterator.next();
    // this.stepsGenerator.iterator.next({callType: 'stack'});
  }

  talk () {
    console.log('test')
  }

}
