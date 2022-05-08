var NestedIterator = function(nestedList) {
    arr=[]
    pos=0
    function flt(lst){
        for(let q of lst){
            if(q.isInteger()) arr.push(q.getInteger())
            else flt(q.getList())
        }
    }
    flt(nestedList)
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return pos<arr.length
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return arr[pos++]
};