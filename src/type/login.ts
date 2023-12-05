/**
 * 表单数据接口 (用来规范整个项目对应的类型),
 * 分三步：
 * 1 定义接口，2 定义类使用这个接口，3 实例化这个类
 */
export interface ILoginData{
    username: string
    password: string
}
// 实例化
export class LoginData{
    ruleForm: ILoginData = {
        username: "",
        password: ""
    }
}