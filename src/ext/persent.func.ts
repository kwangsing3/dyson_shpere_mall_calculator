export default (value: number, max: number): string => {
    return ((value / max) * 100).toFixed(0) + '%'
}