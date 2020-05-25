import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { RouteRoutingModule } from './routes-routing.module';
// dashboard pages
import { DashboardComponent } from './dashboard/dashboard.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterComponent } from './passport/register/register.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
import { UserLockComponent } from './passport/lock/lock.component';
import {FoundListComponent} from './dashboard/found/found-list/found-list.component';
import { FoundPublishComponent } from './dashboard/found/found-publish/found-publish.component';
import {NzBreadCrumbModule, NzListModule, NzTagModule} from 'ng-zorro-antd';
import { LoseListComponent } from './dashboard/lose/lose-list/lose-list.component';
import { LosePublishComponent } from './dashboard/lose/lose-publish/lose-publish.component';
import { MyInfoComponent } from './dashboard/my/my-info/my-info.component';
import { MyLostFoundComponent } from './dashboard/my/my-lost-found/my-lost-found.component';
import { CheckFoundComponent } from './dashboard/check/check-found/check-found.component';
import { CheckLostComponent } from './dashboard/check/check-lost/check-lost.component';
import { UserManagerComponent } from './dashboard/user-manager/user-manager.component';
import { EditUserComponent } from './dashboard/user-manager/edit-user/edit-user.component';

const COMPONENTS = [
  DashboardComponent,
  // passport pages
  UserLoginComponent,
  UserRegisterComponent,
  UserRegisterResultComponent,
  // single pages
  CallbackComponent,
  UserLockComponent,
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, RouteRoutingModule, NzListModule, NzTagModule, NzBreadCrumbModule],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    FoundListComponent,
    FoundPublishComponent,
    LoseListComponent,
    LosePublishComponent,
    MyInfoComponent,
    MyLostFoundComponent,
    CheckFoundComponent,
    CheckLostComponent,
    UserManagerComponent,
    EditUserComponent
  ],
})
export class RoutesModule {}
