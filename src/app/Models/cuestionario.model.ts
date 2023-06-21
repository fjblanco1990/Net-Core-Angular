import { PreguntaModel } from "./pregunta.model";

export class CuestionarioModel {
    id?: number;
    Nombre?: string;
    Descripcion?: string;
    fechaCreacion?: Date;
    listPreguntas?: PreguntaModel[];
    constructor( nombre?: string,descripcion?: string,fechaCreacion?: Date, listPreguntas?: PreguntaModel[],id?: number) {
        this.id = id;
        this.Nombre = nombre;
        this.Descripcion = descripcion;
        this.fechaCreacion = fechaCreacion;
        this.listPreguntas = listPreguntas;
    }
}