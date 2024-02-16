function floorSqrt(n) {
    let low = 1, high = n;
    // Binary search on the answers:
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let val = mid * mid;
        if (val <= n) {
            // Eliminate the left half:
            low = mid + 1;
        }
        else {
            // Eliminate the right half:
            high = mid - 1;
        }
    }
    return high;
}