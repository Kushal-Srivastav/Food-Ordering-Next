export default function BLogPostPage({params}){
   return (
    <main>
        <h1>Blog Post</h1>
        <p>{params.slug}</p> // this will print the slug value passed in the url
    </main>
   )
}

//[] is a special type of folder supported by next.js it is basically a dynamic routing 