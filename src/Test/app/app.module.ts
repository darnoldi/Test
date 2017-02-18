import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { CoursesComponent }   from './courses.component';
import { AuthorsComponent }   from './authors.component';
import { MyTestComponent }   from './mytest.component';
import { AutoGrowDirective } from './auto-grow.directive';
import { FavouriteComponent } from './favourite.component';

@NgModule({
   imports: [BrowserModule ],
   declarations: [AppComponent, CoursesComponent, AuthorsComponent, MyTestComponent, FavouriteComponent, [AutoGrowDirective]],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
