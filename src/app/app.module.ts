import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HamzaComponent } from './hamza/hamza.component';
import { EventComponent } from './event/event.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MyServiceComponentComponent } from './my-service-component/my-service-component.component';
import { DataServiceService } from './service/data-service.service';
@NgModule({
  declarations: [
    AppComponent,
    HamzaComponent,
    EventComponent,
    MyFormComponent,
    MyServiceComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
