import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-validator-min',
  templateUrl: './validator-min.component.html',
  styleUrls: ['./validator-min.component.scss']
})
export class ValidatorMinComponent implements OnInit {
  @Input() form_Errors: any;
  @Input() form_touche!: any;
  @Input() msjValidation: string = '';

  @Input() form_error_util!: any;

  constructor() { }

  ngOnInit(): void {
  }


}
