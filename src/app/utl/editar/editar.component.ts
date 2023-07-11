import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlumnosUtl } from 'src/app/interfaces/utl';
import { ProyectoApiService } from 'src/app/proyecto-api.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  dataSource:any=[];
  regAlumno:AlumnosUtl={
    id:0,
    nombre:'',
    edad:0,
    correo:''
  }

  constructor(private alumnosutl:ProyectoApiService,
    private route:ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.dataSource.id =  id;
    });


    this.alumnosutl.getAlumno(this.dataSource.id).subscribe(
      {
        next: response=>{
      this.dataSource=response;
    },
    error: error=>console.log(error)
  }
    );
  }

  editar(){
    this.regAlumno.id = this.dataSource.id
    this.regAlumno.nombre = this.dataSource.nombre
    this.regAlumno.edad = this.dataSource.edad
    this.regAlumno.correo = this.dataSource.correo
    this.alumnosutl.editarAlumno(this.regAlumno.id, this.regAlumno).subscribe({
      next:()=>console.log(),
      error:(e)=> console.error(e),
      complete:()=>console.info()})

      this.regAlumno={
        id:0,
        nombre:'',
        edad:0,
        correo:''
      }

      this.router.navigate(['verAlumnos'])

  }

}
