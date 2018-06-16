var host = 'http://47.105.43.18:8000';
var requestOptions = {
    gliderList: host + '/api/v1/gliders',
    gliderAdd: host + '/api/v1/gliders/',
    gliderDelete: host + '/api/v1/glider/',
    getSerialPortsList: host + '/api/v1/serialports',
    setWirelessSerial: host + '/api/v1/glider/:id/gliderSerial',
    setBDSerial: host + '/api/v1/glider/:id/bdSerial',
    setIridiumSerial: host + '/api/v1/glider/:id/iridiumSerial',
    setParams: host + '/api/v1/glider/:id/settings',
    setSurface: host + '/api/v1/glider/:id/surfaceSettings',
    seawaysList: host + '/api/v1/seaways',
    seawaysAdd: host + '/api/v1/seaway',
    seawaysDelete: host + '/api/v1/seaway/:id',
    setcompass: host + '/api/v1/glider/:id/compass',
    setenergy: host + '/api/v1/glider/:id/energy',
    setHeight: host + '/api/v1/glider/:id/altimeter',
    setdepthometer: host + '/api/v1/glider/:id/depthometer',
    setCTD: host + '/api/v1/glider/:id/ctd',
    setcompressor: host + '/api/v1/glider/:id/compressor',
    setiridium: host + '/api/v1/glider/:id/iridium',
    setbuoyancy: host + '/api/v1/glider/:id/buoyancy',
    setais: host + '/api/v1/glider/:id/ais',
    setbd: host + '/api/v1/glider/:id/bd',
    setcentroid: host + '/api/v1/glider/:id/centroid',
    connection: host + '/api/v1/glider/:id/serial/connection',
    writeRegister: host + '/api/v1/glider/:id/:module/writeRegisters',
    bdiridiumconnection: host + '/api/v1/glider/:id/bdserial/connection',
    readRegisters: host + '/api/v1/glider/:id/:module/readRegisters',
    missionBriafs: host + '/api/v1/glider/missionBriafs'
};
//基础函数
function fillData(data, templateId, htmlId) {
    let template = $(templateId).html();
    let templateFunction = Handlebars.compile(template);
    let html = templateFunction(data);
    $(htmlId).html(html);
}
function urlEncode(param, key, encode) {  
    if(param==null) return '';  
    var paramStr = '';  
    var t = typeof (param);  
    if (t == 'string' || t == 'number' || t == 'boolean') {  
      paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param);  
    } else {  
      for (var i in param) {  
        var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);  
        paramStr += urlEncode(param[i], k, encode);  
      }  
    }  
    return paramStr;  
};
function convertDataArrayToObj(data) {
    var obj = Object.create(null);
    data.forEach(function(elem, index) {
        obj[elem.gliderInfo.glider_id] = elem;
    });
    return obj;
}
var domParamsConfig = {
    exclude: ['glider_id'],
    specialParamsType: {
        xonxoff: {
            type: 'radio'
        }
    }
};
function getKeysFromObj(obj, key) {
    return Object.keys(obj[key]);
}
function getDateFromDom(modelName, keysArray) {
    var objData = Object.create(null);
    keysArray.forEach(function(element, index) {
        if (domParamsConfig.exclude.indexOf(element) === -1) {
            var specialParamsTypeKeys = Object.keys(domParamsConfig.specialParamsType);
            if (specialParamsTypeKeys.indexOf(element) != -1) {
                switch (domParamsConfig.specialParamsType[element].type) {
                    case 'radio':
                    objData[element] = $('input[name=' + modelName + "-" + element + ']:checked').val();console.log('checkedvalue:', objData[element]);
                    break;
                }
            } else {
                objData[element] = $('#' + modelName + "-" + element).val();
            }
        }
    });
    return objData;
}
function setDateFromObj(modelName, dataObj) {
    var keysArray = Object.keys(dataObj);
    keysArray.forEach(function(elem, index) {
        $('#' + modelName + '_' + elem).val(elem);
    });
}
function requestCallBack(msg) {
    return function(result) {
        if (result.code === 0) {
            alert(msg + '操作成功！');
            console.log(result);
        } else {
            alert(msg + '操作失败：' + result.message);
        }
    }
}
function sendRequest(url, method, callback, validateCallback) {
    return function() {
        if (!validateCallback || validateCallback()){
        console.log('modelname:', $(this).val());
        var modelName = $(this).val();
        var keysArray = getKeysFromObj(dataobj, modelName);
        var data = getDateFromDom(modelName, keysArray);
        $.ajax({
            url: url + '?' + urlEncode(data),
            type: method,
            contentType: 'application/json',
            data: data,
            success: callback,
            error: function(xhr, msg) {
                alert('操作失败:' + xhr.responseJSON['message']);
                console.log('err:', err);
            }
        });
    }
    }
}