---
title: 主键、超键、候选键、外键、唯一键
tags:
  - 面试
  - 数据库
date: 2024-9-13 10:40:06
---

<!-- @format -->

# 主键、超键、候选键、外键、唯一键

## 主键（Primary Key）

主键是用于唯一标识表中每一行数据的字段或字段组合。

主键要求具备以下特性：

1. 唯一性：主键值必须唯一，确保表中每一行数据的唯一性。
2. 非空性：主键字段不能为空，这是因为不能为空值用于唯一标识每一行数据。

创建语法如下：

```SQL
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    department VARCHAR(50)
);

```

## 候选键（Candidate Key）

候选键是表中能够唯一标识每一行的列或列的组合。一个表可以有多个候选键，其中一个被选为主键。

特点如下：

1. 每个候选键的值必须唯一且不能为空。
2. 候选键可以作为主键的候选项。

示例：

```SQL
-- id 和 ssn 都是候选键，其中 id 被选为主键
CREATE TABLE employees (
    id INT,
    ssn VARCHAR(11),
    name VARCHAR(100),
    age INT,
    PRIMARY KEY (id),
    UNIQUE (ssn)
);
```

## 超键（Super Key）

超键是表中能够唯一标识每一行的列或列的组合。所有候选键都是超键，但超键不一定是候选键。

特点如下：

1. 超键可以包含多余的列。
2. 超键的值必须唯一。

示例：

```SQL
-- id 和 ssn 的组合是一个超键
CREATE TABLE employees (
    id INT,
    ssn VARCHAR(11),
    name VARCHAR(100),
    age INT,
    PRIMARY KEY (id),
    UNIQUE (ssn),
    UNIQUE (id, ssn)
);
```

## 外键（Foreign Key）

外键是一种数据库约束，用于在两张表之间建立关联，使得子表中某个字段或字段组合引用父表的主键或唯一键。  
通过外键，能够确保数据的完整性和一致性。
特点如下：

1. 外键列的值必须在引用表的主键列中存在（引用完整性）。
2. 外键可以为空。
3. 外键用于维护表之间的参照完整性。

示例：

```SQL
CREATE TABLE departments (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

```

## 唯一键（Unique Key）

唯一键是表中的一个或多个列，其值必须唯一，但可以为空。
特点如下：

1. 一个表可以有多个唯一键。
2. 唯一键列的值必须唯一，但可以有一个空值。
3. 唯一键用于确保列中的数据唯一性。

示例：

```SQL
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    age INT,
    department VARCHAR(50)
);
```

<!-- @format -->
