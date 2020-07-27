<template>
    <div class="changer row">
        <v-select v-model="$i18n.locale" :items="languages" label="Change Language" class="col-8"></v-select>

        <div class="col-2">
            <img :src="flag" :alt="$i18n.locale" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return { languages: ['pl', 'en'] };
    },

    computed: {
        flag() {
            return require(`../assets/${this.$i18n.locale}.png`);
        }
    }
};
</script>
<style>
.changer {
    padding: 20px;
    text-transform: uppercase;
}
.v-select-list .v-list-item__title {
    text-transform: uppercase;
}
</style>