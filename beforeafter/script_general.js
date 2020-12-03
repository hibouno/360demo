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
                                    S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var T = s != undefined ? S['getObjective'](s, r) : S['get'](r);
                                if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    T += 0x1;
                                return T;
                            } catch (U) {
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
    function createQuizConfig(player, V) {
        var W = {};
        W['player'] = player;
        W['playList'] = V;
        function X(a0) {
            for (var a1 = 0x0; a1 < a0['length']; ++a1) {
                var a2 = a0[a1];
                if ('id' in a2)
                    player[a2['id']] = a2;
            }
        }
        if (W['questions']) {
            X(W['questions']);
            for (var Y = 0x0; Y < W['questions']['length']; ++Y) {
                var Z = W['questions'][Y];
                X(Z['options']);
            }
        }
        if (W['objectives']) {
            X(W['objectives']);
        }
        if (W['califications']) {
            X(W['califications']);
        }
        if (W['score']) {
            player[W['score']['id']] = W['score'];
        }
        if (W['question']) {
            player[W['question']['id']] = W['question'];
        }
        if (W['timeout']) {
            player[W['timeout']['id']] = W['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return W;
    }
    var d = {"start":"this.init()","horizontalAlign":"left","id":"rootPlayer","overflow":"hidden","width":"100%","downloadEnabled":false,"children":["this.MainViewer"],"vrPolyfillScale":0.75,"defaultVRPointer":"laser","propagateClick":false,"borderRadius":0,"desktopMipmappingEnabled":false,"minHeight":20,"paddingTop":0,"paddingLeft":0,"minWidth":20,"borderSize":0,"height":"100%","paddingBottom":0,"class":"Player","shadow":false,"paddingRight":0,"scrollBarColor":"#000000","scrollBarOpacity":0.5,"definitions": [{"gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","mouseControlMode":"drag_rotation","zoomEnabled":true,"displayPlaybackBar":true,"viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","arrowKeysAction":"translate"},{"vfov":180,"data":{"label":"R0010191[1]"},"label":trans('panorama_24B8F2BB_2958_78EA_418A_072D44026A5C.label'),"class":"LivePanorama","id":"panorama_24B8F2BB_2958_78EA_418A_072D44026A5C","frameTransitionTime":5000,"partial":false,"hfov":360,"pitch":0,"hfovMax":130,"hfovMin":"135%","frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_24B8F2BB_2958_78EA_418A_072D44026A5C_0/{face}/0/{row}_{column}.jpg","rowCount":5,"colCount":30,"width":15360,"class":"TiledImageResourceLevel","tags":"ondemand","height":2560},{"url":"media/panorama_24B8F2BB_2958_78EA_418A_072D44026A5C_0/{face}/1/{row}_{column}.jpg","rowCount":3,"colCount":18,"width":9216,"class":"TiledImageResourceLevel","tags":"ondemand","height":1536},{"url":"media/panorama_24B8F2BB_2958_78EA_418A_072D44026A5C_0/{face}/2/{row}_{column}.jpg","rowCount":2,"colCount":12,"width":6144,"class":"TiledImageResourceLevel","tags":"ondemand","height":1024},{"url":"media/panorama_24B8F2BB_2958_78EA_418A_072D44026A5C_0/{face}/3/{row}_{column}.jpg","rowCount":1,"colCount":6,"width":3072,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"height":512},{"url":"media/panorama_24B8F2BB_2958_78EA_418A_072D44026A5C_0/{face}/vr/0.jpg","rowCount":1,"colCount":6,"width":9216,"class":"TiledImageResourceLevel","tags":"mobilevr","height":1536}]},"thumbnailUrl":"media/panorama_24B8F2BB_2958_78EA_418A_072D44026A5C_0_t.jpg"},{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_24B8F2BB_2958_78EA_418A_072D44026A5C_1/{face}/0/{row}_{column}.jpg","rowCount":5,"colCount":30,"width":15360,"class":"TiledImageResourceLevel","tags":"ondemand","height":2560},{"url":"media/panorama_24B8F2BB_2958_78EA_418A_072D44026A5C_1/{face}/1/{row}_{column}.jpg","rowCount":3,"colCount":18,"width":9216,"class":"TiledImageResourceLevel","tags":"ondemand","height":1536},{"url":"media/panorama_24B8F2BB_2958_78EA_418A_072D44026A5C_1/{face}/2/{row}_{column}.jpg","rowCount":2,"colCount":12,"width":6144,"class":"TiledImageResourceLevel","tags":"ondemand","height":1024},{"url":"media/panorama_24B8F2BB_2958_78EA_418A_072D44026A5C_1/{face}/3/{row}_{column}.jpg","rowCount":1,"colCount":6,"width":3072,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"height":512},{"url":"media/panorama_24B8F2BB_2958_78EA_418A_072D44026A5C_1/{face}/vr/0.jpg","rowCount":1,"colCount":6,"width":9216,"class":"TiledImageResourceLevel","tags":"mobilevr","height":1536}]},"thumbnailUrl":"media/panorama_24B8F2BB_2958_78EA_418A_072D44026A5C_1_t.jpg"}],"thumbnailUrl":"media/panorama_24B8F2BB_2958_78EA_418A_072D44026A5C_1_t.jpg","frameDisplayTime":5000},{"firstTransitionDuration":0,"progressBarBorderSize":0,"progressBarBorderRadius":0,"id":"MainViewer","subtitlesFontSize":"3vmin","subtitlesTextDecoration":"none","displayTooltipInTouchScreens":true,"subtitlesTextShadowColor":"#000000","subtitlesTextShadowBlurRadius":0,"playbackBarHeadShadowColor":"#000000","toolTipPaddingRight":6,"subtitlesTextShadowHorizontalLength":1,"toolTipPaddingLeft":6,"width":"100%","vrPointerColor":"#FFFFFF","subtitlesPaddingTop":5,"progressBorderRadius":0,"propagateClick":false,"subtitlesShadow":false,"borderRadius":0,"playbackBarHeadBorderSize":0,"playbackBarOpacity":1,"progressLeft":0,"playbackBarLeft":0,"vrPointerSelectionTime":2000,"toolTipFontSize":"1.11vmin","toolTipShadowOpacity":1,"playbackBarBorderSize":0,"minHeight":50,"paddingLeft":0,"minWidth":100,"height":"100%","progressBackgroundOpacity":1,"transitionMode":"blending","playbackBarHeight":10,"subtitlesPaddingBottom":5,"paddingRight":0,"toolTipDisplayTime":600,"subtitlesOpacity":1,"toolTipHorizontalAlign":"center","playbackBarProgressBorderSize":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"subtitlesGap":0,"playbackBarBorderColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorDirection":"vertical","toolTipBackgroundColor":"#F6F6F6","toolTipShadowVerticalLength":0,"subtitlesFontWeight":"normal","subtitlesBackgroundOpacity":0.2,"playbackBarProgressBorderColor":"#000000","playbackBarHeadShadow":true,"subtitlesFontFamily":"Arial","playbackBarBorderRadius":0,"playbackBarHeadOpacity":1,"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarHeadShadowHorizontalLength":0,"subtitlesBackgroundColor":"#000000","toolTipTextShadowBlurRadius":3,"toolTipTextShadowOpacity":0,"subtitlesVerticalAlign":"bottom","subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"playbackBarBackgroundColorDirection":"vertical","playbackBarHeadHeight":15,"subtitlesHorizontalAlign":"center","toolTipShadowSpread":0,"progressBackgroundColorRatios":[0],"subtitlesTextShadowOpacity":1,"doubleClickAction":"toggle_fullscreen","toolTipFontColor":"#606060","toolTipPaddingBottom":4,"toolTipBorderRadius":3,"toolTipShadowBlurRadius":3,"playbackBarRight":0,"progressRight":0,"progressBarBackgroundColorDirection":"vertical","progressOpacity":1,"progressBarBorderColor":"#000000","subtitlesTop":0,"playbackBarBackgroundOpacity":1,"paddingTop":0,"progressBarBackgroundColorRatios":[0],"playbackBarHeadWidth":6,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBackgroundColorDirection":"vertical","playbackBarHeadShadowVerticalLength":0,"shadow":false,"playbackBarHeadBorderRadius":0,"paddingBottom":0,"class":"ViewerArea","borderSize":0,"toolTipBorderColor":"#767676","playbackBarHeadShadowBlurRadius":3,"subtitlesPaddingLeft":5,"transitionDuration":500,"progressBorderColor":"#000000","playbackBarProgressBorderRadius":0,"toolTipFontFamily":"Arial","subtitlesBorderSize":0,"subtitlesBottom":50,"toolTipFontWeight":"normal","subtitlesPaddingRight":5,"playbackBarProgressOpacity":1,"progressBarBackgroundColor":["#3399FF"],"toolTipBorderSize":1,"progressBackgroundColor":["#FFFFFF"],"subtitlesFontColor":"#FFFFFF","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadBorderColor":"#000000","toolTipShadowColor":"#333333","toolTipShadowHorizontalLength":0,"data":{"name":"Main Viewer"},"progressBottom":0,"toolTipPaddingTop":4,"progressBarOpacity":1,"toolTipOpacity":1,"playbackBarBackgroundColor":["#FFFFFF"],"progressHeight":10,"toolTipFontStyle":"normal","vrPointerSelectionColor":"#FF6600","toolTipTextShadowColor":"#000000","progressBorderSize":0,"subtitlesTextShadowVerticalLength":1},{"initialSequence":"this.sequence_22851A85_2959_E89E_41AE_44D5A3723395","initialPosition":{"class":"PanoramaCameraPosition","yaw":-127.84,"pitch":-20.55},"class":"PanoramaCamera","id":"panorama_24B8F2BB_2958_78EA_418A_072D44026A5C_camera","automaticZoomSpeed":10},{"class":"PlayList","id":"mainPlayList","items":[{"media":"this.panorama_24B8F2BB_2958_78EA_418A_072D44026A5C","end":"this.trigger('tourEnded')","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)","camera":"this.panorama_24B8F2BB_2958_78EA_418A_072D44026A5C_camera","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"}]},{"label":"360Eiendom","class":"PlayerMenuItem","id":"TDVAuthor"},{"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"linear"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_22851A85_2959_E89E_41AE_44D5A3723395"}],"toolTipHorizontalAlign":"center","contentOpaque":false,"scrollBarVisible":"rollOver","verticalAlign":"top","scrollBarWidth":10,"gap":10,"mouseWheelEnabled":true,"mobileMipmappingEnabled":false,"layout":"absolute","menu":["this.TDVAuthor"],"scripts":{"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getKey":TDV.Tour.Script.getKey,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getMediaByName":TDV.Tour.Script.getMediaByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"initQuiz":TDV.Tour.Script.initQuiz,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizFinish":TDV.Tour.Script.quizFinish,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"openLink":TDV.Tour.Script.openLink,"initGA":TDV.Tour.Script.initGA,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizShowScore":TDV.Tour.Script.quizShowScore,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"init":TDV.Tour.Script.init,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getComponentByName":TDV.Tour.Script.getComponentByName,"showWindow":TDV.Tour.Script.showWindow,"historyGoForward":TDV.Tour.Script.historyGoForward,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"playAudioList":TDV.Tour.Script.playAudioList,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPixels":TDV.Tour.Script.getPixels,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getOverlays":TDV.Tour.Script.getOverlays,"isPanorama":TDV.Tour.Script.isPanorama,"setLocale":TDV.Tour.Script.setLocale,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"shareSocial":TDV.Tour.Script.shareSocial,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"existsKey":TDV.Tour.Script.existsKey,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"quizStart":TDV.Tour.Script.quizStart,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"cloneCamera":TDV.Tour.Script.cloneCamera,"unregisterKey":TDV.Tour.Script.unregisterKey,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"mixObject":TDV.Tour.Script.mixObject,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setValue":TDV.Tour.Script.setValue,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"textToSpeech":TDV.Tour.Script.textToSpeech,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"registerKey":TDV.Tour.Script.registerKey,"getMainViewer":TDV.Tour.Script.getMainViewer,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"translate":TDV.Tour.Script.translate,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia},"backgroundPreloadEnabled":true,"scrollBarMargin":2,"mediaActivationMode":"window","data":{"defaultLocale":"en","name":"Player3743","textToSpeechConfig":{"speechOnTooltip":false,"speechOnQuizQuestion":false,"pitch":1,"speechOnInfoWindow":false,"volume":1,"rate":1},"locales":{"en":"locale/en.txt"}}};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.4.16.js.map
//Generated with v2020.4.16, Thu Dec 3 2020