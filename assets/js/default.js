function setHtmlFontSize() {
  var html = document.documentElement;
  var vw = html.clientWidth;
  vw = vw <= 320 ? 320 : vw;
  vw = vw >= 750 ? 750 : vw;
  html.style.fontSize = vw / 7.5 + 'px';
}

//页面载入时 执行
document.addEventListener('DOMContentLoaded', setHtmlFontSize);

//页面更改大小时 执行
window.onresize = setHtmlFontSize;
var currentUrl = window.location;

var aLis = document.querySelectorAll('.nav-top li');

var dialogP = document.querySelectorAll('.nav-dialog-content p');
var url = window.location.href;

if (url.indexOf('about') !== -1) {
  navGetColor(1);
} else if (url.indexOf('product') !== -1) {
  navGetColor(2);
} else if (url.indexOf('contact') !== -1) {
  navGetColor(3);
} else {
  navGetColor(0);
}

//顶部菜单栏nav颜色改变
function navGetColor(item) {
  for (var i = 0; i < aLis.length; i++) {
    if (i == item) {
      aLis[item].className = 'active';
      dialogP[item].className = 'active';
    } else {
      aLis[i].className = '';
      dialogP[i].className = '';
    }
  }
}


var aboutbox = document.querySelectorAll('.about-content-box');

var aboutli = document.querySelectorAll('.about-content-nav li');

if (currentUrl.pathname === '/about/' && currentUrl.search) {
  for (var i = 0; i < aboutli.length; i++) {
    aboutli[i].classList.remove('active');
    aboutbox[i].classList.remove('show');
  }
  if (currentUrl.search.split('=')[1] === 'culture') {
    aboutli[0].classList.add('active');
    aboutbox[0].classList.add('show');
  } else if (currentUrl.search.split('=')[1] === 'background') {
    aboutli[1].classList.add('active');
    aboutbox[1].classList.add('show');
  }
}

//文化选项卡
for (var i = 0; i < aboutli.length; i++) {
  aboutli[i].index = i;
  aboutli[i].onclick = function () {
    for (var j = 0; j < aboutli.length; j++) {
      aboutli[j].classList.remove('active');
      aboutbox[j].classList.remove('show');
    }
    this.classList.add('active');
    aboutbox[this.index].classList.add('show');
  };
}


//时间线
var timeplane = document.querySelectorAll('.date-plane-item');
var timeline = document.querySelectorAll('.company-deve .time-line ul li b');
for (var i = 0; i < timeline.length; i++) {
  timeline[i].index = i;
  timeline[i].onclick = function () {
    for (var j = 0; j < timeline.length; j++) {
      timeline[j].parentElement.className = '';
      timeplane[j].classList.remove('show');
    }
    this.parentElement.className = 'active';
    timeplane[this.index].classList.add('show');
  };
}


var heycourse = document.querySelectorAll('.heyme-course-content');
var timelinetwo = document.querySelectorAll(
  '.about-content-box  .time-line ul li b'
);
for (var i = 0; i < timelinetwo.length; i++) {
  timelinetwo[i].index = i;
  timelinetwo[i].onclick = function () {
    for (var j = 0; j < timelinetwo.length; j++) {
      timelinetwo[j].parentElement.className = '';
      heycourse[j].classList.remove('show');
    }
    this.parentElement.className = 'active';
    heycourse[this.index].classList.add('show');
  };
}

//弹窗关闭
var navdialog = document.querySelector('.nav-dialog');
var navdialogcontent = document.querySelector('.nav-dialog-content');
document.querySelector('.nav-btn').onclick = function () {
  this.classList.contains('closed')
    ? this.classList.remove('closed')
    : this.classList.add('closed');
  if (navdialog.classList.contains('closed')) {
    navdialog.classList.remove('closed');
    document.body.style.overflow = 'hidden';
  } else {
    navdialog.classList.add('closed');
    document.body.style.overflow = 'auto';
  }
};
navdialog.addEventListener('click', function () {
  this.classList.add('closed');
  document.querySelector('.nav-btn').classList.remove('closed');
  document.body.style.overflow = 'auto';
});
navdialogcontent.addEventListener('click', function (ev) {
  ev.stopPropagation();
}); 

//顶部导航栏
var nav = document.getElementById('nav');
var docEl = document.documentElement;
var moveHight = 0;
window.matchMedia('(max-width: 767px)').matches
  ? (moveHight = 200)
  : (moveHight = 550);
window.onscroll = function () {
  var top = docEl.scrollTop;
  nav.classList[top >= moveHight ? 'add' : 'remove']('fixed-head');
};


//单击小箭头旋转
var joinitem = document.querySelectorAll('.join-job-cont-item-p');
var rotatei = document.querySelectorAll('.rotate');
for (var i = 0; i < joinitem.length; i++) {
  joinitem[i].index = i;
  joinitem[i].onclick = function () {
    if (rotatei[this.index].classList.contains('rotated')) {
      rotatei[this.index].classList.remove('rotated');
    } else {
      rotatei[this.index].classList.add('rotated');
    }
  };
}

if (currentUrl.pathname === '/product/') {
  var mulu = document.getElementsByClassName("menu-item")[0];
  var item = mulu.querySelectorAll("li");
  var content = document.getElementById("content-right");
  var title = content.querySelector("h3");
  title.innerHTML = item[0].innerHTML;
  var content_ul = content.querySelectorAll("ul");
  content_ul[0].classList.remove("hide");
  for(var i = 0; i < item.length; i++) {
    item[i].index = i;
    item[i].onclick = function() {
        title.innerHTML = this.innerHTML;
        for(var j = 0; j < content_ul.length; j++) {
            if(j === this.index) {
                content_ul[j].classList.remove("hide");
            }else {
                content_ul[j].classList.add("hide");
            }
        }
    }
  }
}