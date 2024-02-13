const optimalMathmaticalApproach = function(arr) {
    const n = a.length;
    const SN = (n * (n + 1)) / 2;
    const S2N = (n * (n + 1) * (2 * n + 1)) / 6;

    let S = 0, S2 = 0;
    for (let i = 0; i < n; i++) {
        S += a[i];
        S2 += a[i] * a[i];
    }

    const val1 = S - SN;
    let val2 = S2 - S2N;
    val2 = val2 / val1;

    const x = (val1 + val2) / 2;
    const y = x - val1;

    return [x, y];
}