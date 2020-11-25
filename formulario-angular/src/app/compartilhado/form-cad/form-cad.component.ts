import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ListaCadComponent } from '../lista-cad/lista-cad.component';
import { EventEmitterService } from '../../services/event-emitter-service';

@Component({
  selector: 'app-form-cad',
  templateUrl: './form-cad.component.html',
  styleUrls: ['./form-cad.component.css']
})
export class FormCadComponent implements OnInit {

  @Input() colaboradorEscolhido: string;

  constructor(public matDialog: MatDialog, private formBuilder: FormBuilder) {
    this.colaboradorEscolhido = '';
    EventEmitterService.get('textChange').subscribe(data => this.colaboradorEscolhido  = data);
  }

  get colaboradores() {
    return this.registerForm.get('colaboradores') as FormArray;
  }

  registerForm = this.formBuilder.group({
   colaboradores: this.formBuilder.array([]),
   setor: '',
   tipoHoraExtra: '',
   dataInicio: '',
   horaInicio: 0,
   dataFim: '',
   horaFim: 0,
   justifSolucao: '',
   observacao: '',
   lavaNot: ''
 });

  ngOnInit(): void {
  }

  adicionaColaborador() {
    const telefonoFormGroup  = this.formBuilder.group({
      colaborador: this.colaboradorEscolhido
    });
    this.colaboradores.push(telefonoFormGroup);
    this.colaboradorEscolhido = '';
  }

  removerColaborador(indice: number) {
    this.colaboradores.removeAt(indice);
  }

  limpaColaboradores() {
    this.registerForm.patchValue({
      // setor: '',
      // tipoHoraExtra: '',
      // dataInicio: '',
      // horaInicio: 0,
      // dataFim: '',
      // horaFim: 0,
      // justificativa: '',
      // observacao: '',
      colaborador: ''
    });
    this.colaboradores.controls.splice(0, this.colaboradores.length);
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = `Aprovacao-HExtra`;
    // dialogConfig.height = `70%`;
    // dialogConfig.width = `30%`;
    const modalDialog = this.matDialog.open(ListaCadComponent, dialogConfig);
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }


}
