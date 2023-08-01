import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppsComponent } from './apps.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserListService } from './user/user-list/user-list.service';
import { UserViewComponent } from './user/user-view/user-view.component';
import { UserViewService } from './user/user-view/user-view.service';
import { NewUserSidebarComponent } from './user/user-list/new-user-sidebar/new-user-sidebar.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { CoreCommonModule } from '../../../@core/common.module';
import { CoreSidebarModule } from '../../../@core/components';
import { CoreDirectivesModule } from '../../../@core/directives/directives';
import { CorePipesModule } from '../../../@core/pipes/pipes.module';
import { InvoiceListService } from './invoice/invoice-list/invoice-list.service';
import { InvoiceModule } from './invoice/invoice.module';
import { UserEditService } from './user/user-edit/user-edit.service';
import { SWIPER_CONFIG, SwiperConfigInterface, SwiperModule } from 'ngx-swiper-wrapper';
import { NouisliderModule } from 'ng2-nouislider';
import { ContentHeaderModule } from '../../layout/components/content-header/content-header.module';
import { CoreTouchspinModule } from '../../../@core/components/core-touchspin/core-touchspin.module';
import { EcommerceCheckoutItemComponent } from './ecommerce/ecommerce-checkout/ecommerce-checkout-item/ecommerce-checkout-item.component';
import { EcommerceCheckoutComponent } from './ecommerce/ecommerce-checkout/ecommerce-checkout.component';
import { EcommerceDetailsComponent } from './ecommerce/ecommerce-details/ecommerce-details.component';
import { EcommerceItemComponent } from './ecommerce/ecommerce-item/ecommerce-item.component';
import { EcommerceShopComponent } from './ecommerce/ecommerce-shop/ecommerce-shop.component';
import { EcommerceSidebarComponent } from './ecommerce/ecommerce-shop/sidebar/sidebar.component';
import { EcommerceWishlistComponent } from './ecommerce/ecommerce-wishlist/ecommerce-wishlist.component';
import { EcommerceService } from './ecommerce/ecommerce.service';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  observer: true
};
// routing
const routes: Routes = [
  {
    path: '',
    component: AppsComponent,
    children: [
      {
        path: 'company-list',
        component: UserListComponent,
        resolve: {
          uls: UserListService
        },
        data: { animation: 'UserListComponent' }
      },
      {
        path: 'company-view/:id',
        component: UserViewComponent,
        resolve: {
          data: UserViewService,
          InvoiceListService
        },
        data: { path: 'view/:id', animation: 'UserViewComponent' }
      },
      {
        path: 'company-edit/:id',
        component: UserEditComponent,
        resolve: {
          ues: UserEditService
        },
        data: { animation: 'UserEditComponent' }
      },
      {
        path: 'company-view',
        redirectTo: '/finance/company-view/2' // Redirection
      },
      {
        path: 'company-edit',
        redirectTo: '/finance/company-edit/2' // Redirection
      },
      {
        path: 'shop',
        component: EcommerceShopComponent,
        resolve: {
          ecommerce: EcommerceService
        },
        data: { animation: 'EcommerceShopComponent' }
      },
      {
        path: 'details/:id',
        component: EcommerceDetailsComponent,
        resolve: {
          ecommerce: EcommerceService
        },
        data: { animation: 'EcommerceDetailsComponent' }
      },
      {
        path: 'wishlist',
        component: EcommerceWishlistComponent,
        resolve: {
          ecommerce: EcommerceService
        },
        data: { animation: 'EcommerceWishlistComponent' }
      },
      {
        path: 'checkout',
        component: EcommerceCheckoutComponent,
        resolve: {
          ecommerce: EcommerceService
        },
        data: { animation: 'EcommerceCheckoutComponent' }
      },
      {
        path: 'details',
        redirectTo: '/apps/e-commerce/details/27', //Redirection
        data: { animation: 'EcommerceDetailsComponent' }
      },
      {
        path: 'email',
        loadChildren: () => import('./email/email.module').then(m => m.EmailModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
      },
      {
        path: 'todo',
        loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
      },
      {
        path: 'invoice',
        loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule)
      },
      {
        path: 'e-commerce',
        loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      }
    ]
  },

];

@NgModule({
  declarations: [
    AppsComponent,
    UserListComponent,
    UserViewComponent,
    UserEditComponent,
    NewUserSidebarComponent,
    EcommerceShopComponent,
    EcommerceSidebarComponent,
    EcommerceDetailsComponent,
    EcommerceWishlistComponent,
    EcommerceCheckoutComponent,
    EcommerceItemComponent,
    EcommerceCheckoutItemComponent
  ],
  imports: [CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    Ng2FlatpickrModule,
    NgxDatatableModule,
    CorePipesModule,
    CoreDirectivesModule,
    InvoiceModule,
    CoreSidebarModule,
    SwiperModule,
    CoreTouchspinModule,
    ContentHeaderModule,
    NouisliderModule
  ],
  providers: [UserListService,
    UserViewService,
    UserEditService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }]
})
export class AppsModule { }
