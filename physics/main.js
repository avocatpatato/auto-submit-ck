function update() {
    const outter = document.getElementById("outter")
    const date = document.getElementsByName("date")[0]
    const dt = new Date(date.value)
    //     const classes = [
    //         undefined,
    //         [
    //             "化學",
    //             "彈性學習－化學",
    //             "跨班加深加廣",
    //             "跨班加深加廣",
    //             "全民國防教育",
    //             "國文",
    //             "國文",
    //         ],
    //         ["生物", "生物", "英文", "英文", "體育", "國文", "國文"],
    //         [
    //             "數學",
    //             "數學",
    //             "跨班加深加廣",
    //             "跨班加深加廣",
    //             "綜合活動",
    //             "跨班加深加廣",
    //             "跨班加深加廣",
    //         ],
    //         ["化學", "化學", "彈性學習－數學", "班會", "體育", "英文", "英文"],
    //         [
    //             "數學",
    //             "數學",
    //             "藝術生活",
    //             "藝術生活",
    //             "彈性學習－生物",
    //             "多元選修",
    //             "多元選修",
    //         ],
    //         undefined,
    //     ]

    const currentDay = dt.getDay()

    if (currentDay === 4) {
        outter.classList.remove("hidden")
    }

    //     if (currentDay === undefined) {
    //         outter.classList.add("hidden")
    //         return
    //     }

    //     const list = ["1", "2", "3", "4", "5", "6", "7"]

    //     list.forEach((item) => {
    //         const p = document.getElementById(item)
    //         p.innerHTML = currentDay[parseInt(item) - 1]
    //     })
}

function processFormData() {
    const viewUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSchHsm62uUM-UZd3Z5wIDZ8Hnzi6W8rsTQGgxBy04QIUbb6ag/viewform?"
    const submitUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSchHsm62uUM-UZd3Z5wIDZ8Hnzi6W8rsTQGgxBy04QIUbb6ag/formResponse?"

    // classesToday[i] = [classname, outlines]
    const classesToday = [
        [
            document.getElementById("1").innerHTML,
            document.getElementById("a").value,
        ],
    ]

    const teachersAndAttendances = {
        國文: ["王曼莉", "出席"],
        英文: ["柳雅馨", "出席"],
        數學: ["黃智昇", "出席"],
        綜合活動: [
            "無",
            "跨班選修課程、自習、綜合活動...等，無固定教師的課程，與5-1皆免填",
        ],
        班會: ["黃智昇", "出席"],
        "彈性學習－數學": ["黃智昇", "出席"],
        化學: ["曹淇峰", "出席"],
        "彈性學習－化學": ["曹淇峰", "出席"],
        生物: ["劉翠華", "出席"],
        "彈性學習－生物": ["劉翠華", "出席"],
        跨班加深加廣: [
            "無",
            "跨班選修課程、自習、綜合活動...等，無固定教師的課程，與5-1皆免填",
        ],
        藝術生活: ["陳研伊", "出席"],
        全民國防教育: ["戴慎孜", "出席"],
        體育: ["蔡家豪", "出席"],
        多元選修: [
            "無",
            "跨班選修課程、自習、綜合活動...等，無固定教師的課程，與5-1皆免填",
        ],
        物理: ["朱正明", "出席"],
    }
    const date = document.getElementsByName("date")[0].value

    classesToday.forEach((classNow, index) => {
        const classname = classNow[0]
        const outline = classNow[1]
        const teacher = teachersAndAttendances[classname][0]
        const attendance = teachersAndAttendances[classname][1]

        const entrydata = [
            "entry.314173678=楊宗勳",
            "entry.1738547215=28",
            "entry.1319745875=313",
            `entry.1977272282=${date}`,
            `entry.708837080=8`,
            `entry.331125135=${classname}`,
            `entry.768699754=${teacher}`,
            `entry.1276469790=${attendance}`,
            `entry.1004856781=${outline}`,
            "entry.1524799949=16",
        ]

        if (document.getElementById("go").checked) {
            var newUrl = submitUrl
        } else if (document.getElementById("wait").checked) {
            var newUrl = viewUrl
        }
        entrydata.forEach((item) => {
            newUrl += `${item}&`
        })

        window.open(newUrl)
    })
}

function focusOnEnter(id) {
    if (e.keyCode === 13) {
        document.getElementById(id).focus()
    }
}

window.onkeydown = (e) => {
    if (e.keyCode === 13) {
        document.activeElement.nextElementSibling.nextElementSibling.focus()
        console.log(
            document.activeElement.nextElementSibling.nextElementSibling
        )
    }
}
