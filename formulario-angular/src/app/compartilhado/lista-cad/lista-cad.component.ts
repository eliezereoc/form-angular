import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EventEmitterService } from '../../services/event-emitter-service';

@Component({
  selector: 'app-lista-cad',
  templateUrl: './lista-cad.component.html',
  styleUrls: ['./lista-cad.component.css']
})
export class ListaCadComponent implements OnInit {

  @Input() titulo: string;
  @Input() colaboradores: Array<string>;

  colaboradorSelecionado: string;

  constructor(public dialogRef: MatDialogRef<ListaCadComponent>) { }

  ngOnInit() {
    this.titulo = 'Lupa';
    this.colaboradores = ['Maria Julia', 'Lucas Nascimento', 'Valéria Nascimento', 'Bruna', 'Felipe'];
  }

  enviaColaborador() {
    EventEmitterService.get('textChange').emit(this.colaboradorSelecionado);
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

  selecionaColaborador(colaborador) {
    this.colaboradorSelecionado = colaborador;
    console.log(colaborador);
  }

}
