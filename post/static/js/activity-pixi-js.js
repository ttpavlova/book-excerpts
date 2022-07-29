// create the application
let app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight, view: document.getElementById("canvas-one")});

// add the view to the DOM
document.body.appendChild(app.view);

// the original image
let img = new PIXI.Sprite.from("/static/img/background_darker_gradient.jpg");
img.width = window.innerWidth;
img.height = window.innerHeight;
// add display object
app.stage.addChild(img);

// depth map is an image that contains information relating to the distance of the surfaces of scene objects from a viewpoint
let depthMap = new PIXI.Sprite.from("/static/img/background-map.jpg");
depthMap.width = window.innerWidth;
depthMap.height = window.innerHeight;
app.stage.addChild(depthMap);

// add the filter that performs a displacement of an object
let displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
app.stage.filters = [displacementFilter];

// the scale of the displacement
window.onmousemove = function(e) {
    displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 180;
    displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 180;
};