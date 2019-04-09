<template>
    <div class="card">
        <img 
            class  = "card-img-top pointer" 
            @click = "goToDetail( gamer.pid )" 
            :src   = gamer.avatar_256 
            :alt   = gamer.name
            :title = gamer.name />
        <div class="card-body">
            <h5 class="card-title pointer" @click="goToDetail( gamer.pid )">{{gamer.name}}</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">PVE Level: {{gamer.level_pve}}</li>
            <li class="list-group-item">DZ Level: {{gamer.level_dz}}</li>
            <li class="list-group-item">Gear Score: {{gamer.gearscore}}</li>
            <li class="list-group-item">Specialization: {{gamer.specialization}}</li>
            <li class="list-group-item">E Credits: {{gamer.ecredits}}</li>
            <li class="list-group-item">Total Kills: {{gamer.kills_total}}</li>
        </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'GamerCard',
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
</style>


