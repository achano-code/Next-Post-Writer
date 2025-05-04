import { allPOSTs } from 'contentlayer/generated'
import React from 'react'
import Image from 'next/image';

const page = () => {

  const posts = allPOSTs;
  return (
    <div className='container mx-auto max-w-4xl py-6 lg:py-10'>
      <div>
        <div className='space-y-4'>
          <h1 className='font-extrabold text-4xl ls:text-5xl tracking-tight'>
            Blog
          </h1>
          <p className='text-muted-foreground text-xl'>ContentLayerとMDXで書いています。</p>
        </div>
      </div>
      <hr className='my-8' />
      {posts.map((post) => (
        <article key={post._id}>
          {post.image && (
            <Image src={post.image} alt={post.title} width={804} height={452} className='rouded-md border bg-muted' />)}
          <h2 className='text-2xl font-extrabold'>{post.title}</h2>
          {post.description && (
            <p className='text-muted-foreground'>{post.description}</p>
          )}
        </article>
      ))}
    </div>
  )
}

export default page