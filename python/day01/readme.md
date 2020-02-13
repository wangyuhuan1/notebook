# 基本语法

## 一、基本数据类型

```
//int,float,str,
```

```
type(a)  //输出一个数据的类型
```

```
//int float
a = 10 //int
b = 10.1 //float
```

```
//bool
a = True
```

##### 1-1 str

```
//'''换行
str = '''hello 
world '''
```

## 二、数据类型之间的相互转换

```python
//str() 其他类型转为字符串
a = 10
b = str(a)
print(type(b))
```

```
//int()  整数
a = "10"
b = int(a)
print(b)

```

```
//float() 
a = "10.323"
b = float(a)
print(b)

```

```
//bool()
a = 0
b = bool(a)
print(b)

```

## 三、常量

```
# 约定常量所有的字母大写
AGE = 30
```

## 四、给多个变量赋值

```
a,b,c = 1,2,3
print(c)
```

## 五、字符串的运算

#### 5-1 乘法

```
a = "hello"*3
print(a)
```

#### 5-2 读取字符串的某一位

```
a = "hello"
print(a[1])
```

#### 5-3 截取某一段

```
a = "hello"
print(a[1:3]) //截取不包含最后一位
print(a[1:]) //截取第二位之后的所有的字符
```

#### 5-4 format拼接字符串

```js
a = "http://www.baidu.com/{}"
url = a.format("223")
print(url)
```

## 六、列表list 

```
arr = [1,2,3]
print(type(arr))
//list
```

#### 6-1 len()

```python
arr = [1,2,3]
print(len(arr)) //3
```

#### 6-2  读取

```python
arr = [1,2,3]
print(arr[1:]) //2,3
```

#### 6-3 相加

```
a = [1,2,3]
b = [4,5]
c = a+b
print(c) //1,2,3,4,5
```

#### 6-4 乘法

```python
b = [4,5]
print(b*2)
```

#### 6-5 遍历

```
arr = ['html','css','javascript']
for key in arr:
    print(key)
```

#### 6-6 方法

```js
//append() 向后添加
arr = ['html','css','javascript']
arr.append("react")
print(arr)
// ['html','css','javascript','react']
```

```js
//insert(index,value)  //定点添加
arr = ['html','css','javascript']
arr.insert(0,"react")
print(arr)
// ['react','html','css','javascript']

```

```python
//remove()  删除
arr = ['html','css','javascript']
arr.remove("html")
print(arr)
//['css', 'javascript']
```

```
//index()  读取下标
arr = ['html','css','javascript']
print(arr.index("css")) //1
```

```
//count()  统计某一个值出现的次数
arr = ['html','css','javascript',"css"]
print(arr.count("css"))  //2
```

```
//pop()  从后删除
arr = ['html','css','javascript',"css"]
arr.pop()
print(arr)
```

#### 6-7 in | not in

```
arr = [1,2,3]
print(5 in arr)
print(5 not in arr)
```

#### 6-8 max|min

```python
arr = [1,2,3]
print(min(arr))
```



## 七、元组

```js
# 元组和列表不同的地方是,元组是不能修改的
arr = (1,2,3)
print(type(arr))
```

## 八、集合

```
# 集合 特点:里面值是不能重复的,是无序的
arr = {1,2,3}
print(3 not in arr)
```

1.并集

```python
a = {1,2,3,4}
b = {2,3,5}
print(a|b)
//{1, 2, 3, 4, 5}
```

2.交集

```python
a = {1,2,3,4}
b = {2,3,5}
print(a&b)
//{2, 3}
```

3.差集

```
a = {1,2,3,4}
b = {2,3,5,6}
print(a-b) 
//{1,4} 减去前一个相同的部分
```

#### 8-1 方法

```python
//add()
arr = {'html','css'}
arr.add("js")
print(arr)
//{'html', 'js', 'css'}

//update
arr = {'html','css','js'}
arr.update({"react"})
print(arr)
```

```
//remove()
arr = {'html','css','js'}
arr.remove("css")
print(arr)
//{'html', 'js'}
```

```
arr = {'html','css','js'}
arr.clear()
print(arr)
//set()
```

```
//pop()
arr = {'html','css','js'}
arr.pop()
print(arr)
```

九、逻辑运算

```
and  &&
or |
not !
```

```python
age =19
flag = True
# &
if age>18 and flag:
    print("net")
else:
    print("home")
```

```python
age =18
flag = True
if age>18 or flag:
    print("net")
else:
    print("home")
```

```python
flag = False
if not flag:
    print("home")
```

## 九、函数

#### 9-1 定义一个函数

```python
def test():
    print("hello world")
test()
```

```python
def test():
    return "hello world"
print(test())
```

#### 9-2 默认参数

```python
def test(a=2,b=3):
    print(a+b)
test() //5
test(b=6) //8
```

## 十、创建一个pipenv的开发环境

#### 10-1 全局安装pipenv

```
pip install pipenv
```

#### 10-2 创建一个pipenv的开发环境

```
pipenv install
```

激活虚拟环境

```
pipenv shell
```

