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
    var b = {"start":"this.init()","minWidth":20,"paddingBottom":0,"id":"rootPlayer","gap":10,"verticalAlign":"top","scripts":{"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getComponentByName":TDV.Tour.Script.getComponentByName,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"initQuiz":TDV.Tour.Script.initQuiz,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPixels":TDV.Tour.Script.getPixels,"shareSocial":TDV.Tour.Script.shareSocial,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"init":TDV.Tour.Script.init,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getMediaByName":TDV.Tour.Script.getMediaByName,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"cloneCamera":TDV.Tour.Script.cloneCamera,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"quizStart":TDV.Tour.Script.quizStart,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"historyGoBack":TDV.Tour.Script.historyGoBack,"quizFinish":TDV.Tour.Script.quizFinish,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"unregisterKey":TDV.Tour.Script.unregisterKey,"setLocale":TDV.Tour.Script.setLocale,"textToSpeech":TDV.Tour.Script.textToSpeech,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"playAudioList":TDV.Tour.Script.playAudioList,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"initGA":TDV.Tour.Script.initGA,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getKey":TDV.Tour.Script.getKey,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"existsKey":TDV.Tour.Script.existsKey,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setMapLocation":TDV.Tour.Script.setMapLocation,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"openLink":TDV.Tour.Script.openLink,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getMainViewer":TDV.Tour.Script.getMainViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"historyGoForward":TDV.Tour.Script.historyGoForward,"registerKey":TDV.Tour.Script.registerKey,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"showWindow":TDV.Tour.Script.showWindow,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setValue":TDV.Tour.Script.setValue,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"resumePlayers":TDV.Tour.Script.resumePlayers,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"translate":TDV.Tour.Script.translate,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"isPanorama":TDV.Tour.Script.isPanorama,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"mixObject":TDV.Tour.Script.mixObject,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getOverlays":TDV.Tour.Script.getOverlays,"getMediaWidth":TDV.Tour.Script.getMediaWidth},"overflow":"hidden","downloadEnabled":false,"backgroundColorDirection":"vertical","children":["this.MainViewer"],"scrollBarColor":"#000000","backgroundPreloadEnabled":true,"propagateClick":false,"borderRadius":0,"horizontalAlign":"left","scrollBarMargin":2,"paddingLeft":0,"borderSize":0,"width":"100%","vrPolyfillScale":0.75,"scrollBarVisible":"rollOver","paddingRight":0,"backgroundColor":["#FFFFFF"],"class":"Player","mediaActivationMode":"window","menu":["this.TDVAuthor"],"height":"100%","scrollBarWidth":10,"backgroundColorRatios":[0],"layout":"absolute","defaultVRPointer":"laser","toolTipHorizontalAlign":"center","definitions": [{"label":trans('panorama_8D966106_8691_281A_41DA_60CD8653C84E.label'),"id":"panorama_8D966106_8691_281A_41DA_60CD8653C84E","thumbnailUrl":"media/panorama_8D966106_8691_281A_41DA_60CD8653C84E_t.jpg","class":"Panorama","hfov":360,"pitch":0,"partial":false,"vfov":120,"audios":["this.audio_97849971_8690_F8F6_41DE_85A20917D60F"],"overlays":["this.overlay_8ABD97C0_8691_2816_41D5_A66701826902","this.overlay_9775BD43_8691_181A_41D3_41D6AD8634CC","this.overlay_936F75C4_8790_E81E_41C0_11CB58824F25","this.overlay_8CC34015_8750_BA89_41D9_9D215B5CAB6B"],"hfovMax":130,"data":{"label":"God Jul"},"frames":[{"cube":{"class":"ImageResource","levels":[{"url":"media/panorama_8D966106_8691_281A_41DA_60CD8653C84E_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":8,"width":24576,"colCount":48,"height":4096,"tags":"ondemand"},{"url":"media/panorama_8D966106_8691_281A_41DA_60CD8653C84E_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":4,"width":12288,"colCount":24,"height":2048,"tags":"ondemand"},{"url":"media/panorama_8D966106_8691_281A_41DA_60CD8653C84E_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":2,"width":6144,"colCount":12,"height":1024,"tags":"ondemand"},{"url":"media/panorama_8D966106_8691_281A_41DA_60CD8653C84E_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":1,"width":3072,"colCount":6,"height":512,"tags":["ondemand","preload"]},{"url":"media/panorama_8D966106_8691_281A_41DA_60CD8653C84E_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","rowCount":1,"width":9216,"colCount":6,"height":1536,"tags":"mobilevr"}]},"thumbnailUrl":"media/panorama_8D966106_8691_281A_41DA_60CD8653C84E_t.jpg","class":"CubicPanoramaFrame"}]},{"loop":false,"audio":"this.audiores_973CCE29_8691_3816_41C2_DF5B6D062538","class":"PanoramaAudio","id":"audio_97849971_8690_F8F6_41DE_85A20917D60F","autoplay":true,"data":{"label":"414673__lena-orsa__a-christmas-tale"}},{"toolTipOpacity":1,"progressOpacity":1,"toolTipDisplayTime":600,"id":"MainViewer","shadow":false,"subtitlesTextShadowBlurRadius":0,"width":"100%","playbackBarHeadBackgroundColorRatios":[0,1],"progressRight":0,"playbackBarHeadShadowColor":"#000000","subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowVerticalLength":0,"playbackBarProgressBackgroundColor":["#3399FF"],"transitionMode":"blending","propagateClick":false,"subtitlesTextShadowHorizontalLength":1,"progressBorderSize":0,"subtitlesFontFamily":"Arial","progressHeight":10,"progressBarBackgroundColorDirection":"vertical","playbackBarHeadBorderSize":0,"paddingLeft":0,"borderSize":0,"vrPointerSelectionColor":"#FF6600","toolTipBackgroundColor":"#F6F6F6","toolTipShadowOpacity":1,"transitionDuration":500,"paddingRight":0,"playbackBarHeadShadow":true,"subtitlesPaddingTop":5,"subtitlesShadow":false,"subtitlesOpacity":1,"vrPointerSelectionTime":2000,"toolTipShadowBlurRadius":3,"height":"100%","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadOpacity":1,"toolTipBorderRadius":3,"class":"ViewerArea","progressBarBorderSize":0,"subtitlesBackgroundColor":"#000000","subtitlesGap":0,"toolTipPaddingLeft":6,"firstTransitionDuration":0,"doubleClickAction":"toggle_fullscreen","toolTipTextShadowColor":"#000000","toolTipShadowColor":"#333333","playbackBarBorderRadius":0,"playbackBarOpacity":1,"progressBarBorderRadius":0,"vrPointerColor":"#FFFFFF","subtitlesHorizontalAlign":"center","playbackBarProgressBorderColor":"#000000","progressBorderColor":"#000000","subtitlesVerticalAlign":"bottom","minWidth":100,"playbackBarBorderColor":"#FFFFFF","paddingTop":0,"toolTipFontFamily":"Arial","paddingBottom":0,"toolTipPaddingTop":4,"progressBarBackgroundColor":["#3399FF"],"toolTipFontSize":"1.11vmin","toolTipShadowSpread":0,"displayTooltipInSurfaceSelection":true,"progressBarBorderColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBackgroundOpacity":1,"subtitlesTop":0,"playbackBarBottom":5,"minHeight":50,"subtitlesBorderSize":0,"subtitlesFontColor":"#FFFFFF","surfaceReticleSelectionOpacity":1,"playbackBarBackgroundOpacity":1,"playbackBarProgressBackgroundColorDirection":"vertical","toolTipFontWeight":"normal","toolTipBorderSize":1,"subtitlesTextShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","toolTipTextShadowOpacity":0,"subtitlesFontWeight":"normal","surfaceReticleColor":"#FFFFFF","borderRadius":0,"subtitlesTextShadowOpacity":1,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","toolTipFontStyle":"normal","playbackBarProgressOpacity":1,"toolTipShadowHorizontalLength":0,"progressBackgroundColor":["#FFFFFF"],"toolTipFontColor":"#606060","progressBackgroundColorRatios":[0],"playbackBarHeight":10,"subtitlesFontSize":"3vmin","progressBarOpacity":1,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadBackgroundColorDirection":"vertical","playbackBarBorderSize":0,"playbackBarHeadWidth":6,"surfaceReticleOpacity":0.6,"subtitlesPaddingLeft":5,"subtitlesBackgroundOpacity":0.2,"subtitlesPaddingRight":5,"subtitlesPaddingBottom":5,"subtitlesBottom":50,"progressBorderRadius":0,"toolTipPaddingBottom":4,"displayTooltipInTouchScreens":true,"toolTipBorderColor":"#767676","subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadowHorizontalLength":0,"subtitlesTextDecoration":"none","playbackBarProgressBorderSize":0,"toolTipHorizontalAlign":"center","progressBarBackgroundColorRatios":[0],"toolTipShadowVerticalLength":0,"data":{"name":"Main Viewer"},"playbackBarBackgroundColorDirection":"vertical","toolTipTextShadowBlurRadius":3,"progressBottom":0,"progressLeft":0,"playbackBarRight":0,"playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"playbackBarHeadHeight":15,"playbackBarProgressBorderRadius":0,"progressBackgroundColorDirection":"vertical","toolTipPaddingRight":6},{"class":"PanoramaCamera","initialSequence":"this.sequence_8F52B8D5_8691_F83E_41C4_08F459ABFD6E","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_8D966106_8691_281A_41DA_60CD8653C84E_camera","automaticZoomSpeed":10},{"class":"PlayList","id":"mainPlayList","items":[{"media":"this.panorama_8D966106_8691_281A_41DA_60CD8653C84E","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","camera":"this.panorama_8D966106_8691_281A_41DA_60CD8653C84E_camera","player":"this.MainViewerPanoramaPlayer"}]},{"surfaceSelectionEnabled":false,"arrowKeysAction":"translate","class":"PanoramaPlayer","touchControlMode":"drag_rotation","displayPlaybackBar":true,"gyroscopeVerticalDraggingEnabled":true,"id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","zoomEnabled":true},{"label":"360 Eiendom","class":"PlayerMenuItem","id":"TDVAuthor"},{"intensity":0.36,"class":"SnowPanoramaOverlay","id":"overlay_8ABD97C0_8691_2816_41D5_A66701826902","speed":0.25},{"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"enabledInCardboard":true,"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","image":{"class":"ImageResource","levels":[{"url":"media/panorama_8D966106_8691_281A_41DA_60CD8653C84E_HS_gu936f0t.png","width":2048,"class":"ImageResourceLevel","height":628}]},"pitch":-29.43,"hfov":77.01,"yaw":122.72,"data":{"label":"Text"},"distance":50}],"id":"overlay_9775BD43_8691_181A_41D3_41D6AD8634CC","maps":[],"data":{"label":"Text"},"areas":["this.HotspotPanoramaOverlayArea_9775FD43_8691_181A_41D9_7D9581EE1602"]},{"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"enabledInCardboard":true,"useHandCursor":true,"items":[{"verticalAlign":"middle","hfov":32.84,"image":"this.AnimatedImageResource_8A3045C8_8750_4586_41E0_83BBDEA323FF","pitch":-17,"yaw":-169.97,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","scaleMode":"fit_inside","data":{"label":"Image"},"distance":50,"vfov":54.7}],"id":"overlay_936F75C4_8790_E81E_41C0_11CB58824F25","maps":[],"data":{"label":"Image"},"areas":["this.HotspotPanoramaOverlayArea_93F04635_8790_E87E_41E0_826DC8791FCF"]},{"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"enabledInCardboard":true,"useHandCursor":true,"items":[{"verticalAlign":"middle","hfov":5.52,"image":"this.AnimatedImageResource_8A3015C8_8750_4586_41D1_0D736C1781BE","pitch":-7.33,"yaw":-101.21,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","scaleMode":"fit_inside","data":{"label":"Image"},"distance":50,"vfov":6.87}],"id":"overlay_8CC34015_8750_BA89_41D9_9D215B5CAB6B","maps":[],"data":{"label":"Image"},"areas":["this.HotspotPanoramaOverlayArea_8B572086_8750_BB8A_41AF_41FBD449F3D1"]},{"class":"AudioResource","oggUrl":"media/audio_97849971_8690_F8F6_41DE_85A20917D60F.ogg","mp3Url":"media/audio_97849971_8690_F8F6_41DE_85A20917D60F.mp3","id":"audiores_973CCE29_8691_3816_41C2_DF5B6D062538"},{"movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_8F52B8D5_8691_F83E_41C4_08F459ABFD6E"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_9775FD43_8691_181A_41D9_7D9581EE1602"},{"colCount":6,"class":"AnimatedImageResource","rowCount":7,"levels":[{"url":"media/res_926039FC_8793_7BEE_41DB_90108A1E33FB_0.png","width":2880,"class":"ImageResourceLevel","height":3360}],"frameDuration":29,"frameCount":39,"id":"AnimatedImageResource_8A3045C8_8750_4586_41E0_83BBDEA323FF"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_93F04635_8790_E87E_41E0_826DC8791FCF"},{"colCount":7,"class":"AnimatedImageResource","rowCount":8,"levels":[{"url":"media/res_8A5C4D37_8750_4A89_41E0_ACA615F7CBE7_0.png","width":1344,"class":"ImageResourceLevel","height":1536}],"frameDuration":59,"frameCount":50,"id":"AnimatedImageResource_8A3015C8_8750_4586_41D1_0D736C1781BE"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_8B572086_8750_BB8A_41AF_41FBD449F3D1"}],"data":{"name":"Player832","defaultLocale":"en","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"pitch":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"rate":1,"volume":1}},"mouseWheelEnabled":true,"paddingTop":0,"desktopMipmappingEnabled":false,"backgroundOpacity":1,"contentOpaque":false,"minHeight":20,"shadow":false,"mobileMipmappingEnabled":false,"scrollBarOpacity":0.5};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.5.4.js.map
//Generated with v2020.5.4, Mon Dec 21 2020