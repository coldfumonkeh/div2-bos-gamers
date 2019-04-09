<template>

    <div>
        
        <section class="page-title parallax-section">
            <div class="row-parallax-bg">
                <div class="parallax-wrapper">
                    <div class="parallax-bg">
                        <img src="images/team-stats-header.jpg" alt="The Division 2">
                    </div>
                </div>
                <div class="parallax-overlay"></div>
            </div>
            <div class="centrize">
                <div class="v-center">
                    <div class="container">
                        <div class="title text-center">
                            <h4 class="upper">Brotherhood of Steel</h4>
                            <h1>Team Stats</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <TeamStatsTable :gamerData="gamerData" />

    </div>

</template>

<script>
import TeamStatsTable from './TeamStatsTable.vue';
import axios from 'axios';
export default {
  name: 'TeamStats',
  components: {
    TeamStatsTable
  },
  props: {
    msg: String
  },
  data(){
    return {
      pids: [
        '52fc0217-88e8-4f2e-9763-5d1da29ab6df', // xchukx
        'a16ba01c-2115-47f6-ba5f-b70af8e7cc14', // coldfumonkeh
        '97476967-4a4d-4841-8694-7df5cca12564', // RMDavis
        '37908b65-01d7-4f40-9608-b601fce2d9ae', // SJ Raw
        '4f666efb-0fca-49fe-95f0-9e4872d9ff4d', // Gx jOeLzZz Gx
        // '947e4a89-0554-4162-b022-2fa26af4cd51', // Little RY SE
      ],
      gamerData: []
    }
  },
  created() {
    this.pidLoop();
  },

  methods: {

    pidLoop() {
      var self = this;
      var i;
      for( i = 0; i < self.pids.length; i++ ){
        this.getGamerData( self.pids[ i ] );
      }
    },

    getGamerData( pid ){
      axios
        .get( 'https://thedivisiontab.com/api/player.php?pid=' + pid )
        .then( response => this.gamerData.push( response.data ) );
    }

  }
}
</script>