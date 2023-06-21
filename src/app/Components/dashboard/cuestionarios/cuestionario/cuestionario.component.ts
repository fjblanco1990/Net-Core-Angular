import { Component, OnInit } from '@angular/core';
import { CuestionarioService } from '../../services/cuestionario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.scss']
})
export class CuestionarioComponent implements OnInit {
  idCuestionario: string = '';
  loading: boolean = false;
  cuestionario: any = {};
  constructor(private _cuestionarioService:CuestionarioService, private routeActive: ActivatedRoute) {}

  ngOnInit(): void {
    this.idCuestionario =  this.routeActive.snapshot.paramMap.get('id') as string;
    this.getCuestionario(+this.idCuestionario);
  }
  getCuestionario(id: any) {
    this.loading = true;
    this._cuestionarioService.getCuestionarioById(id).subscribe(
      result => {
        this.loading = false;
        this.cuestionario = result;
        console.log(result);
      }
    )
  }

}
