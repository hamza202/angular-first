import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HamzaComponent } from './hamza/hamza.component';
import { EventComponent } from './event/event.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MyServiceComponentComponent } from './get-component/my-service-component.component';
import { DataServiceService } from './service/data-service.service';
import { HttpComponentComponent } from './http-get-component/http-component.component';
import { HttpServiceService } from './service/http-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpPostComponentComponent } from './http-post-component/http-post-component.component';
@NgModule({
  declarations: [
    AppComponent,
    HamzaComponent,
    EventComponent,
    MyFormComponent,
    MyServiceComponentComponent,
    HttpComponentComponent,
    HttpPostComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpClientModule
  ],
  providers: [DataServiceService,
      HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
