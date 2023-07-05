import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  APIUrl = 'https://my-json-server.typicode.com/susobhandash/jsonFakeServer/';

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private http: HttpClient
  ) { }

  // Postions
  getPositions() {
    let url = this.APIUrl + 'positions';
    let options = {
      headers: this.headers
    };

    return this.http.get(url, options);
  }

  // Projects
  getProjects() {
    let url = this.APIUrl + 'projects';
    let options = {
      headers: this.headers
    };

    return this.http.get(url, options);
  }

  // Skills
  getSkills() {
    let url = this.APIUrl + 'skills';
    let options = {
      headers: this.headers
    };

    return this.http.get(url, options);
  }

  // Employees
  getEmployees() {
    let url = this.APIUrl + 'employees';
    let options = {
      headers: this.headers
    };

    return this.http.get(url, options);
  }

  addEmployee(data) {
    let url = this.APIUrl + 'employees';
    let options = {
      headers: this.headers
    };

    return this.http.post(url, data, options);
  }
}
