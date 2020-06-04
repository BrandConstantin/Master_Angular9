import { Component, OnInit, Input, ViewEncapsulation, OnChanges, DoCheck, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string}
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log("constructor called");
   }

   ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChenges called");
    console.log(changes);
   }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Test Content onInit' + this.header.nativeElement.textContent);
    console.log("Text content of paragraph " + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
    console.log("Text content of paragraph " + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
    console.log('Test Content afterViewInit' + this.header.nativeElement.textContent);
  }

  ngOnDestroy(){
    console.log('NGONDESTROY called');
  }
}
