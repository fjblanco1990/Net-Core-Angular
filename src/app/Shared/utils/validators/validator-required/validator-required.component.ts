import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-validator-required',
  templateUrl: './validator-required.component.html',
  styleUrls: ['./validator-required.component.scss']
})
export class ValidatorRequiredComponent implements OnInit {

  @Input() form_Errors: ValidationErrors = {key: ''};
  @Input() form_touche!: boolean;
  @Input() msjValidation: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
