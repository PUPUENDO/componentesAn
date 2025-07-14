import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-basic-checkboxes',
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe],
  templateUrl: './basic-checkboxes.html',
  styleUrl: './basic-checkboxes.css'
})
export class BasicCheckboxes {
  private readonly _formBuilder = inject(FormBuilder);

  readonly toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });
}
