function permutation(a) {
  return a.reduce(
    function (list, element) {
      const newlist = [];
      list.forEach(function (seq) {
        for (let i = seq.length; i >= 0; i--) {
          const newseq = [].concat(seq);
          newseq.splice(i, 0, element);
          //요소 삭제 x
          newlist.push(newseq);
        }
      });
      return newlist;
    },
    [[]]
  );
}
const a = [1, 2, 3];
permutation(a).forEach(function (v) {
  console.log(v);
});
//[[1]]
//[[1,2],[2,1]]
//[[1,2,3],[1,3,2],[3,1,2],[2,1,3],[2,3,1],[3,2,1]]
