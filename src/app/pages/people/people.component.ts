import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

    showDetail = false;
    peopleAll:any = [];
    allIds: number = 0;
    peopleArray: any[] = [];
    description: string = '';
    homeworldUrl: string = '';
    homeworldName: string = '';
    terrain: string = '';


    constructor(private cs: CharacterService) {
    }

    async ngOnInit() {

        await this.cs.getPeople().subscribe({
            next: (peopleData) => {
                this.peopleAll = peopleData.results;
                this.allIds = this.peopleAll.length;
                for (let i = 0; i < 3; i++) {
                    this.cs.getPeopleById(this.cs.getRandomId(this.allIds)).subscribe((data) => {
                        this.peopleArray.push(data.result);
                        console.log(this.peopleArray);
                    })
                }
            },
            error: err => {
                console.log('Error', err);
            }
        })
    }

    showDetails(id: any) {
        this.showDetail = true;
        console.log('Button Details', id);
        this.description = id.description;
        this.homeworldUrl = id.properties.homeworld;
        this.cs.getHomeworld(this.homeworldUrl).subscribe({
            next: (homeworldData) => {
                console.log(homeworldData);
                this.homeworldName = homeworldData.result.properties.name;
                this.terrain = homeworldData.result.properties.terrain;
            }
        });

    }

    closeDetails() {
        this.showDetail = false;
    }

}
