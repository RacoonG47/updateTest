import {Component} from '@angular/core';
import {EchoService} from "../echo/echo.service";
import {catchError} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'electron-app';

  constructor(private echoService: EchoService) {
  }

  getEcho() {
    this.echoService.getEcho().subscribe(res => {
      console.log('Response: ', res)
    }, error => {
      console.log('Doslo je do pogreske: ', error)
      catchError(error)
    })
  }
}

