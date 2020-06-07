import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vivienda } from '../model/vivienda';
import { ViviendaService } from '../vivienda.service';

@Component({
  selector: 'app-listar-vivienda',
  templateUrl: './listar-vivienda.component.html',
  styleUrls: ['./listar-vivienda.component.css']
})
export class ListarViviendaComponent implements OnInit {

  viviendas: Observable<Vivienda[]>;

  constructor(private viviendaService: ViviendaService) { }

  ngOnInit(): void {
    this.listarVivienda();
  }

  listarVivienda(){
    this.viviendaService.listarVivienda().subscribe(
      res => this.viviendas = res);
  }
}
