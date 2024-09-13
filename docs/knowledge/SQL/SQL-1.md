---
title: SQL基础语句
tags:
  - 面试
  - 数据库
date: 2024-9-13 10:40:06
---

<!-- @format -->

# SQL 基础语句

## 一些最重要的 SQL 命令

btw,`SQL` 对大小写不敏感

- `SELECT` - 从数据库提取数据

```SQL
SELECT column_name(s)
FROM table_name
WHERE condition
ORDER BY column_name [ASC|DESC]
```

- `INSERT INTO` - 向数据库中插入新数据

```SQL
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...)
```

- `UPDATE` - 更新数据库中的数据

```SQL
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition
```

- `DELETE` - 从数据库表中删除数据

```SQL
DELETE FROM table_name
WHERE condition
```

- `DROP` - 删除数据库对象，如表、视图、索引等

```SQL
DROP TABLE table_name;
DROP DATABASE database_name;
DROP VIEW view_name;
```

- `CREATE INDEX` - 创建索引，以加快查询速度

```SQL
CREATE INDEX index_name
ON table_name (column1, column2, ...);
```

- `WHERE` - 指定筛选条件

```SQL
SELECT column_name(s)
FROM table_name
WHERE condition
```

- `ORDER BY` - 对结果集进行排序

```SQL
SELECT column_name(s)
FROM table_name
ORDER BY column_name [ASC|DESC] -- ASC: 升序，DESC: 降序
```

- `GROUP BY` - 将结果集按一列或多列进行分组

```SQL
SELECT column_name(s), aggregate_function(column_name)
FROM table_name
WHERE condition
GROUP BY column_name(s)
```

- `HAVING` - 对分组后的结果集进行筛选

```SQL
SELECT column_name(s), aggregate_function(column_name)
FROM table_name
GROUP BY column_name(s)
HAVING condition
```

- `JOIN` - 将两个或多个表的记录结合起来

```SQL
SELECT column_name(s)
FROM table_name1
JOIN table_name2
ON table_name1.column_name = table_name2.column_name
```

- `DISTINCT` - 返回唯一不同的值

```SQL
SELECT DISTINCT column_name(s)
FROM table_name
```
