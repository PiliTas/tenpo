import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TextspeechService } from '../../textspeech.service';



@Component({
  selector: 'app-requiredid',
  templateUrl: './requiredid.page.html',
  styleUrls: ['./requiredid.page.scss'],
})
export class RequiredidPage {

  constructor( private router: Router, public actionServicesInfo:TextspeechService  ) { }
  requiredId(){
    this.router.navigateByUrl('home/inforegister/requiredid/register')
  }

}
