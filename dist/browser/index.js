"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONTINUE = {
    code: 100,
    name: 'continue',
    text: 'Continue',
};
exports.SWITCHING_PROTOCOLS = {
    code: 101,
    name: 'switching_protocols',
    text: 'Switching Protocols',
};
exports.PROCESSING = {
    code: 102,
    name: 'processing',
    text: 'Processing',
};
exports.EARLY_HINTS = {
    code: 103,
    name: 'early_hints',
    text: 'Early Hints',
};
exports.OK = { code: 200, name: 'ok', text: 'OK' };
exports.CREATED = {
    code: 201,
    name: 'created',
    text: 'Created',
};
exports.ACCEPTED = {
    code: 202,
    name: 'accepted',
    text: 'Accepted',
};
exports.NON_AUTHORITATIVE_INFORMATION = {
    code: 203,
    name: 'non_authoritative_information',
    text: 'Non-Authoritative Information',
};
exports.NO_CONTENT = {
    code: 204,
    name: 'no_content',
    text: 'No Content',
};
exports.RESET_CONTENT = {
    code: 205,
    name: 'reset_content',
    text: 'Reset Content',
};
exports.PARTIAL_CONTENT = {
    code: 206,
    name: 'partial_content',
    text: 'Partial Content',
};
exports.MULTI_STATUS = {
    code: 207,
    name: 'multi_status',
    text: 'Multi-Status',
};
exports.ALREADY_REPORTED = {
    code: 208,
    name: 'already_reported',
    text: 'Already Reported',
};
exports.IM_USED = {
    code: 226,
    name: 'im_used',
    text: 'IM Used',
};
exports.MULTIPLE_CHOICES = {
    code: 300,
    name: 'multiple_choices',
    text: 'Multiple Choices',
};
exports.MOVED_PERMANENTLY = {
    code: 301,
    name: 'moved_permanently',
    text: 'Moved Permanently',
};
exports.FOUND = { code: 302, name: 'found', text: 'Found' };
exports.SEE_OTHER = {
    code: 303,
    name: 'see_other',
    text: 'See Other',
};
exports.NOT_MODIFIED = {
    code: 304,
    name: 'not_modified',
    text: 'Not Modified',
};
exports.USE_PROXY = {
    code: 305,
    name: 'use_proxy',
    text: 'Use Proxy',
};
exports.SWITCH_PROXY = {
    code: 306,
    name: 'switch_proxy',
    text: 'Switch Proxy',
};
exports.TEMPORARY_REDIRECT = {
    code: 307,
    name: 'temporary_redirect',
    text: 'Temporary Redirect',
};
exports.PERMANENT_REDIRECT = {
    code: 308,
    name: 'permanent_redirect',
    text: 'Permanent Redirect',
};
exports.BAD_REQUEST = {
    code: 400,
    name: 'bad_request',
    text: 'Bad Request',
};
exports.UNAUTHORIZED = {
    code: 401,
    name: 'unauthorized',
    text: 'Unauthorized',
};
exports.PAYMENT_REQUIRED = {
    code: 402,
    name: 'payment_required',
    text: 'Payment Required',
};
exports.FORBIDDEN = {
    code: 403,
    name: 'forbidden',
    text: 'Forbidden',
};
exports.NOT_FOUND = {
    code: 404,
    name: 'not_found',
    text: 'Not Found',
};
exports.METHOD_NOT_ALLOWED = {
    code: 405,
    name: 'method_not_allowed',
    text: 'Method Not Allowed',
};
exports.NOT_ACCEPTABLE = {
    code: 406,
    name: 'not_acceptable',
    text: 'Not Acceptable',
};
exports.PROXY_AUTHENTICATION_REQUIRED = {
    code: 407,
    name: 'proxy_authentication_required',
    text: 'Proxy Authentication Required',
};
exports.REQUEST_TIMEOUT = {
    code: 408,
    name: 'request_timeout',
    text: 'Request Timeout',
};
exports.CONFLICT = {
    code: 409,
    name: 'conflict',
    text: 'Conflict',
};
exports.GONE = { code: 410, name: 'gone', text: 'Gone' };
exports.LENGTH_REQUIRED = {
    code: 411,
    name: 'length_required',
    text: 'Length Required',
};
exports.PRECONDITION_FAILED = {
    code: 412,
    name: 'precondition_failed',
    text: 'Precondition Failed',
};
exports.PAYLOAD_TOO_LARGE = {
    code: 413,
    name: 'payload_too_large',
    text: 'Payload Too Large',
};
exports.URI_TOO_LONG = {
    code: 414,
    name: 'uri_too_long',
    text: 'URI Too Long',
};
exports.UNSUPPORTED_MEDIA_TYPE = {
    code: 415,
    name: 'unsupported_media_type',
    text: 'Unsupported Media Type',
};
exports.RANGE_NOT_SATISFIABLE = {
    code: 416,
    name: 'range_not_satisfiable',
    text: 'Range Not Satisfiable',
};
exports.EXPECTATION_FAILED = {
    code: 417,
    name: 'expectation_failed',
    text: 'Expectation Failed',
};
exports.IM_A_TEAPOT = {
    code: 418,
    name: 'im_a_teapot',
    text: "I'm a teapot",
};
exports.INSUFFICIENT_SPACE_ON_RESOURCE = {
    code: 419,
    name: 'insufficient_space_on_resource',
    text: 'Insufficient Space on Resource',
};
exports.METHOD_FAILURE = {
    code: 420,
    name: 'method_failure',
    text: 'Method Failure',
};
exports.MISDIRECTED_REQUEST = {
    code: 421,
    name: 'misdirected_request',
    text: 'Misdirected Request',
};
exports.UNPROCESSABLE_ENTITY = {
    code: 422,
    name: 'unprocessable_entity',
    text: 'Unprocessable Entity',
};
exports.LOCKED = {
    code: 423,
    name: 'locked',
    text: 'Locked',
};
exports.FAILED_DEPENDENCY = {
    code: 424,
    name: 'failed_dependency',
    text: 'Failed Dependency',
};
exports.TOO_EARLY = {
    code: 425,
    name: 'too_early',
    text: 'Too Early',
};
exports.UPGRADE_REQUIRED = {
    code: 426,
    name: 'upgrade_required',
    text: 'Upgrade Required',
};
exports.PRECONDITION_REQUIRED = {
    code: 428,
    name: 'precondition_required',
    text: 'Precondition Required',
};
exports.TOO_MANY_REQUESTS = {
    code: 429,
    name: 'too_many_requests',
    text: 'Too Many Requests',
};
exports.REQUEST_HEADER_FIELDS_TOO_LARGE = {
    code: 431,
    name: 'request_header_fields_too_large',
    text: 'Request Header Fields Too Large',
};
exports.UNAVAILABLE_FOR_LEGAL_REASONS = {
    code: 451,
    name: 'unavailable_for_legal_reasons',
    text: 'Unavailable For Legal Reasons',
};
exports.INTERNAL_SERVER_ERROR = {
    code: 500,
    name: 'internal_server_error',
    text: 'Internal Server Error',
};
exports.NOT_IMPLEMENTED = {
    code: 501,
    name: 'not_implemented',
    text: 'Not Implemented',
};
exports.BAD_GATEWAY = {
    code: 502,
    name: 'bad_gateway',
    text: 'Bad Gateway',
};
exports.SERVICE_UNAVAILABLE = {
    code: 503,
    name: 'service_unavailable',
    text: 'Service Unavailable',
};
exports.GATEWAY_TIMEOUT = {
    code: 504,
    name: 'gateway_timeout',
    text: 'Gateway Timeout',
};
exports.HTTP_VERSION_NOT_SUPPORTED = {
    code: 505,
    name: 'http_version_not_supported',
    text: 'HTTP Version Not Supported',
};
exports.VARIANT_ALSO_NEGOTIATES = {
    code: 506,
    name: 'variant_also_negotiates',
    text: 'Variant Also Negotiates',
};
exports.INSUFFICIENT_STORAGE = {
    code: 507,
    name: 'insufficient_storage',
    text: 'Insufficient Storage',
};
exports.LOOP_DETECTED = {
    code: 508,
    name: 'loop_detected',
    text: 'Loop Detected',
};
exports.NOT_EXTENDED = {
    code: 510,
    name: 'not_extended',
    text: 'Not Extended',
};
exports.NETWORK_AUTHENTICATION_REQUIRED = {
    code: 511,
    name: 'network_authentication_required',
    text: 'Network Authentication Required',
};
exports.httpStatuses = [
    exports.CONTINUE,
    exports.SWITCHING_PROTOCOLS,
    exports.PROCESSING,
    exports.EARLY_HINTS,
    exports.OK,
    exports.CREATED,
    exports.ACCEPTED,
    exports.NON_AUTHORITATIVE_INFORMATION,
    exports.NO_CONTENT,
    exports.RESET_CONTENT,
    exports.PARTIAL_CONTENT,
    exports.MULTI_STATUS,
    exports.ALREADY_REPORTED,
    exports.IM_USED,
    exports.MULTIPLE_CHOICES,
    exports.MOVED_PERMANENTLY,
    exports.FOUND,
    exports.SEE_OTHER,
    exports.NOT_MODIFIED,
    exports.USE_PROXY,
    exports.SWITCH_PROXY,
    exports.TEMPORARY_REDIRECT,
    exports.PERMANENT_REDIRECT,
    exports.BAD_REQUEST,
    exports.UNAUTHORIZED,
    exports.PAYMENT_REQUIRED,
    exports.FORBIDDEN,
    exports.NOT_FOUND,
    exports.METHOD_NOT_ALLOWED,
    exports.NOT_ACCEPTABLE,
    exports.PROXY_AUTHENTICATION_REQUIRED,
    exports.REQUEST_TIMEOUT,
    exports.CONFLICT,
    exports.GONE,
    exports.LENGTH_REQUIRED,
    exports.PRECONDITION_FAILED,
    exports.PAYLOAD_TOO_LARGE,
    exports.URI_TOO_LONG,
    exports.UNSUPPORTED_MEDIA_TYPE,
    exports.RANGE_NOT_SATISFIABLE,
    exports.EXPECTATION_FAILED,
    exports.IM_A_TEAPOT,
    exports.INSUFFICIENT_SPACE_ON_RESOURCE,
    exports.METHOD_FAILURE,
    exports.MISDIRECTED_REQUEST,
    exports.UNPROCESSABLE_ENTITY,
    exports.LOCKED,
    exports.FAILED_DEPENDENCY,
    exports.TOO_EARLY,
    exports.UPGRADE_REQUIRED,
    exports.PRECONDITION_REQUIRED,
    exports.TOO_MANY_REQUESTS,
    exports.REQUEST_HEADER_FIELDS_TOO_LARGE,
    exports.UNAVAILABLE_FOR_LEGAL_REASONS,
    exports.INTERNAL_SERVER_ERROR,
    exports.NOT_IMPLEMENTED,
    exports.BAD_GATEWAY,
    exports.SERVICE_UNAVAILABLE,
    exports.GATEWAY_TIMEOUT,
    exports.HTTP_VERSION_NOT_SUPPORTED,
    exports.VARIANT_ALSO_NEGOTIATES,
    exports.INSUFFICIENT_STORAGE,
    exports.LOOP_DETECTED,
    exports.NOT_EXTENDED,
    exports.NETWORK_AUTHENTICATION_REQUIRED,
];
exports.HttpStatus = {};
var map = {};
for (var i = 0, len = exports.httpStatuses.length; i < len; i += 1) {
    var status_1 = exports.httpStatuses[i];
    exports.HttpStatus[status_1.code] = status_1;
    exports.HttpStatus[status_1.name] = status_1;
    map[status_1.code] = status_1;
    map[status_1.name] = status_1;
    map[status_1.name.replace(/_/g, '')] = status_1;
}
var nonAlpha = /[^A-Za-z]+/g;
exports.getHttpStatus = function (codeOrName) {
    if (map.hasOwnProperty(codeOrName)) {
        return map[codeOrName];
    }
    if (typeof codeOrName === 'string') {
        var name_1 = codeOrName.replace(nonAlpha, '').toLowerCase();
        if (map.hasOwnProperty(name_1)) {
            return map[name_1];
        }
    }
    return undefined;
};
//# sourceMappingURL=index.js.map