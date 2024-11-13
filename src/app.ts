function deepClone<T>(obj:T): T {
    const copy: any = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        copy[key] = deepClone(obj[key]);
    }
    return copy as T;
}

const original:object = {a: 1, b: {c: 2}, d: [3, 4]};

deepClone(original);
