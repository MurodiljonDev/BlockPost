import React, { useEffect, useState } from 'react';
import instance from "../../services/api";
import ArticleCard from "../../components/article-card/ArticleCard"
import { Container } from '../../utils';
import "./Reel.scss"

const Reel = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        instance("/api/posts")
            .then(response => 
                setData(response.data.data)
            )
            .catch(error => console.log(error))
    },[])
  return (
    <div className='home__reel'>
            <Container>
                <h2>Today's trending articles</h2>
                <div className="reel__wrapper">
                    {
                        data.map(article => 
                            <ArticleCard
                                image={article.image}
                                title={article.title}
                                description={article.description}
                                author={article.author}
                                createAt={article.createAt}
                                category={article.category}
                            />
                        )
                    }
                </div>
            </Container>        
    </div>
  )
}

export default Reel