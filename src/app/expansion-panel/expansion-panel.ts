import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-expansion-panel',
  providers: [provideNativeDateAdapter()],
  imports: [MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,],
  templateUrl: './expansion-panel.html',
  styleUrl: './expansion-panel.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanel {
  step = signal(0);

  setStep(index: number) {
    this.step.set(index);
  }

  nextStep() {
    this.step.update(i => i + 1);
  }

  prevStep() {
    this.step.update(i => i - 1);
  }
}
