document.getElementById('loginForm').onsubmit = function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  if(username == 'betauser' && password == 'neice_ohm123' || username == 'h' && password == 'hhpwd123') {
    // 账号密码正确后弹窗
	alert('用户'+username+'您好！登录成功！请注意：您的账号是内测账号。正在重定向到嫦娥一号介绍页......');
	// 登录成功后设置标志 
	localStorage.setItem('isLoggedIn', 'true');
    // 登录成功后跳转到指定页面
    window.location.href = './cexl/change1.html';
  } else {
    alert('账号或密码错误！');
  }
};