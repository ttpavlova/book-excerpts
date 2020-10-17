let app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight, view: document.getElementById("canvas-one")});

document.body.appendChild(app.view);

let img = new PIXI.Sprite.from("http://127.0.0.1:8000/static/img/header.jpg");
img.width = window.innerWidth;
img.height = window.innerHeight;
app.stage.addChild(img);

deptMap = new PIXI.Sprite.from("http://127.0.0.1:8000/static/img/header-9-map.jpg");
app.stage.addChild(deptMap);

displacementFilter = new PIXI.filters.DisplacementFilter(deptMap);
app.stage.filters = [displacementFilter];

window.onmousemove = function(e) {
    displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 180;
    displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 180;
};

deptMap.width = window.innerWidth;
deptMap.height = window.innerHeight;