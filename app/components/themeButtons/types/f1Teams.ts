export interface f1Teams {
    id: string;
    value: string;
    label: string;
    description: string;
    positionCategory: 'top' | 'bottom';
}

export const f1TeamsData: f1Teams[] = [
    {id: 'default', value: 'default', label: 'Use Dark/Light', description: 'Changes color scheme back to the default dark scheme', positionCategory: "top"},
    {id: 'ferrari', value: 'ferrari', label: 'Ferrari', description: 'Backgrounds: Ferrari Red\nText: Ferrari Black\n Headers: Ferrari Yellow', positionCategory: "top"},
    {id: 'sauber', value: 'sauber', label: 'Sauber', description: 'Backgrounds: Sauber Green\nText: Gray/Black\n Headers: Sauber Gray', positionCategory: "top"},
    {id: 'haas', value: 'haas', label: 'Haas', description: 'Backgrounds: Haas Black\nText: Red\n Headers: White', positionCategory: "bottom"},
    {id: 'mercedes', value: 'mercedes', label: 'Mercedes', description: 'Backgrounds: Mercedes Black/Silver\nText: Mercedes Gray\n Headers: Petronas Green', positionCategory: "bottom"},
    {id: 'alpine', value: 'alpine', label: 'Alpine', description: 'Backgrounds: Alpine Blue\nText: Black\n Headers: White', positionCategory: "bottom"},
    {id: 'redBull', value: 'redBull', label: 'Red Bull', description: 'Backgrounds: Red Bull Yellow/Blue\nText: Black\n Headers: Red Bull Red', positionCategory: "top"},
    {id: 'racingBulls', value: 'racingBulls', label: 'Racing Bulls', description: 'Backgrounds: RB White/Blue\nText: White/Black\n Headers: RB Red', positionCategory: "top"},
    {id: 'aston', value: 'aston', label: 'Aston Martin', description: 'Backgrounds: British Racing Green\nText: Black\n Headers: Aston Martin Gold', positionCategory: "bottom"},
    {id: 'mclaren', value: 'mclaren', label: 'McLaren', description: 'Backgrounds: Papaya/Black\nText: White\n Headers: Papaya', positionCategory: "bottom"},
    {id: 'williams', value: 'williams', label: 'Williams', description: 'Backgrounds: Williams Blue\nText: White\n Headers: Williams Light Blue', positionCategory: "bottom"},
];

export const f1Teams: string[] = [
    'ferrari', 'sauber', 'haas', 'mercedes', 'alpine', 'redBull', 'racingBulls', 'aston', 'mclaren', 'williams'
] as const;