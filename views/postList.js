// const html = require('html-template-tag')

// module.exports = message => 
// html`<!DOCTYPE html>
// <html>
// <head>
//   <title>Wizard News</title>
//   <link rel="stylesheet" href="/style.css" />
// </head>
// <body>
//   <div class="news-list">
//     <header><img src="/logo.png"/>Wizard News</header>
//     ${posts
//       .map(
//         (post) => `
//       <div class='news-item'>
//         <p>
//           <span class="news-position">${post.id}. ▲</span>${post.title}
//           <a href="/posts/${post.id}">${post.title}</a>
//           <small>(by ${post.name})</small>
//         </p>
//         <small class="news-info">
//           ${post.upvotes} upvotes | ${time(post.date)}
//         </small>
//       </div>`
//       )
//       .join("")}
//   </div>
// </body>
// </html>`