// Importar modulos del router de Angular
import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

// Importar Componentes
import { LoginComponent } from "./components/login/login.component";
import { ProjectsComponent } from "./components/projects/projects.component";

// Array de rutas
const appRoutes = [ // Path es el nombre de la ruta, component es el componente que va a cargar cuando esa ruta se ejecute en nuestro navegador
  {path:"login",component: LoginComponent},
  {path:"projects",component: ProjectsComponent},
  { path: '',   redirectTo: '/projects', pathMatch: 'full' }, // redirect to `first-component`
  {path: "**", component:ProjectsComponent} // Esta es la ruta 404, siempre tiene que ir al final, esta se corre cuando la ruta no esta asociada a ningun componente, y se corre el componente que le digas
];

// Exportar el modulo del router
export const appRoutingProviders: any[] = []// El sevicio del router
export const routing :any = RouterModule.forRoot(appRoutes);
