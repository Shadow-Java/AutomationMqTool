<template>
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="1-2" theme="primary" width="auto" :class="menuitemClasses">
                    <div class="logo-con" style="width:60px">
                        <a href="/" class="router-link-active">
                            <img src="../assets/rabbitMqLogo.jpg" width="200px" height="64px">
                        </a>
                    </div>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="md-desktop" color="primary" />
                            数据源管理
                        </template>
                        <MenuItem name="1-1">
                            <Icon type="ios-navigate"></Icon>
                            <router-link to="/Agent">客户端</router-link>
                        </MenuItem>
                        <MenuItem name="1-2">
                            <Icon type="ios-search"></Icon>
                            <router-link to="/VirtualMachine">虚拟机</router-link>
                        </MenuItem>
                        <MenuItem name="1-3">
                            <Icon type="ios-settings"></Icon>
                            <router-link to="/Storage">存储</router-link>
                        </MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="logo-dribbble" color="primary" />
                            文章管理
                        </template>
                        <MenuItem name="2-1">
                            <Icon type="ios-navigate"></Icon>
                            <router-link to="/TechnicalArticles">技术类</router-link>
                        </MenuItem>
                        <MenuItem name="2-2">
                            <Icon type="ios-search"></Icon>
                            <router-link to="/Essays">杂文类</router-link>
                        </MenuItem>
                        <MenuItem name="2-3">
                            <Icon type="ios-settings"></Icon>
                            <router-link to="/Blog">博客</router-link>
                        </MenuItem>
                    </Submenu>
                    <MenuItem name="3">
                        <!--<template slot="title">-->
                            <Icon type="md-flame" color="primary"/>
                            用户管理
                        <!--</template>-->
                        <!--<MenuItem name="3-1">-->
                            <!--<Icon type="ios-navigate"></Icon>-->
                            <!--<span>用户管理</span>-->
                        <!--</MenuItem>-->
                        <!--<MenuItem name="3-2">-->
                            <!--<Icon type="ios-search"></Icon>-->
                            <!--<span>用户权限设置</span>-->
                        <!--</MenuItem>-->
                        <!--<MenuItem name="3-3">-->
                            <!--<Icon type="ios-settings"></Icon>-->
                            <!--<span>角色管理</span>-->
                        <!--</MenuItem>-->
                    </MenuItem>
                </Menu>
            </Sider>

            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px',color:'white'}" type="md-menu" size="24"></Icon>
                    <Icon type="ios-albums" />
                    <Icon type="android-notifications" :style="{margin: '40 20px',color:'#fff'}" size="24" @click="clickNotice">消息通知</Icon>
                </Header>
                <Content :style="{margin: '20px5 ', background: '#fff', minHeight: '260px'}">
                    <keep-alive>
                        <router-view/>
                    </keep-alive>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>

    export default {
        name: "indexMenu",
        data () {
            return {
                isCollapsed: false
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {//类似于class="menu-item collapsed-menu"
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            }
        }
    }
</script>
<style lang="less">

    .layout{
        height: 100%;
        .ivu-layout{
            height: 100% !important;
        }
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>