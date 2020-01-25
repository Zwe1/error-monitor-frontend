## 错误监控系统 (client)

### 目标

针对 B 端应用难以分析远程错误，设想构建一个错误收集监控系统，以便错误记录与收集并展示。

### 架构

整个系统包含前端系统，source-map [插件](https://github.com/Zwe1/error-monitor-webpack-plugin) 和 [后端系统](https://github.com/Zwe1/error-monitor-node-server)，及数据库服务。前端收集上报发送错误信息到服务端，服务端处理收集存储错误信息到数据库，并支持前端获取处理后的错误信息，在前端进行集中展示。

### 项目表述

该项目由 create-react-app 搭建，进行 override webpack config 操作来扩展打包配置。进行错误生产，作为整个系统的前端实验室。

### 基本功能

1. 错误上报
2. 错误展示
3. ci 系统 (hard)
