import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    articles = [
        {
            "source": {
              "id": null,
              "name": "Biztoc.com"
            },
            "author": "barrons.com",
            "title": "Tesla, Ford News Makes a Point: Don't Overreact to Recalls",
            "description": "The latest news about auto recalls underscores a point Barron’s has been making for years: The vast majority of instances don’t affect car makers’ stocks, or their earnings.#barrons",
            "url": "https://biztoc.com/x/3260fa214fc2a685",
            "urlToImage": "https://c.biztoc.com/p/3260fa214fc2a685/og.webp",
            "publishedAt": "2023-06-26T16:52:07Z",
            "content": "The latest news about auto recalls underscores a point Barrons has been making for years: The vast majority of instances dont affect car makers stocks, or their earnings.\r\n#barrons\r\nThis story appear… [+19 chars]"
          },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        },
        {
            "source": {
              "id": null,
              "name": "Biztoc.com"
            },
            "author": "finance.yahoo.com",
            "title": "The stock market's biggest winners are getting downgraded by Wall Street",
            "description": "Tech stocks have rebounded so well from their down year in 2022 that there might not a buying opportunity there anymore. At least that's what some Wall Street analysts are saying as they slap downgrades on some of 2023's best performers like Tesla (TSLA), App…",
            "url": "https://biztoc.com/x/80d0ed065588693e",
            "urlToImage": "https://c.biztoc.com/p/80d0ed065588693e/og.webp",
            "publishedAt": "2023-06-26T16:38:09Z",
            "content": "Tech stocks have rebounded so well from their down year in 2022 that there might not a buying opportunity there anymore.At least that's what some Wall Street analysts are saying as they slap downgrad… [+286 chars]"
          },
        {
            "source": {
              "id": null,
              "name": "Snopes.com"
            },
            "author": "Aleksandra Wrona",
            "title": "Is This an Authentic Video of a Tesla Catching on Fire?",
            "description": "Videos of Teslas catching on fire are often shared on social media, though some of them might be misleading.",
            "url": "https://www.snopes.com/fact-check/tesla-on-fire/",
            "urlToImage": "https://mediaproxy.snopes.com/width/1200/https://media.snopes.com/2023/06/tesla_on_fire_miscaptioned.png",
            "publishedAt": "2023-06-26T17:31:00Z",
            "content": "Claim:\r\nA video tweeted on June 26, 2023, authentically showed a Tesla catching on fire. \r\nOn June 26, 2023, Twitter user @Alphafox78 posted a one-minute long video, claiming that it showed a Tesla c… [+2684 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Nate Doughty, Pittsburgh Business Times",
            "title": "Pittsburgh Regional Transit approves $535 million budget, not expecting ‘major service reductions’",
            "description": "The board of the region’s largest transportation authority approved an operating budget of $535.4 million on Friday for its upcoming fiscal year, which is a ...",
            "url": "https://news.yahoo.com/pittsburgh-regional-transit-approves-535-173549516.html",
            "urlToImage": "https://media.zenfs.com/en/wpxi_cox_articles_540/8fad34e021b3caf7429ee2cb758dcd0b",
            "publishedAt": "2023-06-26T17:35:49Z",
            "content": "The board of the regions largest transportation authority approved an operating budget of $535.4 million on Friday for its upcoming fiscal year, which is a 1.8% increase from the prior years budget.\r… [+946 chars]"
          }
    ]
    constructor() {
        super();
        console.log("this is my news component")
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    async componentDidMount(){
        console.log("cdm");
        let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=101eb971f1db435aa6297600f8c25120"
        let data=await fetch(url);
        console.log(data);
    }
    render() {
        return (
            <>
                <div className="container my-3">
                    <h2>My Top Headlines</h2>
                    <div className="row">
                        {this.state.articles.map((element) => {
                           return <div className="col my-md-3" key={element.url} >
                            <Newsitem title={element.title.slice(0,45)} description={element.description.slice(0,80)} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                        })}


                    </div>
                </div>
            </>
        )
    }
}

export default News