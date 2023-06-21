import { RespuestaCuestionarioDetalleModel } from "./respuesta-cuestionario-detalle.model";

export class RespuestaCuestionarioModel {
    CuestionarioId: number;
    NombreParticipante: string;
    ListRtaCuestionarioDetalle: RespuestaCuestionarioDetalleModel[];
    
    constructor(CuestionarioId: number, NombreParticipante: string, ListRtaCuestionarioDetalle: RespuestaCuestionarioDetalleModel[]) {
        this.CuestionarioId = CuestionarioId;
        this.NombreParticipante = NombreParticipante;
        this.ListRtaCuestionarioDetalle = ListRtaCuestionarioDetalle;
    }
}