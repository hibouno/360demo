(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('begin', x, this);
                    k['call'](this);
                };
                w['bind']('begin', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R !== undefined) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"paddingBottom":0,"gap":10,"verticalAlign":"top","desktopMipmappingEnabled":false,"overflow":"hidden","class":"Player","id":"rootPlayer","scrollBarVisible":"rollOver","backgroundColorDirection":"vertical","backgroundColorRatios":[0],"mediaActivationMode":"window","downloadEnabled":false,"width":"100%","start":"this.init()","horizontalAlign":"left","backgroundPreloadEnabled":true,"propagateClick":false,"borderSize":0,"paddingLeft":0,"toolTipHorizontalAlign":"center","paddingRight":0,"scrollBarWidth":10,"defaultVRPointer":"laser","vrPolyfillScale":0.75,"backgroundColor":["#FFFFFF"],"children":["this.MainViewer"],"scrollBarMargin":2,"height":"100%","definitions": [{"class":"PlayList","id":"mainPlayList","items":[{"media":"this.panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE_camera"},{"media":"this.panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57_camera"},{"media":"this.panorama_AFE04722_A07D_9452_41C4_AD34E085B16E","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_AFE04722_A07D_9452_41C4_AD34E085B16E_camera"},{"media":"this.video_B58DB267_AD6D_1CAF_41DC_FBC9E73F2439","class":"VideoPlayListItem","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 3, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 3)","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 0)","player":"this.MainViewerVideoPlayer","end":"this.trigger('tourEnded')"}]},{"hfovMax":130,"label":trans('panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE.label'),"hfov":360,"thumbnailUrl":"media/panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE_t.jpg","class":"Panorama","id":"panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE","pitch":0,"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":1.36,"backwardYaw":-31.03,"yaw":-171.91,"select":"this.overlay_AF8E6DC8_A06D_97DE_41E0_EAF3C00369C0.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57"},{"class":"AdjacentPanorama","distance":2.84,"backwardYaw":-4.92,"yaw":-178.65,"select":"this.overlay_AF80483C_A06E_9CB5_41D1_A334848DCD46.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_AFE04722_A07D_9452_41C4_AD34E085B16E"}],"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE_t.jpg","cube":{"levels":[{"url":"media/panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":30,"tags":"ondemand","width":15360,"rowCount":5,"height":2560},{"url":"media/panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":18,"tags":"ondemand","width":9216,"rowCount":3,"height":1536},{"url":"media/panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","width":6144,"rowCount":2,"height":1024},{"url":"media/panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"width":3072,"rowCount":1,"height":512},{"url":"media/panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","colCount":6,"tags":"mobilevr","width":9216,"rowCount":1,"height":1536}],"class":"ImageResource"}}],"overlays":["this.overlay_AF8E6DC8_A06D_97DE_41E0_EAF3C00369C0","this.overlay_AF80483C_A06E_9CB5_41D1_A334848DCD46","this.overlay_B34B24EB_A0AF_95D2_4196_6856E70120E8"],"vfov":180,"partial":false,"data":{"label":"PainterShop0001"},"hfovMin":"120%"},{"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","displayPlaybackBar":true,"gyroscopeVerticalDraggingEnabled":true,"viewerArea":"this.MainViewer","touchControlMode":"drag_rotation","surfaceSelectionEnabled":false,"id":"MainViewerPanoramaPlayer","arrowKeysAction":"translate","zoomEnabled":true},{"video":{"mp4Url":"media/video_B58DB267_AD6D_1CAF_41DC_FBC9E73F2439.mp4","width":1144,"class":"VideoResource","height":644},"thumbnailUrl":"media/video_B58DB267_AD6D_1CAF_41DC_FBC9E73F2439_t.jpg","height":720,"width":1280,"label":trans('video_B58DB267_AD6D_1CAF_41DC_FBC9E73F2439.label'),"class":"Video","id":"video_B58DB267_AD6D_1CAF_41DC_FBC9E73F2439","loop":false,"scaleMode":"fit_inside","data":{"label":"Doodly"},"autoplay":true},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":-60.31,"pitch":-21.69},"initialSequence":"this.sequence_AFD6B4E3_A07D_B5D3_41AF_6ED271A322CC","id":"panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE_camera","automaticZoomSpeed":10},{"hfovMax":130,"label":trans('panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57.label'),"hfov":360,"thumbnailUrl":"media/panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57_t.jpg","class":"Panorama","id":"panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57","pitch":0,"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":1.98,"backwardYaw":-171.91,"yaw":-31.03,"select":"this.overlay_AF895DC8_A06D_97DE_41D6_8D8ABADB1444.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE"},{"class":"AdjacentPanorama","distance":1.77,"backwardYaw":-4.57,"yaw":-148.09,"select":"this.overlay_AF95F053_A06E_8CF3_41AD_3C3B5369198C.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_AFE04722_A07D_9452_41C4_AD34E085B16E"}],"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57_t.jpg","cube":{"levels":[{"url":"media/panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":30,"tags":"ondemand","width":15360,"rowCount":5,"height":2560},{"url":"media/panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":18,"tags":"ondemand","width":9216,"rowCount":3,"height":1536},{"url":"media/panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","width":6144,"rowCount":2,"height":1024},{"url":"media/panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"width":3072,"rowCount":1,"height":512},{"url":"media/panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","colCount":6,"tags":"mobilevr","width":9216,"rowCount":1,"height":1536}],"class":"ImageResource"}}],"overlays":["this.overlay_AF895DC8_A06D_97DE_41D6_8D8ABADB1444","this.overlay_AF95F053_A06E_8CF3_41AD_3C3B5369198C","this.overlay_B08B2BA1_A0AD_9C4F_4195_41603D132BD5"],"vfov":180,"partial":false,"data":{"label":"PainterShop0002"},"hfovMin":"120%"},{"class":"VideoPlayer","displayPlaybackBar":true,"displayPlayOverlay":true,"viewerArea":"this.MainViewer","id":"MainViewerVideoPlayer","clickAction":"play_pause"},{"shadow":false,"playbackBarLeft":0,"toolTipShadowBlurRadius":3,"subtitlesShadow":false,"toolTipDisplayTime":600,"progressBarBackgroundColorRatios":[0],"subtitlesOpacity":1,"playbackBarHeadShadowColor":"#000000","playbackBarRight":0,"playbackBarHeadHeight":15,"id":"MainViewer","toolTipPaddingLeft":6,"subtitlesBackgroundColor":"#000000","progressBackgroundColorDirection":"vertical","transitionDuration":500,"playbackBarHeadBorderSize":0,"surfaceReticleOpacity":0.6,"playbackBarProgressBorderRadius":0,"progressBarBorderSize":0,"surfaceReticleColor":"#FFFFFF","progressOpacity":1,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesHorizontalAlign":"center","subtitlesGap":0,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadBackgroundColorRatios":[0,1],"paddingLeft":0,"borderSize":0,"playbackBarHeadShadow":true,"subtitlesVerticalAlign":"bottom","playbackBarHeadOpacity":1,"paddingRight":0,"playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowOpacity":1,"width":"100%","toolTipFontSize":"1.11vmin","subtitlesTextShadowVerticalLength":1,"toolTipPaddingRight":6,"vrPointerSelectionColor":"#FF6600","surfaceReticleSelectionColor":"#FFFFFF","firstTransitionDuration":0,"displayTooltipInSurfaceSelection":true,"toolTipTextShadowColor":"#000000","subtitlesBorderSize":0,"playbackBarHeadShadowVerticalLength":0,"progressBarBackgroundColorDirection":"vertical","toolTipShadowHorizontalLength":0,"subtitlesTop":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarBackgroundOpacity":1,"height":"100%","playbackBarOpacity":1,"toolTipFontStyle":"normal","toolTipFontFamily":"Arial","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipTextShadowBlurRadius":3,"toolTipOpacity":1,"paddingTop":0,"minHeight":50,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowColor":"#000000","toolTipTextShadowOpacity":0,"minWidth":100,"subtitlesFontColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"paddingBottom":0,"playbackBarBorderColor":"#FFFFFF","playbackBarBottom":5,"transitionMode":"blending","playbackBarBorderRadius":0,"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","progressBottom":0,"subtitlesPaddingBottom":5,"toolTipShadowVerticalLength":0,"borderRadius":0,"class":"ViewerArea","playbackBarProgressBorderColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"progressBackgroundColorRatios":[0],"toolTipPaddingTop":4,"toolTipBorderRadius":3,"playbackBarHeadBorderRadius":0,"subtitlesFontWeight":"normal","playbackBarProgressOpacity":1,"propagateClick":false,"playbackBarHeight":10,"toolTipFontColor":"#606060","toolTipBorderColor":"#767676","playbackBarHeadBorderColor":"#000000","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarBorderSize":0,"toolTipBorderSize":1,"toolTipHorizontalAlign":"center","progressBackgroundOpacity":1,"progressHeight":10,"progressBackgroundColor":["#FFFFFF"],"progressBarOpacity":1,"subtitlesBackgroundOpacity":0.2,"subtitlesTextDecoration":"none","progressBarBorderColor":"#000000","progressBorderSize":0,"subtitlesPaddingLeft":5,"subtitlesBorderColor":"#FFFFFF","subtitlesTextShadowBlurRadius":0,"progressBorderColor":"#000000","vrPointerColor":"#FFFFFF","displayTooltipInTouchScreens":true,"progressBorderRadius":0,"subtitlesFontFamily":"Arial","doubleClickAction":"toggle_fullscreen","toolTipShadowOpacity":1,"subtitlesBottom":50,"toolTipFontWeight":"normal","subtitlesPaddingRight":5,"playbackBarHeadShadowHorizontalLength":0,"toolTipShadowSpread":0,"progressLeft":0,"progressBarBorderRadius":0,"subtitlesPaddingTop":5,"progressBarBackgroundColor":["#3399FF"],"toolTipShadowColor":"#333333","data":{"name":"Main Viewer"},"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"vrPointerSelectionTime":2000,"toolTipPaddingBottom":4,"playbackBarBackgroundColorDirection":"vertical","progressRight":0,"playbackBarHeadShadowBlurRadius":3},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_AFD5D4E3_A07D_B5D3_41B5_192842A5D1E7","id":"panorama_AFE04722_A07D_9452_41C4_AD34E085B16E_camera","automaticZoomSpeed":10},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_AFD534E3_A07D_B5D3_41A1_AAC46CCFD619","id":"panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57_camera","automaticZoomSpeed":10},{"hfovMax":130,"label":trans('panorama_AFE04722_A07D_9452_41C4_AD34E085B16E.label'),"hfov":360,"thumbnailUrl":"media/panorama_AFE04722_A07D_9452_41C4_AD34E085B16E_t.jpg","class":"Panorama","id":"panorama_AFE04722_A07D_9452_41C4_AD34E085B16E","pitch":0,"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":2.51,"backwardYaw":-148.09,"yaw":-4.57,"select":"this.overlay_AF8A0053_A06E_8CF3_41CC_B852039E4FE1.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57"},{"class":"AdjacentPanorama","distance":3.77,"backwardYaw":-178.65,"yaw":-4.92,"select":"this.overlay_AF85683C_A06E_9CB5_41D7_FD6E923499B6.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE"}],"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_AFE04722_A07D_9452_41C4_AD34E085B16E_t.jpg","cube":{"levels":[{"url":"media/panorama_AFE04722_A07D_9452_41C4_AD34E085B16E_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":30,"tags":"ondemand","width":15360,"rowCount":5,"height":2560},{"url":"media/panorama_AFE04722_A07D_9452_41C4_AD34E085B16E_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":18,"tags":"ondemand","width":9216,"rowCount":3,"height":1536},{"url":"media/panorama_AFE04722_A07D_9452_41C4_AD34E085B16E_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","width":6144,"rowCount":2,"height":1024},{"url":"media/panorama_AFE04722_A07D_9452_41C4_AD34E085B16E_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"width":3072,"rowCount":1,"height":512},{"url":"media/panorama_AFE04722_A07D_9452_41C4_AD34E085B16E_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","colCount":6,"tags":"mobilevr","width":9216,"rowCount":1,"height":1536}],"class":"ImageResource"}}],"overlays":["this.overlay_AF8A0053_A06E_8CF3_41CC_B852039E4FE1","this.overlay_AF85683C_A06E_9CB5_41D7_FD6E923499B6","this.overlay_B33C0E99_A0A3_F47F_41E4_25C196781742","this.overlay_B6A81749_AD6F_04E2_41E0_D5CE1F6B49A4"],"vfov":180,"partial":false,"data":{"label":"PainterShop0003"},"hfovMin":"120%"},{"areas":["this.HotspotPanoramaOverlayArea_B161E37E_A06F_8CB5_41D5_E7A540DCE4E0"],"maps":[],"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"useHandCursor":true,"items":[{"horizontalAlign":"center","data":{"label":"GoToPaintershop0002"},"vfov":4.71,"hfov":5.41,"scaleMode":"fit_inside","verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_B0E08039_A06E_8CBF_41DD_007F9E3E221F","pitch":-51.33,"yaw":-171.91}],"id":"overlay_AF8E6DC8_A06D_97DE_41E0_EAF3C00369C0","data":{"hasPanoramaAction":true,"label":"GoToPaintershop0002"},"enabledInCardboard":true},{"areas":["this.HotspotPanoramaOverlayArea_B07B583C_A06E_9CB5_41DC_486AEEA52E78"],"maps":[],"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"useHandCursor":true,"items":[{"horizontalAlign":"center","data":{"label":"GoToPaintershop0003"},"vfov":7.34,"hfov":6.41,"scaleMode":"fit_inside","verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_B0E08039_A06E_8CBF_41DD_007F9E3E221F","pitch":-30.89,"yaw":-178.65}],"id":"overlay_AF80483C_A06E_9CB5_41D1_A334848DCD46","data":{"hasPanoramaAction":true,"label":"GoToPaintershop0003"},"enabledInCardboard":true},{"areas":["this.HotspotPanoramaOverlayArea_B2FE55AC_A0AF_9456_41DB_1FB8F6919202"],"maps":[],"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"data":{"label":"Hibou logo 3_Plikkless"},"useHandCursor":true,"items":[{"horizontalAlign":"center","vfov":12.1,"hfov":19,"scaleMode":"fit_inside","data":{"label":"Hibou logo 3_Plikkless"},"verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_B3EB5D1B_A0A2_B473_41AF_D1B7038CB68B","pitch":-12.56,"yaw":-52.83}],"id":"overlay_B34B24EB_A0AF_95D2_4196_6856E70120E8","enabledInCardboard":true},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_AFD6B4E3_A07D_B5D3_41AF_6ED271A322CC"},{"areas":["this.HotspotPanoramaOverlayArea_AF856DC8_A06D_97DE_41C5_BAA12B8B87D4"],"maps":[],"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"useHandCursor":true,"items":[{"horizontalAlign":"center","data":{"label":"GoToPaintershop0001"},"vfov":5.72,"hfov":6.57,"scaleMode":"fit_inside","verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_B0E08039_A06E_8CBF_41DD_007F9E3E221F","pitch":-40.64,"yaw":-31.03}],"id":"overlay_AF895DC8_A06D_97DE_41D6_8D8ABADB1444","data":{"hasPanoramaAction":true,"label":"GoToPaintershop0001"},"enabledInCardboard":true},{"areas":["this.HotspotPanoramaOverlayArea_AF802053_A06E_8CF3_41BE_164A9D5F5604"],"maps":[],"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"useHandCursor":true,"items":[{"horizontalAlign":"center","data":{"label":"GoToPaintershop0003"},"vfov":5.43,"hfov":6.24,"scaleMode":"fit_inside","verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_B0E08039_A06E_8CBF_41DD_007F9E3E221F","pitch":-43.9,"yaw":-148.09}],"id":"overlay_AF95F053_A06E_8CF3_41AD_3C3B5369198C","data":{"hasPanoramaAction":true,"label":"GoToPaintershop0003"},"enabledInCardboard":true},{"areas":["this.HotspotPanoramaOverlayArea_B2C18C4F_A0AD_94D3_41D3_45358BC55443"],"maps":[],"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"data":{"label":"Logo 360 Eiendom 1_3_Rammel\u00f8s"},"useHandCursor":true,"items":[{"horizontalAlign":"center","vfov":19.88,"hfov":28.18,"scaleMode":"fit_inside","data":{"label":"Logo 360 Eiendom 1_3_Rammel\u00f8s"},"verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_B3EB6D1B_A0A2_B473_41E2_57CF504EE7C5","pitch":-17.68,"yaw":84.55}],"id":"overlay_B08B2BA1_A0AD_9C4F_4195_41603D132BD5","enabledInCardboard":true},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_AFD5D4E3_A07D_B5D3_41B5_192842A5D1E7"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_AFD534E3_A07D_B5D3_41A1_AAC46CCFD619"},{"areas":["this.HotspotPanoramaOverlayArea_B161837E_A06F_8CB5_41C8_FB66453B8230"],"maps":[],"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"useHandCursor":true,"items":[{"horizontalAlign":"center","data":{"label":"GoToPaintershop0002"},"vfov":6.24,"hfov":7.17,"scaleMode":"fit_inside","verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_B0E08039_A06E_8CBF_41DD_007F9E3E221F","pitch":-34.1,"yaw":-4.57}],"id":"overlay_AF8A0053_A06E_8CF3_41CC_B852039E4FE1","data":{"hasPanoramaAction":true,"label":"GoToPaintershop0002"},"enabledInCardboard":true},{"areas":["this.HotspotPanoramaOverlayArea_B161937E_A06F_8CB5_41E3_DA20CF26F006"],"maps":[],"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"useHandCursor":true,"items":[{"horizontalAlign":"center","data":{"label":"GoToPaintershop0001"},"vfov":12.61,"hfov":14.49,"scaleMode":"fit_inside","verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_B0E08039_A06E_8CBF_41DD_007F9E3E221F","pitch":-24.26,"yaw":-4.92}],"id":"overlay_AF85683C_A06E_9CB5_41D7_FD6E923499B6","data":{"hasPanoramaAction":true,"label":"GoToPaintershop0001"},"enabledInCardboard":true},{"areas":["this.HotspotPanoramaOverlayArea_B2E0BF95_A0A3_F476_41D8_CEBDF0AB95F9"],"maps":[],"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"data":{"label":"Mona_Lisa"},"useHandCursor":true,"items":[{"horizontalAlign":"center","vfov":44.74,"hfov":36.97,"scaleMode":"fit_inside","data":{"label":"Mona_Lisa"},"verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_B3EACD1B_A0A2_B473_41DB_162B4D560228","pitch":-20.63,"yaw":-112.47}],"id":"overlay_B33C0E99_A0A3_F47F_41E4_25C196781742","enabledInCardboard":true},{"loop":false,"id":"overlay_B6A81749_AD6F_04E2_41E0_D5CE1F6B49A4","roll":16.84,"class":"VideoPanoramaOverlay","image":"this.res_B73ACA1E_AD6F_0C61_41E4_1DEC21EE589D","pitch":-19.45,"useHandCursor":true,"hfov":31.73,"blending":0,"data":{"label":"Video"},"rotationY":39.69,"yaw":-52.54,"vfov":43.52,"rotationX":9.72,"videoVisibleOnStop":false,"video":{"mp4Url":"media/video_B58DB267_AD6D_1CAF_41DC_FBC9E73F2439.mp4","width":1144,"class":"VideoResource","height":644},"enabledInCardboard":true,"autoplay":false,"distance":50,"click":"this.overlay_B6A81749_AD6F_04E2_41E0_D5CE1F6B49A4.play()","cues":[]},{"click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_B161E37E_A06F_8CB5_41D5_E7A540DCE4E0"},{"class":"ImageResource","id":"res_B0E08039_A06E_8CBF_41DD_007F9E3E221F","levels":[{"url":"media/res_B0E08039_A06E_8CBF_41DD_007F9E3E221F_0.png","width":131,"class":"ImageResourceLevel","height":114}]},{"click":"this.mainPlayList.set('selectedIndex', 2)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_B07B583C_A06E_9CB5_41DC_486AEEA52E78"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_B2FE55AC_A0AF_9456_41DB_1FB8F6919202"},{"class":"ImageResource","id":"res_B3EB5D1B_A0A2_B473_41AF_D1B7038CB68B","levels":[{"url":"media/res_B3EB5D1B_A0A2_B473_41AF_D1B7038CB68B_0.png","width":424,"class":"ImageResourceLevel","height":275}]},{"click":"this.mainPlayList.set('selectedIndex', 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_AF856DC8_A06D_97DE_41C5_BAA12B8B87D4"},{"click":"this.mainPlayList.set('selectedIndex', 2)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_AF802053_A06E_8CF3_41BE_164A9D5F5604"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_B2C18C4F_A0AD_94D3_41D3_45358BC55443"},{"class":"ImageResource","id":"res_B3EB6D1B_A0A2_B473_41E2_57CF504EE7C5","levels":[{"url":"media/res_B3EB6D1B_A0A2_B473_41E2_57CF504EE7C5_0.png","width":657,"class":"ImageResourceLevel","height":454}]},{"click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_B161837E_A06F_8CB5_41C8_FB66453B8230"},{"click":"this.mainPlayList.set('selectedIndex', 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_B161937E_A06F_8CB5_41E3_DA20CF26F006"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_B2E0BF95_A0A3_F476_41D8_CEBDF0AB95F9"},{"class":"ImageResource","id":"res_B3EACD1B_A0A2_B473_41DB_162B4D560228","levels":[{"url":"media/res_B3EACD1B_A0A2_B473_41DB_162B4D560228_0.png","width":401,"class":"ImageResourceLevel","height":599}]},{"class":"ImageResource","id":"res_B73ACA1E_AD6F_0C61_41E4_1DEC21EE589D","levels":[{"url":"media/res_B73ACA1E_AD6F_0C61_41E4_1DEC21EE589D_0.jpg","width":1280,"class":"ImageResourceLevel","height":720}]}],"scrollBarOpacity":0.5,"layout":"absolute","mobileMipmappingEnabled":false,"contentOpaque":false,"data":{"textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"pitch":1,"speechOnTooltip":false,"rate":1,"volume":1},"name":"Player5394","locales":{"en":"locale/en.txt"},"defaultLocale":"en"},"backgroundOpacity":1,"paddingTop":0,"minHeight":20,"minWidth":20,"mouseWheelEnabled":true,"scrollBarColor":"#000000","shadow":false,"scripts":{"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"cloneCamera":TDV.Tour.Script.cloneCamera,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"initQuiz":TDV.Tour.Script.initQuiz,"existsKey":TDV.Tour.Script.existsKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"mixObject":TDV.Tour.Script.mixObject,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"clone":TDV.Tour.Script.clone,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"unregisterKey":TDV.Tour.Script.unregisterKey,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPixels":TDV.Tour.Script.getPixels,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setLocale":TDV.Tour.Script.setLocale,"init":TDV.Tour.Script.init,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"showWindow":TDV.Tour.Script.showWindow,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getKey":TDV.Tour.Script.getKey,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"quizShowScore":TDV.Tour.Script.quizShowScore,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"shareSocial":TDV.Tour.Script.shareSocial,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setMapLocation":TDV.Tour.Script.setMapLocation,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"quizStart":TDV.Tour.Script.quizStart,"openLink":TDV.Tour.Script.openLink,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"playAudioList":TDV.Tour.Script.playAudioList,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"historyGoBack":TDV.Tour.Script.historyGoBack,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"registerKey":TDV.Tour.Script.registerKey,"quizFinish":TDV.Tour.Script.quizFinish,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"textToSpeech":TDV.Tour.Script.textToSpeech,"getComponentByName":TDV.Tour.Script.getComponentByName,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"isPanorama":TDV.Tour.Script.isPanorama,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setValue":TDV.Tour.Script.setValue,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"resumePlayers":TDV.Tour.Script.resumePlayers,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"initGA":TDV.Tour.Script.initGA,"translate":TDV.Tour.Script.translate,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"historyGoForward":TDV.Tour.Script.historyGoForward,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getMainViewer":TDV.Tour.Script.getMainViewer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getOverlays":TDV.Tour.Script.getOverlays,"updateVideoCues":TDV.Tour.Script.updateVideoCues},"borderRadius":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.5.23.js.map
//Generated with v2020.5.23, Tue Feb 16 2021