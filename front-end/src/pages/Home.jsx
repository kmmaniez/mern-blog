import React from 'react'
import { Link } from 'react-router-dom'

const posts = [{
  id:2,
  title:'jaja',
  desc: 'ok',
}]

const Home = () => {
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post => (
          <div className="post">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`}><h2>{post.title}</h2></Link>
              <p>{post.desc}</p>
              <button>readmore</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home