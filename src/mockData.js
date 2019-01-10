export default {
    department1: {
        id: 1,
        belongId: null,
        selected: false,
        childs: [
            {
                id: 4,
                belongId: 1,
                selected: false,
                childs: [
                    {
                        id: 10,
                        belongId: 4,
                        selected: false,
                    },
                    {
                        id: 11,
                        belongId: 4,
                        selected: false,
                    }
                ]
            },
            {
                id: 5,
                belongId: 1,
                selected: false,
                childs: [
                    {
                        id: 12,
                        belongId: 5,
                        selected: false,
                    },
                    {
                        id: 13,
                        belongId: 5,
                        selected: false,
                    }
                ]
            },
            {
                id: 6,
                belongId: 1,
                selected: false,
            }
        ]
    },
    department2: {
        id: 2,
        belongId: null,
        selected: false,
        childs: [
            {
                id: 7,
                belongId: 2,
                selected: false,
            },
            {
                id: 8,
                belongId: 2,
                selected: false,
            },
            {
                id: 9,
                belongId: 2,
                selected: false,
            }
        ]
    },
    department3: {
        id: 3,
        belongId: null,
        selected: false,
        childs: [
            {
                id: 10,
                belongId: 3,
                selected: false,
            }
        ]
    }
}