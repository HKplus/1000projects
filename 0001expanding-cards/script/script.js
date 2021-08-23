// * 利用类"active"设置展开的卡片
// * 利用js设置被点击的卡片拥有"active"类,而其他的卡片没有

// 获取所有的卡片元素
const cards = document.querySelectorAll(".cards");

// 遍历每一个卡片 , 对他们执行函数
cards.forEach((card) => {
	// 以当前项为参数传入函数
	card.addEventListener("click", () => {
		// 添加鼠标单击的事件监听
		// 运行removeActiveClasses方法删除素有卡片的active类
		removeActiveClasses();
		// 给当前的点击项添加active类
		card.classList.add("active");
	});
});

function removeActiveClasses() {
	// 遍历所有的card 删除其中的active类
	cards.forEach((card) => {
		card.classList.remove("active");
	});
}
