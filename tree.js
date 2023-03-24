/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val = 0, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let res = 0
    const toVisitStack = [this.root]
    while (toVisitStack.length){
      const current = toVisitStack.pop()
      if(current){
        res += current.val
        for (let child of current.children){
          toVisitStack.push(child)
        }
      }
    }
    return res
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let res = 0
    const toVisitStack = [this.root]
    while (toVisitStack.length){
      const current = toVisitStack.pop()
      if(current){
        res += (current.val+1) %2
        for (let child of current.children){
          toVisitStack.push(child)
        }
      }
    }
    return res
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let res = 0
    const toVisitStack = [this.root]
    while (toVisitStack.length){
      const current = toVisitStack.pop()
      if(current){
        if (current.val > lowerBound){
          res +=1
        }
        for (let child of current.children){
          toVisitStack.push(child)
        }
      }
    }
    return res
  }
}

module.exports = { Tree, TreeNode };
