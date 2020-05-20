import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TextspeechService } from '../../textspeech.service';



@Component({
  selector: 'app-inforegister',
  templateUrl: './inforegister.page.html',
  styleUrls: ['./inforegister.page.scss'],
})
export class InforegisterPage {

  constructor( private router: Router, public actionServicesInfo:TextspeechService ) { }

  infoRegister(){
    this.router.navigateByUrl('home/inforegister/requiredid')
  }


}
