import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Vivienda } from './model/vivienda';

@Injectable({
  providedIn: 'root'
})
export class ViviendaService {

  private urlBase = "http://localhost:8762/api";

  constructor(private http: HttpClient) { }

  listarVivienda(): Observable<any>{
    return this.http.get(this.urlBase + "/viviendas").pipe(
      map(res => res as Vivienda[])
    );
  }
}