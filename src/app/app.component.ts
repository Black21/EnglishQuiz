import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public jogoEmAndamento: boolean = true;
 public tipoEncerramento!: string | undefined;

  encerrarJogo(tipo: string):void{

    this.jogoEmAndamento = false;
    this.tipoEncerramento = tipo;

  }

  jogarNovamente(): void{
    this.jogoEmAndamento = true;
    this.tipoEncerramento = undefined;
  }

}
