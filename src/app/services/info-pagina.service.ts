import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = true;
  equipo: any[] = [];

  constructor( private http: HttpClient ) {

    console.log('servicio de info pagina');
    this.cargarInfo();
    this.cargarEquipo();

   }

   private cargarInfo() {
      // leer json
      this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        // console.log(resp);
      });
   }

   private cargarEquipo() {
      // leer json
      this.http.get('https://angular-udemy-800ee.firebaseio.com/equipo.json')
      .subscribe( (resp: any[])  => {

        this.equipo = resp;
        console.log(resp);
      });

   }
}
