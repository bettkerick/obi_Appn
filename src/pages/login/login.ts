import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
      @ViewChild('username') uname;
      @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
   login(){
 if(this.uname.value =="admin" && this.password.value =="admin"){
		let alert = this.alertCtrl.create({
		      title: 'Login Successfully',
		      subTitle: 'you are loggin!',
		      buttons: ['OK']
		    });
		    alert.present();
		    this.navCtrl.push(HomePage);
 }

}
}

