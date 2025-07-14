import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card-overview',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-overview.html',
  styleUrl: './card-overview.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardOverview {

}
