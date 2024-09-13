const games = [
    {
        "gameID": "612",
        "steamAppID": null,
        "cheapest": "15.95",
        "cheapestDealID": "0f%2B4gT2VVUn4UcmFzPxXnuqoXKAOYoJ5mpFZRWNyohc%3D",
        "external": "LEGO Batman",
        "internalName": "LEGOBATMAN",
        "thumb": "https://cdn.fanatical.com/production/product/400x225/105f34ca-7757-47ad-953e-7df7f016741e.jpeg"
    },
    {
        "gameID": "167613",
        "steamAppID": null,
        "cheapest": "15.95",
        "cheapestDealID": "2XSMlnYtPjLoKI9g2vhZch9deHZ%2BE%2BpL7IoBprkWtgM%3D",
        "external": "LEGO Batman 2",
        "internalName": "LEGOBATMAN2",
        "thumb": "https://cdn.fanatical.com/production/product/400x225/4cf0701e-77bf-4539-bda7-129ab3e81f8b.jpeg"
    },
    {
        "gameID": "167910",
        "steamAppID": "502820",
        "cheapest": "4.99",
        "cheapestDealID": "Vv2BkWU%2FEoIlHNbYtLBFjLJP8noeCUodfp1IXbQJZ6w%3D",
        "external": "Batman: Arkham VR",
        "internalName": "BATMANARKHAMVR",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/502820/capsule_sm_120.jpg?t=1684483128"
    },
    {
        "gameID": "136751",
        "steamAppID": null,
        "cheapest": "49.99",
        "cheapestDealID": "tWdHYhBxTi%2Boen9dGX6I0I%2BfklTJOHB0SykaLcbpsqk%3D",
        "external": "LEGO Batman Trilogy",
        "internalName": "LEGOBATMANTRILOGY",
        "thumb": "https://hb.imgix.net/fec566de2b11fbe22a542086fb3758652f790551.jpg?auto=compress,format&fit=crop&h=84&w=135&s=1159b53389e7c72d23ef72b5c883d725"
    },
    {
        "gameID": "107598",
        "steamAppID": "208650",
        "cheapest": "3.99",
        "cheapestDealID": "%2BRR8iNYa2ZB%2FIhfZml8B1USYGhQVeYAv0Tl8JPkZ8UM%3D",
        "external": "Batman: Arkham Knight",
        "internalName": "BATMANARKHAMKNIGHT",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208650/capsule_sm_120.jpg?t=1702934528"
    },
    {
        "gameID": "97941",
        "steamAppID": "209000",
        "cheapest": "3.99",
        "cheapestDealID": "6YSaSYFA%2Bjmj9L4HsCBLThDoYEUhWPQ1ssIZ0t2k%2BnU%3D",
        "external": "Batman: Arkham Origins",
        "internalName": "BATMANARKHAMORIGINS",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/209000/capsule_sm_120.jpg?t=1681234740"
    },
    {
        "gameID": "198190",
        "steamAppID": null,
        "cheapest": "15.99",
        "cheapestDealID": "DnVEZriqpYWyJoC4CN2%2Fe07Su8RZ61DATyjmfNk%2FwKI%3D",
        "external": "Batman Arkham City GOTY",
        "internalName": "BATMANARKHAMCITYGOTY",
        "thumb": "https://us.gamesplanet.com/acache/15/46/1/us/packshot-92b3116edd0584b61a131fa716d0a766.jpg"
    },
    {
        "gameID": "198317",
        "steamAppID": "320795",
        "cheapest": "8.99",
        "cheapestDealID": "g5zcqhDot%2FhT5s%2BIfHgygYaagbxBH09cSgR5xdyVS5g%3D",
        "external": "Batman: Arkham Collection",
        "internalName": "BATMANARKHAMCOLLECTION",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/subs/320795/capsule_sm_120.jpg?t=1636658684"
    },
    {
        "gameID": "2425",
        "steamAppID": "21000",
        "cheapest": "2.99",
        "cheapestDealID": "uCO441gpSEGJP6K9x66LeC7yi7ILolaTmvo8lOMCdIc%3D",
        "external": "LEGO Batman: The Videogame",
        "internalName": "LEGOBATMANTHEVIDEOGAME",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/21000/capsule_sm_120.jpg?t=1681923978"
    },
    {
        "gameID": "126255",
        "steamAppID": "313690",
        "cheapest": "2.99",
        "cheapestDealID": "%2BA3ge6nu7jMLKH1mWUj9rq6VYWRTsENzY%2B08DdMR1FE%3D",
        "external": "LEGO Batman 3: Beyond Gotham",
        "internalName": "LEGOBATMAN3BEYONDGOTHAM",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/313690/capsule_sm_120.jpg?t=1573510385"
    },
    {
        "gameID": "199261",
        "steamAppID": null,
        "cheapest": "39.98",
        "cheapestDealID": "vVlFdl8%2BVYZuEwKlNPy7iUrK49IXdqtNSKDgTrhw4sM%3D",
        "external": "Batman Game of the Year Pack",
        "internalName": "BATMANGAMEOFTHEYEARPACK",
        "thumb": "https://images.greenmangaming.com/9c282eceace145df99f76f0d08febdfe/1fbba96f5f8a4ffbb135e320bcc2346c.jpg"
    },
    {
        "gameID": "155074",
        "steamAppID": "498240",
        "cheapest": "5.99",
        "cheapestDealID": "uSsyxlu%2BfwGY%2FuhQ813YGUsHJmjOSI%2B7wANjAMlsbtw%3D",
        "external": "Batman - The Telltale Series",
        "internalName": "BATMANTHETELLTALESERIES",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/498240/capsule_sm_120.jpg?t=1686747257"
    },
    {
        "gameID": "262248",
        "steamAppID": null,
        "cheapest": "14.99",
        "cheapestDealID": "OKARgK1wBMW6W6Mod6tfJ%2FS582x6mmaZzcsrhKNN9zw%3D",
        "external": "HOT WHEELS - Batman Expansion",
        "internalName": "HOTWHEELSBATMANEXPANSION",
        "thumb": "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HOTWHEELSBatmanExpansion_MilestoneSrl_DLC_S2_1200x1600-eb509c7f016c85c206fb702fe7483ebf"
    },
    {
        "gameID": "88269",
        "steamAppID": "213330",
        "cheapest": "2.99",
        "cheapestDealID": "PLK%2BInMYUooml%2FkEGWW%2Bw8MluNwy5q9ZSzKcLaciTU4%3D",
        "external": "LEGO Batman 2: DC Super Heroes",
        "internalName": "LEGOBATMAN2DCSUPERHEROES",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/213330/capsule_sm_120.jpg?t=1681923916"
    },
    {
        "gameID": "214905",
        "steamAppID": null,
        "cheapest": "4.99",
        "cheapestDealID": "OTJxScRuO1D3hoLSFDjrWKZKm%2FrcXvSACoDDGijZjrY%3D",
        "external": "Telltale Batman Shadows Mode",
        "internalName": "TELLTALEBATMANSHADOWSMODE",
        "thumb": "https://images.gog-statics.com/e60c4596e9f9a74ca587efcb561b94d0e61e80648bd478a7e74ec8f6cd93c44a_product_tile_117h.webp"
    },
    {
        "gameID": "89107",
        "steamAppID": null,
        "cheapest": "19.99",
        "cheapestDealID": "yPE8bI5eH%2FFwI0L7KaEUTfOzYmWLPj%2F76DHrJEnFWeY%3D",
        "external": "Batman: Arkham City GOTY Edition",
        "internalName": "BATMANARKHAMCITYGOTYEDITION",
        "thumb": "https://hb.imgix.net/08abd0c1b25f2ffc652ae7d6537443cee7eccf94.jpg?auto=compress,format&fit=crop&h=84&w=135&s=6ae6339224425ee6e7b7e48ddea68e1d"
    },
    {
        "gameID": "143771",
        "steamAppID": null,
        "cheapest": "5.00",
        "cheapestDealID": "N0aiUBib2nX52PNBU37BWWfDDD%2FhkbcYlPHCQUxmuQ8%3D",
        "external": "Batman: Arkham Knight - Season Pass",
        "internalName": "BATMANARKHAMKNIGHTSEASONPASS",
        "thumb": "https://sttc.gamersgate.com/images/product/batmantm-arkham-knight-season-pass/cover-180-5d9655.jpg"
    },
    {
        "gameID": "214906",
        "steamAppID": null,
        "cheapest": "14.98",
        "cheapestDealID": "A3hjhaYvTj0ZcYKpdslQ4PASVGEwe0Zwfrd61gkWLXE%3D",
        "external": "Telltale Batman Shadows Edition",
        "internalName": "TELLTALEBATMANSHADOWSEDITION",
        "thumb": "https://images.greenmangaming.com/bb1f86edd3be41e3bb8948c00523e5ef/bd6b538c1a7b4f138b862d3c825ff005.jpg"
    },
    {
        "gameID": "87778",
        "steamAppID": null,
        "cheapest": "16.99",
        "cheapestDealID": "uppD8xHMJiqlB88HAnAVeVuInMdQh8eIXN0r2eaC6VI%3D",
        "external": "Batman Arkham Asylum GOTY Edition",
        "internalName": "BATMANARKHAMASYLUMGOTYEDITION",
        "thumb": "https://hb.imgix.net/2a07e9e90c9af53c5120151c9ff4e0aa3771ce99.jpeg?auto=compress,format&fit=crop&h=84&w=135&s=0f42069b4949098d7d589d28a9f66311"
    },
    {
        "gameID": "246183",
        "steamAppID": null,
        "cheapest": "19.99",
        "cheapestDealID": "3VlwNpcd%2FDMETYgzpXd1WDzLWBTn9qHFBhtkSUbnCMs%3D",
        "external": "Batman Arkham City: Game of the Year",
        "internalName": "BATMANARKHAMCITYGAMEOFTHEYEAR",
        "thumb": "https://images.greenmangaming.com/3e529338224949f280276fa6a5b75fec/933b9d36ea2d49b4b389899814729378.jpg"
    },
    {
        "gameID": "102510",
        "steamAppID": null,
        "cheapest": "14.99",
        "cheapestDealID": "%2BThIUJIoyxRy9u7NDjuvidcljQ6heP%2FiEmWT%2FkUc5aE%3D",
        "external": "Batman Arkham Origins Season Pass",
        "internalName": "BATMANARKHAMORIGINSSEASONPASS",
        "thumb": "https://images.greenmangaming.com/1c43fd1ff43744c08e854d6ff963c91d/2c8b09a294f4401ab3747b99b6d828f1.jpg"
    },
    {
        "gameID": "214907",
        "steamAppID": null,
        "cheapest": "4.99",
        "cheapestDealID": "lBW7zyO4rDYgP9peypdBSZC%2B6dp8bUJMtwXlUVt9ghY%3D",
        "external": "Batman Shadows Mode: The Enemy Within",
        "internalName": "BATMANSHADOWSMODETHEENEMYWITHIN",
        "thumb": "https://images.gog-statics.com/70d653226ede85bb70a8d4022a2d02b6c2e2bb9775e87b6a9ca5c30d6ac7f815_product_tile_117h.webp"
    },
    {
        "gameID": "221906",
        "steamAppID": null,
        "cheapest": "4.99",
        "cheapestDealID": "E7P6Oz50WDEWzQZZjj8b1l6e7C3S0sr43hOQnoDCtqk%3D",
        "external": "Batman - The Enemy Within Shadows Mode",
        "internalName": "BATMANTHEENEMYWITHINSHADOWSMODE",
        "thumb": "https://images.greenmangaming.com/85ad7081bac34a3cb4151daeb6540b50/9e93071c54604454974132c72bab146f.jpg"
    },
    {
        "gameID": "246576",
        "steamAppID": null,
        "cheapest": "29.99",
        "cheapestDealID": "Fi5iMIssmS3PtiA3m42zXTR22B9GvIcr2NE8Csb5kFw%3D",
        "external": "The Telltale Batman Shadows Edition",
        "internalName": "THETELLTALEBATMANSHADOWSEDITION",
        "thumb": "https://cdn1.epicgames.com/f2bfff793b224f6190a394f461c9a4b8/offer/TheTelltaleBatmanShadowsEdition-2560x1440-1ababb36a948b5c732ab85a330787e85.jpg"
    },
    {
        "gameID": "225758",
        "steamAppID": null,
        "cheapest": "4.99",
        "cheapestDealID": "PUPfxJiMyt4dbcslwvOVad0v%2BgtknEhy8c90qOpVp9w%3D",
        "external": "Telltale Batman Shadows Mode Bundle",
        "internalName": "TELLTALEBATMANSHADOWSMODEBUNDLE",
        "thumb": "https://hb.imgix.net/bcd6694f5442c730d3b16bdb07e956e52fe17b32.png?auto=compress,format&fit=crop&h=84&w=135&s=748daa2aa04096c42a24db2baf8320ff"
    },
    {
        "gameID": "250727",
        "steamAppID": null,
        "cheapest": "19.99",
        "cheapestDealID": "WT%2FMFjw1bIOhh5gs6slTqvwUdrGR2W4wEwyYGlT1G98%3D",
        "external": "Batman: Arkham Asylum Game of the Year",
        "internalName": "BATMANARKHAMASYLUMGAMEOFTHEYEAR",
        "thumb": "https://images.greenmangaming.com/0c2b457baa0a4e778c31771ead715300/88c9e725b8ff4610a2e1970e0f4a08f1.jpg"
    },
    {
        "gameID": "143817",
        "steamAppID": null,
        "cheapest": "31.88",
        "cheapestDealID": "5Cwq5t9J3RKsRCP3EYIktz2QNQkzl%2FZ9ZvqHJz8N7Ik%3D",
        "external": "Batman: Arkham Knight - Premium Edition",
        "internalName": "BATMANARKHAMKNIGHTPREMIUMEDITION",
        "thumb": "https://images.greenmangaming.com/b47c3b1bc8a5468ab3ada8832be8355c/4de3b472f988463abf6a869bcdda44d7.jpg"
    },
    {
        "gameID": "108605",
        "steamAppID": null,
        "cheapest": "8.49",
        "cheapestDealID": "1kwCcJiqxMJJyas58G3FQ4Od%2BbujQrxSF19FRSAmcPE%3D",
        "external": "Batman: Arkham Origins - Cold, Cold Heart",
        "internalName": "BATMANARKHAMORIGINSCOLDCOLDHEART",
        "thumb": "https://images.greenmangaming.com/ba8d4cd6e14e40fca132f346e2d0d3b4/44f1b54092f3498f88b3d7c1df88451b.jpg"
    },
    {
        "gameID": "136749",
        "steamAppID": null,
        "cheapest": "3.00",
        "cheapestDealID": "k1S33Cgc2ot%2BV%2BxJVUyBogaB0PxBSNK5mFY32oX8npU%3D",
        "external": "LEGO Batman 3: Beyond Gotham Season Pass",
        "internalName": "LEGOBATMAN3BEYONDGOTHAMSEASONPASS",
        "thumb": "https://sttc.gamersgate.com/images/product/lego-batman-3-beyond-gotham-season-pass/cover-180-e8ad17.jpg"
    },
    {
        "gameID": "221904",
        "steamAppID": null,
        "cheapest": "4.99",
        "cheapestDealID": "oWzY%2BWDZExyELDQrL4xy3kd6P1p%2BOQMQ%2FIOeMaN0QaU%3D",
        "external": "Batman - The Telltale Series Shadows Mode",
        "internalName": "BATMANTHETELLTALESERIESSHADOWSMODE",
        "thumb": "https://images.greenmangaming.com/9cc80f2eb57e4588b159b818fed76288/7afd0ac5cde2472b8fde02a4720dc0ad.jpg"
    },
    {
        "gameID": "89095",
        "steamAppID": "200260",
        "cheapest": "3.99",
        "cheapestDealID": "RPqJV%2BI3Cw5NOoq%2B89MzssePMS%2BQgv2M1OnDzsdR0Jo%3D",
        "external": "Batman Arkham City Game of the Year Edition",
        "internalName": "BATMANARKHAMCITYGAMEOFTHEYEAREDITION",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/200260/capsule_sm_120.jpg?t=1702934622"
    },
    {
        "gameID": "178376",
        "steamAppID": null,
        "cheapest": "34.99",
        "cheapestDealID": "pTeQKzHuRK4TDqHYLY4xolVHA5s%2BVlwXQrlqzqnLCks%3D",
        "external": "LEGO Batman 3: Beyond Gotham Premium Edition",
        "internalName": "LEGOBATMAN3BEYONDGOTHAMPREMIUMEDITION",
        "thumb": "https://images.gog-statics.com/0d81cdadc840148cbd6e1f1a6897bdf9d38994b3045c7a394f8426a82775b9f4_product_tile_117h.webp"
    },
    {
        "gameID": "171102",
        "steamAppID": "675260",
        "cheapest": "5.99",
        "cheapestDealID": "O3R9Lb8H5%2FOde%2BYxvObV4bHESrZT7WooRK6Re4QKtLw%3D",
        "external": "Batman: The Enemy Within - The Telltale Series",
        "internalName": "BATMANTHEENEMYWITHINTHETELLTALESERIES",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/675260/capsule_sm_120.jpg?t=1686747613"
    },
    {
        "gameID": "146",
        "steamAppID": "35140",
        "cheapest": "3.99",
        "cheapestDealID": "HR5V6hEl39sGwYodeqwwWuo8dKtKukteV0W9we9pI7I%3D",
        "external": "Batman: Arkham Asylum Game of the Year Edition",
        "internalName": "BATMANARKHAMASYLUMGAMEOFTHEYEAREDITION",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/35140/capsule_sm_120.jpg?t=1702934705"
    },
    {
        "gameID": "107869",
        "steamAppID": "267490",
        "cheapest": "3.99",
        "cheapestDealID": "6aW%2BsA5i2cZ8pb2wvI0kuSfspYxuaeFKWl2iWWoCU7k%3D",
        "external": "Batman: Arkham Origins Blackgate - Deluxe Edition",
        "internalName": "BATMANARKHAMORIGINSBLACKGATEDELUXEEDITION",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/267490/capsule_sm_120.jpg?t=1651865751"
    },
    {
        "gameID": "250195",
        "steamAppID": null,
        "cheapest": "2.99",
        "cheapestDealID": "A2XgGTglsm6iTyN%2BzxnWqIrErGb1uxYlGt4vUZyeG0k%3D",
        "external": "LEGO DC Super-Villains Batman: The Animated Series Level Pack",
        "internalName": "LEGODCSUPERVILLAINSBATMANTHEANIMATEDSERIESLEVELPACK",
        "thumb": "https://images.gog-statics.com/7b55f49b5d2898986176e45d97391b263cc46b804ce7e8dc81ecb242c72f1e7d_product_tile_117h.webp"
    }
]

const cheapest = games.filter(function(element, index) {
    return Number(element.cheapest) < 5  
})

console.log(cheapest)

const person = {
    firsName: 'tony',
    lastName: 'Stark',
    age: 60,
    job:'CEO',
    fullName: function() {
        return person.firsName + " " + person.lastName
    }
}

const boyFireson = {
    firsName: 'Tim',
    lastName: 'Tony',
    age: 60,
    job:'CEO',
    fullName: function() {
        return person.firsName + " " + person.lastName
    }
}

console.log(person.firsName + " " + person.lastName)

//function A(){
    //console.log(person.firsName + " " + person.lastName)
//}
// function B(){
    //console.log(boyFirend.firestName + " " + boyFirend.lastName)

    const TenseishitaraSlimeDattaKen = {

        "data": [
            {
                "mal_id": 37430,
                "url": "https://myanimelist.net/anime/37430/Tensei_shitara_Slime_Datta_Ken",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1069/123309.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1069/123309t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1069/123309l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1069/123309.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1069/123309t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1069/123309l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "bkQkyzXEXKE",
                    "url": "https://www.youtube.com/watch?v=bkQkyzXEXKE",
                    "embed_url": "https://www.youtube.com/embed/bkQkyzXEXKE?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/bkQkyzXEXKE/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/bkQkyzXEXKE/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/bkQkyzXEXKE/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/bkQkyzXEXKE/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/bkQkyzXEXKE/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken"
                    },
                    {
                        "type": "Synonym",
                        "title": "TenSura"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime"
                    },
                    {
                        "type": "German",
                        "title": "That Time I Got Reincamrnated as a Slime"
                    },
                    {
                        "type": "Spanish",
                        "title": "That Time I Got Reincarnated as a Slime"
                    },
                    {
                        "type": "French",
                        "title": "That Time I Got Reincarnated as a Slime"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken",
                "title_english": "That Time I Got Reincarnated as a Slime",
                "title_japanese": "転生したらスライムだった件",
                "title_synonyms": [
                    "TenSura"
                ],
                "type": "TV",
                "source": "Manga",
                "episodes": 24,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2018-10-02T00:00:00+00:00",
                    "to": "2019-03-19T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 2,
                            "month": 10,
                            "year": 2018
                        },
                        "to": {
                            "day": 19,
                            "month": 3,
                            "year": 2019
                        }
                    },
                    "string": "Oct 2, 2018 to Mar 19, 2019"
                },
                "duration": "23 min per ep",
                "rating": "PG-13 - Teens 13 or older",
                "score": 8.14,
                "scored_by": 905118,
                "rank": 454,
                "popularity": 82,
                "members": 1495264,
                "favorites": 30895,
                "synopsis": "Thirty-seven-year-old Satoru Mikami is a typical corporate worker, who is perfectly content with his monotonous lifestyle in Tokyo, other than failing to nail down a girlfriend even once throughout his life. In the midst of a casual encounter with his colleague, he falls victim to a random assailant on the streets and is stabbed. However, while succumbing to his injuries, a peculiar voice echoes in his mind, and recites a bunch of commands which the dying man cannot make sense of.\n\nWhen Satoru regains consciousness, he discovers that he has reincarnated as a goop of slime in an unfamiliar realm. In doing so, he acquires newfound skills—notably, the power to devour anything and mimic its appearance and abilities. He then stumbles upon the sealed Catastrophe-level monster \"Storm Dragon\" Veldora who had been sealed away for the past 300 years for devastating a town to ashes. Sympathetic to his predicament, Satoru befriends him, promising to assist in destroying the seal. In return, Veldora bestows upon him the name Rimuru Tempest to grant him divine protection. \n\nNow, liberated from the mundanities of his past life, Rimuru embarks on a fresh journey with a distinct goal in mind. As he grows accustomed to his new physique, his gooey antics ripple throughout the world, gradually altering his fate.\n\n[Written by MAL Rewrite]",
                "background": "",
                "season": "fall",
                "year": 2018,
                "broadcast": {
                    "day": "Tuesdays",
                    "time": "00:00",
                    "timezone": "Asia/Tokyo",
                    "string": "Tuesdays at 00:00 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 104,
                        "type": "anime",
                        "name": "Lantis",
                        "url": "https://myanimelist.net/anime/producer/104/Lantis"
                    },
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1416,
                        "type": "anime",
                        "name": "BS11",
                        "url": "https://myanimelist.net/anime/producer/1416/BS11"
                    },
                    {
                        "mal_id": 1840,
                        "type": "anime",
                        "name": "Bandai Namco Arts",
                        "url": "https://myanimelist.net/anime/producer/1840/Bandai_Namco_Arts"
                    },
                    {
                        "mal_id": 1896,
                        "type": "anime",
                        "name": "Micro Magazine Publishing",
                        "url": "https://myanimelist.net/anime/producer/1896/Micro_Magazine_Publishing"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 102,
                        "type": "anime",
                        "name": "Funimation",
                        "url": "https://myanimelist.net/anime/producer/102/Funimation"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 58592,
                "url": "https://myanimelist.net/anime/58592/Tensei_shitara_Slime_Datta_Ken_3rd_Season__Kanwa_-_Diablo_Nikki",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1092/142426.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1092/142426t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1092/142426l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1092/142426.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1092/142426t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1092/142426l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken 3rd Season: Kanwa - Diablo Nikki"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensei shitara Slime Datta Ken 2nd Season Part 2 Recap"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensei shitara Slime Datta Ken Episode 48.5"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件 閑話: ディアブロ日記"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime Season 3: Digression - Diablo's Journal"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken 3rd Season: Kanwa - Diablo Nikki",
                "title_english": "That Time I Got Reincarnated as a Slime Season 3: Digression - Diablo's Journal",
                "title_japanese": "転生したらスライムだった件 閑話: ディアブロ日記",
                "title_synonyms": [
                    "Tensei shitara Slime Datta Ken 2nd Season Part 2 Recap",
                    "Tensei shitara Slime Datta Ken Episode 48.5"
                ],
                "type": "TV Special",
                "source": "Manga",
                "episodes": 1,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2024-03-31T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 31,
                            "month": 3,
                            "year": 2024
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Mar 31, 2024"
                },
                "duration": "23 min",
                "rating": "PG-13 - Teens 13 or older",
                "score": 6.67,
                "scored_by": 5891,
                "rank": 5860,
                "popularity": 5701,
                "members": 14180,
                "favorites": 42,
                "synopsis": "Recap of Tensei Shitara Slime Datta Ken 2nd Season Part 2.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 39551,
                "url": "https://myanimelist.net/anime/39551/Tensei_shitara_Slime_Datta_Ken_2nd_Season",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1271/109841.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1271/109841t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1271/109841l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1271/109841.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1271/109841t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1271/109841l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "Lk3fJsIOnKw",
                    "url": "https://www.youtube.com/watch?v=Lk3fJsIOnKw",
                    "embed_url": "https://www.youtube.com/embed/Lk3fJsIOnKw?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/Lk3fJsIOnKw/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/Lk3fJsIOnKw/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/Lk3fJsIOnKw/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/Lk3fJsIOnKw/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/Lk3fJsIOnKw/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken 2nd Season"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensura 2"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime Season 2"
                    },
                    {
                        "type": "German",
                        "title": "That Time I Got Reincarnated as a Slime Staffel 2"
                    },
                    {
                        "type": "Spanish",
                        "title": "That Time I Got Reincarnated as a Slime Temporada 2"
                    },
                    {
                        "type": "French",
                        "title": "Moi, quand je me réincarne en Slime Saison 2"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken 2nd Season",
                "title_english": "That Time I Got Reincarnated as a Slime Season 2",
                "title_japanese": "転生したらスライムだった件",
                "title_synonyms": [
                    "Tensura 2"
                ],
                "type": "TV",
                "source": "Manga",
                "episodes": 12,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2021-01-12T00:00:00+00:00",
                    "to": "2021-03-30T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 12,
                            "month": 1,
                            "year": 2021
                        },
                        "to": {
                            "day": 30,
                            "month": 3,
                            "year": 2021
                        }
                    },
                    "string": "Jan 12, 2021 to Mar 30, 2021"
                },
                "duration": "23 min per ep",
                "rating": "PG-13 - Teens 13 or older",
                "score": 8.37,
                "scored_by": 576443,
                "rank": 212,
                "popularity": 162,
                "members": 999733,
                "favorites": 10807,
                "synopsis": "Taking a break from his time as a teacher, the powerful slime Rimuru Tempest returns to his kingdom, eponymously named Tempest, just in time to begin negotiations with a nearby nation—the Kingdom of Eurazania. While the negotiations are anything but peaceful, they do end successfully, allowing Rimuru to return and finish teaching. When trying to again return to Tempest, this time permanently, Rimuru is stopped by a mysterious figure who is somehow able to constrain the many magical abilities he has at his disposal. \n\nIn Tempest, the situation is even worse. A group of unknown humans has invaded the land and are assaulting its citizens, both influential and innocent. They are not just trying to bring harm either—they have the intent to kill. Can Rimuru overcome his powerful and dangerous foe and return to Tempest before it is too late?  \n\n[Written by MAL Rewrite]",
                "background": "",
                "season": "winter",
                "year": 2021,
                "broadcast": {
                    "day": "Tuesdays",
                    "time": "23:00",
                    "timezone": "Asia/Tokyo",
                    "string": "Tuesdays at 23:00 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 102,
                        "type": "anime",
                        "name": "Funimation",
                        "url": "https://myanimelist.net/anime/producer/102/Funimation"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 41487,
                "url": "https://myanimelist.net/anime/41487/Tensei_shitara_Slime_Datta_Ken_2nd_Season_Part_2",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1033/118296.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1033/118296t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1033/118296l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1033/118296.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1033/118296t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1033/118296l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "nle-73CcG1k",
                    "url": "https://www.youtube.com/watch?v=nle-73CcG1k",
                    "embed_url": "https://www.youtube.com/embed/nle-73CcG1k?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/nle-73CcG1k/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/nle-73CcG1k/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/nle-73CcG1k/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/nle-73CcG1k/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/nle-73CcG1k/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken 2nd Season Part 2"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensura 2"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime Season 2 Part 2"
                    },
                    {
                        "type": "German",
                        "title": "Meine Wiedergeburt als Schleim in einer anderen Welt Staffel 2 Teil 2"
                    },
                    {
                        "type": "Spanish",
                        "title": "That Time I Got Reincarnated as a Slime Temporada 2 Parte 2"
                    },
                    {
                        "type": "French",
                        "title": "Moi, Quand Je Me Réincarne en Slime Saison 2 Partie 2"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken 2nd Season Part 2",
                "title_english": "That Time I Got Reincarnated as a Slime Season 2 Part 2",
                "title_japanese": "転生したらスライムだった件",
                "title_synonyms": [
                    "Tensura 2"
                ],
                "type": "TV",
                "source": "Manga",
                "episodes": 12,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2021-07-06T00:00:00+00:00",
                    "to": "2021-09-21T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 6,
                            "month": 7,
                            "year": 2021
                        },
                        "to": {
                            "day": 21,
                            "month": 9,
                            "year": 2021
                        }
                    },
                    "string": "Jul 6, 2021 to Sep 21, 2021"
                },
                "duration": "23 min per ep",
                "rating": "PG-13 - Teens 13 or older",
                "score": 8.32,
                "scored_by": 461148,
                "rank": 253,
                "popularity": 248,
                "members": 803395,
                "favorites": 10938,
                "synopsis": "The nation of Tempest is in a festive mood after successfully overcoming the surprise attack from the Falmuth Army and the Western Holy Church. Beyond the festivities lies a meeting between Tempest and its allies to decide the future of the Nation of Monsters. The aftermath of the Falmuth invasion, Milim Nava's suspicious behavior, and the disappearance of Demon Lord Carrion—the problems seem to keep on piling up.\n\nRimuru Tempest, now awakened as a True Demon Lord, decides to go on the offensive against Clayman. With the fully revived Storm Dragon Veldora, Ultimate Skill Raphael, and other powerful comrades, the ruler of the Tempest is confident in taking down his enemies one by one until he can face the man pulling the strings.\n\n[Written by MAL Rewrite]",
                "background": "",
                "season": "summer",
                "year": 2021,
                "broadcast": {
                    "day": "Tuesdays",
                    "time": "23:00",
                    "timezone": "Asia/Tokyo",
                    "string": "Tuesdays at 23:00 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1416,
                        "type": "anime",
                        "name": "BS11",
                        "url": "https://myanimelist.net/anime/producer/1416/BS11"
                    },
                    {
                        "mal_id": 1840,
                        "type": "anime",
                        "name": "Bandai Namco Arts",
                        "url": "https://myanimelist.net/anime/producer/1840/Bandai_Namco_Arts"
                    },
                    {
                        "mal_id": 1896,
                        "type": "anime",
                        "name": "Micro Magazine Publishing",
                        "url": "https://myanimelist.net/anime/producer/1896/Micro_Magazine_Publishing"
                    },
                    {
                        "mal_id": 1992,
                        "type": "anime",
                        "name": "Bandai Spirits",
                        "url": "https://myanimelist.net/anime/producer/1992/Bandai_Spirits"
                    },
                    {
                        "mal_id": 2106,
                        "type": "anime",
                        "name": "Sony Music Solutions",
                        "url": "https://myanimelist.net/anime/producer/2106/Sony_Music_Solutions"
                    },
                    {
                        "mal_id": 2232,
                        "type": "anime",
                        "name": "ADK Marketing Solutions",
                        "url": "https://myanimelist.net/anime/producer/2232/ADK_Marketing_Solutions"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 1468,
                        "type": "anime",
                        "name": "Crunchyroll",
                        "url": "https://myanimelist.net/anime/producer/1468/Crunchyroll"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 41488,
                "url": "https://myanimelist.net/anime/41488/Tensura_Nikki__Tensei_shitara_Slime_Datta_Ken",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1458/117607.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1458/117607t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1458/117607l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1458/117607.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1458/117607t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1458/117607l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "JyCSGTKcNPA",
                    "url": "https://www.youtube.com/watch?v=JyCSGTKcNPA",
                    "embed_url": "https://www.youtube.com/embed/JyCSGTKcNPA?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/JyCSGTKcNPA/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/JyCSGTKcNPA/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/JyCSGTKcNPA/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/JyCSGTKcNPA/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/JyCSGTKcNPA/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensura Nikki: Tensei shitara Slime Datta Ken"
                    },
                    {
                        "type": "Japanese",
                        "title": "転スラ日記 転生したらスライムだった件"
                    },
                    {
                        "type": "English",
                        "title": "The Slime Diaries"
                    },
                    {
                        "type": "German",
                        "title": "The Slime Diaries"
                    },
                    {
                        "type": "Spanish",
                        "title": "The Slime Diaries"
                    },
                    {
                        "type": "French",
                        "title": "The Slime Diaries"
                    }
                ],
                "title": "Tensura Nikki: Tensei shitara Slime Datta Ken",
                "title_english": "The Slime Diaries",
                "title_japanese": "転スラ日記 転生したらスライムだった件",
                "title_synonyms": [],
                "type": "TV",
                "source": "Manga",
                "episodes": 12,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2021-04-06T00:00:00+00:00",
                    "to": "2021-06-22T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 6,
                            "month": 4,
                            "year": 2021
                        },
                        "to": {
                            "day": 22,
                            "month": 6,
                            "year": 2021
                        }
                    },
                    "string": "Apr 6, 2021 to Jun 22, 2021"
                },
                "duration": "23 min per ep",
                "rating": "PG-13 - Teens 13 or older",
                "score": 7.59,
                "scored_by": 155952,
                "rank": 1565,
                "popularity": 695,
                "members": 350785,
                "favorites": 2088,
                "synopsis": "In between slaying monsters and negotiating with neighboring countries, Rimuru Tempest has his hands full attending to his kingdom alongside day-to-day matters. But whether it's expanding the farms in the summer heat or shoveling snow in the chilly winter, no task is too big for Rimuru and his friends!\n\n[Written by MAL Rewrite]",
                "background": "Tensura Nikki: Tensei shitara Slime Datta Ken was initially scheduled to begin airing in January 2021, but it was delayed for three months due to the COVID-19 pandemic.",
                "season": "spring",
                "year": 2021,
                "broadcast": {
                    "day": "Tuesdays",
                    "time": "23:00",
                    "timezone": "Asia/Tokyo",
                    "string": "Tuesdays at 23:00 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 104,
                        "type": "anime",
                        "name": "Lantis",
                        "url": "https://myanimelist.net/anime/producer/104/Lantis"
                    },
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1416,
                        "type": "anime",
                        "name": "BS11",
                        "url": "https://myanimelist.net/anime/producer/1416/BS11"
                    },
                    {
                        "mal_id": 1840,
                        "type": "anime",
                        "name": "Bandai Namco Arts",
                        "url": "https://myanimelist.net/anime/producer/1840/Bandai_Namco_Arts"
                    },
                    {
                        "mal_id": 1896,
                        "type": "anime",
                        "name": "Micro Magazine Publishing",
                        "url": "https://myanimelist.net/anime/producer/1896/Micro_Magazine_Publishing"
                    },
                    {
                        "mal_id": 1992,
                        "type": "anime",
                        "name": "Bandai Spirits",
                        "url": "https://myanimelist.net/anime/producer/1992/Bandai_Spirits"
                    },
                    {
                        "mal_id": 2106,
                        "type": "anime",
                        "name": "Sony Music Solutions",
                        "url": "https://myanimelist.net/anime/producer/2106/Sony_Music_Solutions"
                    },
                    {
                        "mal_id": 2232,
                        "type": "anime",
                        "name": "ADK Marketing Solutions",
                        "url": "https://myanimelist.net/anime/producer/2232/ADK_Marketing_Solutions"
                    }
                ],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 38793,
                "url": "https://myanimelist.net/anime/38793/Tensei_shitara_Slime_Datta_Ken_OVA",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1230/118297.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1230/118297t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1230/118297l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1230/118297.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1230/118297t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1230/118297l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken OVA"
                    },
                    {
                        "type": "Synonym",
                        "title": "TenSura OVA"
                    },
                    {
                        "type": "Synonym",
                        "title": "That Time I Got Reincarnated as a Slime OVA"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensei shitara Slime Datta Ken Gaiden"
                    },
                    {
                        "type": "Synonym",
                        "title": "That Time I Got Reincarnated as a Slime Extra"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件 OVA"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime OAD"
                    },
                    {
                        "type": "German",
                        "title": "That Time I Got Reincarnated As A Slim OAD"
                    },
                    {
                        "type": "Spanish",
                        "title": "That Time I Got Reincarnated as a Slime OAD"
                    },
                    {
                        "type": "French",
                        "title": "Moi, Quand Je Me Réincarne en Slime OAD"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken OVA",
                "title_english": "That Time I Got Reincarnated as a Slime OAD",
                "title_japanese": "転生したらスライムだった件 OVA",
                "title_synonyms": [
                    "TenSura OVA",
                    "That Time I Got Reincarnated as a Slime OVA",
                    "Tensei shitara Slime Datta Ken Gaiden",
                    "That Time I Got Reincarnated as a Slime Extra"
                ],
                "type": "OVA",
                "source": "Manga",
                "episodes": 5,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2019-07-09T00:00:00+00:00",
                    "to": "2020-11-27T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 9,
                            "month": 7,
                            "year": 2019
                        },
                        "to": {
                            "day": 27,
                            "month": 11,
                            "year": 2020
                        }
                    },
                    "string": "Jul 9, 2019 to Nov 27, 2020"
                },
                "duration": "23 min per ep",
                "rating": "PG-13 - Teens 13 or older",
                "score": 7.49,
                "scored_by": 121839,
                "rank": 1901,
                "popularity": 1032,
                "members": 242552,
                "favorites": 525,
                "synopsis": "One day, Shuna and Shion are fighting over Rimuru's squishy slime body as usual. Rimuru figures that giving them each a body double of himself would solve the conflict, but when he imagines some of his other friends asking him to do the same for them, he quickly drops that plan. Then he comes up with the idea to make a cushion in the shape of his slime form. He travels around Tempest to see if his friends know of any good materials he can use, and he learns that a special type of sand found along a lake shore in the forest is exactly what he's looking for. So he sets out to collect some sand... but a monster is waiting for him by the lake! What's more, Milim hears about his plan for a picnic and comes racing down from the sky!\n\n(Source: Crunchyroll)",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 49877,
                "url": "https://myanimelist.net/anime/49877/Tensei_shitara_Slime_Datta_Ken_Movie__Guren_no_Kizuna-hen",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1745/128238.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1745/128238t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1745/128238l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1745/128238.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1745/128238t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1745/128238l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "nJEGXG_vXbo",
                    "url": "https://www.youtube.com/watch?v=nJEGXG_vXbo",
                    "embed_url": "https://www.youtube.com/embed/nJEGXG_vXbo?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/nJEGXG_vXbo/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/nJEGXG_vXbo/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/nJEGXG_vXbo/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/nJEGXG_vXbo/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/nJEGXG_vXbo/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken Movie: Guren no Kizuna-hen"
                    },
                    {
                        "type": "Synonym",
                        "title": "TenSura"
                    },
                    {
                        "type": "Synonym",
                        "title": "That Time I Got Reincarnated as a Slime Movie"
                    },
                    {
                        "type": "Japanese",
                        "title": "劇場版 転生したらスライムだった件 紅蓮の絆編"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime: The Movie - Scarlet Bond"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken Movie: Guren no Kizuna-hen",
                "title_english": "That Time I Got Reincarnated as a Slime: The Movie - Scarlet Bond",
                "title_japanese": "劇場版 転生したらスライムだった件 紅蓮の絆編",
                "title_synonyms": [
                    "TenSura",
                    "That Time I Got Reincarnated as a Slime Movie"
                ],
                "type": "Movie",
                "source": "Manga",
                "episodes": 1,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2022-11-25T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 25,
                            "month": 11,
                            "year": 2022
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Nov 25, 2022"
                },
                "duration": "1 hr 48 min",
                "rating": "PG-13 - Teens 13 or older",
                "score": 7.63,
                "scored_by": 89581,
                "rank": 1427,
                "popularity": 1163,
                "members": 215472,
                "favorites": 1338,
                "synopsis": "In Raja, a small country located to the west of Tempest. Rimuru and his companions get involved in a long-running conspiracy that swirls around the mysterious power of the queen. Rimuru and his commander Benimaru also encounter another ogre survivor named Hiiro, a man that used to be the brother of Benimaru.\n\n(Source: ANN)",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 39607,
                "url": "https://myanimelist.net/anime/39607/Tensei_shitara_Slime_Datta_Ken__Kanwa_-_Veldora_Nikki",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1672/100144.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1672/100144t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1672/100144l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1672/100144.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1672/100144t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1672/100144l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken: Kanwa - Veldora Nikki"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensei shitara Slime Datta Ken Recap"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件 閑話: ヴェルドラ日記"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime: Tales - Veldora's Journal"
                    },
                    {
                        "type": "German",
                        "title": "Meine Wiedergeburt als Schleim in einer anderen Welt Staffel 2 Folge 36.5 – Veldoras Tagebuch 2"
                    },
                    {
                        "type": "Spanish",
                        "title": "That Time I Got Reincarnated as a Slime Temporada 2 Episodio 36.5 Digresión: Diario de Veldora"
                    },
                    {
                        "type": "French",
                        "title": "Moi, quand je me réincarne en Slime Saison 2 Épisode 36.5: Digression – Le journal de Veldra 2"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken: Kanwa - Veldora Nikki",
                "title_english": "That Time I Got Reincarnated as a Slime: Tales - Veldora's Journal",
                "title_japanese": "転生したらスライムだった件 閑話: ヴェルドラ日記",
                "title_synonyms": [
                    "Tensei shitara Slime Datta Ken Recap"
                ],
                "type": "TV Special",
                "source": "Manga",
                "episodes": 1,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2019-03-26T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 26,
                            "month": 3,
                            "year": 2019
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Mar 26, 2019"
                },
                "duration": "23 min",
                "rating": "PG-13 - Teens 13 or older",
                "score": 6.76,
                "scored_by": 71844,
                "rank": 5366,
                "popularity": 1780,
                "members": 129975,
                "favorites": 202,
                "synopsis": "Ifrit, who has been trapped in Rimuru due to the latter's Predator skill, recaps events of the season while in a discussion with Veldora as they play Shogi.\n\n(Source: Wikipedia)",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [
                    {
                        "mal_id": 102,
                        "type": "anime",
                        "name": "Funimation",
                        "url": "https://myanimelist.net/anime/producer/102/Funimation"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [],
                "demographics": []
            },
            {
                "mal_id": 45753,
                "url": "https://myanimelist.net/anime/45753/Tensei_shitara_Slime_Datta_Ken__Kanwa_-_Hinata_Sakaguchi",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1670/111154.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1670/111154t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1670/111154l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1670/111154.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1670/111154t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1670/111154l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken: Kanwa - Hinata Sakaguchi"
                    },
                    {
                        "type": "Synonym",
                        "title": "That Time I got Reincarnated as a Slime Episode 24.9"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensei shitara Slime Datta Ken Recap"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensura Recap"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件 閑話: ヒナタ・サカグチ"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime Season 2: Digression - Hinata Sakaguchi"
                    },
                    {
                        "type": "German",
                        "title": "Meine Wiedergeburt Als Schleim In Einer Anderen Welt Staffel 2 Folge 24.9 Hinata Sakaguchi"
                    },
                    {
                        "type": "Spanish",
                        "title": "That Time I Got Reincarnated as a Slime Episodio 24.9. Digresión: Hinata Sakaguchi"
                    },
                    {
                        "type": "French",
                        "title": "Moi, quand je me réincarne en Slime Saison 2 Épisode 24.9 Digression: Hinata Sakaguchi"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken: Kanwa - Hinata Sakaguchi",
                "title_english": "That Time I Got Reincarnated as a Slime Season 2: Digression - Hinata Sakaguchi",
                "title_japanese": "転生したらスライムだった件 閑話: ヒナタ・サカグチ",
                "title_synonyms": [
                    "That Time I got Reincarnated as a Slime Episode 24.9",
                    "Tensei shitara Slime Datta Ken Recap",
                    "Tensura Recap"
                ],
                "type": "TV Special",
                "source": "Manga",
                "episodes": 1,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2021-01-05T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 5,
                            "month": 1,
                            "year": 2021
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Jan 5, 2021"
                },
                "duration": "23 min",
                "rating": "PG-13 - Teens 13 or older",
                "score": 6.79,
                "scored_by": 31748,
                "rank": 5213,
                "popularity": 2796,
                "members": 65024,
                "favorites": 127,
                "synopsis": "A summary of season one of Tensei shitara Slime Datta Ken with some extra content leading into season two.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 49318,
                "url": "https://myanimelist.net/anime/49318/Tensei_shitara_Slime_Datta_Ken_2nd_Season__Kanwa_-_Veldora_Nikki_2",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1879/121719.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1879/121719t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1879/121719l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1879/121719.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1879/121719t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1879/121719l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken 2nd Season: Kanwa - Veldora Nikki 2"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensei shitara Slime Datta Ken 2nd Season Recap"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensei shitara Slime Datta Ken Episode 36.5"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件 閑話: ヴェルドラ日記2"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime Season 2: Tales - Veldora's Journal 2"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken 2nd Season: Kanwa - Veldora Nikki 2",
                "title_english": "That Time I Got Reincarnated as a Slime Season 2: Tales - Veldora's Journal 2",
                "title_japanese": "転生したらスライムだった件 閑話: ヴェルドラ日記2",
                "title_synonyms": [
                    "Tensei shitara Slime Datta Ken 2nd Season Recap",
                    "Tensei shitara Slime Datta Ken Episode 36.5"
                ],
                "type": "TV Special",
                "source": "Manga",
                "episodes": 1,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2021-06-29T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 29,
                            "month": 6,
                            "year": 2021
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Jun 29, 2021"
                },
                "duration": "23 min",
                "rating": "PG-13 - Teens 13 or older",
                "score": 7.17,
                "scored_by": 29557,
                "rank": 3429,
                "popularity": 2914,
                "members": 60340,
                "favorites": 283,
                "synopsis": "Recap of Tensei Shitara Slime Datta Ken 2nd Season.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 53580,
                "url": "https://myanimelist.net/anime/53580/Tensei_shitara_Slime_Datta_Ken_3rd_Season",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1211/143476.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1211/143476t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1211/143476l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1211/143476.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1211/143476t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1211/143476l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "kM2m7GcF6W0",
                    "url": "https://www.youtube.com/watch?v=kM2m7GcF6W0",
                    "embed_url": "https://www.youtube.com/embed/kM2m7GcF6W0?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/kM2m7GcF6W0/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/kM2m7GcF6W0/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/kM2m7GcF6W0/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/kM2m7GcF6W0/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/kM2m7GcF6W0/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken 3rd Season"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensura 3"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件 第3期"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime Season 3"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken 3rd Season",
                "title_english": "That Time I Got Reincarnated as a Slime Season 3",
                "title_japanese": "転生したらスライムだった件 第3期",
                "title_synonyms": [
                    "Tensura 3"
                ],
                "type": "TV",
                "source": "Manga",
                "episodes": 24,
                "status": "Currently Airing",
                "airing": true,
                "aired": {
                    "from": "2024-04-05T00:00:00+00:00",
                    "to": "2024-09-27T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 5,
                            "month": 4,
                            "year": 2024
                        },
                        "to": {
                            "day": 27,
                            "month": 9,
                            "year": 2024
                        }
                    },
                    "string": "Apr 5, 2024 to Sep 27, 2024"
                },
                "duration": "24 min per ep",
                "rating": "PG-13 - Teens 13 or older",
                "score": 7.8,
                "scored_by": 60762,
                "rank": 1009,
                "popularity": 712,
                "members": 343121,
                "favorites": 3888,
                "synopsis": "Rimuru Tempest is victorious following his climactic showdown with Demon Lord Clayman. With Diablo's aid, the war with the Falmuth Kingdom ends decisively in Rimuru's favor. Fueled by increased migration and the integration of Jura Forest, the nation of Tempest undergoes rapid growth.\n\nRimuru's victory shifts the balance of power, giving rise to a renewed period of peace—but whether that peace will last is another matter. Yuuki Kagurazaka and Kazalim are conspiring with the Harlequin Alliance to bring about Rimuru's downfall. Furthermore, the Western Holy Church continues its intolerant crusade against Rimuru and his non-human subordinates. Both allies and enemies engage in a battle of wits, carefully advancing their agendas without shattering the delicate status quo. But once the first domino inevitably falls, the race to supremacy begins.\n\n[Written by MAL Rewrite]",
                "background": "Tensei shitara Slime Datta Ken 3rd Season was released on Blu-ray and DVD in four volumes from July 24, 2024, to October 30, 2024.",
                "season": "spring",
                "year": 2024,
                "broadcast": {
                    "day": "Fridays",
                    "time": "23:00",
                    "timezone": "Asia/Tokyo",
                    "string": "Fridays at 23:00 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1003,
                        "type": "anime",
                        "name": "Nippon Television Network",
                        "url": "https://myanimelist.net/anime/producer/1003/Nippon_Television_Network"
                    },
                    {
                        "mal_id": 1416,
                        "type": "anime",
                        "name": "BS11",
                        "url": "https://myanimelist.net/anime/producer/1416/BS11"
                    },
                    {
                        "mal_id": 1896,
                        "type": "anime",
                        "name": "Micro Magazine Publishing",
                        "url": "https://myanimelist.net/anime/producer/1896/Micro_Magazine_Publishing"
                    },
                    {
                        "mal_id": 1992,
                        "type": "anime",
                        "name": "Bandai Spirits",
                        "url": "https://myanimelist.net/anime/producer/1992/Bandai_Spirits"
                    },
                    {
                        "mal_id": 2106,
                        "type": "anime",
                        "name": "Sony Music Solutions",
                        "url": "https://myanimelist.net/anime/producer/2106/Sony_Music_Solutions"
                    },
                    {
                        "mal_id": 2232,
                        "type": "anime",
                        "name": "ADK Marketing Solutions",
                        "url": "https://myanimelist.net/anime/producer/2232/ADK_Marketing_Solutions"
                    },
                    {
                        "mal_id": 2424,
                        "type": "anime",
                        "name": "Bandai Namco Filmworks",
                        "url": "https://myanimelist.net/anime/producer/2424/Bandai_Namco_Filmworks"
                    },
                    {
                        "mal_id": 2425,
                        "type": "anime",
                        "name": "Bandai Namco Music Live",
                        "url": "https://myanimelist.net/anime/producer/2425/Bandai_Namco_Music_Live"
                    }
                ],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 59493,
                "url": "https://myanimelist.net/anime/59493/Tensei_shitara_Slime_Datta_Ken__Kanwa_-_Luminous_Memories",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1465/144664.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1465/144664.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken: Kanwa - Luminous Memories"
                    },
                    {
                        "type": "Synonym",
                        "title": "That Time I got Reincarnated as a Slime Episode 65.5"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensei shitara Slime Datta Ken Recap"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensura Recap"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件 閑話:ルミナスメモリーズ"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime Season 3: Digression - Luminous Memories"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken: Kanwa - Luminous Memories",
                "title_english": "That Time I Got Reincarnated as a Slime Season 3: Digression - Luminous Memories",
                "title_japanese": "転生したらスライムだった件 閑話:ルミナスメモリーズ",
                "title_synonyms": [
                    "That Time I got Reincarnated as a Slime Episode 65.5",
                    "Tensei shitara Slime Datta Ken Recap",
                    "Tensura Recap"
                ],
                "type": "TV Special",
                "source": "Manga",
                "episodes": 1,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2024-08-10T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 10,
                            "month": 8,
                            "year": 2024
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Aug 10, 2024"
                },
                "duration": "24 min",
                "rating": "PG-13 - Teens 13 or older",
                "score": 6.31,
                "scored_by": 3918,
                "rank": 7894,
                "popularity": 5677,
                "members": 14308,
                "favorites": 9,
                "synopsis": "Recap of Tensei shitara Slime Datta Ken 3rd Season.\n\nRimuru and Hinata, despite both holding similar values, fought fiercely. What happened behind the scenes of this complicated situation? From the perspective of Luminous Valentine, the one and only God of the Holy Empire of Lubelius and one of the Octagram Demon Lords. The details of the \"Holy Demon Battle\" are told, as well as some secret that she has never told anyone.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 59493,
                "url": "https://myanimelist.net/anime/59493/Tensei_shitara_Slime_Datta_Ken__Kanwa_-_Luminous_Memories",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1465/144664.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1465/144664.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken: Kanwa - Luminous Memories"
                    },
                    {
                        "type": "Synonym",
                        "title": "That Time I got Reincarnated as a Slime Episode 65.5"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensei shitara Slime Datta Ken Recap"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensura Recap"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件 閑話:ルミナスメモリーズ"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime Season 3: Digression - Luminous Memories"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken: Kanwa - Luminous Memories",
                "title_english": "That Time I Got Reincarnated as a Slime Season 3: Digression - Luminous Memories",
                "title_japanese": "転生したらスライムだった件 閑話:ルミナスメモリーズ",
                "title_synonyms": [
                    "That Time I got Reincarnated as a Slime Episode 65.5",
                    "Tensei shitara Slime Datta Ken Recap",
                    "Tensura Recap"
                ],
                "type": "TV Special",
                "source": "Manga",
                "episodes": 1,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2024-08-10T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 10,
                            "month": 8,
                            "year": 2024
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Aug 10, 2024"
                },
                "duration": "24 min",
                "rating": "PG-13 - Teens 13 or older",
                "score": 6.31,
                "scored_by": 3918,
                "rank": 7894,
                "popularity": 5677,
                "members": 14308,
                "favorites": 9,
                "synopsis": "Recap of Tensei shitara Slime Datta Ken 3rd Season.\n\nRimuru and Hinata, despite both holding similar values, fought fiercely. What happened behind the scenes of this complicated situation? From the perspective of Luminous Valentine, the one and only God of the Holy Empire of Lubelius and one of the Octagram Demon Lords. The details of the \"Holy Demon Battle\" are told, as well as some secret that she has never told anyone.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 54565,
                "url": "https://myanimelist.net/anime/54565/Tensei_shitara_Slime_Datta_Ken__Coleus_no_Yume",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1570/135813.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1570/135813t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1570/135813l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1570/135813.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1570/135813t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1570/135813l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "WuIDVoKdVGU",
                    "url": "https://www.youtube.com/watch?v=WuIDVoKdVGU",
                    "embed_url": "https://www.youtube.com/embed/WuIDVoKdVGU?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/WuIDVoKdVGU/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/WuIDVoKdVGU/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/WuIDVoKdVGU/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/WuIDVoKdVGU/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/WuIDVoKdVGU/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken: Coleus no Yume"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件 コリウスの夢"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime: Visions of Coleus"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken: Coleus no Yume",
                "title_english": "That Time I Got Reincarnated as a Slime: Visions of Coleus",
                "title_japanese": "転生したらスライムだった件 コリウスの夢",
                "title_synonyms": [],
                "type": "ONA",
                "source": "Manga",
                "episodes": 3,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2023-11-02T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 2,
                            "month": 11,
                            "year": 2023
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Nov 2, 2023"
                },
                "duration": "24 min per ep",
                "rating": "PG-13 - Teens 13 or older",
                "score": 7.58,
                "scored_by": 37727,
                "rank": 1572,
                "popularity": 2299,
                "members": 89948,
                "favorites": 316,
                "synopsis": "The story takes place between the first and second season, where Rimuru confronts the swirling conspiracies in the Coleus kingdom.\n\n(Source: MAL News)",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 57434,
                "url": "https://myanimelist.net/anime/57434/Tensei_shitara_Slime_Datta_Ken_Movie__Guren_no_Kizuna-hen_Specials",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1505/140140.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1505/140140t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1505/140140l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1505/140140.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1505/140140t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1505/140140l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken Movie: Guren no Kizuna-hen Specials"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken Movie: Guren no Kizuna-hen Specials",
                "title_english": null,
                "title_japanese": null,
                "title_synonyms": [],
                "type": "Special",
                "source": "Manga",
                "episodes": 2,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2023-07-28T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 28,
                            "month": 7,
                            "year": 2023
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Jul 28, 2023"
                },
                "duration": "1 min per ep",
                "rating": "PG-13 - Teens 13 or older",
                "score": null,
                "scored_by": null,
                "rank": 14210,
                "popularity": 19769,
                "members": 259,
                "favorites": 2,
                "synopsis": "Unreleased scenes from the movie included in the BD/DVD release: \"Intermission: Kurobee's Blacksmith Workshop\" and \"Intermission: Gabiru and Wyvern\".\n\n(Source: Official Website)",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 59095,
                "url": "https://myanimelist.net/anime/59095/Tensei_shitara_Dainana_Ouji_Datta_node_Kimama_ni_Majutsu_wo_Kiwamemasu_2nd_Season",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1466/143624.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1466/143624t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1466/143624l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1466/143624.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1466/143624t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1466/143624l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu 2nd Season"
                    },
                    {
                        "type": "Synonym",
                        "title": "I Was Reincarnated as the 7th Prince"
                    },
                    {
                        "type": "Synonym",
                        "title": "so I Will Perfect My Magic as I Please 2nd Season"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したら第七王子だったので、気ままに魔術を極めます 第2期"
                    },
                    {
                        "type": "English",
                        "title": "I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability Season 2"
                    }
                ],
                "title": "Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu 2nd Season",
                "title_english": "I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability Season 2",
                "title_japanese": "転生したら第七王子だったので、気ままに魔術を極めます 第2期",
                "title_synonyms": [
                    "I Was Reincarnated as the 7th Prince",
                    "so I Will Perfect My Magic as I Please 2nd Season"
                ],
                "type": "TV",
                "source": "Light novel",
                "episodes": null,
                "status": "Not yet aired",
                "airing": false,
                "aired": {
                    "from": null,
                    "to": null,
                    "prop": {
                        "from": {
                            "day": null,
                            "month": null,
                            "year": null
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Not available"
                },
                "duration": "Unknown",
                "rating": "PG-13 - Teens 13 or older",
                "score": null,
                "scored_by": null,
                "rank": null,
                "popularity": 4938,
                "members": 20609,
                "favorites": 35,
                "synopsis": "Second season of Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": "Unknown"
                },
                "producers": [],
                "licensors": [],
                "studios": [],
                "genres": [
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 49891,
                "url": "https://myanimelist.net/anime/49891/Tensei_shitara_Ken_deshita",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1191/127909.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1191/127909t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1191/127909l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1191/127909.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1191/127909t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1191/127909l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "TDN4Rh7VvkU",
                    "url": "https://www.youtube.com/watch?v=TDN4Rh7VvkU",
                    "embed_url": "https://www.youtube.com/embed/TDN4Rh7VvkU?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/TDN4Rh7VvkU/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/TDN4Rh7VvkU/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/TDN4Rh7VvkU/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/TDN4Rh7VvkU/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/TDN4Rh7VvkU/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Ken deshita"
                    },
                    {
                        "type": "Synonym",
                        "title": "I became the sword by transmigrating"
                    },
                    {
                        "type": "Synonym",
                        "title": "TenKen"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したら剣でした"
                    },
                    {
                        "type": "English",
                        "title": "Reincarnated as a Sword"
                    }
                ],
                "title": "Tensei shitara Ken deshita",
                "title_english": "Reincarnated as a Sword",
                "title_japanese": "転生したら剣でした",
                "title_synonyms": [
                    "I became the sword by transmigrating",
                    "TenKen"
                ],
                "type": "TV",
                "source": "Light novel",
                "episodes": 12,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2022-10-05T00:00:00+00:00",
                    "to": "2022-12-21T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 5,
                            "month": 10,
                            "year": 2022
                        },
                        "to": {
                            "day": 21,
                            "month": 12,
                            "year": 2022
                        }
                    },
                    "string": "Oct 5, 2022 to Dec 21, 2022"
                },
                "duration": "23 min per ep",
                "rating": "PG-13 - Teens 13 or older",
                "score": 7.52,
                "scored_by": 140407,
                "rank": 1792,
                "popularity": 879,
                "members": 290052,
                "favorites": 1725,
                "synopsis": "A nameless sword wakes up to discover he has been reincarnated from his former life as a human. With his power of telekinesis, he moves around this new world, acquiring several skills and abilities. When the sword comes upon a forest filled with monsters, he meets a young girl fleeing from a beast. Grabbing the sword, the girl easily defeats the monster. After introducing herself as Fran, she names the sword \"Shishou\" and officially becomes his wielder.\n\nThe two set out to become adventurers, but unfortunately for Fran, she is a member of the Black Cat Tribe—a Beastkin group with a bad reputation. No member of this tribe has ever evolved into a mightier beast, but Fran plans to be the first and achieve her parents' dream. As Shishou promises to remain her sword until she attains her goal, they form an unstoppable partnership of impressive strength.\n\n[Written by MAL Rewrite]",
                "background": "",
                "season": "fall",
                "year": 2022,
                "broadcast": {
                    "day": "Wednesdays",
                    "time": "23:00",
                    "timezone": "Asia/Tokyo",
                    "string": "Wednesdays at 23:00 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 282,
                        "type": "anime",
                        "name": "Gentosha Comics",
                        "url": "https://myanimelist.net/anime/producer/282/Gentosha_Comics"
                    },
                    {
                        "mal_id": 513,
                        "type": "anime",
                        "name": "Nikkatsu",
                        "url": "https://myanimelist.net/anime/producer/513/Nikkatsu"
                    },
                    {
                        "mal_id": 1113,
                        "type": "anime",
                        "name": "NBCUniversal Entertainment Japan",
                        "url": "https://myanimelist.net/anime/producer/1113/NBCUniversal_Entertainment_Japan"
                    },
                    {
                        "mal_id": 1501,
                        "type": "anime",
                        "name": "JR East Marketing & Communications",
                        "url": "https://myanimelist.net/anime/producer/1501/JR_East_Marketing___Communications"
                    },
                    {
                        "mal_id": 1896,
                        "type": "anime",
                        "name": "Micro Magazine Publishing",
                        "url": "https://myanimelist.net/anime/producer/1896/Micro_Magazine_Publishing"
                    },
                    {
                        "mal_id": 2185,
                        "type": "anime",
                        "name": "BS Asahi",
                        "url": "https://myanimelist.net/anime/producer/2185/BS_Asahi"
                    },
                    {
                        "mal_id": 2289,
                        "type": "anime",
                        "name": "GREE Entertainment",
                        "url": "https://myanimelist.net/anime/producer/2289/GREE_Entertainment"
                    },
                    {
                        "mal_id": 2440,
                        "type": "anime",
                        "name": "Micro House",
                        "url": "https://myanimelist.net/anime/producer/2440/Micro_House"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 376,
                        "type": "anime",
                        "name": "Sentai Filmworks",
                        "url": "https://myanimelist.net/anime/producer/376/Sentai_Filmworks"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 605,
                        "type": "anime",
                        "name": "C2C",
                        "url": "https://myanimelist.net/anime/producer/605/C2C"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 53913,
                "url": "https://myanimelist.net/anime/53913/Tensei_shitara_Ken_deshita_2",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1710/131965.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1710/131965t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1710/131965l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1710/131965.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1710/131965t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1710/131965l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "w7tkCb7eH3g",
                    "url": "https://www.youtube.com/watch?v=w7tkCb7eH3g",
                    "embed_url": "https://www.youtube.com/embed/w7tkCb7eH3g?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/w7tkCb7eH3g/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/w7tkCb7eH3g/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/w7tkCb7eH3g/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/w7tkCb7eH3g/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/w7tkCb7eH3g/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Ken deshita 2"
                    },
                    {
                        "type": "Synonym",
                        "title": "I became the sword by transmigrating 2nd Season"
                    },
                    {
                        "type": "Synonym",
                        "title": "TenKen 2"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したら剣でした2"
                    },
                    {
                        "type": "English",
                        "title": "Reincarnated as a Sword Season 2"
                    }
                ],
                "title": "Tensei shitara Ken deshita 2",
                "title_english": "Reincarnated as a Sword Season 2",
                "title_japanese": "転生したら剣でした2",
                "title_synonyms": [
                    "I became the sword by transmigrating 2nd Season",
                    "TenKen 2"
                ],
                "type": "TV",
                "source": "Light novel",
                "episodes": null,
                "status": "Not yet aired",
                "airing": false,
                "aired": {
                    "from": null,
                    "to": null,
                    "prop": {
                        "from": {
                            "day": null,
                            "month": null,
                            "year": null
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Not available"
                },
                "duration": "Unknown",
                "rating": "PG-13 - Teens 13 or older",
                "score": null,
                "scored_by": null,
                "rank": null,
                "popularity": 2809,
                "members": 64531,
                "favorites": 376,
                "synopsis": "Second season of Tensei shitara Ken deshita.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": "Unknown"
                },
                "producers": [
                    {
                        "mal_id": 282,
                        "type": "anime",
                        "name": "Gentosha Comics",
                        "url": "https://myanimelist.net/anime/producer/282/Gentosha_Comics"
                    },
                    {
                        "mal_id": 1113,
                        "type": "anime",
                        "name": "NBCUniversal Entertainment Japan",
                        "url": "https://myanimelist.net/anime/producer/1113/NBCUniversal_Entertainment_Japan"
                    },
                    {
                        "mal_id": 1896,
                        "type": "anime",
                        "name": "Micro Magazine Publishing",
                        "url": "https://myanimelist.net/anime/producer/1896/Micro_Magazine_Publishing"
                    }
                ],
                "licensors": [],
                "studios": [],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 53516,
                "url": "https://myanimelist.net/anime/53516/Tensei_shitara_Dainana_Ouji_Datta_node_Kimama_ni_Majutsu_wo_Kiwamemasu",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1580/141243.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1580/141243t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1580/141243l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1580/141243.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1580/141243t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1580/141243l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "aK8Gtxw-9bE",
                    "url": "https://www.youtube.com/watch?v=aK8Gtxw-9bE",
                    "embed_url": "https://www.youtube.com/embed/aK8Gtxw-9bE?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/aK8Gtxw-9bE/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/aK8Gtxw-9bE/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/aK8Gtxw-9bE/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/aK8Gtxw-9bE/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/aK8Gtxw-9bE/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu"
                    },
                    {
                        "type": "Synonym",
                        "title": "I Was Reincarnated as the 7th Prince"
                    },
                    {
                        "type": "Synonym",
                        "title": "so I Will Perfect My Magic as I Please"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したら第七王子だったので、気ままに魔術を極めます"
                    },
                    {
                        "type": "English",
                        "title": "I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability"
                    }
                ],
                "title": "Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu",
                "title_english": "I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability",
                "title_japanese": "転生したら第七王子だったので、気ままに魔術を極めます",
                "title_synonyms": [
                    "I Was Reincarnated as the 7th Prince",
                    "so I Will Perfect My Magic as I Please"
                ],
                "type": "TV",
                "source": "Light novel",
                "episodes": 12,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2024-04-02T00:00:00+00:00",
                    "to": "2024-06-18T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 2,
                            "month": 4,
                            "year": 2024
                        },
                        "to": {
                            "day": 18,
                            "month": 6,
                            "year": 2024
                        }
                    },
                    "string": "Apr 2, 2024 to Jun 18, 2024"
                },
                "duration": "23 min per ep",
                "rating": "PG-13 - Teens 13 or older",
                "score": 7.47,
                "scored_by": 86728,
                "rank": 2001,
                "popularity": 1385,
                "members": 176532,
                "favorites": 893,
                "synopsis": "In his past life, Prince Lloyd de Saloum was a commoner who could not become adept at magic, no matter how knowledgeable or obsessed he was about it. Now reincarnated into his current royal lineage, he receives a body with seemingly endless mana, making his desire to master all things arcane attainable. Moreover, as the seventh prince of the kingdom, Lloyd has no claim to the throne, allowing him to nurture his abilities as freely as he wants.\n\nUnfortunately for Lloyd, ancient seals that imprison powerful demons begin to break down and release the horrors within, endangering the peace. With these monstrosities roaming around, Lloyd's overwhelming magical prowess is the ultimate weapon that can neutralize these threats before all things descend to chaos.\n\n[Written by MAL Rewrite]",
                "background": "",
                "season": "spring",
                "year": 2024,
                "broadcast": {
                    "day": "Tuesdays",
                    "time": "00:00",
                    "timezone": "Asia/Tokyo",
                    "string": "Tuesdays at 00:00 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 16,
                        "type": "anime",
                        "name": "TV Tokyo",
                        "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                    },
                    {
                        "mal_id": 104,
                        "type": "anime",
                        "name": "Lantis",
                        "url": "https://myanimelist.net/anime/producer/104/Lantis"
                    },
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1041,
                        "type": "anime",
                        "name": "Ai Addiction",
                        "url": "https://myanimelist.net/anime/producer/1041/Ai_Addiction"
                    },
                    {
                        "mal_id": 1468,
                        "type": "anime",
                        "name": "Crunchyroll",
                        "url": "https://myanimelist.net/anime/producer/1468/Crunchyroll"
                    },
                    {
                        "mal_id": 2232,
                        "type": "anime",
                        "name": "ADK Marketing Solutions",
                        "url": "https://myanimelist.net/anime/producer/2232/ADK_Marketing_Solutions"
                    },
                    {
                        "mal_id": 2424,
                        "type": "anime",
                        "name": "Bandai Namco Filmworks",
                        "url": "https://myanimelist.net/anime/producer/2424/Bandai_Namco_Filmworks"
                    },
                    {
                        "mal_id": 2425,
                        "type": "anime",
                        "name": "Bandai Namco Music Live",
                        "url": "https://myanimelist.net/anime/producer/2425/Bandai_Namco_Music_Live"
                    }
                ],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 2212,
                        "type": "anime",
                        "name": "Tsumugi Akita Animation Lab",
                        "url": "https://myanimelist.net/anime/producer/2212/Tsumugi_Akita_Animation_Lab"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 56733,
                "url": "https://myanimelist.net/anime/56733/Magical★Explorer",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1062/138681.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1062/138681t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1062/138681l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1062/138681.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1062/138681t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1062/138681l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Magical★Explorer"
                    },
                    {
                        "type": "Synonym",
                        "title": "Magical Explorer: Reincarnated as an Eroge Hero's Friend"
                    },
                    {
                        "type": "Synonym",
                        "title": "I'll Live Freely With My Eroge Knowledge."
                    },
                    {
                        "type": "Japanese",
                        "title": "マジカル★エクスプロ"
                    },
                    {
                        "type": "English",
                        "title": "Magical Explorer: Reborn as a Side Character in a Fantasy Dating Sim"
                    }
                ],
                "title": "Magical★Explorer",
                "title_english": "Magical Explorer: Reborn as a Side Character in a Fantasy Dating Sim",
                "title_japanese": "マジカル★エクスプロ",
                "title_synonyms": [
                    "Magical Explorer: Reincarnated as an Eroge Hero's Friend",
                    "I'll Live Freely With My Eroge Knowledge."
                ],
                "type": null,
                "source": "Light novel",
                "episodes": null,
                "status": "Not yet aired",
                "airing": false,
                "aired": {
                    "from": null,
                    "to": null,
                    "prop": {
                        "from": {
                            "day": null,
                            "month": null,
                            "year": null
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Not available"
                },
                "duration": "Unknown",
                "rating": null,
                "score": null,
                "scored_by": null,
                "rank": null,
                "popularity": 11474,
                "members": 2077,
                "favorites": 8,
                "synopsis": "Reincarnated as a character in the legendary erotic game, “Magical Explorer,” it doesn’t take long for our hero to discover that he’s been designated the unlucky side-character rather than the game’s lady-killer protagonist. Not to worry, though! Armed with his vast knowledge of the game (and a few cheats) he’ll do whatever it takes to win the hearts of the game’s heroines and emerge as the most accomplished student at the Sorcerer's Academy!\n\n(Source: Yen Press)",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [],
                "studios": [],
                "genres": [
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 9,
                        "type": "anime",
                        "name": "Ecchi",
                        "url": "https://myanimelist.net/anime/genre/9/Ecchi"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 35,
                        "type": "anime",
                        "name": "Harem",
                        "url": "https://myanimelist.net/anime/genre/35/Harem"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 58395,
                "url": "https://myanimelist.net/anime/58395/Neko_ni_Tensei_shita_Ojisan",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1659/144170.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1659/144170t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1659/144170l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1659/144170.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1659/144170t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1659/144170l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "cNBdqkjdRuY",
                    "url": "https://www.youtube.com/watch?v=cNBdqkjdRuY",
                    "embed_url": "https://www.youtube.com/embed/cNBdqkjdRuY?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/cNBdqkjdRuY/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/cNBdqkjdRuY/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/cNBdqkjdRuY/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/cNBdqkjdRuY/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/cNBdqkjdRuY/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Neko ni Tensei shita Ojisan"
                    },
                    {
                        "type": "Synonym",
                        "title": "The Old Man Who Was Reincarnated as a Cat"
                    },
                    {
                        "type": "Japanese",
                        "title": "ねこに転生したおじさん"
                    }
                ],
                "title": "Neko ni Tensei shita Ojisan",
                "title_english": null,
                "title_japanese": "ねこに転生したおじさん",
                "title_synonyms": [
                    "The Old Man Who Was Reincarnated as a Cat"
                ],
                "type": "TV",
                "source": "Web manga",
                "episodes": null,
                "status": "Not yet aired",
                "airing": false,
                "aired": {
                    "from": "2024-10-07T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 7,
                            "month": 10,
                            "year": 2024
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Oct 7, 2024 to ?"
                },
                "duration": "Unknown",
                "rating": null,
                "score": null,
                "scored_by": null,
                "rank": null,
                "popularity": 14438,
                "members": 849,
                "favorites": 2,
                "synopsis": "The story follows an ordinary old man who one day suddenly is reincarnated as a cute cat, and the president of the company he works for picks him up.\n\n(Source: ANN)",
                "background": "",
                "season": "fall",
                "year": 2024,
                "broadcast": {
                    "day": "Mondays",
                    "time": "13:00",
                    "timezone": "Asia/Tokyo",
                    "string": "Mondays at 13:00 (JST)"
                },
                "producers": [],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 2911,
                        "type": "anime",
                        "name": "Studio Eight Color",
                        "url": "https://myanimelist.net/anime/producer/2911/Studio_Eight_Color"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 71,
                        "type": "anime",
                        "name": "Pets",
                        "url": "https://myanimelist.net/anime/genre/71/Pets"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 39535,
                "url": "https://myanimelist.net/anime/39535/Mushoku_Tensei__Isekai_Ittara_Honki_Dasu",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1530/117776.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1530/117776t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1530/117776l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1530/117776.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1530/117776t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1530/117776l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "Qx01pn9l-6g",
                    "url": "https://www.youtube.com/watch?v=Qx01pn9l-6g",
                    "embed_url": "https://www.youtube.com/embed/Qx01pn9l-6g?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/Qx01pn9l-6g/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/Qx01pn9l-6g/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/Qx01pn9l-6g/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/Qx01pn9l-6g/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/Qx01pn9l-6g/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Mushoku Tensei: Isekai Ittara Honki Dasu"
                    },
                    {
                        "type": "Synonym",
                        "title": "Jobless Reincarnation: I Will Seriously Try If I Go To Another World"
                    },
                    {
                        "type": "Japanese",
                        "title": "無職転生 ～異世界行ったら本気だす～"
                    },
                    {
                        "type": "English",
                        "title": "Mushoku Tensei: Jobless Reincarnation"
                    },
                    {
                        "type": "German",
                        "title": "Mushoku Tensei: Jobless Reincarnation"
                    },
                    {
                        "type": "French",
                        "title": "Mushoku Tensei: Jobless Reincarnation"
                    }
                ],
                "title": "Mushoku Tensei: Isekai Ittara Honki Dasu",
                "title_english": "Mushoku Tensei: Jobless Reincarnation",
                "title_japanese": "無職転生 ～異世界行ったら本気だす～",
                "title_synonyms": [
                    "Jobless Reincarnation: I Will Seriously Try If I Go To Another World"
                ],
                "type": "TV",
                "source": "Light novel",
                "episodes": 11,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2021-01-11T00:00:00+00:00",
                    "to": "2021-03-22T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 11,
                            "month": 1,
                            "year": 2021
                        },
                        "to": {
                            "day": 22,
                            "month": 3,
                            "year": 2021
                        }
                    },
                    "string": "Jan 11, 2021 to Mar 22, 2021"
                },
                "duration": "23 min per ep",
                "rating": "R - 17+ (violence & profanity)",
                "score": 8.36,
                "scored_by": 852585,
                "rank": 218,
                "popularity": 96,
                "members": 1385358,
                "favorites": 35445,
                "synopsis": "Despite being bullied, scorned, and oppressed all of his life, a 34-year-old shut-in still found the resolve to attempt something heroic—only for it to end in a tragic accident. But in a twist of fate, he awakens in another world as Rudeus Greyrat, starting life again as a baby born to two loving parents.\n\nPreserving his memories and knowledge from his previous life, Rudeus quickly adapts to his new environment. With the mind of a grown adult, he starts to display magical talent that exceeds all expectations, honing his skill with the help of a mage named Roxy Migurdia. Rudeus learns swordplay from his father, Paul, and meets Sylphiette, a girl his age who quickly becomes his closest friend.\n\nAs Rudeus' second chance at life begins, he tries to make the most of his new opportunity while conquering his traumatic past. And perhaps, one day, he may find the one thing he could not find in his old world—love.\n\n[Written by MAL Rewrite]",
                "background": "Mushoku Tensei: Isekai Ittara Honki Dasu adapts chapters 1-26 of Yuka Fujikawa's manga series and volumes 1-3 of Rifujin na Magonote's light novel series of the same title.",
                "season": "winter",
                "year": 2021,
                "broadcast": {
                    "day": "Mondays",
                    "time": "00:00",
                    "timezone": "Asia/Tokyo",
                    "string": "Mondays at 00:00 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 61,
                        "type": "anime",
                        "name": "Frontier Works",
                        "url": "https://myanimelist.net/anime/producer/61/Frontier_Works"
                    },
                    {
                        "mal_id": 245,
                        "type": "anime",
                        "name": "TOHO",
                        "url": "https://myanimelist.net/anime/producer/245/TOHO"
                    },
                    {
                        "mal_id": 1143,
                        "type": "anime",
                        "name": "TOHO animation",
                        "url": "https://myanimelist.net/anime/producer/1143/TOHO_animation"
                    },
                    {
                        "mal_id": 1333,
                        "type": "anime",
                        "name": "Hakuhodo DY Music & Pictures",
                        "url": "https://myanimelist.net/anime/producer/1333/Hakuhodo_DY_Music___Pictures"
                    },
                    {
                        "mal_id": 1416,
                        "type": "anime",
                        "name": "BS11",
                        "url": "https://myanimelist.net/anime/producer/1416/BS11"
                    },
                    {
                        "mal_id": 1444,
                        "type": "anime",
                        "name": "Egg Firm",
                        "url": "https://myanimelist.net/anime/producer/1444/Egg_Firm"
                    },
                    {
                        "mal_id": 1696,
                        "type": "anime",
                        "name": "Kadokawa",
                        "url": "https://myanimelist.net/anime/producer/1696/Kadokawa"
                    },
                    {
                        "mal_id": 1815,
                        "type": "anime",
                        "name": "GREE",
                        "url": "https://myanimelist.net/anime/producer/1815/GREE"
                    },
                    {
                        "mal_id": 2229,
                        "type": "anime",
                        "name": "Toho Music",
                        "url": "https://myanimelist.net/anime/producer/2229/Toho_Music"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 102,
                        "type": "anime",
                        "name": "Funimation",
                        "url": "https://myanimelist.net/anime/producer/102/Funimation"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 1993,
                        "type": "anime",
                        "name": "Studio Bind",
                        "url": "https://myanimelist.net/anime/producer/1993/Studio_Bind"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    },
                    {
                        "mal_id": 9,
                        "type": "anime",
                        "name": "Ecchi",
                        "url": "https://myanimelist.net/anime/genre/9/Ecchi"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 51179,
                "url": "https://myanimelist.net/anime/51179/Mushoku_Tensei_II__Isekai_Ittara_Honki_Dasu",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1898/138005.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1898/138005t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1898/138005l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1898/138005.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1898/138005t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1898/138005l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "keti2rbgI6c",
                    "url": "https://www.youtube.com/watch?v=keti2rbgI6c",
                    "embed_url": "https://www.youtube.com/embed/keti2rbgI6c?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/keti2rbgI6c/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/keti2rbgI6c/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/keti2rbgI6c/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/keti2rbgI6c/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/keti2rbgI6c/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Mushoku Tensei II: Isekai Ittara Honki Dasu"
                    },
                    {
                        "type": "Synonym",
                        "title": "Jobless Reincarnation: I Will Seriously Try If I Go To Another World"
                    },
                    {
                        "type": "Synonym",
                        "title": "Mushoku Tensei: Isekai Ittara Honki Dasu 2nd Season"
                    },
                    {
                        "type": "Japanese",
                        "title": "無職転生 II ～異世界行ったら本気だす～"
                    },
                    {
                        "type": "English",
                        "title": "Mushoku Tensei: Jobless Reincarnation Season 2"
                    }
                ],
                "title": "Mushoku Tensei II: Isekai Ittara Honki Dasu",
                "title_english": "Mushoku Tensei: Jobless Reincarnation Season 2",
                "title_japanese": "無職転生 II ～異世界行ったら本気だす～",
                "title_synonyms": [
                    "Jobless Reincarnation: I Will Seriously Try If I Go To Another World",
                    "Mushoku Tensei: Isekai Ittara Honki Dasu 2nd Season"
                ],
                "type": "TV",
                "source": "Light novel",
                "episodes": 12,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2023-07-10T00:00:00+00:00",
                    "to": "2023-09-25T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 10,
                            "month": 7,
                            "year": 2023
                        },
                        "to": {
                            "day": 25,
                            "month": 9,
                            "year": 2023
                        }
                    },
                    "string": "Jul 10, 2023 to Sep 25, 2023"
                },
                "duration": "23 min per ep",
                "rating": "R - 17+ (violence & profanity)",
                "score": 8.24,
                "scored_by": 338405,
                "rank": 328,
                "popularity": 369,
                "members": 609055,
                "favorites": 7181,
                "synopsis": "After his relationship with Eris Boreas Greyrat reaches new heights, Rudeus Greyrat is ecstatic. Unfortunately, his joy is short-lived, as Eris suddenly abandons him to embark on her own journey. Believing that Eris has lost all interest in him, a heartbroken and depressed Rudeus sets forth to the Northern Territories. With his sole goal being to locate his mother on the vast continent, Rudeus wonders if persisting through daily life is worth the pain, falling into a robotic routine as he endlessly ruminates on his lost love.\n\nHowever, the dangers of the North soon prove that one cannot survive with a dulled mind. While on a quest with the party Counter Arrow, with whom he recently became acquainted, Rudeus has a brush with death—an experience that forces him to finally snap out of his despair. With his newfound teammates, Rudeus rediscovers the pleasure of daily adventuring and moves forward with his original goal of living his second lease on life to the fullest.\n\n[Written by MAL Rewrite]",
                "background": "Mushoku Tensei II: Isekai Ittara Honki Dasu was released on Blu-ray in two volumes from October 18, 2023, to December 20, 2023.",
                "season": "summer",
                "year": 2023,
                "broadcast": {
                    "day": "Mondays",
                    "time": "00:00",
                    "timezone": "Asia/Tokyo",
                    "string": "Mondays at 00:00 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 61,
                        "type": "anime",
                        "name": "Frontier Works",
                        "url": "https://myanimelist.net/anime/producer/61/Frontier_Works"
                    },
                    {
                        "mal_id": 245,
                        "type": "anime",
                        "name": "TOHO",
                        "url": "https://myanimelist.net/anime/producer/245/TOHO"
                    },
                    {
                        "mal_id": 1143,
                        "type": "anime",
                        "name": "TOHO animation",
                        "url": "https://myanimelist.net/anime/producer/1143/TOHO_animation"
                    },
                    {
                        "mal_id": 1333,
                        "type": "anime",
                        "name": "Hakuhodo DY Music & Pictures",
                        "url": "https://myanimelist.net/anime/producer/1333/Hakuhodo_DY_Music___Pictures"
                    },
                    {
                        "mal_id": 1416,
                        "type": "anime",
                        "name": "BS11",
                        "url": "https://myanimelist.net/anime/producer/1416/BS11"
                    },
                    {
                        "mal_id": 1444,
                        "type": "anime",
                        "name": "Egg Firm",
                        "url": "https://myanimelist.net/anime/producer/1444/Egg_Firm"
                    },
                    {
                        "mal_id": 1696,
                        "type": "anime",
                        "name": "Kadokawa",
                        "url": "https://myanimelist.net/anime/producer/1696/Kadokawa"
                    },
                    {
                        "mal_id": 2289,
                        "type": "anime",
                        "name": "GREE Entertainment",
                        "url": "https://myanimelist.net/anime/producer/2289/GREE_Entertainment"
                    }
                ],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 1993,
                        "type": "anime",
                        "name": "Studio Bind",
                        "url": "https://myanimelist.net/anime/producer/1993/Studio_Bind"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    },
                    {
                        "mal_id": 9,
                        "type": "anime",
                        "name": "Ecchi",
                        "url": "https://myanimelist.net/anime/genre/9/Ecchi"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 50360,
                "url": "https://myanimelist.net/anime/50360/Mushoku_Tensei__Isekai_Ittara_Honki_Dasu_-_Eris_no_Goblin_Toubatsu",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1094/120148.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1094/120148t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1094/120148l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1094/120148.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1094/120148t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1094/120148l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "D_u6BZYp93U",
                    "url": "https://www.youtube.com/watch?v=D_u6BZYp93U",
                    "embed_url": "https://www.youtube.com/embed/D_u6BZYp93U?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/D_u6BZYp93U/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/D_u6BZYp93U/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/D_u6BZYp93U/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/D_u6BZYp93U/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/D_u6BZYp93U/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Mushoku Tensei: Isekai Ittara Honki Dasu - Eris no Goblin Toubatsu"
                    },
                    {
                        "type": "Synonym",
                        "title": "Mushoku Tensei: Jobless Reincarnation Special"
                    },
                    {
                        "type": "Synonym",
                        "title": "Mushoku Tensei: Isekai Ittara Honki Dasu Special"
                    },
                    {
                        "type": "Japanese",
                        "title": "無職転生 ～異世界行ったら本気だす～ エリスのゴブリン討伐"
                    },
                    {
                        "type": "English",
                        "title": "Mushoku Tensei: Jobless Reincarnation - Eris the Goblin Slayer"
                    }
                ],
                "title": "Mushoku Tensei: Isekai Ittara Honki Dasu - Eris no Goblin Toubatsu",
                "title_english": "Mushoku Tensei: Jobless Reincarnation - Eris the Goblin Slayer",
                "title_japanese": "無職転生 ～異世界行ったら本気だす～ エリスのゴブリン討伐",
                "title_synonyms": [
                    "Mushoku Tensei: Jobless Reincarnation Special",
                    "Mushoku Tensei: Isekai Ittara Honki Dasu Special"
                ],
                "type": "Special",
                "source": "Light novel",
                "episodes": 1,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2022-03-16T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 16,
                            "month": 3,
                            "year": 2022
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Mar 16, 2022"
                },
                "duration": "23 min",
                "rating": "R - 17+ (violence & profanity)",
                "score": 7.81,
                "scored_by": 101446,
                "rank": 979,
                "popularity": 1319,
                "members": 187437,
                "favorites": 600,
                "synopsis": "During their stay in the capital of Milishion, the adventurers of Dead End decide to split up for a day to run their errands. While Rudeus Greyrat has his plans derailed by a troublesome scene, the party's swordswoman, Eris Boreas Greyrat, finds herself with nothing to do. Deciding to embark on an adventure to slay goblins, Eris crosses paths with a cocky but talented mage named Cliff Grimoire. Though Eris refuses his company, Cliff stubbornly ignores her wishes and dares her to explore the perilous forest surrounding the city. Accepting his challenge, Eris ventures into the forest with the mage, where the two encounter something far more repulsive than mere goblins.\n\n[Written by MAL Rewrite]",
                "background": "Mushoku Tensei: Isekai Ittara Honki Dasu - Eris no Goblin Toubatsu is an unaired episode bundled with the fourth Mushoku Tensei: Isekai Ittara Honki Dasu Blu-ray volume.",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [
                    {
                        "mal_id": 61,
                        "type": "anime",
                        "name": "Frontier Works",
                        "url": "https://myanimelist.net/anime/producer/61/Frontier_Works"
                    },
                    {
                        "mal_id": 1143,
                        "type": "anime",
                        "name": "TOHO animation",
                        "url": "https://myanimelist.net/anime/producer/1143/TOHO_animation"
                    },
                    {
                        "mal_id": 1333,
                        "type": "anime",
                        "name": "Hakuhodo DY Music & Pictures",
                        "url": "https://myanimelist.net/anime/producer/1333/Hakuhodo_DY_Music___Pictures"
                    },
                    {
                        "mal_id": 1416,
                        "type": "anime",
                        "name": "BS11",
                        "url": "https://myanimelist.net/anime/producer/1416/BS11"
                    },
                    {
                        "mal_id": 1444,
                        "type": "anime",
                        "name": "Egg Firm",
                        "url": "https://myanimelist.net/anime/producer/1444/Egg_Firm"
                    },
                    {
                        "mal_id": 1696,
                        "type": "anime",
                        "name": "Kadokawa",
                        "url": "https://myanimelist.net/anime/producer/1696/Kadokawa"
                    },
                    {
                        "mal_id": 2289,
                        "type": "anime",
                        "name": "GREE Entertainment",
                        "url": "https://myanimelist.net/anime/producer/2289/GREE_Entertainment"
                    }
                ],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 1993,
                        "type": "anime",
                        "name": "Studio Bind",
                        "url": "https://myanimelist.net/anime/producer/1993/Studio_Bind"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 55888,
                "url": "https://myanimelist.net/anime/55888/Mushoku_Tensei_II__Isekai_Ittara_Honki_Dasu_Part_2",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1876/141251.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1876/141251t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1876/141251l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1876/141251.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1876/141251t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1876/141251l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "L5broLUI1m4",
                    "url": "https://www.youtube.com/watch?v=L5broLUI1m4",
                    "embed_url": "https://www.youtube.com/embed/L5broLUI1m4?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/L5broLUI1m4/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/L5broLUI1m4/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/L5broLUI1m4/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/L5broLUI1m4/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/L5broLUI1m4/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2"
                    },
                    {
                        "type": "Synonym",
                        "title": "Jobless Reincarnation: I Will Seriously Try If I Go To Another World"
                    },
                    {
                        "type": "Synonym",
                        "title": "Mushoku Tensei: Isekai Ittara Honki Dasu 2nd Season Part 2"
                    },
                    {
                        "type": "Japanese",
                        "title": "無職転生 II ～異世界行ったら本気だす～ (第2クール)"
                    },
                    {
                        "type": "English",
                        "title": "Mushoku Tensei: Jobless Reincarnation Season 2 Part 2"
                    }
                ],
                "title": "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2",
                "title_english": "Mushoku Tensei: Jobless Reincarnation Season 2 Part 2",
                "title_japanese": "無職転生 II ～異世界行ったら本気だす～ (第2クール)",
                "title_synonyms": [
                    "Jobless Reincarnation: I Will Seriously Try If I Go To Another World",
                    "Mushoku Tensei: Isekai Ittara Honki Dasu 2nd Season Part 2"
                ],
                "type": "TV",
                "source": "Light novel",
                "episodes": 12,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2024-04-08T00:00:00+00:00",
                    "to": "2024-07-01T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 8,
                            "month": 4,
                            "year": 2024
                        },
                        "to": {
                            "day": 1,
                            "month": 7,
                            "year": 2024
                        }
                    },
                    "string": "Apr 8, 2024 to Jul 1, 2024"
                },
                "duration": "23 min per ep",
                "rating": "R - 17+ (violence & profanity)",
                "score": 8.46,
                "scored_by": 206032,
                "rank": 154,
                "popularity": 577,
                "members": 410135,
                "favorites": 3488,
                "synopsis": "Following the faceless god Hitogami's advice seems to have worked wonders for Rudeus Greyrat. After enrolling into the University of Magic as he was told, Rudeus reunites with his childhood friend Sylphiette, who put a valiant effort into curing his condition. The two grow ever closer together and decide to host a wedding party, inviting the friends they have made over the years to announce and formalize their relationship.\n\nFor all his recent blessings, however, Rudeus' troubles are far from over. The research he is helping Shizuka Nanahoshi conduct hits a bottleneck, sending her into a deep slump much like he experienced in his previous life. Furthermore, a letter from his father, Paul, brings complications to Rudeus' relationships, and Sylphiette still knows next to nothing about his real background. In the face of these issues, Rudeus will have to apply the lessons he has learned in this new world to navigate through the challenges that come with living a life to its fullest.\n\n[Written by MAL Rewrite]",
                "background": "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2 was released on Blu-ray in two volumes from July 17, 2024, to September 18, 2024.",
                "season": "spring",
                "year": 2024,
                "broadcast": {
                    "day": "Mondays",
                    "time": "00:00",
                    "timezone": "Asia/Tokyo",
                    "string": "Mondays at 00:00 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 61,
                        "type": "anime",
                        "name": "Frontier Works",
                        "url": "https://myanimelist.net/anime/producer/61/Frontier_Works"
                    },
                    {
                        "mal_id": 1143,
                        "type": "anime",
                        "name": "TOHO animation",
                        "url": "https://myanimelist.net/anime/producer/1143/TOHO_animation"
                    },
                    {
                        "mal_id": 1333,
                        "type": "anime",
                        "name": "Hakuhodo DY Music & Pictures",
                        "url": "https://myanimelist.net/anime/producer/1333/Hakuhodo_DY_Music___Pictures"
                    },
                    {
                        "mal_id": 1416,
                        "type": "anime",
                        "name": "BS11",
                        "url": "https://myanimelist.net/anime/producer/1416/BS11"
                    },
                    {
                        "mal_id": 1444,
                        "type": "anime",
                        "name": "Egg Firm",
                        "url": "https://myanimelist.net/anime/producer/1444/Egg_Firm"
                    },
                    {
                        "mal_id": 1696,
                        "type": "anime",
                        "name": "Kadokawa",
                        "url": "https://myanimelist.net/anime/producer/1696/Kadokawa"
                    },
                    {
                        "mal_id": 2289,
                        "type": "anime",
                        "name": "GREE Entertainment",
                        "url": "https://myanimelist.net/anime/producer/2289/GREE_Entertainment"
                    }
                ],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 1993,
                        "type": "anime",
                        "name": "Studio Bind",
                        "url": "https://myanimelist.net/anime/producer/1993/Studio_Bind"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    },
                    {
                        "mal_id": 9,
                        "type": "anime",
                        "name": "Ecchi",
                        "url": "https://myanimelist.net/anime/genre/9/Ecchi"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": []
            }
        ],
    
    
        airing: function () {
            return this.data.filter(function (element, index) {
                return element.airing === true
            })
        },
        notAiring:function () {
            return this.data.filter(function (element, index) {
                return element.airing === false
            })
        }, 
    }
    
    console.log(TenseishitaraSlimeDattaKen.notAiring)

    const TenseishitaraSlimeDattaKen = {

        "data": [
            {
                "mal_id": 37430,
                "url": "https://myanimelist.net/anime/37430/Tensei_shitara_Slime_Datta_Ken",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1069/123309.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1069/123309t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1069/123309l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1069/123309.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1069/123309t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1069/123309l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "bkQkyzXEXKE",
                    "url": "https://www.youtube.com/watch?v=bkQkyzXEXKE",
                    "embed_url": "https://www.youtube.com/embed/bkQkyzXEXKE?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/bkQkyzXEXKE/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/bkQkyzXEXKE/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/bkQkyzXEXKE/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/bkQkyzXEXKE/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/bkQkyzXEXKE/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken"
                    },
                    {
                        "type": "Synonym",
                        "title": "TenSura"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime"
                    },
                    {
                        "type": "German",
                        "title": "That Time I Got Reincamrnated as a Slime"
                    },
                    {
                        "type": "Spanish",
                        "title": "That Time I Got Reincarnated as a Slime"
                    },
                    {
                        "type": "French",
                        "title": "That Time I Got Reincarnated as a Slime"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken",
                "title_english": "That Time I Got Reincarnated as a Slime",
                "title_japanese": "転生したらスライムだった件",
                "title_synonyms": [
                    "TenSura"
                ],
                "type": "TV",
                "source": "Manga",
                "episodes": 24,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2018-10-02T00:00:00+00:00",
                    "to": "2019-03-19T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 2,
                            "month": 10,
                            "year": 2018
                        },
                        "to": {
                            "day": 19,
                            "month": 3,
                            "year": 2019
                        }
                    },
                    "string": "Oct 2, 2018 to Mar 19, 2019"
                },
                "duration": "23 min per ep",
                "rating": "PG-13 - Teens 13 or older",
                "score": 8.14,
                "scored_by": 905118,
                "rank": 454,
                "popularity": 82,
                "members": 1495264,
                "favorites": 30895,
                "synopsis": "Thirty-seven-year-old Satoru Mikami is a typical corporate worker, who is perfectly content with his monotonous lifestyle in Tokyo, other than failing to nail down a girlfriend even once throughout his life. In the midst of a casual encounter with his colleague, he falls victim to a random assailant on the streets and is stabbed. However, while succumbing to his injuries, a peculiar voice echoes in his mind, and recites a bunch of commands which the dying man cannot make sense of.\n\nWhen Satoru regains consciousness, he discovers that he has reincarnated as a goop of slime in an unfamiliar realm. In doing so, he acquires newfound skills—notably, the power to devour anything and mimic its appearance and abilities. He then stumbles upon the sealed Catastrophe-level monster \"Storm Dragon\" Veldora who had been sealed away for the past 300 years for devastating a town to ashes. Sympathetic to his predicament, Satoru befriends him, promising to assist in destroying the seal. In return, Veldora bestows upon him the name Rimuru Tempest to grant him divine protection. \n\nNow, liberated from the mundanities of his past life, Rimuru embarks on a fresh journey with a distinct goal in mind. As he grows accustomed to his new physique, his gooey antics ripple throughout the world, gradually altering his fate.\n\n[Written by MAL Rewrite]",
                "background": "",
                "season": "fall",
                "year": 2018,
                "broadcast": {
                    "day": "Tuesdays",
                    "time": "00:00",
                    "timezone": "Asia/Tokyo",
                    "string": "Tuesdays at 00:00 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 104,
                        "type": "anime",
                        "name": "Lantis",
                        "url": "https://myanimelist.net/anime/producer/104/Lantis"
                    },
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1416,
                        "type": "anime",
                        "name": "BS11",
                        "url": "https://myanimelist.net/anime/producer/1416/BS11"
                    },
                    {
                        "mal_id": 1840,
                        "type": "anime",
                        "name": "Bandai Namco Arts",
                        "url": "https://myanimelist.net/anime/producer/1840/Bandai_Namco_Arts"
                    },
                    {
                        "mal_id": 1896,
                        "type": "anime",
                        "name": "Micro Magazine Publishing",
                        "url": "https://myanimelist.net/anime/producer/1896/Micro_Magazine_Publishing"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 102,
                        "type": "anime",
                        "name": "Funimation",
                        "url": "https://myanimelist.net/anime/producer/102/Funimation"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 58592,
                "url": "https://myanimelist.net/anime/58592/Tensei_shitara_Slime_Datta_Ken_3rd_Season__Kanwa_-_Diablo_Nikki",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1092/142426.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1092/142426t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1092/142426l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1092/142426.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1092/142426t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1092/142426l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken 3rd Season: Kanwa - Diablo Nikki"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensei shitara Slime Datta Ken 2nd Season Part 2 Recap"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensei shitara Slime Datta Ken Episode 48.5"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件 閑話: ディアブロ日記"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime Season 3: Digression - Diablo's Journal"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken 3rd Season: Kanwa - Diablo Nikki",
                "title_english": "That Time I Got Reincarnated as a Slime Season 3: Digression - Diablo's Journal",
                "title_japanese": "転生したらスライムだった件 閑話: ディアブロ日記",
                "title_synonyms": [
                    "Tensei shitara Slime Datta Ken 2nd Season Part 2 Recap",
                    "Tensei shitara Slime Datta Ken Episode 48.5"
                ],
                "type": "TV Special",
                "source": "Manga",
                "episodes": 1,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2024-03-31T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 31,
                            "month": 3,
                            "year": 2024
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Mar 31, 2024"
                },
                "duration": "23 min",
                "rating": "PG-13 - Teens 13 or older",
                "score": 6.67,
                "scored_by": 5891,
                "rank": 5860,
                "popularity": 5701,
                "members": 14180,
                "favorites": 42,
                "synopsis": "Recap of Tensei Shitara Slime Datta Ken 2nd Season Part 2.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 39551,
                "url": "https://myanimelist.net/anime/39551/Tensei_shitara_Slime_Datta_Ken_2nd_Season",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1271/109841.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1271/109841t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1271/109841l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1271/109841.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1271/109841t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1271/109841l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "Lk3fJsIOnKw",
                    "url": "https://www.youtube.com/watch?v=Lk3fJsIOnKw",
                    "embed_url": "https://www.youtube.com/embed/Lk3fJsIOnKw?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/Lk3fJsIOnKw/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/Lk3fJsIOnKw/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/Lk3fJsIOnKw/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/Lk3fJsIOnKw/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/Lk3fJsIOnKw/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken 2nd Season"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensura 2"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime Season 2"
                    },
                    {
                        "type": "German",
                        "title": "That Time I Got Reincarnated as a Slime Staffel 2"
                    },
                    {
                        "type": "Spanish",
                        "title": "That Time I Got Reincarnated as a Slime Temporada 2"
                    },
                    {
                        "type": "French",
                        "title": "Moi, quand je me réincarne en Slime Saison 2"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken 2nd Season",
                "title_english": "That Time I Got Reincarnated as a Slime Season 2",
                "title_japanese": "転生したらスライムだった件",
                "title_synonyms": [
                    "Tensura 2"
                ],
                "type": "TV",
                "source": "Manga",
                "episodes": 12,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2021-01-12T00:00:00+00:00",
                    "to": "2021-03-30T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 12,
                            "month": 1,
                            "year": 2021
                        },
                        "to": {
                            "day": 30,
                            "month": 3,
                            "year": 2021
                        }
                    },
                    "string": "Jan 12, 2021 to Mar 30, 2021"
                },
                "duration": "23 min per ep",
                "rating": "PG-13 - Teens 13 or older",
                "score": 8.37,
                "scored_by": 576443,
                "rank": 212,
                "popularity": 162,
                "members": 999733,
                "favorites": 10807,
                "synopsis": "Taking a break from his time as a teacher, the powerful slime Rimuru Tempest returns to his kingdom, eponymously named Tempest, just in time to begin negotiations with a nearby nation—the Kingdom of Eurazania. While the negotiations are anything but peaceful, they do end successfully, allowing Rimuru to return and finish teaching. When trying to again return to Tempest, this time permanently, Rimuru is stopped by a mysterious figure who is somehow able to constrain the many magical abilities he has at his disposal. \n\nIn Tempest, the situation is even worse. A group of unknown humans has invaded the land and are assaulting its citizens, both influential and innocent. They are not just trying to bring harm either—they have the intent to kill. Can Rimuru overcome his powerful and dangerous foe and return to Tempest before it is too late?  \n\n[Written by MAL Rewrite]",
                "background": "",
                "season": "winter",
                "year": 2021,
                "broadcast": {
                    "day": "Tuesdays",
                    "time": "23:00",
                    "timezone": "Asia/Tokyo",
                    "string": "Tuesdays at 23:00 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 102,
                        "type": "anime",
                        "name": "Funimation",
                        "url": "https://myanimelist.net/anime/producer/102/Funimation"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 41487,
                "url": "https://myanimelist.net/anime/41487/Tensei_shitara_Slime_Datta_Ken_2nd_Season_Part_2",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1033/118296.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1033/118296t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1033/118296l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1033/118296.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1033/118296t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1033/118296l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "nle-73CcG1k",
                    "url": "https://www.youtube.com/watch?v=nle-73CcG1k",
                    "embed_url": "https://www.youtube.com/embed/nle-73CcG1k?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/nle-73CcG1k/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/nle-73CcG1k/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/nle-73CcG1k/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/nle-73CcG1k/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/nle-73CcG1k/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken 2nd Season Part 2"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensura 2"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime Season 2 Part 2"
                    },
                    {
                        "type": "German",
                        "title": "Meine Wiedergeburt als Schleim in einer anderen Welt Staffel 2 Teil 2"
                    },
                    {
                        "type": "Spanish",
                        "title": "That Time I Got Reincarnated as a Slime Temporada 2 Parte 2"
                    },
                    {
                        "type": "French",
                        "title": "Moi, Quand Je Me Réincarne en Slime Saison 2 Partie 2"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken 2nd Season Part 2",
                "title_english": "That Time I Got Reincarnated as a Slime Season 2 Part 2",
                "title_japanese": "転生したらスライムだった件",
                "title_synonyms": [
                    "Tensura 2"
                ],
                "type": "TV",
                "source": "Manga",
                "episodes": 12,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2021-07-06T00:00:00+00:00",
                    "to": "2021-09-21T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 6,
                            "month": 7,
                            "year": 2021
                        },
                        "to": {
                            "day": 21,
                            "month": 9,
                            "year": 2021
                        }
                    },
                    "string": "Jul 6, 2021 to Sep 21, 2021"
                },
                "duration": "23 min per ep",
                "rating": "PG-13 - Teens 13 or older",
                "score": 8.32,
                "scored_by": 461148,
                "rank": 253,
                "popularity": 248,
                "members": 803395,
                "favorites": 10938,
                "synopsis": "The nation of Tempest is in a festive mood after successfully overcoming the surprise attack from the Falmuth Army and the Western Holy Church. Beyond the festivities lies a meeting between Tempest and its allies to decide the future of the Nation of Monsters. The aftermath of the Falmuth invasion, Milim Nava's suspicious behavior, and the disappearance of Demon Lord Carrion—the problems seem to keep on piling up.\n\nRimuru Tempest, now awakened as a True Demon Lord, decides to go on the offensive against Clayman. With the fully revived Storm Dragon Veldora, Ultimate Skill Raphael, and other powerful comrades, the ruler of the Tempest is confident in taking down his enemies one by one until he can face the man pulling the strings.\n\n[Written by MAL Rewrite]",
                "background": "",
                "season": "summer",
                "year": 2021,
                "broadcast": {
                    "day": "Tuesdays",
                    "time": "23:00",
                    "timezone": "Asia/Tokyo",
                    "string": "Tuesdays at 23:00 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1416,
                        "type": "anime",
                        "name": "BS11",
                        "url": "https://myanimelist.net/anime/producer/1416/BS11"
                    },
                    {
                        "mal_id": 1840,
                        "type": "anime",
                        "name": "Bandai Namco Arts",
                        "url": "https://myanimelist.net/anime/producer/1840/Bandai_Namco_Arts"
                    },
                    {
                        "mal_id": 1896,
                        "type": "anime",
                        "name": "Micro Magazine Publishing",
                        "url": "https://myanimelist.net/anime/producer/1896/Micro_Magazine_Publishing"
                    },
                    {
                        "mal_id": 1992,
                        "type": "anime",
                        "name": "Bandai Spirits",
                        "url": "https://myanimelist.net/anime/producer/1992/Bandai_Spirits"
                    },
                    {
                        "mal_id": 2106,
                        "type": "anime",
                        "name": "Sony Music Solutions",
                        "url": "https://myanimelist.net/anime/producer/2106/Sony_Music_Solutions"
                    },
                    {
                        "mal_id": 2232,
                        "type": "anime",
                        "name": "ADK Marketing Solutions",
                        "url": "https://myanimelist.net/anime/producer/2232/ADK_Marketing_Solutions"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 1468,
                        "type": "anime",
                        "name": "Crunchyroll",
                        "url": "https://myanimelist.net/anime/producer/1468/Crunchyroll"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 41488,
                "url": "https://myanimelist.net/anime/41488/Tensura_Nikki__Tensei_shitara_Slime_Datta_Ken",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1458/117607.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1458/117607t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1458/117607l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1458/117607.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1458/117607t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1458/117607l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "JyCSGTKcNPA",
                    "url": "https://www.youtube.com/watch?v=JyCSGTKcNPA",
                    "embed_url": "https://www.youtube.com/embed/JyCSGTKcNPA?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/JyCSGTKcNPA/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/JyCSGTKcNPA/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/JyCSGTKcNPA/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/JyCSGTKcNPA/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/JyCSGTKcNPA/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensura Nikki: Tensei shitara Slime Datta Ken"
                    },
                    {
                        "type": "Japanese",
                        "title": "転スラ日記 転生したらスライムだった件"
                    },
                    {
                        "type": "English",
                        "title": "The Slime Diaries"
                    },
                    {
                        "type": "German",
                        "title": "The Slime Diaries"
                    },
                    {
                        "type": "Spanish",
                        "title": "The Slime Diaries"
                    },
                    {
                        "type": "French",
                        "title": "The Slime Diaries"
                    }
                ],
                "title": "Tensura Nikki: Tensei shitara Slime Datta Ken",
                "title_english": "The Slime Diaries",
                "title_japanese": "転スラ日記 転生したらスライムだった件",
                "title_synonyms": [],
                "type": "TV",
                "source": "Manga",
                "episodes": 12,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2021-04-06T00:00:00+00:00",
                    "to": "2021-06-22T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 6,
                            "month": 4,
                            "year": 2021
                        },
                        "to": {
                            "day": 22,
                            "month": 6,
                            "year": 2021
                        }
                    },
                    "string": "Apr 6, 2021 to Jun 22, 2021"
                },
                "duration": "23 min per ep",
                "rating": "PG-13 - Teens 13 or older",
                "score": 7.59,
                "scored_by": 155952,
                "rank": 1565,
                "popularity": 695,
                "members": 350785,
                "favorites": 2088,
                "synopsis": "In between slaying monsters and negotiating with neighboring countries, Rimuru Tempest has his hands full attending to his kingdom alongside day-to-day matters. But whether it's expanding the farms in the summer heat or shoveling snow in the chilly winter, no task is too big for Rimuru and his friends!\n\n[Written by MAL Rewrite]",
                "background": "Tensura Nikki: Tensei shitara Slime Datta Ken was initially scheduled to begin airing in January 2021, but it was delayed for three months due to the COVID-19 pandemic.",
                "season": "spring",
                "year": 2021,
                "broadcast": {
                    "day": "Tuesdays",
                    "time": "23:00",
                    "timezone": "Asia/Tokyo",
                    "string": "Tuesdays at 23:00 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 104,
                        "type": "anime",
                        "name": "Lantis",
                        "url": "https://myanimelist.net/anime/producer/104/Lantis"
                    },
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1416,
                        "type": "anime",
                        "name": "BS11",
                        "url": "https://myanimelist.net/anime/producer/1416/BS11"
                    },
                    {
                        "mal_id": 1840,
                        "type": "anime",
                        "name": "Bandai Namco Arts",
                        "url": "https://myanimelist.net/anime/producer/1840/Bandai_Namco_Arts"
                    },
                    {
                        "mal_id": 1896,
                        "type": "anime",
                        "name": "Micro Magazine Publishing",
                        "url": "https://myanimelist.net/anime/producer/1896/Micro_Magazine_Publishing"
                    },
                    {
                        "mal_id": 1992,
                        "type": "anime",
                        "name": "Bandai Spirits",
                        "url": "https://myanimelist.net/anime/producer/1992/Bandai_Spirits"
                    },
                    {
                        "mal_id": 2106,
                        "type": "anime",
                        "name": "Sony Music Solutions",
                        "url": "https://myanimelist.net/anime/producer/2106/Sony_Music_Solutions"
                    },
                    {
                        "mal_id": 2232,
                        "type": "anime",
                        "name": "ADK Marketing Solutions",
                        "url": "https://myanimelist.net/anime/producer/2232/ADK_Marketing_Solutions"
                    }
                ],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 38793,
                "url": "https://myanimelist.net/anime/38793/Tensei_shitara_Slime_Datta_Ken_OVA",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1230/118297.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1230/118297t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1230/118297l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1230/118297.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1230/118297t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1230/118297l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken OVA"
                    },
                    {
                        "type": "Synonym",
                        "title": "TenSura OVA"
                    },
                    {
                        "type": "Synonym",
                        "title": "That Time I Got Reincarnated as a Slime OVA"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensei shitara Slime Datta Ken Gaiden"
                    },
                    {
                        "type": "Synonym",
                        "title": "That Time I Got Reincarnated as a Slime Extra"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件 OVA"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime OAD"
                    },
                    {
                        "type": "German",
                        "title": "That Time I Got Reincarnated As A Slim OAD"
                    },
                    {
                        "type": "Spanish",
                        "title": "That Time I Got Reincarnated as a Slime OAD"
                    },
                    {
                        "type": "French",
                        "title": "Moi, Quand Je Me Réincarne en Slime OAD"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken OVA",
                "title_english": "That Time I Got Reincarnated as a Slime OAD",
                "title_japanese": "転生したらスライムだった件 OVA",
                "title_synonyms": [
                    "TenSura OVA",
                    "That Time I Got Reincarnated as a Slime OVA",
                    "Tensei shitara Slime Datta Ken Gaiden",
                    "That Time I Got Reincarnated as a Slime Extra"
                ],
                "type": "OVA",
                "source": "Manga",
                "episodes": 5,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2019-07-09T00:00:00+00:00",
                    "to": "2020-11-27T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 9,
                            "month": 7,
                            "year": 2019
                        },
                        "to": {
                            "day": 27,
                            "month": 11,
                            "year": 2020
                        }
                    },
                    "string": "Jul 9, 2019 to Nov 27, 2020"
                },
                "duration": "23 min per ep",
                "rating": "PG-13 - Teens 13 or older",
                "score": 7.49,
                "scored_by": 121839,
                "rank": 1901,
                "popularity": 1032,
                "members": 242552,
                "favorites": 525,
                "synopsis": "One day, Shuna and Shion are fighting over Rimuru's squishy slime body as usual. Rimuru figures that giving them each a body double of himself would solve the conflict, but when he imagines some of his other friends asking him to do the same for them, he quickly drops that plan. Then he comes up with the idea to make a cushion in the shape of his slime form. He travels around Tempest to see if his friends know of any good materials he can use, and he learns that a special type of sand found along a lake shore in the forest is exactly what he's looking for. So he sets out to collect some sand... but a monster is waiting for him by the lake! What's more, Milim hears about his plan for a picnic and comes racing down from the sky!\n\n(Source: Crunchyroll)",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 49877,
                "url": "https://myanimelist.net/anime/49877/Tensei_shitara_Slime_Datta_Ken_Movie__Guren_no_Kizuna-hen",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1745/128238.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1745/128238t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1745/128238l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1745/128238.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1745/128238t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1745/128238l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "nJEGXG_vXbo",
                    "url": "https://www.youtube.com/watch?v=nJEGXG_vXbo",
                    "embed_url": "https://www.youtube.com/embed/nJEGXG_vXbo?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/nJEGXG_vXbo/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/nJEGXG_vXbo/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/nJEGXG_vXbo/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/nJEGXG_vXbo/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/nJEGXG_vXbo/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken Movie: Guren no Kizuna-hen"
                    },
                    {
                        "type": "Synonym",
                        "title": "TenSura"
                    },
                    {
                        "type": "Synonym",
                        "title": "That Time I Got Reincarnated as a Slime Movie"
                    },
                    {
                        "type": "Japanese",
                        "title": "劇場版 転生したらスライムだった件 紅蓮の絆編"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime: The Movie - Scarlet Bond"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken Movie: Guren no Kizuna-hen",
                "title_english": "That Time I Got Reincarnated as a Slime: The Movie - Scarlet Bond",
                "title_japanese": "劇場版 転生したらスライムだった件 紅蓮の絆編",
                "title_synonyms": [
                    "TenSura",
                    "That Time I Got Reincarnated as a Slime Movie"
                ],
                "type": "Movie",
                "source": "Manga",
                "episodes": 1,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2022-11-25T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 25,
                            "month": 11,
                            "year": 2022
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Nov 25, 2022"
                },
                "duration": "1 hr 48 min",
                "rating": "PG-13 - Teens 13 or older",
                "score": 7.63,
                "scored_by": 89581,
                "rank": 1427,
                "popularity": 1163,
                "members": 215472,
                "favorites": 1338,
                "synopsis": "In Raja, a small country located to the west of Tempest. Rimuru and his companions get involved in a long-running conspiracy that swirls around the mysterious power of the queen. Rimuru and his commander Benimaru also encounter another ogre survivor named Hiiro, a man that used to be the brother of Benimaru.\n\n(Source: ANN)",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 39607,
                "url": "https://myanimelist.net/anime/39607/Tensei_shitara_Slime_Datta_Ken__Kanwa_-_Veldora_Nikki",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1672/100144.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1672/100144t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1672/100144l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1672/100144.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1672/100144t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1672/100144l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken: Kanwa - Veldora Nikki"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensei shitara Slime Datta Ken Recap"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件 閑話: ヴェルドラ日記"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime: Tales - Veldora's Journal"
                    },
                    {
                        "type": "German",
                        "title": "Meine Wiedergeburt als Schleim in einer anderen Welt Staffel 2 Folge 36.5 – Veldoras Tagebuch 2"
                    },
                    {
                        "type": "Spanish",
                        "title": "That Time I Got Reincarnated as a Slime Temporada 2 Episodio 36.5 Digresión: Diario de Veldora"
                    },
                    {
                        "type": "French",
                        "title": "Moi, quand je me réincarne en Slime Saison 2 Épisode 36.5: Digression – Le journal de Veldra 2"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken: Kanwa - Veldora Nikki",
                "title_english": "That Time I Got Reincarnated as a Slime: Tales - Veldora's Journal",
                "title_japanese": "転生したらスライムだった件 閑話: ヴェルドラ日記",
                "title_synonyms": [
                    "Tensei shitara Slime Datta Ken Recap"
                ],
                "type": "TV Special",
                "source": "Manga",
                "episodes": 1,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2019-03-26T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 26,
                            "month": 3,
                            "year": 2019
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Mar 26, 2019"
                },
                "duration": "23 min",
                "rating": "PG-13 - Teens 13 or older",
                "score": 6.76,
                "scored_by": 71844,
                "rank": 5366,
                "popularity": 1780,
                "members": 129975,
                "favorites": 202,
                "synopsis": "Ifrit, who has been trapped in Rimuru due to the latter's Predator skill, recaps events of the season while in a discussion with Veldora as they play Shogi.\n\n(Source: Wikipedia)",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [
                    {
                        "mal_id": 102,
                        "type": "anime",
                        "name": "Funimation",
                        "url": "https://myanimelist.net/anime/producer/102/Funimation"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [],
                "demographics": []
            },
            {
                "mal_id": 45753,
                "url": "https://myanimelist.net/anime/45753/Tensei_shitara_Slime_Datta_Ken__Kanwa_-_Hinata_Sakaguchi",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1670/111154.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1670/111154t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1670/111154l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1670/111154.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1670/111154t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1670/111154l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken: Kanwa - Hinata Sakaguchi"
                    },
                    {
                        "type": "Synonym",
                        "title": "That Time I got Reincarnated as a Slime Episode 24.9"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensei shitara Slime Datta Ken Recap"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensura Recap"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件 閑話: ヒナタ・サカグチ"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime Season 2: Digression - Hinata Sakaguchi"
                    },
                    {
                        "type": "German",
                        "title": "Meine Wiedergeburt Als Schleim In Einer Anderen Welt Staffel 2 Folge 24.9 Hinata Sakaguchi"
                    },
                    {
                        "type": "Spanish",
                        "title": "That Time I Got Reincarnated as a Slime Episodio 24.9. Digresión: Hinata Sakaguchi"
                    },
                    {
                        "type": "French",
                        "title": "Moi, quand je me réincarne en Slime Saison 2 Épisode 24.9 Digression: Hinata Sakaguchi"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken: Kanwa - Hinata Sakaguchi",
                "title_english": "That Time I Got Reincarnated as a Slime Season 2: Digression - Hinata Sakaguchi",
                "title_japanese": "転生したらスライムだった件 閑話: ヒナタ・サカグチ",
                "title_synonyms": [
                    "That Time I got Reincarnated as a Slime Episode 24.9",
                    "Tensei shitara Slime Datta Ken Recap",
                    "Tensura Recap"
                ],
                "type": "TV Special",
                "source": "Manga",
                "episodes": 1,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2021-01-05T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 5,
                            "month": 1,
                            "year": 2021
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Jan 5, 2021"
                },
                "duration": "23 min",
                "rating": "PG-13 - Teens 13 or older",
                "score": 6.79,
                "scored_by": 31748,
                "rank": 5213,
                "popularity": 2796,
                "members": 65024,
                "favorites": 127,
                "synopsis": "A summary of season one of Tensei shitara Slime Datta Ken with some extra content leading into season two.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 49318,
                "url": "https://myanimelist.net/anime/49318/Tensei_shitara_Slime_Datta_Ken_2nd_Season__Kanwa_-_Veldora_Nikki_2",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1879/121719.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1879/121719t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1879/121719l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1879/121719.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1879/121719t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1879/121719l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken 2nd Season: Kanwa - Veldora Nikki 2"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensei shitara Slime Datta Ken 2nd Season Recap"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensei shitara Slime Datta Ken Episode 36.5"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件 閑話: ヴェルドラ日記2"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime Season 2: Tales - Veldora's Journal 2"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken 2nd Season: Kanwa - Veldora Nikki 2",
                "title_english": "That Time I Got Reincarnated as a Slime Season 2: Tales - Veldora's Journal 2",
                "title_japanese": "転生したらスライムだった件 閑話: ヴェルドラ日記2",
                "title_synonyms": [
                    "Tensei shitara Slime Datta Ken 2nd Season Recap",
                    "Tensei shitara Slime Datta Ken Episode 36.5"
                ],
                "type": "TV Special",
                "source": "Manga",
                "episodes": 1,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2021-06-29T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 29,
                            "month": 6,
                            "year": 2021
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Jun 29, 2021"
                },
                "duration": "23 min",
                "rating": "PG-13 - Teens 13 or older",
                "score": 7.17,
                "scored_by": 29557,
                "rank": 3429,
                "popularity": 2914,
                "members": 60340,
                "favorites": 283,
                "synopsis": "Recap of Tensei Shitara Slime Datta Ken 2nd Season.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 53580,
                "url": "https://myanimelist.net/anime/53580/Tensei_shitara_Slime_Datta_Ken_3rd_Season",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1211/143476.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1211/143476t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1211/143476l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1211/143476.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1211/143476t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1211/143476l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "kM2m7GcF6W0",
                    "url": "https://www.youtube.com/watch?v=kM2m7GcF6W0",
                    "embed_url": "https://www.youtube.com/embed/kM2m7GcF6W0?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/kM2m7GcF6W0/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/kM2m7GcF6W0/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/kM2m7GcF6W0/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/kM2m7GcF6W0/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/kM2m7GcF6W0/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken 3rd Season"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensura 3"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件 第3期"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime Season 3"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken 3rd Season",
                "title_english": "That Time I Got Reincarnated as a Slime Season 3",
                "title_japanese": "転生したらスライムだった件 第3期",
                "title_synonyms": [
                    "Tensura 3"
                ],
                "type": "TV",
                "source": "Manga",
                "episodes": 24,
                "status": "Currently Airing",
                "airing": true,
                "aired": {
                    "from": "2024-04-05T00:00:00+00:00",
                    "to": "2024-09-27T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 5,
                            "month": 4,
                            "year": 2024
                        },
                        "to": {
                            "day": 27,
                            "month": 9,
                            "year": 2024
                        }
                    },
                    "string": "Apr 5, 2024 to Sep 27, 2024"
                },
                "duration": "24 min per ep",
                "rating": "PG-13 - Teens 13 or older",
                "score": 7.8,
                "scored_by": 60762,
                "rank": 1009,
                "popularity": 712,
                "members": 343121,
                "favorites": 3888,
                "synopsis": "Rimuru Tempest is victorious following his climactic showdown with Demon Lord Clayman. With Diablo's aid, the war with the Falmuth Kingdom ends decisively in Rimuru's favor. Fueled by increased migration and the integration of Jura Forest, the nation of Tempest undergoes rapid growth.\n\nRimuru's victory shifts the balance of power, giving rise to a renewed period of peace—but whether that peace will last is another matter. Yuuki Kagurazaka and Kazalim are conspiring with the Harlequin Alliance to bring about Rimuru's downfall. Furthermore, the Western Holy Church continues its intolerant crusade against Rimuru and his non-human subordinates. Both allies and enemies engage in a battle of wits, carefully advancing their agendas without shattering the delicate status quo. But once the first domino inevitably falls, the race to supremacy begins.\n\n[Written by MAL Rewrite]",
                "background": "Tensei shitara Slime Datta Ken 3rd Season was released on Blu-ray and DVD in four volumes from July 24, 2024, to October 30, 2024.",
                "season": "spring",
                "year": 2024,
                "broadcast": {
                    "day": "Fridays",
                    "time": "23:00",
                    "timezone": "Asia/Tokyo",
                    "string": "Fridays at 23:00 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1003,
                        "type": "anime",
                        "name": "Nippon Television Network",
                        "url": "https://myanimelist.net/anime/producer/1003/Nippon_Television_Network"
                    },
                    {
                        "mal_id": 1416,
                        "type": "anime",
                        "name": "BS11",
                        "url": "https://myanimelist.net/anime/producer/1416/BS11"
                    },
                    {
                        "mal_id": 1896,
                        "type": "anime",
                        "name": "Micro Magazine Publishing",
                        "url": "https://myanimelist.net/anime/producer/1896/Micro_Magazine_Publishing"
                    },
                    {
                        "mal_id": 1992,
                        "type": "anime",
                        "name": "Bandai Spirits",
                        "url": "https://myanimelist.net/anime/producer/1992/Bandai_Spirits"
                    },
                    {
                        "mal_id": 2106,
                        "type": "anime",
                        "name": "Sony Music Solutions",
                        "url": "https://myanimelist.net/anime/producer/2106/Sony_Music_Solutions"
                    },
                    {
                        "mal_id": 2232,
                        "type": "anime",
                        "name": "ADK Marketing Solutions",
                        "url": "https://myanimelist.net/anime/producer/2232/ADK_Marketing_Solutions"
                    },
                    {
                        "mal_id": 2424,
                        "type": "anime",
                        "name": "Bandai Namco Filmworks",
                        "url": "https://myanimelist.net/anime/producer/2424/Bandai_Namco_Filmworks"
                    },
                    {
                        "mal_id": 2425,
                        "type": "anime",
                        "name": "Bandai Namco Music Live",
                        "url": "https://myanimelist.net/anime/producer/2425/Bandai_Namco_Music_Live"
                    }
                ],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 59493,
                "url": "https://myanimelist.net/anime/59493/Tensei_shitara_Slime_Datta_Ken__Kanwa_-_Luminous_Memories",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1465/144664.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1465/144664.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken: Kanwa - Luminous Memories"
                    },
                    {
                        "type": "Synonym",
                        "title": "That Time I got Reincarnated as a Slime Episode 65.5"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensei shitara Slime Datta Ken Recap"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensura Recap"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件 閑話:ルミナスメモリーズ"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime Season 3: Digression - Luminous Memories"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken: Kanwa - Luminous Memories",
                "title_english": "That Time I Got Reincarnated as a Slime Season 3: Digression - Luminous Memories",
                "title_japanese": "転生したらスライムだった件 閑話:ルミナスメモリーズ",
                "title_synonyms": [
                    "That Time I got Reincarnated as a Slime Episode 65.5",
                    "Tensei shitara Slime Datta Ken Recap",
                    "Tensura Recap"
                ],
                "type": "TV Special",
                "source": "Manga",
                "episodes": 1,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2024-08-10T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 10,
                            "month": 8,
                            "year": 2024
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Aug 10, 2024"
                },
                "duration": "24 min",
                "rating": "PG-13 - Teens 13 or older",
                "score": 6.31,
                "scored_by": 3918,
                "rank": 7894,
                "popularity": 5677,
                "members": 14308,
                "favorites": 9,
                "synopsis": "Recap of Tensei shitara Slime Datta Ken 3rd Season.\n\nRimuru and Hinata, despite both holding similar values, fought fiercely. What happened behind the scenes of this complicated situation? From the perspective of Luminous Valentine, the one and only God of the Holy Empire of Lubelius and one of the Octagram Demon Lords. The details of the \"Holy Demon Battle\" are told, as well as some secret that she has never told anyone.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 59493,
                "url": "https://myanimelist.net/anime/59493/Tensei_shitara_Slime_Datta_Ken__Kanwa_-_Luminous_Memories",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1465/144664.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1465/144664.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken: Kanwa - Luminous Memories"
                    },
                    {
                        "type": "Synonym",
                        "title": "That Time I got Reincarnated as a Slime Episode 65.5"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensei shitara Slime Datta Ken Recap"
                    },
                    {
                        "type": "Synonym",
                        "title": "Tensura Recap"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件 閑話:ルミナスメモリーズ"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime Season 3: Digression - Luminous Memories"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken: Kanwa - Luminous Memories",
                "title_english": "That Time I Got Reincarnated as a Slime Season 3: Digression - Luminous Memories",
                "title_japanese": "転生したらスライムだった件 閑話:ルミナスメモリーズ",
                "title_synonyms": [
                    "That Time I got Reincarnated as a Slime Episode 65.5",
                    "Tensei shitara Slime Datta Ken Recap",
                    "Tensura Recap"
                ],
                "type": "TV Special",
                "source": "Manga",
                "episodes": 1,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2024-08-10T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 10,
                            "month": 8,
                            "year": 2024
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Aug 10, 2024"
                },
                "duration": "24 min",
                "rating": "PG-13 - Teens 13 or older",
                "score": 6.31,
                "scored_by": 3918,
                "rank": 7894,
                "popularity": 5677,
                "members": 14308,
                "favorites": 9,
                "synopsis": "Recap of Tensei shitara Slime Datta Ken 3rd Season.\n\nRimuru and Hinata, despite both holding similar values, fought fiercely. What happened behind the scenes of this complicated situation? From the perspective of Luminous Valentine, the one and only God of the Holy Empire of Lubelius and one of the Octagram Demon Lords. The details of the \"Holy Demon Battle\" are told, as well as some secret that she has never told anyone.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 54565,
                "url": "https://myanimelist.net/anime/54565/Tensei_shitara_Slime_Datta_Ken__Coleus_no_Yume",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1570/135813.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1570/135813t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1570/135813l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1570/135813.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1570/135813t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1570/135813l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "WuIDVoKdVGU",
                    "url": "https://www.youtube.com/watch?v=WuIDVoKdVGU",
                    "embed_url": "https://www.youtube.com/embed/WuIDVoKdVGU?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/WuIDVoKdVGU/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/WuIDVoKdVGU/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/WuIDVoKdVGU/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/WuIDVoKdVGU/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/WuIDVoKdVGU/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken: Coleus no Yume"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したらスライムだった件 コリウスの夢"
                    },
                    {
                        "type": "English",
                        "title": "That Time I Got Reincarnated as a Slime: Visions of Coleus"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken: Coleus no Yume",
                "title_english": "That Time I Got Reincarnated as a Slime: Visions of Coleus",
                "title_japanese": "転生したらスライムだった件 コリウスの夢",
                "title_synonyms": [],
                "type": "ONA",
                "source": "Manga",
                "episodes": 3,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2023-11-02T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 2,
                            "month": 11,
                            "year": 2023
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Nov 2, 2023"
                },
                "duration": "24 min per ep",
                "rating": "PG-13 - Teens 13 or older",
                "score": 7.58,
                "scored_by": 37727,
                "rank": 1572,
                "popularity": 2299,
                "members": 89948,
                "favorites": 316,
                "synopsis": "The story takes place between the first and second season, where Rimuru confronts the swirling conspiracies in the Coleus kingdom.\n\n(Source: MAL News)",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 57434,
                "url": "https://myanimelist.net/anime/57434/Tensei_shitara_Slime_Datta_Ken_Movie__Guren_no_Kizuna-hen_Specials",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1505/140140.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1505/140140t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1505/140140l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1505/140140.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1505/140140t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1505/140140l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Slime Datta Ken Movie: Guren no Kizuna-hen Specials"
                    }
                ],
                "title": "Tensei shitara Slime Datta Ken Movie: Guren no Kizuna-hen Specials",
                "title_english": null,
                "title_japanese": null,
                "title_synonyms": [],
                "type": "Special",
                "source": "Manga",
                "episodes": 2,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2023-07-28T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 28,
                            "month": 7,
                            "year": 2023
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Jul 28, 2023"
                },
                "duration": "1 min per ep",
                "rating": "PG-13 - Teens 13 or older",
                "score": null,
                "scored_by": null,
                "rank": 14210,
                "popularity": 19769,
                "members": 259,
                "favorites": 2,
                "synopsis": "Unreleased scenes from the movie included in the BD/DVD release: \"Intermission: Kurobee's Blacksmith Workshop\" and \"Intermission: Gabiru and Wyvern\".\n\n(Source: Official Website)",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 441,
                        "type": "anime",
                        "name": "8bit",
                        "url": "https://myanimelist.net/anime/producer/441/8bit"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 59095,
                "url": "https://myanimelist.net/anime/59095/Tensei_shitara_Dainana_Ouji_Datta_node_Kimama_ni_Majutsu_wo_Kiwamemasu_2nd_Season",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1466/143624.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1466/143624t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1466/143624l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1466/143624.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1466/143624t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1466/143624l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu 2nd Season"
                    },
                    {
                        "type": "Synonym",
                        "title": "I Was Reincarnated as the 7th Prince"
                    },
                    {
                        "type": "Synonym",
                        "title": "so I Will Perfect My Magic as I Please 2nd Season"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したら第七王子だったので、気ままに魔術を極めます 第2期"
                    },
                    {
                        "type": "English",
                        "title": "I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability Season 2"
                    }
                ],
                "title": "Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu 2nd Season",
                "title_english": "I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability Season 2",
                "title_japanese": "転生したら第七王子だったので、気ままに魔術を極めます 第2期",
                "title_synonyms": [
                    "I Was Reincarnated as the 7th Prince",
                    "so I Will Perfect My Magic as I Please 2nd Season"
                ],
                "type": "TV",
                "source": "Light novel",
                "episodes": null,
                "status": "Not yet aired",
                "airing": false,
                "aired": {
                    "from": null,
                    "to": null,
                    "prop": {
                        "from": {
                            "day": null,
                            "month": null,
                            "year": null
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Not available"
                },
                "duration": "Unknown",
                "rating": "PG-13 - Teens 13 or older",
                "score": null,
                "scored_by": null,
                "rank": null,
                "popularity": 4938,
                "members": 20609,
                "favorites": 35,
                "synopsis": "Second season of Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": "Unknown"
                },
                "producers": [],
                "licensors": [],
                "studios": [],
                "genres": [
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 49891,
                "url": "https://myanimelist.net/anime/49891/Tensei_shitara_Ken_deshita",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1191/127909.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1191/127909t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1191/127909l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1191/127909.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1191/127909t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1191/127909l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "TDN4Rh7VvkU",
                    "url": "https://www.youtube.com/watch?v=TDN4Rh7VvkU",
                    "embed_url": "https://www.youtube.com/embed/TDN4Rh7VvkU?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/TDN4Rh7VvkU/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/TDN4Rh7VvkU/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/TDN4Rh7VvkU/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/TDN4Rh7VvkU/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/TDN4Rh7VvkU/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Ken deshita"
                    },
                    {
                        "type": "Synonym",
                        "title": "I became the sword by transmigrating"
                    },
                    {
                        "type": "Synonym",
                        "title": "TenKen"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したら剣でした"
                    },
                    {
                        "type": "English",
                        "title": "Reincarnated as a Sword"
                    }
                ],
                "title": "Tensei shitara Ken deshita",
                "title_english": "Reincarnated as a Sword",
                "title_japanese": "転生したら剣でした",
                "title_synonyms": [
                    "I became the sword by transmigrating",
                    "TenKen"
                ],
                "type": "TV",
                "source": "Light novel",
                "episodes": 12,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2022-10-05T00:00:00+00:00",
                    "to": "2022-12-21T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 5,
                            "month": 10,
                            "year": 2022
                        },
                        "to": {
                            "day": 21,
                            "month": 12,
                            "year": 2022
                        }
                    },
                    "string": "Oct 5, 2022 to Dec 21, 2022"
                },
                "duration": "23 min per ep",
                "rating": "PG-13 - Teens 13 or older",
                "score": 7.52,
                "scored_by": 140407,
                "rank": 1792,
                "popularity": 879,
                "members": 290052,
                "favorites": 1725,
                "synopsis": "A nameless sword wakes up to discover he has been reincarnated from his former life as a human. With his power of telekinesis, he moves around this new world, acquiring several skills and abilities. When the sword comes upon a forest filled with monsters, he meets a young girl fleeing from a beast. Grabbing the sword, the girl easily defeats the monster. After introducing herself as Fran, she names the sword \"Shishou\" and officially becomes his wielder.\n\nThe two set out to become adventurers, but unfortunately for Fran, she is a member of the Black Cat Tribe—a Beastkin group with a bad reputation. No member of this tribe has ever evolved into a mightier beast, but Fran plans to be the first and achieve her parents' dream. As Shishou promises to remain her sword until she attains her goal, they form an unstoppable partnership of impressive strength.\n\n[Written by MAL Rewrite]",
                "background": "",
                "season": "fall",
                "year": 2022,
                "broadcast": {
                    "day": "Wednesdays",
                    "time": "23:00",
                    "timezone": "Asia/Tokyo",
                    "string": "Wednesdays at 23:00 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 282,
                        "type": "anime",
                        "name": "Gentosha Comics",
                        "url": "https://myanimelist.net/anime/producer/282/Gentosha_Comics"
                    },
                    {
                        "mal_id": 513,
                        "type": "anime",
                        "name": "Nikkatsu",
                        "url": "https://myanimelist.net/anime/producer/513/Nikkatsu"
                    },
                    {
                        "mal_id": 1113,
                        "type": "anime",
                        "name": "NBCUniversal Entertainment Japan",
                        "url": "https://myanimelist.net/anime/producer/1113/NBCUniversal_Entertainment_Japan"
                    },
                    {
                        "mal_id": 1501,
                        "type": "anime",
                        "name": "JR East Marketing & Communications",
                        "url": "https://myanimelist.net/anime/producer/1501/JR_East_Marketing___Communications"
                    },
                    {
                        "mal_id": 1896,
                        "type": "anime",
                        "name": "Micro Magazine Publishing",
                        "url": "https://myanimelist.net/anime/producer/1896/Micro_Magazine_Publishing"
                    },
                    {
                        "mal_id": 2185,
                        "type": "anime",
                        "name": "BS Asahi",
                        "url": "https://myanimelist.net/anime/producer/2185/BS_Asahi"
                    },
                    {
                        "mal_id": 2289,
                        "type": "anime",
                        "name": "GREE Entertainment",
                        "url": "https://myanimelist.net/anime/producer/2289/GREE_Entertainment"
                    },
                    {
                        "mal_id": 2440,
                        "type": "anime",
                        "name": "Micro House",
                        "url": "https://myanimelist.net/anime/producer/2440/Micro_House"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 376,
                        "type": "anime",
                        "name": "Sentai Filmworks",
                        "url": "https://myanimelist.net/anime/producer/376/Sentai_Filmworks"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 605,
                        "type": "anime",
                        "name": "C2C",
                        "url": "https://myanimelist.net/anime/producer/605/C2C"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 53913,
                "url": "https://myanimelist.net/anime/53913/Tensei_shitara_Ken_deshita_2",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1710/131965.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1710/131965t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1710/131965l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1710/131965.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1710/131965t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1710/131965l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "w7tkCb7eH3g",
                    "url": "https://www.youtube.com/watch?v=w7tkCb7eH3g",
                    "embed_url": "https://www.youtube.com/embed/w7tkCb7eH3g?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/w7tkCb7eH3g/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/w7tkCb7eH3g/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/w7tkCb7eH3g/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/w7tkCb7eH3g/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/w7tkCb7eH3g/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Ken deshita 2"
                    },
                    {
                        "type": "Synonym",
                        "title": "I became the sword by transmigrating 2nd Season"
                    },
                    {
                        "type": "Synonym",
                        "title": "TenKen 2"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したら剣でした2"
                    },
                    {
                        "type": "English",
                        "title": "Reincarnated as a Sword Season 2"
                    }
                ],
                "title": "Tensei shitara Ken deshita 2",
                "title_english": "Reincarnated as a Sword Season 2",
                "title_japanese": "転生したら剣でした2",
                "title_synonyms": [
                    "I became the sword by transmigrating 2nd Season",
                    "TenKen 2"
                ],
                "type": "TV",
                "source": "Light novel",
                "episodes": null,
                "status": "Not yet aired",
                "airing": false,
                "aired": {
                    "from": null,
                    "to": null,
                    "prop": {
                        "from": {
                            "day": null,
                            "month": null,
                            "year": null
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Not available"
                },
                "duration": "Unknown",
                "rating": "PG-13 - Teens 13 or older",
                "score": null,
                "scored_by": null,
                "rank": null,
                "popularity": 2809,
                "members": 64531,
                "favorites": 376,
                "synopsis": "Second season of Tensei shitara Ken deshita.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": "Unknown"
                },
                "producers": [
                    {
                        "mal_id": 282,
                        "type": "anime",
                        "name": "Gentosha Comics",
                        "url": "https://myanimelist.net/anime/producer/282/Gentosha_Comics"
                    },
                    {
                        "mal_id": 1113,
                        "type": "anime",
                        "name": "NBCUniversal Entertainment Japan",
                        "url": "https://myanimelist.net/anime/producer/1113/NBCUniversal_Entertainment_Japan"
                    },
                    {
                        "mal_id": 1896,
                        "type": "anime",
                        "name": "Micro Magazine Publishing",
                        "url": "https://myanimelist.net/anime/producer/1896/Micro_Magazine_Publishing"
                    }
                ],
                "licensors": [],
                "studios": [],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 53516,
                "url": "https://myanimelist.net/anime/53516/Tensei_shitara_Dainana_Ouji_Datta_node_Kimama_ni_Majutsu_wo_Kiwamemasu",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1580/141243.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1580/141243t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1580/141243l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1580/141243.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1580/141243t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1580/141243l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "aK8Gtxw-9bE",
                    "url": "https://www.youtube.com/watch?v=aK8Gtxw-9bE",
                    "embed_url": "https://www.youtube.com/embed/aK8Gtxw-9bE?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/aK8Gtxw-9bE/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/aK8Gtxw-9bE/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/aK8Gtxw-9bE/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/aK8Gtxw-9bE/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/aK8Gtxw-9bE/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu"
                    },
                    {
                        "type": "Synonym",
                        "title": "I Was Reincarnated as the 7th Prince"
                    },
                    {
                        "type": "Synonym",
                        "title": "so I Will Perfect My Magic as I Please"
                    },
                    {
                        "type": "Japanese",
                        "title": "転生したら第七王子だったので、気ままに魔術を極めます"
                    },
                    {
                        "type": "English",
                        "title": "I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability"
                    }
                ],
                "title": "Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu",
                "title_english": "I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability",
                "title_japanese": "転生したら第七王子だったので、気ままに魔術を極めます",
                "title_synonyms": [
                    "I Was Reincarnated as the 7th Prince",
                    "so I Will Perfect My Magic as I Please"
                ],
                "type": "TV",
                "source": "Light novel",
                "episodes": 12,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2024-04-02T00:00:00+00:00",
                    "to": "2024-06-18T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 2,
                            "month": 4,
                            "year": 2024
                        },
                        "to": {
                            "day": 18,
                            "month": 6,
                            "year": 2024
                        }
                    },
                    "string": "Apr 2, 2024 to Jun 18, 2024"
                },
                "duration": "23 min per ep",
                "rating": "PG-13 - Teens 13 or older",
                "score": 7.47,
                "scored_by": 86728,
                "rank": 2001,
                "popularity": 1385,
                "members": 176532,
                "favorites": 893,
                "synopsis": "In his past life, Prince Lloyd de Saloum was a commoner who could not become adept at magic, no matter how knowledgeable or obsessed he was about it. Now reincarnated into his current royal lineage, he receives a body with seemingly endless mana, making his desire to master all things arcane attainable. Moreover, as the seventh prince of the kingdom, Lloyd has no claim to the throne, allowing him to nurture his abilities as freely as he wants.\n\nUnfortunately for Lloyd, ancient seals that imprison powerful demons begin to break down and release the horrors within, endangering the peace. With these monstrosities roaming around, Lloyd's overwhelming magical prowess is the ultimate weapon that can neutralize these threats before all things descend to chaos.\n\n[Written by MAL Rewrite]",
                "background": "",
                "season": "spring",
                "year": 2024,
                "broadcast": {
                    "day": "Tuesdays",
                    "time": "00:00",
                    "timezone": "Asia/Tokyo",
                    "string": "Tuesdays at 00:00 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 16,
                        "type": "anime",
                        "name": "TV Tokyo",
                        "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                    },
                    {
                        "mal_id": 104,
                        "type": "anime",
                        "name": "Lantis",
                        "url": "https://myanimelist.net/anime/producer/104/Lantis"
                    },
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1041,
                        "type": "anime",
                        "name": "Ai Addiction",
                        "url": "https://myanimelist.net/anime/producer/1041/Ai_Addiction"
                    },
                    {
                        "mal_id": 1468,
                        "type": "anime",
                        "name": "Crunchyroll",
                        "url": "https://myanimelist.net/anime/producer/1468/Crunchyroll"
                    },
                    {
                        "mal_id": 2232,
                        "type": "anime",
                        "name": "ADK Marketing Solutions",
                        "url": "https://myanimelist.net/anime/producer/2232/ADK_Marketing_Solutions"
                    },
                    {
                        "mal_id": 2424,
                        "type": "anime",
                        "name": "Bandai Namco Filmworks",
                        "url": "https://myanimelist.net/anime/producer/2424/Bandai_Namco_Filmworks"
                    },
                    {
                        "mal_id": 2425,
                        "type": "anime",
                        "name": "Bandai Namco Music Live",
                        "url": "https://myanimelist.net/anime/producer/2425/Bandai_Namco_Music_Live"
                    }
                ],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 2212,
                        "type": "anime",
                        "name": "Tsumugi Akita Animation Lab",
                        "url": "https://myanimelist.net/anime/producer/2212/Tsumugi_Akita_Animation_Lab"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 56733,
                "url": "https://myanimelist.net/anime/56733/Magical★Explorer",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1062/138681.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1062/138681t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1062/138681l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1062/138681.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1062/138681t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1062/138681l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Magical★Explorer"
                    },
                    {
                        "type": "Synonym",
                        "title": "Magical Explorer: Reincarnated as an Eroge Hero's Friend"
                    },
                    {
                        "type": "Synonym",
                        "title": "I'll Live Freely With My Eroge Knowledge."
                    },
                    {
                        "type": "Japanese",
                        "title": "マジカル★エクスプロ"
                    },
                    {
                        "type": "English",
                        "title": "Magical Explorer: Reborn as a Side Character in a Fantasy Dating Sim"
                    }
                ],
                "title": "Magical★Explorer",
                "title_english": "Magical Explorer: Reborn as a Side Character in a Fantasy Dating Sim",
                "title_japanese": "マジカル★エクスプロ",
                "title_synonyms": [
                    "Magical Explorer: Reincarnated as an Eroge Hero's Friend",
                    "I'll Live Freely With My Eroge Knowledge."
                ],
                "type": null,
                "source": "Light novel",
                "episodes": null,
                "status": "Not yet aired",
                "airing": false,
                "aired": {
                    "from": null,
                    "to": null,
                    "prop": {
                        "from": {
                            "day": null,
                            "month": null,
                            "year": null
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Not available"
                },
                "duration": "Unknown",
                "rating": null,
                "score": null,
                "scored_by": null,
                "rank": null,
                "popularity": 11474,
                "members": 2077,
                "favorites": 8,
                "synopsis": "Reincarnated as a character in the legendary erotic game, “Magical Explorer,” it doesn’t take long for our hero to discover that he’s been designated the unlucky side-character rather than the game’s lady-killer protagonist. Not to worry, though! Armed with his vast knowledge of the game (and a few cheats) he’ll do whatever it takes to win the hearts of the game’s heroines and emerge as the most accomplished student at the Sorcerer's Academy!\n\n(Source: Yen Press)",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [],
                "studios": [],
                "genres": [
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    },
                    {
                        "mal_id": 9,
                        "type": "anime",
                        "name": "Ecchi",
                        "url": "https://myanimelist.net/anime/genre/9/Ecchi"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 35,
                        "type": "anime",
                        "name": "Harem",
                        "url": "https://myanimelist.net/anime/genre/35/Harem"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 58395,
                "url": "https://myanimelist.net/anime/58395/Neko_ni_Tensei_shita_Ojisan",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1659/144170.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1659/144170t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1659/144170l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1659/144170.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1659/144170t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1659/144170l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "cNBdqkjdRuY",
                    "url": "https://www.youtube.com/watch?v=cNBdqkjdRuY",
                    "embed_url": "https://www.youtube.com/embed/cNBdqkjdRuY?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/cNBdqkjdRuY/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/cNBdqkjdRuY/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/cNBdqkjdRuY/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/cNBdqkjdRuY/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/cNBdqkjdRuY/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Neko ni Tensei shita Ojisan"
                    },
                    {
                        "type": "Synonym",
                        "title": "The Old Man Who Was Reincarnated as a Cat"
                    },
                    {
                        "type": "Japanese",
                        "title": "ねこに転生したおじさん"
                    }
                ],
                "title": "Neko ni Tensei shita Ojisan",
                "title_english": null,
                "title_japanese": "ねこに転生したおじさん",
                "title_synonyms": [
                    "The Old Man Who Was Reincarnated as a Cat"
                ],
                "type": "TV",
                "source": "Web manga",
                "episodes": null,
                "status": "Not yet aired",
                "airing": false,
                "aired": {
                    "from": "2024-10-07T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 7,
                            "month": 10,
                            "year": 2024
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Oct 7, 2024 to ?"
                },
                "duration": "Unknown",
                "rating": null,
                "score": null,
                "scored_by": null,
                "rank": null,
                "popularity": 14438,
                "members": 849,
                "favorites": 2,
                "synopsis": "The story follows an ordinary old man who one day suddenly is reincarnated as a cute cat, and the president of the company he works for picks him up.\n\n(Source: ANN)",
                "background": "",
                "season": "fall",
                "year": 2024,
                "broadcast": {
                    "day": "Mondays",
                    "time": "13:00",
                    "timezone": "Asia/Tokyo",
                    "string": "Mondays at 13:00 (JST)"
                },
                "producers": [],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 2911,
                        "type": "anime",
                        "name": "Studio Eight Color",
                        "url": "https://myanimelist.net/anime/producer/2911/Studio_Eight_Color"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 71,
                        "type": "anime",
                        "name": "Pets",
                        "url": "https://myanimelist.net/anime/genre/71/Pets"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 39535,
                "url": "https://myanimelist.net/anime/39535/Mushoku_Tensei__Isekai_Ittara_Honki_Dasu",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1530/117776.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1530/117776t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1530/117776l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1530/117776.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1530/117776t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1530/117776l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "Qx01pn9l-6g",
                    "url": "https://www.youtube.com/watch?v=Qx01pn9l-6g",
                    "embed_url": "https://www.youtube.com/embed/Qx01pn9l-6g?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/Qx01pn9l-6g/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/Qx01pn9l-6g/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/Qx01pn9l-6g/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/Qx01pn9l-6g/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/Qx01pn9l-6g/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Mushoku Tensei: Isekai Ittara Honki Dasu"
                    },
                    {
                        "type": "Synonym",
                        "title": "Jobless Reincarnation: I Will Seriously Try If I Go To Another World"
                    },
                    {
                        "type": "Japanese",
                        "title": "無職転生 ～異世界行ったら本気だす～"
                    },
                    {
                        "type": "English",
                        "title": "Mushoku Tensei: Jobless Reincarnation"
                    },
                    {
                        "type": "German",
                        "title": "Mushoku Tensei: Jobless Reincarnation"
                    },
                    {
                        "type": "French",
                        "title": "Mushoku Tensei: Jobless Reincarnation"
                    }
                ],
                "title": "Mushoku Tensei: Isekai Ittara Honki Dasu",
                "title_english": "Mushoku Tensei: Jobless Reincarnation",
                "title_japanese": "無職転生 ～異世界行ったら本気だす～",
                "title_synonyms": [
                    "Jobless Reincarnation: I Will Seriously Try If I Go To Another World"
                ],
                "type": "TV",
                "source": "Light novel",
                "episodes": 11,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2021-01-11T00:00:00+00:00",
                    "to": "2021-03-22T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 11,
                            "month": 1,
                            "year": 2021
                        },
                        "to": {
                            "day": 22,
                            "month": 3,
                            "year": 2021
                        }
                    },
                    "string": "Jan 11, 2021 to Mar 22, 2021"
                },
                "duration": "23 min per ep",
                "rating": "R - 17+ (violence & profanity)",
                "score": 8.36,
                "scored_by": 852585,
                "rank": 218,
                "popularity": 96,
                "members": 1385358,
                "favorites": 35445,
                "synopsis": "Despite being bullied, scorned, and oppressed all of his life, a 34-year-old shut-in still found the resolve to attempt something heroic—only for it to end in a tragic accident. But in a twist of fate, he awakens in another world as Rudeus Greyrat, starting life again as a baby born to two loving parents.\n\nPreserving his memories and knowledge from his previous life, Rudeus quickly adapts to his new environment. With the mind of a grown adult, he starts to display magical talent that exceeds all expectations, honing his skill with the help of a mage named Roxy Migurdia. Rudeus learns swordplay from his father, Paul, and meets Sylphiette, a girl his age who quickly becomes his closest friend.\n\nAs Rudeus' second chance at life begins, he tries to make the most of his new opportunity while conquering his traumatic past. And perhaps, one day, he may find the one thing he could not find in his old world—love.\n\n[Written by MAL Rewrite]",
                "background": "Mushoku Tensei: Isekai Ittara Honki Dasu adapts chapters 1-26 of Yuka Fujikawa's manga series and volumes 1-3 of Rifujin na Magonote's light novel series of the same title.",
                "season": "winter",
                "year": 2021,
                "broadcast": {
                    "day": "Mondays",
                    "time": "00:00",
                    "timezone": "Asia/Tokyo",
                    "string": "Mondays at 00:00 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 61,
                        "type": "anime",
                        "name": "Frontier Works",
                        "url": "https://myanimelist.net/anime/producer/61/Frontier_Works"
                    },
                    {
                        "mal_id": 245,
                        "type": "anime",
                        "name": "TOHO",
                        "url": "https://myanimelist.net/anime/producer/245/TOHO"
                    },
                    {
                        "mal_id": 1143,
                        "type": "anime",
                        "name": "TOHO animation",
                        "url": "https://myanimelist.net/anime/producer/1143/TOHO_animation"
                    },
                    {
                        "mal_id": 1333,
                        "type": "anime",
                        "name": "Hakuhodo DY Music & Pictures",
                        "url": "https://myanimelist.net/anime/producer/1333/Hakuhodo_DY_Music___Pictures"
                    },
                    {
                        "mal_id": 1416,
                        "type": "anime",
                        "name": "BS11",
                        "url": "https://myanimelist.net/anime/producer/1416/BS11"
                    },
                    {
                        "mal_id": 1444,
                        "type": "anime",
                        "name": "Egg Firm",
                        "url": "https://myanimelist.net/anime/producer/1444/Egg_Firm"
                    },
                    {
                        "mal_id": 1696,
                        "type": "anime",
                        "name": "Kadokawa",
                        "url": "https://myanimelist.net/anime/producer/1696/Kadokawa"
                    },
                    {
                        "mal_id": 1815,
                        "type": "anime",
                        "name": "GREE",
                        "url": "https://myanimelist.net/anime/producer/1815/GREE"
                    },
                    {
                        "mal_id": 2229,
                        "type": "anime",
                        "name": "Toho Music",
                        "url": "https://myanimelist.net/anime/producer/2229/Toho_Music"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 102,
                        "type": "anime",
                        "name": "Funimation",
                        "url": "https://myanimelist.net/anime/producer/102/Funimation"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 1993,
                        "type": "anime",
                        "name": "Studio Bind",
                        "url": "https://myanimelist.net/anime/producer/1993/Studio_Bind"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    },
                    {
                        "mal_id": 9,
                        "type": "anime",
                        "name": "Ecchi",
                        "url": "https://myanimelist.net/anime/genre/9/Ecchi"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 51179,
                "url": "https://myanimelist.net/anime/51179/Mushoku_Tensei_II__Isekai_Ittara_Honki_Dasu",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1898/138005.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1898/138005t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1898/138005l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1898/138005.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1898/138005t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1898/138005l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "keti2rbgI6c",
                    "url": "https://www.youtube.com/watch?v=keti2rbgI6c",
                    "embed_url": "https://www.youtube.com/embed/keti2rbgI6c?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/keti2rbgI6c/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/keti2rbgI6c/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/keti2rbgI6c/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/keti2rbgI6c/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/keti2rbgI6c/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Mushoku Tensei II: Isekai Ittara Honki Dasu"
                    },
                    {
                        "type": "Synonym",
                        "title": "Jobless Reincarnation: I Will Seriously Try If I Go To Another World"
                    },
                    {
                        "type": "Synonym",
                        "title": "Mushoku Tensei: Isekai Ittara Honki Dasu 2nd Season"
                    },
                    {
                        "type": "Japanese",
                        "title": "無職転生 II ～異世界行ったら本気だす～"
                    },
                    {
                        "type": "English",
                        "title": "Mushoku Tensei: Jobless Reincarnation Season 2"
                    }
                ],
                "title": "Mushoku Tensei II: Isekai Ittara Honki Dasu",
                "title_english": "Mushoku Tensei: Jobless Reincarnation Season 2",
                "title_japanese": "無職転生 II ～異世界行ったら本気だす～",
                "title_synonyms": [
                    "Jobless Reincarnation: I Will Seriously Try If I Go To Another World",
                    "Mushoku Tensei: Isekai Ittara Honki Dasu 2nd Season"
                ],
                "type": "TV",
                "source": "Light novel",
                "episodes": 12,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2023-07-10T00:00:00+00:00",
                    "to": "2023-09-25T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 10,
                            "month": 7,
                            "year": 2023
                        },
                        "to": {
                            "day": 25,
                            "month": 9,
                            "year": 2023
                        }
                    },
                    "string": "Jul 10, 2023 to Sep 25, 2023"
                },
                "duration": "23 min per ep",
                "rating": "R - 17+ (violence & profanity)",
                "score": 8.24,
                "scored_by": 338405,
                "rank": 328,
                "popularity": 369,
                "members": 609055,
                "favorites": 7181,
                "synopsis": "After his relationship with Eris Boreas Greyrat reaches new heights, Rudeus Greyrat is ecstatic. Unfortunately, his joy is short-lived, as Eris suddenly abandons him to embark on her own journey. Believing that Eris has lost all interest in him, a heartbroken and depressed Rudeus sets forth to the Northern Territories. With his sole goal being to locate his mother on the vast continent, Rudeus wonders if persisting through daily life is worth the pain, falling into a robotic routine as he endlessly ruminates on his lost love.\n\nHowever, the dangers of the North soon prove that one cannot survive with a dulled mind. While on a quest with the party Counter Arrow, with whom he recently became acquainted, Rudeus has a brush with death—an experience that forces him to finally snap out of his despair. With his newfound teammates, Rudeus rediscovers the pleasure of daily adventuring and moves forward with his original goal of living his second lease on life to the fullest.\n\n[Written by MAL Rewrite]",
                "background": "Mushoku Tensei II: Isekai Ittara Honki Dasu was released on Blu-ray in two volumes from October 18, 2023, to December 20, 2023.",
                "season": "summer",
                "year": 2023,
                "broadcast": {
                    "day": "Mondays",
                    "time": "00:00",
                    "timezone": "Asia/Tokyo",
                    "string": "Mondays at 00:00 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 61,
                        "type": "anime",
                        "name": "Frontier Works",
                        "url": "https://myanimelist.net/anime/producer/61/Frontier_Works"
                    },
                    {
                        "mal_id": 245,
                        "type": "anime",
                        "name": "TOHO",
                        "url": "https://myanimelist.net/anime/producer/245/TOHO"
                    },
                    {
                        "mal_id": 1143,
                        "type": "anime",
                        "name": "TOHO animation",
                        "url": "https://myanimelist.net/anime/producer/1143/TOHO_animation"
                    },
                    {
                        "mal_id": 1333,
                        "type": "anime",
                        "name": "Hakuhodo DY Music & Pictures",
                        "url": "https://myanimelist.net/anime/producer/1333/Hakuhodo_DY_Music___Pictures"
                    },
                    {
                        "mal_id": 1416,
                        "type": "anime",
                        "name": "BS11",
                        "url": "https://myanimelist.net/anime/producer/1416/BS11"
                    },
                    {
                        "mal_id": 1444,
                        "type": "anime",
                        "name": "Egg Firm",
                        "url": "https://myanimelist.net/anime/producer/1444/Egg_Firm"
                    },
                    {
                        "mal_id": 1696,
                        "type": "anime",
                        "name": "Kadokawa",
                        "url": "https://myanimelist.net/anime/producer/1696/Kadokawa"
                    },
                    {
                        "mal_id": 2289,
                        "type": "anime",
                        "name": "GREE Entertainment",
                        "url": "https://myanimelist.net/anime/producer/2289/GREE_Entertainment"
                    }
                ],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 1993,
                        "type": "anime",
                        "name": "Studio Bind",
                        "url": "https://myanimelist.net/anime/producer/1993/Studio_Bind"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    },
                    {
                        "mal_id": 9,
                        "type": "anime",
                        "name": "Ecchi",
                        "url": "https://myanimelist.net/anime/genre/9/Ecchi"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 50360,
                "url": "https://myanimelist.net/anime/50360/Mushoku_Tensei__Isekai_Ittara_Honki_Dasu_-_Eris_no_Goblin_Toubatsu",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1094/120148.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1094/120148t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1094/120148l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1094/120148.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1094/120148t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1094/120148l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "D_u6BZYp93U",
                    "url": "https://www.youtube.com/watch?v=D_u6BZYp93U",
                    "embed_url": "https://www.youtube.com/embed/D_u6BZYp93U?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/D_u6BZYp93U/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/D_u6BZYp93U/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/D_u6BZYp93U/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/D_u6BZYp93U/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/D_u6BZYp93U/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Mushoku Tensei: Isekai Ittara Honki Dasu - Eris no Goblin Toubatsu"
                    },
                    {
                        "type": "Synonym",
                        "title": "Mushoku Tensei: Jobless Reincarnation Special"
                    },
                    {
                        "type": "Synonym",
                        "title": "Mushoku Tensei: Isekai Ittara Honki Dasu Special"
                    },
                    {
                        "type": "Japanese",
                        "title": "無職転生 ～異世界行ったら本気だす～ エリスのゴブリン討伐"
                    },
                    {
                        "type": "English",
                        "title": "Mushoku Tensei: Jobless Reincarnation - Eris the Goblin Slayer"
                    }
                ],
                "title": "Mushoku Tensei: Isekai Ittara Honki Dasu - Eris no Goblin Toubatsu",
                "title_english": "Mushoku Tensei: Jobless Reincarnation - Eris the Goblin Slayer",
                "title_japanese": "無職転生 ～異世界行ったら本気だす～ エリスのゴブリン討伐",
                "title_synonyms": [
                    "Mushoku Tensei: Jobless Reincarnation Special",
                    "Mushoku Tensei: Isekai Ittara Honki Dasu Special"
                ],
                "type": "Special",
                "source": "Light novel",
                "episodes": 1,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2022-03-16T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 16,
                            "month": 3,
                            "year": 2022
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Mar 16, 2022"
                },
                "duration": "23 min",
                "rating": "R - 17+ (violence & profanity)",
                "score": 7.81,
                "scored_by": 101446,
                "rank": 979,
                "popularity": 1319,
                "members": 187437,
                "favorites": 600,
                "synopsis": "During their stay in the capital of Milishion, the adventurers of Dead End decide to split up for a day to run their errands. While Rudeus Greyrat has his plans derailed by a troublesome scene, the party's swordswoman, Eris Boreas Greyrat, finds herself with nothing to do. Deciding to embark on an adventure to slay goblins, Eris crosses paths with a cocky but talented mage named Cliff Grimoire. Though Eris refuses his company, Cliff stubbornly ignores her wishes and dares her to explore the perilous forest surrounding the city. Accepting his challenge, Eris ventures into the forest with the mage, where the two encounter something far more repulsive than mere goblins.\n\n[Written by MAL Rewrite]",
                "background": "Mushoku Tensei: Isekai Ittara Honki Dasu - Eris no Goblin Toubatsu is an unaired episode bundled with the fourth Mushoku Tensei: Isekai Ittara Honki Dasu Blu-ray volume.",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [
                    {
                        "mal_id": 61,
                        "type": "anime",
                        "name": "Frontier Works",
                        "url": "https://myanimelist.net/anime/producer/61/Frontier_Works"
                    },
                    {
                        "mal_id": 1143,
                        "type": "anime",
                        "name": "TOHO animation",
                        "url": "https://myanimelist.net/anime/producer/1143/TOHO_animation"
                    },
                    {
                        "mal_id": 1333,
                        "type": "anime",
                        "name": "Hakuhodo DY Music & Pictures",
                        "url": "https://myanimelist.net/anime/producer/1333/Hakuhodo_DY_Music___Pictures"
                    },
                    {
                        "mal_id": 1416,
                        "type": "anime",
                        "name": "BS11",
                        "url": "https://myanimelist.net/anime/producer/1416/BS11"
                    },
                    {
                        "mal_id": 1444,
                        "type": "anime",
                        "name": "Egg Firm",
                        "url": "https://myanimelist.net/anime/producer/1444/Egg_Firm"
                    },
                    {
                        "mal_id": 1696,
                        "type": "anime",
                        "name": "Kadokawa",
                        "url": "https://myanimelist.net/anime/producer/1696/Kadokawa"
                    },
                    {
                        "mal_id": 2289,
                        "type": "anime",
                        "name": "GREE Entertainment",
                        "url": "https://myanimelist.net/anime/producer/2289/GREE_Entertainment"
                    }
                ],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 1993,
                        "type": "anime",
                        "name": "Studio Bind",
                        "url": "https://myanimelist.net/anime/producer/1993/Studio_Bind"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 55888,
                "url": "https://myanimelist.net/anime/55888/Mushoku_Tensei_II__Isekai_Ittara_Honki_Dasu_Part_2",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1876/141251.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1876/141251t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1876/141251l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1876/141251.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1876/141251t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1876/141251l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "L5broLUI1m4",
                    "url": "https://www.youtube.com/watch?v=L5broLUI1m4",
                    "embed_url": "https://www.youtube.com/embed/L5broLUI1m4?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/L5broLUI1m4/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/L5broLUI1m4/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/L5broLUI1m4/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/L5broLUI1m4/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/L5broLUI1m4/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2"
                    },
                    {
                        "type": "Synonym",
                        "title": "Jobless Reincarnation: I Will Seriously Try If I Go To Another World"
                    },
                    {
                        "type": "Synonym",
                        "title": "Mushoku Tensei: Isekai Ittara Honki Dasu 2nd Season Part 2"
                    },
                    {
                        "type": "Japanese",
                        "title": "無職転生 II ～異世界行ったら本気だす～ (第2クール)"
                    },
                    {
                        "type": "English",
                        "title": "Mushoku Tensei: Jobless Reincarnation Season 2 Part 2"
                    }
                ],
                "title": "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2",
                "title_english": "Mushoku Tensei: Jobless Reincarnation Season 2 Part 2",
                "title_japanese": "無職転生 II ～異世界行ったら本気だす～ (第2クール)",
                "title_synonyms": [
                    "Jobless Reincarnation: I Will Seriously Try If I Go To Another World",
                    "Mushoku Tensei: Isekai Ittara Honki Dasu 2nd Season Part 2"
                ],
                "type": "TV",
                "source": "Light novel",
                "episodes": 12,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2024-04-08T00:00:00+00:00",
                    "to": "2024-07-01T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 8,
                            "month": 4,
                            "year": 2024
                        },
                        "to": {
                            "day": 1,
                            "month": 7,
                            "year": 2024
                        }
                    },
                    "string": "Apr 8, 2024 to Jul 1, 2024"
                },
                "duration": "23 min per ep",
                "rating": "R - 17+ (violence & profanity)",
                "score": 8.46,
                "scored_by": 206032,
                "rank": 154,
                "popularity": 577,
                "members": 410135,
                "favorites": 3488,
                "synopsis": "Following the faceless god Hitogami's advice seems to have worked wonders for Rudeus Greyrat. After enrolling into the University of Magic as he was told, Rudeus reunites with his childhood friend Sylphiette, who put a valiant effort into curing his condition. The two grow ever closer together and decide to host a wedding party, inviting the friends they have made over the years to announce and formalize their relationship.\n\nFor all his recent blessings, however, Rudeus' troubles are far from over. The research he is helping Shizuka Nanahoshi conduct hits a bottleneck, sending her into a deep slump much like he experienced in his previous life. Furthermore, a letter from his father, Paul, brings complications to Rudeus' relationships, and Sylphiette still knows next to nothing about his real background. In the face of these issues, Rudeus will have to apply the lessons he has learned in this new world to navigate through the challenges that come with living a life to its fullest.\n\n[Written by MAL Rewrite]",
                "background": "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2 was released on Blu-ray in two volumes from July 17, 2024, to September 18, 2024.",
                "season": "spring",
                "year": 2024,
                "broadcast": {
                    "day": "Mondays",
                    "time": "00:00",
                    "timezone": "Asia/Tokyo",
                    "string": "Mondays at 00:00 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 61,
                        "type": "anime",
                        "name": "Frontier Works",
                        "url": "https://myanimelist.net/anime/producer/61/Frontier_Works"
                    },
                    {
                        "mal_id": 1143,
                        "type": "anime",
                        "name": "TOHO animation",
                        "url": "https://myanimelist.net/anime/producer/1143/TOHO_animation"
                    },
                    {
                        "mal_id": 1333,
                        "type": "anime",
                        "name": "Hakuhodo DY Music & Pictures",
                        "url": "https://myanimelist.net/anime/producer/1333/Hakuhodo_DY_Music___Pictures"
                    },
                    {
                        "mal_id": 1416,
                        "type": "anime",
                        "name": "BS11",
                        "url": "https://myanimelist.net/anime/producer/1416/BS11"
                    },
                    {
                        "mal_id": 1444,
                        "type": "anime",
                        "name": "Egg Firm",
                        "url": "https://myanimelist.net/anime/producer/1444/Egg_Firm"
                    },
                    {
                        "mal_id": 1696,
                        "type": "anime",
                        "name": "Kadokawa",
                        "url": "https://myanimelist.net/anime/producer/1696/Kadokawa"
                    },
                    {
                        "mal_id": 2289,
                        "type": "anime",
                        "name": "GREE Entertainment",
                        "url": "https://myanimelist.net/anime/producer/2289/GREE_Entertainment"
                    }
                ],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 1993,
                        "type": "anime",
                        "name": "Studio Bind",
                        "url": "https://myanimelist.net/anime/producer/1993/Studio_Bind"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 2,
                        "type": "anime",
                        "name": "Adventure",
                        "url": "https://myanimelist.net/anime/genre/2/Adventure"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    },
                    {
                        "mal_id": 9,
                        "type": "anime",
                        "name": "Ecchi",
                        "url": "https://myanimelist.net/anime/genre/9/Ecchi"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 62,
                        "type": "anime",
                        "name": "Isekai",
                        "url": "https://myanimelist.net/anime/genre/62/Isekai"
                    },
                    {
                        "mal_id": 72,
                        "type": "anime",
                        "name": "Reincarnation",
                        "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
                    }
                ],
                "demographics": []
            }
        ],
    
    
        airing: function () {
            return this.data.filter(function (element, index) {
                return element.airing === true
            })
        },
      
    }
    
    console.log(TenseishitaraSlimeDattaKen)

    const football = {
        "league": {
                    "id": 39,
                    "name": "Premier League",
                    "country": "England",
                    "logo": "https://media.api-sports.io/football/leagues/39.png",
                    "flag": "https://media.api-sports.io/flags/gb.svg",
                    "season": 2022,
                    "standings": 
                        [
                            {
                                "rank": 1,
                                "team": {
                                    "id": 50,
                                    "name": "Manchester City",
                                    "logo": "https://media.api-sports.io/football/teams/50.png"
                                },
                                "points": 89,
                                "goalsDiff": 61,
                                "group": "Premier League",
                                "form": "LDWWW",
                                "status": "same",
                                "description": "Promotion - Champions League (Group Stage: )",
                                "all": {
                                    "played": 38,
                                    "win": 28,
                                    "draw": 5,
                                    "lose": 5,
                                    "goals": {
                                        "for": 94,
                                        "against": 33
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 17,
                                    "draw": 1,
                                    "lose": 1,
                                    "goals": {
                                        "for": 60,
                                        "against": 17
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 11,
                                    "draw": 4,
                                    "lose": 4,
                                    "goals": {
                                        "for": 34,
                                        "against": 16
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 2,
                                "team": {
                                    "id": 42,
                                    "name": "Arsenal",
                                    "logo": "https://media.api-sports.io/football/teams/42.png"
                                },
                                "points": 84,
                                "goalsDiff": 45,
                                "group": "Premier League",
                                "form": "WLLWW",
                                "status": "same",
                                "description": "Promotion - Champions League (Group Stage: )",
                                "all": {
                                    "played": 38,
                                    "win": 26,
                                    "draw": 6,
                                    "lose": 6,
                                    "goals": {
                                        "for": 88,
                                        "against": 43
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 14,
                                    "draw": 3,
                                    "lose": 2,
                                    "goals": {
                                        "for": 53,
                                        "against": 25
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 12,
                                    "draw": 3,
                                    "lose": 4,
                                    "goals": {
                                        "for": 35,
                                        "against": 18
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 3,
                                "team": {
                                    "id": 33,
                                    "name": "Manchester United",
                                    "logo": "https://media.api-sports.io/football/teams/33.png"
                                },
                                "points": 75,
                                "goalsDiff": 15,
                                "group": "Premier League",
                                "form": "WWWWL",
                                "status": "same",
                                "description": "Promotion - Champions League (Group Stage: )",
                                "all": {
                                    "played": 38,
                                    "win": 23,
                                    "draw": 6,
                                    "lose": 9,
                                    "goals": {
                                        "for": 58,
                                        "against": 43
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 15,
                                    "draw": 3,
                                    "lose": 1,
                                    "goals": {
                                        "for": 36,
                                        "against": 10
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 8,
                                    "draw": 3,
                                    "lose": 8,
                                    "goals": {
                                        "for": 22,
                                        "against": 33
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 4,
                                "team": {
                                    "id": 34,
                                    "name": "Newcastle",
                                    "logo": "https://media.api-sports.io/football/teams/34.png"
                                },
                                "points": 71,
                                "goalsDiff": 35,
                                "group": "Premier League",
                                "form": "DDWDL",
                                "status": "same",
                                "description": "Promotion - Champions League (Group Stage: )",
                                "all": {
                                    "played": 38,
                                    "win": 19,
                                    "draw": 14,
                                    "lose": 5,
                                    "goals": {
                                        "for": 68,
                                        "against": 33
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 11,
                                    "draw": 6,
                                    "lose": 2,
                                    "goals": {
                                        "for": 36,
                                        "against": 14
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 8,
                                    "draw": 8,
                                    "lose": 3,
                                    "goals": {
                                        "for": 32,
                                        "against": 19
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 5,
                                "team": {
                                    "id": 40,
                                    "name": "Liverpool",
                                    "logo": "https://media.api-sports.io/football/teams/40.png"
                                },
                                "points": 67,
                                "goalsDiff": 28,
                                "group": "Premier League",
                                "form": "DDWWW",
                                "status": "same",
                                "description": "Promotion - Europa League (Group Stage: )",
                                "all": {
                                    "played": 38,
                                    "win": 19,
                                    "draw": 10,
                                    "lose": 9,
                                    "goals": {
                                        "for": 75,
                                        "against": 47
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 13,
                                    "draw": 5,
                                    "lose": 1,
                                    "goals": {
                                        "for": 46,
                                        "against": 17
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 6,
                                    "draw": 5,
                                    "lose": 8,
                                    "goals": {
                                        "for": 29,
                                        "against": 30
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 6,
                                "team": {
                                    "id": 51,
                                    "name": "Brighton",
                                    "logo": "https://media.api-sports.io/football/teams/51.png"
                                },
                                "points": 62,
                                "goalsDiff": 19,
                                "group": "Premier League",
                                "form": "LDWLW",
                                "status": "same",
                                "description": "Promotion - Europa League (Group Stage: )",
                                "all": {
                                    "played": 38,
                                    "win": 18,
                                    "draw": 8,
                                    "lose": 12,
                                    "goals": {
                                        "for": 72,
                                        "against": 53
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 10,
                                    "draw": 4,
                                    "lose": 5,
                                    "goals": {
                                        "for": 37,
                                        "against": 21
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 8,
                                    "draw": 4,
                                    "lose": 7,
                                    "goals": {
                                        "for": 35,
                                        "against": 32
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 7,
                                "team": {
                                    "id": 66,
                                    "name": "Aston Villa",
                                    "logo": "https://media.api-sports.io/football/teams/66.png"
                                },
                                "points": 61,
                                "goalsDiff": 5,
                                "group": "Premier League",
                                "form": "WDWLL",
                                "status": "same",
                                "description": "Promotion - Europa Conference League (Qualification: )",
                                "all": {
                                    "played": 38,
                                    "win": 18,
                                    "draw": 7,
                                    "lose": 13,
                                    "goals": {
                                        "for": 51,
                                        "against": 46
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 12,
                                    "draw": 2,
                                    "lose": 5,
                                    "goals": {
                                        "for": 33,
                                        "against": 21
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 6,
                                    "draw": 5,
                                    "lose": 8,
                                    "goals": {
                                        "for": 18,
                                        "against": 25
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 8,
                                "team": {
                                    "id": 47,
                                    "name": "Tottenham",
                                    "logo": "https://media.api-sports.io/football/teams/47.png"
                                },
                                "points": 60,
                                "goalsDiff": 7,
                                "group": "Premier League",
                                "form": "WLLWL",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 18,
                                    "draw": 6,
                                    "lose": 14,
                                    "goals": {
                                        "for": 70,
                                        "against": 63
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 12,
                                    "draw": 1,
                                    "lose": 6,
                                    "goals": {
                                        "for": 37,
                                        "against": 25
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 6,
                                    "draw": 5,
                                    "lose": 8,
                                    "goals": {
                                        "for": 33,
                                        "against": 38
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 9,
                                "team": {
                                    "id": 55,
                                    "name": "Brentford",
                                    "logo": "https://media.api-sports.io/football/teams/55.png"
                                },
                                "points": 59,
                                "goalsDiff": 12,
                                "group": "Premier League",
                                "form": "WWWLW",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 15,
                                    "draw": 14,
                                    "lose": 9,
                                    "goals": {
                                        "for": 58,
                                        "against": 46
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 10,
                                    "draw": 7,
                                    "lose": 2,
                                    "goals": {
                                        "for": 35,
                                        "against": 18
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 5,
                                    "draw": 7,
                                    "lose": 7,
                                    "goals": {
                                        "for": 23,
                                        "against": 28
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 10,
                                "team": {
                                    "id": 36,
                                    "name": "Fulham",
                                    "logo": "https://media.api-sports.io/football/teams/36.png"
                                },
                                "points": 52,
                                "goalsDiff": 2,
                                "group": "Premier League",
                                "form": "LDWWL",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 15,
                                    "draw": 7,
                                    "lose": 16,
                                    "goals": {
                                        "for": 55,
                                        "against": 53
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 8,
                                    "draw": 5,
                                    "lose": 6,
                                    "goals": {
                                        "for": 31,
                                        "against": 29
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 7,
                                    "draw": 2,
                                    "lose": 10,
                                    "goals": {
                                        "for": 24,
                                        "against": 24
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 11,
                                "team": {
                                    "id": 52,
                                    "name": "Crystal Palace",
                                    "logo": "https://media.api-sports.io/football/teams/52.png"
                                },
                                "points": 45,
                                "goalsDiff": -9,
                                "group": "Premier League",
                                "form": "DDWLW",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 11,
                                    "draw": 12,
                                    "lose": 15,
                                    "goals": {
                                        "for": 40,
                                        "against": 49
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 7,
                                    "draw": 7,
                                    "lose": 5,
                                    "goals": {
                                        "for": 21,
                                        "against": 23
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 4,
                                    "draw": 5,
                                    "lose": 10,
                                    "goals": {
                                        "for": 19,
                                        "against": 26
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 12,
                                "team": {
                                    "id": 49,
                                    "name": "Chelsea",
                                    "logo": "https://media.api-sports.io/football/teams/49.png"
                                },
                                "points": 44,
                                "goalsDiff": -9,
                                "group": "Premier League",
                                "form": "DLLDW",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 11,
                                    "draw": 11,
                                    "lose": 16,
                                    "goals": {
                                        "for": 38,
                                        "against": 47
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 6,
                                    "draw": 7,
                                    "lose": 6,
                                    "goals": {
                                        "for": 20,
                                        "against": 19
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 5,
                                    "draw": 4,
                                    "lose": 10,
                                    "goals": {
                                        "for": 18,
                                        "against": 28
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 13,
                                "team": {
                                    "id": 39,
                                    "name": "Wolves",
                                    "logo": "https://media.api-sports.io/football/teams/39.png"
                                },
                                "points": 41,
                                "goalsDiff": -27,
                                "group": "Premier League",
                                "form": "LDLWL",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 11,
                                    "draw": 8,
                                    "lose": 19,
                                    "goals": {
                                        "for": 31,
                                        "against": 58
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 9,
                                    "draw": 3,
                                    "lose": 7,
                                    "goals": {
                                        "for": 19,
                                        "against": 20
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 2,
                                    "draw": 5,
                                    "lose": 12,
                                    "goals": {
                                        "for": 12,
                                        "against": 38
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 14,
                                "team": {
                                    "id": 48,
                                    "name": "West Ham",
                                    "logo": "https://media.api-sports.io/football/teams/48.png"
                                },
                                "points": 40,
                                "goalsDiff": -13,
                                "group": "Premier League",
                                "form": "LWLWL",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 11,
                                    "draw": 7,
                                    "lose": 20,
                                    "goals": {
                                        "for": 42,
                                        "against": 55
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 8,
                                    "draw": 4,
                                    "lose": 7,
                                    "goals": {
                                        "for": 26,
                                        "against": 24
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 3,
                                    "draw": 3,
                                    "lose": 13,
                                    "goals": {
                                        "for": 16,
                                        "against": 31
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 15,
                                "team": {
                                    "id": 35,
                                    "name": "Bournemouth",
                                    "logo": "https://media.api-sports.io/football/teams/35.png"
                                },
                                "points": 39,
                                "goalsDiff": -34,
                                "group": "Premier League",
                                "form": "LLLLW",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 11,
                                    "draw": 6,
                                    "lose": 21,
                                    "goals": {
                                        "for": 37,
                                        "against": 71
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 6,
                                    "draw": 4,
                                    "lose": 9,
                                    "goals": {
                                        "for": 20,
                                        "against": 28
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 5,
                                    "draw": 2,
                                    "lose": 12,
                                    "goals": {
                                        "for": 17,
                                        "against": 43
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 16,
                                "team": {
                                    "id": 65,
                                    "name": "Nottingham Forest",
                                    "logo": "https://media.api-sports.io/football/teams/65.png"
                                },
                                "points": 38,
                                "goalsDiff": -30,
                                "group": "Premier League",
                                "form": "DWDWL",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 9,
                                    "draw": 11,
                                    "lose": 18,
                                    "goals": {
                                        "for": 38,
                                        "against": 68
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 8,
                                    "draw": 6,
                                    "lose": 5,
                                    "goals": {
                                        "for": 27,
                                        "against": 24
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 1,
                                    "draw": 5,
                                    "lose": 13,
                                    "goals": {
                                        "for": 11,
                                        "against": 44
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 17,
                                "team": {
                                    "id": 45,
                                    "name": "Everton",
                                    "logo": "https://media.api-sports.io/football/teams/45.png"
                                },
                                "points": 36,
                                "goalsDiff": -23,
                                "group": "Premier League",
                                "form": "WDLWD",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 8,
                                    "draw": 12,
                                    "lose": 18,
                                    "goals": {
                                        "for": 34,
                                        "against": 57
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 6,
                                    "draw": 3,
                                    "lose": 10,
                                    "goals": {
                                        "for": 16,
                                        "against": 27
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 2,
                                    "draw": 9,
                                    "lose": 8,
                                    "goals": {
                                        "for": 18,
                                        "against": 30
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 18,
                                "team": {
                                    "id": 46,
                                    "name": "Leicester",
                                    "logo": "https://media.api-sports.io/football/teams/46.png"
                                },
                                "points": 34,
                                "goalsDiff": -17,
                                "group": "Premier League",
                                "form": "WDLLD",
                                "status": "same",
                                "description": "Relegation - Championship",
                                "all": {
                                    "played": 38,
                                    "win": 9,
                                    "draw": 7,
                                    "lose": 22,
                                    "goals": {
                                        "for": 51,
                                        "against": 68
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 5,
                                    "draw": 4,
                                    "lose": 10,
                                    "goals": {
                                        "for": 23,
                                        "against": 27
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 4,
                                    "draw": 3,
                                    "lose": 12,
                                    "goals": {
                                        "for": 28,
                                        "against": 41
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 19,
                                "team": {
                                    "id": 63,
                                    "name": "Leeds",
                                    "logo": "https://media.api-sports.io/football/teams/63.png"
                                },
                                "points": 31,
                                "goalsDiff": -30,
                                "group": "Premier League",
                                "form": "LLDLL",
                                "status": "same",
                                "description": "Relegation - Championship",
                                "all": {
                                    "played": 38,
                                    "win": 7,
                                    "draw": 10,
                                    "lose": 21,
                                    "goals": {
                                        "for": 48,
                                        "against": 78
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 5,
                                    "draw": 7,
                                    "lose": 7,
                                    "goals": {
                                        "for": 26,
                                        "against": 37
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 2,
                                    "draw": 3,
                                    "lose": 14,
                                    "goals": {
                                        "for": 22,
                                        "against": 41
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 20,
                                "team": {
                                    "id": 41,
                                    "name": "Southampton",
                                    "logo": "https://media.api-sports.io/football/teams/41.png"
                                },
                                "points": 25,
                                "goalsDiff": -37,
                                "group": "Premier League",
                                "form": "DLLLL",
                                "status": "same",
                                "description": "Relegation - Championship",
                                "all": {
                                    "played": 38,
                                    "win": 6,
                                    "draw": 7,
                                    "lose": 25,
                                    "goals": {
                                        "for": 36,
                                        "against": 73
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 2,
                                    "draw": 5,
                                    "lose": 12,
                                    "goals": {
                                        "for": 19,
                                        "against": 37
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 4,
                                    "draw": 2,
                                    "lose": 13,
                                    "goals": {
                                        "for": 17,
                                        "against": 36
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            }
                        ]
                    
                },
        champion: function() {
            return this.league.standings.filter(function(element, index) {
                return element.rank === 1
            })
        },
        top4: function() {
            return this.league.standings.filter(function(element, index) {
                return element.rank < 5
            })
        },
        Relegated: function() {
            return this.league.standings.filter(function(element, index) {
                return element.rank > 17
            })
        }
    }
    
    console.log(football.champion())
    console.log(football.top4())
    console.log(football.Relegated())

    const football = {
        "league": {
                    "id": 39,
                    "name": "Premier League",
                    "country": "England",
                    "logo": "https://media.api-sports.io/football/leagues/39.png",
                    "flag": "https://media.api-sports.io/flags/gb.svg",
                    "season": 2022,
                    "standings": 
                        [
                            {
                                "rank": 1,
                                "team": {
                                    "id": 50,
                                    "name": "Manchester City",
                                    "logo": "https://media.api-sports.io/football/teams/50.png"
                                },
                                "points": 89,
                                "goalsDiff": 61,
                                "group": "Premier League",
                                "form": "LDWWW",
                                "status": "same",
                                "description": "Promotion - Champions League (Group Stage: )",
                                "all": {
                                    "played": 38,
                                    "win": 28,
                                    "draw": 5,
                                    "lose": 5,
                                    "goals": {
                                        "for": 94,
                                        "against": 33
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 17,
                                    "draw": 1,
                                    "lose": 1,
                                    "goals": {
                                        "for": 60,
                                        "against": 17
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 11,
                                    "draw": 4,
                                    "lose": 4,
                                    "goals": {
                                        "for": 34,
                                        "against": 16
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 2,
                                "team": {
                                    "id": 42,
                                    "name": "Arsenal",
                                    "logo": "https://media.api-sports.io/football/teams/42.png"
                                },
                                "points": 84,
                                "goalsDiff": 45,
                                "group": "Premier League",
                                "form": "WLLWW",
                                "status": "same",
                                "description": "Promotion - Champions League (Group Stage: )",
                                "all": {
                                    "played": 38,
                                    "win": 26,
                                    "draw": 6,
                                    "lose": 6,
                                    "goals": {
                                        "for": 88,
                                        "against": 43
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 14,
                                    "draw": 3,
                                    "lose": 2,
                                    "goals": {
                                        "for": 53,
                                        "against": 25
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 12,
                                    "draw": 3,
                                    "lose": 4,
                                    "goals": {
                                        "for": 35,
                                        "against": 18
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 3,
                                "team": {
                                    "id": 33,
                                    "name": "Manchester United",
                                    "logo": "https://media.api-sports.io/football/teams/33.png"
                                },
                                "points": 75,
                                "goalsDiff": 15,
                                "group": "Premier League",
                                "form": "WWWWL",
                                "status": "same",
                                "description": "Promotion - Champions League (Group Stage: )",
                                "all": {
                                    "played": 38,
                                    "win": 23,
                                    "draw": 6,
                                    "lose": 9,
                                    "goals": {
                                        "for": 58,
                                        "against": 43
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 15,
                                    "draw": 3,
                                    "lose": 1,
                                    "goals": {
                                        "for": 36,
                                        "against": 10
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 8,
                                    "draw": 3,
                                    "lose": 8,
                                    "goals": {
                                        "for": 22,
                                        "against": 33
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 4,
                                "team": {
                                    "id": 34,
                                    "name": "Newcastle",
                                    "logo": "https://media.api-sports.io/football/teams/34.png"
                                },
                                "points": 71,
                                "goalsDiff": 35,
                                "group": "Premier League",
                                "form": "DDWDL",
                                "status": "same",
                                "description": "Promotion - Champions League (Group Stage: )",
                                "all": {
                                    "played": 38,
                                    "win": 19,
                                    "draw": 14,
                                    "lose": 5,
                                    "goals": {
                                        "for": 68,
                                        "against": 33
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 11,
                                    "draw": 6,
                                    "lose": 2,
                                    "goals": {
                                        "for": 36,
                                        "against": 14
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 8,
                                    "draw": 8,
                                    "lose": 3,
                                    "goals": {
                                        "for": 32,
                                        "against": 19
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 5,
                                "team": {
                                    "id": 40,
                                    "name": "Liverpool",
                                    "logo": "https://media.api-sports.io/football/teams/40.png"
                                },
                                "points": 67,
                                "goalsDiff": 28,
                                "group": "Premier League",
                                "form": "DDWWW",
                                "status": "same",
                                "description": "Promotion - Europa League (Group Stage: )",
                                "all": {
                                    "played": 38,
                                    "win": 19,
                                    "draw": 10,
                                    "lose": 9,
                                    "goals": {
                                        "for": 75,
                                        "against": 47
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 13,
                                    "draw": 5,
                                    "lose": 1,
                                    "goals": {
                                        "for": 46,
                                        "against": 17
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 6,
                                    "draw": 5,
                                    "lose": 8,
                                    "goals": {
                                        "for": 29,
                                        "against": 30
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 6,
                                "team": {
                                    "id": 51,
                                    "name": "Brighton",
                                    "logo": "https://media.api-sports.io/football/teams/51.png"
                                },
                                "points": 62,
                                "goalsDiff": 19,
                                "group": "Premier League",
                                "form": "LDWLW",
                                "status": "same",
                                "description": "Promotion - Europa League (Group Stage: )",
                                "all": {
                                    "played": 38,
                                    "win": 18,
                                    "draw": 8,
                                    "lose": 12,
                                    "goals": {
                                        "for": 72,
                                        "against": 53
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 10,
                                    "draw": 4,
                                    "lose": 5,
                                    "goals": {
                                        "for": 37,
                                        "against": 21
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 8,
                                    "draw": 4,
                                    "lose": 7,
                                    "goals": {
                                        "for": 35,
                                        "against": 32
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 7,
                                "team": {
                                    "id": 66,
                                    "name": "Aston Villa",
                                    "logo": "https://media.api-sports.io/football/teams/66.png"
                                },
                                "points": 61,
                                "goalsDiff": 5,
                                "group": "Premier League",
                                "form": "WDWLL",
                                "status": "same",
                                "description": "Promotion - Europa Conference League (Qualification: )",
                                "all": {
                                    "played": 38,
                                    "win": 18,
                                    "draw": 7,
                                    "lose": 13,
                                    "goals": {
                                        "for": 51,
                                        "against": 46
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 12,
                                    "draw": 2,
                                    "lose": 5,
                                    "goals": {
                                        "for": 33,
                                        "against": 21
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 6,
                                    "draw": 5,
                                    "lose": 8,
                                    "goals": {
                                        "for": 18,
                                        "against": 25
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 8,
                                "team": {
                                    "id": 47,
                                    "name": "Tottenham",
                                    "logo": "https://media.api-sports.io/football/teams/47.png"
                                },
                                "points": 60,
                                "goalsDiff": 7,
                                "group": "Premier League",
                                "form": "WLLWL",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 18,
                                    "draw": 6,
                                    "lose": 14,
                                    "goals": {
                                        "for": 70,
                                        "against": 63
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 12,
                                    "draw": 1,
                                    "lose": 6,
                                    "goals": {
                                        "for": 37,
                                        "against": 25
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 6,
                                    "draw": 5,
                                    "lose": 8,
                                    "goals": {
                                        "for": 33,
                                        "against": 38
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 9,
                                "team": {
                                    "id": 55,
                                    "name": "Brentford",
                                    "logo": "https://media.api-sports.io/football/teams/55.png"
                                },
                                "points": 59,
                                "goalsDiff": 12,
                                "group": "Premier League",
                                "form": "WWWLW",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 15,
                                    "draw": 14,
                                    "lose": 9,
                                    "goals": {
                                        "for": 58,
                                        "against": 46
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 10,
                                    "draw": 7,
                                    "lose": 2,
                                    "goals": {
                                        "for": 35,
                                        "against": 18
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 5,
                                    "draw": 7,
                                    "lose": 7,
                                    "goals": {
                                        "for": 23,
                                        "against": 28
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 10,
                                "team": {
                                    "id": 36,
                                    "name": "Fulham",
                                    "logo": "https://media.api-sports.io/football/teams/36.png"
                                },
                                "points": 52,
                                "goalsDiff": 2,
                                "group": "Premier League",
                                "form": "LDWWL",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 15,
                                    "draw": 7,
                                    "lose": 16,
                                    "goals": {
                                        "for": 55,
                                        "against": 53
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 8,
                                    "draw": 5,
                                    "lose": 6,
                                    "goals": {
                                        "for": 31,
                                        "against": 29
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 7,
                                    "draw": 2,
                                    "lose": 10,
                                    "goals": {
                                        "for": 24,
                                        "against": 24
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 11,
                                "team": {
                                    "id": 52,
                                    "name": "Crystal Palace",
                                    "logo": "https://media.api-sports.io/football/teams/52.png"
                                },
                                "points": 45,
                                "goalsDiff": -9,
                                "group": "Premier League",
                                "form": "DDWLW",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 11,
                                    "draw": 12,
                                    "lose": 15,
                                    "goals": {
                                        "for": 40,
                                        "against": 49
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 7,
                                    "draw": 7,
                                    "lose": 5,
                                    "goals": {
                                        "for": 21,
                                        "against": 23
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 4,
                                    "draw": 5,
                                    "lose": 10,
                                    "goals": {
                                        "for": 19,
                                        "against": 26
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 12,
                                "team": {
                                    "id": 49,
                                    "name": "Chelsea",
                                    "logo": "https://media.api-sports.io/football/teams/49.png"
                                },
                                "points": 44,
                                "goalsDiff": -9,
                                "group": "Premier League",
                                "form": "DLLDW",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 11,
                                    "draw": 11,
                                    "lose": 16,
                                    "goals": {
                                        "for": 38,
                                        "against": 47
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 6,
                                    "draw": 7,
                                    "lose": 6,
                                    "goals": {
                                        "for": 20,
                                        "against": 19
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 5,
                                    "draw": 4,
                                    "lose": 10,
                                    "goals": {
                                        "for": 18,
                                        "against": 28
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 13,
                                "team": {
                                    "id": 39,
                                    "name": "Wolves",
                                    "logo": "https://media.api-sports.io/football/teams/39.png"
                                },
                                "points": 41,
                                "goalsDiff": -27,
                                "group": "Premier League",
                                "form": "LDLWL",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 11,
                                    "draw": 8,
                                    "lose": 19,
                                    "goals": {
                                        "for": 31,
                                        "against": 58
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 9,
                                    "draw": 3,
                                    "lose": 7,
                                    "goals": {
                                        "for": 19,
                                        "against": 20
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 2,
                                    "draw": 5,
                                    "lose": 12,
                                    "goals": {
                                        "for": 12,
                                        "against": 38
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 14,
                                "team": {
                                    "id": 48,
                                    "name": "West Ham",
                                    "logo": "https://media.api-sports.io/football/teams/48.png"
                                },
                                "points": 40,
                                "goalsDiff": -13,
                                "group": "Premier League",
                                "form": "LWLWL",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 11,
                                    "draw": 7,
                                    "lose": 20,
                                    "goals": {
                                        "for": 42,
                                        "against": 55
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 8,
                                    "draw": 4,
                                    "lose": 7,
                                    "goals": {
                                        "for": 26,
                                        "against": 24
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 3,
                                    "draw": 3,
                                    "lose": 13,
                                    "goals": {
                                        "for": 16,
                                        "against": 31
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 15,
                                "team": {
                                    "id": 35,
                                    "name": "Bournemouth",
                                    "logo": "https://media.api-sports.io/football/teams/35.png"
                                },
                                "points": 39,
                                "goalsDiff": -34,
                                "group": "Premier League",
                                "form": "LLLLW",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 11,
                                    "draw": 6,
                                    "lose": 21,
                                    "goals": {
                                        "for": 37,
                                        "against": 71
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 6,
                                    "draw": 4,
                                    "lose": 9,
                                    "goals": {
                                        "for": 20,
                                        "against": 28
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 5,
                                    "draw": 2,
                                    "lose": 12,
                                    "goals": {
                                        "for": 17,
                                        "against": 43
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 16,
                                "team": {
                                    "id": 65,
                                    "name": "Nottingham Forest",
                                    "logo": "https://media.api-sports.io/football/teams/65.png"
                                },
                                "points": 38,
                                "goalsDiff": -30,
                                "group": "Premier League",
                                "form": "DWDWL",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 9,
                                    "draw": 11,
                                    "lose": 18,
                                    "goals": {
                                        "for": 38,
                                        "against": 68
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 8,
                                    "draw": 6,
                                    "lose": 5,
                                    "goals": {
                                        "for": 27,
                                        "against": 24
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 1,
                                    "draw": 5,
                                    "lose": 13,
                                    "goals": {
                                        "for": 11,
                                        "against": 44
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 17,
                                "team": {
                                    "id": 45,
                                    "name": "Everton",
                                    "logo": "https://media.api-sports.io/football/teams/45.png"
                                },
                                "points": 36,
                                "goalsDiff": -23,
                                "group": "Premier League",
                                "form": "WDLWD",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 8,
                                    "draw": 12,
                                    "lose": 18,
                                    "goals": {
                                        "for": 34,
                                        "against": 57
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 6,
                                    "draw": 3,
                                    "lose": 10,
                                    "goals": {
                                        "for": 16,
                                        "against": 27
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 2,
                                    "draw": 9,
                                    "lose": 8,
                                    "goals": {
                                        "for": 18,
                                        "against": 30
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 18,
                                "team": {
                                    "id": 46,
                                    "name": "Leicester",
                                    "logo": "https://media.api-sports.io/football/teams/46.png"
                                },
                                "points": 34,
                                "goalsDiff": -17,
                                "group": "Premier League",
                                "form": "WDLLD",
                                "status": "same",
                                "description": "Relegation - Championship",
                                "all": {
                                    "played": 38,
                                    "win": 9,
                                    "draw": 7,
                                    "lose": 22,
                                    "goals": {
                                        "for": 51,
                                        "against": 68
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 5,
                                    "draw": 4,
                                    "lose": 10,
                                    "goals": {
                                        "for": 23,
                                        "against": 27
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 4,
                                    "draw": 3,
                                    "lose": 12,
                                    "goals": {
                                        "for": 28,
                                        "against": 41
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 19,
                                "team": {
                                    "id": 63,
                                    "name": "Leeds",
                                    "logo": "https://media.api-sports.io/football/teams/63.png"
                                },
                                "points": 31,
                                "goalsDiff": -30,
                                "group": "Premier League",
                                "form": "LLDLL",
                                "status": "same",
                                "description": "Relegation - Championship",
                                "all": {
                                    "played": 38,
                                    "win": 7,
                                    "draw": 10,
                                    "lose": 21,
                                    "goals": {
                                        "for": 48,
                                        "against": 78
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 5,
                                    "draw": 7,
                                    "lose": 7,
                                    "goals": {
                                        "for": 26,
                                        "against": 37
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 2,
                                    "draw": 3,
                                    "lose": 14,
                                    "goals": {
                                        "for": 22,
                                        "against": 41
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 20,
                                "team": {
                                    "id": 41,
                                    "name": "Southampton",
                                    "logo": "https://media.api-sports.io/football/teams/41.png"
                                },
                                "points": 25,
                                "goalsDiff": -37,
                                "group": "Premier League",
                                "form": "DLLLL",
                                "status": "same",
                                "description": "Relegation - Championship",
                                "all": {
                                    "played": 38,
                                    "win": 6,
                                    "draw": 7,
                                    "lose": 25,
                                    "goals": {
                                        "for": 36,
                                        "against": 73
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 2,
                                    "draw": 5,
                                    "lose": 12,
                                    "goals": {
                                        "for": 19,
                                        "against": 37
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 4,
                                    "draw": 2,
                                    "lose": 13,
                                    "goals": {
                                        "for": 17,
                                        "against": 36
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            }
                        ]
                    
                },
        champion: function() {
            return this.league.standings.filter(function(element, index) {
                return element.rank === 1
            })
        },
        top4: function() {
            return this.league.standings.filter(function(element, index) {
                return element.rank < 5
            })
        },
        Relegated: function() {
            return this.league.standings.filter(function(element, index) {
                return element.rank > 17
            })
        },
        like: function() {
            return this.league.standings.filter(function(element, index) {
                return element.team.name === 'Manchester City'
            })
        },
        goals: function() {
            return this.league.standings.filter(function(element,) {
                return element.team.name === 'Manchester City'
    
            }).map (function(element, index) {
                return {
                    forr: element.all.goals.for,
                    againsr: element.all.goals.against
                }
            })
        },
        score: function() {
            return this.league.standings.filter(function(element, index) {
                return element.points <40
            }).length
        },
        NegativeTeam: function() {
            return this.league.standings.filter(function(element, index) {
                return element.all.goals.against < 0
            }).length
        },
        LostInTheHouse: function() {
            return this.league.standings.filter(function(element, index) {
                return element.home.lose > 5
            }).length
        },
        LostoutTheHouse: function() {
            return this.league.standings.filter(function(element, index) {
                return element.away.lose > 5
            })
        } 
    }
    
    console.log(football.champion())
    console.log(football.top4())
    console.log(football.Relegated())
    console.log(football.like())
    console.log(football.goals())
    console.log(football.score())
    console.log(football.NegativeTeam())
    console.log(football.LostInTheHouse())
    console.log(football.LostoutTheHouse())
    