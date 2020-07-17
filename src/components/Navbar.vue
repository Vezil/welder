<template>
    <div>
        <v-navigation-drawer v-model="drawer" app color="blue-grey darken-3" dark>
            <div>
                <language-switcher />
            </div>

            <v-list dense>
                <router-link :to="`/${$i18n.locale}`">
                    <v-list-item class="menu_el">
                        <v-list-item-content>
                            <v-list-item-title class="tile">
                                {{
                                $t('nav.home')
                                }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link :to="`/${$i18n.locale}/about`">
                    <v-list-item class="menu_el">
                        <v-list-item-content>
                            <v-list-item-title class="tile">
                                {{
                                $t('nav.about_us')
                                }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app color="blue-grey darken-2" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Welder</v-toolbar-title>
        </v-app-bar>
    </div>
</template>
<script>
import LanguageSwitcher from './LanguageSwitcher';

export default {
    name: 'Navbar',

    components: {
        LanguageSwitcher
    },

    data() {
        return {
            drawer: null
        };
    }
};
</script>
<style>
.tile {
    font-size: 20px !important;
    margin-bottom: 30px;
}
.tile:first-child {
    margin-top: 20px;
}
.menu_el:hover {
    background-color: #263238;
}
</style>
