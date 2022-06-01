import csv
import datetime as dt
import webbrowser
from urllib import parse


file = '/Users/chingwei/Projects/auto-submit-googleform/class.csv'
form = 'https://docs.google.com/forms/d/e/1FAIpQLSf_o4zbYD0gKaxx-ltxiAUpqtglR-He3_K3Ojl0cWurOyxCYQ/formResponse'


def getClass():

    with open(file, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        next(reader)

        data = {"Mon": [], "Tue": [], "Wed": [], "Thu": [], "Fri": []}

        for row in reader:
            row_data = {
                "classroom": "213",
                "date": "",
                "class_n": row[1],
                "subject": row[2],
                "teacher": row[3],
                "attendence": "",
                "content": "",
                "count": "",
                "platform": row[4],
                "platform-other": row[6],
                "login": row[5],
            }

            data[row[0]].append(row_data)

    return data


def getURL(database, day, class_n):

    entry = {
        "classroom": "entry.744655321",
        "date": "entry.466115204",
        "class_n": "entry.585216734",
        "subject": "entry.1887147303",
        "teacher": "entry.624802351",
        "attendence": "entry.333388403",
        "content": "entry.1802259304",
        "count": "entry.1903569494",
        "platform": "entry.295458603",
        "platform-other": "entry.295458603.other_option_response",
        "login": "entry.2010650752"
    }

    data = database[day][(int(class_n) - 1)]

    print(f'第{data["class_n"]}節：{data["subject"]}｜{data["teacher"]}')

    data["date"] = date
    data["attendence"] = "出席"
    data["content"] = input('教學章節要點：')
    print('')
    data["count"] = "40"

    post_url = f'{form}?'

    for item in entry:
        post_url += f'{entry[item]}={parse.quote(str(data[item]))}&'

    return post_url


if __name__ == '__main__':

    days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
    date = input('上課日期（YYYY-MM-dd）：')
    day = days[dt.datetime.strptime(date, "%Y-%m-%d").weekday()]

    print(f'{date} {day}｜教室日誌', end='\n\n')

    buffer = []

    for n in [1, 2, 3, 4, 5, 6, 7]:
        buffer.append(getURL(getClass(), day, n))

    for url in buffer:
        webbrowser.open_new_tab(url)
