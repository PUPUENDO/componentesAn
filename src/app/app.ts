import { Component, signal } from '@angular/core';
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
import { SlideToggleWithForms } from './slide-toggle-with-forms/slide-toggle-with-forms';
import { SortingOverview } from './sorting-overview/sorting-overview';
import { StepperVertical } from './stepper-vertical/stepper-vertical';
import { TabGroup } from './tab-group/tab-group';
import { TableExpandableRows } from './table-expandable-rows/table-expandable-rows';

@Component({
  selector: 'app-root',
  imports: [
    NgIf, MatAutocomplete, BadgeOverview, BasicCheckboxes, ExpansionPanel,
    SimpleFormField, ConfigurableProgressSpinner, ConfigurablePaginator, CardOverview, ButtonToggleSelectionMode,
    MatMenuModule, MatButtonModule,
    SlideToggleWithForms, SortingOverview, StepperVertical, TabGroup, TableExpandableRows
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
