package com.lsn.enums;

import lombok.Getter;

/**
 * 自定义的一些信息：成功、错误等
 */
@Getter
public enum CodeMsgEnum {
    //通用异常
    SUCCESS(0, "success"),

    ERROR(1, "erro"),
    //身份异常5002xx
    NUMBER_PASSWORD_ERROR(1001, "账号或密码错误"),

    OLD_PASSWORD_ERROR(102, "原密码错误"),
    CHANGE_PASSWORD_SUCESS(103, "密码修改成功");

    private Integer code;
    private String msg;

    CodeMsgEnum(Integer code, String msg) {
        this.code = code;
        this.msg = msg;
    }
}
