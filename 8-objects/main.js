const blogs = [
    {
        title: 'why mac and cheese rules?', 
        likes: 30
    }, 
    {
        title: '10 things to make with cheese', 
        likes: 12
    }
]

let user = {
    name: 'crystal', 
    age: 30, 
    email: 'crystal@email.com', 
    location: 'berlin',
    blogs: blogs, 
    login: function() {
        console.log('user logged in'); 
    }, 
    // Another way of defining a method inside objects
    logout () {
        console.log('user logged out');
    },
    logBlogs: function() {
        // This will result in error, because blogs is unknown here.
        // console.log(blogs); 
        
        // Solution: use "this" keyword inside objects
        //console.log("regular function: this refers to the user object => " + this.blogs);

        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    },
    logsBlogs2: () => {
        // Arrow functions behaves differently from random functions
        // using "this" inside arrow functions accesses the window object 
        console.log("arrow function: this refers to window object: ");
        console.log(this); 
    }
}; 

user.logBlogs();
user.logsBlogs2();