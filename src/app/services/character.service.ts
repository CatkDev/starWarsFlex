import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CharacterService {

    urlAll: string = 'https://www.swapi.tech/api/people/?page=1&limit=0';
    url: string = 'https://www.swapi.tech/api/people/';

    constructor(private http: HttpClient) {
    }

    // getCharacter(num: number): Observable<any> {
        // const url = `https://www.swapi.tech/api/people/${num}`;
        // return this.http.get<any>(url);
        // let response = this.http.get(this.url + num);
        // return response;
    // }

    getPeople(): Observable<any> {
        let people = this.http.get(this.urlAll);
        return people;
    }

    getPeopleById(id: number): Observable<any> {
        let character = this.http.get(this.url + id);
        return character;
    }

    getRandomId(ids: number) {
        let id = Math.floor((Math.random() * ids));
        if (id === 17) {
            id = Math.floor((Math.random() * ids));
        }
        return id;
    }



}
