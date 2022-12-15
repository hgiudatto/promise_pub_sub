const blogs = [
  { title: "title 1", author: "author 1" },
  { title: "title 2", author: "author 2" },
  { title: "title 3", author: "author 3" },
  { title: "title 4", author: "author 4" },
];

const listAllBlogs = async (blogList) => {
  return new Promise((resolve, reject) => {
    !blogList && reject(new Error("No blogs has been received."));
    const list = blogList.map((blog) =>
      console.log(`Title: ${blog.title} - Author: ${blog.author}`)
    );

    list
      ? resolve(blogList)
      : reject(new Error("Cannot list blogs, please try again later."));
  });
};

await listAllBlogs(blogs).catch((e) => console.log("Error: ", e.message));
