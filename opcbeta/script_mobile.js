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
    var d = {"shadow":false,"height":"100%","id":"rootPlayer","width":"100%","contentOpaque":false,"gap":10,"scrollBarOpacity":0.5,"minWidth":20,"downloadEnabled":false,"verticalAlign":"top","definitions": [{"frames":[{"cube":{"levels":[{"url":"media/panorama_B3F15005_B9E8_6A7D_41E2_5E9BB9B89678_0/{face}/0/{row}_{column}.jpg","rowCount":5,"class":"TiledImageResourceLevel","tags":"ondemand","width":15360,"colCount":30,"height":2560},{"url":"media/panorama_B3F15005_B9E8_6A7D_41E2_5E9BB9B89678_0/{face}/1/{row}_{column}.jpg","rowCount":3,"class":"TiledImageResourceLevel","tags":"ondemand","width":9216,"colCount":18,"height":1536},{"url":"media/panorama_B3F15005_B9E8_6A7D_41E2_5E9BB9B89678_0/{face}/2/{row}_{column}.jpg","rowCount":2,"class":"TiledImageResourceLevel","tags":"ondemand","width":6144,"colCount":12,"height":1024},{"url":"media/panorama_B3F15005_B9E8_6A7D_41E2_5E9BB9B89678_0/{face}/3/{row}_{column}.jpg","rowCount":1,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"width":3072,"colCount":6,"height":512},{"url":"media/panorama_B3F15005_B9E8_6A7D_41E2_5E9BB9B89678_0/{face}/vr/0.jpg","rowCount":1,"class":"TiledImageResourceLevel","tags":"mobilevr","width":9216,"colCount":6,"height":1536}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_B3F15005_B9E8_6A7D_41E2_5E9BB9B89678_t.jpg"}],"label":trans('panorama_B3F15005_B9E8_6A7D_41E2_5E9BB9B89678.label'),"id":"panorama_B3F15005_B9E8_6A7D_41E2_5E9BB9B89678","mapLocations":[{"map":"this.map_B4F75601_B9F8_5675_41E7_22BC5F59788C","x":267.97,"class":"PanoramaMapLocation","angle":0,"y":21.07}],"hfovMax":130,"pitch":0,"thumbnailUrl":"media/panorama_B3F15005_B9E8_6A7D_41E2_5E9BB9B89678_t.jpg","vfov":180,"adjacentPanoramas":[{"class":"AdjacentPanorama","select":"this.overlay_AB53C23D_BA38_6E8D_41C1_A15DB59E7A60.get('areas').forEach(function(a){ a.trigger('click') })","distance":100,"yaw":-159.27,"panorama":"this.media_B45A37E7_BA38_35BC_41CB_9D8B9789C797"}],"class":"Panorama","partial":false,"overlays":["this.overlay_B421D8CF_BA28_3B8C_41D8_932739F01774","this.overlay_AB53C23D_BA38_6E8D_41C1_A15DB59E7A60"],"hfovMin":"135%","data":{"label":"R0010761[1]"},"hfov":360},{"minWidth":1,"progressBackgroundOpacity":1,"id":"MapViewer_mobile","left":"0%","progressBottom":2,"subtitlesPaddingTop":5,"progressBackgroundColorDirection":"vertical","subtitlesFontFamily":"Arial","subtitlesOpacity":1,"toolTipBackgroundColor":"#F6F6F6","toolTipPaddingBottom":2,"playbackBarHeadShadowBlurRadius":1.5,"playbackBarLeft":0,"toolTipShadowOpacity":1,"subtitlesShadow":false,"playbackBarHeadHeight":15,"subtitlesGap":0,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesBackgroundColor":"#000000","toolTipDisplayTime":600,"toolTipPaddingRight":3,"width":"24.125%","toolTipFontFamily":"Arial","borderSize":0,"toolTipShadowHorizontalLength":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadWidth":6,"toolTipShadowSpread":0,"progressBorderRadius":0,"playbackBarProgressBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBackgroundColorRatios":[0],"progressHeight":10,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"subtitlesVerticalAlign":"bottom","playbackBarRight":0,"propagateClick":false,"subtitlesHorizontalAlign":"center","toolTipFontWeight":"normal","progressBorderSize":0,"toolTipBorderColor":"#767676","toolTipHorizontalAlign":"center","vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadBorderSize":0,"transitionDuration":500,"height":"32.787%","subtitlesTextShadowOpacity":1,"toolTipTextShadowBlurRadius":1,"toolTipTextShadowOpacity":0,"displayTooltipInTouchScreens":true,"playbackBarHeadShadow":true,"playbackBarHeadOpacity":1,"paddingTop":0,"progressLeft":0,"surfaceReticleColor":"#FFFFFF","subtitlesBorderSize":0,"subtitlesTop":0,"progressRight":0,"paddingBottom":0,"toolTipFontSize":"1.11vmin","vrPointerColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"toolTipFontColor":"#606060","shadow":false,"toolTipBorderRadius":1,"surfaceReticleOpacity":0.6,"playbackBarOpacity":1,"transitionMode":"blending","progressBarBackgroundColor":["#3399FF"],"progressOpacity":1,"firstTransitionDuration":0,"progressBarBorderRadius":0,"subtitlesTextShadowColor":"#000000","progressBarBorderSize":0,"playbackBarBackgroundOpacity":1,"subtitlesFontColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"toolTipFontStyle":"normal","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":0,"playbackBarBorderColor":"#FFFFFF","subtitlesFontSize":"3vmin","playbackBarBorderRadius":0,"toolTipShadowBlurRadius":1,"toolTipBorderSize":0,"vrPointerSelectionTime":2000,"playbackBarProgressBackgroundColorDirection":"vertical","toolTipPaddingLeft":3,"top":"0%","paddingLeft":0,"subtitlesBackgroundOpacity":0.2,"displayTooltipInSurfaceSelection":true,"toolTipTextShadowColor":"#000000","playbackBarProgressOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","borderRadius":0,"paddingRight":0,"progressBarBorderColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingTop":2,"toolTipOpacity":1,"subtitlesBorderColor":"#FFFFFF","surfaceReticleSelectionOpacity":1,"playbackBarHeadBorderRadius":0,"progressBarBackgroundColorDirection":"vertical","subtitlesFontWeight":"normal","subtitlesTextShadowHorizontalLength":1,"progressBorderColor":"#000000","playbackBarProgressBorderColor":"#000000","toolTipShadowVerticalLength":0,"playbackBarHeight":10,"class":"ViewerArea","playbackBarHeadBorderColor":"#000000","subtitlesPaddingLeft":5,"playbackBarBorderSize":0,"doubleClickAction":"toggle_fullscreen","playbackBarHeadShadowHorizontalLength":0,"progressBackgroundColor":["#FFFFFF"],"subtitlesBottom":10,"progressBarBackgroundColorRatios":[0],"subtitlesTextDecoration":"none","playbackBarHeadShadowVerticalLength":0,"subtitlesTextShadowBlurRadius":0,"subtitlesPaddingRight":5,"progressBarOpacity":1,"subtitlesPaddingBottom":5,"toolTipShadowColor":"#333333","data":{"name":"Floorplan Viewer"},"subtitlesTextShadowVerticalLength":1,"minHeight":1},{"items":["this.PanoramaPlayListItem_AECE54FB_BA18_6B94_41CE_6FBE37FFB4B0",{"media":"this.media_B45A37E7_BA38_35BC_41CB_9D8B9789C797","end":"this.trigger('tourEnded')","class":"Video360PlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobilePanoramaPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 0)","player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.media_B45A37E7_BA38_35BC_41CB_9D8B9789C797_camera","start":"this.MainViewer_mobilePanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1)"}],"id":"mainPlayList","class":"PlayList"},{"items":[{"begin":"this.MapViewer_mobileMapPlayer.set('movementMode', 'free_drag_and_rotation')","media":"this.map_B4F75601_B9F8_5675_41E7_22BC5F59788C","player":"this.MapViewer_mobileMapPlayer","class":"MapPlayListItem"}],"id":"playList_AECED4D9_BA18_6B94_41E0_1B3BC0297E3D","class":"PlayList"},{"minWidth":50,"progressBackgroundOpacity":1,"id":"MainViewer_mobile","left":0,"progressBottom":0,"subtitlesPaddingTop":5,"progressBackgroundColorDirection":"vertical","subtitlesFontFamily":"Arial","subtitlesOpacity":1,"toolTipBackgroundColor":"#F6F6F6","toolTipPaddingBottom":2,"playbackBarHeadShadowBlurRadius":1.5,"playbackBarLeft":0,"toolTipShadowOpacity":1,"subtitlesShadow":false,"playbackBarHeadHeight":15,"subtitlesGap":0,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesBackgroundColor":"#000000","toolTipDisplayTime":600,"toolTipPaddingRight":3,"width":"100%","toolTipFontFamily":"Arial","borderSize":0,"toolTipShadowHorizontalLength":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadWidth":6,"toolTipShadowSpread":0,"progressBorderRadius":0,"playbackBarProgressBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBackgroundColorRatios":[0],"progressHeight":10,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"subtitlesVerticalAlign":"bottom","playbackBarRight":0,"propagateClick":false,"subtitlesHorizontalAlign":"center","toolTipFontWeight":"normal","progressBorderSize":0,"toolTipBorderColor":"#767676","toolTipHorizontalAlign":"center","vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadBorderSize":0,"transitionDuration":500,"height":"100%","subtitlesTextShadowOpacity":1,"toolTipTextShadowBlurRadius":1,"toolTipTextShadowOpacity":0,"displayTooltipInTouchScreens":true,"playbackBarHeadShadow":true,"playbackBarHeadOpacity":1,"paddingTop":0,"progressLeft":0,"surfaceReticleColor":"#FFFFFF","subtitlesBorderSize":0,"subtitlesTop":0,"progressRight":0,"paddingBottom":0,"toolTipFontSize":"1.11vmin","vrPointerColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"toolTipFontColor":"#606060","shadow":false,"toolTipBorderRadius":1,"surfaceReticleOpacity":0.6,"playbackBarOpacity":1,"transitionMode":"blending","progressBarBackgroundColor":["#3399FF"],"progressOpacity":1,"firstTransitionDuration":0,"progressBarBorderRadius":0,"subtitlesTextShadowColor":"#000000","progressBarBorderSize":0,"playbackBarBackgroundOpacity":1,"subtitlesFontColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"toolTipFontStyle":"normal","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"playbackBarBorderColor":"#FFFFFF","subtitlesFontSize":"3vmin","playbackBarBorderRadius":0,"toolTipShadowBlurRadius":1,"toolTipBorderSize":0,"vrPointerSelectionTime":2000,"playbackBarProgressBackgroundColorDirection":"vertical","toolTipPaddingLeft":3,"top":0,"paddingLeft":0,"subtitlesBackgroundOpacity":0.2,"displayTooltipInSurfaceSelection":true,"toolTipTextShadowColor":"#000000","playbackBarProgressOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","borderRadius":0,"paddingRight":0,"progressBarBorderColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingTop":2,"toolTipOpacity":1,"subtitlesBorderColor":"#FFFFFF","surfaceReticleSelectionOpacity":1,"playbackBarHeadBorderRadius":0,"progressBarBackgroundColorDirection":"vertical","subtitlesFontWeight":"normal","subtitlesTextShadowHorizontalLength":1,"progressBorderColor":"#000000","playbackBarProgressBorderColor":"#000000","toolTipShadowVerticalLength":0,"playbackBarHeight":10,"class":"ViewerArea","playbackBarHeadBorderColor":"#000000","subtitlesPaddingLeft":5,"playbackBarBorderSize":0,"doubleClickAction":"toggle_fullscreen","playbackBarHeadShadowHorizontalLength":0,"progressBackgroundColor":["#FFFFFF"],"subtitlesBottom":50,"progressBarBackgroundColorRatios":[0],"subtitlesTextDecoration":"none","playbackBarHeadShadowVerticalLength":0,"subtitlesTextShadowBlurRadius":0,"subtitlesPaddingRight":5,"progressBarOpacity":1,"subtitlesPaddingBottom":5,"toolTipShadowColor":"#333333","data":{"name":"Main Viewer"},"subtitlesTextShadowVerticalLength":1,"minHeight":25},{"manualRotationSpeed":1800,"class":"RotationalCamera","automaticZoomSpeed":10,"automaticRotationSpeed":10,"id":"media_B45A37E7_BA38_35BC_41CB_9D8B9789C797_camera","manualZoomSpeed":1,"initialPosition":{"class":"RotationalCameraPosition","yaw":168.4,"pitch":-0.79,"hfov":120}},{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialSequence":"this.sequence_B0836E78_B9EB_D693_41E5_3421FEB72856","id":"panorama_B3F15005_B9E8_6A7D_41E2_5E9BB9B89678_camera","initialPosition":{"yaw":-156.48,"class":"PanoramaCameraPosition","pitch":7.92}},{"label":trans('media_B45A37E7_BA38_35BC_41CB_9D8B9789C797.label'),"id":"media_B45A37E7_BA38_35BC_41CB_9D8B9789C797","hfovMax":140,"pitch":0,"loop":false,"thumbnailUrl":"media/media_B45A37E7_BA38_35BC_41CB_9D8B9789C797_t.jpg","vfov":180,"class":"Video360","partial":false,"hfovMin":60,"data":{"label":"opc-beta"},"hfov":360,"video":[{"width":1280,"url":"media/media_B45A37E7_BA38_35BC_41CB_9D8B9789C797.m3u8","class":"Video360Resource","framerate":30,"type":"application/x-mpegurl","posterURL":"media/media_B45A37E7_BA38_35BC_41CB_9D8B9789C797_poster.jpg","height":720},{"width":1280,"url":"media/media_B45A37E7_BA38_35BC_41CB_9D8B9789C797.mp4","class":"Video360Resource","bitrate":2073,"framerate":30,"type":"video/mp4","posterURL":"media/media_B45A37E7_BA38_35BC_41CB_9D8B9789C797_poster.jpg","height":720}]},{"zoomEnabled":true,"mouseControlMode":"drag_rotation","surfaceSelectionEnabled":false,"class":"PanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"touchControlMode":"drag_rotation","id":"MainViewer_mobilePanoramaPlayer","displayPlaybackBar":true,"viewerArea":"this.MainViewer_mobile","arrowKeysAction":"translate"},{"id":"MapViewer_mobileMapPlayer","class":"MapPlayer","viewerArea":"this.MapViewer_mobile","movementMode":"constrained"},{"label":trans('map_B4F75601_B9F8_5675_41E7_22BC5F59788C.label'),"id":"map_B4F75601_B9F8_5675_41E7_22BC5F59788C","width":606,"fieldOfViewOverlayInsideColor":"#FFFFFF","minimumZoomFactor":0.5,"image":{"levels":[{"url":"media/map_B4F75601_B9F8_5675_41E7_22BC5F59788C.png","width":606,"class":"ImageResourceLevel","height":559},{"url":"media/map_B4F75601_B9F8_5675_41E7_22BC5F59788C_lq.png","width":266,"class":"ImageResourceLevel","height":246,"tags":"preload"}],"class":"ImageResource"},"fieldOfViewOverlayOutsideColor":"#000000","thumbnailUrl":"media/map_B4F75601_B9F8_5675_41E7_22BC5F59788C_t.png","initialZoomFactor":1,"class":"Map","fieldOfViewOverlayOutsideOpacity":0,"scaleMode":"fit_inside","overlays":["this.overlay_B5026122_B9F8_6AB7_41DB_90A2A7E1464C"],"maximumZoomFactor":1.2,"data":{"label":"OPC"},"fieldOfViewOverlayRadiusScale":0.08,"height":559,"fieldOfViewOverlayInsideOpacity":0.4},{"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_B440B947_BA28_3AFC_41E0_EE6DF14AFBDA"],"useHandCursor":true,"items":[{"image":{"levels":[{"url":"media/panorama_B3F15005_B9E8_6A7D_41E2_5E9BB9B89678_HS_k0xj1oo2.png","width":1580,"class":"ImageResourceLevel","height":379}],"class":"ImageResource"},"pitch":15.26,"data":{"label":"Text"},"class":"HotspotPanoramaOverlayImage","yaw":-137.17,"distance":50,"hfov":81.68}],"id":"overlay_B421D8CF_BA28_3B8C_41D8_932739F01774","data":{"label":"Text"},"rollOverDisplay":false,"maps":[]},{"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_AB692279_BA38_6E95_41E2_1534EF25618F"],"useHandCursor":true,"items":[{"vfov":13.06,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","scaleMode":"fit_inside","data":{"label":"GoToOpc-beta"},"verticalAlign":"middle","distance":50,"image":"this.res_AB4E1A25_BA38_3EBD_41D6_017DF374F526","pitch":0.31,"hfov":12.31,"yaw":-159.27}],"id":"overlay_AB53C23D_BA38_6E8D_41C1_A15DB59E7A60","data":{"label":"GoToOpc-beta","hasPanoramaAction":true},"rollOverDisplay":false,"maps":[]},{"media":"this.panorama_B3F15005_B9E8_6A7D_41E2_5E9BB9B89678","class":"PanoramaPlayListItem","begin":"this.setMapLocation(this.PanoramaPlayListItem_AECE54FB_BA18_6B94_41CE_6FBE37FFB4B0, this.MapViewer_mobileMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_B3F15005_B9E8_6A7D_41E2_5E9BB9B89678_camera","id":"PanoramaPlayListItem_AECE54FB_BA18_6B94_41CE_6FBE37FFB4B0"},{"movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_B0836E78_B9EB_D693_41E5_3421FEB72856","restartMovementOnUserInteraction":false},{"class":"AreaHotspotMapOverlay","areas":["this.HotspotMapOverlayArea_B52892FE_B9F8_6F8C_41D8_0B7469173443"],"useHandCursor":true,"id":"overlay_B5026122_B9F8_6AB7_41DB_90A2A7E1464C","data":{"label":"GoToR0010761[1]"},"image":{"x":267.97,"class":"HotspotMapOverlayImage","y":21.07,"scaleMode":"fit_inside","data":{"label":"GoToR0010761[1]"},"width":65,"image":"this.res_AB4EAA26_BA38_3EBF_41D5_9F8D403F05DF","offsetY":29.5,"offsetX":32.5,"height":59},"rollOverDisplay":false},{"id":"HotspotPanoramaOverlayArea_B440B947_BA28_3AFC_41E0_EE6DF14AFBDA","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","toolTip":trans('HotspotPanoramaOverlayArea_AB692279_BA38_6E95_41E2_1534EF25618F.toolTip'),"click":"this.mainPlayList.set('selectedIndex', 1); this.MainViewer_mobilePanoramaPlayer.play()","id":"HotspotPanoramaOverlayArea_AB692279_BA38_6E95_41E2_1534EF25618F"},{"levels":[{"url":"media/res_AB4E1A25_BA38_3EBD_41D6_017DF374F526_0.png","width":119,"class":"ImageResourceLevel","height":119}],"id":"res_AB4E1A25_BA38_3EBD_41D6_017DF374F526","class":"ImageResource"},{"click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotMapOverlayArea_B52892FE_B9F8_6F8C_41D8_0B7469173443","mapColor":"any","class":"HotspotMapOverlayArea"},{"levels":[{"url":"media/res_AB4EAA26_BA38_3EBF_41D5_9F8D403F05DF_0.png","width":51,"class":"ImageResourceLevel","height":59}],"id":"res_AB4EAA26_BA38_3EBF_41D5_9F8D403F05DF","class":"ImageResource"}],"scripts":{"unregisterKey":TDV.Tour.Script.unregisterKey,"setMapLocation":TDV.Tour.Script.setMapLocation,"existsKey":TDV.Tour.Script.existsKey,"showWindow":TDV.Tour.Script.showWindow,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"initQuiz":TDV.Tour.Script.initQuiz,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"isPanorama":TDV.Tour.Script.isPanorama,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPixels":TDV.Tour.Script.getPixels,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"init":TDV.Tour.Script.init,"clone":TDV.Tour.Script.clone,"setLocale":TDV.Tour.Script.setLocale,"cloneCamera":TDV.Tour.Script.cloneCamera,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizShowScore":TDV.Tour.Script.quizShowScore,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setValue":TDV.Tour.Script.setValue,"getOverlays":TDV.Tour.Script.getOverlays,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"showPopupImage":TDV.Tour.Script.showPopupImage,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getKey":TDV.Tour.Script.getKey,"quizStart":TDV.Tour.Script.quizStart,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"initGA":TDV.Tour.Script.initGA,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"mixObject":TDV.Tour.Script.mixObject,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"quizFinish":TDV.Tour.Script.quizFinish,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"historyGoForward":TDV.Tour.Script.historyGoForward,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"openLink":TDV.Tour.Script.openLink,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getMediaByName":TDV.Tour.Script.getMediaByName,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"textToSpeech":TDV.Tour.Script.textToSpeech,"shareSocial":TDV.Tour.Script.shareSocial,"resumePlayers":TDV.Tour.Script.resumePlayers,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"historyGoBack":TDV.Tour.Script.historyGoBack,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"registerKey":TDV.Tour.Script.registerKey,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"translate":TDV.Tour.Script.translate,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getComponentByName":TDV.Tour.Script.getComponentByName,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getMainViewer":TDV.Tour.Script.getMainViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"playAudioList":TDV.Tour.Script.playAudioList},"backgroundPreloadEnabled":true,"scrollBarColor":"#000000","left":571.65,"borderSize":0,"horizontalAlign":"left","vrPolyfillScale":0.75,"paddingLeft":0,"overflow":"hidden","mediaActivationMode":"window","backgroundColorDirection":"vertical","backgroundColorRatios":[0],"propagateClick":false,"backgroundOpacity":1,"paddingRight":0,"scrollBarVisible":"rollOver","defaultVRPointer":"laser","start":"this.init(); this.playList_AECED4D9_BA18_6B94_41E0_1B3BC0297E3D.set('selectedIndex', 0)","toolTipHorizontalAlign":"center","borderRadius":0,"children":["this.MainViewer_mobile","this.MapViewer_mobile"],"backgroundColor":["#FFFFFF"],"mobileMipmappingEnabled":false,"class":"Player","scrollBarMargin":2,"desktopMipmappingEnabled":false,"data":{"name":"Player518","defaultLocale":"en","textToSpeechConfig":{"volume":1,"pitch":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1,"speechOnQuizQuestion":false},"locales":{"en":"locale/en.txt"}},"mouseWheelEnabled":true,"paddingTop":0,"layout":"absolute","scrollBarWidth":10,"minHeight":20,"paddingBottom":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.5.23.js.map
//Generated with v2020.5.23, Fri Feb 19 2021