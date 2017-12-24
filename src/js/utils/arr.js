module.exports = {
	/**
	 * sort array by a certain key
	 * @param  {Array}    objs      Array of objects
	 * @param  {String}   property  Name of the property inside the objects
	 * @param  {Boolean}  asc       Order flag, True if ASC, False if DESC
	 * @return {Array}              The Array of objects after ordering
	 */
	sortBy(objs, property, asc) {
		asc = Boolean(asc);
		return objs.sort((a, b) => {
			if (a[property] > b[property]) {
				return asc ? 1 : -1;
			} else if (a[property] < b[property]) {
				return asc ? -1 : 1;
			}
			return 0;
		});
	},
	findBy(objs, property, value) {
		var results = objs.filter((obj) => {
			return obj[property] == value;
		});
		if (results.length == 1) return results[0];
		else return results;
	},
	/**
	 * remove one element from array.
	 * @param  {Array}   objs      Array of objects
	 * @param  {Object}  detector  The Object
	 * @return {Array}             The Array after the object was removed
	 */
	remove(objs, detector) {
		if (!objs.length) return;
		var t = objs.find(detector);
		if (!t) return;
		var index = objs.indexOf(t);
		if (index > -1) return objs.splice(index, 1);
	}
};
