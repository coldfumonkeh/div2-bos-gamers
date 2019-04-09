<template>

    <div 
        class          = "team-member pointer mb-40" 
        data-animation = "fadeInUp" 
        data-delay     = "900">
        <div class="team-image">
            <img 
                @click = "goToDetail( gamer.pid )" 
                :src   = gamer.avatar_256 
                :alt   = gamer.name
                :title = gamer.name />
        </div>
        <div class="team-overlay" @click = "goToDetail( gamer.pid )">
            <div class="team-info">
            <h4 @click = "goToDetail( gamer.pid )">{{gamer.name}}</h4>
            <span>PVE Level: {{gamer.level_pve}}</span><br />
            <span>DZ Level: {{gamer.level_dz}}</span>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: 'HomePageGamerCard',
    props: {
        gamer: Object
    },
    methods: {
        goToDetail( pid ){
            this.$router.push( { name: 'gamerDetail', params: { pid: pid } } )
        }
    }
}
</script>
<style>
    .pointer {
        cursor: pointer;
    }
    .mb-40 { margin-bottom: 40px; }
</style>


