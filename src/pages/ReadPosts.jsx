import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { supabase } from '../client' //

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([])

useEffect(() => { // define the function
  const fetchPosts = async () => { // fetch database information
    const { data, error } = await supabase // asynchronous operation so we use await keyword
      .from('Posts') // from specified table
      .select() // returns all database entries once they have been inserted
      .order('created_at', { ascending: true }) // orders the fetched database entries by given columns

    if (error) { // debug
      console.error("Error fetching posts:", error)
      return
    }

    setPosts(data)
  }

  fetchPosts()
}, [])
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                [...posts]
                .sort((a, b) => a.id - b.id)
                .map((post,index) => 
                    <Card 
                        key={post.id}
                        id={post.id} 
                        title={post.title}
                        author={post.author}
                        description={post.description}
                    />
                ) : <h2>{'No Challenges Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts