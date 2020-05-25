import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {_HttpClient} from '@delon/theme';
import {BROWSER_STORAGE} from '../../../../service/storage.service';
import qs from 'qs';

@Component({
  selector: 'app-my-lost-found',
  templateUrl: './my-lost-found.component.html',
  styles: []
})
export class MyLostFoundComponent implements OnInit {

  constructor(fb: FormBuilder, private msg: NzMessageService,
              private http: _HttpClient,
              @Inject(BROWSER_STORAGE) public storage: Storage) {
    this.validateForm = fb.group({
      oldPassword: [null, [Validators.required]],
      newPassword: [null, [Validators.required]],
    });
  }

  userInfo: any;
  changePasswordUrl = 'http://localhost:8888/login/changePassword?_allow_anonymous=true';
  validateForm: FormGroup;

  ngOnInit() {
  }

  submit(): void {
    this.userInfo = JSON.parse(this.storage.getItem('userInfo'));
    const userNumber = this.userInfo.userNumber;
    const data = Object.assign({}, this.validateForm.getRawValue(), {userNumber: userNumber});
    this.http.get(this.changePasswordUrl + '&' + qs.stringify(data)).toPromise().then((res: any) => {
      if (res.code === 0) {
        this.msg.success('密码修改成功');
        this.validateForm.reset();
      } else {
        this.msg.error('修改失败：旧密码错误');
      }
    }).catch((e) => {
      this.msg.error('密码修改失败');
    });


  }

}
