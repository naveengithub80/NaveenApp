import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    const paragraphs = Array.prototype.slice.call(this.el.nativeElement.querySelectorAll('p')); // Convert NodeList to Array

    // Directly add the 'appear' class to all paragraphs after view initialization
    paragraphs.forEach((para: HTMLElement) => {
      this.renderer.addClass(para, 'appear');
    });
  }
}
