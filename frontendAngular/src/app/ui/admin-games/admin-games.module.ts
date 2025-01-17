import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { AdminGamesFormComponent } from './admin-games-form/admin-games-form.component';
import { AdminGamesHomeComponent } from './admin-games-home/admin-games-home.component';
import { AdminGamesGameComponent } from './admin-games-game/admin-games-game.component';

@NgModule({
  declarations: [AdminGamesHomeComponent, AdminGamesFormComponent, AdminGamesGameComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AdminGamesModule {}
