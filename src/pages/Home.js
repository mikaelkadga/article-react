const Home = () => {
    return (
        <div style={{
            height: '650px',
            // border: 'solid 1px black',
            justifyContent: 'center', //Centered horizontally
            alignItems: 'center', //Centered vertically
            display: "flex",
            marginTop:"1rem"
         }}>
            <h1 className="text-center mt-6">welcome to project-1, you can read all posts through the 'blog' link or create your own post, but you have to sign up first through the 'register' link and then sign in into your account through the 'login' link on the right side up there.</h1>
        </div>
    )
}

export default Home