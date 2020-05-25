import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {BROWSER_STORAGE} from '../../../../service/storage.service';
import {_HttpClient} from '@delon/theme';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styles: []
})
export class MyInfoComponent implements OnInit {
  userInfo: any;
  userName;
  foundLoading = false;
  foundList: any[] = [];
  lostLoading = false;
  lostList: any[] = [];
  myFoundUrl = 'http://localhost:8888/found/myList?_allow_anonymous=true';
  closeFoundUrl = 'http://localhost:8888/found/close?_allow_anonymous=true';
  myLostUrl = 'http://localhost:8888/lose/myList?_allow_anonymous=true';
  closeLostUrl = 'http://localhost:8888/lose/close?_allow_anonymous=true';

  constructor(private fb: FormBuilder,
              private http: _HttpClient,
              private msg: NzMessageService,
              @Inject(BROWSER_STORAGE) public storage: Storage) {

  }

  validateForm: FormGroup;

  ngOnInit() {
    this.validateForm = this.fb.group({
      oldPassword: [null, [Validators.required]],
      newPassword: [null, [Validators.required]],
    });
    this.getUserInfo();
    this.getMyFound();
    this.getMyLost();
  }

  getUserInfo() {
    this.userInfo = JSON.parse(this.storage.getItem('userInfo'));
    console.log(this.userInfo);
    this.userName = '你好，'.concat(this.userInfo.userName);
  }

  getMyFound() {
    console.log('this.userInfo.userNumber', this.userInfo.userNumber);
    console.log('this.userInfor', this.userInfo);

    this.foundLoading = true;
    this.http.get(this.myFoundUrl + '&userNumber=' + this.userInfo.userNumber).subscribe((res: any) => {
      console.log('myFoundList', res);
      this.foundList = res.data;
      this.foundLoading = false;
    });
  }

  // 关闭发布的寻物信息
  closeMyFound(id: any) {
    this.http.get(this.closeFoundUrl + '&id=' + id).subscribe((res: any) => {
      this.msg.success('该寻物信息已设置为完成');
      this.getMyFound();
    });

  }

  getMyLost() {
    this.lostLoading = true;
    this.http.get(this.myLostUrl + '&userNumber=' + this.userInfo.userNumber).subscribe((res: any) => {
      console.log('myFoundList', res);
      this.lostList = res.data;
      this.lostLoading = false;
    });
  }

  closeMyLost(id: any) {
    this.http.get(this.closeLostUrl + '&id=' + id).subscribe((res: any) => {
      this.msg.success('该招领信息信息已设置为完成');
      this.getMyLost();
    });

  }

  submitForm(): void {
    this.msg.success(JSON.stringify(this.validateForm.value));
  }


}
