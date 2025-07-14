import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-button-toggle-selection-mode',
  imports: [MatButtonToggleModule, MatCheckboxModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button-toggle-selection-mode.html',
  styleUrl: './button-toggle-selection-mode.css'
})
export class ButtonToggleSelectionMode {
  hideSingleSelectionIndicator = signal(false);
  hideMultipleSelectionIndicator = signal(false);

  toggleSingleSelectionIndicator() {
    this.hideSingleSelectionIndicator.update(value => !value);
  }

  toggleMultipleSelectionIndicator() {
    this.hideMultipleSelectionIndicator.update(value => !value);
  }
}
