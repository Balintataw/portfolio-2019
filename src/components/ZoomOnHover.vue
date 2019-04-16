<template>
    <div 
        class="zoom-on-hover" 
        @mousemove="move($event)" 
        @mouseenter="zoom()"
        @mouseleave="unzoom()">
        <!-- project images class is defined in ProjectsTab.vue -->
		<img class="normal project-images" ref="normal" :src="imgNormal" :alt="imgAlt" /> 
		<img class="zoom project-images" ref="zoom" :src="imgZoom || imgNormal" :alt="imgAlt" />
    </div>
</template>
<script>
export default {
	props:{
        imgNormal: {
            type: String,
            required: true
        },
        imgZoom: {
            type: String,
            required: false
        },
        scale: {
            type: Number,
            default: 1
        },
        disabled: {
            type: Boolean,
            default: false
        },
        imgAlt: {
            type: String,
            required: true
        }
    },
	data() {
		return {
			scaleFactor: 1,
			resizeCheckInterval: null
		}
	},
	methods: {
		zoom() {
			if (this.disabled) return
			this.$refs.zoom.style.opacity = 1
			this.$refs.normal.style.opacity = 0
		},
		unzoom() {
			if (this.disabled) return
			this.$refs.zoom.style.opacity = 0
			this.$refs.normal.style.opacity = 1
		},
        pageOffset(el) {
            // -> {x: number, y: number}
            // get the left and top offset of a dom block element 
            // the <div> wrapping the images in this case
            var rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                console.log("RECT", rect)
                console.log("RECT1", scrollLeft)
                console.log("RECT2", scrollTop)

            return {
                y: rect.top + scrollTop,
                x: rect.left + scrollLeft
            }
        },
		move(event) {
			if (this.disabled) return
			var offset = this.pageOffset(this.$el)
			var zoom = this.$refs.zoom
			var normal = this.$refs.normal
			var relativeX = event.clientX - offset.x + window.pageXOffset
			var relativeY = event.clientY - offset.y + window.pageYOffset
			var normalFactorX = relativeX / normal.offsetWidth
			var normalFactorY = relativeY / normal.offsetHeight
			var x = normalFactorX * (zoom.offsetWidth * this.scaleFactor - normal.offsetWidth)
			var y = normalFactorY * (zoom.offsetHeight * this.scaleFactor - normal.offsetHeight)
			zoom.style.left = -x + "px"
			zoom.style.top = -y + "px"
		},
		initEventLoaded() {
			// emit the "loaded" event if all images have been loaded
			var promises = [this.$refs.zoom, this.$refs.normal].map(function (image) {
				return new Promise(function (resolve, reject) {
					image.addEventListener("load", resolve)
					image.addEventListener("error", reject)
				})
			})
			Promise.all(promises).then(() => {
				this.$emit("loaded")
			})
		},
		initEventResized() {
			var normal = this.$refs.normal
			var previousWidth = normal.offsetWidth
			var previousHeight = normal.offsetHeight
			this.resizeCheckInterval = setInterval(() => {
				if ((previousWidth != normal.offsetWidth) || (previousHeight != normal.offsetHeight)) {
					previousWidth = normal.offsetWidth
					previousHeight = normal.offsetHeight
					this.$emit("resized", {
						width: normal.width,
						height: normal.height,
						fullWidth: normal.naturalWidth,
						fullHeight: normal.naturalHeight
					})
				}
			}, 1000)
		}
	},
	mounted() {
		if (this.scale) {
			this.scaleFactor = parseFloat(this.scale)
			this.$refs.zoom.style.transform = `scale(${this.scaleFactor})`
		}
		this.initEventLoaded()
		this.initEventResized()
	},
	updated() {
		this.initEventLoaded()
	},
	beforeDestroy() {
		this.resizeCheckInterval && clearInterval(this.resizeCheckInterval)
	}
}
</script>
<style scoped>
.project-images {
    max-height: 200px;
    /* width: 96%; */
    max-width: 300px;
    /* margin-bottom: 10px; */
    /* margin-right: 10px; */
    /* margin-left: 10px; */
}
.zoom-on-hover {
    position: relative;
    overflow: hidden;
}
.zoom-on-hover .normal {
    width: 100%;
}
.zoom-on-hover .zoom {
    position: absolute;
    opacity: 0;
    transform-origin: top left;
}
</style>