import { HttpStatusCode, HttpStatusName, IHttpStatus } from './ts';

export const CONTINUE: IHttpStatus = {
  code: 100,
  name: 'CONTINUE',
  text: 'Continue',
};
export const SWITCHING_PROTOCOLS: IHttpStatus = {
  code: 101,
  name: 'SWITCHING_PROTOCOLS',
  text: 'Switching Protocols',
};
export const PROCESSING: IHttpStatus = {
  code: 102,
  name: 'PROCESSING',
  text: 'Processing',
};
export const EARLY_HINTS: IHttpStatus = {
  code: 103,
  name: 'EARLY_HINTS',
  text: 'Early Hints',
}; // iana
export const OK: IHttpStatus = { code: 200, name: 'OK', text: 'OK' };
export const CREATED: IHttpStatus = {
  code: 201,
  name: 'CREATED',
  text: 'Created',
};
export const ACCEPTED: IHttpStatus = {
  code: 202,
  name: 'ACCEPTED',
  text: 'Accepted',
};
export const NON_AUTHORITATIVE_INFORMATION: IHttpStatus = {
  code: 203,
  name: 'NON_AUTHORITATIVE_INFORMATION',
  text: 'Non-Authoritative Information',
};
export const NO_CONTENT: IHttpStatus = {
  code: 204,
  name: 'NO_CONTENT',
  text: 'No Content',
};
export const RESET_CONTENT: IHttpStatus = {
  code: 205,
  name: 'RESET_CONTENT',
  text: 'Reset Content',
};
export const PARTIAL_CONTENT: IHttpStatus = {
  code: 206,
  name: 'PARTIAL_CONTENT',
  text: 'Partial Content',
};
export const MULTI_STATUS: IHttpStatus = {
  code: 207,
  name: 'MULTI_STATUS',
  text: 'Multi-Status',
};
export const ALREADY_REPORTED: IHttpStatus = {
  code: 208,
  name: 'ALREADY_REPORTED',
  text: 'Already Reported',
}; // iana
export const IM_USED: IHttpStatus = {
  code: 226,
  name: 'IM_USED',
  text: 'IM Used',
}; // iana
export const MULTIPLE_CHOICES: IHttpStatus = {
  code: 300,
  name: 'MULTIPLE_CHOICES',
  text: 'Multiple Choices',
};
export const MOVED_PERMANENTLY: IHttpStatus = {
  code: 301,
  name: 'MOVED_PERMANENTLY',
  text: 'Moved Permanently',
};
export const FOUND: IHttpStatus = { code: 302, name: 'FOUND', text: 'Found' };
export const SEE_OTHER: IHttpStatus = {
  code: 303,
  name: 'SEE_OTHER',
  text: 'See Other',
};
export const NOT_MODIFIED: IHttpStatus = {
  code: 304,
  name: 'NOT_MODIFIED',
  text: 'Not Modified',
};
export const USE_PROXY: IHttpStatus = {
  code: 305,
  name: 'USE_PROXY',
  text: 'Use Proxy',
};
export const SWITCH_PROXY: IHttpStatus = {
  code: 306,
  name: 'SWITCH_PROXY',
  text: 'Switch Proxy',
}; // no longer used
export const TEMPORARY_REDIRECT: IHttpStatus = {
  code: 307,
  name: 'TEMPORARY_REDIRECT',
  text: 'Temporary Redirect',
};
export const PERMANENT_REDIRECT: IHttpStatus = {
  code: 308,
  name: 'PERMANENT_REDIRECT',
  text: 'Permanent Redirect',
}; // RFC 7538
export const BAD_REQUEST: IHttpStatus = {
  code: 400,
  name: 'BAD_REQUEST',
  text: 'Bad Request',
};
export const UNAUTHORIZED: IHttpStatus = {
  code: 401,
  name: 'UNAUTHORIZED',
  text: 'Unauthorized',
};
export const PAYMENT_REQUIRED: IHttpStatus = {
  code: 402,
  name: 'PAYMENT_REQUIRED',
  text: 'Payment Required',
};
export const FORBIDDEN: IHttpStatus = {
  code: 403,
  name: 'FORBIDDEN',
  text: 'Forbidden',
};
export const NOT_FOUND: IHttpStatus = {
  code: 404,
  name: 'NOT_FOUND',
  text: 'Not Found',
};
export const METHOD_NOT_ALLOWED: IHttpStatus = {
  code: 405,
  name: 'METHOD_NOT_ALLOWED',
  text: 'Method Not Allowed',
};
export const NOT_ACCEPTABLE: IHttpStatus = {
  code: 406,
  name: 'NOT_ACCEPTABLE',
  text: 'Not Acceptable',
};
export const PROXY_AUTHENTICATION_REQUIRED: IHttpStatus = {
  code: 407,
  name: 'PROXY_AUTHENTICATION_REQUIRED',
  text: 'Proxy Authentication Required',
};
export const REQUEST_TIMEOUT: IHttpStatus = {
  code: 408,
  name: 'REQUEST_TIMEOUT',
  text: 'Request Timeout',
};
export const CONFLICT: IHttpStatus = {
  code: 409,
  name: 'CONFLICT',
  text: 'Conflict',
};
export const GONE: IHttpStatus = { code: 410, name: 'GONE', text: 'Gone' };
export const LENGTH_REQUIRED: IHttpStatus = {
  code: 411,
  name: 'LENGTH_REQUIRED',
  text: 'Length Required',
};
export const PRECONDITION_FAILED: IHttpStatus = {
  code: 412,
  name: 'PRECONDITION_FAILED',
  text: 'Precondition Failed',
};
export const PAYLOAD_TOO_LARGE: IHttpStatus = {
  code: 413,
  name: 'PAYLOAD_TOO_LARGE',
  text: 'Payload Too Large',
}; // RFC 7231
export const URI_TOO_LONG: IHttpStatus = {
  code: 414,
  name: 'URI_TOO_LONG',
  text: 'URI Too Long',
}; // RFC 7231
export const UNSUPPORTED_MEDIA_TYPE: IHttpStatus = {
  code: 415,
  name: 'UNSUPPORTED_MEDIA_TYPE',
  text: 'Unsupported Media Type',
};
export const RANGE_NOT_SATISFIABLE: IHttpStatus = {
  code: 416,
  name: 'RANGE_NOT_SATISFIABLE',
  text: 'Range Not Satisfiable',
};
export const EXPECTATION_FAILED: IHttpStatus = {
  code: 417,
  name: 'EXPECTATION_FAILED',
  text: 'Expectation Failed',
};
export const IM_A_TEAPOT: IHttpStatus = {
  code: 418,
  name: 'IM_A_TEAPOT',
  text: "I'm a teapot",
};
export const INSUFFICIENT_SPACE_ON_RESOURCE: IHttpStatus = {
  code: 419,
  name: 'INSUFFICIENT_SPACE_ON_RESOURCE',
  text: 'Insufficient Space on Resource',
};
export const METHOD_FAILURE: IHttpStatus = {
  code: 420,
  name: 'METHOD_FAILURE',
  text: 'Method Failure',
};
export const MISDIRECTED_REQUEST: IHttpStatus = {
  code: 421,
  name: 'MISDIRECTED_REQUEST',
  text: 'Misdirected Request',
};
export const UNPROCESSABLE_ENTITY: IHttpStatus = {
  code: 422,
  name: 'UNPROCESSABLE_ENTITY',
  text: 'Unprocessable Entity',
};
export const LOCKED: IHttpStatus = {
  code: 423,
  name: 'LOCKED',
  text: 'Locked',
};
export const FAILED_DEPENDENCY: IHttpStatus = {
  code: 424,
  name: 'FAILED_DEPENDENCY',
  text: 'Failed Dependency',
};
export const TOO_EARLY: IHttpStatus = {
  code: 425,
  name: 'TOO_EARLY',
  text: 'Too Early',
};
export const UPGRADE_REQUIRED: IHttpStatus = {
  code: 426,
  name: 'UPGRADE_REQUIRED',
  text: 'Upgrade Required',
};
export const PRECONDITION_REQUIRED: IHttpStatus = {
  code: 428,
  name: 'PRECONDITION_REQUIRED',
  text: 'Precondition Required',
};
export const TOO_MANY_REQUESTS: IHttpStatus = {
  code: 429,
  name: 'TOO_MANY_REQUESTS',
  text: 'Too Many Requests',
};
export const REQUEST_HEADER_FIELDS_TOO_LARGE: IHttpStatus = {
  code: 431,
  name: 'REQUEST_HEADER_FIELDS_TOO_LARGE',
  text: 'Request Header Fields Too Large',
};
export const UNAVAILABLE_FOR_LEGAL_REASONS: IHttpStatus = {
  code: 451,
  name: 'UNAVAILABLE_FOR_LEGAL_REASONS',
  text: 'Unavailable For Legal Reasons',
};
export const INTERNAL_SERVER_ERROR: IHttpStatus = {
  code: 500,
  name: 'INTERNAL_SERVER_ERROR',
  text: 'Internal Server Error',
};
export const NOT_IMPLEMENTED: IHttpStatus = {
  code: 501,
  name: 'NOT_IMPLEMENTED',
  text: 'Not Implemented',
};
export const BAD_GATEWAY: IHttpStatus = {
  code: 502,
  name: 'BAD_GATEWAY',
  text: 'Bad Gateway',
};
export const SERVICE_UNAVAILABLE: IHttpStatus = {
  code: 503,
  name: 'SERVICE_UNAVAILABLE',
  text: 'Service Unavailable',
};
export const GATEWAY_TIMEOUT: IHttpStatus = {
  code: 504,
  name: 'GATEWAY_TIMEOUT',
  text: 'Gateway Timeout',
};
export const HTTP_VERSION_NOT_SUPPORTED: IHttpStatus = {
  code: 505,
  name: 'HTTP_VERSION_NOT_SUPPORTED',
  text: 'HTTP Version Not Supported',
};
export const VARIANT_ALSO_NEGOTIATES: IHttpStatus = {
  code: 506,
  name: 'VARIANT_ALSO_NEGOTIATES',
  text: 'Variant Also Negotiates',
};
export const INSUFFICIENT_STORAGE: IHttpStatus = {
  code: 507,
  name: 'INSUFFICIENT_STORAGE',
  text: 'Insufficient Storage',
};
export const LOOP_DETECTED: IHttpStatus = {
  code: 508,
  name: 'LOOP_DETECTED',
  text: 'Loop Detected',
};
export const NOT_EXTENDED: IHttpStatus = {
  code: 510,
  name: 'NOT_EXTENDED',
  text: 'Not Extended',
};
export const NETWORK_AUTHENTICATION_REQUIRED: IHttpStatus = {
  code: 511,
  name: 'NETWORK_AUTHENTICATION_REQUIRED',
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
    const name = codeOrName.replace(nonAlpha, '').toUpperCase();
    if (map.hasOwnProperty(name)) {
      return map[name];
    }
  }
  return undefined;
};
