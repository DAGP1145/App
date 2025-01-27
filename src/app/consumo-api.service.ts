import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {
  apiUrl = 'http://127.0.0.1:5000'; // URL base de tu API

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  private loggedIn = false; // Variable para gestionar el estado de autenticación

  constructor(private httpClient: HttpClient) {}

  getpost():Observable<any>{
    return this.httpClient.get(this.apiUrl + "/posts").pipe(retry(3))
  }

  // Endpoint: POST /login
  login(data: { user: string; password: string }): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/login`, data, this.httpOptions);
  }

  // Endpoint: GET /profesores/:id/cursos
  obtenerCursosProfesor(idProfesor: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/profesores/${idProfesor}/cursos`);
  }

  // Endpoint: GET /profesores/:profesor_id/cursos/:curso_id/alumnos
  getAlumnos(profesorId: number, cursoId: number): Observable<any> {
    return this.httpClient.get(
      `${this.apiUrl}/profesores/${profesorId}/cursos/${cursoId}/alumnos`
    );
  }

  // Endpoint: POST /registrar_asistencia
  registrarAsistencia(data: { alumno_id: number; codigo: string; seccion: string; fecha: string }): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/registrar_asistencia`, data, this.httpOptions);
  }
}

