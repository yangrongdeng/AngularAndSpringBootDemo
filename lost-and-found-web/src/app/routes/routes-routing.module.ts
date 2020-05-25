import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleGuard } from '@delon/auth';
import { environment } from '@env/environment';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { LayoutFullScreenComponent } from '../layout/fullscreen/fullscreen.component';
import { LayoutPassportComponent } from '../layout/passport/passport.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
// dashboard pages
import { DashboardComponent } from './dashboard/dashboard.component';
import {FoundListComponent} from './dashboard/found/found-list/found-list.component';
import {FoundPublishComponent} from './dashboard/found/found-publish/found-publish.component';
import {LoseListComponent} from './dashboard/lose/lose-list/lose-list.component';
import {LosePublishComponent} from './dashboard/lose/lose-publish/lose-publish.component';
import {MyInfoComponent} from './dashboard/my/my-info/my-info.component';
import {MyLostFoundComponent} from './dashboard/my/my-lost-found/my-lost-found.component';
import { UserLockComponent } from './passport/lock/lock.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
import { UserRegisterComponent } from './passport/register/register.component';
import {CheckFoundComponent} from './dashboard/check/check-found/check-found.component';
import {CheckLostComponent} from './dashboard/check/check-lost/check-lost.component';
import {UserManagerComponent} from './dashboard/user-manager/user-manager.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    // canActivate: [SimpleGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      { path: 'dashboard', component: DashboardComponent, data: { title: '仪表盘', titleI18n: 'dashboard' } },
      { path: 'dashboard/found', component: FoundListComponent},
      { path: 'dashboard/foundPublish', component: FoundPublishComponent},
      { path: 'dashboard/lose', component: LoseListComponent},
      { path: 'dashboard/losePublish', component: LosePublishComponent},
      { path: 'dashboard/myiInfo', component: MyInfoComponent},
      { path: 'dashboard/myloseFound', component: MyLostFoundComponent},
      { path: 'dashboard/checkFound', component: CheckFoundComponent},
      { path: 'dashboard/checkLost', component: CheckLostComponent},
      { path: 'dashboard/userManager', component: UserManagerComponent},
      { path: 'exception', loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule) },
      // 业务子模块
      // { path: 'widgets', loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule) },
    ]
  },
  // 全屏布局
  // {
  //     path: 'fullscreen',
  //     component: LayoutFullScreenComponent,
  //     children: [
  //     ]
  // },
  // passport
  {
    path: 'passport',
    component: LayoutPassportComponent,
    children: [
      { path: 'login', component: UserLoginComponent, data: { title: '登录', titleI18n: 'pro-login' } },
      { path: 'register', component: UserRegisterComponent, data: { title: '注册', titleI18n: 'pro-register' } },
      { path: 'register-result', component: UserRegisterResultComponent, data: { title: '注册结果', titleI18n: 'pro-register-result' } },
      { path: 'lock', component: UserLockComponent, data: { title: '锁屏', titleI18n: 'lock' } },
    ]
  },
  // 单页不包裹Layout
  { path: 'callback/:type', component: CallbackComponent },
  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {
        useHash: environment.useHash,
        // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
        // Pls refer to https://ng-alain.com/components/reuse-tab
        scrollPositionRestoration: 'top',
      }
    )],
  exports: [RouterModule],
})
export class RouteRoutingModule { }
