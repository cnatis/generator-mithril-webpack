module.exports = {
	/**
	 *	Inserts the contents of the insertPath file into the targetPath
	 *	file at the first instance of hook. Will not overwrite the hook.
	 *	@param {String} hook Hook string to look for
	 *	@param {String} targetPath Absolute path to the target file
	 *	@param {String} insertPath Absolute path to the insert file
	 *	@param {String} afterInsert Content to include after the inserted content
	 */
	insertFileHook: function(hook, targetPath, insertPath, afterInsert) {
		var source = this.fs.read(targetPath);
		var insert = this.fs.read(insertPath);

		if(typeof(afterInsert) === 'undefined' || afterInsert.toString().trim().length <= 0)
			afterInsert = '\n';

		// Write out the new contents to the file system
		if(source.indexOf(insert) < 0)
			this.fs.write(targetPath, source.replace(hook, insert + afterInsert + hook));
	},
	/**
	 *	Inserts the contents of the insertPath file into the targetPath
	 *	file at the first instance of hook replacing hook in the process.
	 *	@param {String} hook Hook string to look for
	 *	@param {String} targetPath Absolute path to the target file
	 *	@param {String} insertPath Absolute path to the insert file
	 */
	replaceFileHook: function(hook, targetPath, insertPath) {
		var source = this.fs.read(targetPath);
		var insert = this.fs.read(insertPath);

		// Write out the new contents to the file system
		if(source.indexOf(insert) < 0)
			this.fs.write(targetPath, source.replace(hook, insert));
	}
}