# 图像识别与卷积神经网络

## 网络结构

### 卷积层

如果输入层的矩阵维数是32\*32\*3, 第一层卷积层使用尺寸为5\*5,深度为16的过滤器, 卷积层的参数个数为5\*5\*3\*16+16 = 1216个.  
以下程序实现了一个卷积层的前向传播过程：

```python
#通过tf.get_variable的方式创建过滤器的权重变量和偏置项变量.
#卷积层的参数个数只和过滤器的尺寸, 深度以及当前层结点矩阵的深度有关.
filter_weight = tf.get_variable(
    'weights',[5,5,3,16],
    initializer = tf.truncated_normal_initializer(stddev=0.1))
#前两个维度代表过滤器的尺寸, 第三个维度表示当前层的深度, 第四个维度表示过滤器的深度.
#和卷积层的权重类似, 当前层矩阵位置的偏置项也是共享的, 因此总共有下一层深度个不同的偏置项.
biases = tf.get_variable('biases',[16],initializer = tf.constant_initializer(0,1))

#tf.nn.conv2d: 第一个参数:当前层的节点矩阵(四维, 后面三个维度对应一个节点矩阵,第一维对应一个输入
#batch); 第二个参数提供了卷积层的权重, 第三个参数为不同维度上的步长(长度为4的数组,第一维和最后一
#维的数字要求一定是1, 这是因为步长只对长和宽有效). 第四个参数是padding的方法, TensorFlow提供
#SAME(添加全0填充)或是VALID(不添加)两种选择.
conv = tf.nn.conv2d(
    input,filter_weight,strides=[1,1,1,1],padding='SAME')

#tf.nn.bias_add提供了一个方便的函数给每一个节点加上偏置项.
bias = tf.nn.bias_add(conv,biases)

#计算结果通过ReLU激活函数去完成线性化.
activated_conv = tf.nn.relu(bias)
```

### 池化层

池化层可以非常有效地缩小矩阵的尺寸, 从而减少最后全连接层中的参数, 使用池化层既可以加快计算速度也有防止过拟合的作用.其前向传播算法如下:

```python
#tf.nn.max_pool实现了最大池化层的卡想传播过程,其参数和tf.nn.conv2d函数类似.
#ksize 提供了过滤器的尺寸, strides提供了步长信息, padding提供了是否使用全0填充.
pool = tf.nn.max_pool(activated_conv,ksize=[1,3,3,1],strides=[1,2,2,1],padding = 'SAME')

```

ksize是一个长度为4的一维数组,但是这个数组的第一个和最后一个数必须是1, 这意味着池化层的过滤器是不可以跨不同输入样例或者节点矩阵深度的. 在实际应用中使用的最多的池化层过滤器尺寸为[1,2,2,1]或者[1,3,3,1].

tf.nn.max_pool函数的第三个参数为步长, 第一维和最后一维只能为1, 意味着在Tensorflow中,池化层不能减少矩阵的深度或者输入样例的个数. (也就是说,如果那两个不设为1, 就可以减少吗?). 当然,tf.nn.max_pool也可以换为tf.nn.avg_pool, 即调用格式相同.

## 经典卷积网络模型

后面先介绍LeNet-5模型, 再介绍Inception模型.

### LeNet-5模型

下面是LeNet-5模型每一层的结构 

| Layer | 输入 |过滤器尺寸 | 输出 | 参数个数
| :----- | :---------- |:------- | :--------- |:-------
| 卷积层 | 32\*32\*1 | 5\*5\*6 | 28\*28\*6 | (5\*5\*1\*6+6)=156
| 池化层 | 28\*28\*6 | 2\*2 | 14\*14\*6 | None
| 卷积层 | 14\*14\*6 | 5\*5\*16 | 10\*10\*16 | 5\*5\*6\*16+16 = 2416
| 池化层 | 10\*10\*16 | 2\*2| 5\*5\*16 | None
|全连接层| 5\*5\*16 | 5\*5\*120 | 120 | 5\*5\*16\*120 = 48120
|全连接层| 120 | | 84 | 120\*84+84=10164
|全连接层| 84 | | 10 | 84*10+10=850

### Inception

使用不同尺寸的过滤器处理输入矩阵, 并将处理得到的结果矩阵拼接成一个更深的矩阵. 可以用TensorFlow-Slim实现CNN:

```python
slim = tf.contrib.slim
#有三个参数是必填的,输入节点矩阵, 卷积层过滤器的深度, 过滤器的尺寸. 可选的参数有
#过滤器移动的步长, 是否使用全零填充,激活函数的选择, 以及变量的命名空间等.
net = slim.conv2d(input,32,[3,3])
```

完整的Inception-v3模型很长, 这里只实现该结构中相对复杂的一个Inception模块:

```python
slim = tf.contrib.slim
#slim.arg_scope函数可以用于设置默认的参数取值. slim.arg_scope函数的第一个参数是
#一个函数列表, 列表中的函数将使用默认的参数取值.
with slim.arg_scope([slim.conv2d,slim.max_pool2d,slim.avg_pool2d],stride=1,padding='Valid'):
    net = 上一层输出节点矩阵
    #给Inception模块中每一条路径声明一个命名空间
    with tf.variable_scope('Mixed_7c'):
        ...
        #第二条路径
        with tf.variable_scope('Brance_2'):
            branch_2 = slim.conv2d(net,448,[1,1],scope='Conv2d_0a_1x1')
            branch_2 = slim.conv2d(brance_2,384,[3,3],scope='Conv2d_0b_3x3')
            branch_2 = tf.concat(3,[slim.conv2d(branch_2,384,[1,3],scope='Conv2d_0c_1x3'),\
                                    slim.conv2d(branch_2,384,[3,1],scope='Conv2d_0c_3x1')])
```

## 卷积神经网络迁移学习

根据迁移学习的理论,可以保留训练好的Inception-v3模型中所有卷积层的参数,只是替换最后一层卷积层.在最后这一层全连接层之前的网络层称之为瓶颈层(bottleneck). 具体训练代码实践就不贴了.


