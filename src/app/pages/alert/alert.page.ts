import {Component, OnInit} from '@angular/core';
import {AlertController} from "@ionic/angular";

@Component({
    selector: 'app-alert',
    templateUrl: './alert.page.html',
    styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
    titulo: string = '';

    constructor(private alertCtrl: AlertController) {
    }

    ngOnInit() {
    }

    async mostrarAlert() {
        const alert = await this.alertCtrl.create(
            {
                header: 'Título del alert',
                subHeader: 'Subtitulo del alert',
                message: 'Esto es una alerta',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log("Cancelar")
                        }
                    },
                    {
                        text: 'Ok',
                        handler: () => {
                            console.log("Botón Ok");
                        }
                    }
                ]
            }
        );
        await alert.present();
    }

    async mostrarNombre() {
        const alert = await this.alertCtrl.create(
            {
                backdropDismiss: true,// Esto sirve para que el usuario cierre la alerta si pulsa fuera de la alerta.
                header: 'Alert con Input',
                subHeader: 'Inserte el nombre',
                inputs: [
                    {
                        name: 'nombre',
                        type: 'text',
                        placeholder: 'Name'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            console.log("Cancelar pulsado.")
                        }
                    },
                    {
                        text: 'Ok',
                        handler: (data) => {
                            console.log("Ok confirmado " + data);
                            this.titulo = data.nombre;
                        }
                    }
                ]
            }
        );
        await alert.present();
    }
}
