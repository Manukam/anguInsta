import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
imports: [MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule],
exports: [MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule],
})
export class CustomMaterialModule { }
