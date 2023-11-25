class BlogPost {
  constructor(data) {
    this.id = data.id ?? "";
    this.title = data.title ?? "";
    this.content = data.content ?? "";
    this.author = data.author ?? "";
  
  }
  }

  export default BlogPost;