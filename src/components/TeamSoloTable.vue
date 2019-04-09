<template>

    <table class="table">
        <tbody>
            <tr>
                <td>Gear Score</td>
                <td>{{gamerData.gearscore}}</td>
            </tr>
            <tr>
                <td>PVE Level</td>
                <td>{{gamerData.level_pve}}</td>
            </tr>
            <tr>
                <td>DZ Level</td>
                <td>{{gamerData.level_dz}}</td>
            </tr>
            <tr>
                <td>Specialization</td>
                <td>{{gamerData.specialization}}</td>
            </tr>
            <tr>
                <td>E Credits</td>
                <td>{{gamerData.ecredits}}</td>
            </tr>
            <tr>
                <td>Headshots</td>
                <td>{{gamerData.headshots}}</td>
            </tr>
            <tr>
                <td>Looted</td>
                <td>{{gamerData.looted}}</td>
            </tr>
            <tr>
                <td>Total Kills</td>
                <td>{{gamerData.kills_total}}</td>
            </tr>
            <tr>
                <td>NPC Kills</td>
                <td>{{gamerData.kills_npc}}</td>
            </tr>
            <tr>
                <td>PVP Kills</td>
                <td>{{gamerData.kills_pvp}}</td>
            </tr>
            <tr>
                <td>Total Time Played</td>
                <td>{{gamerData.timeplayed_total}}</td>
            </tr>
            <tr>
                <td>Time Played DZ</td>
                <td>{{gamerData.timeplayed_dz}}</td>
            </tr>
            <tr>
                <td>Time Played PVE</td>
                <td>{{gamerData.timeplayed_pve}}</td>
            </tr>
            <tr>
                <td>Time Played PVP</td>
                <td>{{gamerData.timeplayed_pvp}}</td>
            </tr>
            <tr>
                <td>Time Played Rogue</td>
                <td>{{gamerData.timeplayed_rogue}}</td>
            </tr>
            <tr>
                <td>Max. Time Rogue</td>
                <td>{{gamerData.maxtime_rogue}}</td>
            </tr>
            <tr>
                <td>Kills (bleeding)</td>
                <td>{{gamerData.kills_bleeding}}</td>
            </tr>
            <tr>
                <td>Kills (shocked)</td>
                <td>{{gamerData.kills_shocked}}</td>
            </tr>
            <tr>
                <td>Kills (burning)</td>
                <td>{{gamerData.kills_burning}}</td>
            </tr>
            <tr>
                <td>Kills (ensnare)</td>
                <td>{{gamerData.kills_ensnare}}</td>
            </tr>
            <tr>
                <td>Kills (headshot)</td>
                <td>{{gamerData.kills_headshot}}</td>
            </tr>
            <tr>
                <td>Kills (skill)</td>
                <td>{{gamerData.kills_skill}}</td>
            </tr>
            <tr>
                <td>Kills (turret)</td>
                <td>{{gamerData.kills_turret}}</td>
            </tr>
            <tr>
                <td>Kills (PVP Named Bosses)</td>
                <td>{{gamerData.kills_pvp_namedbosses}}</td>
            </tr>
            <tr>
                <td>Kills (PVP Elite Bosses)</td>
                <td>{{gamerData.kills_pvp_elitebosses}}</td>
            </tr>
            <tr>
                <td>Kills (PVP DZ Total)</td>
                <td>{{gamerData.kills_pvp_dz_total}}</td>
            </tr>
            <tr>
                <td>Kills (PVP DZ Rogue)</td>
                <td>{{gamerData.kills_pvp_dz_rogue}}</td>
            </tr>
            <tr>
                <td>Kills (PVE Hyenas)</td>
                <td>{{gamerData.kills_pve_hyenas}}</td>
            </tr>
            <tr>
                <td>Kills (PVE Outcasts)</td>
                <td>{{gamerData.kills_pve_outcasts}}</td>
            </tr>
            <tr>
                <td>Kills (PVE Black Tusk)</td>
                <td>{{gamerData.kills_pve_blacktusk}}</td>
            </tr>
            <tr>
                <td>Kills (PVE True Sons)</td>
                <td>{{gamerData.kills_pve_truesons}}</td>
            </tr>
            <tr>
                <td>Kills (PVE DZ Hyenas)</td>
                <td>{{gamerData.kills_pve_dz_hyenas}}</td>
            </tr>
            <tr>
                <td>Kills (PVE DZ Outcasts)</td>
                <td>{{gamerData.kills_pve_dz_outcasts}}</td>
            </tr>
            <tr>
                <td>Kills (PVE DZ Black Tusk)</td>
                <td>{{gamerData.kills_pve_dz_blacktusk}}</td>
            </tr>
            <tr>
                <td>Kills (PVE DZ True Sons)</td>
                <td>{{gamerData.kills_pve_dz_truesons}}</td>
            </tr>
            <tr>
                <td>Kills (pistol)</td>
                <td>{{gamerData.kills_wp_pistol}}</td>
            </tr>
            <tr>
                <td>Kills (grenade)</td>
                <td>{{gamerData.kills_wp_grenade}}</td>
            </tr>
            <tr>
                <td>Kills (SMG)</td>
                <td>{{gamerData.kills_wp_smg}}</td>
            </tr>
            <tr>
                <td>Kills (shotgun)</td>
                <td>{{gamerData.kills_wp_shotgun}}</td>
            </tr>
            <tr>
                <td>Kills (rifles)</td>
                <td>{{gamerData.kills_wp_rifles}}</td>
            </tr>
        </tbody>
    </table>

</template>

<script>
export default {
    name: 'TeamSoloTable',
    props: {
        gamerData: Object
    },
    created() {
        console.log( this.gamerData );
    }
}
</script>