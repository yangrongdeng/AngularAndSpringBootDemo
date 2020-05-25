import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// tslint:disable-next-line:import-blacklist
import {NzMessageService} from 'ng-zorro-antd';
import qs from 'qs';
import {FoundService} from '../../../../service/found.service';
import {BROWSER_STORAGE} from '../../../../service/storage.service';

@Component({
  selector: 'app-found-publish',
  templateUrl: './found-publish.component.html',
  styles: []
})
export class FoundPublishComponent implements OnInit {
  form: FormGroup;
  submitting = false;
  userInfo: any;


  constructor(private fb: FormBuilder,
              private msg: NzMessageService,
              @Inject(BROWSER_STORAGE) public storage: Storage,
              private  foundService: FoundService
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null, [Validators.required]],
      des: [null, [Validators.required]],
      keyWord: [null, [Validators.required]],
      userName: [null, [Validators.required]],
      concat: [null, [Validators.required]],
      useGrade: [null, [Validators.required]],
      grade: null,
    });
  }

  submit() {
    console.log('新增寻物信息....');
    this.submitting = true;
    this.userInfo = JSON.parse(this.storage.getItem('userInfo'));
    const data = Object.assign({}, this.form.getRawValue(), {userNumber: this.userInfo.userNumber});
    console.log(data);
    this.foundService.foundPublish(data).then((res: any) => {
      this.submitting = false;
      this.msg.success('寻物信息发布成功');
      this.form.reset();
    });
  }
}
