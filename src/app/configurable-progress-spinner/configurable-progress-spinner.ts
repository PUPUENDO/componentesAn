import { Component } from '@angular/core';
import { ProgressSpinnerMode, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-configurable-progress-spinner',
  imports: [MatCardModule, MatRadioModule, FormsModule, MatSliderModule, MatProgressSpinnerModule],
  templateUrl: './configurable-progress-spinner.html',
  styleUrl: './configurable-progress-spinner.css'
})
export class ConfigurableProgressSpinner {
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
}
