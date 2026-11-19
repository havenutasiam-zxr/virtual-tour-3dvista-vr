(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.')['map'](function (r) {
                        return r['trim']();
                    }), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
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
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
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
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer","this.thumbnaillist5245","this.label4056","this.Container_E2343E8C_F371_97FA_41E8_9D3E75BF6C39","this.WebFrame_FCBB408D_F376_8BF5_41C6_4F6971276AD8"],"width":"100%","xrPanelsEnabled":true,"class":"Player","scripts":{"historyGoForward":TDV.Tour.Script.historyGoForward,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"showWindow":TDV.Tour.Script.showWindow,"cloneBindings":TDV.Tour.Script.cloneBindings,"showWindowBase":TDV.Tour.Script.showWindowBase,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"clone":TDV.Tour.Script.clone,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"showPopupImage":TDV.Tour.Script.showPopupImage,"setValue":TDV.Tour.Script.setValue,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"mixObject":TDV.Tour.Script.mixObject,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getKey":TDV.Tour.Script.getKey,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getPixels":TDV.Tour.Script.getPixels,"historyGoBack":TDV.Tour.Script.historyGoBack,"unregisterKey":TDV.Tour.Script.unregisterKey,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizStart":TDV.Tour.Script.quizStart,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"openLink":TDV.Tour.Script.openLink,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getOverlays":TDV.Tour.Script.getOverlays,"existsKey":TDV.Tour.Script.existsKey,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"resumePlayers":TDV.Tour.Script.resumePlayers,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"downloadFile":TDV.Tour.Script.downloadFile,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"init":TDV.Tour.Script.init,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"shareSocial":TDV.Tour.Script.shareSocial,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"registerKey":TDV.Tour.Script.registerKey,"executeJS":TDV.Tour.Script.executeJS,"textToSpeech":TDV.Tour.Script.textToSpeech,"enableVR":TDV.Tour.Script.enableVR,"getMediaByName":TDV.Tour.Script.getMediaByName,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizFinish":TDV.Tour.Script.quizFinish,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"isPanorama":TDV.Tour.Script.isPanorama,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"disableVR":TDV.Tour.Script.disableVR,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"toggleVR":TDV.Tour.Script.toggleVR,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizShowScore":TDV.Tour.Script.quizShowScore,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"createTween":TDV.Tour.Script.createTween,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"initQuiz":TDV.Tour.Script.initQuiz,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"startMeasurement":TDV.Tour.Script.startMeasurement,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"unloadViewer":TDV.Tour.Script.unloadViewer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"translate":TDV.Tour.Script.translate,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"playAudioList":TDV.Tour.Script.playAudioList,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getComponentByName":TDV.Tour.Script.getComponentByName,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setLocale":TDV.Tour.Script.setLocale,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMainViewer":TDV.Tour.Script.getMainViewer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot},"data":{"locales":{"en":"locale/en.txt"},"history":{},"defaultLocale":"en","displayTooltipInTouchScreens":true,"name":"Player28156","textToSpeechConfig":{"pitch":1,"stopBackgroundAudio":false,"rate":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"volume":1,"speechOnQuizQuestion":false}},"backgroundColor":["#666666"],"id":"rootPlayer","layout":"absolute","start":"this.init(); this.syncPlaylists([this.mainPlayList,this.thumbnaillist5245_playlist])","propagateClick":false,"buttonToggleMute":["this.IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C"],"minHeight":20,"minWidth":20,"gap":10,"backgroundColorRatios":[0],"scrollBarMargin":2,"scrollBarColor":"#000000","defaultMenu":["fullscreen","mute","rotation"],"height":"100%","hash": "fd7c8c3c2116ebecb143f2f35ab6534d9260ee4cc59836c31152693ebc0cfd50", "definitions": [{"id":"mainPlayList","items":[{"camera":"this.panorama_FC2AB541_F36E_956D_41B6_4E6BFA6F6DB9_camera","media":"this.panorama_FC2AB541_F36E_956D_41B6_4E6BFA6F6DB9","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_FD4C8ED6_F36E_9716_41EC_C3E22B0FED8E_camera","media":"this.panorama_FD4C8ED6_F36E_9716_41EC_C3E22B0FED8E","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"camera":"this.panorama_FD4BF75E_F371_7516_41DB_204195EF6F92_camera","media":"this.panorama_FD4BF75E_F371_7516_41DB_204195EF6F92","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)"}],"class":"PlayList"},{"id":"thumbnaillist5245_playlist","items":[{"camera":"this.panorama_FC2AB541_F36E_956D_41B6_4E6BFA6F6DB9_camera","class":"PanoramaPlayListItem","media":"this.panorama_FC2AB541_F36E_956D_41B6_4E6BFA6F6DB9","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_FD4C8ED6_F36E_9716_41EC_C3E22B0FED8E_camera","class":"PanoramaPlayListItem","media":"this.panorama_FD4C8ED6_F36E_9716_41EC_C3E22B0FED8E","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_FD4BF75E_F371_7516_41DB_204195EF6F92_camera","class":"PanoramaPlayListItem","media":"this.panorama_FD4BF75E_F371_7516_41DB_204195EF6F92","player":"this.MainViewerPanoramaPlayer"}],"class":"PlayList"},{"progressBorderRadius":4,"toolTipFontColor":"#606060","playbackBarHeadShadowHorizontalLength":0,"subtitlesTextShadowHorizontalLength":1,"toolTipBackgroundColor":"#F6F6F6","class":"ViewerArea","playbackBarProgressBackgroundColorRatios":[0,1],"playbackBarHeadShadowOpacity":0.7,"left":0,"playbackBarBorderRadius":4,"right":0,"subtitlesGap":0,"playbackBarHeadBorderRadius":0,"data":{"name":"Main Viewer"},"subtitlesBackgroundColor":"#000000","playbackBarHeadBorderColor":"#000000","playbackBarProgressBorderColor":"#000000","playbackBarBorderColor":"#AAAAAA","playbackBarBorderSize":2,"progressBackgroundColorRatios":[0,1],"progressRight":10,"toolTipPaddingLeft":6,"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"toolTipPaddingBottom":4,"subtitlesFontColor":"#FFFFFF","subtitlesTop":0,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"vrThumbstickRotationStep":20,"playbackBarLeft":0,"progressBarBackgroundColorRatios":[0,1],"progressBarBorderColor":"#000000","toolTipPaddingRight":6,"playbackBarHeadHeight":30,"vrPointerColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadShadowVerticalLength":0,"playbackBarHeadBorderSize":0,"id":"MainViewer","subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"surfaceReticleSelectionColor":"#FFFFFF","progressBorderColor":"#AAAAAA","vrPointerSelectionColor":"#FF6600","subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadow":true,"progressBarBackgroundColor":["#222222","#444444"],"toolTipPaddingTop":4,"firstTransitionDuration":0,"progressBackgroundColor":["#EEEEEE","#CCCCCC"],"progressBottom":1,"propagateClick":false,"minHeight":50,"playbackBarBottom":10,"progressHeight":20,"minWidth":100,"toolTipShadowColor":"#333333","vrPointerSelectionTime":2000,"playbackBarHeight":20,"top":77,"toolTipFontFamily":"Arial","bottom":92,"progressBarBorderSize":0,"toolTipBorderColor":"#767676","progressBarBorderRadius":4,"toolTipTextShadowColor":"#000000","progressBorderSize":2,"playbackBarBackgroundColorDirection":"vertical","playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarProgressBorderSize":0,"playbackBarRight":0,"playbackBarHeadWidth":6,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#222222","#444444"],"subtitlesBottom":50,"subtitlesFontFamily":"Arial","progressLeft":10,"subtitlesTextShadowVerticalLength":1},{"backgroundOpacity":0,"horizontalAlign":"center","id":"label4056","class":"Label","fontSize":40,"fontFamily":"Arial","left":9,"text":trans('label4056.text'),"fontWeight":"bold","fontColor":"#666666","propagateClick":false,"data":{"name":"Label28174"},"minHeight":16,"minWidth":30,"top":14,"height":49,"width":292},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"initialSequence":"this.sequence_FD4BB0F3_F371_8B2E_41E2_70B6A301528A","id":"panorama_FD4BF75E_F371_7516_41DB_204195EF6F92_camera","enterPointingToHorizon":true,"class":"PanoramaCamera"},{"thumbnailUrl":"media/panorama_FD4BF75E_F371_7516_41DB_204195EF6F92_t.webp","data":{"label":"Image_C23249C2-EFB9-4E0D-9727-7BD8A601ED2E"},"hfov":360,"vfov":83.23,"label":trans('panorama_FD4BF75E_F371_7516_41DB_204195EF6F92.label'),"id":"panorama_FD4BF75E_F371_7516_41DB_204195EF6F92","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","rowCount":11,"url":"media/panorama_FD4BF75E_F371_7516_41DB_204195EF6F92_0/{face}/0/{row}_{column}.webp","colCount":66,"height":5632,"class":"TiledImageResourceLevel","width":33792},{"tags":"ondemand","rowCount":6,"url":"media/panorama_FD4BF75E_F371_7516_41DB_204195EF6F92_0/{face}/1/{row}_{column}.webp","colCount":36,"height":3072,"class":"TiledImageResourceLevel","width":18432},{"tags":"ondemand","rowCount":3,"url":"media/panorama_FD4BF75E_F371_7516_41DB_204195EF6F92_0/{face}/2/{row}_{column}.webp","colCount":18,"height":1536,"class":"TiledImageResourceLevel","width":9216},{"tags":"ondemand","rowCount":2,"url":"media/panorama_FD4BF75E_F371_7516_41DB_204195EF6F92_0/{face}/3/{row}_{column}.webp","colCount":12,"height":1024,"class":"TiledImageResourceLevel","width":6144},{"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_FD4BF75E_F371_7516_41DB_204195EF6F92_0/{face}/4/{row}_{column}.webp","colCount":6,"height":512,"class":"TiledImageResourceLevel","width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_FD4BF75E_F371_7516_41DB_204195EF6F92_t.webp"}],"hfovMax":130},{"horizontalAlign":"center","verticalAlign":"middle","class":"Container","backgroundColor":["#FFFFFF"],"overflow":"hidden","id":"Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3","layout":"horizontal","propagateClick":false,"data":{"name":"Container1206"},"minHeight":20,"minWidth":20,"gap":10,"scrollBarMargin":2,"backgroundColorRatios":[0],"width":85,"scrollBarColor":"#000000","height":"100%","children":["this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625","this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"]},{"itemThumbnailWidth":100,"backgroundOpacity":0.2,"toolTipFontColor":"#606060","toolTipBackgroundColor":"#F6F6F6","class":"ThumbnailList","selectedItemLabelFontWeight":"bold","paddingTop":10,"itemThumbnailScaleMode":"fit_outside","data":{"name":"ThumbnailList28173"},"right":9,"itemThumbnailOpacity":1,"itemLabelTextDecoration":"none","paddingBottom":10,"itemBackgroundColorDirection":"vertical","itemLabelFontFamily":"Arial","itemLabelFontColor":"#FFFFFF","gap":10,"backgroundColorRatios":[0],"itemLabelFontWeight":"normal","itemBackgroundOpacity":0,"playList":"this.thumbnaillist5245_playlist","toolTipPaddingLeft":6,"itemLabelGap":5,"toolTipPaddingBottom":4,"itemPaddingBottom":3,"itemThumbnailShadowBlurRadius":4,"itemThumbnailShadowOpacity":0.8,"paddingLeft":20,"itemLabelFontStyle":"normal","borderRadius":5,"toolTipPaddingRight":6,"paddingRight":20,"itemPaddingLeft":3,"id":"thumbnaillist5245","tabIndex":0,"itemLabelFontSize":14,"backgroundColor":["#000000"],"itemPaddingTop":3,"scrollBarMargin":2,"itemThumbnailHeight":75,"maxHeight":800,"layout":"vertical","itemPaddingRight":3,"toolTipPaddingTop":4,"itemThumbnailBorderRadius":5,"maxWidth":800,"propagateClick":false,"toolTipShadowColor":"#333333","minHeight":0,"minWidth":0,"itemThumbnailShadowColor":"#000000","top":84,"toolTipFontFamily":"Arial","itemBorderRadius":0,"bottom":100,"toolTipBorderColor":"#767676","itemBackgroundColor":[],"scrollBarColor":"#FFFFFF","toolTipTextShadowColor":"#000000","itemThumbnailShadow":true,"itemThumbnailShadowSpread":1,"itemBackgroundColorRatios":[]},{"horizontalAlign":"center","verticalAlign":"middle","class":"Container","backgroundColor":["#FFFFFF"],"overflow":"hidden","id":"Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137","layout":"horizontal","propagateClick":false,"data":{"name":"Container1200"},"minHeight":20,"minWidth":20,"gap":5,"scrollBarMargin":2,"backgroundColorRatios":[0],"width":133,"scrollBarColor":"#000000","height":"100%","children":["this.IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5","this.Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A","this.IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894"]},{"hfovMax":130,"hfov":360,"vfov":81.47,"id":"panorama_FD4C8ED6_F36E_9716_41EC_C3E22B0FED8E","overlays":["this.overlay_E705892E_F3D6_BD37_41E4_030A25761442"],"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","rowCount":11,"url":"media/panorama_FD4C8ED6_F36E_9716_41EC_C3E22B0FED8E_0/{face}/0/{row}_{column}.webp","colCount":66,"height":5632,"class":"TiledImageResourceLevel","width":33792},{"tags":"ondemand","rowCount":6,"url":"media/panorama_FD4C8ED6_F36E_9716_41EC_C3E22B0FED8E_0/{face}/1/{row}_{column}.webp","colCount":36,"height":3072,"class":"TiledImageResourceLevel","width":18432},{"tags":"ondemand","rowCount":3,"url":"media/panorama_FD4C8ED6_F36E_9716_41EC_C3E22B0FED8E_0/{face}/2/{row}_{column}.webp","colCount":18,"height":1536,"class":"TiledImageResourceLevel","width":9216},{"tags":"ondemand","rowCount":2,"url":"media/panorama_FD4C8ED6_F36E_9716_41EC_C3E22B0FED8E_0/{face}/3/{row}_{column}.webp","colCount":12,"height":1024,"class":"TiledImageResourceLevel","width":6144},{"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_FD4C8ED6_F36E_9716_41EC_C3E22B0FED8E_0/{face}/4/{row}_{column}.webp","colCount":6,"height":512,"class":"TiledImageResourceLevel","width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_FD4C8ED6_F36E_9716_41EC_C3E22B0FED8E_t.webp"}],"class":"Panorama","data":{"label":"Image_36AFC6CE-6BD3-4C46-AAA4-D854F0807EFA"},"adjacentPanoramas":[{"data":{"overlayID":"overlay_E705892E_F3D6_BD37_41E4_030A25761442"},"distance":2.6,"yaw":77.99,"class":"AdjacentPanorama","select":"this.overlay_E705892E_F3D6_BD37_41E4_030A25761442.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_FC2AB541_F36E_956D_41B6_4E6BFA6F6DB9"}],"label":trans('panorama_FD4C8ED6_F36E_9716_41EC_C3E22B0FED8E.label'),"thumbnailUrl":"media/panorama_FD4C8ED6_F36E_9716_41EC_C3E22B0FED8E_t.webp"},{"horizontalAlign":"center","backgroundOpacity":0,"class":"IconButton","tabIndex":0,"id":"IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411","data":{"name":"Button1208"},"propagateClick":false,"iconURL":"skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411.png","minHeight":0,"minWidth":0,"verticalAlign":"middle","height":30,"width":30,"transparencyActive":true,"rollOverIconURL":"skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_rollover.png","pressedIconURL":"skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_pressed.png"},{"thumbnailUrl":"media/panorama_FC2AB541_F36E_956D_41B6_4E6BFA6F6DB9_t.webp","data":{"label":"Image_2D996FC7-D3B8-46A3-84CE-0213E2B39D97"},"hfov":360,"vfov":82.84,"label":trans('panorama_FC2AB541_F36E_956D_41B6_4E6BFA6F6DB9.label'),"id":"panorama_FC2AB541_F36E_956D_41B6_4E6BFA6F6DB9","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","rowCount":11,"url":"media/panorama_FC2AB541_F36E_956D_41B6_4E6BFA6F6DB9_0/{face}/0/{row}_{column}.webp","colCount":66,"height":5632,"class":"TiledImageResourceLevel","width":33792},{"tags":"ondemand","rowCount":6,"url":"media/panorama_FC2AB541_F36E_956D_41B6_4E6BFA6F6DB9_0/{face}/1/{row}_{column}.webp","colCount":36,"height":3072,"class":"TiledImageResourceLevel","width":18432},{"tags":"ondemand","rowCount":3,"url":"media/panorama_FC2AB541_F36E_956D_41B6_4E6BFA6F6DB9_0/{face}/2/{row}_{column}.webp","colCount":18,"height":1536,"class":"TiledImageResourceLevel","width":9216},{"tags":"ondemand","rowCount":2,"url":"media/panorama_FC2AB541_F36E_956D_41B6_4E6BFA6F6DB9_0/{face}/3/{row}_{column}.webp","colCount":12,"height":1024,"class":"TiledImageResourceLevel","width":6144},{"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_FC2AB541_F36E_956D_41B6_4E6BFA6F6DB9_0/{face}/4/{row}_{column}.webp","colCount":6,"height":512,"class":"TiledImageResourceLevel","width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_FC2AB541_F36E_956D_41B6_4E6BFA6F6DB9_t.webp"}],"hfovMax":130},{"url":trans('WebFrame_FCBB408D_F376_8BF5_41C6_4F6971276AD8.url'),"class":"WebFrame","backgroundColor":["#FFFFFF"],"id":"WebFrame_FCBB408D_F376_8BF5_41C6_4F6971276AD8","data":{"name":"WebFrame"},"right":"2.64%","propagateClick":false,"minHeight":1,"minWidth":1,"backgroundColorRatios":[0],"bottom":"6.22%","height":"28.944%","width":"21.4%"},{"horizontalAlign":"center","backgroundOpacity":0,"class":"IconButton","tabIndex":0,"id":"IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440","data":{"name":"Button1195"},"propagateClick":false,"iconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440.png","minHeight":0,"minWidth":0,"verticalAlign":"middle","height":38,"width":38,"transparencyActive":true,"rollOverIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_rollover.png","pressedIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_pressed.png"},{"horizontalAlign":"center","verticalAlign":"middle","class":"Container","backgroundColor":["#FFFFFF"],"overflow":"hidden","id":"Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718","layout":"horizontal","propagateClick":false,"data":{"name":"Container1194"},"minHeight":20,"minWidth":468,"gap":10,"scrollBarMargin":2,"backgroundColorRatios":[0],"width":468,"scrollBarColor":"#000000","height":"93.478%","children":["this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440","this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247","this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40","this.IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C","this.Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137","this.Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3"]},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"initialSequence":"this.sequence_FD4B90F2_F371_8B2E_41C5_8C8FDD93E4B8","id":"panorama_FD4C8ED6_F36E_9716_41EC_C3E22B0FED8E_camera","enterPointingToHorizon":true,"class":"PanoramaCamera"},{"horizontalAlign":"center","backgroundOpacity":0,"class":"IconButton","tabIndex":0,"id":"IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625","data":{"name":"Button1207"},"propagateClick":false,"iconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625.png","minHeight":0,"minWidth":0,"verticalAlign":"middle","height":30,"width":30,"transparencyActive":true,"rollOverIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_rollover.png","pressedIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_pressed.png"},{"pressedBackgroundColorRatios":[0],"paddingRight":0,"horizontalAlign":"center","backgroundOpacity":0,"class":"Button","fontSize":18,"backgroundColor":["#000000"],"fontFamily":"Oswald","tabIndex":0,"id":"Button_E6B77583_F3F1_95B7_41DA_97A229392FC0","rollOverBackgroundColor":["#FF361B"],"layout":"horizontal","pressedBackgroundColor":["#000000"],"paddingTop":0,"paddingBottom":0,"rollOverBackgroundOpacity":0.8,"iconHeight":0,"fontColor":"#FFFFFF","label":trans('Button_E6B77583_F3F1_95B7_41DA_97A229392FC0.label'),"propagateClick":false,"data":{"name":"Button house info"},"pressedBackgroundOpacity":1,"minHeight":1,"click":"this.toggleVR()","minWidth":1,"verticalAlign":"middle","backgroundColorRatios":[0],"height":40,"width":120,"fontStyle":"italic","borderColor":"#000000","rollOverShadow":false,"iconWidth":0,"rollOverBackgroundColorRatios":[0],"paddingLeft":0},{"horizontalAlign":"center","backgroundOpacity":0,"class":"IconButton","tabIndex":0,"id":"IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB","data":{"name":"Button1203"},"propagateClick":false,"iconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB.png","minHeight":0,"minWidth":0,"verticalAlign":"middle","height":30,"width":30,"transparencyActive":true,"rollOverIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB_rollover.png","pressedIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB_pressed.png"},{"horizontalAlign":"center","backgroundOpacity":0,"class":"IconButton","tabIndex":0,"id":"IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C","data":{"name":"Button1199"},"propagateClick":false,"mode":"toggle","iconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C.png","minHeight":0,"minWidth":0,"verticalAlign":"middle","height":38,"width":38,"transparencyActive":true,"pressedIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C_pressed.png"},{"horizontalAlign":"center","backgroundOpacity":0,"class":"IconButton","tabIndex":0,"id":"IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894","data":{"name":"Button1205"},"propagateClick":false,"iconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894.png","minHeight":0,"minWidth":0,"verticalAlign":"middle","height":30,"width":30,"transparencyActive":true,"rollOverIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894_rollover.png","pressedIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894_pressed.png"},{"backgroundOpacity":0.3,"horizontalAlign":"center","verticalAlign":"middle","id":"Container_E2343E8C_F371_97FA_41E8_9D3E75BF6C39","class":"Container","left":"0%","backgroundColor":["#FFFFFF","#FFFFFF"],"overflow":"scroll","layout":"horizontal","propagateClick":false,"minHeight":1,"minWidth":1,"gap":6,"backgroundColorRatios":[0,1],"scrollBarMargin":2,"bottom":"0%","data":{"name":"Container29432"},"scrollBarColor":"#000000","height":92,"children":["this.Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718","this.Button_E6B77583_F3F1_95B7_41DA_97A229392FC0"],"width":"100%"},{"horizontalAlign":"center","backgroundOpacity":0,"class":"IconButton","tabIndex":0,"id":"IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5","data":{"name":"Button1201"},"propagateClick":false,"iconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5.png","minHeight":0,"minWidth":0,"verticalAlign":"middle","height":30,"width":30,"transparencyActive":true,"rollOverIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5_rollover.png","pressedIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5_pressed.png"},{"horizontalAlign":"center","backgroundOpacity":0,"class":"IconButton","tabIndex":0,"id":"IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40","data":{"name":"Button1198"},"propagateClick":false,"iconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40.png","minHeight":0,"minWidth":0,"verticalAlign":"middle","height":38,"width":38,"transparencyActive":true,"rollOverIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_rollover.png","pressedIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_pressed.png"},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"initialSequence":"this.sequence_FD4870F1_F371_8B2A_41D0_BF3438228030","id":"panorama_FC2AB541_F36E_956D_41B6_4E6BFA6F6DB9_camera","enterPointingToHorizon":true,"class":"PanoramaCamera"},{"id":"MainViewerPanoramaPlayer","buttonZoomOut":["this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625"],"buttonPlayRight":["this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40"],"displayPlaybackBar":true,"buttonMoveLeft":["this.IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5"],"aaEnabled":true,"touchControlMode":"drag_rotation","buttonMoveRight":["this.IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894"],"buttonZoomIn":["this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"],"buttonPlayLeft":["this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247"],"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","viewerArea":"this.MainViewer","buttonMoveUp":["this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB"],"buttonRestart":["this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440"],"keepModel3DLoadedWithoutLocation":true,"class":"PanoramaPlayer","buttonMoveDown":["this.IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2"]},{"horizontalAlign":"center","backgroundOpacity":0,"class":"IconButton","tabIndex":0,"id":"IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247","data":{"name":"Button1196"},"propagateClick":false,"iconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247.png","minHeight":0,"minWidth":0,"verticalAlign":"middle","height":38,"width":38,"transparencyActive":true,"rollOverIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_rollover.png","pressedIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_pressed.png"},{"horizontalAlign":"center","backgroundOpacity":0,"class":"IconButton","tabIndex":0,"id":"IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2","data":{"name":"Button1204"},"propagateClick":false,"iconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2.png","minHeight":0,"minWidth":0,"verticalAlign":"middle","height":30,"width":30,"transparencyActive":true,"rollOverIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2_rollover.png","pressedIconURL":"skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2_pressed.png"},{"horizontalAlign":"center","verticalAlign":"middle","class":"Container","backgroundColor":["#FFFFFF"],"overflow":"hidden","id":"Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A","layout":"vertical","propagateClick":false,"data":{"name":"Container1202"},"minHeight":20,"minWidth":20,"gap":10,"scrollBarMargin":2,"backgroundColorRatios":[0],"width":47,"scrollBarColor":"#000000","height":"100%","children":["this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB","this.IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2"]},{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"id":"sequence_FD4BB0F3_F371_8B2E_41E2_70B6A301528A","class":"PanoramaCameraSequence"},{"data":{"hasPanoramaAction":true,"label":"Polygon"},"items":[{"pitch":-33.21,"distance":50,"class":"HotspotPanoramaOverlayImage","yaw":77.99,"data":{"label":"Polygon"},"hfov":5.56,"vfov":3.36,"image":{"levels":[{"url":"media/panorama_FD4C8ED6_F36E_9716_41EC_C3E22B0FED8E_HS_qc4i7r3a.webp","height":152,"class":"ImageResourceLevel","width":252}],"class":"ImageResource"}}],"maps":[],"enabledInVR":true,"useHandCursor":true,"id":"overlay_E705892E_F3D6_BD37_41E4_030A25761442","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_E74C498F_F3D6_BDF6_41E5_FDC66EF1AB01"]},{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"id":"sequence_FD4B90F2_F371_8B2E_41C5_8C8FDD93E4B8","class":"PanoramaCameraSequence"},{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"id":"sequence_FD4870F1_F371_8B2A_41D0_BF3438228030","class":"PanoramaCameraSequence"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_E74C498F_F3D6_BDF6_41E5_FDC66EF1AB01","mapColor":"image","class":"HotspotPanoramaOverlayArea","toolTip":trans('HotspotPanoramaOverlayArea_E74C498F_F3D6_BDF6_41E5_FDC66EF1AB01.toolTip')}]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.1.2, Thu Nov 19 2026