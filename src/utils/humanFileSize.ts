export function humanFileSize(
    bytes: number,
    si: boolean = false,
    dp: number = 2
) {
    const thresh = si ? 1000 : 1024;

    if (Math.abs(bytes) < thresh) {
        return `${bytes} B`;
    }

    const units = si
        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    let u = -1;
    const r = 10 ** dp;

    let internalBytes = bytes;

    do {
        internalBytes /= thresh;
        u += 1;
    } while (
        Math.round(Math.abs(internalBytes) * r) / r >= thresh &&
        u < units.length - 1
    );

    return `${internalBytes.toFixed(dp)} ${units[u]}`;
}
