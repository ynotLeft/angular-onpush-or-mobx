import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item-icon',
  templateUrl: './list-item-icon.component.html',
  styleUrls: ['./list-item-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemIconComponent {
  @Input() id: string;
}
