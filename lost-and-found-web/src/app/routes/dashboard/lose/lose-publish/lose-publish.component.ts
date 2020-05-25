import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {BROWSER_STORAGE} from '../../../../service/storage.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-lose-publish',
  templateUrl: './lose-publish.component.html',
  styles: []
})
export class LosePublishComponent implements OnInit {
  form: FormGroup;
  submitting = false;
  userInfo: any;
  losePublishUrl = 'http://localhost:8888/lose/publish?_allow_anonymous=true';

  constructor(private fb: FormBuilder,
              private msg: NzMessageService,
              @Inject(BROWSER_STORAGE) public storage: Storage,
              private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null, [Validators.required]],
      keyWord: [null, [Validators.required]],
      des: [null, [Validators.required]],
      userName: [null, [Validators.required]],
      concat: [null, [Validators.required]],
    });
  }

  submit() {
    console.log('新增招领信息....');
    this.submitting = true;
    this.userInfo = JSON.parse(this.storage.getItem('userInfo'));
    const data = Object.assign({}, this.form.getRawValue(), {userNumber: this.userInfo.userNumber});
    console.log(data);
    this.http.post(this.losePublishUrl, data, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).subscribe((res: any) => {
      this.submitting = false;
      this.msg.success('寻物信息发布成功');
      this.form.reset();
    });
  }

}
