<template>
    <div class="changer">
        <v-select
            v-model="$i18n.locale"
            :items="languages"
            label="Change Language"
            :append-icon="false"
        ></v-select>
    </div>
</template>

<script>
export default {
    data() {
        return { languages: ['pl', 'en'] };
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