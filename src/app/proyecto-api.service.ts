import { Injectable } from '@angular/core';
import { AlumnosUtl } from './interfaces/utl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoApiService {
  private _alumnosUtl:AlumnosUtl[]=[
    {
      id:1234,
      nombre:'pedro',
      edad:23,
      correo: 'pedro@gmail.com',

    },
    {
      id:772,
      nombre:'Paulina',
      edad:23,
      correo: 'paulina@gmail.com',
    },

    {
      id:22,
      nombre:'Dario',
      edad:23,
      correo: 'dario@gmail.com',

    },
  ]

  constructor(private http:HttpClient) { }

get alumnos():AlumnosUtl[]{
  return[...this._alumnosUtl]
}

public getAlumnos():Observable<AlumnosUtl[]>{
  return this.http.get<AlumnosUtl[]>('https://localhost:7214/api/Grupos')
}

agregarNuevoAlumno(datos:AlumnosUtl){
  return this.http.post('https://localhost:7214/api/Grupos',datos)
}

editarAlumno(id:number, datos:AlumnosUtl){
  return this.http.put(`https://localhost:7214/api/Grupos/${id}`, datos)
}

public getAlumno(id:number):Observable<AlumnosUtl[]>{
  return this.http.get<AlumnosUtl[]>('https://localhost:7214/api/Grupos/'+id)
}

}
