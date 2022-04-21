import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

    showDetails = false;
    peopleAll:any = [];
    allIds: number = 0;
    peopleArray: any[] = [];


    constructor(private cs: CharacterService) {
    }

    async ngOnInit() {

        // await this.cs.getPeople().subscribe( (data) => {
        //
        //     this.peopleAll = data.results;
        //     this.allIds = this.peopleAll.length;
        //     for (let i = 0; i < 3; i++) {
        //         this.cs.getPeopleById(this.cs.getRandomId(this.allIds)).subscribe((data) => {
        //             this.peopleArray.push(data.result);
        //             console.log(this.peopleArray);
        //         })
        //     }
        // });

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

}
