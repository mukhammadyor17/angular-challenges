import { Directive } from '@angular/core';

interface Person {
  name: string;
  age: number;
}

@Directive({
  selector: '[#personRef]',
})
export class PersonDirective {
  static ngTemplateContextGuard(
    dir: PersonDirective,
    ctx: unknown,
  ): ctx is Person {
    return true;
  }
}
