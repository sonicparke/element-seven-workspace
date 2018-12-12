import { NgModule, Injector } from '@angular/core';
import { ElementSevenComponent } from './element-seven.component';
import { createCustomElement } from '@angular/elements';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [ElementSevenComponent],
  imports: [
    DragDropModule
  ],
  entryComponents: [ElementSevenComponent]
})
export class ElementSevenModule {
  constructor(private injector: Injector) {
    const madeWithLoveElement = createCustomElement(ElementSevenComponent, { injector });
    customElements.define('element-seven', madeWithLoveElement);
  }
 }
