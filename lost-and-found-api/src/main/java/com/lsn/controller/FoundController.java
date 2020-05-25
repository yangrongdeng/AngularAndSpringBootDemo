package com.lsn.controller;

import com.lsn.dao.FoundMapper;
import com.lsn.dto.Found;
import com.lsn.utils.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

/**
 * 关于寻物的模块
 */
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@RestController
@RequestMapping(value = "found")
public class FoundController {
    @Autowired
    FoundMapper foundMapper;

    /**
     * 新增寻物信息功能
     * @param found 寻物信息
     */
    @RequestMapping("/publish")
    public void publish(@RequestBody Found found) {
        System.out.println("新增寻物信息功能");
        found.setCreateTime(new Date());
        foundMapper.addFound(found);
        System.out.println("新增成功");
    }

    /**
     * 显示寻物信息（第一次显示部分）
     */
    @RequestMapping("/list")
    public Result<List<Found>> list() {
        System.out.println("查询寻物列表功能");
        List<Found> list = foundMapper.foundList();
        return Result.success(list);
    }

    /**
     * 显示所有寻物信息（点击加载更多按钮）
     */
    @RequestMapping("/listAll")
    public Result<List<Found>> listAll() {
        System.out.println("查询所有寻物列表功能");
        List<Found> list = foundMapper.foundListAll();
        return Result.success(list);
    }

    /**
     * 积分助力功能
     * @param id 寻物信息的id
     * @return
     */
    @RequestMapping("/upGrade")
    public Result<Object> upGrade(@RequestParam("id") String id) {
        System.out.println(id);
        System.out.println("寻物积分助力功能");
        int result = foundMapper.upGrade(id);
        System.out.println(result);
        return Result.success();
    }


    /**
     * 我发布的寻物信息列表
     * @param  userNumber 用户账号
     * @return
     */
    @RequestMapping("/myList")
    public Result<List<Found>> myList(@RequestParam("userNumber") String userNumber) {
        System.out.println(userNumber);
        System.out.println("我发布的寻物信息列表");
        List<Found> myFoundList = foundMapper.myList(userNumber);
        System.out.println(myFoundList);
        return Result.success(myFoundList);
    }

    /**
     * 关闭、完成发布的寻物信息
     * @param id 寻物信息的id
     */
    @RequestMapping("/close")
    public void close(@RequestParam("id") int id) {
        System.out.println("关闭、完成发布的寻物信息");
        foundMapper.close(id);
    }


    /**
     * 查询未审核的寻物信息
     * @return 返回寻物信息列表
     */
    // 查询未审核的寻物信息
    @RequestMapping("/noCheck")
    public Result<List<Found>> noCheck() {
        System.out.println("查询未审核的寻物信息");
        List<Found> list = foundMapper.noCheck();
        return Result.success(list);
    }

    /**
     *查询已通过的寻物信息
     * @return 返回已通过的寻物信息列表
     */
    @RequestMapping("/alreadyCheck")
    public Result<List<Found>> alreadyCheck() {
        System.out.println("查询已通过的寻物信息");
        List<Found> list = foundMapper.alreadyCheck();
        return Result.success(list);
    }

    /**
     * 查询未审核的寻物信息
     * @return 返回未审核的寻物信息列表
     */

    @RequestMapping("/noPassCheck")
    public Result<List<Found>> noPassCheck() {
        System.out.println("查询未通过的寻物信息");
        List<Found> list = foundMapper.noPassCheck();
        return Result.success(list);
    }

    /**
     * 审核将寻物信息设置为通过
     * @param id 寻物信息的id
     */
    @RequestMapping("/pass")
    public void pass(@RequestParam("id") int id) {
        System.out.println("将寻物信息设置为通过");
        foundMapper.pass(id);
    }

    /**
     * 审核将寻物信息设置为未通过
     * @param id 寻物信息的id
     */
    @RequestMapping("/noPass")
    public void noPass(@RequestParam("id") int id) {
        System.out.println("将寻物信息设置为未通过");
        foundMapper.noPass(id);
    }
}
