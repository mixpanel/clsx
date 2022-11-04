function toVal(mix, sep) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k], sep)) {
						str && (str += sep);
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += sep);
					str += k;
				}
			}
		}
	}

	return str;
}

function concatArgs(args, sep) {
	var i=0, tmp, x, str='';
	while (i < args.length) {
		if (tmp = args[i++]) {
			if (x = toVal(tmp, sep)) {
				str && (str += sep);
				str += x
			}
		}
	}
	return str;
}

export function clsx() {
	return concatArgs(arguments, ' ');
}

export function selx() {
	var str = concatArgs(arguments, '.');
	return str && '.' + str;
}

export default clsx;
