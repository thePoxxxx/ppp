AFRAME.registerComponent('transparent', {
	schema: { default: true },
	init: function() {
		console.log("TRANSPARENT COMPONENT");
		this.el.addEventListener('model-loaded', this.update.bind(this));
	},
	update: function () {
		this.el.object3D.traverse( function(obj) {
			console.log(obj);
			if (obj instanceof THREE.Mesh) {
				if(obj.material != undefined){
					obj.material.transparent = true;
					obj.material.side = THREE.DoubleSide;
					obj.material.opacity = 1;
				}
			}
		});
	}
});
