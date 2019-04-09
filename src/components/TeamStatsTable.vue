<template>

    <section class="last-section">

        <div class="container">

            <div class="row">

                <div class="col-md-12 mb-50">

                    <table class="table">
                        <thead>
                            <tr>
                                <th>&nbsp;</th>
                                <th v-for="gamer in gamerData" :key="gamer.pid" 
                                    @click = "goToDetail( gamer.pid )"
                                    class="pointer">
                                    {{gamer.name}}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Gear Score</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.gearscore}}</td>
                            </tr>
                            <tr>
                                <td>PVE Level</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.level_pve}}</td>
                            </tr>
                            <tr>
                                <td>DZ Level</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.level_dz}}</td>
                            </tr>
                            <tr>
                                <td>Specialization</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.specialization}}</td>
                            </tr>
                            <tr>
                                <td>E Credits</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.ecredits}}</td>
                            </tr>
                            <tr>
                                <td>Headshots</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.headshots}}</td>
                            </tr>
                            <tr>
                                <td>Looted</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.looted}}</td>
                            </tr>
                            <tr>
                                <td>Total Kills</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_total}}</td>
                            </tr>
                            <tr>
                                <td>NPC Kills</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_npc}}</td>
                            </tr>
                            <tr>
                                <td>PVP Kills</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_pvp}}</td>
                            </tr>
                            <tr>
                                <td>Total Time Played</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.timeplayed_total}}</td>
                            </tr>
                            <tr>
                                <td>Time Played DZ</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.timeplayed_dz}}</td>
                            </tr>
                            <tr>
                                <td>Time Played PVE</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.timeplayed_pve}}</td>
                            </tr>
                            <tr>
                                <td>Time Played PVP</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.timeplayed_pvp}}</td>
                            </tr>
                            <tr>
                                <td>Time Played Rogue</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.timeplayed_rogue}}</td>
                            </tr>
                            <tr>
                                <td>Max. Time Rogue</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.maxtime_rogue}}</td>
                            </tr>
                            <tr>
                                <td>Kills (bleeding)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_bleeding}}</td>
                            </tr>
                            <tr>
                                <td>Kills (shocked)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_shocked}}</td>
                            </tr>
                            <tr>
                                <td>Kills (burning)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_burning}}</td>
                            </tr>
                            <tr>
                                <td>Kills (ensnare)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_ensnare}}</td>
                            </tr>
                            <tr>
                                <td>Kills (headshot)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_headshot}}</td>
                            </tr>
                            <tr>
                                <td>Kills (skill)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_skill}}</td>
                            </tr>
                            <tr>
                                <td>Kills (turret)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_turret}}</td>
                            </tr>
                            <tr>
                                <td>Kills (PVP Named Bosses)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_pvp_namedbosses}}</td>
                            </tr>
                            <tr>
                                <td>Kills (PVP Elite Bosses)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_pvp_elitebosses}}</td>
                            </tr>
                            <tr>
                                <td>Kills (PVP DZ Total)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_pvp_dz_total}}</td>
                            </tr>
                            <tr>
                                <td>Kills (PVP DZ Rogue)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_pvp_dz_rogue}}</td>
                            </tr>
                            <tr>
                                <td>Kills (PVE Hyenas)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_pve_hyenas}}</td>
                            </tr>
                            <tr>
                                <td>Kills (PVE Outcasts)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_pve_outcasts}}</td>
                            </tr>
                            <tr>
                                <td>Kills (PVE Black Tusk)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_pve_blacktusk}}</td>
                            </tr>
                            <tr>
                                <td>Kills (PVE True Sons)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_pve_truesons}}</td>
                            </tr>
                            <tr>
                                <td>Kills (PVE DZ Hyenas)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_pve_dz_hyenas}}</td>
                            </tr>
                            <tr>
                                <td>Kills (PVE DZ Outcasts)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_pve_dz_outcasts}}</td>
                            </tr>
                            <tr>
                                <td>Kills (PVE DZ Black Tusk)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_pve_dz_blacktusk}}</td>
                            </tr>
                            <tr>
                                <td>Kills (PVE DZ True Sons)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_pve_dz_truesons}}</td>
                            </tr>
                            <tr>
                                <td>Kills (pistol)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_wp_pistol}}</td>
                            </tr>
                            <tr>
                                <td>Kills (grenade)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_wp_grenade}}</td>
                            </tr>
                            <tr>
                                <td>Kills (SMG)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_wp_smg}}</td>
                            </tr>
                            <tr>
                                <td>Kills (shotgun)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_wp_shotgun}}</td>
                            </tr>
                            <tr>
                                <td>Kills (rifles)</td>
                                <td v-for="gamer in gamerData" :key="gamer.pid">{{gamer.kills_wp_rifles}}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
        
            </div>

        </div>

    </section>

</template>

<script>
export default {
    name: 'TeamStatsTable',
    props: {
        gamerData: Array
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