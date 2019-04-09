<template>
    <div>

        <section class="page-title parallax-section">

            <div class="row-parallax-bg">
                <div class="parallax-wrapper" style="transform: translate3d(0px, 0px, 0px);">
                    <div class="parallax-bg" style="background-image: url(&quot;images/div-2-gamer-detail-bg.jpeg&quot;);">
                    
                    </div>
                </div>
                <div class="parallax-overlay"></div>
            </div>
            <div class="centrize">
                <div class="v-center">
                    <div class="container">
                        <div class="title text-center">
                            <h4 class="upper">Division 2 Statistics</h4>
                            <h1>{{gamerData.name}}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
            <div class="row">
                <div class="col-md-5">
                <div class="image-box">
                    <img src="images/div-2-stat-1.png" alt="">
                </div>
                </div>
                <div class="col-md-6 col-md-offset-1">
                <div class="title">
                    <h6>Fun Facts</h6>
                </div>
                <div class="section-content">
                    <!-- <p class="serif-font">Here are the stats for {{gamerData.name}}.</p>
                    <hr class="mt-50">
                    <div class="row">
                        <div class="col-sm-4">
                        <div class="counter align-left animated zoomOut" data-animation="zoomOut">
                            <div class="counter-content b-0">
                            <h5 class="alt-serif-font"><span class="number-count" :data-count="gamerData.level_pve">{{gamerData.level_pve}}</span></h5><span>PVE Level</span>
                            </div>
                        </div>
                        </div>
                        <div class="col-sm-4">
                        <div class="counter align-left animated zoomOut" data-animation="zoomOut" data-delay="300">
                            <div class="counter-content b-0">
                            <h5 class="alt-serif-font"><span class="number-count" :data-count="gamerData.level_dz">{{gamerData.level_dz}}</span></h5><span>DZ Level</span>
                            </div>
                        </div>
                        </div>
                        <div class="col-sm-4">
                        <div class="counter align-left animated zoomOut" data-animation="zoomOut" data-delay="600">
                            <div class="counter-content b-0">
                            <h5 class="alt-serif-font"><span class="number-count" :data-count="gamerData.level_pve">{{gamerData.gearscore}}</span></h5><span>Gear Score</span>
                            </div>
                        </div>
                        </div>
                    </div> -->
                    <TeamSoloTable :gamerData="gamerData" />
                </div>
                </div>
            </div>
            </div>
        </section>

      
    
    </div>
</template>
<script>
import axios from 'axios';
import TeamSoloTable from './TeamSoloTable';
export default {
    name: 'GamerDetail',
    components: {
        TeamSoloTable
    },
    data() {
        return {
            gamerData: {}
        }
    },
    created() {
        this.getGamerData( this.$route.params.pid );
    },
    methods: {
        getGamerData( pid ){
            axios
                .get( 'https://thedivisiontab.com/api/player.php?pid=' + pid )
                .then( response => this.gamerData = response.data );
        }
    }
}
</script>