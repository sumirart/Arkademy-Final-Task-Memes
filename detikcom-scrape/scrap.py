from requests import get
from bs4 import BeautifulSoup as BS
import json
import MySQLdb

# SQL DB Config
HOST = "127.0.0.1"
USERNAME = "root"
PASSWORD = ""
DATABASE = "rest_memes"

# def getAll():
#     url = "http://www.tribunnews.com/news"
#     req = get(url).content
#     page = BS(req, "html.parser")
#     data = []
#     for news in page.find_all("a", "f20 ln24 fbo txt-oev-2"):
#         out = {}
#         # title - find tag name data-name inside article with class product-display
#         # title = news.find("a", "f20 ln24 fbo txt-oev-2")["title"]
#         # out.update({"title": title})
#         title = news["title"]
#         out.update({"title": title})

#         # content
#         # content = news.find("div", "grey2 pt5 f13 ln18 txt-oev-3").text
#         # out.update({"content": content})

#         # # published date
#         # publishedDate = news.find("time", "foot timeago")["title"]
#         # out.update({"published date": publishedDate})

#         data.append(out)
#     # print(json.dumps(data))
#     return(json.dumps(data))

def getAll():
    # url = "http://www.tribunnews.com/news"
    url = "https://news.detik.com/"
    req = get(url).content
    page = BS(req, 'html.parser')
    # for div in page.find_all('div', 'product-list'):
    data = []
    for news in page.find_all('div', 'desc_nhl'):
        out = {}
        # title - find tag name data-name inside article with class product-display
        # title = news.find("a", "f20 ln24 fbo txt-oev-2")["title"]
        # out.update({"title": title})
        title = news.find('h2').text
        out.update({"title": title})

        # content
        content = news.text
        out.update({"content": content})

        # # published date
        publishedDate = news.find("span", "labdate f11").text
        out.update({"published date": publishedDate})

        data.append(out)            
    return(json.dumps(data))
    # return(json.dumps(page.prettify()))