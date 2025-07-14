import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-simple-form-field',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './simple-form-field.html',
  styleUrl: './simple-form-field.css'
})
export class SimpleFormField {

}
