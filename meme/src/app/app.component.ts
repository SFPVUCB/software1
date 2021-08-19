import { Component } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';

import { Meme } from './meme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meme';

  public mms:Meme[]=[];


  constructor (private http:HttpClient){}

  onSave():void{
    console.log("Antes de  invocar al servicio REST en backend");
    this.http.get<any>("https://api.imgflip.com/get_memes").subscribe(response=>{
      this.mms = response.data.memes
    });
    console.log("Despues de  invocar al servicio REST en backend");
  }
}
