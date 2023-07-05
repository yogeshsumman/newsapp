import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl}=this.props;
        return (
            // <section className="d-flex justify-content-center align-items-center h-100 min-vh-100">
            <div className='container my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={!imageUrl?"https://www.searchenginejournal.com/wp-content/uploads/2023/06/img_2023-6-28-000706-649bb212ea6ce-sej.jpeg":imageUrl} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Go somewhere</a>
                    </div>
                </div>
            </div>
            // </section>
        )
    }
}

export default Newsitem