new Calendar({
    clickTarget: 'target',
    container: 'container',
    angle: 0,
    isMask: true, // 是否需要弹层
    beginTime: [2017, 1, 1], //如空数组默认设置成1970年1月1日开始,数组的每一位分别是年月日。
    endTime: [2018, 1, 13], //如空数组默认设置成次年12月31日,数组的每一位分别是年月日。
    recentTime: [2018, 1, 2], //如空数组默认设置成当月1日,数组的每一位分别是年月日。
    isSundayFirst: true, // 周日是否要放在第一列
    isShowNeighbor: true, // 是否展示相邻月份的月尾和月头
    isToggleBtn: false, // 是否展示左右切换按钮
    isChinese: true, // 是否是中文
    monthType: 1, // 0:1月, 1:一月, 2:Jan, 3: April
    canViewDisabled: false, // 是否可以阅读不在范围内的月份
    beforeRenderArr: [{
        stamp: 1512057600000,
        className: 'able',
    }],
    success: function (item, arr, cal) {
        var selectDate = new Date(+item);
        var dateVal = selectDate.getFullYear() + '-' + (selectDate.getMonth() + 1) + '-' +
            selectDate.getDate();
        console.log(dateVal)
        $('#target').text(dateVal)
        //在这下面写回调函数



        cal.hideBackground();
    },
    switchRender: function (year, month, cal) {
        console.log('计算机识别的 - 年份: ' + year + ' 月份: ' + month);
        var data = [{
            'stamp': 1507737600000,
            'className': 'able1',
        }];
        cal.renderCallbackArr(data);
    }
});