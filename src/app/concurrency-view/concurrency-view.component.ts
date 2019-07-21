import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-concurrency-view',
  templateUrl: './concurrency-view.component.html',
  styleUrls: ['./concurrency-view.component-animations.scss', './concurrency-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ConcurrencyViewComponent implements OnInit {

  @ViewChild('timeOutCounter', {static: false}) timeOutCounter: ElementRef<HTMLElement>;
  @ViewChild('promiseCounter', {static: false}) promiseCounter: ElementRef<HTMLElement>;
  @ViewChild('stackContainer', {static: false}) stackContainer: ElementRef<HTMLElement>;
  @ViewChild('queueContainer', {static: false}) queueContainer: ElementRef<HTMLElement>;
  @ViewChild('jobContainer', {static: false}) jobContainer: ElementRef<HTMLElement>;

  stack: object;
  queueList: object[] = [];
  jobQueueList: object[] = [];
  stackList: object[] = [];
  stepsCounter = 0;


  constructor() { }

  async ngOnInit() { }

  nextStep() {
    this.stepsCounter++;
    if (!this['step' + this.stepsCounter]) {
      this.stepsCounter = 0;
      this.nextStep();
      return;
    }

    this['step' + this.stepsCounter]();
  }

  protected addElementToQue() {
    this.queueList.push({ functionName: 'console.log()' });
  }

  protected addElementToJobQue() {
    this.jobQueueList.push({ functionName: 'console.log()' });
  }

  protected addStackFrame(functionName) {
    this.stackList.push({ functionName })
  }

  protected removeStackFrame() {
    const nativeStackEl = this.stackContainer.nativeElement;
    const lastChild = nativeStackEl.lastChild as HTMLElement;

    lastChild.classList.add('removing');
    lastChild.addEventListener('animationend', () => {
      this.stackList.pop();
    });
  }

  protected removeJobElement() {
    const firstJobChild = this.jobContainer.nativeElement.firstElementChild;

    firstJobChild.classList.add('removing');
    firstJobChild.addEventListener('animationend', () => {
      this.jobQueueList.pop();
      this.addStackFrame(firstJobChild.textContent);
    });
  }

  protected removeQueueElement() {
    const firstQueueChild = this.queueContainer.nativeElement.firstElementChild;

    firstQueueChild.classList.add('removing');
    firstQueueChild.addEventListener('animationend', () => {
      this.queueList.pop();
      this.addStackFrame(firstQueueChild.textContent);
    });
  }

  protected step1() {
    this.timeOutCounter.nativeElement.classList.add('active');

    const svgCircleTag = this.timeOutCounter.nativeElement.firstChild;
    const callBackFn = () => {
      this.timeOutCounter.nativeElement.classList.remove('active');
      this.addElementToQue();
      svgCircleTag.removeEventListener('animationend', callBackFn);
    };

    svgCircleTag.addEventListener('animationend', callBackFn);
  }

  protected step2() {
    this.promiseCounter.nativeElement.classList.add('active');

    const svgCircleTag = this.promiseCounter.nativeElement.firstChild;
    const callBackFn = () => {
      this.promiseCounter.nativeElement.classList.remove('active');
      this.addElementToJobQue();
      svgCircleTag.removeEventListener('animationend', callBackFn);
    };

    svgCircleTag.addEventListener('animationend', callBackFn);
  }

  protected step3() {
    this.addStackFrame('saluda()');
  }

  protected step4() {
    this.addStackFrame('diFrase()');
  }

  protected step5() {
    this.addStackFrame('console.log()');
  }

  protected step6() {
    this.removeStackFrame();
  }

  protected step7() {
    this.removeStackFrame();
  }

  protected step8() {
    this.removeStackFrame();
  }

  protected step9() {
    this.removeJobElement();
  }

  protected step10() {
    this.removeStackFrame();
  }

  protected step11() {
    this.removeQueueElement();
  }

  protected step12() {
    this.removeStackFrame();
  }
}
