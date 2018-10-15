import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/components/common/api';
import { LoginService } from './../../services/login.service';
import { Usuario } from '../../models/Usuario';




// import {Subscription} from "rxjs";
// import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;


  // private subscription: Subscription;
  /* usuario = '';
  clave= '';
  progreso: number;
  progresoMensaje="esperando...";
  logeando=true;
  ProgresoDeAncho:string;
  clase="progress-bar progress-bar-info progress-bar-striped ";
 */
  msgs: Message[] = [];

  constructor(
    private route: ActivatedRoute,
    private _login: LoginService,
    private router: Router) {

      if (this._login.isLogin === 1) {
        this.router.navigate(['/']);
      }

     /*  this.progreso=0;
      this.ProgresoDeAncho="0%"; */

      this.formLogin = new FormGroup({
        'usuario': new FormControl('', [Validators.required]),
        'contrasena': new FormControl('', [Validators.required])
      });

  }

  showError() {
    this.msgs = [];
    this.msgs.push({severity: 'error', summary: 'Usuario o contraseña incorrectos'});
}

  ingresar() {

    this._login.login(this.formLogin.value.usuario, this.formLogin.value.contrasena)
    .subscribe( (data: any) => {

      console.log(data);

      this._login.isLogin = 1;

      this._login.usuario = new Usuario(data.usuario.id, data.usuario.user_name,
        data.usuario.ppt, data.usuario.vaa, data.usuario.ans, data.usuario.ana,
        data.usuario.ttt, data.usuario.pra);

      localStorage.setItem('token', data.token);

      this.router.navigate(['/']);


    }, (err) => {
      this.showError();

    });



/*     this.showError(); */
  }


  ngOnInit() {
  }

  /* Entrar() {
    if (this.usuario === 'admin' && this.clave === 'admin') {
      this.router.navigate(['/Principal']);
    }
  } */
  /* MoverBarraDeProgreso() {

    this.logeando=false;
    this.clase="progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje="NSA spy...";
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      console.log("inicio");
      this.progreso=this.progreso+1;
      this.ProgresoDeAncho=this.progreso+20+"%";
      switch (this.progreso) {
        case 15:
        this.clase="progress-bar progress-bar-warning progress-bar-striped active";
        this.progresoMensaje="Verificando ADN...";
          break;
        case 30:
          this.clase="progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje="Adjustando encriptación..";
          break
          case 60:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando Info del dispositivo..";
          break;
          case 75:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando claves facebook, gmail, chats..";
          break;
          case 85:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Instalando KeyLogger..";
          break;

        case 100:
          console.log("final");
          this.subscription.unsubscribe();
          this.Entrar();
          break;
      }
    });
    //this.logeando=true;
  } */

}
