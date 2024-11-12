---
title: Linux 常用命令
tags:
  - 面试
  - Linux
date: 2024-11-4 16:23:06
---

<!-- @format -->

# Linux 常用命令

## 文件和目录操作

- `cd`：改变当前目录

```shell
cd /path/to/directory
cd ..  # 返回上一级目录
cd ~   # 返回用户主目录
cd /   #切换到系统根目录
```

- `ls`：列出目录内容

```shell
ls
ls -l  # 详细信息
ls -a  # 包括隐藏文件
```

- `pwd`：显示当前工作目录

```shell
pwd   # 用于显示当前工作目录的绝对路径
```

- `mkdir`：创建新目录

```shell
mkdir new_directory
mkdir -p /path/to/new_directory  # 递归创建目录
```

- `rmdir`：删除空目录

```shell
rmdir empty_directory
```

- `rm`：删除文件或目录

```shell
rm file
rm -r directory  # 递归删除目录及其内容
rm -f file       # 强制删除文件
```

- `cp`：复制文件或目录

```shell
cp source_file destination_file
cp -r source_directory destination_directory  # 递归复制目录
```

- `mv`：移动或重命名文件或目录

```shell
mv old_name new_name
mv file /path/to/destination
```

- `touch`：创建空文件或更新文件的时间戳

```shell
touch new_file
```

## 文件内容查看

- `cat`：连接并显示文件内容

```shell
cat file
```

- `more`：分页显示文件内容

```shell
more file
```

- `head`：显示文件的前几行

```shell
more file
```

- `tail`：显示文件的后几行

```shell
tail file
tail -n 10 file  # 显示后 10 行
tail -f file     # 实时显示文件新增内容
```

## 文件搜索

- `find`：在目录中搜索文件

```shell
find /path/to/search -name "filename"
find /path/to/search -type d -name "directory_name"  # 搜索目录
```

- `grep`：在文件中搜索文本

```shell
grep "search_text" file
grep -r "search_text" /path/to/search  # 递归搜索目录
```

## 文件权限

- `chmod`：改变文件权限

```shell
chmod 755 file  # 设置文件权限为 rwxr-xr-x
chmod -R 755 directory  # 递归改变目录权限
```

- `chown`：改变文件所有者

```shell
chown user file
chown user:group file  # 改变文件所有者和组
chown -R user:group directory  # 递归改变目录所有者和组
```

## 系统信息

- `uname`：显示系统信息

```shell
uname -a  # 显示所有系统信息
```

- `df`：显示文件系统磁盘空间使用情况

```shell
df -h  # 以人类可读的格式显示
```

- `du`：显示目录或文件的磁盘使用情况

```shell
du -h file_or_directory  # 以人类可读的格式显示
du -sh directory  # 显示目录总大小
```

- `top`：实时显示系统任务信息

```shell
top
```

- `ps`：显示当前进程信息

```shell
ps
ps aux  # 显示所有进程信息
```

- `kill`：终止进程

```shell
kill PID  # 终止指定 PID 的进程
kill -9 PID  # 强制终止指定 PID 的进程
```

## 网络操作

- `ping`：测试网络连通性

```shell
ping hostname_or_ip
```

- `ifconfig`：显示或配置网络接口

```shell
ifconfig
```

- `netstat`：显示网络连接、路由表等信息

```shell
netstat -a  # 显示所有连接
netstat -r  # 显示路由表
```

- `ssh`：通过 SSH 连接到远程主机

```shell
ssh user@hostname_or_ip
```

- `scp`：通过 SSH 复制文件

```shell
scp source_file user@hostname_or_ip:/path/to/destination
scp user@hostname_or_ip:/path/to/source_file destination
```

## 压缩和解压缩

- `tar`：创建和解压缩 tar 压缩包

```shell
tar -cvf archive.tar file_or_directory  # 创建 tar 压缩包
tar -xvf archive.tar  # 解压 tar 压缩包
tar -czvf archive.tar.gz file_or_directory  # 创建 gzip 压缩包
tar -xzvf archive.tar.gz  # 解压 gzip 压缩包
```

- `zip`和`unzip`：创建和解压缩 zip 压缩包

```shell
zip archive.zip file_or_directory  # 创建 zip 压缩包
unzip archive.zip  # 解压 zip 压缩包
```
