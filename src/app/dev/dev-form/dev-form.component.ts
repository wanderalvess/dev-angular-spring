import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dev-form',
  templateUrl: './dev-form.component.html',
  styleUrls: ['./dev-form.component.scss']
})
export class DevFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [null],
      code: [null],
      document: [null]
    })
   }

  ngOnInit(): void {
  }

}
