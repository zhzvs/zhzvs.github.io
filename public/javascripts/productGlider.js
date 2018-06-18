Handlebars.registerHelper('form', function(options) {
    var formstr = '';
    for(var prop in this.data) {
        if (excludes.indexOf(prop) === -1) {
            var key = prop, value = this.data[prop];
            formstr += options.fn({key: key, value: value, model_name: this.context['model_name']});
        }
    }
    return formstr;
});
Handlebars.registerHelper('formschema', function(originData, options) {
    var template = document.getElementById('form-template').innerHTML;
    var compileFunction = Handlebars.compile(template);
    var data = {data: originData, context: options.hash};
    console.log(data);
    return new Handlebars.SafeString(compileFunction(data));
});
Handlebars.registerHelper('forms-table-chema', function(originData, options) {
    var template = document.getElementById('table-form-template').innerHTML;
    var compileFunction = Handlebars.compile(template);
    var data = {data: originData, context: options.hash};
    return new Handlebars.SafeString(compileFunction(data));
});
Handlebars.registerHelper('forms-table-chema2', function(originData, options) {
    var template = document.getElementById('table-form-template2').innerHTML;
    var compileFunction = Handlebars.compile(template);
    var data = {data: originData, context: options.hash};
    return new Handlebars.SafeString(compileFunction(data));
});
Handlebars.registerHelper('buttons', function(options){
    return options.fn(this.context);
});
dataobj = {};
excludes = ['xonxoff', 'glider_id'];
var gliderListArray = [];
var gliderConnectionStatus = {};
var bdIridiumConnectionStatus = {};
function postConnection() {
    setInterval(function() {
        var gliderIdArray = [];
        if (gliderListArray.length > 0) {
            gliderListArray.forEach(function(element, index) {
                gliderIdArray.push(element.gliderInfo.glider_id);
            });
            for(var gid in gliderListArray) {
                var gliderUrl = requestOptions.connection.replace(':id', gid);
                var bdiridiumconnectionUrl = requestOptions.bdiridiumconnection.replace(':id', gid);
                $.ajax({
                    url: gliderUrl,
                    type: 'get',
                    contentType: 'application/json',
                    success: function(_gid){
                        return function(data) {
                            gliderConnectionStatus['glider_' + _gid] = data && (data.code === 0) ? 1 : 0; 
                        }
                    }(gid),
                    error: function(_gid){
                        return function(err) {
                            gliderConnectionStatus['glider_' + _gid] = 1;
                            console.log('err:', err);
                        }
                    }(gid)
                });
                $.ajax({
                    url: bdiridiumconnectionUrl,
                    type: 'get',
                    contentType: 'application/json',
                    success: function(_gid){
                        return function(data) {
                            bdIridiumConnectionStatus['glider_' + _gid] = data && (data.code === 0) ? 1 : 0; 
                        }
                    }(gid),
                    error: function(_gid){
                        return function(err) {
                            bdIridiumConnectionStatus['glider_' + _gid] = 1;
                            console.log('err:', err);
                        }
                    }(gid)
                });
            }
        }
    }, 2000);
}

$(document).ready(function() {
    
    //航迹列表变量
    var seawayList = [];
    //初始化右侧数据填充
    fillData({}, '#tabTemplate', '#v-pills-tabContent'); 
    //初始化右侧绑定页面的事件
    initPageEvent();
    //获取滑翔机列表
    $.getJSON(requestOptions.gliderList, function(result, err) {
        if (err != 'success') {
            $('#failed').text('滑翔机接口请求失败！').slideDown(800, function() {
                $(this).hide();
            });
        } else {
            if (result.code != 0) {
                $('#failed').text('滑翔机接口返回错误：' + result.message).slideDown(800, function() {
                    $(this).hide();
                });
            } else {
                gliderListArray = result.data;
                postConnection();
                fillData({data: result.data, seawayList: seawayList}, '#leftTabTemplate', '#leftTabHtml');
                // fillData({data: [], seawayList: seawayList}, '#tabTemplate', '#v-pills-tabContent');
                $('.left-side .nav-link').each(function(value, key) {
                    $(this).click(function() {
                        var id = $(this).data('gliderid');
                        dataobj = convertDataArrayToObj(result.data)[id];
                        var seawayListUrl = requestOptions.seawaysList;
                        $.getJSON(seawayListUrl, function(listResult, listError) {
                            if ((listError == 'success') && (listResult.code === 0)) {
                                seawayList = listResult.data   
                            } else {
                                alert('航迹列表接口请求错误！');
                            }
                            fillData({data: dataobj, seawayList: seawayList}, '#tabTemplate', '#v-pills-tabContent');
                            initPageEvent();
                        });
                        
                    });
                });
                $('.left-side .nav-link').first().click();
            }
        }
    });
    function initPageEvent() {
        var glidersId = $('#gliderId').val();
        var dom = document.getElementById('content1');
        Utils.init(Raphael, 'map', mapOptions);
        document.getElementById('startDraw').onclick = function() {
            $('#success').text('可以开始绘制了！').slideDown(800, function() {
                $(this).hide();
            });
            dom.onclick = Utils.click;
            this.disabled = true;
            document.getElementById('finishDraw').disabled = false;
        }
        document.getElementById('finishDraw').onclick = function() {
            dom.onclick = null;
            $('#success').text('绘图结束！').slideDown(800, function() {
                $(this).hide();
            });
            this.disabled = true;
            Utils.loopMoveEvents();
        }
        document.getElementById('importPath').onclick = function() {
            if (seawayList.length == 0) {
                alert('航迹列表为空，无法导入！');
                return false;
            }
            if ($('#seawayDropDownList').val() == '0') {
                alert('请选择航迹列表！');
                return false;
            }
            var seawayObj = Object.create(null);
            seawayList.forEach(function(ele, index) {
                seawayObj[ele.seaway_id] = ele;
            });
            var pathString = seawayObj[$('#seawayDropDownList').val()]['latlngs'];
            var pathArray = JSON.parse(pathString);            
            // Utils.r.remove();
            // Utils.init(Raphael, 'map', mapOptions);
            Utils.drawPathFromPathArray(Utils.convertFromPathToCoodinate(pathArray));
        };
        document.getElementById('deletePath').onclick = function() {
            if ($('#seawayDropDownList').val() == '0') {
                alert('请选择航迹列表！');
                return false;
            }
            if (confirm('确定要删除吗？')) {
                var deleteSeawayUrl = requestOptions.seawaysDelete.replace(':id', $('#seawayDropDownList').val());
                $.ajax({
                    url: deleteSeawayUrl,
                    type: 'delete',
                    data:{},
                    error: function(err) {
                        alert('删除操作失败！');
                        console.log(err);
                    },
                    success: function(data, msg) {
                        if ((msg == 'success') && (data.code == 0)) {
                            alert('删除成功！');
                        } else if (data && data.code) {
                            alert('删除操作失败:' + data.message);
                        }
                    }
                });
            }
        }
        document.getElementById('savePathButton').onclick = function() {
            let geographyPathArray = Utils.outputGeographyCoodinate();
            if(geographyPathArray.length === 0) {
                alert('请先绘制路径再保存！');
                return false;
            }
            if($.trim($('#pathInput').val()) === '') {
                alert('请输入路径名称！');
                return false;
            }
            var name = $('#pathInput').val();
            var data = {
                latlngs: JSON.stringify(geographyPathArray),
                name: name
            };
            var addSeawayListUrl = requestOptions.seawaysAdd + '?' + urlEncode(data);
            $.post(addSeawayListUrl, data, function(data, err){
                if ((err === 'success') && (data.code === 0)) {
                    alert('保存成功！');
                    $('#showModalInput').modal('hide');
                } else if(data && data.code) {
                    alert('保存失败：' + data.message);
                } else {
                    console.log(err);
                    alert('保存失败!');
                }
            });
        };
        document.getElementById('clear').onclick = function() {
            Utils.r.remove();
            document.getElementById('startDraw').disabled = false;
            dom.onclick = null;
            // document.getElementById('showGeography').innerHTML = '';
            Utils.init(Raphael, 'map', mapOptions);
            $('#success').text('清除成功！').slideDown(800, function() {
                $(this).hide();
            });
        };
        if (glidersId){
            $('#deleteGlider').click(function(){
                if(confirm('确定删除该滑翔机吗？')){
                    var deleteGliderUrl = requestOptions.gliderDelete + $('#gliderId').val();
                    $.ajax({
                        url: deleteGliderUrl,
                        type: 'delete',
                        contentType: 'application/json',
                        data: {},
                        success: function(result) {
                            if (result.code === 0) {console.log(result);
                                alert('删除滑翔机成功！');
                            } else {
                                alert('删除滑翔机失败：' + result.message);
                            }
                        },
                        error: function(err) {
                            console.log('err:', err);
                        }
                    });
                }
            });

           
            $('#update_gliderSerial').click(sendRequest(
                requestOptions.setWirelessSerial.replace(':id', glidersId),
                'put',
                requestCallBack('设置滑翔机无线串口')
            ));

            // sendRequest(url, 'put', requestCallBack('写入滑翔机无线串口'))();
            $('#write_gliderSerial').click(sendRequest(
                requestOptions.writeRegister.replace(':id', glidersId).replace(':module', $('#write_gliderSerial').val()),
                'put',
                requestCallBack('设置滑翔机无线串口'), 
                function() {
                    if (gliderConnectionStatus['glider_' + glidersId]) {
                        return true;
                    } else {
                        alert('无法建立连接,暂时无法写入!');
                        return false;
                    }
                }
            ));

            $('#read_gliderSerial').click(function() {
                var moduleName = $(this).val();
                var setParamsUrl = requestOptions.readRegisters.replace(':id', glidersId).replace(':module', moduleName);
                if (gliderConnectionStatus['glider_' + glidersId]) {
                    $.ajax({
                        url: setParamsUrl, 
                        type: 'get',
                        success: function(data, msg) {
                            if ((msg === 'success') && (data.code === 0)) {
                                setDateFromObj(moduleName, data.data);
                                alert('读取下位机接口成功！');
                                console.log('success:', data);
                            } else {
                                alert('读取下位机接口错误:' + data.message);
                                console.log('failed:', data);
                            }
                        },
                        dataType: 'json',
                        contentType: 'application/json',
                        error: function(err){
                            alert('读取下位机接口错误:' + err.responseJSON.message);
                            console.log('err:', err);
                        }
                    });
                } else {
                    alert('无法建立连接,暂时无法读取!');
                }
            });

            $('#read_bdSerial').click(function() {
                var moduleName = $(this).val();
                var setParamsUrl = requestOptions.readRegisters.replace(':id', glidersId).replace(':module', moduleName);
                if (bdIridiumConnectionStatus['glider_' + glidersId]) {
                    $.ajax({
                        url: setParamsUrl, 
                        type: 'get',
                        success: function(data, msg) {
                            if ((msg === 'success') && (data.code === 0)) {
                                setDateFromObj(moduleName, data.data);
                                alert('读取下位机接口成功！');
                                console.log('success:', data);
                            } else {
                                alert('读取下位机接口错误:' + data.message);
                                console.log('failed:', data);
                            }
                        },
                        dataType: 'json',
                        contentType: 'application/json',
                        error: function(err){
                            alert('读取下位机接口错误:' + err.responseJSON.message);
                            console.log('err:', err);
                        }
                    });
                } else {
                    alert('无法建立连接,暂时无法读取!');
                }
            });
            $('#read_iridiumSerial').click(sendRequest(
                requestOptions.writeRegister.replace(':id', glidersId).replace(':module', $('#write_bdSerial').val()),
                'put',
                requestCallBack('设置北斗串口'), 
                function() {
                    if (bdIridiumConnectionStatus['glider_' + glidersId]) {
                        return true;
                    } else {
                        alert('无法建立连接,暂时无法写入!');
                        return false;
                    }
                }
            ));
            $('#write_bdSerial').click(sendRequest(
                requestOptions.writeRegister.replace(':id', glidersId).replace(':module', $('#write_iridiumSerial').val()),
                'put',
                requestCallBack('设置铱星串口'), 
                function() {
                    if (bdIridiumConnectionStatus['glider_' + glidersId]) {
                        return true;
                    } else {
                        alert('无法建立连接,暂时无法写入!');
                        return false;
                    }
                }
            ));
            $('#write_iridiumSerial').click(sendRequest(
                requestOptions.writeRegister.replace(':id', glidersId).replace(':module', $('#write_iridiumSerial').val()),
                'put',
                requestCallBack('设置铱星串口'), 
                function() {
                    if (bdIridiumConnectionStatus['glider_' + glidersId]) {
                        return true;
                    } else {
                        alert('无法建立连接,暂时无法写入!');
                        return false;
                    }
                }
            ));
            // $('#write_gliderSerial').click(function(){
            //     var glidersId = $('#gliderId').val();
            //     if (gliderConnectionStatus['glider_' + glidersId]) {
            //         var url = requestOptions.writeRegister.replace(':id', glidersId).replace(':module', $(this).val());
            //         // getDateFromDom($(this).val(), );
            //         // console.log(url, getKeysFromObj(dataobj, $(this).val()));
                    
            //     } else {
            //         alert('无法建立连接,暂时无法写入!');
            //         return false;
            //     }
            //     alert($(this).val());   
            // });
            $('#update_bdSerial').click(sendRequest(
                requestOptions.setBDSerial.replace(':id', glidersId),
                'put',
                requestCallBack('设置北斗串口')
            ));
            $('#update_iridiumSerial').click(sendRequest(
                requestOptions.setIridiumSerial.replace(':id', glidersId),
                'put',
                requestCallBack('铱星串口设置')
            ));
            $('#update_settings').click(sendRequest(
                requestOptions.setParams.replace(':id', glidersId),
                'put',
                requestCallBack('参数设置')
            ));
            $('#update_surfaceSettings').click(sendRequest(
                requestOptions.setSurface.replace(':id', glidersId),
                'put',
                requestCallBack('水面控制参数设置')
            ));
            $('#update_compass').click(sendRequest(
                requestOptions.setcompass.replace(':id', glidersId),
                'put',
                requestCallBack('磁罗盘设置')
            ));
            $('#update_energy').click(sendRequest(
                requestOptions.setenergy.replace(':id', glidersId),
                'put',
                requestCallBack('能耗测量设置')
            ));
            $('#update_altimeter').click(sendRequest(
                requestOptions.setHeight.replace(':id', glidersId),
                'put',
                requestCallBack('高度计设置')
            ));
            $('#update_depthometer').click(sendRequest(
                requestOptions.setdepthometer.replace(':id', glidersId),
                'put',
                requestCallBack('深度计设置')
            ));
            // $('#update_ctd').click(sendRequest(
            //     requestOptions.setdepthometer.replace(':id', glidersId),
            //     'put',
            //     requestCallBack('CTD设置')
            // ));
            $('#update_ctd').click(sendRequest(
                requestOptions.setCTD.replace(':id', glidersId),
                'put',
                requestCallBack('CTD设置')
            ));
            $('#update_compressor').click(sendRequest(
                requestOptions.setcompressor.replace(':id', glidersId),
                'put',
                requestCallBack('喷泵设置')
            ));
            $('#update_iridium').click(sendRequest(
                requestOptions.setiridium.replace(':id', glidersId),
                'put',
                requestCallBack('铱星设置')
            ));
            $('#update_buoyancy').click(sendRequest(
                requestOptions.setbuoyancy.replace(':id', glidersId),
                'put',
                requestCallBack('浮力调节设置')
            ));
            $('#update_ais').click(sendRequest(
                requestOptions.setais.replace(':id', glidersId),
                'put',
                requestCallBack('AIS设置')
            ));
            $('#update_bd').click(sendRequest(
                requestOptions.setbd.replace(':id', glidersId),
                'put',
                requestCallBack('北斗BD设置')
            ));
            $('#update_centroid').click(sendRequest(
                requestOptions.setcentroid.replace(':id', glidersId),
                'put',
                requestCallBack('质心调节设置')
            ));
        }
    }
});