import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { TextspeechService } from '../../textspeech.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {

  constructor(private router: Router, public actionServicesInfo:TextspeechService) { }

 
}
