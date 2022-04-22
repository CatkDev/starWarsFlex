import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CharacterService {

    urlAll: string = 'https://www.swapi.tech/api/people/?page=1&limit=0';
    url: string = 'https://www.swapi.tech/api/people/';
    charArray: any[] = [];

    constructor(private http: HttpClient) {
    }

    // getCharacter(num: number): Observable<any> {
        // const url = `https://www.swapi.tech/api/people/${num}`;
        // return this.http.get<any>(url);
        // let response = this.http.get(this.url + num);
        // return response;
    // }

    getPeople(): Observable<any> {
        return this.http.get(this.urlAll);
    }

    getPeopleById(id: number): Observable<any> {
        return this.http.get(this.url + id);
    }

    getRandomId(ids: number) {
        let id = Math.floor((Math.random() * (ids - 1)) + 1);
        if (id === 17) {
            id = Math.floor((Math.random() * ids));
        }
        return id;
    }

    getHomeworld(homeworldUrl: string): Observable<any> {
        return this.http.get(homeworldUrl);
    }



}
