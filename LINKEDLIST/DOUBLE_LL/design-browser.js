function NodeDLL(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
}

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.current = new NodeDLL(homepage);
    this.head = this.current;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    const newNode = new NodeDLL(url);
    this.current.next = newNode;
    newNode.prev = this.current;
    this.current = newNode;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while(steps > 0 && this.current.prev) {
        this.current = this.current.prev;
        steps--;
    }
    return this.current.data;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while(steps > 0 && this.current.next) {
        this.current = this.current.next;
        steps--;
    }
    return this.current.data;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */