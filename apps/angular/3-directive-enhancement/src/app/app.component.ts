import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Person {
  name: string;
}

@Component({
  standalone: true,
  imports: [],
  selector: 'app-root',
  template: `
    @for (item of persons; track item.name) {
      <div>{{ item.name }}</div>
    } @empty {
      <div>The list is empty !!</div>
    }
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  persons: Person[] = [
    // {
    //   name: 'John',
    // },
    // {
    //   name: 'Alice',
    // },
  ];
}
