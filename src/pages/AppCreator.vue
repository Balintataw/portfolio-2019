<template>
    <v-layout column justify-center fill-height>
        <v-layout>
            <v-flex xs12>
                <v-layout justify-center>
                    <h3>App Creator</h3>
                </v-layout>
            </v-flex>
        </v-layout>
        <v-flex xs12>
            <v-layout justify-center>
                <v-flex xs6>
                    <v-layout justify-center>
                        <div class="phone-container">
                        <div 
                            class="designer-container" 
                            :style="`background-color: ${color}; background: ${color} url(${uploadedFile}) no-repeat center/cover`">
                            <vue-draggable-resizable 
                                :x="x"
                                :y="y"
                                :w="306" 
                                :h="100" 
                                @dragging="onDrag" 
                                @resizing="onResize" 
                                class-name-handle="my-handle-class"
                                :handles="['tl','tm','tr','mr','br','bm','bl','ml']"
                                :parent="true"
                            >
                                <p class="text-xs-center" :style="`font-size: ${headerFontSize}px`">{{ headerText }}</p>
                            </vue-draggable-resizable>
                        </div>
                        </div>
                    </v-layout>
                </v-flex>
                <v-flex xs6>
                    <v-text-field
                        v-model="color">
                    </v-text-field>
                    <v-layout>
                        <v-text-field
                            v-model="headerText">
                        </v-text-field>
                        <v-text-field
                            type="number"
                            v-model="headerFontSize">
                        </v-text-field>
                    </v-layout>
                    <input 
                        type="file" 
                        accept="image/*,.png,.jpg" 
                        @change="filesChange($event)"
                    >
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>
<script>
import VueDraggableResizable from 'vue-draggable-resizable';
import 'vue-draggable-resizable/dist/VueDraggableResizable.css';

export default {
    components: {
        'vue-draggable-resizable': VueDraggableResizable,
    },
    data: () => ({
        color: '#FFFFFF',
        headerText: 'My App Title',
        headerFontSize: 18,
        imageSrc: null,
        uploadedFile: null,
        width: 307,
        height: 200,
        x: 0,
        y: 0
    }),
    methods: {
        onResize: function (x, y, width, height) {
            this.x = x
            this.y = y
            this.width = width
            this.height = height
        },
        onDrag: function (x, y) {
            this.x = x
            this.y = y
        },
        filesChange(event) {
            const image = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e =>{
                this.uploadedFile = e.target.result;
                console.log(this.uploadedFile);
            };
        },
    }
}
</script>
<style lang="scss">
.phone-container {
    position: relative;
    background: url('/assets/creator-images/phone_blank.png') no-repeat center/cover;
    height: 800px;
    width: 400px;
}
.designer-container {
    position: absolute;
    top: 117px;
    left: 45px;
    // display: flex;
    // justify-content: center;
    // align-items: space-between;
    border: 1px solid black;
    height: 555px; // iphone8 dimensions
    width: 308px;
}
.my-handle-class {
    position: absolute;
    background-color: pink;
    border: 1px solid black;
    border-radius: 50%;
    height: 14px;
    width: 14px;
    box-sizing: border-box;
    -webkit-transition: all 300ms linear;
    -ms-transition: all 300ms linear;
    transition: all 300ms linear;
}
.my-handle-class-tl {
  top: -14px;
  left: -14px;
  cursor: nw-resize;
}
.my-handle-class-br {
  bottom: -14px;
  right: -14px;
  cursor: nw-resize;
}
</style>

