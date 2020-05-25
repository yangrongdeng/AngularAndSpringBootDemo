/*
 Navicat Premium Data Transfer

 Source Server         : mac
 Source Server Type    : MySQL
 Source Server Version : 50717
 Source Host           : localhost:3306
 Source Schema         : lost_and_found

 Target Server Type    : MySQL
 Target Server Version : 50717
 File Encoding         : 65001

 Date: 25/05/2020 21:01:52
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userNumber` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nickName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `userName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `className` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `concat` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` int(16) NOT NULL DEFAULT '0' COMMENT '0：用户，1：管理员',
  `grade` int(16) NOT NULL DEFAULT '100',
  `status` int(16) NOT NULL DEFAULT '0',
  `createTime` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (1, '2016', '一川秋水', '小白兔', '123', '16级医软3班', '2458632988@qq.com', 1, 100, 0, '2020-05-08 11:16:13');
INSERT INTO `user` VALUES (2, '123', '哈哈哈哈哈aaa', '管理员', '123', '16级医软3班', '23398876@qq.com', 1, 100, 0, '2020-05-09 15:50:42');
INSERT INTO `user` VALUES (5, '2016207320131', '高蕾', '高蕾', '123', '16医软3班', '17764472836', 0, 100, 0, '2020-05-16 19:09:42');
INSERT INTO `user` VALUES (6, '2016207320168', '张洪', '张洪', '123', '16医软3班', '17764472836', 1, 100, 1, '2020-05-16 19:11:24');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
