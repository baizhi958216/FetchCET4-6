# 四六级成绩查询

## 初始化环境

1. 安装依赖:`pnpm i`

2. 在`src/assets/stu.json`填入`姓名`,`身份证`

   src/assets/stu.json:

   ```json
   [
     { "示例1": "xxxxxxxxxxxxxxxxxx" },
     { "示例2": "xxxxxxxxxxxxxxxxxx" },
     { "示例3": "xxxxxxxxxxxxxxxxxx" }
   ]
   ```

## 使用方法

`src/app.ts`写入:

- 四级: ILevel.CET4
- 六级: ILevel.CET6

```ts
import { writeFile } from "fs";
import { FetchResult } from "./FetchResult";
import stuJson from "./assets/stu.json";
import { ILevel } from "./result.interface";

new FetchResult(stuJson).getResult(ILevel.CET4).then((res) => {
  const jsonArray = JSON.stringify(res);
  writeFile("成绩.json", jsonArray, (err) => {
    if (err) throw err;
    console.log("SUCCESS");
  });
});
```

## 运行

```
pnpm start
```

## 目录下生成`成绩.json`
