<template>
    <nav id="navbar">
        <div class="navbar-wrapper">
            <div class="container">
            <div class="menu-extras">
                <div class="menu-item">
                <div class="header-socials">
                    <!--
                        <ul>
                            <li><a target="_blank" href="#"><i class="hc-facebook"></i></a>
                            </li>
                            <li><a target="_blank" href="#"><i class="hc-twitter"></i></a>
                            </li>
                            <li><a target="_blank" href="#"><i class="hc-instagram"></i></a>
                            </li>
                        </ul>
                    -->
                </div>
                </div>
                <div class="menu-item">
                <div class="nav-toggle">
                    <a class="menu-toggle">
                    <div class="hamburger">
                        <div class="hamburger-box">
                        <div class="hamburger-inner"></div>
                        </div>
                    </div>
                    </a>
                </div>
                </div>
            </div>
            <div id="navigation">
                <ul class="navigation-menu nav">
                    <li class="menu-item">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/team-stats">Team Stats</router-link>
                    </li>
                </ul>
            </div>
            </div>
        </div>
</nav>
</template>
<script>
export default {
  name: 'TopNavigation'
}
</script>