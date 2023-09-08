import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Nombre de la etiqueta que esto creando. DEBE TENER GUION!
  templateUrl: './app.component.html', // Vista del componente
  styleUrls: ['./app.component.scss']  // Estilos CSS. ES LOCAL A ESTE COMPONENTE (app.component.html).

})
export class AppComponent {
  title = 'mi_proyecto';

}
