class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const diameterOfBinaryTree = (root: TreeNode | null): number => {
  let res = 0;

  const dfs = (node: TreeNode | null): number => {
    if (!node) {
      return -1;
    }
    const left = dfs(node.left);
    const right = dfs(node.right);
    res = Math.max(res, left + right + 2);
    return Math.max(left, right) + 1;
  };

  dfs(root);
  return res;
};

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);
console.log(diameterOfBinaryTree(root));
