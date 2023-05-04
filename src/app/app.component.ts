import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
listEstudiantes: any[] =[
  {nombre:'Fernando Alvarez', grado:'9'},
  {nombre:'Camila Velez', grado:'8'},
  {nombre:'Bella Betancourt', grado:'7'}

]
mostrar=true;
toogle(): void{
  this.mostrar =! this.mostrar
}
}
