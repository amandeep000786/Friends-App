import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';

const routes: Routes = [

  // { path: '', redirectTo: '/chatscreen/1', pathMatch: 'full'},
  { path: 'chatscreen/:id', component: ChatScreenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
