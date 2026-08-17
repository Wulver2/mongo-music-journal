// construction { 
//                artistName: val, artistPic: val, 
//                 albums [ {title: val, cover: val, releaseDate: val, songs:[{...}]}, ...]}
// have someone from every planned tag
const musicData = [
    {
        name: "Steve Lacy",
        tags: ["Alternative R&B"],
        albums: [
            {
                title: "Oh Yeah?",
                releaseDate: "07-27-2026",
                songs: [
                    {
                        name: "Oh Yeah?",
                    },
                    {
                        name: "Is It Cool?",
                        // has a feature, add a field for this
                    },
                    {
                        name: "The Feeling",
                    },
                    {
                        name: "Pure Color",
                        //feature
                    },
                    {
                        name: "Show You Me",
                    },
                    {
                        name: "Doom",
                    },
                    {
                        name: "Nothing",
                    },
                    //...
                ]

            },
        ]
    }
]

export default musicData;