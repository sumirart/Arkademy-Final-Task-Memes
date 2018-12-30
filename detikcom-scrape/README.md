# Scrape Detik.com with BeautifulSoap4 auto save to DB

Scrape news in Detik.com using BeautifulSoup4 , Requests, and flask 
url = "https://news.detik.com/"

## Installation Requierements

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install requirements.

```bash
pip3 install virtualenv #install virtualenv
virtual env #make virtualenv
source env/bin/activate #activate virtualenv
pip3 install -r requirements.txt
```

## Usage

```bash
export FLASK_APP=app.py #adding our file
export FLASK_ENV=development #for debugging
python3 -m flask run #use --host=host or --port=port to customize
```