import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatAutocomplete } from './mat-autocomplete/mat-autocomplete';
import { BadgeOverview } from './badge-overview/badge-overview';
import { BasicCheckboxes } from './basic-checkboxes/basic-checkboxes';
import { ExpansionPanel } from './expansion-panel/expansion-panel';
import { SimpleFormField } from './simple-form-field/simple-form-field';
import { ConfigurableProgressSpinner } from './configurable-progress-spinner/configurable-progress-spinner';
import { ConfigurablePaginator } from './configurable-paginator/configurable-paginator';
import { CardOverview } from './card-overview/card-overview';
import { ButtonToggleSelectionMode } from './button-toggle-selection-mode/button-toggle-selection-mode';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, NgIf, MatAutocomplete, BadgeOverview, BasicCheckboxes, ExpansionPanel,
    SimpleFormField, ConfigurableProgressSpinner, ConfigurablePaginator, CardOverview, ButtonToggleSelectionMode,
    MatMenuModule, MatButtonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('componentesAn');
  selectedComponent = 'badge';

  selectComponent(component: string) {
    this.selectedComponent = component;
  }
}
