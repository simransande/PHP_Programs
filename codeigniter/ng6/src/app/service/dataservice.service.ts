import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { from } from 'rxjs';
//  import { map, filter, scan } from 'rxjs/operators';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
// import { Pipe, PipeTransform } from '@angular/core';


// import { log } from 'util';
// import { catchError } from 'rxjs/operators';
import { text } from '@angular/core/src/render3/instructions';
import { pipe } from '@angular/core/src/render3/pipe';


// import { servicesusrls } from '../constant/constants.services';
//import { servicesusrls } from '../constant/constant.module';
@Injectable({
  providedIn: 'root'
  
})
export class DataserviceService {
private _contactUrl = 'http://localhost:8080/register';
private _contactUrl1='http://localhost:8080/login';
private _contactUrl2='http://localhost:8080/forgotpassword';

  // private host = window.location.hostname;
  // private headers = new Headers({'Content-Type': 'application/json'});
  // private usersURL = `http://${this.host}/api/v1/users`;
   
  constructor(private http: HttpClient) {

   }

//    Register(user: any) {
//      debugger;
//     var httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//       })
//     };
//     var data = {      
     
//       "uname" : user.uname,
//        "email": user.email,
//        "pass": user.pass,
//        "phone": user.phone
//      }
//      console.log(data);
//     debugger;
//     //  return this.http.post("http://localhost:8080/default_controller/index", data, httpOptions);

     
//       this.http.post("http://localhost:8080/register",{}).subscribe(data =>     { 
//         alert(data);
//        });


//    // this.http.post(usersURL, data, httpOptions)
//  }
    //  getConfig() {
    //    return this.http.get(this.configUrl).subscribe((data: Config) => this.config = {
    //     heroesUrl: data['heroesUrl'],
    //     textfile:  data['textfile']
    // });
    // }

    Register(value: any): Observable<{}> {
     // debugger;
      let body = new FormData();
      body.append('username', value.data[0].username);
      body.append('password', value.data[0].password);
      body.append('email', value.data[0].email);
      body.append('phone', value.data[0].phone);
    
      // var body = {
      //   'username': 'sfdssdsddddddddddddd'
  
      // }
      // return this.http.post(this._contactUrl, body, {
      //   headers: headers
      // }).map(res => res.json());
      let otheroption: any = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      return this.http.post(this._contactUrl, body, otheroption);//.subscribe(data => {
      //alert(data);
      //});
    }


     Login(value: any): Observable<{}> {
      debugger;
      //  let body1 = new FormData();
      //  body1.append('email', value.data[0].email);
      //  body1.append('password', value.data[0].password);

      let body1 = new FormData();
      body1.append('email',value.email);
      body1.append('password', value.password);
       let otheroption: any = {
         'Content-Type': 'application/x-www-form-urlencoded'
       }
      //  return this.http
      //  .post(this._contactUrl1, body1, otheroption)
      //  .ma  p(response => {
      //      const chamados = response.json();
      //      // return chamados.map((chamado) => new Chamado(chamado));

      //  })
      //  .catch(this.handleError);

       return this.http.post(this._contactUrl1, body1, otheroption).pipe(
        map((res: Response) => res)
      );

     //return this.http.post(this._contactUrl1, body1, otheroption).pipe(map((res:Response)=>res));

     }



     ForgotPass(value: any): Observable<{}> {
     // debugger;
      let body2 = new FormData();
      body2.append('email', value.data[0].email);
      let otheroption: any = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    return this.http.post(this._contactUrl2, body2, otheroption);//.subscribe(data => {
      //alert(data);
      //});
    }

   }
  

