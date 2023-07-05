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
    async componentDidMount() {
        console.log("cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=101eb971f1db435aa6297600f8c25120&pageSize=${this.props.pagesize}`
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
    }

    previousClick = async () => {
        console.log("previous clicked");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=101eb971f1db435aa6297600f8c25120&page=1&pageSize=${this.props.pagesize}`
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }
    NextClick = async () => {
        console.log("Next clicked");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=101eb971f1db435aa6297600f8c25120&page=2&pageSize=${this.props.pagesize}`
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }
    
    
    render() {
        const isButtonEnabled = this.page <= 2;
        return (
            <>
                <div className="container my-3">
                    <h2 className='text-center'>My Top Headlines</h2>
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col my-md-3" key={element.url} >
                                <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}


                    </div>
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className=" btn btn-dark" onClick={this.previousClick}>&larr; Previous</button>
                        <button disabled={isButtonEnabled} type="button" className="btn btn-dark" onClick={this.NextClick}>Next &rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}

export default News