import { useState } from 'react'
import './CreatePost.css'
import { supabase } from '../client'

const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    author: "",
    description: ""
  })

  const createPost = async (event) => { // handles the form submission event when the user submits the Create Post form
  event.preventDefault() // prevents reload whenever form is submitted

  const { data, error } = await supabase // making calls is an async operation, so await is included
    .from('Posts') // accessing data from the Posts table
    .insert({ // indicate that we want to perform an insertion operation (the "create" of crud)
      title: post.title,
      author: post.author,
      description: post.description
    })
    .select()

  if (error) { // error handling
    console.error("Supabase error:", error)
    alert(`Supabase error: ${error.message}`)
    return
  }

  console.log("Post successfully created:", data) // debug
  alert("Post successfully created!")

  window.location = "/" // redirects the browser to the root URL (homepage of the site)
}

  const handleChange = (event) => {
    const { name, value } = event.target

    setPost((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

    return (
        <div>
            <form onSubmit={createPost}>
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" name="description" onChange={handleChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreatePost