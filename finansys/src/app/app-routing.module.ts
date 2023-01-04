import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesModule } from './pages/categories/categories.module';

/*Carregamento dos modulos otimizados, o módulo só será carregado quando acessado por 'categories' */

//categorias irá carregar as rotas de categorias... as rotas configuradas em CategoriesModule, por exemplo '/new', serão acessadas por 'categories/new'
const routes: Routes = [
  {path: 'categories', loadChildren: () => CategoriesModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
