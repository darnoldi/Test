import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>My real 2 First Angular App</h1>
                <courses></courses>
                <authors></authors>
                <favourite [isFavourite]="post.isFavourite" (change)="onFavouriteChange($event)"></favourite>
                <mytest></mytest> `
 
})
export class AppComponent {
    post = {
        title: "Title",
        isFavourite: true
    }

    onFavouriteChange($event) {
        console.log($event);
    }


}
