/**
 * 改变复选框的选中状态
 * @param {Object} obj
 */
function checkChange(obj) {
	// 获取选择框的选取状态并修改状态
	var ipt = obj.getElementsByTagName("input")[0];
	var check = ipt.checked;
	if (check) {
		ipt.checked = false;
		obj.className = "check-box";
	} else {
		ipt.checked = true;
		obj.className = "check-box checked-box";
	}
}

/**
 * 初始化值
 */
function initValue() {
	document.getElementById("username").value = "NavyLiu"; // 初始化用户名
	document.getElementById("password").value = "123456"; // 初始化密码框
	document.getElementById("sel_cate").value = "write"; // 初始化选择框
	initCheckbox(document.getElementById("chk_write"), true); // 初始化阅读复选框的选中状态
	initCheckbox(document.getElementById("chk_read"), false); // 初始化阅读复选框的选中状态
	initCheckbox(document.getElementById("chk_daze"), true); // 初始化发呆复选框的选中状态
	document.getElementById("check_switch").checked = true; // 开关的打开状态
	document.getElementById("woman").checked = true; // 性别选择
	document.getElementById("textarea").value = "我爱北京天安门，天安门上太阳升"; // 开关的打开状态
}


/**
 * 获取值
 */
function getValue() {
	var obj = {};
	obj.username = document.getElementById("username").value;
	obj.password = document.getElementById("password").value;
	
	// 获取下拉框中的文字
	var options = document.getElementById("sel_cate").options;
	var option_str = "";
	for (var i = 0; i < options.length; i++) {
		if (options[i].selected) {
			option_str = options[i].innerText;
			break;
		}
	}
	obj.sel_cate = option_str;
	
	// 获取复选框中选中项中的文字
	var checkes = document.getElementsByClassName("check-box");
	var check_str = "";
	for (var i = 0; i < checkes.length; i++) {
		var ipt = checkes[i].getElementsByTagName("input")[0];
		if (ipt.checked) {
			if (check_str == "") {
				check_str = ipt.value;
			} else {
				check_str += "," + ipt.value;
			}
		}
	}
	obj.check_box = check_str;
	
	// 获取性别的选中状态
	var sex = document.getElementsByName("sex");
	var sex_str = "";
	for (var i = 0; i < sex.length; i++) {
		if (sex[i].checked) {
			sex_str = sex[i].value;
			break;
		}
	}
	obj.sex = sex_str;
	
	obj.check_switch = document.getElementById("check_switch").checked ? "开" : "关";
	obj.textarea = document.getElementById("textarea").value;
	
	alert(JSON.stringify(obj));
}

/**
 * 模拟提交
 */
function submit(){
	var username = document.getElementById("username").value;
	if(username.length < 20){
		alert("用户名长度不能小于20位");
		return;
	}
	getValue();
}


/**
 * 初始化复选框的选中状态
 * @param {Object} obj 改变选中状态的元素对象
 * @param {Object} check  选中状态 true or false
 */
function initCheckbox(obj, check) {
	var ipt = obj.getElementsByTagName("input")[0];
	ipt.checked = check;
	if (check) {
		obj.className = "check-box checked-box";
	} else {
		obj.className = "check-box";
	}
}
