from flask import Flask, render_template
from newsapi import NewsApiClient
import requests

app = Flask(__name__)
app.config['SECRET_KEY']='kombra11TYITgroup'

# create routes/views
# NEWSAPI Python Code  
@app.route('/')
def index(): 
    newsapi = NewsApiClient(api_key='032f556e3d3345afba3606d0554885ec')
    main_url="https://newsapi.org/v2/top-headlines?country=us&apiKey=032f556e3d3345afba3606d0554885ec"
    top_headlines =requests.get(main_url).json()

    t_articles = top_headlines['articles']

    title = []
    desc = []
    url = []
    img = []
    p_date = []
    content = []

    for i in range(len(t_articles)):
        main_articles = t_articles[i]
        title.append(main_articles['title'])
        desc.append(main_articles['description'])
        url.append(main_articles['url'])
        img.append(main_articles['urlToImage'])
        p_date.append(main_articles['publishedAt'])
        content.append(main_articles['content'])

        t_contents = zip(title,desc,url,img,p_date,content)

    return render_template('index.html',t_contents=t_contents)

@app.route('/sports')
def sports():    
    newsapi = NewsApiClient(api_key='032f556e3d3345afba3606d0554885ec')
    sports_url="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=032f556e3d3345afba3606d0554885ec"
    sports_news =requests.get(sports_url).json()

    s_articles = sports_news['articles']

    title = []
    desc = []
    url = []
    img = []
    p_date = []
    content = []

    for i in range(len(s_articles)):
        sports_articles = s_articles[i]
        title.append(sports_articles['title'])
        desc.append(sports_articles['description'])
        url.append(sports_articles['url'])
        img.append(sports_articles['urlToImage'])
        p_date.append(sports_articles['publishedAt'])
        content.append(sports_articles['content'])

        s_contents = zip(title,desc,url,img,p_date,content)

    return render_template('sports.html',s_contents=s_contents)

if __name__ == '__main__':
    app.run(debug=True,port = 8000)
