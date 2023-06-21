import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PreguntaModel } from 'src/app/Models/pregunta.model';
import { RespuestaModel } from 'src/app/Models/respuesta.model';
import { NotificacionesService } from 'src/app/Services/notificaciones.service';

@Component({
  selector: 'app-nueva-pregunta',
  templateUrl: './nueva-pregunta.component.html',
  styleUrls: ['./nueva-pregunta.component.scss']
})
export class NuevaPreguntaComponent implements OnInit {
  nuevaPregunta!: FormGroup;
  pregunta!: PreguntaModel;
  respuestaCorrecta = 0;

  @Output() EnviarPreguntas = new EventEmitter<PreguntaModel>();

  asnwerForm: FormGroup = this.fb.group({
    descripcion: [null, Validators.required],
    esCorrecta: [0]
  })


  public get getAnswer(): FormArray {
    return this.nuevaPregunta.get('respuestas') as FormArray;
  }

  constructor(private fb: FormBuilder, private _notifcaService: NotificacionesService) { }

  ngOnInit(): void {
    this.InicializarFormulario();
    this.addAnswerDefect();
  }

  //formulario de preguntas
  

  addAnswer() {
    const answer = this.fb.group({
      descripcion: [this.asnwerForm.controls['descripcion'].value, Validators.required],
      esCorrecta: [0]
    })
    this.getAnswer.push(answer);
    this.asnwerForm.reset();

  }

  deleteAnswer(i: number) {
    if (this.getAnswer.length === 2) {
      this._notifcaService.Advertencia('Como mminimo la pregunta debe tener 2 respuestas');
    } else {
    this.getAnswer.removeAt(i);
    }
  }

  AgregarPregunta(): void {
    const descripcionPregunta = this.nuevaPregunta.get('titulo')?.value;
    const lstRespuestas = this.nuevaPregunta.get('respuestas')?.value;

    const arrayRespuesta: RespuestaModel[] = [];

    lstRespuestas.forEach((element: any, index:number) => {
        const respuesta: RespuestaModel = new RespuestaModel(element.descripcion, false);
        (index === this.respuestaCorrecta) ? respuesta.esCorrecta = true : respuesta.esCorrecta = false;
        arrayRespuesta.push(respuesta);
    });

    const pregunta : PreguntaModel = new PreguntaModel(descripcionPregunta, arrayRespuesta);
    
    this.EnviarPreguntas.emit(pregunta);

    this.reset();
  }

  reset(): void {
    this.respuestaCorrecta = 0;
    this.nuevaPregunta.reset();
    this.getAnswer.clear();
    this.addAnswerDefect();
  }

  setRespuestaValida(i: number) {
    this.respuestaCorrecta = i;
  }

  addAnswerDefect() {
    this.addAnswer();
    this.addAnswer();
  }

  InicializarFormulario() {
    //formulario principal
    this.nuevaPregunta = this.fb.group({
      titulo: [null, Validators.required],
      respuestas: this.fb.array([])
    })
  }

}
