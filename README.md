# eos-adminui

作为Saves项目的一个模块，使用mongodb作为存储，该模块我将其命名为eos-mongo，主要功能是用户信息存储，当前仅使用一个数据库。

# 开发说明

可以为数据库添加不同的模块，以user模块为例，需要添加一个js文件来，为该模块书写实现，包括该模块的schema和model，完成之后，将其export到index.js中。

# 使用说明

## 连接

```javascript
    var eosMongo = require("eos-mongo");
    eosMongo.createConnection({host: "10.9.5.23",
                               database: "eos"},
                               (error)=>{});
```

## 断开连接

```javascript
    eosMongo.disconnect((error)=>{});
```

## 模块说明

   * user模块

        1. 创建用户

        ```javascript
            var user = eosMongo.user;
            user.createUser = (payload, (error)=>{});
            // payload
            //{
            //  name: String,
            //	dept: String,
            //	email: String,
            //	tel: String,
            //	username: String,
            //	id: String,
            //	password: String
            //}
        ```

        2. 查询全部用户

        ```javascript
            user.findAll((error, users)=>{});
        ```

        3. 清空用户

        ```javascript
            user.empty((error)=>{});
        ```


# License

MPL v. 2. See [LICENSE](./LICENSE).
