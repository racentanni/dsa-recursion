function is_valid(s) {
    if (s === 0 || s === 1) {
        return true;
    }

    if (Arrray.isArray(s) && s.length === 4) {
        return s.every(is_valid);
    }

    return false;
}