import {Component, OnInit} from '@angular/core';
import {DescriptionComponent} from '../../components/description/description.component';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {PrettyJsonPipe} from '../../pipes/pretty-json.pipe';

@Component({
  selector: 'app-fourth-challenge',
  imports: [
    DescriptionComponent,
    ReactiveFormsModule,
    PrettyJsonPipe
  ],
  templateUrl: './fourth-challenge.component.html',
  styleUrl: './fourth-challenge.component.scss'
})
export class FourthChallengeComponent implements OnInit{
  form!: FormGroup;
  results: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({

    });
  }

  submit() {
    this.results = this.form.value;
  }

}
