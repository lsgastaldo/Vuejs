<template>
	<v-app>
		<ToolBar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer"></ToolBar>
		<SideMenu ref="drawer"></SideMenu>

			<v-content>
				<router-view></router-view>
			</v-content>

		<FooterBar></FooterBar>
  	</v-app>
</template>

<script>
import SideMenu from "@/components/SideMenu"
import ToolBar from "@/components/ToolBar"
import FooterBar from "@/components/FooterBar"

export default {
  name: "App",
  components: {
    SideMenu: SideMenu,
    ToolBar: ToolBar,
    FooterBar:FooterBar
  }
};
</script>
