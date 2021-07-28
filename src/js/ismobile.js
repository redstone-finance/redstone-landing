const { is } = window;

function isDeviceMobile() {
    return is.mobile() || is.iphone() || is.androidPhone() || is.windowsPhone() || is.blackberry();
}

export default isDeviceMobile;
