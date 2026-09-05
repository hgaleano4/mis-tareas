import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
  standalone: false,
})
export class TareasPage implements OnInit {

  titulo='Lista de tareas';

  tareas=['Clase de Ionic', 'Taller de Angular','Node Js', 'Intro a Git'];
  nuevaTarea='';

  constructor() { }

  ngOnInit() {
  }

  guardar(){
     this.tareas.push(this.nuevaTarea);
  }

}
