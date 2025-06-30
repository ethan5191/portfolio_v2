export interface f1Teams {
    id: string;
    value: string;
    label: string;
}

export const f1TeamsData: f1Teams[] = [
    {id: 'default', value: 'default', label: 'Use Dark/Light'},
    {id: 'ferrari', value: 'ferrari', label: 'Ferrari'},
    {id: 'sauber', value: 'sauber', label: 'Sauber'},
    {id: 'haas', value: 'haas', label: 'Haas'},
    {id: 'mercedes', value: 'mercedes', label: 'Mercedes'},
    {id: 'alpine', value: 'alpine', label: 'Alpine'},
    {id: 'redBull', value: 'redBull', label: 'Red Bull'},
    {id: 'racingBulls', value: 'racingBulls', label: 'Racing Bulls'},
    {id: 'aston', value: 'aston', label: 'Aston Martin'},
    {id: 'mclaren', value: 'mclaren', label: 'McLaren'},
    {id: 'williams', value: 'williams', label: 'Williams'},
];

export const f1Teams: string[] = [
    'ferrari', 'sauber', 'haas', 'mercedes', 'alpine', 'redBull', 'racingBulls', 'aston', 'mclaren', 'williams'
];