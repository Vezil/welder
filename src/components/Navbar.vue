<template>
    <div>
        <v-navigation-drawer v-model="drawer" app color="blue-grey darken-3" dark>
            <v-list dense>
                <router-link to="/">
                    <v-list-item class="menu_el">
                        <v-list-item-content>
                            <v-list-item-title class="tile">Home</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link to="/about">
                    <v-list-item class="menu_el">
                        <v-list-item-content>
                            <v-list-item-title class="tile">About</v-list-item-title>
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
export default {
    name: 'Navbar',
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
