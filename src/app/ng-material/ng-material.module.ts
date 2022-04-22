import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatSpinner } from '@angular/material/progress-spinner';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatSliderModule
    ],
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatSliderModule
    ]
})
export class NgMaterialModule {
}
