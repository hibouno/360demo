(function () {
    var a = {};
    function trans(c, d) {
        var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        a[e[0x0]] = e;
        return '';
    }
    function regTextVar(c, d) {
        var e = ![];
        d = d['toLowerCase']();
        var f = function () {
            var o = this['get']('data');
            o['updateText'](o['translateObjs'][c]);
        };
        var g = function (o) {
            var p = o['data']['nextSelectedIndex'];
            if (p >= 0x0) {
                var q = o['source']['get']('items')[p];
                var r = function () {
                    q['unbind']('begin', r, this);
                    f['call'](this);
                };
                q['bind']('begin', r, this);
            } else
                f['call'](this);
        };
        var h = function (o) {
            return function (p) {
                if (o in p) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var i = function (o, p) {
            return function (q, r) {
                if (o == q && p in r) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var j = function (o, p, q) {
            for (var r = 0x0; r < o['length']; ++r) {
                var s = o[r];
                var t = s['get']('selectedIndex');
                if (t >= 0x0) {
                    var u = p['split']('.');
                    var v = s['get']('items')[t];
                    if (q !== undefined && !q['call'](this, v))
                        continue;
                    for (var w = 0x0; w < u['length']; ++w) {
                        if (v == undefined)
                            return '';
                        v = 'get' in v ? v['get'](u[w]) : v[u[w]];
                    }
                    return v;
                }
            }
            return '';
        };
        var k = function (o) {
            var p = o['get']('player');
            return p !== undefined && p['get']('viewerArea') == this['getMainViewer']();
        };
        switch (d) {
        case 'title':
        case 'subtitle':
            var m = function () {
                switch (d) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (m) {
                return function () {
                    var o = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!e) {
                        for (var p = 0x0; p < o['length']; ++p) {
                            o[p]['bind']('changing', g, this);
                        }
                        e = !![];
                    }
                    return j['call'](this, o, m, k);
                };
            }
            break;
        default:
            if (d['startsWith']('quiz.') && 'Quiz' in TDV) {
                var n = undefined;
                var m = function () {
                    switch (d) {
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
                        var o = /quiz\.([\w_]+)\.(.+)/['exec'](d);
                        if (o !== undefined) {
                            n = o[0x1];
                            switch ('quiz.' + o[0x2]) {
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
                if (m) {
                    return function () {
                        var o = this['get']('data')['quiz'];
                        if (o) {
                            if (!e) {
                                if (n != undefined)
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, s[u]['id'], m), this);
                                        }
                                    } else {
                                        o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, n, m), this);
                                    }
                                else
                                    o['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], h['call'](this, m), this);
                                e = !![];
                            }
                            try {
                                var x = 0x0;
                                if (n != undefined) {
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            x += o['getObjective'](s[u]['id'], m);
                                        }
                                    } else {
                                        x = o['getObjective'](n, m);
                                    }
                                } else {
                                    x = o['get'](m);
                                    if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        x += 0x1;
                                }
                                return x;
                            } catch (y) {
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
    function createQuizConfig(player, c) {
        var d = {};
        d['player'] = player;
        d['playList'] = c;
        function e(h) {
            for (var j = 0x0; j < h['length']; ++j) {
                var k = h[j];
                if ('id' in k)
                    player[k['id']] = k;
            }
        }
        if (d['questions']) {
            e(d['questions']);
            for (var f = 0x0; f < d['questions']['length']; ++f) {
                var g = d['questions'][f];
                e(g['options']);
            }
        }
        if (d['objectives']) {
            e(d['objectives']);
        }
        if (d['califications']) {
            e(d['califications']);
        }
        if (d['score']) {
            player[d['score']['id']] = d['score'];
        }
        if (d['question']) {
            player[d['question']['id']] = d['question'];
        }
        if (d['timeout']) {
            player[d['timeout']['id']] = d['timeout'];
        }
        player['get']('data')['translateObjs'] = a;
        return d;
    }
    var b = {"scrollBarWidth":10,"paddingBottom":0,"id":"rootPlayer","gap":10,"verticalAlign":"top","width":"100%","paddingLeft":0,"start":"this.init()","backgroundOpacity":1,"children":["this.MainViewer"],"backgroundPreloadEnabled":true,"scrollBarColor":"#000000","paddingRight":0,"borderRadius":0,"definitions": [{"partial":false,"label":trans('panorama_8D966106_8691_281A_41DA_60CD8653C84E.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","width":24576,"colCount":48,"url":"media/panorama_8D966106_8691_281A_41DA_60CD8653C84E_0/{face}/0/{row}_{column}.jpg","rowCount":8,"tags":"ondemand","height":4096},{"class":"TiledImageResourceLevel","width":12288,"colCount":24,"url":"media/panorama_8D966106_8691_281A_41DA_60CD8653C84E_0/{face}/1/{row}_{column}.jpg","rowCount":4,"tags":"ondemand","height":2048},{"class":"TiledImageResourceLevel","width":6144,"colCount":12,"url":"media/panorama_8D966106_8691_281A_41DA_60CD8653C84E_0/{face}/2/{row}_{column}.jpg","rowCount":2,"tags":"ondemand","height":1024},{"class":"TiledImageResourceLevel","width":3072,"colCount":6,"url":"media/panorama_8D966106_8691_281A_41DA_60CD8653C84E_0/{face}/3/{row}_{column}.jpg","rowCount":1,"tags":["ondemand","preload"],"height":512},{"class":"TiledImageResourceLevel","width":9216,"colCount":6,"url":"media/panorama_8D966106_8691_281A_41DA_60CD8653C84E_0/{face}/vr/0.jpg","rowCount":1,"tags":"mobilevr","height":1536}]},"thumbnailUrl":"media/panorama_8D966106_8691_281A_41DA_60CD8653C84E_t.jpg"}],"id":"panorama_8D966106_8691_281A_41DA_60CD8653C84E","thumbnailUrl":"media/panorama_8D966106_8691_281A_41DA_60CD8653C84E_t.jpg","vfov":120,"hfov":360,"pitch":0,"audios":["this.audio_97849971_8690_F8F6_41DE_85A20917D60F"],"overlays":["this.overlay_8ABD97C0_8691_2816_41D5_A66701826902","this.overlay_9775BD43_8691_181A_41D3_41D6AD8634CC"],"class":"Panorama","data":{"label":"shutterstock_1271979601"},"hfovMax":130},{"class":"PanoramaAudio","loop":false,"audio":"this.audiores_973CCE29_8691_3816_41C2_DF5B6D062538","data":{"label":"414673__lena-orsa__a-christmas-tale"},"id":"audio_97849971_8690_F8F6_41DE_85A20917D60F","autoplay":true},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"id":"panorama_8D966106_8691_281A_41DA_60CD8653C84E_camera","initialSequence":"this.sequence_8F52B8D5_8691_F83E_41C4_08F459ABFD6E"},{"subtitlesTextShadowVerticalLength":1,"progressBottom":0,"data":{"name":"Main Viewer"},"progressBackgroundColorRatios":[0],"id":"MainViewer","playbackBarHeadHeight":15,"playbackBarProgressBackgroundColor":["#3399FF"],"width":"100%","playbackBarHeadShadowColor":"#000000","playbackBarProgressBorderRadius":0,"progressRight":0,"progressBackgroundColorDirection":"vertical","doubleClickAction":"toggle_fullscreen","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBackgroundColorRatios":[0,1],"progressLeft":0,"transitionMode":"blending","transitionDuration":500,"playbackBarHeadShadowOpacity":0.7,"subtitlesFontFamily":"Arial","progressOpacity":1,"borderSize":0,"playbackBarHeadShadowHorizontalLength":0,"progressHeight":10,"toolTipShadowOpacity":1,"progressBarBackgroundColorDirection":"vertical","playbackBarHeadBorderSize":0,"subtitlesPaddingTop":5,"toolTipShadowVerticalLength":0,"playbackBarHeadShadow":true,"height":"100%","toolTipShadowBlurRadius":3,"subtitlesShadow":false,"toolTipBorderRadius":3,"toolTipDisplayTime":600,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadOpacity":1,"toolTipFontStyle":"normal","progressBorderSize":0,"playbackBarBorderColor":"#FFFFFF","toolTipShadowColor":"#333333","propagateClick":false,"subtitlesTextShadowHorizontalLength":1,"toolTipTextShadowColor":"#000000","subtitlesBackgroundColor":"#000000","toolTipFontFamily":"Arial","shadow":false,"playbackBarBorderRadius":0,"playbackBarOpacity":1,"progressBarBorderRadius":0,"progressBorderColor":"#000000","playbackBarProgressBorderColor":"#000000","paddingTop":0,"toolTipBorderSize":1,"paddingBottom":0,"subtitlesHorizontalAlign":"center","toolTipPaddingTop":4,"playbackBarHeadBackgroundColor":["#111111","#666666"],"vrPointerSelectionTime":2000,"firstTransitionDuration":0,"progressBarBackgroundColor":["#3399FF"],"subtitlesBorderSize":0,"toolTipFontSize":"1.11vmin","subtitlesOpacity":1,"subtitlesTop":0,"playbackBarBottom":5,"playbackBarHeadShadowVerticalLength":0,"paddingLeft":0,"subtitlesFontColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"subtitlesVerticalAlign":"bottom","progressBarBorderColor":"#000000","toolTipPaddingLeft":6,"toolTipTextShadowOpacity":0,"playbackBarProgressBackgroundColorDirection":"vertical","surfaceReticleSelectionColor":"#FFFFFF","paddingRight":0,"surfaceReticleSelectionOpacity":1,"borderRadius":0,"subtitlesFontWeight":"normal","progressBarBorderSize":0,"playbackBarHeadBorderRadius":0,"toolTipFontColor":"#606060","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesTextShadowColor":"#000000","playbackBarProgressOpacity":1,"displayTooltipInTouchScreens":true,"progressBackgroundOpacity":1,"progressBackgroundColor":["#FFFFFF"],"class":"ViewerArea","vrPointerColor":"#FFFFFF","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeight":10,"subtitlesFontSize":"3vmin","playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"playbackBarHeadWidth":6,"surfaceReticleColor":"#FFFFFF","toolTipFontWeight":"normal","toolTipPaddingBottom":4,"subtitlesPaddingRight":5,"surfaceReticleOpacity":0.6,"subtitlesPaddingBottom":5,"progressBarOpacity":1,"toolTipBorderColor":"#767676","minHeight":50,"playbackBarBackgroundOpacity":1,"minWidth":100,"toolTipHorizontalAlign":"center","toolTipShadowSpread":0,"subtitlesGap":0,"subtitlesBackgroundOpacity":0.2,"progressBorderRadius":0,"subtitlesBottom":50,"toolTipTextShadowBlurRadius":3,"subtitlesBorderColor":"#FFFFFF","subtitlesPaddingLeft":5,"subtitlesTextDecoration":"none","playbackBarProgressBorderSize":0,"vrPointerSelectionColor":"#FF6600","toolTipOpacity":1,"toolTipShadowHorizontalLength":0,"displayTooltipInSurfaceSelection":true,"playbackBarBackgroundColorDirection":"vertical","playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"toolTipPaddingRight":6,"progressBarBackgroundColorRatios":[0],"playbackBarRight":0,"subtitlesTextShadowBlurRadius":0},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","media":"this.panorama_8D966106_8691_281A_41DA_60CD8653C84E","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_8D966106_8691_281A_41DA_60CD8653C84E_camera"}],"id":"mainPlayList"},{"class":"PanoramaPlayer","touchControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"surfaceSelectionEnabled":false,"viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","zoomEnabled":true,"arrowKeysAction":"translate","displayPlaybackBar":true},{"class":"PlayerMenuItem","label":"360 Eiendom","id":"TDVAuthor"},{"class":"SnowPanoramaOverlay","id":"overlay_8ABD97C0_8691_2816_41D5_A66701826902","intensity":0.36,"speed":0.25},{"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"areas":["this.HotspotPanoramaOverlayArea_9775FD43_8691_181A_41D9_7D9581EE1602"],"useHandCursor":true,"enabledInCardboard":true,"items":[{"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/panorama_8D966106_8691_281A_41DA_60CD8653C84E_HS_gu936f0t.png","width":2048,"height":628}]},"pitch":-29.43,"yaw":122.72,"hfov":77.01,"data":{"label":"Text"},"class":"HotspotPanoramaOverlayImage","distance":50}],"id":"overlay_9775BD43_8691_181A_41D3_41D6AD8634CC","data":{"label":"Text"},"maps":[]},{"class":"AudioResource","oggUrl":"media/audio_97849971_8690_F8F6_41DE_85A20917D60F.ogg","id":"audiores_973CCE29_8691_3816_41C2_DF5B6D062538","mp3Url":"media/audio_97849971_8690_F8F6_41DE_85A20917D60F.mp3"},{"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96}],"id":"sequence_8F52B8D5_8691_F83E_41C4_08F459ABFD6E","restartMovementOnUserInteraction":false},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_9775FD43_8691_181A_41D9_7D9581EE1602"}],"desktopMipmappingEnabled":false,"horizontalAlign":"left","overflow":"hidden","borderSize":0,"defaultVRPointer":"laser","class":"Player","scrollBarMargin":2,"backgroundColor":["#FFFFFF"],"vrPolyfillScale":0.75,"mediaActivationMode":"window","contentOpaque":false,"scripts":{"updateVideoCues":TDV.Tour.Script.updateVideoCues,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"registerKey":TDV.Tour.Script.registerKey,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"playAudioList":TDV.Tour.Script.playAudioList,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"unregisterKey":TDV.Tour.Script.unregisterKey,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"existsKey":TDV.Tour.Script.existsKey,"cloneCamera":TDV.Tour.Script.cloneCamera,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setValue":TDV.Tour.Script.setValue,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPixels":TDV.Tour.Script.getPixels,"quizShowScore":TDV.Tour.Script.quizShowScore,"init":TDV.Tour.Script.init,"setLocale":TDV.Tour.Script.setLocale,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"resumePlayers":TDV.Tour.Script.resumePlayers,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"mixObject":TDV.Tour.Script.mixObject,"quizStart":TDV.Tour.Script.quizStart,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"quizFinish":TDV.Tour.Script.quizFinish,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getKey":TDV.Tour.Script.getKey,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"textToSpeech":TDV.Tour.Script.textToSpeech,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getOverlays":TDV.Tour.Script.getOverlays,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"openLink":TDV.Tour.Script.openLink,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMapLocation":TDV.Tour.Script.setMapLocation,"getComponentByName":TDV.Tour.Script.getComponentByName,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"historyGoForward":TDV.Tour.Script.historyGoForward,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"shareSocial":TDV.Tour.Script.shareSocial,"getMainViewer":TDV.Tour.Script.getMainViewer,"initGA":TDV.Tour.Script.initGA,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"initQuiz":TDV.Tour.Script.initQuiz,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"isPanorama":TDV.Tour.Script.isPanorama,"showWindow":TDV.Tour.Script.showWindow,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"translate":TDV.Tour.Script.translate,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList},"minHeight":20,"downloadEnabled":false,"backgroundColorRatios":[0],"minWidth":20,"toolTipHorizontalAlign":"center","scrollBarOpacity":0.5,"propagateClick":false,"mouseWheelEnabled":true,"layout":"absolute","scrollBarVisible":"rollOver","mobileMipmappingEnabled":false,"menu":["this.TDVAuthor"],"shadow":false,"paddingTop":0,"data":{"name":"Player832","defaultLocale":"en","textToSpeechConfig":{"speechOnInfoWindow":false,"pitch":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"volume":1,"rate":1},"locales":{"en":"locale/en.txt"}},"backgroundColorDirection":"vertical","height":"100%"};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.5.4.js.map
//Generated with v2020.5.4, Mon Dec 21 2020