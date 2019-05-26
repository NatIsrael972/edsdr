EDSFormats.Ventura = {
    standardService: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Ventura-16",
            spacing: 1
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination",
            spacing: 1
        },
        scroll: {
            align: "centre-x,top", // make bottom realise that overflows should be taken account for
            margin: {
                top: 9,
                right: 'width(serviceNumber)',
                bottom: {
                    $$cond: {
                        "$bottomMargin !== null": "$bottomMargin",
                        "else": "0"
                    }
                }
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination.text+' '+$serviceNumber"
    },
    destService: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Ventura-16",
            spacing: 1
        },
        destination: {
            align: "left,top",
            margin: {
                left: 1,
                top: '$topMargin'
            },
            text: "$destination",
            spacing: 1
        },
        text: "$destination.text+' '+$serviceNumber"
    },
    logo: {
        logo: {
            align: "centre-x,centre-y",
            image: "$image"
        },

        text: "$text"
    },
    trainReplacement: {
        destination: {
            align: "left,centre-y",
            margin: {
                left: 3
            },
            text: "$destination",
            spacing: 1,
            font: "Mobitec-13:8"
        },
        stopping: { // possibly implement groups
            align: "right,top",
            margin: {
                right: 'width(image) + len(3) + len(6)',
                top: 1
            },
            text: "Stopping",
            spacing: 1,
            font: "Mobitec-6:5"
        },
        allStations: {
            align: "right,bottom",
            margin: {
                right: 'width(image) + len(3)',
                bottom: 1
            },
            text: "All Stations",
            spacing: 1,
            font: "Mobitec-6:5"
        },
        image: {
            align: "right",
            image: "train"
        },
        text: "$destination+' SAS'"
    },
    message: {
        display: {
            align: "centre-x,centre-y",
            text: "$text",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$text"
    }
}

EDSData.Ventura = {
    1: {
        front: {
            renderType: "logo",
            image: "notInService",
            text: "NOT IN SERVICE"
        }
    },
    2: {
        front: {
            renderType: "logo",
            image: "logo",
            text: "VENTURA LOGO"
        }
    },
    3: { // check
        front: {
            renderType: "message",
            text: "Charter",
            spacing: 1,
            font: "Mobitec-13:10"
        }
    },
    4: { // time to go dandenong again
        front: {
            renderType: "message",
            text: "School Bus",
            spacing: 1,
            font: "Mobitec-13:10"
        }
    },
    5: { // check
        front: {
            renderType: "message",
            text: "Express",
            spacing: 1,
            font: "Mobitec-13:10"
        }
    },
    6: {
        front: {
            renderType: "message",
            text: "Special",
            spacing: 1,
            font: "Mobitec-13:10"
        }
    },
    7: {
        front: {
            renderType: "message",
            text: "Set Down Only",
            spacing: 1,
            font: "Mobitec-13:10" // pretty sure it's 7:5:2/3 but will need to check on that 900
        }
    },

    4305: {
        front: {
            renderType: "message",
            text: "Shuttle Bus",
            spacing: 1,
            font: "Mobitec-13:10"
        }
    },
    4307: {
        front: {
            renderType: "message",
            text: "MELBOURNE",
            spacing: 4,
            font: "Mobitec-16:8"
        }
    },

    1601: { // TRAM REPLACEMENTS
        front: {
            renderType: "standardService",
            serviceNumber: "16",
            destination: {
                text: "Melbourne Uni",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Tram Replacement"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    1602: {
        front: {
            renderType: "standardService",
            serviceNumber: "16",
            destination: {
                text: "Kew",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Tram Replacement"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    // 1901: {
    //     front: {
    //         renderType: "standardService",
    //         serviceNumber: "19", // Double check
    //         destination: {
    //             text: "North Coburg",
    //             font: "Mobitec-7:7"
    //         },
    //         scrolls: [
    //             "Tram Replacement"
    //         ],
    //         scrollFont: 'Mobitec-6:5'
    //     }
    // },
    // 1902: {
    //     front: {
    //         renderType: "standardService",
    //         serviceNumber: "19",
    //         destination: {
    //             text: "Flinders Street",
    //             font: "Mobitec-7:7"
    //         },
    //         scrolls: [
    //             "Tram Replacement"
    //         ],
    //         scrollFont: 'Mobitec-6:5'
    //     }
    // },
    // 6401: {
    //     front: {
    //         renderType: "standardService",
    //         serviceNumber: "64", // awaiting font
    //         destination: {
    //             text: "Monash Uni",
    //             font: "Mobitec-7:7"
    //         },
    //         scrolls: [
    //             "Tram Replacement"
    //         ],
    //         scrollFont: 'Mobitec-6:5'
    //     }
    // },
    // 6402: {
    //     front: {
    //         renderType: "standardService",
    //         serviceNumber: "64",
    //         destination: {
    //             text: "East Brighton",
    //             font: "Mobitec-7:7"
    //         },
    //         scrolls: [
    //             "Tram Replacement"
    //         ],
    //         scrollFont: 'Mobitec-6:5'
    //     }
    // },
    6701: {
        front: {
            renderType: "standardService",
            serviceNumber: "67",
            destination: {
                text: "Melbourne Uni",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Tram Replacement"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6702: {
        front: {
            renderType: "standardService",
            serviceNumber: "67",
            destination: {
                text: "Carnegie",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Tram Replacement"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7801: {
        front: {
            renderType: "standardService",
            serviceNumber: "78",
            destination: {
                text: "Prahran",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Tram Replacement"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7802: {
        front: {
            renderType: "standardService",
            serviceNumber: "78",
            destination: {
                text: "North Richmond",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Tram Replacement"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    9601: {
        front: {
            renderType: "standardService",
            serviceNumber: "96",
            destination: {
                text: "St. Kilda Beach",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Tram Replacement"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    9602: {
        front: {
            renderType: "standardService",
            serviceNumber: "96",
            destination: {
                text: "East Brunswick",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Tram Replacement"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },

    5997: { // TRAIN REPLACEMENTS
        front: {
            renderType: "destService",
            serviceNumber: "",
            destination: {
                text: "  Standby Bus",
                font: "Mobitec-13:10"
            },
            topMargin: 0
        }
    },
    5998: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "All Stations",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    5999: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Limited Express",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6000: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Express",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6008: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Caulfield",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "All Stations"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6108: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Caulfield",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "Limited Express"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6908: { // for fun
        front: {
            renderType: "trainReplacement",
            destination: "Caulfield"
        }
    },


    6010: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Mordialloc",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "All Stations"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6110: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Mordialloc",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "Limited Express"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    //6011 suspected moorabbin
    6012: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Frankston",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "All Stations"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6112: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Frankston",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "Limited Express"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6013: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Sandringham",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "All Stations"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6113: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Sandringham",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "Limited Express"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6014: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Elsternwick",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "All Stations"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6114: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Elsternwick",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "Limited Express"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6015: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "South Yarra",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "All Stations"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6115: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "South Yarra",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "Limited Express"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6023: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Camberwell",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "All Stations"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6123: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Camberwell",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "Limited Express"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6026: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Glen Waverley",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "All Stations"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6126: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Glen Waverley",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "Limited Express"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6039: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Stony Point",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "All Stations"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6139: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Stony Point",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "Limited Express"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6059: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Parliament",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "All Stations"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6159: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Parliament",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "Limited Express"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },

    2010: { // REGULAR SERVICES
        front: {
            renderType: "standardService",
            serviceNumber: "201",
            destination: {
                text: "Deakin Shuttle",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Express to Deakin"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    5510: {
        front: {
            renderType: "standardService",
            serviceNumber: "551",
            destination: {
                text: "Latrobe Uni",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Southern Road"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6310: {
        front: {
            renderType: "standardService",
            serviceNumber: "631",
            destination: {
                text: "Southland",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Monash Uni",
                "via Clayton"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6311: {
        front: {
            renderType: "standardService",
            serviceNumber: "631",
            destination: {
                text: "Waverley Gdns",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Clayton",
                "via Monash Uni"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6720: {
        front: {
            renderType: "standardService",
            serviceNumber: "672",
            destination: {
                text: "Croydon Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Midhurst Road" // ?
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6880: {
        front: {
            renderType: "standardService",
            serviceNumber: "688",
            destination: {
                text: "Upper F.T Gully",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Ridge Road",
                "via Sky High",
                "via Olinda"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6881: {
        front: {
            renderType: "standardService",
            serviceNumber: "688",
            destination: {
                text: "Croydon Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Olinda",
                "via Sky High",
                "via Ridge Road"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    // 6911: {
    //     front: {
    //         renderType: "standardService",
    //         serviceNumber: "691",
    //         destination: {
    //             text: "Waverley Gardens",
    //             font: "Mobitec-7:7"
    //         },
    //         scrolls: [
    //             "via"
    //         ],
    //         scrollFont: 'Mobitec-6:5'
    //     }
    // },
    6930: {
        front: {
            renderType: "standardService",
            serviceNumber: "693",
            destination: {
                text: "Oakleigh Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Burwood Hwy",
                "via F'tree Gully Rd"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6931: {
        front: {
            renderType: "standardService",
            serviceNumber: "693",
            destination: {
                text: "Belgrave Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via F'tree Gully Rd",
                "via Burwood Hwy"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6940: {
        front: {
            renderType: "standardService",
            serviceNumber: "694",
            destination: {
                text: "Mt. Dandenong",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Sky High",
                {
                    text: "via Olinda Township",
                    font: "Mobitec-6:5;Space-Width=1"
                }
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6941: {
        front: {
            renderType: "standardService",
            serviceNumber: "694",
            destination: {
                text: "Belgrave Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Sassafras"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6942: {
        front: {
            renderType: "standardService",
            serviceNumber: "694",
            destination: {
                text: "Olinda Township",
                font: "Mobitec-7:6:1"
            },
            scrolls: [
                "via Sassafras"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6950: {
        front: {
            renderType: "standardService",
            serviceNumber: "695",
            destination: {
                text: "Gembrook",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Emerald",
                "via Cockatoo"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7030: {
        front: {
            renderType: "standardService",
            serviceNumber: "703",
            destination: {
                text: "Blackburn Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Bentleigh",
                "via Clayton",
                "via Monash Uni",
                "via K-Mart Plaza",
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7031: {
        front: {
            renderType: "standardService",
            serviceNumber: "703",
            destination: {
                text: "Middle Brighton",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via K-Mart Plaza",
                "via Monash Uni",
                "via Clayton",
                "via Bentleigh"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7032: {
        front: {
            renderType: "destService",
            serviceNumber: "703",
            destination: {
                text: "South ṡńOakleigh",
                font: "Mobitec-7:7"
            },
            topMargin: 4
        }
    },
    7080: {
        front: {
            renderType: "standardService",
            serviceNumber: "708",
            destination: {
                text: "Carrum Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Southland",
                "via Mentone",
                "via Mordialloc",
                "via Aspendale Gdn."
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7081: {
        front: {
            renderType: "standardService",
            serviceNumber: "708",
            destination: {
                text: "Hampton Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Aspendale Gdn.",
                "via Mordialloc",
                "via Mentone",
                "via Southland"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7090: {
        front: {
            renderType: "standardService",
            serviceNumber: "709",
            destination: {
                text: "Mordialloc Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Waterways Est.",
                "via Parkmore S/C"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7091: {
        front: {
            renderType: "standardService",
            serviceNumber: "709",
            destination: {
                text: "Noble Park Stn",
                font: "Mobitec-7:6:1"
            },
            scrolls: [,
                "via Parkmore S/C",
                "via Waterways Est."
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7330: {
        front: {
            renderType: "standardService",
            serviceNumber: "733",
            destination: {
                text: "Box Hill",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Monash Uni"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7331: {
        front: {
            renderType: "standardService",
            serviceNumber: "733",
            destination: {
                text: "Oakleigh Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Monash Uni"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7332: {
        front: {
            renderType: "standardService",
            serviceNumber: "733",
            destination: {
                text: "Monash",
                font: "Mobitec-7:7"
            },
            scrolls: [
                [{text: "Universit", font: "Mobitec-7:7"},
                {text: "y", font: "Mobitec-7:5:2"}]
            ],
            scrollFont: 'Mobitec-7:7',
            bottomMargin: 1
        }
    },
    7340: {
        front: {
            renderType: "standardService",
            serviceNumber: "734",
            destination: {
                text: "Glen Iris Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Ashburton",
                "via High St Rd",
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7360: {
        front: {
            renderType: "standardService",
            serviceNumber: "736",
            destination: {
                text: "Mitcham Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Vermont Stn"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7370: {
        front: {
            renderType: "standardService",
            serviceNumber: "737",
            destination: {
                text: "Croydon Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via G Waverley",
                "via Knox City",
                "via Boronia",
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7371: {
        front: {
            renderType: "standardService",
            serviceNumber: "737",
            destination: {
                text: "Monash Uni",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Boronia",
                "via Knox City",
                "via G Waverley"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7372: {
        front: {
            renderType: "standardService",
            serviceNumber: "737",
            destination: {
                text: "Knox City",
                font: "Mobitec-13:10"
            },
            scrolls: [""],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7420: {
        front: {
            renderType: "standardService",
            serviceNumber: "742",
            destination: {
                text: "Chadstone",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Oakleigh",
                "via Vermont South",
                "via G Waverley",
                "via F.T Gully Road"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7421: {
        front: {
            renderType: "standardService",
            serviceNumber: "742",
            destination: {
                text: "Eastland",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via F.T Gully Road",
                "via G Waverley",
                "via Vermont South",
                "via Oakleigh",
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7530: {
        front: {
            renderType: "standardService",
            serviceNumber: "753",
            destination: {
                text: "Boronia Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Knoxfield Shops",
                "via F.T Gully Road"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7531: {
        front: {
            renderType: "standardService",
            serviceNumber: "753",
            destination: {
                text: "Glen Waverley",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "F.T Gully Road",
                "via Knoxfield Shops"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7540: {
        front: {
            renderType: "standardService",
            serviceNumber: "754",
            destination: {
                text: "Rowville",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Wheelers Hill",
                "Stud Park"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7650: {
        front: {
            renderType: "standardService",
            serviceNumber: "765",
            destination: {
                text: "Mitcham Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Blackburn",
                "via Forest Hill"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7651: {
        front: {
            renderType: "standardService",
            serviceNumber: "765",
            destination: {
                text: "Box Hill",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Forest Hill",
                "via Blackburn"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7670: {
        front: {
            renderType: "standardService",
            serviceNumber: "767",
            destination: {
                text: "Southland",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Chadstone"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7671: {
        front: {
            renderType: "standardService",
            serviceNumber: "767",
            destination: {
                text: "Box Hill",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Deakin Uni"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7780: {
        front: {
            renderType: "standardService",
            serviceNumber: "778",
            destination: {
                text: "Kananook Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Brunei Rd"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7790: {
        front: {
            renderType: "standardService",
            serviceNumber: "779",
            destination: {
                text: "Frankston Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Kananook Stn"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7791: {
        front: {
            renderType: "standardService",
            serviceNumber: "779",
            destination: {
                text: "Belvedere",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Kananook Stn"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8000: {
        front: {
            renderType: "standardService",
            serviceNumber: "800",
            destination: {
                text: "Dandenong Stn",
                font: "Mobitec-7:6:1"
            },
            scrolls: [
                "via Oakleigh"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8001: {
        front: {
            renderType: "standardService",
            serviceNumber: "800",
            destination: {
                text: "Chadstone",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Oakleigh"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    //8002 Oakleigh
    8020: {
        front: {
            renderType: "standardService",
            serviceNumber: "802",
            destination: {
                text: "Dandenong Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Chadstone",
                "via Oakleigh",
                "via Monash Uni",
                "via Mulgrave"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8021: {
        front: {
            renderType: "standardService",
            serviceNumber: "802",
            destination: {
                text: "Chadstone",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Mulgrave",
                "via Monash Uni",
                "via Oakleigh",
                "via Chadstone",
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8040: {
        front: {
            renderType: "standardService",
            serviceNumber: "804",
            destination: {
                text: "Dandenong Stn",
                font: "Mobitec-7:6:1"
            },
            scrolls: [
                "via Oakleigh",
                "via Monash Uni",
                "via Wheelers Hill"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8041: {
        front: {
            renderType: "standardService",
            serviceNumber: "804",
            destination: {
                text: "Chadstone",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Wheelers Hill",
                "via Monash Uni",
                "via Oakleigh"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8110: {
        front: {
            renderType: "standardService",
            serviceNumber: "811",
            destination: {
                text: "Dandenong Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Southland",
                "via Springvale",
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8111: {
        front: {
            renderType: "standardService",
            serviceNumber: "811",
            destination: {
                text: "Brighton",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Springvale",
                "via Southland"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8120: {
        front: {
            renderType: "standardService",
            serviceNumber: "812",
            destination: {
                text: "Dandenong Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Southland",
                "via Parkmore S/C"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8121: {
        front: {
            renderType: "standardService",
            serviceNumber: "812",
            destination: {
                text: "Brighton",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Parkmore S/C",
                "via Southland"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8140: {
        front: {
            renderType: "standardService",
            serviceNumber: "814",
            destination: {
                text: "Dandenong Stn",
                font: "Mobitec-7:6:1"
            },
            scrolls: [
                "via Springvale",
                "via Waverley Gdns"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8141: {
        front: {
            renderType: "standardService",
            serviceNumber: "814",
            destination: {
                text: "Springvale South",
                font: "Mobitec-7:6:1"
            },
            scrolls: [
                "via Waverley Gdns",
                "via Springvale"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8150: {
        front: {
            renderType: "standardService",
            serviceNumber: "815",
            destination: {
                text: "Dandenong Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Parkmore S/C"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8151: {
        front: {
            renderType: "standardService",
            serviceNumber: "815",
            destination: {
                text: "Noble Park",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Parkmore S/C"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8220: {
        front: {
            renderType: "standardService",
            serviceNumber: "822",
            destination: {
                text: "Chadstone",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Cheltenham"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8221: {
        front: {
            renderType: "standardService",
            serviceNumber: "822",
            destination: {
                text: "Sandringham Stn",
                font: "Mobitec-7:6:1"
            },
            scrolls: [
                "via Murrumbeena"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8240: {
        front: {
            renderType: "standardService",
            serviceNumber: "824",
            destination: {
                text: "Keysborough",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Bourke Road",
                "via Westall",
                "via Clayton"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8241: {
        front: {
            renderType: "standardService",
            serviceNumber: "824",
            destination: {
                text: "Moorabbin Station",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Westall",
                "via Clayton",
                "via Bourke Road"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8230: {
        front: {
            renderType: "standardService",
            serviceNumber: "823",
            destination: {
                text: "Southland",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Moorabbin"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8280: {
        front: {
            renderType: "standardService",
            serviceNumber: "828",
            destination: {
                text: "Hampton Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Dandenong",
                "via Cheltenham"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8281: {
        front: {
            renderType: "standardService",
            serviceNumber: "828",
            destination: {
                text: "Berwick Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Cheltenham",
                "via Dandenong",
                "via Fountain Gate",
                "via Southland"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8320: { // predicted all frankston bound are 0 (in ?), all out of frankston are 1 or more (out?)
        front: {
            renderType: "standardService",
            serviceNumber: "832",
            destination: {
                text: "Frankston Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Kananook"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8321: {
        front: {
            renderType: "standardService",
            serviceNumber: "832",
            destination: {
                text: "Carrum Downs",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Kananook"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8430: {
        front: {
            renderType: "standardService",
            serviceNumber: "843",
            destination: {
                text: "Dandenong Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via End. Hills S/C",
                "Shetland Street",
                "via Clow Street"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8431: {
        front: {
            renderType: "standardService",
            serviceNumber: "843",
            destination: {
                text: "Mossgiel Park",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Shetland Street",
                "via Clow Street",
                "via End. Hills S/C"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8440: {
        front: {
            renderType: "standardService",
            serviceNumber: "844",
            destination: {
                text: "Dandenong Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via McCrae St",
                "via Kidds Road"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8441: {
        front: {
            renderType: "standardService",
            serviceNumber: "844",
            destination: {
                text: "Doveton",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Kidds Road",
                "via McCrae St"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8480: {
        front: {
            renderType: "standardService",
            serviceNumber: "848",
            destination: {
                text: "Dandenong Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Waverley Gdns"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8481: {
        front: {
            renderType: "standardService",
            serviceNumber: "848",
            destination: {
                text: "Brandon Park",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Waverley Gdns"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8490: {
        front: {
            renderType: "standardService",
            serviceNumber: "849",
            destination: {
                text: "Dandenong Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via End Hills Shops",
                "via Reema Blvd"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8491: {
        front: {
            renderType: "standardService",
            serviceNumber: "849",
            destination: {
                text: "Mossgiel Park",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Reema Blvd",
                "via End Hills Shops"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8500: {
        front: {
            renderType: "standardService",
            serviceNumber: "850",
            destination: {
                text: "Dandenong Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Waverley Gdns"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8501: {
        front: {
            renderType: "standardService",
            serviceNumber: "850",
            destination: {
                text: "Glen Waverley",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Waverley Gdns"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8570: {
        front: {
            renderType: "standardService",
            serviceNumber: "857",
            destination: {
                text: "Dandenong Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Patterson Lks"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8571: {
        front: {
            renderType: "standardService",
            serviceNumber: "857",
            destination: {
                text: "Chelsea",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Patterson Lks"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8610: {
        front: {
            renderType: "standardService",
            serviceNumber: "861",
            destination: {
                text: "Dandenong Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Clow Street"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8620: {
        front: {
            renderType: "standardService",
            serviceNumber: "862",
            destination: {
                text: "Dandenong Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Oakleigh",
                "via Monash Uni",
                "via Waverley Gdns"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8621: {
        front: {
            renderType: "standardService",
            serviceNumber: "862",
            destination: {
                text: "Chadstone",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Waverley Gdns",
                "via Monash Uni",
                "via Oakleigh",
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    9000: {
        front: {
            renderType: "standardService",
            serviceNumber: "900",
            destination: {
                text: "Rowville",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Chadstone",
                "via Oakleigh",
                "via Monash Uni"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    9001: {
        front: {
            renderType: "standardService",
            serviceNumber: "900",
            destination: {
                text: "Caulfield Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Monash Uni",
                "via Oakleigh",
                "via Chadstone"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    }
}

EDSExtras.Ventura = {};

EDSImages.Ventura = {
    notInService: [
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0]
    ],
    logo: [
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0]
    ],
    train: [
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]
};
