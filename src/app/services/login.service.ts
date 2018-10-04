import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.services';
import { Usuario } from '../models/Usuario';

// import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class LoginService {

    isLogin: number;

    usuario: Usuario;

    constructor(private _router: Router, private _global: GlobalService,
        private _http: HttpClient) {
        this.isLogin = -1;

        this.checkLogin();

    }

    login(usuario: String, password: String) {

        const body = {
            usuario,
            password
        };

        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return this._http.post(this._global.URL_SERVER + 'login', body, options);
    }

    logout() {

        localStorage.removeItem('token');

        this.usuario = null;

        this.isLogin = 0;
    }

    checkLogin() {

        if (localStorage.getItem('token')) {

            const body = {
                token: localStorage.getItem('token')
            };

            const options = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            };

            return this._http.post(this._global.URL_SERVER + 'login/checktoken', body, options)
                .subscribe((res: any) => {

                    this.usuario = new Usuario(res.usuario.id, res.usuario.user_name,
                        res.usuario.ppt, res.usuario.vaa, res.usuario.ans, res.usuario.ana,
                        res.usuario.ttt, res.usuario.pra);

                    this.isLogin = 1;

                }, (err) => {
                    this.isLogin = 0;

                });

        } else {
            this.isLogin = 0;
        }
    }

}
