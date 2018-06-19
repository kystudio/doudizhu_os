import defines from './../defines'
const SocketController = function () {
    let that = {};
    let _socket = undefined;
    that.init = function () {
        _socket = io(defines.serverUrl);
    };
    that.login = function (data) {
        _socket.emit('login', data);
    };
    return that;
};

export default SocketController;