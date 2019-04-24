EDSFormats.SMRT = {
    standardService: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination.text+' via'",
            font: "$destination.font",
            spacing: 1
        },
        scroll: {
            align: "centre-x,bottom",
            margin: {
                right: 'width(serviceNumber)'
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination.text+' '+$serviceNumber"
    },
    destScroll: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 2
        },
        top: {
            align: "centre-x,top",
            text: "$top",
            font: "$topFont",
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)'
            }
        },
        bottom: {
            align: "centre-x,bottom",
            text: "$bottom",
            font: "$bottomFont",
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)'
            }
        },

        text: "$top"
    }
}

EDSData.SMRT = {
    1901: {
        front: {
            renderType: 'standardService',
            serviceNumber: '190',
            destination: {
                text: 'KAMPONG BAHRU TER',
                font: 'Mobitec-7:4'
            },
            scrolls: [
                {
                    renderType: 'destScroll',
                    top: "KAMPONG BAHRU",
                    topFont: "Mobitec-7:7",

                    bottom: "TERMINAL",
                    bottomFont: "Mobitec-7:7",
                    serviceNumber: "190"
                },
                'BT PANJANG RD',
                'STEVENS ROAD',
                'ORCHARD ROAD',
                'HILL STREET',
                'CHINATOWN'
            ],
            scrollFont: 'Mobitec-7:5:3'
        }
    },
    1902: {
        front: {
            renderType: 'standardService',
            serviceNumber: '190',
            destination: {
                text: 'CHOA CHU KANG',
                font: 'Mobitec-7:5:3'
            },
            scrolls: [
                {
                    renderType: 'destScroll',
                    top: "CHOA CHU KANG",
                    topFont: "Mobitec-7:7",

                    bottom: "INT / MRT / LRT",
                    bottomFont: "Mobitec-7:7",
                    serviceNumber: "190"
                },
                'HILL STREET',
                'SOMERSET ROAD',
                'SCOTTS ROAD',
                'STEVENS ROAD',
                'BUKIT PANJANG RD'
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9122: {
        front: {
            renderType: "standardService",
            serviceNumber: "912A",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: 'destScroll',
                    top: "WOODLANDS",
                    topFont: "Mobitec-7:7",

                    bottom: "INT / MRT",
                    bottomFont: "Mobitec-7:7",
                    serviceNumber: "912A"
                },
                'WDL AVE 2,5',
                'WOODLANDS DR 50',
                'WOODLANDS RING RD',
                'ADMIRALTY MRT',
                'WDL AVE 7 (LOOP)'
            ],
            scrollFont: 'Mobitec-7:5:3'
        }
    }
}
