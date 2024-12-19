const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

const shuffle = (arr, swaps) => {
    for (let i = 0; i < swaps; i++) {
        const index1 = Math.floor(Math.random() * arr.length);
        const index2 = Math.floor(Math.random() * arr.length);
        swap(arr, index1, index2);
    }
};

const bubble_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
};

const selection_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr, i, minIndex);
    }
    return arr;
};

const quick_sort = (arr, start = 0, end = arr.length - 1) => {
    if (start < end) {
        const pivotIndex = particionamento(arr, start, end);
        quick_sort(arr, start, pivotIndex - 1);
        quick_sort(arr, pivotIndex + 1, end);
    }
    return arr;
};

const particionamento = (arr, start, end) => {
    const pivot = arr[end];
    let i = start - 1;

    for (let j = start; j < end; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, end);
    return i + 1;
};