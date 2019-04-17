<template>
    <div>
        <v-toolbar tabs style="z-index: 2;">

            <v-spacer />

            <slot name="close" />

            <v-tabs
                slot="extension"
                v-model="tabs"
                fixed-tabs
                color="transparent"
                grow
            >
                <v-tabs-slider></v-tabs-slider>
                <v-tab
                    ripple
                    v-for="(tab, i) in tabComponents"
                    :key="'tab' + i"
                >
                {{ tab.name }}
                </v-tab>
            </v-tabs>
        </v-toolbar>

        <v-tabs-items v-model="tabs">
            <v-tab-item
                v-for="(tab, i) in tabComponents"
                :key="'component' + i"
            >
                <component :is="tab.component" />
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>
<script>
import DeveloperTab from '@/components/DeveloperTab.vue';
import ProjectsTab  from '@/components/ProjectsTab.vue';
import SkillsTab    from '@/components/SkillsTab.vue';

export default {
    components: {
        'developer-tab' : DeveloperTab,
        'projects-tab' : ProjectsTab,
        'skills-tab' : SkillsTab,
    },
    data: () => ({
        tabs: null,
        tabComponents: [
            {
                'name': 'Developer',
                'component': 'developer-tab'
            },
            {
                'name': 'Projects',
                'component': 'projects-tab'
            },
            {
                'name': 'Skills',
                'component': 'skills-tab'
            }
        ]
    }),
}
</script>
