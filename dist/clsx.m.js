function r(e,t){var n,f,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(f=r(e[n],t))&&(o&&(o+=t),o+=f);else for(n in e)e[n]&&(o&&(o+=t),o+=n);return o}function e(e,t){for(var n,f,o=0,i="";o<e.length;)(n=e[o++])&&(f=r(n,t))&&(i&&(i+=t),i+=f);return i}export function clsx(){return e(arguments," ")}export function selx(){var r=e(arguments,".");return r&&"."+r}export default clsx;