import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { DeletedTasksComponent } from './pages/deleted-tasks/deleted-tasks.component';
import { FavoriteTasksComponent } from './pages/favorite-tasks/favorite-tasks.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { TodoComponent } from './todo/todo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleTaskComponent } from './pages/single-task/single-task.component';
import { BrowserModule } from '@angular/platform-browser';
import { GlobalService } from './services/global.service';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  //{path:'todo', component:TodoComponent}, // ,canActivate:[AuthGuard]
  {path:'todos', component:TodosComponent,canActivate:[AuthGuard]},
  {path:'favtask', component:FavoriteTasksComponent},
  {path:'deltask', component:DeletedTasksComponent},
  {path:'task/:id', component:SingleTaskComponent,canActivate:[AuthGuard]},//canActivate:[AuthGuard]
  {path:"**",component:ErrorpageComponent},
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  providers:[GlobalService, AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
