let mapOptions = {
    width: 908,
    height: 580,
    start_latitude: 23.13,   //开始的纬度
    start_longitude:113.26,  //开始的经度
    end_latitude: 18.94,    //结束的纬度
    end_longitude: 120.5,   //结束的经度
    fill: "#fff", 
    stroke: '#efefef', 
    backgroudImage: './public/images/map.png'
};

    var Utils = {
        init: function(Raphael, domId, mapOptions) {
            Utils.r = Raphael(domId, mapOptions.width, mapOptions.height); //初始化
            Utils.r.image(mapOptions.backgroudImage, 0, 0, mapOptions.width, mapOptions.height); //设置背景图片
            Utils.rectElement = Utils.r.rect(0, 0, mapOptions.width - 1, mapOptions.height - 1);
            Utils.path = []; //存储x-y坐标路径
            Utils.startDrawLine = false;  
            Utils.elementIndex = 0;
            Utils.setArray = Utils.r.set();//画的圈的元素集合
            Utils.dom = document.getElementById(domId);
            Utils.initClientBox(Utils.dom);
            Utils.lineElmentArray = [];//画的线段元素的集合
            Utils.panelWidth = mapOptions.width;
            Utils.panelHeight = mapOptions.height;
            Utils.gridsElementArray = [];//存储网格元素
            Utils.mapCenter(mapOptions.width, mapOptions.height); //元素剧中
            Utils.drawGrids(30);  //画风格
            Utils.startPoint = {E: mapOptions.start_longitude, N: mapOptions.start_latitude}; //起始地理位置坐标
            Utils.endPoint = {E: mapOptions.end_longitude, N: mapOptions.end_latitude};//结束地理位置坐标
            Utils.domMouseOverEvent(); //鼠标移动显示地理坐标
        },
        outputGeographyCoodinate: function() {  //输出地理位置坐标
            var geographyCoodinate = [];
            if(Utils.path.length == 0) {
                return geographyCoodinate;
            }
            Utils.path.forEach(function(elem, index) {
                var coodinateParams = Utils.computeCoordinate(elem[0], elem[1]);
                geographyCoodinate.push([coodinateParams.N, coodinateParams.E]);
            });
            return geographyCoodinate;
        },
        computeCoordinate: function(x, y) {
            var longitude = Utils.startPoint.E + (Utils.endPoint.E - Utils.startPoint.E) * x / Utils.panelWidth;
            var latitude = Utils.startPoint.N - (Utils.startPoint.N - Utils.endPoint.N) * y / Utils.panelHeight;
            console.log('e:', Utils.startPoint.E);
            return {N: Utils.tofixedDecimal(latitude, 2), E: Utils.tofixedDecimal(longitude, 2)};
        },
        tofixedDecimal: function(decimal, num) {
            let basicNum = Math.pow(10, num);
            return Math.round(decimal * basicNum) / basicNum;
        },
        mapCenter:function(width, height) {
            Utils.dom.style.height = height + 'px';
            Utils.dom.style.width = width + 'px';
        },
        domMouseOverEvent: function() {
            Utils.dom.onmousemove = function(e) {
                let eventPos = Utils.getPositionByMouseEvent(e);
                var pos = Utils.computeCoordinate(eventPos.posX, eventPos.posY);
                document.getElementById('E').value = pos.E;
                document.getElementById('N').value = pos.N;
            }
        },
        click: function(e) {
            var posX = e.x - Utils.clientboxInfo.left;
            var posY = e.y - Utils.clientboxInfo.top;
            Utils.drawCircle(posX, posY, 5);
            Utils.drawLine(posX, posY);
            Utils.setArray.drag(Utils.dragMoveEvent, Utils.dragStartEvent);
        },
        initClientBox: function(dom) {
            var clientbox = dom.getBoundingClientRect();
            Utils.clientboxInfo = {left: clientbox.x, top: clientbox.y};
        },
        getPositionByMouseEvent: function(e){
            var posX = e.x - Utils.clientboxInfo.left;
            var posY = e.y - Utils.clientboxInfo.top;
            return {posX: posX, posY: posY};
        },
        loopMoveEvents: function(obj){
                for(var prop in Utils.setArray) {
                    var elem = Utils.setArray[prop];
                    elem.update = function(pos) {
                        // console.log('loop:', {cx: this.attr('cx') + dx, cy: this.attr('cy') + dy});
                        this.attr({cx: pos.posX, cy: pos.posY});
                        Utils.path[this.elementIndex][0] = pos.posX;
                        Utils.path[this.elementIndex][1] = pos.posY;
                        if (this.elementIndex == 0) {   //调整第一条线段
                            Utils.lineElmentArray[this.elementIndex].remove();
                            Utils.lineElmentArray[this.elementIndex] = Utils.r.path([['M', pos.posX, pos.posY], ['L', Utils.path[this.elementIndex + 1][0], Utils.path[this.elementIndex + 1][1]]]).attr(Utils.lineInitOptions);
                        } else if(this.elementIndex == Utils.path.length - 1){  //调整中间线段
                            Utils.lineElmentArray[this.elementIndex - 1].remove();
                            Utils.lineElmentArray[this.elementIndex - 1] = Utils.r.path([['M', Utils.path[this.elementIndex - 1][0], Utils.path[this.elementIndex - 1][1]], ['L', pos.posX, pos.posY]]).attr(Utils.lineInitOptions);
                        } else {    //调整最后一条线段
                            Utils.lineElmentArray[this.elementIndex].remove();
                            Utils.lineElmentArray[this.elementIndex - 1].remove();
                            Utils.lineElmentArray[this.elementIndex] = Utils.r.path([['M', pos.posX, pos.posY], ['L', Utils.path[this.elementIndex + 1][0], Utils.path[this.elementIndex + 1][1]]]).attr(Utils.lineInitOptions);
                            Utils.lineElmentArray[this.elementIndex - 1] = Utils.r.path([['M', Utils.path[this.elementIndex - 1][0], Utils.path[this.elementIndex - 1][1]], ['L', pos.posX, pos.posY]]).attr(Utils.lineInitOptions);
                            // Utils.drawLineForUpdate(Utils.lineElmentArray[this.elementIndex][0], Utils.lineElmentArray[this.elementIndex][1], pos.posX, pos.posY);
                        }
                    }
                }
        },

        dragMoveEvent: function(dx, dy, ex, ey, e) {
            this.dx = 0;
            this.dy = 0;
            this.update(Utils.getPositionByMouseEvent(e));
        },
        dragStartEvent: function() {
            this.dx = this.dy = 0;
        },
        //连线：
        drawLine: function(posX, posY) {
            if (posX < 0 || posY < 0) return;
            if(!Utils.startDrawLine) { //画第一个圆：
                Utils.startDrawLine = true;
                Utils.lineStartPoint = posX;
                Utils.lineEndPoint = posY;
                Utils.path.push([posX, posY]);
            } else { //画后面的圆，连线：                    
                var path = [['M', Utils.lineStartPoint, Utils.lineEndPoint], ['L', posX, posY]];
                Utils.lineElmentArray.push(Utils.r.path(path).attr(Utils.lineInitOptions));
                Utils.lineStartPoint = posX;
                Utils.lineEndPoint = posY;
                Utils.path.push([posX, posY]);
            }
        },
        drawGrids: function(size){
            //画水平线
            let hLineNumber = Math.floor(Utils.panelHeight/size);
            for(var i =  1; i <= hLineNumber; i ++) {
                Utils.gridsElementArray.push(Utils.drawLineForUpdate(0, i * size, Utils.panelWidth, i * size)); // 0, 10, w, 10
            }
            let vLineNumber = Math.floor(Utils.panelWidth/size);
            for(var i =  1; i <= vLineNumber; i ++) {
                Utils.gridsElementArray.push(Utils.drawLineForUpdate(i * size, 0, i * size, Utils.panelWidth));
            }
        },
        clearGrids: function() {console.log('uti:', Utils.gridsElementArray);
            for(var p in Utils.gridsElementArray) {
                Utils.gridsElementArray[p].remove();
            }
            Utils.gridsElementArray = [];
        },
        drawLineForUpdate: function(startX, startY, endX, endY) {
            return Utils.r.path([['M', startX, startY], ['L', endX, endY]]).attr(Utils.gridLineInitOptions);
        },

        //圆圈的基本设置
        circleInitOptions: {fill: "#f00", stroke: false},

        //画线的基本设置：
        lineInitOptions: {stroke: "red", "stroke-dasharray": ". "},

        gridLineInitOptions: {stroke: "#dedede", "stroke-dasharray": ". "},

        drawCircle: function(x, y, boundInt, options) {
            if (x < 0 || y < 0) return;
            if (!options) {
                options = Utils.circleInitOptions;
            }
            var elem = Utils.r.circle(x, y, boundInt).attr(options);
            elem.elementIndex = Utils.elementIndex ++;
            Utils.setArray.push(elem);
        },
        convertFromPathToCoodinate(pathArray){
            var coodinateArray = [];
            pathArray.forEach(function(elem, index) {
                // console.log(elem[1],mapOptions.end_longitude - mapOptions.start_longitude, Utils.panelWidth * elem[1]/(mapOptions.end_longitude - mapOptions.start_longitude));
                var x = Utils.tofixedDecimal(Utils.panelWidth * (elem[1] - mapOptions.start_longitude)/(mapOptions.end_longitude - mapOptions.start_longitude), 2);
                var y = Utils.tofixedDecimal(Utils.panelHeight - Utils.panelHeight * (elem[0] - mapOptions.end_latitude)/(mapOptions.start_latitude - mapOptions.end_latitude), 2);
                coodinateArray.push([x, y]);
            });
            return coodinateArray;
        },
        drawPathFromPathArray: function(coodinateArray, lineOptions, circleOptions){
            var linePath = [];
            if (!lineOptions) {
                lineOptions = Utils.lineInitOptions;
            }
            if (!circleOptions) {
                circleOptions = Utils.circleInitOptions;
            }
            coodinateArray.forEach(function(elem, index) {
                if(!index) {
                    linePath.push(['M', elem[0], elem[1]]);
                    Utils.r.circle(elem[0], elem[1], 5).attr(circleOptions);
                } else {
                    linePath.push(['L', elem[0], elem[1]]);
                    Utils.r.circle(elem[0], elem[1], 5).attr(circleOptions);
                }
            });
            console.log('linePath:', linePath);
            Utils.r.path(linePath).attr(lineOptions);
        }
    };