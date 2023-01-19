import React, {FC, useEffect, useState} from 'react';
import PlayList from "../PlayList/PlayList";
import axios from "axios";

const TheMain = () => {
    const CLIENT_ID = "308eaac3036f4c8480889a8119cf0a89"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const [albums, setAlbums] = useState([
        {
            "album_type": "album",
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                },
                "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                "name": "Selena Gomez",
                "type": "artist",
                "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
            }],
            "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BG", "BH", "BI", "BJ", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
            "copyrights": [{
                "text": "© 2019 Interscope Records",
                "type": "C"
            }, {
                "text": "℗ 2019 Interscope Records",
                "type": "P"
            }],
            "external_ids": {
                "upc": "00602508667497"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/album/3YPFaTR7WMi1Hd4NVKdCJx"
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/albums/3YPFaTR7WMi1Hd4NVKdCJx",
            "id": "3YPFaTR7WMi1Hd4NVKdCJx",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2732abcc266597eb46f897a8666",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e022abcc266597eb46f897a8666",
                "width": 300
            }, {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048512abcc266597eb46f897a8666",
                "width": 64
            }],
            "label": "Interscope Records",
            "name": "Rare",
            "popularity": 76,
            "release_date": "2020-01-10",
            "release_date_precision": "day",
            "total_tracks": 13,
            "tracks": {
                "href": "https://api.spotify.com/v1/albums/3YPFaTR7WMi1Hd4NVKdCJx/tracks?offset=0&limit=50&locale=uk-UA,uk;q=0.9,en-US;q=0.8,en;q=0.7",
                "items": [{
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BG", "BH", "BI", "BJ", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 220589,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/7HMmFQsKsljwTw8bS7lu19"
                    },
                    "href": "https://api.spotify.com/v1/tracks/7HMmFQsKsljwTw8bS7lu19",
                    "id": "7HMmFQsKsljwTw8bS7lu19",
                    "is_local": false,
                    "name": "Rare",
                    "preview_url": null,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:7HMmFQsKsljwTw8bS7lu19"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BG", "BH", "BI", "BJ", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 170498,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/5sK3o66yupTNIK6gWgzGjf"
                    },
                    "href": "https://api.spotify.com/v1/tracks/5sK3o66yupTNIK6gWgzGjf",
                    "id": "5sK3o66yupTNIK6gWgzGjf",
                    "is_local": false,
                    "name": "Dance Again",
                    "preview_url": null,
                    "track_number": 2,
                    "type": "track",
                    "uri": "spotify:track:5sK3o66yupTNIK6gWgzGjf"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BG", "BH", "BI", "BJ", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 162595,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/7eOkHIcaoUhngxxypM5Ajr"
                    },
                    "href": "https://api.spotify.com/v1/tracks/7eOkHIcaoUhngxxypM5Ajr",
                    "id": "7eOkHIcaoUhngxxypM5Ajr",
                    "is_local": false,
                    "name": "Look At Her Now",
                    "preview_url": null,
                    "track_number": 3,
                    "type": "track",
                    "uri": "spotify:track:7eOkHIcaoUhngxxypM5Ajr"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BG", "BH", "BI", "BJ", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 206458,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/4l0Mvzj72xxOpRrp6h8nHi"
                    },
                    "href": "https://api.spotify.com/v1/tracks/4l0Mvzj72xxOpRrp6h8nHi",
                    "id": "4l0Mvzj72xxOpRrp6h8nHi",
                    "is_local": false,
                    "name": "Lose You To Love Me",
                    "preview_url": null,
                    "track_number": 4,
                    "type": "track",
                    "uri": "spotify:track:4l0Mvzj72xxOpRrp6h8nHi"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BG", "BH", "BI", "BJ", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 148776,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/11Ey4yJVeWEsA73KjACkVY"
                    },
                    "href": "https://api.spotify.com/v1/tracks/11Ey4yJVeWEsA73KjACkVY",
                    "id": "11Ey4yJVeWEsA73KjACkVY",
                    "is_local": false,
                    "name": "Ring",
                    "preview_url": null,
                    "track_number": 5,
                    "type": "track",
                    "uri": "spotify:track:11Ey4yJVeWEsA73KjACkVY"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BG", "BH", "BI", "BJ", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 192172,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/11OwAR3GlBj9E35Cznf7Lj"
                    },
                    "href": "https://api.spotify.com/v1/tracks/11OwAR3GlBj9E35Cznf7Lj",
                    "id": "11OwAR3GlBj9E35Cznf7Lj",
                    "is_local": false,
                    "name": "Vulnerable",
                    "preview_url": null,
                    "track_number": 6,
                    "type": "track",
                    "uri": "spotify:track:11OwAR3GlBj9E35Cznf7Lj"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BG", "BH", "BI", "BJ", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 194900,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/63mdJr3NMY3wReOkNE6c6W"
                    },
                    "href": "https://api.spotify.com/v1/tracks/63mdJr3NMY3wReOkNE6c6W",
                    "id": "63mdJr3NMY3wReOkNE6c6W",
                    "is_local": false,
                    "name": "People You Know",
                    "preview_url": null,
                    "track_number": 7,
                    "type": "track",
                    "uri": "spotify:track:63mdJr3NMY3wReOkNE6c6W"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BG", "BH", "BI", "BJ", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 189145,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/0uFForNKQPvgSCnxlZIhQy"
                    },
                    "href": "https://api.spotify.com/v1/tracks/0uFForNKQPvgSCnxlZIhQy",
                    "id": "0uFForNKQPvgSCnxlZIhQy",
                    "is_local": false,
                    "name": "Let Me Get Me",
                    "preview_url": null,
                    "track_number": 8,
                    "type": "track",
                    "uri": "spotify:track:0uFForNKQPvgSCnxlZIhQy"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }, {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4IVAbR2w4JJNJDDRFP3E83"
                        },
                        "href": "https://api.spotify.com/v1/artists/4IVAbR2w4JJNJDDRFP3E83",
                        "id": "4IVAbR2w4JJNJDDRFP3E83",
                        "name": "6LACK",
                        "type": "artist",
                        "uri": "spotify:artist:4IVAbR2w4JJNJDDRFP3E83"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BG", "BH", "BI", "BJ", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 186459,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/2C0hTkdEoikhKzDCJl32QZ"
                    },
                    "href": "https://api.spotify.com/v1/tracks/2C0hTkdEoikhKzDCJl32QZ",
                    "id": "2C0hTkdEoikhKzDCJl32QZ",
                    "is_local": false,
                    "name": "Crowded Room (feat. 6LACK)",
                    "preview_url": null,
                    "track_number": 9,
                    "type": "track",
                    "uri": "spotify:track:2C0hTkdEoikhKzDCJl32QZ"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BG", "BH", "BI", "BJ", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 212436,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/59iGOjPSOcPLGl3vqEStUp"
                    },
                    "href": "https://api.spotify.com/v1/tracks/59iGOjPSOcPLGl3vqEStUp",
                    "id": "59iGOjPSOcPLGl3vqEStUp",
                    "is_local": false,
                    "name": "Kinda Crazy",
                    "preview_url": null,
                    "track_number": 10,
                    "type": "track",
                    "uri": "spotify:track:59iGOjPSOcPLGl3vqEStUp"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BG", "BH", "BI", "BJ", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 189382,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/64kfyGcf5dvbw92Vv4THCj"
                    },
                    "href": "https://api.spotify.com/v1/tracks/64kfyGcf5dvbw92Vv4THCj",
                    "id": "64kfyGcf5dvbw92Vv4THCj",
                    "is_local": false,
                    "name": "Fun",
                    "preview_url": null,
                    "track_number": 11,
                    "type": "track",
                    "uri": "spotify:track:64kfyGcf5dvbw92Vv4THCj"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BG", "BH", "BI", "BJ", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 182016,
                    "explicit": true,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/4OtHGdb0KqEbaWb6edUnR9"
                    },
                    "href": "https://api.spotify.com/v1/tracks/4OtHGdb0KqEbaWb6edUnR9",
                    "id": "4OtHGdb0KqEbaWb6edUnR9",
                    "is_local": false,
                    "name": "Cut You Off",
                    "preview_url": null,
                    "track_number": 12,
                    "type": "track",
                    "uri": "spotify:track:4OtHGdb0KqEbaWb6edUnR9"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }, {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0fA0VVWsXO9YnASrzqfmYu"
                        },
                        "href": "https://api.spotify.com/v1/artists/0fA0VVWsXO9YnASrzqfmYu",
                        "id": "0fA0VVWsXO9YnASrzqfmYu",
                        "name": "Kid Cudi",
                        "type": "artist",
                        "uri": "spotify:artist:0fA0VVWsXO9YnASrzqfmYu"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BG", "BH", "BI", "BJ", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 263305,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/4bb94wZVF1cX66vQjNeJTX"
                    },
                    "href": "https://api.spotify.com/v1/tracks/4bb94wZVF1cX66vQjNeJTX",
                    "id": "4bb94wZVF1cX66vQjNeJTX",
                    "is_local": false,
                    "name": "A Sweeter Place (feat. Kid Cudi)",
                    "preview_url": null,
                    "track_number": 13,
                    "type": "track",
                    "uri": "spotify:track:4bb94wZVF1cX66vQjNeJTX"
                }],
                "limit": 50,
                "next": null,
                "offset": 0,
                "previous": null,
                "total": 13
            },
            "type": "album",
            "uri": "spotify:album:3YPFaTR7WMi1Hd4NVKdCJx"
        },
        {
            "album_type": "album",
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                },
                "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                "name": "Selena Gomez",
                "type": "artist",
                "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
            }],
            "available_markets": ["AD", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "EC", "EE", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KZ", "LA", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "RO", "RS", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
            "copyrights": [{
                "text": "© 2015 Interscope Records",
                "type": "C"
            }, {
                "text": "℗ 2015 Interscope Records",
                "type": "P"
            }],
            "external_ids": {
                "upc": "00602547590879"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/album/3Kbuu2tHsIbplFUkB7a5oE"
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/albums/3Kbuu2tHsIbplFUkB7a5oE",
            "id": "3Kbuu2tHsIbplFUkB7a5oE",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2736bc7473df6c9d1fd90972e84",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e026bc7473df6c9d1fd90972e84",
                "width": 300
            }, {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048516bc7473df6c9d1fd90972e84",
                "width": 64
            }],
            "label": "Selena Gomez PS",
            "name": "Revival (Deluxe)",
            "popularity": 69,
            "release_date": "2015-10-09",
            "release_date_precision": "day",
            "total_tracks": 16,
            "tracks": {
                "href": "https://api.spotify.com/v1/albums/3Kbuu2tHsIbplFUkB7a5oE/tracks?offset=0&limit=50&locale=uk-UA,uk;q=0.9,en-US;q=0.8,en;q=0.7",
                "items": [{
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "EC", "EE", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KZ", "LA", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "RO", "RS", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 246400,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/5NB5uPFcHGmwfluq9Sqn3j"
                    },
                    "href": "https://api.spotify.com/v1/tracks/5NB5uPFcHGmwfluq9Sqn3j",
                    "id": "5NB5uPFcHGmwfluq9Sqn3j",
                    "is_local": false,
                    "name": "Revival",
                    "preview_url": null,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:5NB5uPFcHGmwfluq9Sqn3j"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "EC", "EE", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KZ", "LA", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "RO", "RS", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 217906,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/7KxhSJOYiqCDclXDBNlFSZ"
                    },
                    "href": "https://api.spotify.com/v1/tracks/7KxhSJOYiqCDclXDBNlFSZ",
                    "id": "7KxhSJOYiqCDclXDBNlFSZ",
                    "is_local": false,
                    "name": "Kill Em With Kindness",
                    "preview_url": null,
                    "track_number": 2,
                    "type": "track",
                    "uri": "spotify:track:7KxhSJOYiqCDclXDBNlFSZ"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "EC", "EE", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KZ", "LA", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "RO", "RS", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 200680,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/3CJvmtWw2bJsudbAC5uCQk"
                    },
                    "href": "https://api.spotify.com/v1/tracks/3CJvmtWw2bJsudbAC5uCQk",
                    "id": "3CJvmtWw2bJsudbAC5uCQk",
                    "is_local": false,
                    "name": "Hands To Myself",
                    "preview_url": null,
                    "track_number": 3,
                    "type": "track",
                    "uri": "spotify:track:3CJvmtWw2bJsudbAC5uCQk"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "EC", "EE", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KZ", "LA", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "RO", "RS", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 229080,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/6ZANrVuAMp2rpjhfbOuJly"
                    },
                    "href": "https://api.spotify.com/v1/tracks/6ZANrVuAMp2rpjhfbOuJly",
                    "id": "6ZANrVuAMp2rpjhfbOuJly",
                    "is_local": false,
                    "name": "Same Old Love",
                    "preview_url": null,
                    "track_number": 4,
                    "type": "track",
                    "uri": "spotify:track:6ZANrVuAMp2rpjhfbOuJly"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "EC", "EE", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KZ", "LA", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "RO", "RS", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 194826,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/3Fb4cttE912XgIeD25rXRn"
                    },
                    "href": "https://api.spotify.com/v1/tracks/3Fb4cttE912XgIeD25rXRn",
                    "id": "3Fb4cttE912XgIeD25rXRn",
                    "is_local": false,
                    "name": "Sober",
                    "preview_url": null,
                    "track_number": 5,
                    "type": "track",
                    "uri": "spotify:track:3Fb4cttE912XgIeD25rXRn"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }, {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/13ubrt8QOOCPljQ2FL1Kca"
                        },
                        "href": "https://api.spotify.com/v1/artists/13ubrt8QOOCPljQ2FL1Kca",
                        "id": "13ubrt8QOOCPljQ2FL1Kca",
                        "name": "A$AP Rocky",
                        "type": "artist",
                        "uri": "spotify:artist:13ubrt8QOOCPljQ2FL1Kca"
                    }],
                    "available_markets": ["AD", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "EC", "EE", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KZ", "LA", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "RO", "RS", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 221280,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/5xdVqHtFS0eLuNp4Z8Wbpa"
                    },
                    "href": "https://api.spotify.com/v1/tracks/5xdVqHtFS0eLuNp4Z8Wbpa",
                    "id": "5xdVqHtFS0eLuNp4Z8Wbpa",
                    "is_local": false,
                    "name": "Good For You",
                    "preview_url": null,
                    "track_number": 6,
                    "type": "track",
                    "uri": "spotify:track:5xdVqHtFS0eLuNp4Z8Wbpa"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "EC", "EE", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KZ", "LA", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "RO", "RS", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 249080,
                    "explicit": true,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/37IToWWYUc9nuH3ijz4tqV"
                    },
                    "href": "https://api.spotify.com/v1/tracks/37IToWWYUc9nuH3ijz4tqV",
                    "id": "37IToWWYUc9nuH3ijz4tqV",
                    "is_local": false,
                    "name": "Camouflage",
                    "preview_url": null,
                    "track_number": 7,
                    "type": "track",
                    "uri": "spotify:track:37IToWWYUc9nuH3ijz4tqV"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "EC", "EE", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KZ", "LA", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "RO", "RS", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 213426,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/4a32Q7bRtWDGSEMbyWKIlj"
                    },
                    "href": "https://api.spotify.com/v1/tracks/4a32Q7bRtWDGSEMbyWKIlj",
                    "id": "4a32Q7bRtWDGSEMbyWKIlj",
                    "is_local": false,
                    "name": "Me & The Rhythm",
                    "preview_url": null,
                    "track_number": 8,
                    "type": "track",
                    "uri": "spotify:track:4a32Q7bRtWDGSEMbyWKIlj"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "EC", "EE", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KZ", "LA", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "RO", "RS", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 221853,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/3gBxsj1226b38ZxdvsTyd1"
                    },
                    "href": "https://api.spotify.com/v1/tracks/3gBxsj1226b38ZxdvsTyd1",
                    "id": "3gBxsj1226b38ZxdvsTyd1",
                    "is_local": false,
                    "name": "Survivors",
                    "preview_url": null,
                    "track_number": 9,
                    "type": "track",
                    "uri": "spotify:track:3gBxsj1226b38ZxdvsTyd1"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "EC", "EE", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KZ", "LA", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "RO", "RS", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 207733,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/75rnLkvIeq8RZ8xjcFIvSG"
                    },
                    "href": "https://api.spotify.com/v1/tracks/75rnLkvIeq8RZ8xjcFIvSG",
                    "id": "75rnLkvIeq8RZ8xjcFIvSG",
                    "is_local": false,
                    "name": "Body Heat",
                    "preview_url": null,
                    "track_number": 10,
                    "type": "track",
                    "uri": "spotify:track:75rnLkvIeq8RZ8xjcFIvSG"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "EC", "EE", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KZ", "LA", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "RO", "RS", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 167253,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/4RUqWWMnkm0rZebrPikFWI"
                    },
                    "href": "https://api.spotify.com/v1/tracks/4RUqWWMnkm0rZebrPikFWI",
                    "id": "4RUqWWMnkm0rZebrPikFWI",
                    "is_local": false,
                    "name": "Rise",
                    "preview_url": null,
                    "track_number": 11,
                    "type": "track",
                    "uri": "spotify:track:4RUqWWMnkm0rZebrPikFWI"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "EC", "EE", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KZ", "LA", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "RO", "RS", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 210506,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/4i55R0S2I64mhS5biNbECZ"
                    },
                    "href": "https://api.spotify.com/v1/tracks/4i55R0S2I64mhS5biNbECZ",
                    "id": "4i55R0S2I64mhS5biNbECZ",
                    "is_local": false,
                    "name": "Me & My Girls",
                    "preview_url": null,
                    "track_number": 12,
                    "type": "track",
                    "uri": "spotify:track:4i55R0S2I64mhS5biNbECZ"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "EC", "EE", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KZ", "LA", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "RO", "RS", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 217440,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/4OuMdUzh9Lz82ACgQUYBbU"
                    },
                    "href": "https://api.spotify.com/v1/tracks/4OuMdUzh9Lz82ACgQUYBbU",
                    "id": "4OuMdUzh9Lz82ACgQUYBbU",
                    "is_local": false,
                    "name": "Nobody",
                    "preview_url": null,
                    "track_number": 13,
                    "type": "track",
                    "uri": "spotify:track:4OuMdUzh9Lz82ACgQUYBbU"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "EC", "EE", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KZ", "LA", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "RO", "RS", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 242640,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/2cMtkfv5jEb5UpIjJntl5g"
                    },
                    "href": "https://api.spotify.com/v1/tracks/2cMtkfv5jEb5UpIjJntl5g",
                    "id": "2cMtkfv5jEb5UpIjJntl5g",
                    "is_local": false,
                    "name": "Perfect",
                    "preview_url": null,
                    "track_number": 14,
                    "type": "track",
                    "uri": "spotify:track:2cMtkfv5jEb5UpIjJntl5g"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "EC", "EE", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KZ", "LA", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "RO", "RS", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 211960,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/6I4vrOusONJw4cUXRFyDZn"
                    },
                    "href": "https://api.spotify.com/v1/tracks/6I4vrOusONJw4cUXRFyDZn",
                    "id": "6I4vrOusONJw4cUXRFyDZn",
                    "is_local": false,
                    "name": "Outta My Hands (Loco)",
                    "preview_url": null,
                    "track_number": 15,
                    "type": "track",
                    "uri": "spotify:track:6I4vrOusONJw4cUXRFyDZn"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "EC", "EE", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KZ", "LA", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "RO", "RS", "RW", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 232453,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/4zvZj8TSRl3EeaeXzRl73k"
                    },
                    "href": "https://api.spotify.com/v1/tracks/4zvZj8TSRl3EeaeXzRl73k",
                    "id": "4zvZj8TSRl3EeaeXzRl73k",
                    "is_local": false,
                    "name": "Cologne",
                    "preview_url": null,
                    "track_number": 16,
                    "type": "track",
                    "uri": "spotify:track:4zvZj8TSRl3EeaeXzRl73k"
                }],
                "limit": 50,
                "next": null,
                "offset": 0,
                "previous": null,
                "total": 16
            },
            "type": "album",
            "uri": "spotify:album:3Kbuu2tHsIbplFUkB7a5oE"
        },
        {
            "album_type": "album",
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                },
                "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                "name": "Selena Gomez",
                "type": "artist",
                "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
            }],
            "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TR", "TT", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "XK", "ZA", "ZM", "ZW"],
            "copyrights": [{
                "text": "© 2013 Hollywood Records, Inc.",
                "type": "C"
            }, {
                "text": "℗ 2013 Hollywood Records, Inc.",
                "type": "P"
            }],
            "external_ids": {
                "upc": "00050087295493"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/album/3cGKAHAUhAaTTezK4GbBhQ"
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/albums/3cGKAHAUhAaTTezK4GbBhQ",
            "id": "3cGKAHAUhAaTTezK4GbBhQ",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2730e36690135fa1a30d048e604",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e020e36690135fa1a30d048e604",
                "width": 300
            }, {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048510e36690135fa1a30d048e604",
                "width": 64
            }],
            "label": "Hollywood Records",
            "name": "Stars Dance (Bonus Track Version)",
            "popularity": 64,
            "release_date": "2013-01-01",
            "release_date_precision": "day",
            "total_tracks": 13,
            "tracks": {
                "href": "https://api.spotify.com/v1/albums/3cGKAHAUhAaTTezK4GbBhQ/tracks?offset=0&limit=50&locale=uk-UA,uk;q=0.9,en-US;q=0.8,en;q=0.7",
                "items": [{
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TR", "TT", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 200640,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/345HZXxfL8S8HkVzytD1Pw"
                    },
                    "href": "https://api.spotify.com/v1/tracks/345HZXxfL8S8HkVzytD1Pw",
                    "id": "345HZXxfL8S8HkVzytD1Pw",
                    "is_local": false,
                    "name": "Birthday",
                    "preview_url": null,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:345HZXxfL8S8HkVzytD1Pw"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TR", "TT", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 210293,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/2OsEJFTfzfjG4oC92cuP2c"
                    },
                    "href": "https://api.spotify.com/v1/tracks/2OsEJFTfzfjG4oC92cuP2c",
                    "id": "2OsEJFTfzfjG4oC92cuP2c",
                    "is_local": false,
                    "name": "Slow Down",
                    "preview_url": null,
                    "track_number": 2,
                    "type": "track",
                    "uri": "spotify:track:2OsEJFTfzfjG4oC92cuP2c"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TR", "TT", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 217426,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/2MTMeQZLVI9yiZIXsCbzGi"
                    },
                    "href": "https://api.spotify.com/v1/tracks/2MTMeQZLVI9yiZIXsCbzGi",
                    "id": "2MTMeQZLVI9yiZIXsCbzGi",
                    "is_local": false,
                    "name": "Stars Dance",
                    "preview_url": null,
                    "track_number": 3,
                    "type": "track",
                    "uri": "spotify:track:2MTMeQZLVI9yiZIXsCbzGi"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TR", "TT", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 175760,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/6vftvAdsEAAJTGQrUmHnei"
                    },
                    "href": "https://api.spotify.com/v1/tracks/6vftvAdsEAAJTGQrUmHnei",
                    "id": "6vftvAdsEAAJTGQrUmHnei",
                    "is_local": false,
                    "name": "Like A Champion",
                    "preview_url": null,
                    "track_number": 4,
                    "type": "track",
                    "uri": "spotify:track:6vftvAdsEAAJTGQrUmHnei"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TR", "TT", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 231986,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/6LoQHIo74tOzQ8EsLEkhgF"
                    },
                    "href": "https://api.spotify.com/v1/tracks/6LoQHIo74tOzQ8EsLEkhgF",
                    "id": "6LoQHIo74tOzQ8EsLEkhgF",
                    "is_local": false,
                    "name": "Come & Get It",
                    "preview_url": null,
                    "track_number": 5,
                    "type": "track",
                    "uri": "spotify:track:6LoQHIo74tOzQ8EsLEkhgF"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TR", "TT", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 251480,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/7D39d96OheT62fgxoGaElz"
                    },
                    "href": "https://api.spotify.com/v1/tracks/7D39d96OheT62fgxoGaElz",
                    "id": "7D39d96OheT62fgxoGaElz",
                    "is_local": false,
                    "name": "Forget Forever",
                    "preview_url": null,
                    "track_number": 6,
                    "type": "track",
                    "uri": "spotify:track:7D39d96OheT62fgxoGaElz"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TR", "TT", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 232973,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/594fJDaRhC2bcHilqoc8U4"
                    },
                    "href": "https://api.spotify.com/v1/tracks/594fJDaRhC2bcHilqoc8U4",
                    "id": "594fJDaRhC2bcHilqoc8U4",
                    "is_local": false,
                    "name": "Save The Day",
                    "preview_url": null,
                    "track_number": 7,
                    "type": "track",
                    "uri": "spotify:track:594fJDaRhC2bcHilqoc8U4"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TR", "TT", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 184453,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/5KzBPwPBbMKQwK9OFOwBtV"
                    },
                    "href": "https://api.spotify.com/v1/tracks/5KzBPwPBbMKQwK9OFOwBtV",
                    "id": "5KzBPwPBbMKQwK9OFOwBtV",
                    "is_local": false,
                    "name": "B.E.A.T.",
                    "preview_url": null,
                    "track_number": 8,
                    "type": "track",
                    "uri": "spotify:track:5KzBPwPBbMKQwK9OFOwBtV"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TR", "TT", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 196840,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/7xWZ6yrBuZF3E9iYnUNs3C"
                    },
                    "href": "https://api.spotify.com/v1/tracks/7xWZ6yrBuZF3E9iYnUNs3C",
                    "id": "7xWZ6yrBuZF3E9iYnUNs3C",
                    "is_local": false,
                    "name": "Write Your Name",
                    "preview_url": null,
                    "track_number": 9,
                    "type": "track",
                    "uri": "spotify:track:7xWZ6yrBuZF3E9iYnUNs3C"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TR", "TT", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 233360,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/3RrJTOClOgMAc9FQ7QDwv7"
                    },
                    "href": "https://api.spotify.com/v1/tracks/3RrJTOClOgMAc9FQ7QDwv7",
                    "id": "3RrJTOClOgMAc9FQ7QDwv7",
                    "is_local": false,
                    "name": "Undercover",
                    "preview_url": null,
                    "track_number": 10,
                    "type": "track",
                    "uri": "spotify:track:3RrJTOClOgMAc9FQ7QDwv7"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TR", "TT", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 210360,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/0OkJtCF6yQIdK11ge58uXD"
                    },
                    "href": "https://api.spotify.com/v1/tracks/0OkJtCF6yQIdK11ge58uXD",
                    "id": "0OkJtCF6yQIdK11ge58uXD",
                    "is_local": false,
                    "name": "Love Will Remember",
                    "preview_url": null,
                    "track_number": 11,
                    "type": "track",
                    "uri": "spotify:track:0OkJtCF6yQIdK11ge58uXD"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TR", "TT", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 236400,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/3PVor2DGqdPBqGNcQX60fD"
                    },
                    "href": "https://api.spotify.com/v1/tracks/3PVor2DGqdPBqGNcQX60fD",
                    "id": "3PVor2DGqdPBqGNcQX60fD",
                    "is_local": false,
                    "name": "Nobody Does It Like You - Bonus Track",
                    "preview_url": null,
                    "track_number": 12,
                    "type": "track",
                    "uri": "spotify:track:3PVor2DGqdPBqGNcQX60fD"
                }, {
                    "artists": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                        },
                        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                        "name": "Selena Gomez",
                        "type": "artist",
                        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                    }],
                    "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TR", "TT", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "XK", "ZA", "ZM", "ZW"],
                    "disc_number": 1,
                    "duration_ms": 190106,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/7qjWYlQwqMwgxJb2PbFXhU"
                    },
                    "href": "https://api.spotify.com/v1/tracks/7qjWYlQwqMwgxJb2PbFXhU",
                    "id": "7qjWYlQwqMwgxJb2PbFXhU",
                    "is_local": false,
                    "name": "Music Feels Better - Bonus Track",
                    "preview_url": null,
                    "track_number": 13,
                    "type": "track",
                    "uri": "spotify:track:7qjWYlQwqMwgxJb2PbFXhU"
                }],
                "limit": 50,
                "next": null,
                "offset": 0,
                "previous": null,
                "total": 13
            },
            "type": "album",
            "uri": "spotify:album:3cGKAHAUhAaTTezK4GbBhQ"
        }
    ])
    const [token, setToken] = useState("")

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem('token')
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
        setToken(token)
    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const searchArtists = async () => {
        const {data} = await axios.get("\thttps://api.spotify.com/v1/albums", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                ids: '3YPFaTR7WMi1Hd4NVKdCJx,' +
                    '3Kbuu2tHsIbplFUkB7a5oE,' +
                    '3cGKAHAUhAaTTezK4GbBhQ,' +
                    '32iAEBstCjauDhyKpGjTuq,' +
                    '3T4tUhGYeRNVUGevb0wThu,' +
                    '47BiFcV59TQi2s9SkBo2pb,' +
                    '1kTlYbs28MXw7hwO0NLYif,' +
                    '1ORxRsK3MrSLvh7VQTF01F,' +
                    '5VoeRuTrGhTbKelUfwymwu,' +
                    '0JGOiO34nwfUdDrD612dOp',
                // type: "tracks"
            }
        })

        setAlbums(data.albums)
    }
    useEffect(() => {
        searchArtists()
    }, [])
    return (
        <main className="text-white relative bg-black">
            <div className="h-[275px] bg-gradient-to-b from-[#1f1f1f] to-[#121212] absolute w-full"></div>
            <div className="relative pt-[24px] pb-[48px] px-[32px] space-y-9 max-w-screen-5xl">
                <div>
                    <div className="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
                        <div>
                            <h2 className="text-2xl font-semibold hover:underline capitalize">
                                <a href="/">Lorem ipsum dolor sit</a>
                            </h2>
                        </div>
                        <a
                            href="/"
                            className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6"
                        >
                            See all
                        </a>
                    </div>
                    <div
                        className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet
                         lg:grid-cols-playlists-desktop gap-5"
                    >
                        {albums.map(album =>
                            <PlayList key={album.id} url={album.images[0].url} title={album.name}
                                      singer={album.artists[0].name}/>
                        )}
                        {/*<PlayList/>*/}
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
                        <div>
                            <h2 className="text-2xl font-semibold hover:underline capitalize">
                                <a href="/">Lorem ipsum dolor</a>
                            </h2>
                            <p className="text-sm text-[#b3b3b3]">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <a
                            href="/"
                            className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6"
                        >
                            See all
                        </a>
                    </div>
                    <div
                        className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
                        <a
                            href="/"
                            className="relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group"
                        >
                            <div className="relative">
                                <img
                                    src="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster"
                                    className="rounded shadow-lg"
                                    alt=""
                                />
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                Playlist title
                            </h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                odit.
                            </p>
                            {/*<PlayListContextMenu />*/}
                        </a>
                        <a
                            href="/"
                            className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden sm:block"
                        >
                            <div className="relative">
                                <img
                                    src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
                                    className="rounded shadow-lg"
                                    alt=""
                                />
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                Playlist title
                            </h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                odit.
                            </p>
                        </a>
                        <a
                            href="/"
                            className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden lg:block"
                        >
                            <div className="relative">
                                <img
                                    src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster"
                                    className="rounded shadow-lg"
                                    alt=""
                                />
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                Playlist title
                            </h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                odit.
                            </p>
                        </a>
                        <a
                            href="/"
                            className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden xl:block"
                        >
                            <div className="relative">
                                <img
                                    src="https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster"
                                    className="rounded shadow-lg"
                                    alt=""
                                />
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                Playlist title
                            </h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                odit.
                            </p>
                        </a>
                        <a
                            href="/"
                            className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 2xl:block"
                        >
                            <div className="relative">
                                <img
                                    src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
                                    className="rounded shadow-lg"
                                    alt=""
                                />
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                Playlist title
                            </h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                odit.
                            </p>
                        </a>
                        <a
                            href="/"
                            className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 3xl:block"
                        >
                            <div className="relative">
                                <img
                                    src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster"
                                    className="rounded shadow-lg"
                                    alt=""
                                />
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                Playlist title
                            </h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                odit.
                            </p>
                        </a>
                        <a
                            href="/"
                            className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 4xl:block"
                        >
                            <div className="relative">
                                <img
                                    src="https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster"
                                    className="rounded shadow-lg"
                                    alt=""
                                />
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                Playlist title
                            </h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                odit.
                            </p>
                        </a>
                        <a
                            href="/"
                            className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 5xl:block"
                        >
                            <div className="relative">
                                <img
                                    src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
                                    className="rounded shadow-lg"
                                    alt=""
                                />
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                Playlist title
                            </h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                odit.
                            </p>
                        </a>
                        <a
                            href="/"
                            className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 6xl:block"
                        >
                            <div className="relative">
                                <img
                                    src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster"
                                    className="rounded shadow-lg"
                                    alt=""
                                />
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                Playlist title
                            </h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                odit.
                            </p>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
                        <div>
                            <h2 className="text-2xl font-semibold hover:underline capitalize">
                                <a href="/">Lorem ipsum</a>
                            </h2>
                            <p className="text-sm text-[#b3b3b3]">Lorem ipsum dolor sit.</p>
                        </div>
                        <a
                            href="/"
                            className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6"
                        >
                            See all
                        </a>
                    </div>
                    <div
                        className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
                        <a
                            href="/"
                            className="relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group"
                        >
                            <div className="relative">
                                <img
                                    src="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster"
                                    className="rounded shadow-lg"
                                    alt=""
                                />
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                Playlist title
                            </h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                odit.
                            </p>
                            {/*<PlayListContextMenu />*/}
                        </a>
                        <a
                            href="/"
                            className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden sm:block"
                        >
                            <div className="relative">
                                <img
                                    src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
                                    className="rounded shadow-lg"
                                    alt=""
                                />
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                Playlist title
                            </h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                odit.
                            </p>
                        </a>
                        <a
                            href="/"
                            className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden lg:block"
                        >
                            <div className="relative">
                                <img
                                    src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster"
                                    className="rounded shadow-lg"
                                    alt=""
                                />
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                Playlist title
                            </h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                odit.
                            </p>
                        </a>
                        <a
                            href="/"
                            className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden xl:block"
                        >
                            <div className="relative">
                                <img
                                    src="https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster"
                                    className="rounded shadow-lg"
                                    alt=""
                                />
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                Playlist title
                            </h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                odit.
                            </p>
                        </a>
                        <a
                            href="/"
                            className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 2xl:block"
                        >
                            <div className="relative">
                                <img
                                    src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
                                    className="rounded shadow-lg"
                                    alt=""
                                />
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                Playlist title
                            </h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                odit.
                            </p>
                        </a>
                        <a
                            href="/"
                            className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 3xl:block"
                        >
                            <div className="relative">
                                <img
                                    src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster"
                                    className="rounded shadow-lg"
                                    alt=""
                                />
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                Playlist title
                            </h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                odit.
                            </p>
                        </a>
                        <a
                            href="/"
                            className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 4xl:block"
                        >
                            <div className="relative">
                                <img
                                    src="https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster"
                                    className="rounded shadow-lg"
                                    alt=""
                                />
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                Playlist title
                            </h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                odit.
                            </p>
                        </a>
                        <a
                            href="/"
                            className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 5xl:block"
                        >
                            <div className="relative">
                                <img
                                    src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
                                    className="rounded shadow-lg"
                                    alt=""
                                />
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                Playlist title
                            </h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                odit.
                            </p>
                        </a>
                        <a
                            href="/"
                            className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 6xl:block"
                        >
                            <div className="relative">
                                <img
                                    src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster"
                                    className="rounded shadow-lg"
                                    alt=""
                                />
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                Playlist title
                            </h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                odit.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default TheMain;