import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../../service/user.service';
import {NzMessageService} from 'ng-zorro-antd';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styles: [
  ]
})
export class EditUserComponent implements OnInit {
  @Input() item; // 当前编辑项
  constructor(  private fb: FormBuilder,
                private userService: UserService,
                private msg: NzMessageService) {

  }



  ngOnInit(): void {
  }

}
