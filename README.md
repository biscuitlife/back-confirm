# back-confirm

这是一个易用的点击返回确认弹框插件，不依赖jquery或者zepto的库。


## DEMO 
 [点击这里](https://derekchou.com/lab/back-firm/index.html) 可以体验.

## 使用方法

1.添加js关联:

    <script type="text/javascript" src="back-confirm.js"></script>

2.创建弹框div:
```javascript
	<div class="layer-rec-wp" id="bc_boxDiv">
		<a href="javascript:void(0)" id="bc_closeBox" class="layer-rec-close"></a>
		<h3 class="title">确定要离开？</h3>
		<div class="layer-rec-btns">
			<a href="javascript:void(0)" id="bc_mustLeave" class="btn-leave">仍要离开</a>
		</div>
	</div>
```

这里面需要定义的元素有：

    bc_boxDiv：弹框窗口（如果要让背景变暗，需要在其内部实现）
    
    bc_closeBox：关闭弹框的按钮
    
    bc_mustLeave：确定离开的按钮

