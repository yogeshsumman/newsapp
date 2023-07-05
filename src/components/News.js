import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    articles = []
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
        let parsedData= await data.json()
        console.log(parsedData);
        this.setState({articles : parsedData.articles})
    }
    render() {
        return (
            <>
                <div className="container my-3">
                    <h2>My Top Headlines</h2>
                    <div className="row">
                        {this.state.articles.map((element) => {
                           return <div className="col my-md-3" key={element.url} >
                            <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                        })}


                    </div>
                </div>
            </>
        )
    }
}

export default News