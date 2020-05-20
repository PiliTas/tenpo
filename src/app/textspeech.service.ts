
import { Injectable } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Injectable({
  providedIn: 'root'
})
export class TextspeechService {
  
 
  constructor( 
 
    public tts: TextToSpeech ) { }


speak1(): void {
  this.tts.speak({
  text: 'Hola. Queremos contarte que estamos regulados por la comisión para el mercado financiero. Abriremos una cuenta digital a tu nombre, necesitaremos algunos datos personales. Cada vez que desees puedes escuchar y contestar por voz con los íconos.',
  rate: 1,
  locale:'es-ES'
    }).then (() => console.log('success'))
    .catch((reason:any) => console.log(reason))
  
  }

    speak2(): void {
      this.tts.speak({
      text: 'Ten tu cédula a mano. La necesitarás para ubicar el número de documento. En cédulas nuevas está delante y contiene 9 dígitos. En cédulas antiguas está atrás y enpieza con un A',
      rate: 1,
      locale:'es-ES'
        }).then (() => console.log('success'))
        .catch((reason:any) => console.log(reason))
      
      }
    

      speak3(): void {
        this.tts.speak({
        text: 'Ingresa ut rut, número de documento de tu cédula y correo electrónico. Antes de continuar debes aceptar los términos y condiciones. ¡Recuerda que abrir una cuenta con tenpo es seguro y gratis!',
        rate: 1,
        locale:'es-ES'
          }).then (() => console.log('success'))
          .catch((reason:any) => console.log(reason))
        
        }
      
      speak4(): void {
          this.tts.speak({
          text: 'Bien, ahora ingresa tu región. Comuna. Dirección. ¡Todos tus datos son confidenciales!',
          rate: 1,
          locale:'es-ES'
            }).then (() => console.log('success'))
            .catch((reason:any) => console.log(reason))
          
          }
          speak5(): void {
            this.tts.speak({
            text: '¡Continuemos!.Ingresa tu ocupación y país de origen.    No te preocupes. Estos datos son requeridos por la regulación.',
            rate: 1,
            locale:'es-ES'
              }).then (() => console.log('success'))
              .catch((reason:any) => console.log(reason))
            
            }      

            speak6(): void {
              this.tts.speak({
              text: 'Ya validamos tu identidad. ¡Te hemos enviado un correo!.ingresa el código que enviamos a anasol@gmail.com para validar tu correo.',
              rate: 1,
              locale:'es-ES'
                }).then (() => console.log('success'))
                .catch((reason:any) => console.log(reason))
              
              }
            
            speak7(): void {
                this.tts.speak({
                text: 'Ingresa tu celular.Te enviaremos un mensaje con un código para validar tu número.',
                rate: 1,
                locale:'es-ES'
                  }).then (() => console.log('success'))
                  .catch((reason:any) => console.log(reason))
                
                }
                speak8(): void {
                  this.tts.speak({
                  text: 'Valida tu celular. Ingresa el código que enviamos por SMS al número +5 6 9 9 1 2 3 4 5 6 7',
                  rate: 1,
                  locale:'es-ES'
                    }).then (() => console.log('success'))
                    .catch((reason:any) => console.log(reason))
                  
                  }

                  speak9(): void {
                    this.tts.speak({
                    text: '¡Por último!. Crea una clave de acceso de 4 dígitos.',
                    rate: 1,
                    locale:'es-ES'
                      }).then (() => console.log('success'))
                      .catch((reason:any) => console.log(reason))
                    
                    }


}
