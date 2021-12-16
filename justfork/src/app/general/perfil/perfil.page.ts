import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  user: any;
  id: number = 0;

  constructor(
    private generalService: GeneralService
  ) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData(){
    this.generalService.getAdminFull().subscribe(response => {
      console.log(response);
      this.user = response;
    }, error => {
      console.log(error);
    });
  }

  removerCuenta(){
    this.generalService.removeAdmin().subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  logOut(){

  }


}
