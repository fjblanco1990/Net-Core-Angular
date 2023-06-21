import { RespuestaModel } from "./respuesta.model";

export class PreguntaModel {
    descripcion?: string;
    listRespuesta?: RespuestaModel[];
    hide? : boolean;
    constructor(descripcion?: string, listRespuesta?: RespuestaModel[]) {
        this.descripcion = descripcion;
        this.listRespuesta =  listRespuesta;
        this.hide = true;
    }
}