function isHour(unit) {
    return unit === 'hour';
}

export function getAngle(unit = 'hour') {
    const time = getTime(unit);
    const steps = isHour(unit) ? 360/12 : 360/60;

    if (isHour(unit)) {
        const rest = time % 12;
        const hour = rest ? rest : 12;
        const angle = hour * steps;
        const decimal = getTime('minute') / 60;
        return angle < 360
            ? angle + (decimal * steps)
            : decimal * steps;
    }

    return time * steps;
}

export function getColor(angle = 0) {
    return `hsl(${angle}, 80%, 70%)`;
}

export function getTime(unit = 'hour') {
    const d = new Date();

    switch (unit) {
        case 'hour':
            return d.getHours();
        case 'minute':
            return d.getMinutes();
        case 'second':
            return d.getSeconds();
    }
}
