import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  estilo:string = "enable";
  corFundo:string = "black";
  corDaFonte:string = "whitesmoke"
  item:string = "";
  lista:string[] = [];

  constructor() { }

  adicionarLista(){
    this.lista.push(this.item);
  }

  removerDaLista(index:number){
    this.lista.splice(index, 1)
  }

  trocar(){
    if(this.estilo == "disable"){
      this.estilo = "enable";
    }
    else if(this.estilo == "enable") {
      this.estilo = "disable";
    }
  }

  ngOnInit(): void {
  }

}
