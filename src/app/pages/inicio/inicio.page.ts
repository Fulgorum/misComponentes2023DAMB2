import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Componente} from "../../common/interfaces";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.cargarComponentes();
  }

  private cargarComponentes() {
    this.dataService.getComponentesMenu().subscribe(
      (data) => {
        this.componentes = data;
      }
    )
  }
}
