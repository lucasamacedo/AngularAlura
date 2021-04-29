import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{

  valor!: number;
  destino!: number;

  @Output() aoTransferir = new EventEmitter<any>();
  transferir(): void {
    console.log('Solicitada nova transferência');
    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
    // console.log('Valor: ', this.valor);
    // console.log('Destino: ', this.destino);
  }
}
