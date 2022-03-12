function update() {
    const outter = document.getElementById("outter")
    const date = document.getElementsByName("date")[0]
    const dt = new Date(date.value)

    const outlines = [
        document.getElementById("a"),
        document.getElementById("b"),
        document.getElementById("c"),
        document.getElementById("d"),
        document.getElementById("e"),
        document.getElementById("f"),
        document.getElementById("g"),
        document.getElementById("h"),
    ]
    outlines.forEach((item) => {
        item.value = ""
    })

    const classes = [
        undefined,
        [
            "化學",
            "化學(彈性學習)",
            "高三加深加廣7",
            "高三加深加廣8",
            "全民國防教育",
            "國文",
            "國文",
        ],
        ["生物", "生物", "英文", "英文", "體育", "國文", "國文"],
        [
            "數學",
            "數學",
            " 高三加深加廣1",
            "高三加深加廣2",
            "綜合活動",
            "高三加深加廣5",
            "高三加深加廣6",
        ],
        [
            "化學",
            "化學",
            "數學(彈性學習)",
            "班會",
            "體育",
            "英文",
            "英文",
            "物理輔",
        ],
        [
            "數學",
            "數學",
            "藝術生活",
            "藝術生活",
            "生物(彈性學習)",
            "高三多元選修",
            "高三多元選修",
        ],
        undefined,
    ]
    const currentDay = classes[dt.getDay()]

    if (currentDay === undefined) {
        outter.classList.add("hidden")
        return
    }

    const list = ["1", "2", "3", "4", "5", "6", "7"]
    const selectClass = [
        "高三加深加廣7",
        "高三加深加廣8",
        " 高三加深加廣1",
        "高三加深加廣2",
        "高三加深加廣5",
        "高三加深加廣6",
        "高三多元選修",
        "綜合活動",
        "班會",
    ]

    list.forEach((item) => {
        const p = document.getElementById(item)
        const className = currentDay[parseInt(item) - 1]
        p.innerHTML = className
        if (selectClass.includes(className) === true) {
            outlines[parseInt(item) - 1].value = "無"
        }
    })

    if (currentDay.length === 8) {
        const p = document.getElementById("8")
        const input = document.getElementById("h")
        p.innerHTML = currentDay[7]
        p.classList.remove("hidden")
        input.classList.remove("hidden")
    } else {
        const p = document.getElementById("8")
        const input = document.getElementById("h")
        p.innerHTML = ""
        p.classList.add("hidden")
        input.classList.add("hidden")
    }

    outter.classList.remove("hidden")
}

function processFormData() {
    const viewUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLScLkLSE78Dftw8LV__5IGv47D_brhy5YlzJ8-p7M79FzKvCkA/viewform?"
    const submitUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLScLkLSE78Dftw8LV__5IGv47D_brhy5YlzJ8-p7M79FzKvCkA/formResponse?"

    const classnames = [
        document.getElementById("1").innerHTML,
        document.getElementById("2").innerHTML,
        document.getElementById("3").innerHTML,
        document.getElementById("4").innerHTML,
        document.getElementById("5").innerHTML,
        document.getElementById("6").innerHTML,
        document.getElementById("7").innerHTML,
        document.getElementById("8").innerHTML,
    ]
    const outlines = [
        document.getElementById("a").value,
        document.getElementById("b").value,
        document.getElementById("c").value,
        document.getElementById("d").value,
        document.getElementById("e").value,
        document.getElementById("f").value,
        document.getElementById("g").value,
        document.getElementById("h").value,
    ]
    const teachers = {
        國文: "王曼莉",
        英文: "柳雅馨",
        數學: "黃智昇",
        綜合活動: "無",
        班會: "黃智昇",
        "數學(彈性學習)": "黃智昇",
        化學: "曹淇峰",
        "化學(彈性學習)": "曹淇峰",
        生物: "劉翠華",
        "生物(彈性學習)": "劉翠華",
        " 高三加深加廣1": "無",
        高三加深加廣2: "無",
        高三加深加廣5: "無",
        高三加深加廣6: "無",
        高三加深加廣7: "無",
        高三加深加廣8: "無",
        藝術生活: "陳研伊",
        全民國防教育: "戴慎孜",
        高三多元選修: "無",
        體育: "蔡家豪",
        物理輔: "朱正明",
    }
    const date = document.getElementsByName("date")[0].value

    let Eight = ["", "", "", ""]

    if (classnames[7] != "") {
        Eight[0] = teachers[classnames[7]]
        Eight[1] = "出席"
        Eight[2] = "無"
        Eight[3] = "16"
    }

    const entrydata = [
        "entry.314173678=黃靖緯",
        "entry.1738547215=27",
        "entry.359440102=313",
        `entry.1977272282=${date}`,
        `entry.1949216775=${classnames[0]}`,
        `entry.768699754=${teachers[classnames[0]]}`,
        "entry.1276469790=出席",
        "entry.1590862017=無",
        `entry.1004856781=${outlines[0]}`,
        "entry.1524799949=39",
        `entry.139315947=${classnames[1]}`,
        `entry.189849530=${teachers[classnames[1]]}`,
        "entry.652051161=出席",
        "entry.1847222004=無",
        `entry.367258215=${outlines[1]}`,
        "entry.1608389851=39",
        `entry.994173459=${classnames[2]}`,
        `entry.908118448=${teachers[classnames[2]]}`,
        "entry.874861447=出席",
        "entry.1769445044=無",
        `entry.1207328731=${outlines[2]}`,
        "entry.245640882=39",
        `entry.1804650846=${classnames[3]}`,
        `entry.987227560=${teachers[classnames[3]]}`,
        "entry.400122441=出席",
        "entry.461480914=無",
        `entry.130885767=${outlines[3]}`,
        "entry.1418072502=39",
        `entry.742711143=${classnames[4]}`,
        `entry.843764124=${teachers[classnames[4]]}`,
        "entry.1608612244=出席",
        "entry.494143557=無",
        `entry.1124923929=${outlines[4]}`,
        "entry.812434060=39",
        `entry.1431763546=${classnames[5]}`,
        `entry.1147247805=${teachers[classnames[5]]}`,
        "entry.1228559939=出席",
        "entry.1425887865=無",
        `entry.2087671547=${outlines[5]}`,
        "entry.851106728=39",
        `entry.1602143887=${classnames[6]}`,
        `entry.1982764825=${teachers[classnames[6]]}`,
        "entry.1791598565=出席",
        "entry.1417860346=無",
        `entry.1181011054=${outlines[6]}`,
        "entry.1947217148=39",
        `entry.1999721695=${classnames[7]}`,
        `entry.397311866=${Eight[0]}`,
        `entry.1852365507=${Eight[1]}`,
        `entry.2097501323=${Eight[2]}`,
        `entry.154306953=${outlines[7]}`,
        `entry.889417550=${Eight[3]}`,
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
