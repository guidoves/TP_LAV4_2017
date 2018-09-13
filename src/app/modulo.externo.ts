import { NgModule } from '@angular/core';

// MATERIAL
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

// PrimeNG
import {RatingModule} from 'primeng/rating';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({

    imports: [MatButtonModule, MatIconModule, RatingModule,
        ProgressSpinnerModule ],
    exports: [MatButtonModule, MatIconModule, RatingModule,
         ProgressSpinnerModule ]

})

export class ModuloExterno {}

