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
    var d = {"backgroundColorRatios":[0],"paddingBottom":0,"id":"rootPlayer","gap":10,"backgroundColorDirection":"vertical","mediaActivationMode":"window","scrollBarVisible":"rollOver","verticalAlign":"top","desktopMipmappingEnabled":false,"scrollBarMargin":2,"overflow":"hidden","data":{"name":"Player5394","defaultLocale":"en","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"volume":1,"speechOnInfoWindow":false,"rate":1,"speechOnTooltip":false}},"width":"100%","children":["this.MainViewer"],"height":"100%","horizontalAlign":"left","propagateClick":false,"paddingLeft":0,"borderSize":0,"vrPolyfillScale":0.75,"contentOpaque":false,"scripts":{"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getOverlays":TDV.Tour.Script.getOverlays,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"mixObject":TDV.Tour.Script.mixObject,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"clone":TDV.Tour.Script.clone,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"existsKey":TDV.Tour.Script.existsKey,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPixels":TDV.Tour.Script.getPixels,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizStart":TDV.Tour.Script.quizStart,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setLocale":TDV.Tour.Script.setLocale,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"init":TDV.Tour.Script.init,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"historyGoBack":TDV.Tour.Script.historyGoBack,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"showWindow":TDV.Tour.Script.showWindow,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showPopupImage":TDV.Tour.Script.showPopupImage,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getKey":TDV.Tour.Script.getKey,"quizFinish":TDV.Tour.Script.quizFinish,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"cloneCamera":TDV.Tour.Script.cloneCamera,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMainViewer":TDV.Tour.Script.getMainViewer,"playAudioList":TDV.Tour.Script.playAudioList,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaByName":TDV.Tour.Script.getMediaByName,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"shareSocial":TDV.Tour.Script.shareSocial,"openLink":TDV.Tour.Script.openLink,"textToSpeech":TDV.Tour.Script.textToSpeech,"initQuiz":TDV.Tour.Script.initQuiz,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"registerKey":TDV.Tour.Script.registerKey,"initGA":TDV.Tour.Script.initGA,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"isPanorama":TDV.Tour.Script.isPanorama,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getComponentByName":TDV.Tour.Script.getComponentByName,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setValue":TDV.Tour.Script.setValue,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"translate":TDV.Tour.Script.translate,"setMapLocation":TDV.Tour.Script.setMapLocation,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"resumePlayers":TDV.Tour.Script.resumePlayers,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart},"defaultVRPointer":"laser","paddingRight":0,"start":"this.init()","class":"Player","backgroundOpacity":1,"backgroundColor":["#FFFFFF"],"definitions": [{"class":"PlayList","items":[{"begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem","camera":"this.panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE_camera","media":"this.panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE","player":"this.MainViewerPanoramaPlayer"},{"begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","class":"PanoramaPlayListItem","camera":"this.panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57_camera","media":"this.panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57","player":"this.MainViewerPanoramaPlayer"},{"begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","media":"this.panorama_AFE04722_A07D_9452_41C4_AD34E085B16E","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_AFE04722_A07D_9452_41C4_AD34E085B16E_camera"}],"id":"mainPlayList"},{"shadow":false,"toolTipFontFamily":"Arial","progressBarBackgroundColorRatios":[0],"id":"MainViewer","surfaceReticleOpacity":0.6,"toolTipBackgroundColor":"#F6F6F6","toolTipFontSize":"1.11vmin","toolTipShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"toolTipDisplayTime":600,"subtitlesBorderSize":0,"playbackBarHeadShadow":true,"subtitlesTextShadowOpacity":1,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","width":"100%","paddingLeft":0,"borderSize":0,"progressBorderRadius":0,"subtitlesTop":0,"toolTipBorderColor":"#767676","toolTipTextShadowOpacity":0,"playbackBarOpacity":1,"toolTipTextShadowBlurRadius":3,"progressBackgroundColorDirection":"vertical","playbackBarHeadBackgroundColor":["#111111","#666666"],"paddingRight":0,"surfaceReticleSelectionOpacity":1,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadowVerticalLength":0,"subtitlesTextShadowColor":"#000000","class":"ViewerArea","firstTransitionDuration":0,"playbackBarBottom":5,"playbackBarBorderRadius":0,"subtitlesFontColor":"#FFFFFF","toolTipBorderRadius":3,"playbackBarBorderColor":"#FFFFFF","toolTipFontColor":"#606060","playbackBarProgressBorderColor":"#000000","vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColorDirection":"vertical","toolTipBorderSize":1,"transitionMode":"blending","height":"100%","progressHeight":10,"toolTipFontStyle":"normal","displayTooltipInSurfaceSelection":true,"borderRadius":0,"progressBorderSize":0,"progressRight":0,"paddingTop":0,"minHeight":50,"playbackBarBackgroundOpacity":1,"playbackBarBackgroundColor":["#FFFFFF"],"paddingBottom":0,"playbackBarProgressOpacity":1,"playbackBarHeight":10,"playbackBarHeadBorderRadius":0,"progressBottom":0,"subtitlesBackgroundOpacity":0.2,"subtitlesFontSize":"3vmin","toolTipTextShadowColor":"#000000","progressOpacity":1,"progressBarBorderRadius":0,"playbackBarHeadBorderColor":"#000000","playbackBarHeadBackgroundColorDirection":"vertical","toolTipPaddingLeft":6,"subtitlesFontWeight":"normal","minWidth":100,"subtitlesPaddingBottom":5,"subtitlesPaddingLeft":5,"playbackBarBorderSize":0,"toolTipShadowVerticalLength":0,"toolTipPaddingTop":4,"toolTipHorizontalAlign":"center","subtitlesTextDecoration":"none","subtitlesBorderColor":"#FFFFFF","subtitlesPaddingRight":5,"subtitlesBottom":50,"toolTipOpacity":1,"subtitlesTextShadowHorizontalLength":1,"toolTipShadowHorizontalLength":0,"progressBarBorderSize":0,"propagateClick":false,"displayTooltipInTouchScreens":true,"progressLeft":0,"subtitlesFontFamily":"Arial","playbackBarHeadShadowHorizontalLength":0,"subtitlesTextShadowBlurRadius":0,"progressBackgroundColor":["#FFFFFF"],"subtitlesTextShadowVerticalLength":1,"playbackBarHeadWidth":6,"progressBackgroundOpacity":1,"progressBarBackgroundColorDirection":"vertical","doubleClickAction":"toggle_fullscreen","transitionDuration":500,"toolTipShadowColor":"#333333","progressBackgroundColorRatios":[0],"subtitlesShadow":false,"playbackBarHeadShadowBlurRadius":3,"toolTipPaddingRight":6,"toolTipPaddingBottom":4,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarHeadHeight":15,"vrPointerColor":"#FFFFFF","playbackBarLeft":0,"playbackBarRight":0,"playbackBarHeadShadowColor":"#000000","subtitlesPaddingTop":5,"progressBarBorderColor":"#000000","subtitlesBackgroundColor":"#000000","subtitlesOpacity":1,"subtitlesGap":0,"toolTipShadowOpacity":1,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipShadowSpread":0,"vrPointerSelectionTime":2000,"progressBorderColor":"#000000","playbackBarHeadBorderSize":0,"subtitlesHorizontalAlign":"center","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"progressBarOpacity":1,"surfaceReticleColor":"#FFFFFF","data":{"name":"Main Viewer"},"subtitlesVerticalAlign":"bottom","toolTipFontWeight":"normal"},{"hfovMax":130,"label":trans('panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57.label'),"id":"panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57","pitch":0,"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":1.98,"panorama":"this.panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE","backwardYaw":-171.91,"yaw":-31.03,"select":"this.overlay_AF895DC8_A06D_97DE_41D6_8D8ABADB1444.get('areas').forEach(function(a){ a.trigger('click') })"},{"class":"AdjacentPanorama","distance":1.77,"panorama":"this.panorama_AFE04722_A07D_9452_41C4_AD34E085B16E","backwardYaw":-4.57,"yaw":-148.09,"select":"this.overlay_AF95F053_A06E_8CF3_41AD_3C3B5369198C.get('areas').forEach(function(a){ a.trigger('click') })"}],"overlays":["this.overlay_AF895DC8_A06D_97DE_41D6_8D8ABADB1444","this.overlay_AF95F053_A06E_8CF3_41AD_3C3B5369198C","this.overlay_B08B2BA1_A0AD_9C4F_4195_41603D132BD5"],"class":"Panorama","hfovMin":"120%","hfov":360,"data":{"label":"PainterShop0002"},"vfov":180,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57_t.jpg","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":30,"width":15360,"rowCount":5,"height":2560},{"url":"media/panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":18,"width":9216,"rowCount":3,"height":1536},{"url":"media/panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":12,"width":6144,"rowCount":2,"height":1024},{"url":"media/panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6,"width":3072,"rowCount":1,"height":512},{"url":"media/panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","tags":"mobilevr","colCount":6,"width":9216,"rowCount":1,"height":1536}]}}],"partial":false,"thumbnailUrl":"media/panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57_t.jpg"},{"touchControlMode":"drag_rotation","class":"PanoramaPlayer","displayPlaybackBar":true,"gyroscopeVerticalDraggingEnabled":true,"arrowKeysAction":"translate","viewerArea":"this.MainViewer","surfaceSelectionEnabled":false,"id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation","zoomEnabled":true},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"initialSequence":"this.sequence_AFD534E3_A07D_B5D3_41A1_AAC46CCFD619","id":"panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57_camera"},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":-60.31,"pitch":-21.69},"automaticZoomSpeed":10,"initialSequence":"this.sequence_AFD6B4E3_A07D_B5D3_41AF_6ED271A322CC","id":"panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE_camera"},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"initialSequence":"this.sequence_AFD5D4E3_A07D_B5D3_41B5_192842A5D1E7","id":"panorama_AFE04722_A07D_9452_41C4_AD34E085B16E_camera"},{"hfovMax":130,"label":trans('panorama_AFE04722_A07D_9452_41C4_AD34E085B16E.label'),"id":"panorama_AFE04722_A07D_9452_41C4_AD34E085B16E","pitch":0,"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":2.51,"panorama":"this.panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57","backwardYaw":-148.09,"yaw":-4.57,"select":"this.overlay_AF8A0053_A06E_8CF3_41CC_B852039E4FE1.get('areas').forEach(function(a){ a.trigger('click') })"},{"class":"AdjacentPanorama","distance":3.77,"panorama":"this.panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE","backwardYaw":-178.65,"yaw":-4.92,"select":"this.overlay_AF85683C_A06E_9CB5_41D7_FD6E923499B6.get('areas').forEach(function(a){ a.trigger('click') })"}],"overlays":["this.overlay_AF8A0053_A06E_8CF3_41CC_B852039E4FE1","this.overlay_AF85683C_A06E_9CB5_41D7_FD6E923499B6","this.overlay_B33C0E99_A0A3_F47F_41E4_25C196781742"],"class":"Panorama","hfovMin":"120%","hfov":360,"data":{"label":"PainterShop0003"},"vfov":180,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_AFE04722_A07D_9452_41C4_AD34E085B16E_t.jpg","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_AFE04722_A07D_9452_41C4_AD34E085B16E_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":30,"width":15360,"rowCount":5,"height":2560},{"url":"media/panorama_AFE04722_A07D_9452_41C4_AD34E085B16E_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":18,"width":9216,"rowCount":3,"height":1536},{"url":"media/panorama_AFE04722_A07D_9452_41C4_AD34E085B16E_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":12,"width":6144,"rowCount":2,"height":1024},{"url":"media/panorama_AFE04722_A07D_9452_41C4_AD34E085B16E_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6,"width":3072,"rowCount":1,"height":512},{"url":"media/panorama_AFE04722_A07D_9452_41C4_AD34E085B16E_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","tags":"mobilevr","colCount":6,"width":9216,"rowCount":1,"height":1536}]}}],"partial":false,"thumbnailUrl":"media/panorama_AFE04722_A07D_9452_41C4_AD34E085B16E_t.jpg"},{"hfovMax":130,"label":trans('panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE.label'),"id":"panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE","pitch":0,"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":1.36,"panorama":"this.panorama_AFE1D8F6_A07D_FDB2_41D5_2068021E4D57","backwardYaw":-31.03,"yaw":-171.91,"select":"this.overlay_AF8E6DC8_A06D_97DE_41E0_EAF3C00369C0.get('areas').forEach(function(a){ a.trigger('click') })"},{"class":"AdjacentPanorama","distance":2.84,"panorama":"this.panorama_AFE04722_A07D_9452_41C4_AD34E085B16E","backwardYaw":-4.92,"yaw":-178.65,"select":"this.overlay_AF80483C_A06E_9CB5_41D1_A334848DCD46.get('areas').forEach(function(a){ a.trigger('click') })"}],"overlays":["this.overlay_AF8E6DC8_A06D_97DE_41E0_EAF3C00369C0","this.overlay_AF80483C_A06E_9CB5_41D1_A334848DCD46","this.overlay_B34B24EB_A0AF_95D2_4196_6856E70120E8"],"class":"Panorama","hfovMin":"120%","hfov":360,"data":{"label":"PainterShop0001"},"vfov":180,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE_t.jpg","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":30,"width":15360,"rowCount":5,"height":2560},{"url":"media/panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":18,"width":9216,"rowCount":3,"height":1536},{"url":"media/panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":12,"width":6144,"rowCount":2,"height":1024},{"url":"media/panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6,"width":3072,"rowCount":1,"height":512},{"url":"media/panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","tags":"mobilevr","colCount":6,"width":9216,"rowCount":1,"height":1536}]}}],"partial":false,"thumbnailUrl":"media/panorama_B1FECA85_A07D_9C57_41C7_14C27F42C4DE_t.jpg"},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_AF856DC8_A06D_97DE_41C5_BAA12B8B87D4"],"enabledInCardboard":true,"maps":[],"rollOverDisplay":false,"items":[{"yaw":-31.03,"vfov":5.72,"hfov":6.57,"scaleMode":"fit_inside","data":{"label":"GoToPaintershop0001"},"verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","distance":50,"image":"this.res_B0E08039_A06E_8CBF_41DD_007F9E3E221F","pitch":-40.64}],"id":"overlay_AF895DC8_A06D_97DE_41D6_8D8ABADB1444","data":{"hasPanoramaAction":true,"label":"GoToPaintershop0001"}},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_AF802053_A06E_8CF3_41BE_164A9D5F5604"],"enabledInCardboard":true,"maps":[],"rollOverDisplay":false,"items":[{"yaw":-148.09,"vfov":5.43,"hfov":6.24,"scaleMode":"fit_inside","data":{"label":"GoToPaintershop0003"},"verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","distance":50,"image":"this.res_B0E08039_A06E_8CBF_41DD_007F9E3E221F","pitch":-43.9}],"id":"overlay_AF95F053_A06E_8CF3_41AD_3C3B5369198C","data":{"hasPanoramaAction":true,"label":"GoToPaintershop0003"}},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_B2C18C4F_A0AD_94D3_41D3_45358BC55443"],"enabledInCardboard":true,"data":{"label":"Logo 360 Eiendom 1_3_Rammel\u00f8s"},"maps":[],"rollOverDisplay":false,"items":[{"yaw":84.55,"vfov":19.88,"hfov":28.18,"scaleMode":"fit_inside","data":{"label":"Logo 360 Eiendom 1_3_Rammel\u00f8s"},"verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","distance":50,"image":"this.res_B3EB6D1B_A0A2_B473_41E2_57CF504EE7C5","pitch":-17.68}],"id":"overlay_B08B2BA1_A0AD_9C4F_4195_41603D132BD5"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"linear","yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}],"id":"sequence_AFD534E3_A07D_B5D3_41A1_AAC46CCFD619"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"linear","yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}],"id":"sequence_AFD6B4E3_A07D_B5D3_41AF_6ED271A322CC"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"linear","yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}],"id":"sequence_AFD5D4E3_A07D_B5D3_41B5_192842A5D1E7"},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_B161837E_A06F_8CB5_41C8_FB66453B8230"],"enabledInCardboard":true,"maps":[],"rollOverDisplay":false,"items":[{"yaw":-4.57,"vfov":6.24,"hfov":7.17,"scaleMode":"fit_inside","data":{"label":"GoToPaintershop0002"},"verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","distance":50,"image":"this.res_B0E08039_A06E_8CBF_41DD_007F9E3E221F","pitch":-34.1}],"id":"overlay_AF8A0053_A06E_8CF3_41CC_B852039E4FE1","data":{"hasPanoramaAction":true,"label":"GoToPaintershop0002"}},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_B161937E_A06F_8CB5_41E3_DA20CF26F006"],"enabledInCardboard":true,"maps":[],"rollOverDisplay":false,"items":[{"yaw":-4.92,"vfov":12.61,"hfov":14.49,"scaleMode":"fit_inside","data":{"label":"GoToPaintershop0001"},"verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","distance":50,"image":"this.res_B0E08039_A06E_8CBF_41DD_007F9E3E221F","pitch":-24.26}],"id":"overlay_AF85683C_A06E_9CB5_41D7_FD6E923499B6","data":{"hasPanoramaAction":true,"label":"GoToPaintershop0001"}},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_B2E0BF95_A0A3_F476_41D8_CEBDF0AB95F9"],"enabledInCardboard":true,"data":{"label":"Mona_Lisa"},"maps":[],"rollOverDisplay":false,"items":[{"yaw":-112.47,"vfov":44.74,"hfov":36.97,"scaleMode":"fit_inside","data":{"label":"Mona_Lisa"},"verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","distance":50,"image":"this.res_B3EACD1B_A0A2_B473_41DB_162B4D560228","pitch":-20.63}],"id":"overlay_B33C0E99_A0A3_F47F_41E4_25C196781742"},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_B161E37E_A06F_8CB5_41D5_E7A540DCE4E0"],"enabledInCardboard":true,"maps":[],"rollOverDisplay":false,"items":[{"yaw":-171.91,"vfov":4.71,"hfov":5.41,"scaleMode":"fit_inside","data":{"label":"GoToPaintershop0002"},"verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","distance":50,"image":"this.res_B0E08039_A06E_8CBF_41DD_007F9E3E221F","pitch":-51.33}],"id":"overlay_AF8E6DC8_A06D_97DE_41E0_EAF3C00369C0","data":{"hasPanoramaAction":true,"label":"GoToPaintershop0002"}},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_B07B583C_A06E_9CB5_41DC_486AEEA52E78"],"enabledInCardboard":true,"maps":[],"rollOverDisplay":false,"items":[{"yaw":-178.65,"vfov":7.34,"hfov":6.41,"scaleMode":"fit_inside","data":{"label":"GoToPaintershop0003"},"verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","distance":50,"image":"this.res_B0E08039_A06E_8CBF_41DD_007F9E3E221F","pitch":-30.89}],"id":"overlay_AF80483C_A06E_9CB5_41D1_A334848DCD46","data":{"hasPanoramaAction":true,"label":"GoToPaintershop0003"}},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_B2FE55AC_A0AF_9456_41DB_1FB8F6919202"],"enabledInCardboard":true,"data":{"label":"Hibou logo 3_Plikkless"},"maps":[],"rollOverDisplay":false,"items":[{"yaw":-52.83,"vfov":12.1,"hfov":19,"scaleMode":"fit_inside","data":{"label":"Hibou logo 3_Plikkless"},"verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","distance":50,"image":"this.res_B3EB5D1B_A0A2_B473_41AF_D1B7038CB68B","pitch":-12.56}],"id":"overlay_B34B24EB_A0AF_95D2_4196_6856E70120E8"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_AF856DC8_A06D_97DE_41C5_BAA12B8B87D4","click":"this.mainPlayList.set('selectedIndex', 0)"},{"class":"ImageResource","id":"res_B0E08039_A06E_8CBF_41DD_007F9E3E221F","levels":[{"url":"media/res_B0E08039_A06E_8CBF_41DD_007F9E3E221F_0.png","class":"ImageResourceLevel","width":131,"height":114}]},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_AF802053_A06E_8CF3_41BE_164A9D5F5604","click":"this.mainPlayList.set('selectedIndex', 2)"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_B2C18C4F_A0AD_94D3_41D3_45358BC55443"},{"class":"ImageResource","id":"res_B3EB6D1B_A0A2_B473_41E2_57CF504EE7C5","levels":[{"url":"media/res_B3EB6D1B_A0A2_B473_41E2_57CF504EE7C5_0.png","class":"ImageResourceLevel","width":657,"height":454}]},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_B161837E_A06F_8CB5_41C8_FB66453B8230","click":"this.mainPlayList.set('selectedIndex', 1)"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_B161937E_A06F_8CB5_41E3_DA20CF26F006","click":"this.mainPlayList.set('selectedIndex', 0)"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_B2E0BF95_A0A3_F476_41D8_CEBDF0AB95F9"},{"class":"ImageResource","id":"res_B3EACD1B_A0A2_B473_41DB_162B4D560228","levels":[{"url":"media/res_B3EACD1B_A0A2_B473_41DB_162B4D560228_0.png","class":"ImageResourceLevel","width":401,"height":599}]},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_B161E37E_A06F_8CB5_41D5_E7A540DCE4E0","click":"this.mainPlayList.set('selectedIndex', 1)"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_B07B583C_A06E_9CB5_41DC_486AEEA52E78","click":"this.mainPlayList.set('selectedIndex', 2)"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_B2FE55AC_A0AF_9456_41DB_1FB8F6919202"},{"class":"ImageResource","id":"res_B3EB5D1B_A0A2_B473_41AF_D1B7038CB68B","levels":[{"url":"media/res_B3EB5D1B_A0A2_B473_41AF_D1B7038CB68B_0.png","class":"ImageResourceLevel","width":423,"height":275}]}],"mobileMipmappingEnabled":false,"scrollBarColor":"#000000","layout":"absolute","mouseWheelEnabled":true,"borderRadius":0,"scrollBarWidth":10,"scrollBarOpacity":0.5,"downloadEnabled":false,"paddingTop":0,"minHeight":20,"backgroundPreloadEnabled":true,"minWidth":20,"shadow":false,"toolTipHorizontalAlign":"center"};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.5.23.js.map
//Generated with v2020.5.23, Sun Feb 14 2021