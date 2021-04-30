import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { Transferencia } from '../model/transferencia.model';

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{

  valor!: number;
  destino!: number;

  @Output() aoTransferir = new EventEmitter<any>();

  constructor(private service: TransferenciaService){

  }

  transferir(): void {
    console.log('Solicitada nova transferência');
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
    }, error => console.error(error));
  }

  limparCampos(): void{
    this.valor = 0;
    this.destino = 0;
  }
}
