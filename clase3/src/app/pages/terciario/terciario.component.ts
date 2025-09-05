import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-terciario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './terciario.component.html',
  styleUrls: ['./terciario.component.css']
})
export class TerciarioComponent {
  title = 'Clase2'; 
  nuevoTitulo: string = '';

  cambiartitulo() {
    if (this.nuevoTitulo.trim() !== '') {
      this.title = this.nuevoTitulo;
      this.nuevoTitulo = ''; 
    }
  }
}
