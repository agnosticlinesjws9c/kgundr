<!--
	This file is part of ELCube.
	ELCube is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.
	ELCube is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU Affero General Public License for more details.
	You should have received a copy of the GNU Affero General Public License
	along with ELCube.  If not, see <https://www.gnu.org/licenses/>.
-->
<template>
    <div style="position: fixed; background-color: #eee;width:25%;height: calc(100vh);">
        <a-card size="small" class="card">
            <a slot="title" @click="doSetDocumentPage(config.prev)" v-if="config.prev" style="font-weight: normal;"><a-icon type="left" />返回</a>
            <span slot="title" v-else>文档中心</span>
            <a slot="extra" @click="setLayoutConfig({helperVisible:false})"><a-icon type="close" /> Close</a>
            <div style="height: 100%;overflow-y: auto;" @click="click" class="markdown">
                <transition name="slide-fade" mode="out-in">
                    <component  v-if     ="config.component"    :is   ="config.component" />
                    <div        v-else-if="config.markdown"     v-html="config.markdown" />
                </transition>
            </div>
        </a-card>
    </div>
</template>

<script>

import {mapActions, mapState, mapMutations} from 'vuex';

export default {
    computed:{
        ...mapState('NkDoc', {
            config:'helperConfig'
        })
    },
    methods:{
        ...mapMutations('NkDoc',[
            'setLayoutConfig'
        ]),
        ...mapActions('NkDoc',[
            'doSetDocumentPage'
        ]),
        click(){
            // if(e.target.nodeName==='A'){
            //     if(e.target.href.startsWith('nkdn://')){
            //         this.doSetDocumentPage(e.target.href);
            //         e.preventDefault();
            //     }else if(e.target.href.startsWith(`${location.href.split('#')[0]}#`)){
            //         //
            //     }else{
            //         e.target.setAttribute("target","_blank");
            //     }
            // }
        }
    }
}
</script>

<style scoped lang="less">

::v-deep.card{
    height: 100%;

    .ant-card-body{
        height: calc(100vh - 38px);
        padding: 0;
    }
    .markdown{
        padding: 5px 15px;
    }
}


.slide-fade-enter-active {
    transition: all .3s ease;
}
.slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
    opacity: 0;
}
::v-deep.markdown{
    h1 {
        font-size: 1.6em;
        font-weight: 700;
        line-height: 1.6;
        margin: 20px 0 20px 0;
        padding-top: 0;
        padding-left: 9px;
        border-left: 6px solid #ff7e79;
    }
    h2, h3, h4, h5, h6 {
        line-height: 1.5em;
        margin-top: 2.2em;
        margin-bottom: 4px;
    }
    h2 {
        font-size: 1.4em;
        margin: 30px 10px 20px 0;
        padding-left: 9px;
        border-left: 6px solid #ff7e79;
        font-weight: 700;
        line-height: 1.4;
    }
    h3 {
        font-weight: 700;
        font-size: 1.2em;
        line-height: 1.4;
        margin: 10px 0 10px;
        padding-top: 10px;
    }
    h4 {
        font-weight: 700;
        text-transform: uppercase;
        font-size: 1.1em;
        line-height: 1.4;
        margin: 10px 0 5px;
        padding-top: 10px
    }
    h5, h6 {
        font-size: .9em;
    }
    h5 {
        font-weight: bold;
        text-transform: uppercase;
    }
    h6 {
        font-weight: normal;
        color: #AAA;
    }
    img {
        width: 100%;
        border-radius: 5px;
        display: block;
        margin-bottom: 15px;
        height: auto;
    }
    dl, ol, ul {
        margin-top: 12px;
        margin-bottom: 20px;
        padding-left: 5%;
        line-height: 1.8;
    }
    p {
        margin: 0 0 20px;
        padding: 0;
        line-height: 1.8;
    }
    a {
        color: #f22f27;
        text-decoration: none;
    }
    a:hover {
        color: #f55852;
        text-decoration: underline;
    }
    a:focus {
        outline-offset: -2px;
    }
    blockquote {
        font-size: 1em;
        font-style: normal;
        padding: 30px 38px;
        margin: 0 0 15px;
        position: relative;
        line-height: 1.8;
        text-indent: 0;
        border: none;
        color: #888;
    }
    blockquote:before {
        content: "“";
        left: 12px;
        top: 0;
        color: #E0E0E0;
        font-size: 4em;
        font-family: Arial, serif;
        line-height: 1em;
        font-weight: 700;
        position: absolute;
    }
    blockquote:after {
        content: "”";
        right: 12px;
        bottom: -26px;
        color: #E0E0E0;
        font-size: 4em;
        font-family: Arial, serif;
        line-height: 1em;
        font-weight: 700;
        position: absolute;
        bottom: -31px;
    }
    strong, dfn {
        font-weight: 700;
    }
    em, dfn {
        font-style: italic;
        font-weight: 400;
    }
    del {
        text-decoration: line-through;
    }
    /*code {font-size:90%;}*/

    /*pre {text-align:left; overflow-x: scroll; color: #257fa0; background: #f6f6f6; padding: 10pt 15pt; border-radius: 3px; border: solid 1px #e2e2e2;}*/

    pre {
        margin: 0 0 10px;
        font-size: 13px;
        line-height: 1.42857;
        word-break: break-all;
        word-wrap: break-word;
        border-radius: 4px;
        white-space: pre-wrap;
        display: block;
        background: #f8f8f8;
        padding: 10px 20px;
        border: none;
        margin-bottom: 25px;
        color: #666;
        font-family: Courier, sans-serif;
    }
    code {
        color: #c7254e;
        background-color: #f9f2f4;
        border-radius: 4px;
        font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
        padding: 2px 4px;
        font-size: 90%;
    }
    p>code {
        color: #c7264e;
        background-color: #f9f2f4;
        font-size: .95em;
        border-radius: 3px;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
    }
    figure {
        margin: 1em 0;
    }
    figcaption {
        font-size: 0.75em;
        padding: 0.5em 2em;
        margin-bottom: 2em;
    }
    figure img {
        margin-bottom: 0px;
    }
    hr {
        margin-top: 20px;
        margin-bottom: 20px;
        border: 0;
        border-top: 1px solid #eee;
    }
    ol p, ul p {
        margin-bottom: 0px;
    }
    li {
        margin-bottom: 0.75em;
        margin-top: 0.75em;
    }
    ol#footnotes {
        font-size: 0.95em;
        padding-top: 1em;
        margin-top: 1em;
        margin-left: 0;
        border-top: 1px solid #eaeaea;
        counter-reset: footer-counter;
        list-style: none;
        color: #555;
        padding-left: 5%;
        margin: 20px 0;
    }
    ol#footnotes li {
        margin-bottom: 10px;
        margin-left: 16px;
        font-weight: 400;
        line-height: 2;
        list-style-type: none;
    }
    ol#footnotes li:before {
        content: counter(footer-counter) ". ";
        counter-increment: footer-counter;
        font-weight: 800;
        font-size: .95em;
    }
    @keyframes highfade {
        0% {
            background-color: initial;
        }
        20% {
            background-color: yellow;
        }
        100% {
            background-color: initial;
        }
    }
    @-webkit-keyframes highfade {
        0% {
            background-color: initial;
        }
        20% {
            background-color: yellow;
        }
        100% {
            background-color: initial;
        }
    }
    a:target, ol#footnotes li:target, sup a:target {
        animation-name: highfade;
        animation-duration: 2s;
        animation-iteration-count: 1;
        animation-timing-function: ease-in-out;
        -webkit-animation-name: highfade;
        -webkit-animation-duration: 2s;
        -webkit-animation-iteration-count: 1;
        -webkit-animation-timing-function: ease-in-out;
    }
    a:target {
        border: 0;
        outline: 0;
    }
    table{
        width: 90%;
    }
    thead{
        border-top: solid 1px #ccc;
        border-left: solid 1px #ccc;

        th{
            border-bottom: solid 1px #ccc;
            border-right: solid 1px #ccc;
        }
    }
    tbody{
        border-left: solid 1px #ccc;
        td{
            border-bottom: solid 1px #ccc;
            border-right: solid 1px #ccc;
        }
    }
    img{
        width: auto;
    }
}
</style>
