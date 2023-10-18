import {Component, OnInit, ViewChild} from '@angular/core';
import {Usuario} from "../../common/users";
import {DataService} from "../../services/data.service";
import {IonList, ToastController} from "@ionic/angular";
import {Share} from "@capacitor/share";

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  usarios: Usuario[] = [];
  @ViewChild('lista', {static: false}) lista!: IonList;
  habilitado: boolean = false;

  constructor(
    private toastCtrl: ToastController,
    private dataService: DataService) {
  }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers() {
    this.dataService.getUsers().subscribe(
      {
        next: value => {
          this.usarios = value;
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.log('Complete');
        }
      }
    )
  }

  favorite(usuario: Usuario) {
    console.log(usuario);
    this.mostrarToast('Añadiendo a favoritos')
    //Aquí va la lógica a implementar.
    this.lista.closeSlidingItems();
  }

  async share(usuario: Usuario) {
    console.log(usuario);
    //Aquí va la lógica a implementar.
    await Share.share(
      {
        title: usuario.name,
        text: usuario.email,
        url: usuario.website,
        dialogTitle: 'Comparte al usuario'
      }
    )
    await this.lista.closeSlidingItems();
  }

  call(usuario: Usuario) {
    console.log(usuario);
    this.mostrarToast('Llamando...')
    //Aquí va la lógica a implementar.
    this.lista.closeSlidingItems();
  }

  reordenar(event: any): void {
    console.log(event);
    const itemMover: Usuario = this.usarios.splice(event.detail.from, 1)[0];
    this.usarios.splice(event.detail.to, 0, itemMover);
    event.detail.complete();
  }

  private async mostrarToast(message: string) {
    const toast: HTMLIonToastElement = await this.toastCtrl.create(
      {
        message,
        duration: 1500,
        color: 'success',
        icon: 'start',
        position: 'middle',
        animated: true
      }
    );
    await this.mostrarToast(message);
  }
}
