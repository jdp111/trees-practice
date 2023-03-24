/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    let res = 1
    let parentList = [this.root]
    if(!parentList[0]) return 0

    while(parentList){
      let childList = []
      for (let el of parentList){
        if(!el.left || !el.right){
          return res
        }
        childList = [...childList, el.left, el.right]
      }
      parentList = childList
      res+=1
    }
    return res
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    let res = 0
    let parentList = [this.root]
    
    while(parentList[0]){
      let childList = []
      for (let el of parentList){
        if(el.left || el.right){
        childList = [...childList, el.left, el.right]
        }
      }
      parentList = childList
      res+=1
    }
    return res
  }


  maxSum() {
    let maxPath = 0;

    function gainFromSubtree(node) {
        if (!node) {
            return 0;
        }
        let gainFromLeft = Math.max(gainFromSubtree(node.left), 0)

        let gainFromRight = Math.max(gainFromSubtree(node.right), 0)

        maxPath = Math.max(maxPath, gainFromLeft + gainFromRight + node.val);

        return Math.max(
            gainFromLeft + node.val,
            gainFromRight + node.val
        );
    }
    gainFromSubtree(this.root);
    return maxPath;
};

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let low=null

    function traverse(root){ 
      if(!root) return null
      if (root.val > lowerBound && (root.val < low || !low)){
        low = root.val 
      }
      const left = root.left
      
      traverse(left)
      const right = root.right
      traverse(right)
    }
    traverse(this.root)
    
    return low

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
