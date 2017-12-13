AFRAME.registerComponent('transparent', {
	schema: { default: true },
	init: function() {
		this.el.addEventListener('model-loaded', this.update.bind(this));
	}
	update: function () {
		this.el.object3D.traverse( function(obj) {
			if (obj instanceof THREE.Mesh) {
				if(obj.material != undefined)
					obj.material.transparent = this.data;
			}
		}
	}
});
