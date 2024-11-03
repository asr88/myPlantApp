import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantComponent } from './plant/plant.component';
import { HttpClient } from '@angular/common/http';
import { PlantService } from './plant/plant.service';
@NgModule({
  declarations: [	
    AppComponent,
    PlantComponent
    
   ],
   exports: [
    PlantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PlantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
