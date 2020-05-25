package com.lsn.utils;

import com.lsn.enums.CodeMsgEnum;
import lombok.Getter;

/**
 * 统一的数据返回控制
 * 直接传入msg提示、提示码code、和数据data即可
 * @param <T>
 */
@Getter
public class Result<T> {
    private String msg;
    private int code;
    private T data;

    //成功时调用
    public static <T> Result<T> success(T data) {
        return new Result<>(data);

    }
    public static <T> Result<T> success() {
        return new Result<>();

    }
    //失败时候调用
    public static <T> Result<T> error(CodeMsgEnum msg) {
        return new Result<>(msg);
    }

    private Result(T data) {
        this.code = 0;
        this.msg = "成功";
        this.data = data;

    }
    private Result() {
        this.code = 0;
        this.msg = "成功";
        this.data = null;

    }
    private Result(CodeMsgEnum cm) {
        if (cm == null) {
            return;
        }
        this.code = cm.getCode();
        this.msg = cm.getMsg();
    }
}

