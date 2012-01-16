function NPlayer(params) {
    var nPlayer = this;

    //Create html object
    var container;
    var containerId = params.containerId;
    if (containerId) {
        var container = document.createElement('div');
        container.setAttribute('id', containerId);
        document.getElementById(containerId).parentNode.replaceChild(container, document.getElementById(containerId));
    } else {
        container = document;
    }
    var height = params.height ? params.height : 80;
    var width = params.width ? params.width : 300;

    var back = document.createElement('div');
    back.className = 'nPlayer_back';
    back.style.height = height + 'px';
    back.style.width = width + 'px';
    container.appendChild(back);

    var playBox = document.createElement('div');
    playBox.setAttribute('id', 'nPlayer_playBox');
    playBox.className = 'nPlayer_playBox';
    playBox.style.height = height + 'px';
    playBox.style.width = width + 'px';
    if(params.backgroundColor){
        playBox.style.backgroundColor=params.backgroundColor;
    }
    else{
        //playBox.style.backgroundColor='#EEE';
    }
    var playBoxTop = container.clientHeight - height;
    var playBoxLeft = container.clientWidth - width;
    if (playBoxTop > 0) {
        back.style.marginTop = playBoxTop / 2+'px';
    }
    if (playBoxLeft > 0) {
        back.style.marginLeft = playBoxLeft / 2+'px';
    }
    back.appendChild(playBox);

    var fileChoser = document.createElement('input');
    fileChoser.setAttribute('type', 'file');
    fileChoser.setAttribute('title', '添加音乐到播放列表');
    fileChoser.setAttribute('multiple', 'multiple');
    fileChoser.setAttribute('id', 'nPlayer_fileChoser');
    playBox.appendChild(fileChoser);

    var backChoser = document.createElement('input');
    backChoser.setAttribute('type', 'file');
    backChoser.setAttribute('title', '设置背景图片');
    backChoser.setAttribute('id', 'nPlayer_backChoser');
    playBox.appendChild(backChoser);

    var hideDiv = document.createElement('div');
    hideDiv.className = 'hide';
    var player = document.createElement('audio');
    hideDiv.appendChild(player)
    playBox.appendChild(hideDiv);

    var playControl = document.createElement('div');
    playControl.className = 'nPlayer_playControl';

    var playDiv = document.createElement('div');
    playDiv.className = 'nPlayer_play';
    var btnPlay = document.createElement('span');
    btnPlay.setAttribute('id', 'nPlayer_play');
    btnPlay.className = 'nPlayer_icon_play';
    playDiv.appendChild(btnPlay);
    playControl.appendChild(playDiv);

    var soundDiv = document.createElement('div');
    soundDiv.className = 'nPlayer_sound';
    var btnSound = document.createElement('span');
    btnSound.setAttribute('id', 'nPlayer_sound');
    btnSound.className = 'nPlayer_icon_sound';
    soundDiv.appendChild(btnSound);
    playControl.appendChild(soundDiv);

    playBox.appendChild(playControl);

    var soundControl = document.createElement('div');
    soundControl.setAttribute('id', 'nPlayer_soundControl');

    var soundOutLine = document.createElement('div');
    soundOutLine.setAttribute('id', 'nPlayer_soundOutLine');
    var soundInLine = document.createElement('div');
    soundInLine.setAttribute('id', 'nPlayer_soundInLine');
    soundOutLine.appendChild(soundInLine);
    soundControl.appendChild(soundOutLine);

    var soundBar = document.createElement('div');
    soundBar.setAttribute('id', 'nPlayer_soundBar');
    soundControl.appendChild(soundBar);

    playBox.appendChild(soundControl);

    var timeNum = document.createElement('div');
    timeNum.setAttribute('id', 'nPlayer_timeNum');

    var timeNumCur = document.createElement('span');
    timeNumCur.setAttribute('id', 'nPlayer_timeNumCur');
    timeNumCur.innerHTML = ' 0 ';
    timeNum.appendChild(timeNumCur);

    timeNum.appendChild(document.createTextNode('/'))

    var timeNumMax = document.createElement('span');
    timeNumMax.setAttribute('id', 'nPlayer_timeNumMax');
    timeNumMax.innerHTML = ' 0 ';
    timeNum.appendChild(timeNumMax);

    playBox.appendChild(timeNum);

    var modControl = document.createElement('div');
    modControl.className = 'nPlayer_modControl';

    var normalDiv = document.createElement('div');
    normalDiv.className = 'nPlayer_normal radiusLeftTop';
    var btnNormal = document.createElement('span');
    btnNormal.setAttribute('id', 'nPlayer_normal');
    btnNormal.setAttribute('title', '普通模式');
    btnNormal.innerHTML = 'Norm';
    normalDiv.appendChild(btnNormal);
    modControl.appendChild(normalDiv);

    var loopOneDiv = document.createElement('div');
    loopOneDiv.className = 'nPlayer_loopOne';
    var btnLoopOne = document.createElement('span');
    btnLoopOne.setAttribute('id', 'nPlayer_loopOne');
    btnLoopOne.setAttribute('title', '单曲循环');
    btnLoopOne.innerHTML = '1';
    loopOneDiv.appendChild(btnLoopOne);
    modControl.appendChild(loopOneDiv);

    var loopAllDiv = document.createElement('div');
    loopAllDiv.className = 'nPlayer_loopAll radiusRightTop';
    var btnLoopAll = document.createElement('span');
    btnLoopAll.setAttribute('id', 'nPlayer_loopAll');
    btnLoopAll.setAttribute('title', '所有循环');
    btnLoopAll.className = 'nPlayer_icon_loopAll';
    loopAllDiv.appendChild(btnLoopAll);
    modControl.appendChild(loopAllDiv);

    playBox.appendChild(modControl);

    var timeControl = document.createElement('div');
    timeControl.setAttribute('id', 'nPlayer_timeControl');

    var timeOutLine = document.createElement('div');
    timeOutLine.setAttribute('id', 'nPlayer_timeOutLine');
    var timeInLine = document.createElement('div');
    timeInLine.setAttribute('id', 'nPlayer_timeInLine');
    timeOutLine.appendChild(timeInLine);
    timeControl.appendChild(timeOutLine);

    var timeBar = document.createElement('div');
    timeBar.setAttribute('id', 'nPlayer_timeBar');
    timeControl.appendChild(timeBar);

    playBox.appendChild(timeControl);

    var list = document.createElement('div');
    list.setAttribute('id', 'nPlayer_list');
    var songListBack = document.createElement('div');
    songListBack.className = 'nPlayer_songListBack';
    list.appendChild(songListBack);
    var playList = document.createElement('ul');
    playList.setAttribute('id', 'nPlayer_playList');
    list.appendChild(playList);
    playBox.appendChild(list);

    var cover = document.createElement('div');
    cover.setAttribute('id', 'nPlayer_cover');
    playBox.appendChild(cover);

    var info = document.createElement('div');
    info.setAttribute('id', 'nPlayer_info');
    var infoClose = document.createElement('div');
    infoClose.setAttribute('id', 'nPlayer_infoClose');
    infoClose.innerHTML = 'X';
    info.appendChild(infoClose);
    playBox.appendChild(info);

    var manu = document.createElement('div');
    manu.setAttribute('id', 'nPlayer_manu');

    var manuFile = document.createElement('div');
    manuFile.setAttribute('id', 'nPlayer_manuFile');
    manuFile.className = 'radiusLeftTop';
    manuFileSpan = document.createElement('span');
    manuFileSpan.innerHTML = '+';
    manuFile.appendChild(manuFileSpan)
    manu.appendChild(manuFile);

    var manuList = document.createElement('div');
    manuList.setAttribute('id', 'nPlayer_manuList');
    manuList.className = 'radiusRightTop';
    manuListSpan = document.createElement('span');
    manuListSpan.innerHTML = '列表';
    manuList.appendChild(manuListSpan);
    manu.appendChild(manuList);

    var manuBack = document.createElement('div');
    manuBack.setAttribute('id', 'nPlayer_manuBack');
    manuBackSpan = document.createElement('span');
    manuBackSpan.innerHTML = '背景';
    manuBack.appendChild(manuBackSpan);
    manu.appendChild(manuBack);

    var manuReset = document.createElement('div');
    manuReset.setAttribute('id', 'nPlayer_manuReset');
    manuResetSpan = document.createElement('span');
    manuResetSpan.innerHTML = '重置';
    manuReset.appendChild(manuResetSpan);
    manu.appendChild(manuReset);

    var manuAbout = document.createElement('div');
    manuAbout.setAttribute('id', 'nPlayer_manuAbout');
    manuAboutSpan = document.createElement('span');
    manuAboutSpan.innerHTML = '关于';
    manuAbout.appendChild(manuAboutSpan);
    manu.appendChild(manuAbout);

    playBox.appendChild(manu);

    //Init nPlayer object.
    nPlayer.container = container;

    nPlayer.playBox = playBox;

    nPlayer.fileChoser = fileChoser;
    nPlayer.backChoser = backChoser;

    nPlayer.player = player;

    nPlayer.btnPlay = btnPlay;
    nPlayer.btnSound = btnSound;

    nPlayer.soundControl = soundControl;
    nPlayer.soundOutLine = soundOutLine;
    nPlayer.soundInLine = soundInLine;
    nPlayer.soundBar = soundBar;

    nPlayer.timeNumCur = timeNumCur;
    nPlayer.timeNumMax = timeNumMax;

    nPlayer.modControl = modControl;
    nPlayer.btnLoopAll = btnLoopAll;
    nPlayer.btnLoopOne = btnLoopOne;
    nPlayer.btnNormal = btnNormal;

    nPlayer.timeControl = timeControl;
    nPlayer.timeOutLine = timeOutLine;
    nPlayer.timeInLine = timeInLine;
    nPlayer.timeBar = timeBar;

    nPlayer.list = list;
    nPlayer.songListBack=songListBack;
    nPlayer.playList = playList;

    nPlayer.cover = cover;
    nPlayer.info = info;
    nPlayer.infoClose = infoClose;

    nPlayer.currentSong = null;
    nPlayer.currentList = null;

    nPlayer.manuReset = manuReset;
    nPlayer.manuAbout = manuAbout;
    nPlayer.manuList = manuList;

    nPlayer.originSet = {
        mod: nPlayer.MOD_NORMAL,
        back: nPlayer.playBox.style.backgroundImage
    }

    nPlayer.init();
}

NPlayer.prototype.MOD_NORMAL = '0'
NPlayer.prototype.MOD_LOOPONE = '1'
NPlayer.prototype.MOD_LOOPALL = '2'

NPlayer.prototype.dbOpen = function() {
    var nPlayer = this;
    var version = '1.1';
    var playListCurrent = '';
    //sys - |=version
    //pl - :cur, :=plName:plName:...
    //sl - ?plName=songName?songName?...
    //song - [plName]>[songName]=songUrl
    if (localStorage.length == 0 || localStorage['|ver'] != version) {
        localStorage.clear();
        localStorage['|ver'] = version;
        localStorage['|back'] = '';
        localStorage['|mod'] = '';
        localStorage[':cur'] = 'Default';
        localStorage[':'] = 'Default';
        nPlayer.currentList = nPlayer.addPlayList('Default');
        nPlayer.setMod(nPlayer.MOD_NORMAL);
    } else {
        if (localStorage['|back'] != '') {
            nPlayer.playBox.style.backgroundImage = 'url("' + localStorage['|back'] + '")';
        }
        if (localStorage['|mod'] != '') {
            nPlayer.setMod(localStorage['|mod']);
        } else {
            nPlayer.setMod(nPlayer.MOD_NORMAL);
        }
        var playLists = localStorage[':'].split(':');
        var playListCur = localStorage[':cur'];
        for (var i = 0; i < playLists.length; i++) {
            var playListName = playLists[i]
            var playList = nPlayer.addPlayList(playListName);
            if (playListCur == playListName) {
                nPlayer.currentList = playList;
            }
            if (localStorage['?' + playListName]) {
                var songLists = localStorage['?' + playListName].split('?');
                for (var j = 0; j < songLists.length; j++) {
                    var songName = songLists[j];
                    nPlayer.addSongList(songName, localStorage[playListName + '>' + songName], playList)
                }
            }
        }
    }
    nPlayer.setList(nPlayer.currentList);
}

NPlayer.prototype.fileImplement = function(fileList) {
    var nPlayer = this;
    for (var i = 0; i < fileList.length; i++) {
        var reader = new FileReader();
        //need to research
        reader.onload = (function(file) {
            return function(e) {
                nPlayer.addSongList(file.name, e.target.result)
            }
        })(fileList[i]);
        reader.onerror = function(e) {
            switch (e.target.error.code) {
            case e.target.error.NOT_FOUND_ERR:
                alert("file not found");
                break;
            case e.target.error.SECURITY_ERR:
                alert('security error');
                break;
            case e.target.error.NOT_READABLE_ERR:
                alert("file not readable");
                break;
            case e.target.error.ABORT_ERR:
                alert("aborted");
                break;
            case e.target.error.ENCODING_ERR:
                alert('encoding error');
                break;
            default:
                alert('generic error: ' + e.target.error.code);
            }
        }
        reader.readAsDataURL(fileList[i]);
    }
    var reader = new FileReader();
    reader.readAsDataURL(fileList[0]);
}
NPlayer.prototype.backImplement = function(file) {
    var nPlayer = this;
    var reader = new FileReader();
    reader.onload = function(e) {
        nPlayer.playBox.style.backgroundImage = 'url("' + e.target.result + '")';
        localStorage['|back'] = e.target.result;
    }
    reader.onerror = function(e) {
        console.log(e);
    }
    reader.readAsDataURL(file);
}
NPlayer.prototype.currentSongEnd = function() {
    var nPlayer = this;
    var nextSong = null;
    if (nPlayer.currentList.childNodes.length > 1) {
        switch (nPlayer.mod) {
        case nPlayer.MOD_NORMAL:
            if (nPlayer.currentSong.nextSibling) {
                nextSong = nPlayer.currentSong.nextSibling;
            }
            break;
        case nPlayer.MOD_LOOPONE:
            nextSong = nPlayer.currentSong;
            break;
        case nPlayer.MOD_LOOPALL:
            if (nPlayer.currentSong.nextSibling) {
                nextSong = nPlayer.currentSong.nextSibling;
            } else {
                nextSong = nPlayer.currentList.firstChild;
            }
            break;
        }
        if (nextSong) {
            nPlayer.setSong(nextSong);
            nPlayer.play(true);
        } else {
            nPlayer.stop();
            //nPlayer.btnPlay.className = 'nPlayer_icon_play nPlayer_icon';
            //nPlayer.timeBar.style.left = 0 - Math.round(nPlayer.timeBar.clientWidth / 2) + 'px';
            //nPlayer.timeInLine.style.width = '0';
            //nPlayer.player.setAttribute('src', ''); //not work?
        }
    } else if (nPlayer.currentList.childNodes.length == 1) {
        nPlayer.stop();
    }
}
NPlayer.prototype.init = function() {
    var nPlayer = this;
    nPlayer.dbOpen();
    nPlayer.fileChoser.addEventListener('change', function(e) {
        nPlayer.fileImplement(e.target.files);
    }, false);
    nPlayer.backChoser.addEventListener('change', function(e) {
        var file = e.target.files[0];
        if (file.size > 3 * 1024 * 1024) {
            alert('请选择3MB以下的图片。');
        } else {
            nPlayer.backImplement(e.target.files[0]);
        }
    }, false)
    nPlayer.btnPlay.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        if (nPlayer.player.paused || nPlayer.player.ended) {
            nPlayer.play(false);
        } else {
            nPlayer.pause();
        }
    }, false)
    nPlayer.container.addEventListener('dragenter', function(e) {
        e.stopPropagation();
        e.preventDefault();
    }, false)
    nPlayer.container.addEventListener('dragover', function(e) {
        e.stopPropagation();
        e.preventDefault();
    }, false)
    nPlayer.container.addEventListener('drop', function(e) {
        e.stopPropagation();
        e.preventDefault();
        nPlayer.cover.style.display = 'none';
        nPlayer.info.style.display = 'none';
        nPlayer.fileImplement(e.dataTransfer.files);
    }, false)
    nPlayer.player.addEventListener('ended', function() {
        nPlayer.currentSongEnd();
    }, false)

    var timeBarOverFlag = false;
    var timeBarOver = document.createElement('div');
    timeBarOver.setAttribute('id', 'nPlayer_timeBarOver');
    timeBarOver.addEventListener('click', function(e) {
        if (nPlayer.player.currentTime > 0) {
            nPlayer.player.currentTime = (e.clientX - nPlayer.pageX(nPlayer.timeOutLine)) * nPlayer.player.duration / nPlayer.timeOutLine.clientWidth;
        }
    }, false)
    timeBarOver.addEventListener('mousemove', function(e) {
        var timeBarOverLeft = e.clientX - nPlayer.pageX(nPlayer.timeOutLine) - Math.round(nPlayer.timeBar.clientWidth / 2);
        if (timeBarOverLeft >= (0 - Math.round(timeBarOver.clientWidth / 2)) && timeBarOverLeft <= (nPlayer.timeOutLine.clientWidth - Math.round(timeBarOver.clientWidth / 2))) {
            timeBarOver.style.left = timeBarOverLeft + 'px';
        } else {
            nPlayer.timeControl.removeChild(timeBarOver);
            timeBarOverFlag = false;
        }
    }, false)
    timeBarOver.addEventListener('mouseout', function(e) {
        if (timeBarOverFlag) {
            nPlayer.timeControl.removeChild(timeBarOver);
            timeBarOverFlag = false;
        }
    }, false)
    nPlayer.timeOutLine.addEventListener('mouseover', function(e) {
        if (!timeBarOverFlag) {
            timeBarOver.style.left = e.clientX - nPlayer.pageX(nPlayer.timeOutLine) - Math.round(nPlayer.timeBar.clientWidth / 2) + 'px';
            nPlayer.timeControl.appendChild(timeBarOver);
            timeBarOverFlag = true;
        } else {
            timeBarOver.style.left = e.clientX - nPlayer.pageX(nPlayer.timeOutLine) - Math.round(nPlayer.timeBar.clientWidth / 2) + 'px';
        }
    }, false)

    nPlayer.player.addEventListener('timeupdate', function() {
        var durationWidth = nPlayer.player.currentTime * nPlayer.timeOutLine.clientWidth / nPlayer.player.duration;
        var timeBarWidth = Math.round(nPlayer.timeBar.clientWidth / 2)
        nPlayer.timeBar.style.left = durationWidth - timeBarWidth + 'px';
        nPlayer.timeInLine.style.width = durationWidth + timeBarWidth + 'px';
        nPlayer.timeNumCur.innerHTML = nPlayer.getTime(nPlayer.player.currentTime);

    }, false)
    nPlayer.player.addEventListener('durationchange', function() {
        nPlayer.timeNumMax.innerHTML = nPlayer.getTime(nPlayer.player.duration);
    }, false)

    nPlayer.btnLoopAll.addEventListener('click', function() {
        nPlayer.setMod(nPlayer.MOD_LOOPALL);
    }, false)
    nPlayer.btnLoopOne.addEventListener('click', function() {
        nPlayer.setMod(nPlayer.MOD_LOOPONE);
    }, false)
    nPlayer.btnNormal.addEventListener('click', function() {
        nPlayer.setMod(nPlayer.MOD_NORMAL);
    }, false)

    nPlayer.btnSound.addEventListener('click', function() {
        if (nPlayer.player.muted) {
            nPlayer.btnSound.className = 'nPlayer_icon_sound';
            nPlayer.player.muted = false;
        } else {
            nPlayer.btnSound.className = 'nPlayer_icon_mute';
            nPlayer.player.muted = true;
        }
    }, false)
    var isInBtnSound = false;
    nPlayer.btnSound.addEventListener('mouseover', function() {
        nPlayer.soundControl.style.display = 'block';
        if (soundControlHideTime) {
            clearTimeout(soundControlHideTime);
        }
        isInBtnSound = true;
    }, false)
    var soundControlHideTime;
    nPlayer.btnSound.addEventListener('mouseout', function() {
        isInBtnSound = false;
        soundControlHideTime = setTimeout(function() {
            nPlayer.soundControl.style.display = 'none';
        }, 1000)
    }, false)
    nPlayer.soundControl.addEventListener('mouseover', function() {
        clearTimeout(soundControlHideTime);
    }, false)
    nPlayer.soundControl.addEventListener('mouseout', function() {
        if (!isInBtnSound) {
            soundControlHideTime = setTimeout(function() {
                nPlayer.soundControl.style.display = 'none';
            }, 1000)
        }
    }, false)

    var soundBarOverFlag = false;
    var soundBarOver = document.createElement('div');
    soundBarOver.setAttribute('id', 'nPlayer_soundBarOver');
    soundBarOver.addEventListener('click', function(e) {
        if (nPlayer.player.muted) {
            nPlayer.player.muted = false;
            nPlayer.btnSound.className = 'nPlayer_icon_sound';
        }
        var soundBarOverHeight = e.clientY - nPlayer.pageY(nPlayer.soundOutLine)
        nPlayer.player.volume = soundBarOverHeight / nPlayer.soundOutLine.clientHeight;
        nPlayer.soundInLine.style.height = soundBarOverHeight + 'px';
        nPlayer.soundBar.style.top = soundBarOverHeight - 4 + 'px';
    }, false)
    soundBarOver.addEventListener('mousemove', function(e) {
        var soundBarOverTop = e.clientY - nPlayer.pageY(nPlayer.soundOutLine) - 4;
        if (soundBarOverTop >= -4 && soundBarOverTop <= (nPlayer.soundOutLine.clientHeight - 4)) {
            soundBarOver.style.top = soundBarOverTop + 'px';
        } else {
            nPlayer.soundControl.removeChild(soundBarOver);
            soundBarOverFlag = false;
        }
    }, false)
    soundBarOver.addEventListener('mouseout', function(e) {
        if (soundBarOverFlag) {
            nPlayer.soundControl.removeChild(soundBarOver);
            soundBarOverFlag = false;
        }
    }, false)
    nPlayer.soundOutLine.addEventListener('mouseover', function(e) {
        if (!soundBarOverFlag) {
            soundBarOver.style.top = e.clientY - nPlayer.pageY(nPlayer.soundOutLine) - 4 + 'px';
            nPlayer.soundControl.appendChild(soundBarOver);
            soundBarOverFlag = true;
        } else {
            soundBarOver.style.top = e.clientY - nPlayer.pageY(nPlayer.soundOutLine) - 4 + 'px';
        }
    }, false)
    nPlayer.manuAbout.addEventListener('click', function(e) {
        nPlayer.cover.style.display = 'block';
        nPlayer.info.style.display = 'block';
    }, false)
    nPlayer.manuReset.addEventListener('click', function(e) {
        nPlayer.playBox.style.backgroundImage = nPlayer.originSet.back
        localStorage['|back'] = '';
        nPlayer.setMod(nPlayer.originSet.mod);
    }, false)
    nPlayer.infoClose.addEventListener('click', function(e) {
        nPlayer.cover.style.display = 'none';
        nPlayer.info.style.display = 'none';
    }, false)

    nPlayer.manuList.addEventListener('click', function(e) {
        if (nPlayer.list.style.display == 'none' || nPlayer.list.style.display == '') {
            nPlayer.list.style.display = 'block';
            nPlayer.manuList.className += ' nPlayer_manuSelected';
        } else {
            nPlayer.list.style.display = 'none';
            nPlayer.manuList.className = nPlayer.manuList.className.replace('nPlayer_manuSelected', '');
        }
    })
}

NPlayer.prototype.addSongList = function(name, url, list) {
    var nPlayer = this;
    if (!list) {
        list = nPlayer.currentList;
    }
    var songs = list.getElementsByTagName('li');

    //dom operation
    if (songs.length > 0) {
        for (var i = 0; i < songs.length; i++) {
            if (songs[i].firstChild.nodeValue == name) {
                return null;
            }
        }
    }

    var song = document.createElement('li');
    song.fileurl = url
    song.innerHTML = name;
    song.addEventListener('dblclick', function(e) {
        e.stopPropagation();
        nPlayer.setSong(this);
        nPlayer.play(true);
    }, false)
    list.appendChild(song);

    var dragSong = document.createElement('img');
    dragSong.setAttribute('src', 'img/gnome_audio_x_generic.png')
    var dragLine = document.createElement('div');
    dragLine.setAttribute('id', 'nPlayer_dragLine');

    song.setAttribute('draggable', 'true');
    song.addEventListener('dragstart', function(e) {
        e.stopPropagation();
        e.dataTransfer.setDragImage(dragSong, 25, 15)
    }, false)
    song.addEventListener('drag', function(e) {
        var dragSongNum = Math.round((e.clientY - nPlayer.pageY(list.childNodes[0])) / songs[0].clientHeight);
        if (dragSongNum <= 0) {
            list.insertBefore(dragLine, songs[0]);
        } else if (dragSongNum < songs.length) {
            list.insertBefore(dragLine, songs[dragSongNum]);
        } else {
            list.appendChild(dragLine);
        }
    }, false)
    song.addEventListener('dragend', function(e) {
        if (dragLine.nextSibling) {
            list.insertBefore(song, dragLine.nextSibling);
        } else {
            list.appendChild(song);
        }
        list.removeChild(dragLine);
    }, false)

    var btnDelsong = document.createElement('div');
    btnDelsong.innerHTML = 'x';
    btnDelsong.className = 'nPlayer_btnDelsong';
    btnDelsong.addEventListener('click', function(e) {
        e.stopPropagation();
        nPlayer.delSong(this);
    }, false)
    song.appendChild(btnDelsong);

    if (nPlayer.player.paused && !nPlayer.currentSong) {
        nPlayer.setSong(song);
        nPlayer.play(true);
    }

    return song;
}
NPlayer.prototype.addPlayList = function(name) {
    var nPlayer = this;
    var listItems = nPlayer.playList.getElementsByTagName('li');

    //dom operation
    for (var i = 0; i < listItems.length; i++) {
        if (listItems[i].firstChild.nodeValue == name) {
            return null;
        }
    }
    var listItem = document.createElement('li');
    listItem.innerHTML = name;
    nPlayer.playList.appendChild(listItem);

    var songList = document.createElement('ul');
    songList.className = 'nPlayer_songList hide';
    songList.setAttribute('listName', name);
    nPlayer.songListBack.appendChild(songList);
    return songList;
}
NPlayer.prototype.delSong = function(delItem) {
    var nPlayer = this;

    //dom operation
    delItem = delItem.parentNode;
    if (delItem == nPlayer.currentSong) {
        nPlayer.currentSongEnd();
    }
    delItem.parentNode.removeChild(delItem);
}
NPlayer.prototype.setList = function(list) {
    var nPlayer = this;
    nPlayer.currentList.className = 'nPlayer_songList hide';
    list.className = 'nPlayer_songList';
    nPlayer.currentList = list;
}
NPlayer.prototype.setSong = function(song) {
    var nPlayer = this;

    //dom operation
    if (nPlayer.currentSong) {
        nPlayer.currentSong.className = '';
    }
    nPlayer.timeBar.style.left = 0;
    nPlayer.timeInLine.style.width = 0;
    song.className = 'current'
    nPlayer.currentSong = song;
    nPlayer.player.setAttribute('src', song.fileurl);
}
NPlayer.prototype.play = function(isDelay) {
    var nPlayer = this;
    if (nPlayer.player.getAttribute('src')) {
        nPlayer.btnPlay.className = 'nPlayer_icon_pause nPlayer_icon';
        if (isDelay) {
            var playTimer = setTimeout(function() {
                nPlayer.player.play();
                clearTimeout(playTimer);
            }, 1000)
        } else {
            nPlayer.player.play();
        }
    }
}
NPlayer.prototype.pause = function() {
    var nPlayer = this;
    if (nPlayer.player.played) {
        nPlayer.btnPlay.className = 'nPlayer_icon_play nPlayer_icon';
        nPlayer.player.pause();
    }
}
NPlayer.prototype.stop = function() {
    var nPlayer = this;
    nPlayer.pause();
    nPlayer.player.setAttribute('src', '');
    nPlayer.btnPlay.className = 'nPlayer_icon_play nPlayer_icon';
    var timeBarWidth = Math.round(nPlayer.timeBar.clientWidth / 2)
    nPlayer.timeBar.style.left = 0 - timeBarWidth + 'px';
    nPlayer.timeInLine.style.width = timeBarWidth + 'px';
    nPlayer.timeNumCur.innerHTML = ' 0 ';
    nPlayer.timeNumMax.innerHTML = ' 0 ';
}

NPlayer.prototype.pageX = function(ele) {
    var nPlayer = this;
    if (ele.offsetParent) {
        return ele.offsetLeft + nPlayer.pageX(ele.offsetParent);
    } else {
        return ele.offsetLeft;
    }
}

NPlayer.prototype.pageY = function(ele) {
    var nPlayer = this;
    if (ele.offsetParent) {
        return ele.offsetTop + nPlayer.pageY(ele.offsetParent);
    } else {
        return ele.offsetTop;
    }
}

NPlayer.prototype.getElementsByClassName = function(classname, node, tag) {
    var nPlayer = this;
    if (!node) {
        node = nPlayer.container;
    }
    if (!tag) {
        tag = '*';
    }
    var a = [],
        re = new RegExp('\\b' + classname + '\\b');
    els = node.getElementsByTagName(tag);
    for (var i = 0, j = els.length; i < j; i++) {
        if (re.test(els[i].className)) {
            a.push(els[i]);
        }
    }
    return a;
}

NPlayer.prototype.getTime = function(timeLong) {
    var second = Math.round(timeLong % 60);
    if (second < 10) {
        second = '0' + second;
    }
    var minite = Math.floor(timeLong / 60);
    return minite + ':' + second
}

NPlayer.prototype.setMod = function(mod) {
    var nPlayer = this;
    if (nPlayer.mod != mod) {
        var modElements = nPlayer.modControl.getElementsByTagName('div');
        for (var i = 0; i < modElements.length; i++) {
            modElements[i].className = modElements[i].className.replace('nPlayer_manuSelected', '');
        }

        switch (mod) {
        case nPlayer.MOD_NORMAL:
            nPlayer.btnNormal.parentNode.className += ' nPlayer_manuSelected';
            break;
        case nPlayer.MOD_LOOPONE:
            nPlayer.btnLoopOne.parentNode.className += ' nPlayer_manuSelected';
            break;
        case nPlayer.MOD_LOOPALL:
            nPlayer.btnLoopAll.parentNode.className += ' nPlayer_manuSelected';
            break;
        }

        nPlayer.mod = mod;
        localStorage['|mod'] = mod;
    }
}

//No neccessary to use
NPlayer.prototype.hasClass = function(ele, cls) {
    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
NPlayer.prototype.addClass = function(ele, cls) {
    var nPlayer = this;
    if (!nPlayer.hasClass(ele, cls)) {
        ele.className += ' ' + cls
    }
}
NPlayer.prototype.removeClass = function(ele, cls) {
    var nPlayer = this;
    if (nPlayer.hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}