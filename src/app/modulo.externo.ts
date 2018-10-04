import { NgModule } from '@angular/core';

// MATERIAL
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

// PrimeNG
import {RatingModule} from 'primeng/rating';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


@NgModule({

    imports: [MatButtonModule, MatIconModule, RatingModule,
        ProgressSpinnerModule, MessagesModule, MessageModule, MatTableModule ],
    exports: [MatButtonModule, MatIconModule, RatingModule,
         ProgressSpinnerModule, MessagesModule, MessageModule, MatTableModule ]

})

export class ModuloExterno {}

