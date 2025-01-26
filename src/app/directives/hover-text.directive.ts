import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverText]'
})
export class HoverTextDirective {
  @Input('appHoverText') targetText: string = '';
  private letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private interval: any;

  constructor(private el: ElementRef) {}

  @HostListener('mouseover') onMouseOver() {
    let iteration = 0;
    clearInterval(this.interval);

    this.interval = setInterval(() => {
      this.el.nativeElement.innerText = this.el.nativeElement.innerText
        .split('')
        .map((letter: string, index: number) => {
          if (index < iteration) {
            return this.targetText[index];
          }
          return this.letters[Math.floor(Math.random() * 26)];
        })
        .join('');

      if (iteration >= this.targetText.length) {
        clearInterval(this.interval);
      }

      iteration += 1 / 3;
    }, 30);
  }

}
