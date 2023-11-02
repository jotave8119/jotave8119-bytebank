import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor!: number;
  destino: any;

  destinoOptions = [
    { value: 'contaCorrente', label: 'Conta Corrente' },
    { value: 'contaPoupança', label: 'Conta Poupança' },
    { value: 'contaSalario', label: 'Conta Salário' },
    { value: 'contaInvestimento', label: 'Conta Investimento' },
    { value: 'contaEmpresa', label: 'Conta Empresa' },
    { value: 'contaEstudante', label: 'Conta Estudante' },
  ];

  constructor( private toastr: ToastrService) {}


  transferir() {
    console.log('Solicitada nova transferencia');
    console.log('valor:', this.valor);
    console.log('destino:', this.destino);
    this.toastr.success('Transferência realizada com sucesso!');
  }
}
