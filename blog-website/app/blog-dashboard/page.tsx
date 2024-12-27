import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "../../components/Navbar";
import Images from "../../components/Images";
import Icons from "../../components/Icons";

function page() {
  return (
    <div className='blog-dashboard-container'>
        <section className='navbar-section'>
            <Navbar />
        </section>

        <div className="content-break-line"></div>

        <section className='blog-section' id='blog-dashboard'>
            <div className='blog-container' id='blog-1'>
            <div className='blog-content'>
                    <div className='blog-author'>
                        <div className='blog-author-dp'>
                            <Image src={Images.Dp1} alt='img' className='author-dp-img'/>
                        </div>
                        <div className='blog-author-name'>
                            <h1>Greece Aberdeen</h1>
                        </div>
                    </div>
                    <div className='blog-heading'>
                        <div className='blog-title'>
                            <Link href='/blog-dashboard/blogs/blog1'>
                            <h1>My 7 Income Sources With One AI Tool</h1>
                            </Link>
                        </div>
                        <div className='blog-description'>
                            <p>this is my story</p>
                        </div>
                    </div>
                    <div className='blog-items'>
                        <div className='blog-items-left'>
                            <div className='blog-item-date'>
                                <p>July 24 2024</p>
                            </div>
                        </div>
                        <div className='blog-items-right'>
                        <div className='blog-item-like'>
                                {Icons.thumbsup}
                            </div>
                            <div className='blog-item-comment'>
                                {Icons.chatbubble}
                            </div>
                            <div className='blog-item-3dots'>
                                {Icons.threedots}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='blog-thumbnail'>
                    <Image src={Images.Blog1} alt='img' className='blog-thumbnail-img'/>
                </div>
            </div>

            <div className='content-break-line'></div>

            <div className='blog-container' id='blog-2'>
            <div className='blog-content'>
                    <div className='blog-author'>
                        <div className='blog-author-dp'>
                            <Image src={Images.Dp3} alt='img' className='author-dp-img'/>
                        </div>
                        <div className='blog-author-name'>
                            <h1>Luis Rogue</h1>
                        </div>
                    </div>
                    <div className='blog-heading'>
                        <div className='blog-title'>
                            <Link href='/blog-dashboard/blogs/blog2'>
                            <h1>Agentic AI: Building Autonomous Systems from Scratch</h1>
                            </Link>
                        </div>
                        <div className='blog-description'>
                            <p>A Step-by-Step Guide to Creating Multi-Agent Frameworks in the Age of Generative AI</p>
                        </div>
                    </div>
                    <div className='blog-items'>
                        <div className='blog-items-left'>
                            <div className='blog-item-date'>
                                <p>July 24 2024</p>
                            </div>
                        </div>
                        <div className='blog-items-right'>
                        <div className='blog-item-like'>
                                {Icons.thumbsup}
                            </div>
                            <div className='blog-item-comment'>
                                {Icons.chatbubble}
                            </div>
                            <div className='blog-item-3dots'>
                                {Icons.threedots}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='blog-thumbnail'>
                    <Image src={Images.Blog2} alt='img' />
                </div>
            </div>

            <div className='content-break-line'></div>

            <div className='blog-container' id='blog-3'>
            <div className='blog-content'>
                    <div className='blog-author'>
                        <div className='blog-author-dp'>
                            <Image src={Images.Dp2} alt='img' className='author-dp-img'/>
                        </div>
                        <div className='blog-author-name'>
                            <h1>Rachel Greenberg</h1>
                        </div>
                    </div>
                    <div className='blog-heading'>
                        <div className='blog-title'>
                            <Link href='blog-dashboard/blogs/blog3'>
                            <h1>The Big Entrepreneurial Problem With AI That No One Sees Coming</h1>
                            </Link>
                        </div>
                        <div className='blog-description'>
                            <p>It&apos;s already started happening to me, and it&apos;s only going to drive more founders mad if they don&apos;t spot it early.</p>
                        </div>
                    </div>
                    <div className='blog-items'>
                        <div className='blog-items-left'>
                            <div className='blog-item-date'>
                                <p>Dec 06 2024</p>
                            </div>
                        </div>
                        <div className='blog-items-right'>
                        <div className='blog-item-like'>
                                {Icons.thumbsup}
                            </div>
                            <div className='blog-item-comment'>
                                {Icons.chatbubble}
                            </div>
                            <div className='blog-item-3dots'>
                                {Icons.threedots}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='blog-thumbnail'>
                    <Image src={Images.Blog3} alt='img' />
                </div>
            </div>
        </section>
        <div className='content-break-line'></div>
    </div>
  )
}

export default page