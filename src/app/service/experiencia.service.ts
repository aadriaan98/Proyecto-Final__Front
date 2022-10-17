import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Explaboral } from '../model/explaboral';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL = 'https://back-portfolio-adrian.herokuapp.com/experiencia-laboral/';

  constructor(private httpClient : HttpClient) { }

  public lista() : Observable<Explaboral[]>{
    return this.httpClient.get<Explaboral[]>(this.URL + 'lista');
  }

  public detail(id : number) : Observable<Explaboral>{
    return this.httpClient.get<Explaboral>(this.URL + `detail/${id}`);
  }

  public save(expLab : Explaboral): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', expLab);
  }

  public update(id :number, expLab : Explaboral): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, expLab);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
