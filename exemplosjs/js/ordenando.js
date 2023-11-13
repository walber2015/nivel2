// Função swap
const swap = (arr, pos1, pos2) => {
    let temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
};

// Função bubble_sort
const bubble_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
};

// Função selection_sort
const selection_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min_index = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        if (min_index !== i) {
            swap(arr, i, min_index);
        }
    }
};

// Função quick_sort
const quick_sort = (arr, left, right) => {
    if (left < right) {
        const pivot = partition(arr, left, right);
        quick_sort(arr, left, pivot - 1);
        quick_sort(arr, pivot + 1, right);
    }
};

// Função partition
const partition = (arr, left, right) => {
    const pivot = arr[right];
    let partitionIndex = left;
    for (let i = left; i < right; i++) {
        if (arr[i] < pivot) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, partitionIndex, right);
    return partitionIndex;
};

// Função shuffle
const shuffle = (arr, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        const pos1 = Math.floor(Math.random() * arr.length);
        const pos2 = Math.floor(Math.random() * arr.length);
        swap(arr, pos1, pos2);
    }
};
