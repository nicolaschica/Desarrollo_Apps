import { Component } from '@angular/core';

@Component({
  selector: 'app-secundario',
  standalone: true,
  imports: [],
  templateUrl: './secundario.component.html',
  styleUrl: './secundario.component.css'
})
export class SecundarioComponent {

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
