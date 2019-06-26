import { HttpStatusCode, HttpStatusName, IHttpStatus } from './ts';

export const CONTINUE: IHttpStatus = {
  code: 100,
  name: 'continue',
  text: 'Continue',
};
export const SWITCHING_PROTOCOLS: IHttpStatus = {
  code: 101,
  name: 'switching_protocols',
  text: 'Switching Protocols',
};
export const PROCESSING: IHttpStatus = {
  code: 102,
  name: 'processing',
  text: 'Processing',
};
export const EARLY_HINTS: IHttpStatus = {
  code: 103,
  name: 'early_hints',
  text: 'Early Hints',
}; // iana
export const OK: IHttpStatus = { code: 200, name: 'ok', text: 'OK' };
export const CREATED: IHttpStatus = {
  code: 201,
  name: 'created',
  text: 'Created',
};
export const ACCEPTED: IHttpStatus = {
  code: 202,
  name: 'accepted',
  text: 'Accepted',
};
export const NON_AUTHORITATIVE_INFORMATION: IHttpStatus = {
  code: 203,
  name: 'non_authoritative_information',
  text: 'Non-Authoritative Information',
};
export const NO_CONTENT: IHttpStatus = {
  code: 204,
  name: 'no_content',
  text: 'No Content',
};
export const RESET_CONTENT: IHttpStatus = {
  code: 205,
  name: 'reset_content',
  text: 'Reset Content',
};
export const PARTIAL_CONTENT: IHttpStatus = {
  code: 206,
  name: 'partial_content',
  text: 'Partial Content',
};
export const MULTI_STATUS: IHttpStatus = {
  code: 207,
  name: 'multi_status',
  text: 'Multi-Status',
};
export const ALREADY_REPORTED: IHttpStatus = {
  code: 208,
  name: 'already_reported',
  text: 'Already Reported',
}; // iana
export const IM_USED: IHttpStatus = {
  code: 226,
  name: 'im_used',
  text: 'IM Used',
}; // iana
export const MULTIPLE_CHOICES: IHttpStatus = {
  code: 300,
  name: 'multiple_choices',
  text: 'Multiple Choices',
};
export const MOVED_PERMANENTLY: IHttpStatus = {
  code: 301,
  name: 'moved_permanently',
  text: 'Moved Permanently',
};
export const FOUND: IHttpStatus = { code: 302, name: 'found', text: 'Found' };
export const SEE_OTHER: IHttpStatus = {
  code: 303,
  name: 'see_other',
  text: 'See Other',
};
export const NOT_MODIFIED: IHttpStatus = {
  code: 304,
  name: 'not_modified',
  text: 'Not Modified',
};
export const USE_PROXY: IHttpStatus = {
  code: 305,
  name: 'use_proxy',
  text: 'Use Proxy',
};
export const SWITCH_PROXY: IHttpStatus = {
  code: 306,
  name: 'switch_proxy',
  text: 'Switch Proxy',
}; // no longer used
export const TEMPORARY_REDIRECT: IHttpStatus = {
  code: 307,
  name: 'temporary_redirect',
  text: 'Temporary Redirect',
};
export const PERMANENT_REDIRECT: IHttpStatus = {
  code: 308,
  name: 'permanent_redirect',
  text: 'Permanent Redirect',
}; // RFC 7538
export const BAD_REQUEST: IHttpStatus = {
  code: 400,
  name: 'bad_request',
  text: 'Bad Request',
};
export const UNAUTHORIZED: IHttpStatus = {
  code: 401,
  name: 'unauthorized',
  text: 'Unauthorized',
};
export const PAYMENT_REQUIRED: IHttpStatus = {
  code: 402,
  name: 'payment_required',
  text: 'Payment Required',
};
export const FORBIDDEN: IHttpStatus = {
  code: 403,
  name: 'forbidden',
  text: 'Forbidden',
};
export const NOT_FOUND: IHttpStatus = {
  code: 404,
  name: 'not_found',
  text: 'Not Found',
};
export const METHOD_NOT_ALLOWED: IHttpStatus = {
  code: 405,
  name: 'method_not_allowed',
  text: 'Method Not Allowed',
};
export const NOT_ACCEPTABLE: IHttpStatus = {
  code: 406,
  name: 'not_acceptable',
  text: 'Not Acceptable',
};
export const PROXY_AUTHENTICATION_REQUIRED: IHttpStatus = {
  code: 407,
  name: 'proxy_authentication_required',
  text: 'Proxy Authentication Required',
};
export const REQUEST_TIMEOUT: IHttpStatus = {
  code: 408,
  name: 'request_timeout',
  text: 'Request Timeout',
};
export const CONFLICT: IHttpStatus = {
  code: 409,
  name: 'conflict',
  text: 'Conflict',
};
export const GONE: IHttpStatus = { code: 410, name: 'gone', text: 'Gone' };
export const LENGTH_REQUIRED: IHttpStatus = {
  code: 411,
  name: 'length_required',
  text: 'Length Required',
};
export const PRECONDITION_FAILED: IHttpStatus = {
  code: 412,
  name: 'precondition_failed',
  text: 'Precondition Failed',
};
export const PAYLOAD_TOO_LARGE: IHttpStatus = {
  code: 413,
  name: 'payload_too_large',
  text: 'Payload Too Large',
}; // RFC 7231
export const URI_TOO_LONG: IHttpStatus = {
  code: 414,
  name: 'uri_too_long',
  text: 'URI Too Long',
}; // RFC 7231
export const UNSUPPORTED_MEDIA_TYPE: IHttpStatus = {
  code: 415,
  name: 'unsupported_media_type',
  text: 'Unsupported Media Type',
};
export const RANGE_NOT_SATISFIABLE: IHttpStatus = {
  code: 416,
  name: 'range_not_satisfiable',
  text: 'Range Not Satisfiable',
};
export const EXPECTATION_FAILED: IHttpStatus = {
  code: 417,
  name: 'expectation_failed',
  text: 'Expectation Failed',
};
export const IM_A_TEAPOT: IHttpStatus = {
  code: 418,
  name: 'im_a_teapot',
  text: "I'm a teapot",
};
export const INSUFFICIENT_SPACE_ON_RESOURCE: IHttpStatus = {
  code: 419,
  name: 'insufficient_space_on_resource',
  text: 'Insufficient Space on Resource',
};
export const METHOD_FAILURE: IHttpStatus = {
  code: 420,
  name: 'method_failure',
  text: 'Method Failure',
};
export const MISDIRECTED_REQUEST: IHttpStatus = {
  code: 421,
  name: 'misdirected_request',
  text: 'Misdirected Request',
};
export const UNPROCESSABLE_ENTITY: IHttpStatus = {
  code: 422,
  name: 'unprocessable_entity',
  text: 'Unprocessable Entity',
};
export const LOCKED: IHttpStatus = {
  code: 423,
  name: 'locked',
  text: 'Locked',
};
export const FAILED_DEPENDENCY: IHttpStatus = {
  code: 424,
  name: 'failed_dependency',
  text: 'Failed Dependency',
};
export const TOO_EARLY: IHttpStatus = {
  code: 425,
  name: 'too_early',
  text: 'Too Early',
};
export const UPGRADE_REQUIRED: IHttpStatus = {
  code: 426,
  name: 'upgrade_required',
  text: 'Upgrade Required',
};
export const PRECONDITION_REQUIRED: IHttpStatus = {
  code: 428,
  name: 'precondition_required',
  text: 'Precondition Required',
};
export const TOO_MANY_REQUESTS: IHttpStatus = {
  code: 429,
  name: 'too_many_requests',
  text: 'Too Many Requests',
};
export const REQUEST_HEADER_FIELDS_TOO_LARGE: IHttpStatus = {
  code: 431,
  name: 'request_header_fields_too_large',
  text: 'Request Header Fields Too Large',
};
export const UNAVAILABLE_FOR_LEGAL_REASONS: IHttpStatus = {
  code: 451,
  name: 'unavailable_for_legal_reasons',
  text: 'Unavailable For Legal Reasons',
};
export const INTERNAL_SERVER_ERROR: IHttpStatus = {
  code: 500,
  name: 'internal_server_error',
  text: 'Internal Server Error',
};
export const NOT_IMPLEMENTED: IHttpStatus = {
  code: 501,
  name: 'not_implemented',
  text: 'Not Implemented',
};
export const BAD_GATEWAY: IHttpStatus = {
  code: 502,
  name: 'bad_gateway',
  text: 'Bad Gateway',
};
export const SERVICE_UNAVAILABLE: IHttpStatus = {
  code: 503,
  name: 'service_unavailable',
  text: 'Service Unavailable',
};
export const GATEWAY_TIMEOUT: IHttpStatus = {
  code: 504,
  name: 'gateway_timeout',
  text: 'Gateway Timeout',
};
export const HTTP_VERSION_NOT_SUPPORTED: IHttpStatus = {
  code: 505,
  name: 'http_version_not_supported',
  text: 'HTTP Version Not Supported',
};
export const VARIANT_ALSO_NEGOTIATES: IHttpStatus = {
  code: 506,
  name: 'variant_also_negotiates',
  text: 'Variant Also Negotiates',
};
export const INSUFFICIENT_STORAGE: IHttpStatus = {
  code: 507,
  name: 'insufficient_storage',
  text: 'Insufficient Storage',
};
export const LOOP_DETECTED: IHttpStatus = {
  code: 508,
  name: 'loop_detected',
  text: 'Loop Detected',
};
export const NOT_EXTENDED: IHttpStatus = {
  code: 510,
  name: 'not_extended',
  text: 'Not Extended',
};
export const NETWORK_AUTHENTICATION_REQUIRED: IHttpStatus = {
  code: 511,
  name: 'network_authentication_required',
  text: 'Network Authentication Required',
};

export const httpStatuses: IHttpStatus[] = [
  CONTINUE,
  SWITCHING_PROTOCOLS,
  PROCESSING,
  EARLY_HINTS,
  OK,
  CREATED,
  ACCEPTED,
  NON_AUTHORITATIVE_INFORMATION,
  NO_CONTENT,
  RESET_CONTENT,
  PARTIAL_CONTENT,
  MULTI_STATUS,
  ALREADY_REPORTED,
  IM_USED,
  MULTIPLE_CHOICES,
  MOVED_PERMANENTLY,
  FOUND,
  SEE_OTHER,
  NOT_MODIFIED,
  USE_PROXY,
  SWITCH_PROXY,
  TEMPORARY_REDIRECT,
  PERMANENT_REDIRECT,
  BAD_REQUEST,
  UNAUTHORIZED,
  PAYMENT_REQUIRED,
  FORBIDDEN,
  NOT_FOUND,
  METHOD_NOT_ALLOWED,
  NOT_ACCEPTABLE,
  PROXY_AUTHENTICATION_REQUIRED,
  REQUEST_TIMEOUT,
  CONFLICT,
  GONE,
  LENGTH_REQUIRED,
  PRECONDITION_FAILED,
  PAYLOAD_TOO_LARGE,
  URI_TOO_LONG,
  UNSUPPORTED_MEDIA_TYPE,
  RANGE_NOT_SATISFIABLE,
  EXPECTATION_FAILED,
  IM_A_TEAPOT,
  INSUFFICIENT_SPACE_ON_RESOURCE,
  METHOD_FAILURE,
  MISDIRECTED_REQUEST,
  UNPROCESSABLE_ENTITY,
  LOCKED,
  FAILED_DEPENDENCY,
  TOO_EARLY,
  UPGRADE_REQUIRED,
  PRECONDITION_REQUIRED,
  TOO_MANY_REQUESTS,
  REQUEST_HEADER_FIELDS_TOO_LARGE,
  UNAVAILABLE_FOR_LEGAL_REASONS,
  INTERNAL_SERVER_ERROR,
  NOT_IMPLEMENTED,
  BAD_GATEWAY,
  SERVICE_UNAVAILABLE,
  GATEWAY_TIMEOUT,
  HTTP_VERSION_NOT_SUPPORTED,
  VARIANT_ALSO_NEGOTIATES,
  INSUFFICIENT_STORAGE,
  LOOP_DETECTED,
  NOT_EXTENDED,
  NETWORK_AUTHENTICATION_REQUIRED,
];

export const HttpStatus: {
  readonly [K in HttpStatusName | HttpStatusCode]: IHttpStatus;
} = {} as any;

const map: { [key: string]: IHttpStatus } = {};

for (let i = 0, len = httpStatuses.length; i < len; i += 1) {
  const status = httpStatuses[i];
  (HttpStatus as any)[status.code] = status;
  (HttpStatus as any)[status.name] = status;
  map[status.code] = status;
  map[status.name] = status;
  map[status.name.replace(/_/g, '')] = status;
}

const nonAlpha = /[^A-Za-z]+/g;

export const getHttpStatus = (
  codeOrName: string | HttpStatusCode
): IHttpStatus | undefined => {
  if (map.hasOwnProperty(codeOrName)) {
    return map[codeOrName];
  }
  if (typeof codeOrName === 'string') {
    const name = codeOrName.replace(nonAlpha, '').toLowerCase();
    if (map.hasOwnProperty(name)) {
      return map[name];
    }
  }
  return undefined;
};
