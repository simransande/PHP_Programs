import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
// import { servicesusrls } from '../constant/constants.services';
//import { servicesusrls } from '../constant/constant.module';
@Injectable({
  providedIn: 'root'
  
})
export class DataserviceService {

  // private host = window.location.hostname;
  // private headers = new Headers({'Content-Type': 'application/json'});
  // private usersURL = `http://${this.host}/api/v1/users`;
   
  constructor(private http: HttpClient) {

   }

   Register(user: any) {
     debugger;
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    var data = {      
     
      "uname" : user.uname,
       "email": user.email,
       "pass": user.pass,
       "phone": user.phone
     }
     console.log(data);
    debugger;
    //  return this.http.post("http://localhost:8080/default_controller/index", data, httpOptions);

     
      this.http.post("http://localhost:8080/register",{}).subscribe(data =>     { 
        alert(data);
       });


   // this.http.post(usersURL, data, httpOptions)
 }
    //  getConfig() {
    //    return this.http.get(this.configUrl).subscribe((data: Config) => this.config = {
    //     heroesUrl: data['heroesUrl'],
    //     textfile:  data['textfile']
    // });
    // }

   }
  

