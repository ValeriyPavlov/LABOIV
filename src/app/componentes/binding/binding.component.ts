import { Component } from '@angular/core';

@Component({
  selector: 'app-binding', // Nombre de la etiqueta que cree
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent {
  // Vacio por defecto.
  
  //Atributos son publicos por defecto, y el typo se infiere tambien, no es obligatorio.
  public name: string = "Angular";
  public btnLabel: string = "Click me";
  public btnCalcular: string = "Calcular";
  public btnLimpiar: string = "Limpiar";
  public apellido: string = "Pavlov";
  public edadUno: any = "";
  public edadDos: any = "";
  public promedio: any = "";
  public suma: any = "";


  //Metodo
  public onClick(event?: any): void
  {
    console.log(event);
    console.log("Hola mundo");

    this.name = "Clicked";
  }

  public Calcular(): void
  {
    this.Sumar();
    this.Promediar();
  }

  public Sumar(): void
  {
    this.suma = parseInt(this.edadDos) + parseInt(this.edadUno);
  }

  public Promediar(): void
  {
    this.promedio = (parseInt(this.edadDos) + parseInt(this.edadUno)) / 2;
  }

  public Limpiar(): void
  {
    this.edadDos = "";
    this.edadUno = "";
    this.suma = "";
    this.promedio = "";
  }
}
// Ejercicio 1, punto 2. Va en este archivo?
export class Usuario
{
  public nombre: string = "";
  public clave: string = "";
}
