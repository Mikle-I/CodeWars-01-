function alphabet(ns) {
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  ns.sort(compareNumeric);

  let res = 0;
  let finalRes;
  let setThree = () => {
    if (ns[2] == ns[3]) {
      res = ns[2];
      return;
    }
    for (i = 2; i < 6; i++)
      if (ns[0] * ns[1] != ns[i]) {
        res = ns[i];
        return;
      }
  };
  setThree();

  let setFinal = () => {
    let proizvOne = ns[0] * ns[1];
    let proizvTwo = res * ns[1];
    for (i = 3; i < 7; i++) {
      if (proizvOne != ns[i] && proizvTwo != ns[i] && res != ns[i]) {
        finalRes = ns[i];
        return finalRes;
      }
    }
  };
  setThree();
  setFinal();
  console.log(ns, res, finalRes);
}
alphabet([2, 6, 18, 3, 6, 7, 42, 14]);
