import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-element-seven',
  template: `
    <p>
      element-seven works!
    </p>
    <div cdkDrag>Drag Me</div>
  `,
  styles: []
})
export class ElementSevenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
