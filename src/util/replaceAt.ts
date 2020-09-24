interface String {
    /**
    * Replaces index in a string.
    * @param index - The index to replace at.
    * @param replacement - The string to replace the index.
    */
    replaceAt(index: number, replacement: string): string
}

String.prototype.replaceAt = function (index: number, replacement: string) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length)
}