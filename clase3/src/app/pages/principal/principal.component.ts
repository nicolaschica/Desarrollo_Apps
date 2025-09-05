import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  calcularSuma() {
    this.resultado = this.numero1 + this.numero2;
    // console.log(`El resultado de la suma es: ${this.resultado}`);
  }
}
