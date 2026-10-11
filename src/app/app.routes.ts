import { Routes } from '@angular/router';
import { ProdutoDetalhe } from './produto-detalhe/produto-detalhe';
import { ListaProdutos } from './lista-produtos/lista-produtos';

export const routes: Routes = [
    {path: 'produtos/:id', component: ProdutoDetalhe},
    { path: '', component: ListaProdutos }
];
