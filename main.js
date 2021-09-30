function update() {
    const outter = document.getElementById("outter")
    const date = document.getElementsByName("date")[0]
    const dt = new Date(date.value)
    const classes = [
        undefined,
        [
            "化學",
            "彈性學習－化學",
            "跨班加深加廣",
            "跨班加深加廣",
            "彈性學習－生物",
            "國文",
            "國文",
        ],
        ["化學", "化學", "英文", "英文", "美術", "美術", "全民國防教育"],
        [
            "數學",
            "數學",
            "跨班加深加廣",
            "跨班加深加廣",
            "綜合活動",
            "跨班加深加廣",
            "跨班加深加廣",
        ],
        [
            "數學",
            "彈性學習－數學",
            "健康與護理",
            "健康與護理",
            "英文",
            "英文",
            "體育",
        ],
        ["國文", "國文", "數學", "班會", "體育", "生物", "生物"],
        undefined,
    ]
    const currentDay = classes[dt.getDay()]

    if (currentDay === undefined) {
        outter.classList.add("hidden")
        return
    }

    const list = ["1", "2", "3", "4", "5", "6", "7"]

    list.forEach((item) => {
        const p = document.getElementById(item)
        p.innerHTML = currentDay[parseInt(item) - 1]
    })

    outter.classList.remove("hidden")
}

function processFormData() {
    const viewUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSdXlbwviHhDTCnzXxBWlN73SAEU7HaFVlvStOU0FaxUkCymUg/viewform?"
    const submitUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSdXlbwviHhDTCnzXxBWlN73SAEU7HaFVlvStOU0FaxUkCymUg/formResponse?"

    const classnames = [
        document.getElementById("1").innerHTML,
        document.getElementById("2").innerHTML,
        document.getElementById("3").innerHTML,
        document.getElementById("4").innerHTML,
        document.getElementById("5").innerHTML,
        document.getElementById("6").innerHTML,
        document.getElementById("7").innerHTML,
    ]
    const outlines = [
        document.getElementById("a").value,
        document.getElementById("b").value,
        document.getElementById("c").value,
        document.getElementById("d").value,
        document.getElementById("e").value,
        document.getElementById("f").value,
        document.getElementById("g").value,
    ]
    const teachers = {
        國文: "王曼莉",
        英文: "柳雅馨",
        數學: "黃智昇",
        綜合活動: "無",
        班會: "黃智昇",
        "彈性學習－數學": "黃智昇",
        化學: "曹淇峰",
        "彈性學習－化學": "曹淇峰",
        生物: "劉翠華",
        "彈性學習－生物": "劉翠華",
        跨班加深加廣: "無",
        美術: "趙依誠",
        全民國防教育: "戴慎孜",
        健康與護理: "戴芳台",
        體育: "蔡家豪",
    }
    const date = document.getElementsByName("date")[0].value
    const entrydata = [
        "entry.1856443187=黃靖緯",
        "entry.762925573=313",
        `entry.917412650=${date}`,
        `entry.14235153=${classnames[0]}`,
        `entry.329893755=${teachers[classnames[0]]}`,
        "entry.1556327835=出席",
        "entry.119822768=",
        `entry.1973655584=${outlines[0]}`,
        `entry.634850437=${classnames[1]}`,
        `entry.714947543=${teachers[classnames[1]]}`,
        "entry.869445378=出席",
        "entry.1786512999=",
        `entry.1806173177=${outlines[1]}`,
        `entry.403989627=${classnames[2]}`,
        `entry.604197935=${teachers[classnames[2]]}`,
        "entry.635206839=出席",
        "entry.17245382=",
        `entry.1292785364=${outlines[2]}`,
        `entry.909035250=${classnames[3]}`,
        `entry.398244057=${teachers[classnames[3]]}`,
        "entry.2007587202=出席",
        "entry.904910944=",
        `entry.1889140116=${outlines[3]}`,
        `entry.574229561=${classnames[4]}`,
        `entry.1113381671=${teachers[classnames[4]]}`,
        "entry.72674477=出席",
        "entry.405077547=",
        `entry.1602777528=${outlines[4]}`,
        `entry.1739516506=${classnames[5]}`,
        `entry.871461081=${teachers[classnames[5]]}`,
        "entry.1308935777=出席",
        "entry.1174172028=",
        `entry.1185553404=${outlines[5]}`,
        `entry.2061162996=${classnames[6]}`,
        `entry.1732679242=${teachers[classnames[6]]}`,
        "entry.1552416909=出席",
        "entry.257855159=",
        `entry.803151641=${outlines[6]}`,
        "entry.1235594214=無第八節",
        "entry.571339789=無第八節",
        "entry.85147417=無第八節",
        "entry.1296767361=",
        "entry.221421666=無第八節",
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
