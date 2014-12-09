
/***********************************************************************************************
 * Global utility functions
 ***/

/**
 * Parse a boolean, accepts "true", true or 1 as true values
 */
function parseBool(b) {
	return (b.toLowerCase() === 'true' || b === true || b === 1 || b === '1');
}

/***********************************************************************************************
 * Object extension
 ***/

/**
 * Get the size of an object
 */
Object.size = function(o) {
    var s = 0, k;
    for (k in o) {
        if (o.hasOwnProperty(k)) {
        	s++;
        }
    }
    return s;
};