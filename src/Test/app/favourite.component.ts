import {Component} from '@angular/core';  

@Component ({
    selector: 'favourite',
    template: `
        <h2>favourite</h2>
        <i
            class="glyphicon" 
            [class.glyphicon-star-empty]="!isFavourite"
            [class.glyphicon-star]="isFavourite"
            (click)="onClick()">
        </i>
        `
})

export class FavouriteComponent {
    isFavourite = false;

    onClick(){
        this.isFavourite = !this.isFavourite;
    }
}