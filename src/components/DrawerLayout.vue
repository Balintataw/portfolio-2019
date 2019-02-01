<template>
    <drawer-nav-bar>
        <template slot="close"><slot name="close"></slot></template>
    </drawer-nav-bar>
</template>
<script>
import DrawerLayoutToolbar from '@/components/DrawerLayout--nav.vue';

export default {
    components: {
        'drawer-nav-bar' : DrawerLayoutToolbar,
    }    
}
</script>

