import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase2';
  // cambio = 0;

  // constructor() {
  //   this.cambiartitulo();
  // }

  // cambiartitulo() {
  //   if (this.cambio == 0) {
  //     this.title = "Primer titulo";
  //     this.cambio = 1;
  //   } else {
  //     this.title = "Clase2";
  //     this.cambio = 0;
  //   }
  //   // const inputElement = document.getElementById('titulo') as HTMLInputElement;
  //   // this.title = inputElement.value;
  // }

  aggbtn() {
    const productInput = document.getElementById('inputText') as HTMLInputElement;
    const listproduct = document.getElementById('Lista') as HTMLUListElement;
    const nuevoproducto = productInput.value;
    if (nuevoproducto === '') return;


    const productlist = document.createElement('li');
    productlist.textContent = nuevoproducto;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
   

    botonEliminar.addEventListener('click', function () {
    listproduct.removeChild(productlist);
    });

    productlist.appendChild(botonEliminar);
    listproduct.appendChild(productlist);
       
    productInput.value = '';
  }
}