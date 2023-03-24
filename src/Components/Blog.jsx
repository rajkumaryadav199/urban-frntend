import React from 'react'
 import "./Blog.css"

export default function Blog() {
  return (
    <div className="blogcon">
      <h1 className='blogname'>News</h1>

      <div className="blog">
        <div className="blog-img">
          <img  width="85%" height="530px"
          src=" https://cdn.shopify.com/s/files/1/2381/1785/articles/BLOG_OCT_4_budget_tips.jpg?v=1543554439&width=720" alt="blog-img" />

    </div>
    <div className="blog-text">
      <h3 className='stay'>  Staying well put together without really having...</h3>
      <p> For those of us who like to be fashionable and presentable at all times, here are a few easy <br/>hacks to follow. &nbsp; Pick wrinkle free shirts - they’re hassle...
        </p>


    </div>


    </div>

    <div className='subblog'>
      <div  className='rightblog'>
        <img width="90%" src='https://cdn.shopify.com/s/files/1/2381/1785/articles/BLOG_OCT_3_brunch_fashion.jpg?v=1542705591&width=720' alt="blog-img" />
       <p>The evolution of Brunch Fashion</p>
       <p>The term ‘Brunch’ evolved from a combination of Breakfast<br/> and Lunch. This would imply a relaxed session of grazing <br/>around a spread that would be filling enough for you to ...</p>
      </div>
      <div className='rightblog'>
        <img width="78%" height="310px" src='https://cdn.shopify.com/s/files/1/2381/1785/articles/BLOG_OCT_2_spending_habits.jpg?v=1542355330&width=720' alt="blog-img" />
      <p>Spending in the name of Fashion</p>
      <p>Ever since currencies were invented, human beings haven’t<br/> stopped shopping. The barter system of payment has in more<br/> recent times been replaced with the convenience of swiping <br/>debit and credit cards.</p>
      </div>
    </div>



{/* ////second blog */}
    <div className="blog">
        <div className="blog-img">
          <img  width="85%" height="530px"
          src=" https://cdn.shopify.com/s/files/1/2381/1785/articles/BLOG_OCT_1_festive_season.jpg?v=1541827722&width=720" alt="blog-img" />

    </div>
    <div className="blog-text">
      <h3 className='stay'>   RETAIL ROLLER COASTER</h3>
      <p>  India has always been the kind of market where her people take festive shopping really <br/>seriously. What is an Indian festival without the mandatory new clothes, gifts and makeovers  </p>


    </div>

    </div>



    <div className='subblog'>
      <div className='rightblog'>
        <img width="90%" src=' https://cdn.shopify.com/s/files/1/2381/1785/articles/BLOG_responsible_buying.jpg?v=1538551498&width=720' alt="blog-img" />
       <p> “What am I going to wear today?” - <br/>rethinking o...</p>
       <p> Of all the pollutants on earth, the Fashion and Textile industry<br/> is known to be the second largest contributor (next only to the <br/>oil industry). Staggering estimates show the industry</p>
      </div>
      <div className='rightblog'>
        <img width="78%"  height="300px" src=' https://cdn.shopify.com/s/files/1/2381/1785/articles/BLOG_color_psychology.jpg?v=1537964297&width=720' alt="blog-img" />
      <p> Colour Psychology and the power of <br/>dressing</p>
      <p> Colour plays a crucial part in how we see ourselves and how <br/> the world sees us everyday. In a professional environment, it <br/>can send out right or wrong signals and...</p>
      </div>
    </div>


    </div>
  )
}
