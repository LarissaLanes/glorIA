import React from "react";
import { DivFeed, Posts, DivListPost, DivHeader} from "./Styled-Feed";
import Header from "../../components/header/Header";
import noticiesPosts from "./NoticiesPosts";

const FeedPage = () => {
    const aleatorePost = noticiesPosts.slice();
    aleatorePost.sort(() => Math.random() - 0.5);
    const visiblePosts = aleatorePost.slice(0, 5);

    return(
        <DivFeed>
            <DivHeader>
            <Header />
            </DivHeader>
            <DivListPost>
                {visiblePosts.map((post) => (
                    <Posts>
                    <div key={post.id}>
                        <h4>{post.id}</h4>
                        <h2>{post.titulo}</h2>
                        <p>{post.materia}</p>
                        <img src={post.imagem} alt={post.titulo} />
                        <p>{post.data}</p>
                    </div>
                    </Posts>
                ))}
            </DivListPost>
        </DivFeed>
    )
}

export default FeedPage;