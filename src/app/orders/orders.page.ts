import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../apis/orders.service';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: 'orders.page.html',
  styleUrls: ['orders.page.scss']
})
export class OrdersPage implements OnInit {

  currentUser: any;

  waitingConfirmation: Array<object> = [];
  scheduled: Array<object> = [];
  rejected: Array<object> = [];
  cancelled: Array<object> = [];
  historical: Array<object> = [];

  cancelling: boolean;

  constructor(
    public nav: NavController,
    public alertController: AlertController,
    private ordersService: OrdersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currentUser = this.route.snapshot.data['user']
    this.getOrders()
    interval(5000).subscribe(() => {
      this.getOrders()
    })
  };

  toggleCancelling() {
    this.cancelling = !this.cancelling
  };

  cancelOrder(orderId: string) {
    this.ordersService.cancelOrder(orderId).subscribe(
      async res => {
        await this.presentAlert({
          cssClass: 'my-custom-class',
          header: 'Pedido cancelado!',
          buttons: [{ text: 'Ok', role: '', cssClass: 'secondary' }]
        })
        this.getOrders()
      },
      err => console.error(err)
    )
  };

  async presentAlert(alertObject: any) {
    const alert = await this.alertController.create(alertObject);
    await alert.present();
  };

  divideOrders(allOrders: Array<object>) {
    this.resetArrays()
    allOrders.forEach((order: any) => {
      if (order.status.rejected) {
        this.rejected.push(order)
      } else if (order.status.cancelled) {
        this.cancelled.push(order)
      } else {
        let orderTime = new Date(order.schedule.datetime).toLocaleString().replace(/(^|\D)(\d)(?!\d)/g, '$10$2');
        let now = new Date().toLocaleString().replace(/(^|\D)(\d)(?!\d)/g, '$10$2');
        if (orderTime > now) {
          if (order.status.confirmed) {
            this.scheduled.push(order)
          } else {
            this.waitingConfirmation.push(order)
          }
        } else {
          this.historical.push(order)
        }
      }
    })
  };

  getOrders() {
    const username = this.currentUser['username']
    this.ordersService.getOrders(username).subscribe(
      res => this.divideOrders(res),
      err => console.error(err)
    )
  };

  resetArrays() {
    this.rejected.length = 0
    this.cancelled.length = 0
    this.scheduled.length = 0
    this.historical.length = 0
    this.waitingConfirmation.length = 0
  };

}
