import React from 'react'
import Image from 'next/image'
import Navbar from '../../../../components/Navbar'
import Images from '../../../../components/Images'
import Icons from '../../../../components/Icons'
import Comment from '../../../../components/Comment'

function page() {
  return (
    <div className='blog-page-container'>
        <section className='navbar-section'>
            <Navbar />
        </section>
        <section className='blog-page-section'>
           <div className='blog-page-content-container'>
           <div className='blog-page-heading'>
            <h1>My 7 Income Sources With One AI Tool</h1>
           </div>
            <div className='blog-page-description'>
                <p>This is my story</p>
            </div>
            <div className='blog-page-author-section'>
                <div className='blog-author-dp'>
                    <Image src={Images.Dp1} alt='img' className='author-dp-img'/>
                </div>
                <div className='blog-author-name'>
                    <h1>Greece Aberdeen</h1>
                </div>
            </div>
            <div className="blog-page-navbar">
                <div className='blog-page-navbar-left-items'>
                    <div className='blog-page-date'>
                        <h1>Jul 24, 2024</h1>
                    </div>
                </div>
                <div className='blog-page-navbar-right-items'>
                    <div className='blog-page-item-like'>
                        {Icons.thumbsup}
                        <div className='blog-page-item-like-count'>
                            <p>11.5K</p>
                        </div>
                    </div>
                    <div className='blog-page-item-comments'>
                        {Icons.chatbubble}
                        <div className='blog-page-item-comment-count'>
                            <p>416</p>
                        </div>
                    </div>
                    <div className='blog-page-item-3dots'>
                        {Icons.threedots}
                    </div>
                </div>
            </div>
            <div className='blog-page-image'>
                <div className='blog-page-image-container'>
                    <Image src={Images.Blog1} alt='img' className='blog-page-img'/>
                </div>
            </div>
            <div className='blog-page-content'>
                <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis accusamus totam quod cumque, perspiciatis provident culpa vel aspernatur quisquam dicta eligendi? Tenetur, delectus fugit. Ex minus quam in sit aspernatur.
                    Voluptas id repellendus reprehenderit repellat sed blanditiis placeat eveniet doloremque culpa, aspernatur dignissimos maxime officia quidem veritatis distinctio exercitationem quae modi inventore eos illo obcaecati suscipit optio. Consequuntur, itaque ipsam.
                    Ipsa quos dolores eos a esse qui corporis ea vitae aperiam possimus eius, quibusdam deserunt fugiat, quisquam provident fuga eaque perferendis reiciendis, repudiandae nulla facere. Ipsa consequatur vel fuga nam.
                    Vel, velit consequuntur non libero reiciendis sequi sint obcaecati aut dignissimos, enim dolorem accusantium perspiciatis repellat. Ex illum blanditiis fugit. Id veniam tempora tempore? Necessitatibus consectetur maxime recusandae ratione assumenda?
                    Quod, dolorum perspiciatis autem, maiores eum magni sunt fugit aperiam, necessitatibus quo consequatur blanditiis voluptatibus amet doloremque. Quibusdam laboriosam, dolores aperiam dolor iste debitis maxime labore itaque. Commodi, sunt fugiat?
                    Debitis, delectus assumenda non cumque aliquam aliquid tenetur excepturi voluptatem recusandae quo expedita praesentium laudantium natus omnis ad. Dolorem qui necessitatibus ab et aliquid facere nihil molestiae harum adipisci voluptatum?
                    Libero suscipit recusandae, qui iste aspernatur voluptatem molestiae corporis asperiores nulla impedit harum mollitia magnam quo aperiam amet in dicta ipsam temporibus dignissimos necessitatibus illo eaque! Dolore exercitationem aliquam nisi?
                    Distinctio hic, quibusdam adipisci placeat sapiente ex voluptatem optio provident. Officia sapiente reiciendis commodi ut, omnis quia labore neque vel earum, consequatur quod magnam vero temporibus incidunt voluptatibus cumque sint?
                    Amet perspiciatis distinctio dolorem sunt accusamus impedit eaque. Optio laborum impedit mollitia nihil, nam consequatur nemo! Cum, quaerat fuga. Praesentium quia architecto consequuntur sequi voluptates maxime perferendis iusto eum animi?
                    Obcaecati dolor porro, voluptates quos eligendi, alias ullam corporis ratione officia est voluptatum totam mollitia quasi facilis, esse minus quibusdam modi. Vero quam quis soluta laudantium ratione nostrum, tempora placeat?
                </h1>
            </div>
            <div className='blog-page-comment-section'>
                <Comment />
            </div>
           </div>
        </section>
    </div>
  )
}

export default page